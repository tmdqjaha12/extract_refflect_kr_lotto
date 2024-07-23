import pandas as pd
import numpy as np
from keras.models import Sequential, load_model
from keras.layers import LSTM, Dense
import os
from firestore_util import read_lotto_data_from_local, get_firestore_client
from datetime import datetime
import requests
import argparse
import json
import sys
from bs4 import BeautifulSoup

# Firestore 클라이언트 초기화
db = get_firestore_client()

# 모든 일자의 7자리 번호를 가져옵니다.
def get_all_numbers(df):
    return df['numbers'].tolist()

# 특정 N년의 7자리 번호를 가져옵니다.
def get_numbers_by_year(df, year):
    filtered_df = df[df['date'].dt.year == year]
    return get_all_numbers(filtered_df)

# 모든 연도의 특정 N월 들의 7자리 번호를 가져옵니다.
def get_numbers_by_month(df, month):
    filtered_df = df[df['date'].dt.month == month]
    return get_all_numbers(filtered_df)

# 모든 연도의 특정 N일 들의 7자리 번호를 가져옵니다.
def get_numbers_by_day(df, day):
    filtered_df = df[df['date'].dt.day == day]
    return get_all_numbers(filtered_df)

# 모든 연도의 특정 N주차 들의 7자리 번호를 가져옵니다.
def get_numbers_by_week(df, week):
    filtered_df = df[df['date'].dt.isocalendar().week == week]
    return get_all_numbers(filtered_df)

# 모든 연도의 특정 N월의 특정 Y주차의 7자리 번호를 가져옵니다.
def get_numbers_by_month_and_week(df, month, week):
    filtered_df = df[(df['date'].dt.month == month) & (df['date'].dt.isocalendar().week == week)]
    return get_all_numbers(filtered_df)

# 로또 데이터를 전처리하여 학습 데이터와 라벨로 변환합니다.
def preprocess_data(numbers):
    X = []
    y = []

    numbers = [list(map(int, num)) for num in numbers]

    for i in range(len(numbers) - 1):
        X.append(numbers[i])
        y.append(numbers[i + 1])

    X = np.array(X)
    y = np.array(y)

    # Check if the data shape is consistent
    if len(X.shape) != 2 or X.shape[1] != 7:
        raise ValueError("Input data is not in the correct shape.")

    return X, y

# 모델을 학습하거나 기존 모델을 불러옵니다.
def train_or_load_model(X, y, model_file, lstm_units=50, epochs=100, batch_size=10):
    try:
        if os.path.exists(model_file):
            # 모델 불러오기
            model = load_model(model_file)
            print("Loaded model from disk")
        else:
            # 새로운 모델 생성
            model = Sequential()
            model.add(LSTM(lstm_units, activation='relu', input_shape=(X.shape[1], 1)))
            model.add(Dense(7))
            print("Created a new model")

        # 모델 컴파일
        model.compile(optimizer='adam', loss='mse')

        # 모델 학습
        model.fit(X, y, epochs=epochs, batch_size=batch_size, verbose=1)

        # 모델 저장
        model.save(model_file)
        print("Saved model to disk")

        return model
    except Exception as e:
        print(f"Error in training or loading the model: {e}")
        sys.exit(1)

# 다음 회차의 로또 번호를 예측합니다.
def predict_next_numbers(model, last_input):
    try:
        last_input = last_input.astype(np.float32)
        predicted_numbers = model.predict(last_input)
        predicted_numbers = np.round(predicted_numbers).astype(int)

        # Ensure predicted numbers are within the lotto range
        predicted_numbers = np.clip(predicted_numbers, 1, 45)

        return predicted_numbers
    except Exception as e:
        print(f"Error in predicting the numbers: {e}")
        sys.exit(1)

def save_to_firestore(data_type, data_type_args, numbers, user_id, round_number):
    try:
        now = datetime.utcnow()
        numbers_list = numbers.flatten().tolist()
        collection_ref = db.collection('raffle_lotto_numbers')

        doc_ref = collection_ref.add({
            'type': data_type,
            'type_args': data_type_args,
            'date': now.strftime('%Y/%m/%d %H:%M:%S'),
            'numbers': numbers_list,
            'id': user_id,
            'round': round_number,
            'winning_flag': False,
            'winning_rank': None,
            'winning_amount': None,
            'meta': {
                'model': 'LSTM',
                'units': 50,
                'epochs': 100,
                'batch_size': 10
            }
        })
        
        print(f"Data saved to Firestore with document ID: {doc_ref[1].id}")
    except Exception as e:
        print(f"Error in saving to Firestore: {e}")

def max_round():
    try:
        url = "https://dhlottery.co.kr/common.do?method=main"
        response = requests.get(url)
        html = response.text
        soup = BeautifulSoup(html, "lxml")
        max_numb = soup.find(name="strong", attrs={"id": "lottoDrwNo"}).text
        return int(max_numb)
    except Exception as e:
        print(f"Error in getting max round number: {e}")
        sys.exit(1)

def get_actual_numbers(round_number):
    try:
        url = f"https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo={round_number}"
        response = requests.get(url)
        data = response.json()
        return [data[f"drwtNo{i}"] for i in range(1, 7)] + [data["bnusNo"]]
    except Exception as e:
        print(f"Error in getting actual numbers: {e}")
        sys.exit(1)

def compare_numbers(predicted, actual):
    correct_numbers = len(set(predicted) & set(actual[:6]))
    bonus_match = actual[6] in predicted
    return correct_numbers, bonus_match

def main():
    parser = argparse.ArgumentParser(description="Process lotto data.")
    parser.add_argument("--type", type=int, required=True, help="Type of data to process (1-5)")
    parser.add_argument("--year", type=int, help="Year for the data")
    parser.add_argument("--month", type=int, help="Month for the data")
    parser.add_argument("--day", type=int, help="Day for the data")
    parser.add_argument("--week", type=int, help="Week for the data")
    parser.add_argument("--id", type=str, help="Id for User")
    parser.add_argument("--n_iter", type=int, default=1, help="Number of iterations to predict")
    parser.add_argument("--lstm_units", type=int, default=50, help="Number of LSTM units")
    parser.add_argument("--epochs", type=int, default=100, help="Number of training epochs")
    parser.add_argument("--batch_size", type=int, default=10, help="Training batch size")

    args = parser.parse_args()

    try:
        df = read_lotto_data_from_local()
    except Exception as e:
        print(f"Error in reading lotto data: {e}")
        sys.exit(1)

    if args.type == 1:
        result = get_all_numbers(df)
        type_args = 0
    elif args.type == 2:
        result = get_numbers_by_year(df, args.year)
        type_args = args.year
    elif args.type == 3:
        result = get_numbers_by_month(df, args.month)
        type_args = args.month
    elif args.type == 4:
        result = get_numbers_by_day(df, args.day)
        type_args = args.day
    elif args.type == 5:
        result = get_numbers_by_week(df, args.week)
        type_args = args.week
    else:
        print(json.dumps({"error": "Invalid type value"}))
        sys.exit(1)
    
    X, y = preprocess_data(result)
    X = np.reshape(X, (X.shape[0], 1, X.shape[1]))

    model_file = './lotto_model.keras'
    model = train_or_load_model(X, y, model_file, lstm_units=args.lstm_units, epochs=args.epochs, batch_size=args.batch_size)

    last_input = np.array(result[-1]).reshape((1, 1, 7)).astype(np.float32)

    max_draw_no = max_round()  # 최신 회차 번호를 한 번만 가져옵니다.

    for i in range(args.n_iter):
        predicted_numbers = predict_next_numbers(model, last_input)
        print("Predicted Numbers:", predicted_numbers)

        save_to_firestore(args.type, type_args, predicted_numbers, args.id, max_draw_no + 1)

        last_input = predicted_numbers.reshape((1, 1, 7)).astype(np.float32)

    # Compare the last predicted numbers with the actual numbers
    actual_numbers = get_actual_numbers(max_draw_no)
    correct_numbers, bonus_match = compare_numbers(predicted_numbers[0], actual_numbers)
    print(f"Actual Numbers: {actual_numbers}")
    print(f"Correct Numbers: {correct_numbers}, Bonus Match: {bonus_match}")

    print(json.dumps(result))

if __name__ == "__main__":
    main()

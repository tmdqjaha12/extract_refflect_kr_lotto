import pandas as pd
import numpy as np
from keras.models import Sequential, load_model
from keras.layers import LSTM, Dense
import os
from firestore_util import read_lotto_data_from_firestore, db
from datetime import datetime
import uuid

# 모든 일자의 7자리 번호를 가져옵니다.
def get_all_numbers(df):
    """
    데이터프레임의 모든 로또 번호를 리스트로 반환합니다.
    
    Args:
        df (pd.DataFrame): 로또 데이터가 담긴 데이터프레임

    Returns:
        list: 모든 로또 번호 리스트
    """
    return df['numbers'].tolist()

# 특정 N년의 7자리 번호를 가져옵니다.
def get_numbers_by_year(df, year):
    """
    특정 연도의 로또 번호를 리스트로 반환합니다.
    
    Args:
        df (pd.DataFrame): 로또 데이터가 담긴 데이터프레임
        year (int): 연도

    Returns:
        list: 해당 연도의 로또 번호 리스트
    """
    filtered_df = df[df['date'].dt.year == year]
    return get_all_numbers(filtered_df)

# 모든 연도의 특정 N월 들의 7자리 번호를 가져옵니다.
def get_numbers_by_month(df, month):
    """
    특정 월의 모든 연도의 로또 번호를 리스트로 반환합니다.
    
    Args:
        df (pd.DataFrame): 로또 데이터가 담긴 데이터프레임
        month (int): 월

    Returns:
        list: 해당 월의 로또 번호 리스트
    """
    filtered_df = df[df['date'].dt.month == month]
    return get_all_numbers(filtered_df)

# 모든 연도의 특정 N일 들의 7자리 번호를 가져옵니다.
def get_numbers_by_day(df, day):
    """
    특정 일의 모든 연도의 로또 번호를 리스트로 반환합니다.
    
    Args:
        df (pd.DataFrame): 로또 데이터가 담긴 데이터프레임
        day (int): 일

    Returns:
        list: 해당 일의 로또 번호 리스트
    """
    filtered_df = df[df['date'].dt.day == day]
    return get_all_numbers(filtered_df)

# 모든 연도의 특정 N주차 들의 7자리 번호를 가져옵니다.
def get_numbers_by_week(df, week):
    """
    특정 주차의 모든 연도의 로또 번호를 리스트로 반환합니다.
    
    Args:
        df (pd.DataFrame): 로또 데이터가 담긴 데이터프레임
        week (int): 주차

    Returns:
        list: 해당 주차의 로또 번호 리스트
    """
    filtered_df = df[df['date'].dt.isocalendar().week == week]
    return get_all_numbers(filtered_df)

# 모든 연도의 특정 N월의 특정 Y주차의 7자리 번호를 가져옵니다.
def get_numbers_by_month_and_week(df, month, week):
    """
    특정 월의 특정 주차의 모든 연도의 로또 번호를 리스트로 반환합니다.
    
    Args:
        df (pd.DataFrame): 로또 데이터가 담긴 데이터프레임
        month (int): 월
        week (int): 주차

    Returns:
        list: 해당 월의 해당 주차의 로또 번호 리스트
    """
    filtered_df = df[(df['date'].dt.month == month) & (df['date'].dt.isocalendar().week == week)]
    return get_all_numbers(filtered_df)

# 로또 데이터를 전처리하여 학습 데이터와 라벨로 변환합니다.
def preprocess_data(numbers):
    """
    로또 번호 데이터를 LSTM 모델에 맞게 전처리합니다.
    
    Args:
        numbers (list): 로또 번호 리스트 (각 번호는 [num1, num2, ..., num7] 형식)

    Returns:
        tuple: 전처리된 입력 데이터 (X)와 라벨 (y)
    """
    X = []
    y = []

    # 문자열을 숫자로 변환 (여기서는 변환 과정이 필요 없지만, 안전성을 위해 리스트의 정수형 변환)
    numbers = [list(map(int, num)) for num in numbers]

    for i in range(len(numbers) - 1):
        X.append(numbers[i])
        y.append(numbers[i + 1])

    X = np.array(X)
    y = np.array(y)

    return X, y

# 모델을 학습하거나 기존 모델을 불러옵니다.
def train_or_load_model(X, y, model_file):
    """
    로또 번호 예측 모델을 학습하거나 기존 모델을 불러옵니다.
    
    Args:
        X (np.array): 입력 데이터
        y (np.array): 라벨 데이터
        model_file (str): 모델 파일 경로

    Returns:
        Sequential: 학습된 모델
    """
    if os.path.exists(model_file):
        model = load_model(model_file, compile=False)
        model.compile(optimizer='adam', loss='mse')
        print("Loaded model from disk and recompiled")
        model.fit(X, y, epochs=100, batch_size=10, verbose=1)
        model.save(model_file)
        print("Updated model saved to disk")
    else:
        model = Sequential()
        model.add(LSTM(50, activation='relu', input_shape=(X.shape[1], X.shape[2])))
        model.add(Dense(7))
        model.compile(optimizer='adam', loss='mse')
        model.fit(X, y, epochs=100, batch_size=10, verbose=1)
        model.save(model_file)
        print("Saved model to disk")

    return model

# 다음 회차의 로또 번호를 예측합니다.
def predict_next_numbers(model, last_input):
    """
    다음 회차의 로또 번호를 예측합니다.
    
    Args:
        model (Sequential): 학습된 모델
        last_input (np.array): 마지막 입력 데이터

    Returns:
        np.array: 예측된 로또 번호
    """
    # NumPy 배열을 float32 타입으로 변환
    last_input = last_input.astype(np.float32)
    
    # 예측 수행
    predicted_numbers = model.predict(last_input)
    
    # 예측된 번호를 반올림하고 정수형으로 변환
    predicted_numbers = np.round(predicted_numbers).astype(int)
    
    return predicted_numbers

def save_to_firestore(data_type, numbers, user_id, round_number):
    """
    예측된 로또 번호를 Firestore에 숫자 기반 ID로 저장하는 함수.
    
    Args:
        data_type (int): 데이터 타입 (0, 1, 2, 3, 4, 5)
        numbers (np.array): 예측된 로또 번호 (NumPy 배열)
        user_id (str): 고유 사용자 ID 또는 게스트 ID
        round_number (int): 로또 회차 번호
    """ 
    
    # 현재 시간
    now = datetime.utcnow()
    
    # NumPy 배열을 리스트로 변환
    numbers_list = numbers.flatten().tolist()
    
    # 컬렉션 참조
    collection_ref = db.collection('raffle_lotto_numbers')
    
    # 문서 추가
    doc_ref = collection_ref.add({
        'type': data_type,
        'date': now.strftime('%Y/%m/%d %H:%M:%S'),
        'numbers': numbers_list,  # NumPy 배열을 리스트로 변환하여 저장
        'id': user_id,
        'round': round_number,  # 추가된 필드
        'winning_flag': False,  # 기본값은 False
        'winning_rank': None,   # 기본값은 None
        'winning_amount': None  # 기본값은 None
    })
    
    print(f"Data saved to Firestore with document : {doc_ref}")

# 예시 데이터 추첨 및 저장
if __name__ == "__main__":
        # Firestore에서 데이터 읽기
    df = read_lotto_data_from_firestore()

    # 예를 들어 `get_numbers_by_year`를 호출하여 데이터를 가져왔다고 가정
    year = 2023
    numbers_in_year = get_numbers_by_year(df, year)  # 실제 데이터로 교체
    
    # 데이터 프레임 생성
    lotto_df = pd.DataFrame(numbers_in_year, columns=['num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'bonus'])

    # 데이터 전처리
    X, y = preprocess_data(numbers_in_year)

    # 데이터 차원 변경 (LSTM 입력에 맞게)
    X = np.reshape(X, (X.shape[0], 1, X.shape[1]))

    # 모델 파일 경로
    model_file = './lotto_model.keras'

    # 모델 학습 또는 불러오기
    model = train_or_load_model(X, y, model_file)

    # 다음 회차 예측
    last_input = np.array(lotto_df.iloc[-1]).reshape((1, 1, 7)).astype(np.float32)
    predicted_numbers = predict_next_numbers(model, last_input)
    print("Predicted Numbers:", predicted_numbers)

    # 저장할 데이터 예시
    data_type = 1  # 예: 특정 연도의 번호
    user_id = 'guest_123'  # 유저 ID 또는 게스트 ID
    round = 1

    # 데이터 저장
    save_to_firestore(data_type, predicted_numbers, user_id, round)
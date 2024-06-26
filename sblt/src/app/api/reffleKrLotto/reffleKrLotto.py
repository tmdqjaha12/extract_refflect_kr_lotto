# readData.py 파일에서 필요한 함수들을 import합니다.
from readData import read_lotto_data, get_numbers_by_year, get_numbers_by_month

# 테스트를 위한 CSV 파일 경로
csv_file = "./../updateKrLotto/lottoRes.csv"

# CSV 파일 읽어들이기
lotto_data = read_lotto_data(csv_file) 

# 특정 연도의 로또 번호 가져오기
year = 2023
numbers_in_year = get_numbers_by_year(lotto_data, year) # TODO데이터 타입 예시: [3, 4, 12, 14, 25, 43, 17, 596, Timestamp('2014-05-03 00:00:00')]
# print(f"Lotto numbers in {year}: {numbers_in_year}")


import pandas as pd
import numpy as np
from keras.models import Sequential, load_model
from keras.layers import LSTM, Dense
import os

lotto_df = pd.DataFrame(numbers_in_year, columns=['num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7', 'round', 'date'])

# 데이터 전처리 함수
def preprocess_data(df):
    X = []
    y = []

    # NaN 값을 해당 열의 평균값으로 대체
    for col in ['num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7']:
        if df[col].isnull().any():
            df[col].fillna(df[col].mean(), inplace=True)

    for i in range(len(df) - 1):
        X.append(df.iloc[i][['num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7']].values.astype(int))
        y.append(df.iloc[i + 1][['num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7']].values.astype(int))

    # LSTM 모델의 출력 형식에 맞게 y의 형태 변경
    y = np.array(y)
    return np.array(X), np.array(y)

# 데이터 프레임 생성
lotto_df = pd.DataFrame(numbers_in_year, columns=['num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7', 'round', 'date'])

# 데이터 전처리
X, y = preprocess_data(lotto_df)

# 데이터 차원 변경 (LSTM 입력에 맞게)
X = np.reshape(X, (X.shape[0], 1, X.shape[1]))

# 모델 파일 경로
model_file = './lotto_model.h5'

# 모델이 저장되어 있으면 불러오고, 그렇지 않으면 새로 학습
if os.path.exists(model_file):
    model = load_model(model_file, compile=False)  # compile=False로 모델 불러오기
    model.compile(optimizer='adam', loss='mse')  # 컴파일 다시 하기
    print("Loaded model from disk and recompiled")
    
    # 기존 모델에 새로운 데이터로 추가 학습
    model.fit(X, y, epochs=200, batch_size=10, verbose=1)  # 추가 학습
    model.save(model_file)  # 모델 저장
    print("Updated model saved to disk")
else:
    # LSTM 모델 정의
    model = Sequential()
    model.add(LSTM(50, activation='relu', input_shape=(1, 7)))
    model.add(Dense(7))
    model.compile(optimizer='adam', loss='mse')

    # 모델 학습
    model.fit(X, y, epochs=200, batch_size=10, verbose=1)
    
    # 학습된 모델 저장
    model.save(model_file)
    print("Saved model to disk")

# 다음 회차 예측
last_input = np.array(lotto_df[['num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7']].iloc[-1]).reshape((1, 1, 7))
predicted_numbers = model.predict(last_input)
predicted_numbers = np.round(predicted_numbers).astype(int)
print("Predicted Numbers:", predicted_numbers)


###########################################################################################################################################################################################

import csv

def save_numbers_to_csv(numbers, csv_file):
    with open(csv_file, 'a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(numbers)
        
# 추첨된 번호를 파일에 저장
save_numbers_to_csv(predicted_numbers.flatten(), 'predicted_numbers.csv')

###########################################################################################################################################################################################

# # 예측을 여러 번 수행하여 예측의 분포를 분석
# def predict_multiple_times(model, last_input, n_predictions=100):
#     predictions = []
#     for _ in range(n_predictions):
#         prediction = model.predict(last_input)
#         predictions.append(prediction.flatten())
#     return np.array(predictions)

# # 여러 번 예측을 수행하여 예측의 분포를 얻음
# n_predictions = 1000
# predictions = predict_multiple_times(model, last_input, n_predictions)

# # 각 숫자별로 신뢰 구간 계산
# means = np.mean(predictions, axis=0)
# std_devs = np.std(predictions, axis=0)

# # 신뢰 구간 계산 (95% 신뢰 구간)
# confidence_intervals = [(mean - 1.96*std, mean + 1.96*std) for mean, std in zip(means, std_devs)]

# # 결과 출력
# print("Predicted Numbers with Confidence Intervals:")
# for i, (mean, interval) in enumerate(zip(means, confidence_intervals)):
#     print(f"Number {i+1}: {mean:.2f} (95% CI: {interval[0]:.2f} - {interval[1]:.2f})")

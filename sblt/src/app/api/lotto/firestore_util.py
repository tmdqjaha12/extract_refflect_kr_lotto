import os
from dotenv import load_dotenv
import firebase_admin
from firebase_admin import credentials, firestore
import pandas as pd
import json

file_path="./src/app/api/lotto/lotto_results.json"

# .env 파일에서 환경 변수 로드
load_dotenv()

# 환경 변수에서 값 가져오기
firebase_service_account_key = os.getenv('SERVICE_ACCOUNT_KEY')

# Firebase Admin SDK 초기화
cred = credentials.Certificate(firebase_service_account_key)
firebase_admin.initialize_app(cred)

# Firestore 클라이언트 초기화
db = firestore.client()

def get_firestore_client():
    """
    Firestore 클라이언트를 반환하는 함수.
    
    Returns:
        Firestore client object
    """
    return db

def save_lotto_data_locally(data):
    """
    로또 데이터를 로컬 파일에 저장하는 함수.
    
    Args:
        data (list): 저장할 로또 데이터 리스트
    """
    with open(file_path, 'w') as f:
        json.dump(data, f)

def load_lotto_data_locally():
    """
    로컬 파일에서 로또 데이터를 읽어와 반환하는 함수.
    
    Returns:
        list: 로컬 파일에 저장된 로또 데이터 리스트
    """
    if os.path.exists(file_path):
        with open(file_path, 'r') as f:
            return json.load(f)
    return []

def read_lotto_data_from_local():
    """
    로컬 파일에서 로또 데이터를 읽어와 데이터프레임으로 반환하는 함수.
    
    Returns:
        pd.DataFrame: 로또 데이터가 담긴 데이터프레임
    """
    data = load_lotto_data_locally()

    # 데이터프레임 생성
    df = pd.DataFrame(data, columns=['draw_no', 'date', 'num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'bonus'])
    
    # 날짜 형식으로 변환
    df['date'] = pd.to_datetime(df['date'])
    
    # numbers 열 생성
    df['numbers'] = df.apply(lambda row: [row['num1'], row['num2'], row['num3'], row['num4'], row['num5'], row['num6'], row['bonus']], axis=1)
    
    # 필요없는 열 제거
    df.drop(columns=['num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'bonus'], inplace=True)
    
    return df

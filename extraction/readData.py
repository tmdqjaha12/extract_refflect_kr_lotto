import pandas as pd

# CSV 파일 읽어들이기
def read_lotto_data(csv_file):
    df = pd.read_csv(csv_file, header=None)
    
    # round 열 생성
    df['round'] = df[0]
    
    # date 열 생성 (첫 번째 열을 기준으로 하여 일자만 추출)
    df['date'] = df[1].apply(lambda x: x.split(',')[0])
    # 날짜 형식으로 변환
    df['date'] = pd.to_datetime(df['date'])
    
    # numbers 열 생성
    df['numbers'] = df.apply(lambda row: list(row[2:]), axis=1)
    
    # 필요없는 열 제거
    df.drop(columns=[0, 1], inplace=True)
    
    return df

# 모든 일자의 7자리 번호
def get_all_numbers(df):
    return df['numbers'].tolist()

# 특정 N년의 7자리 번호
def get_numbers_by_year(df, year):
    filtered_df = df[df['date'].dt.year == year]
    return get_all_numbers(filtered_df)

# 모든 연도의 특정 N월 들의 7자리 번호
def get_numbers_by_month(df, month):
    filtered_df = df[df['date'].dt.month == month]
    return get_all_numbers(filtered_df)

# 모든 연도의 특정 N일 들의 7자리 번호
def get_numbers_by_day(df, day):
    filtered_df = df[df['date'].dt.day == day]
    return get_all_numbers(filtered_df)

# 모든 연도의 특정 N주차 들의 7자리 번호
def get_numbers_by_week(df, week):
    filtered_df = df[df['date'].dt.isocalendar().week == week]
    return get_all_numbers(filtered_df)

# 모든 연도의 특정 N월의 특정 Y주차의 7자리 번호
def get_numbers_by_month_and_week(df, month, week):
    filtered_df = df[(df['date'].dt.month == month) & (df['date'].dt.isocalendar().week == week)]
    return get_all_numbers(filtered_df)

# # 테스트를 위한 CSV 파일 경로
# csv_file = "./lottoRes.csv"

# # CSV 파일 읽어들이기
# lotto_data = read_lotto_data(csv_file)

# TODO: 예시
# # 각 옵션별로 데이터 사용 예시
# all_numbers = get_all_numbers(lotto_data)
# numbers_by_year = get_numbers_by_year(lotto_data, 2022)
# numbers_by_month = get_numbers_by_month(lotto_data, 12)
# numbers_by_day = get_numbers_by_day(lotto_data, 7)
# numbers_by_week = get_numbers_by_week(lotto_data, 1)
# numbers_by_month_and_week = get_numbers_by_month_and_week(lotto_data, 12, 1)

# # 결과 확인
# print("All Numbers:", all_numbers)
# print("Numbers by Year (2022):", numbers_by_year)
# print("Numbers by Month (December):", numbers_by_month)
# print("Numbers by Day (7th):", numbers_by_day)
# print("Numbers by Week (1st week):", numbers_by_week)
# print("Numbers by Month and Week (December, 1st week):", numbers_by_month_and_week)
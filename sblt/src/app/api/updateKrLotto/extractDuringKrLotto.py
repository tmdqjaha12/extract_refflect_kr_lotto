import requests
from bs4 import BeautifulSoup
import csv
import os
import json

def get_lotto_numbers(draw_no):
    api_url = f"https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo={draw_no}"
    try:
        response = requests.get(api_url)
        response.raise_for_status()
        data = response.json()
        return {
            'drwNo': data['drwNo'],
            'date': data['drwNoDate'],
            'lottoNumb': [str(data[f"drwtNo{i}"]) for i in range(1, 7)],
            'bonusNumb': data['bnusNo']
        }
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}
    
def maxRound():
    url = "https://dhlottery.co.kr/common.do?method=main"
    html = requests.get(url).text
    soup = BeautifulSoup(html, "lxml")
    max_numb = soup.find(name="strong", attrs={"id": "lottoDrwNo"}).text
    return int(max_numb)


# 최신 회차 가져오기
maxCount = maxRound()

# 파일 경로 설정
file_path = 'lottoRes.csv'

# 파일이 존재하지 않으면 생성하고, 쓰기 권한 설정
if not os.path.exists(file_path):
    open(file_path, 'w').close()  # 빈 파일 생성

# 파일 쓰기
try:
    with open(file_path, 'w', newline='') as csvfile:
        # CSV 파일 쓰기
        writer = csv.writer(csvfile, delimiter=',')
        
        # 1회부터 최신 회차까지 크롤링
        for draw_no in range(1, maxCount+1):
            res = get_lotto_numbers(draw_no)
            # 순서 : 회차, 날짜, 로또번호1, 로또번호2, 로또번호3, 로또번호4, 로또번호5, 로또번호6, 로또번호7, 보너스번호
            writer.writerow([res.get('drwNo'), res.get('date')] + res.get('lottoNumb') + [res.get('bonusNumb')]) 
except Exception as e:
    # 파일 쓰기 작업 실패 시 예외 처리
    print(json.dumps({"success": False, "error": str(e)}))
else:
    # 파일 쓰기 작업이 정상적으로 완료되면 성공 메시지 출력
    print(json.dumps({"success": True}))
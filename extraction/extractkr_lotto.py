### 로또번호 추출 및 파이업베이스 저장 ###

import requests
from bs4 import BeautifulSoup
from firestore_util import get_firestore_client
from firebase_admin import firestore  # 추가된 부분

def get_lotto_numbers(draw_no):
    """
    주어진 회차 번호에 대한 로또 번호를 API에서 가져옵니다.
    
    Args:
        draw_no (int): 가져올 회차 번호

    Returns:
        dict: 회차 번호, 날짜, 로또 번호, 보너스 번호를 포함하는 딕셔너리
    """
    api_url = f"https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo={draw_no}"

    try:
        response = requests.get(api_url)
        response.raise_for_status()

        data = response.json()
        print(f"{draw_no}회 결과추출")
        
        return {
            'drwNo': data['drwNo'],
            'date': data['drwNoDate'], 
            'lottoNumb': [str(data[f"drwtNo{i}"]) for i in range(1, 7)], 
            'bonusNumb': data['bnusNo']
        }
        
    except requests.exceptions.RequestException as e:
        print(f"오류가 발생했습니다: {e}")

def maxRound():
    """
    로또 웹사이트 메인 페이지에서 최신 회차 번호를 가져옵니다.
    
    Returns:
        int: 최신 회차 번호
    """
    url = "https://dhlottery.co.kr/common.do?method=main"
    html = requests.get(url).text
    soup = BeautifulSoup(html, "lxml")
    max_numb = soup.find(name="strong", attrs={"id": "lottoDrwNo"}).text
    return int(max_numb)

def get_latest_draw_number(db):
    """
    Firestore에서 가장 큰 drwNo 값을 가져옵니다.
    
    Args:
        db: Firestore 클라이언트

    Returns:
        int: 가장 큰 drwNo 값 또는 None
    """
    docs = db.collection('lotto_results').order_by('draw_no', direction=firestore.Query.DESCENDING).limit(1).stream()
    for doc in docs:
        return doc.to_dict()['draw_no']
    return None

# Firestore 클라이언트 가져오기
db = get_firestore_client()

# 최신 회차 번호를 가져옵니다.
maxCount = maxRound()

# Firestore에서 가장 큰 drwNo 값을 가져옵니다.
latest_draw_no = get_latest_draw_number(db)

# 만약 데이터가 없다면 1회차부터 최신 회차까지 조회
if latest_draw_no is None:
    start_round = 1
else:
    start_round = latest_draw_no + 1

# start_round부터 최신 회차까지 반복하여 데이터를 가져옵니다.
for draw_no in range(start_round, maxCount + 1):
    res = get_lotto_numbers(draw_no)
    
    # Firestore에 데이터 저장
    if res:
        doc_ref = db.collection('lotto_results').document(str(res.get('drwNo')))
        doc_ref.set({
            'draw_no': res.get('drwNo'),
            'date': res.get('date'),
            'lotto_numbers': res.get('lottoNumb'),
            'bonus_number': res.get('bonusNumb')
        })
        print(f"회차 {res.get('drwNo')}의 데이터를 Firestore에 저장했습니다.")

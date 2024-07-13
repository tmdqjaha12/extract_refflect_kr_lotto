import requests
from bs4 import BeautifulSoup
import csv

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
        # API에 GET 요청을 보냅니다.
        response = requests.get(api_url)
        # 응답에 HTTP 오류 상태 코드가 포함되어 있는 경우 HTTPError를 발생시킵니다.
        response.raise_for_status()

        # JSON 응답을 파싱합니다.
        data = response.json()
        print(f"{draw_no}회 결과추출")
        
        # JSON 데이터에서 필요한 정보를 추출합니다.
        return {
            'drwNo': data['drwNo'],
            'date': data['drwNoDate'], 
            'lottoNumb': [str(data[f"drwtNo{i}"]) for i in range(1, 7)], 
            'bonusNumb': data['bnusNo']
        }
        
    except requests.exceptions.RequestException as e:
        # 요청 예외를 처리합니다.
        print(f"오류가 발생했습니다: {e}")

def maxRound():
    """
    로또 웹사이트 메인 페이지에서 최신 회차 번호를 가져옵니다.
    
    Returns:
        int: 최신 회차 번호
    """
    url = "https://dhlottery.co.kr/common.do?method=main"
    # URL에 GET 요청을 보냅니다.
    html = requests.get(url).text
    # BeautifulSoup을 사용하여 HTML 내용을 파싱합니다.
    soup = BeautifulSoup(html, "lxml")
    # HTML 내용에서 최신 회차 번호를 추출합니다.
    max_numb = soup.find(name="strong", attrs={"id": "lottoDrwNo"}).text
    return int(max_numb)

# 최신 회차 번호를 가져옵니다.
maxCount = maxRound()
draw_no = 1

# CSV 파일을 쓰기 모드로 엽니다.
with open('lottoRes.csv', 'w', newline='') as csvfile:
    # CSV 작성 객체를 만듭니다.
    writer = csv.writer(csvfile, delimiter=',')
    
    # 1회차부터 최신 회차까지 반복하여 데이터를 가져옵니다.
    for draw_no in range(1, maxCount + 1):
        # 현재 회차에 대한 로또 번호를 가져옵니다.
        res = get_lotto_numbers(draw_no)
        # 가져온 데이터를 CSV 파일에 씁니다.
        # 순서: 회차 번호, 날짜, 로또 번호 1, 로또 번호 2, 로또 번호 3, 로또 번호 4, 로또 번호 5, 로또 번호 6, 보너스 번호
        writer.writerow([res.get('drwNo'), res.get('date')] + res.get('lottoNumb') + [res.get('bonusNumb')])
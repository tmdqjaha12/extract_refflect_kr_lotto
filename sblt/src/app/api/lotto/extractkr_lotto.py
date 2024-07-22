import requests
from bs4 import BeautifulSoup
from firestore_util import save_lotto_data_locally, load_lotto_data_locally

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

# 로컬 파일에서 가장 큰 drwNo 값을 가져옵니다.
def get_latest_draw_number_from_local():
    data = load_lotto_data_locally()
    if data:
        return max(data, key=lambda x: x['draw_no'])['draw_no']
    return None

# 최신 회차 번호를 가져옵니다.
maxCount = maxRound()

# 로컬 파일에서 가장 큰 drwNo 값을 가져옵니다.
latest_draw_no = get_latest_draw_number_from_local()

# 만약 데이터가 없다면 1회차부터 최신 회차까지 조회
if latest_draw_no is None:
    start_round = 1
else:
    start_round = latest_draw_no + 1

# 로컬 파일에서 데이터를 가져옵니다.
local_data = load_lotto_data_locally()

# start_round부터 최신 회차까지 반복하여 데이터를 가져옵니다.
for draw_no in range(start_round, maxCount + 1):
    res = get_lotto_numbers(draw_no)
    
    # 로컬 파일에 데이터 저장
    if res:
        local_data.append({
            'draw_no': res.get('drwNo'),
            'date': res.get('date'),
            'num1': res.get('lottoNumb')[0],
            'num2': res.get('lottoNumb')[1],
            'num3': res.get('lottoNumb')[2],
            'num4': res.get('lottoNumb')[3],
            'num5': res.get('lottoNumb')[4],
            'num6': res.get('lottoNumb')[5],
            'bonus': res.get('bonusNumb')
        })
        print(f"회차 {res.get('drwNo')}의 데이터를 로컬 파일에 저장했습니다.")

# 최종 데이터를 로컬 파일에 저장
save_lotto_data_locally(local_data)

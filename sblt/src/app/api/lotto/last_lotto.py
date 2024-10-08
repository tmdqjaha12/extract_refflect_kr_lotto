import requests
from bs4 import BeautifulSoup
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

def max_round():
    url = "https://dhlottery.co.kr/common.do?method=main"
    response = requests.get(url)
    html = response.text
    soup = BeautifulSoup(html, "lxml")
    max_numb = soup.find(name="strong", attrs={"id": "lottoDrwNo"}).text
    return int(max_numb)

print(json.dumps(get_lotto_numbers(max_round())))
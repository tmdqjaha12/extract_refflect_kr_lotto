import requests 
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

import sys
draw_no = int(sys.argv[1])

print(json.dumps(get_lotto_numbers(draw_no)))
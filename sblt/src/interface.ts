// api-url: https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=<회차>

interface KorLottoReturnType {
  returnValue: "success" | "fail"; // 요청 결과
  drwNoDate?: string; // 추첨 일자
  totSellamnt?: number; // 총 상금액
  firstWinamnt?: number; // 1등 상금액
  firstPrzwnerCo?: number; // 1등 당첨 수
  firstAccumamnt?: number; // 1등 당첨 총 상금액
  drwNo?: number; // 회차
  drwtNo1?: number; // 번호 1
  drwtNo2?: number; // 번호 2
  drwtNo3?: number; // 번호 3
  drwtNo4?: number; // 번호 4
  drwtNo5?: number; // 번호 5
  drwtNo6?: number; // 번호 6
  bnusNo?: number; // 보너스 번호
}

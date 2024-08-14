import { exec } from "child_process";
import { NextRequest, NextResponse } from "next/server";

interface LottoResult {
  drwNo: number;
  date: string;
  lottoNumb: string[];
  bonusNumb: number;
  error?: string;
}

interface ExecPromiseReturnType {
  stdout: string;
  stderr: string;
}

export async function POST(request: NextRequest) {
  // 요청 본문에서 JSON 데이터 추출
  const body = await request.json();
  const type = body.type; // 1 ~ 5
  const typeArgs = body.typeArgs;
  const id = body.id;

  // drawNo가 없는 경우 에러 반환
  if (!type) {
    return NextResponse.json({ error: "drawNo field is required in the request body" }, { status: 400 });
  }

  try {
    // Python 스크립트 실행 및 인자 전달
    const { stdout, stderr } = await new Promise<ExecPromiseReturnType>((resolve, reject) => {
      // const command = `cd src/app/api/lotto && python lotto_analysis.py --type ${type} --year ${year || ""} --month ${
      //   month || ""
      // } --day ${day || ""} --week ${week || ""} --id ${id || ""}`;
      const command = `cd src/app/api/lotto && python lotto_analysis.py --type ${type} --typeArgs ${
        typeArgs || ""
      } --id ${id || ""}`;
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject({ stdout, stderr });
          return;
        }
        resolve({ stdout, stderr });
      });
    });

    // 결과를 JSON 형태로 파싱
    const result: LottoResult = JSON.parse(stdout);
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    // 에러 처리
    return NextResponse.json({ error: error.stderr || "An unknown error occurred" }, { status: 500 });
  }
}

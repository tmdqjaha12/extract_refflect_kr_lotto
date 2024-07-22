import { exec } from "child_process";
import { NextResponse } from "next/server";

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

export async function POST() {
  try {
    // 업데이트
    const { stdout, stderr } = await new Promise<ExecPromiseReturnType>((resolve, reject) => {
      exec("cd src/app/api/lotto && python extractkr_lotto.py", (error, stdout, stderr) => {
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

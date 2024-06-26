import { exec } from "child_process";
import { NextRequest, NextResponse } from "next/server";

interface ExecPromiseReturnType {
  stdout: string;
  stderr: string;
}

export async function GET(request: NextRequest) {
  try {
    const { stdout, stderr } = await new Promise<ExecPromiseReturnType>((resolve, reject) => {
      exec(`cd src/app/api/updateKrLotto && python extractDuringKrLotto.py`, (error, stdout, stderr) => {
        if (error) {
          reject({ error, stderr });
          return;
        }
        resolve({ stdout, stderr });
      });
    });

    // 파이썬 스크립트의 실행 결과를 출력
    console.log(stdout);

    return NextResponse.json({ message: "Python script executed successfully" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.stderr }, { status: 500 });
  }
}

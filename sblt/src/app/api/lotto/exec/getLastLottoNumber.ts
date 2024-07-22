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

export async function GET() {
  try {
    const { stdout, stderr } = await new Promise<ExecPromiseReturnType>((resolve, reject) => {
      exec(`cd src/app/api/lotto && python last_lotto.py`, (error, stdout, stderr) => {
        if (error) {
          reject({ error, stderr });
          return;
        }
        resolve({ stdout, stderr });
      });
    });

    const result: LottoResult = JSON.parse(stdout);
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.stderr }, { status: 500 });
  }
}

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

export async function GET(request: NextRequest) {
  const drawNo = request.nextUrl.searchParams.get("drawNo");

  if (!drawNo) {
    return NextResponse.json({ error: "drawNo query parameter is required" }, { status: 400 });
  }

  try {
    const { stdout, stderr } = await new Promise<ExecPromiseReturnType>((resolve, reject) => {
      exec(`cd src/app/api/getLatestKrLotto && python extractLatestKrLotto.py ${drawNo}`, (error, stdout, stderr) => {
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

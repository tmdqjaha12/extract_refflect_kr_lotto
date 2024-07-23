import fs from "fs";
import { NextResponse } from "next/server";

interface LottoResult {
  draw_no: number;
  date: string;
  num1: string;
  num2: string;
  num3: string;
  num4: string;
  num5: string;
  num6: string;
  bonus: number;
}

export async function GET() {
  try {
    // JSON 파일 읽기
    const data = fs.readFileSync("src/app/api/lotto/lotto_results.json", "utf-8");
    const result: LottoResult[] = JSON.parse(data);

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.stderr }, { status: 500 });
  }
}

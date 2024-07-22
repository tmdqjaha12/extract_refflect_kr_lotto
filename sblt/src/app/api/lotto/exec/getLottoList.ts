// app/api/createData/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../lib/firebaseAdmin";

interface Data {
  page: number;
  count: number;
  type: number;
  type_args?: number;
  round?: number;
  winning_flag?: boolean;
  winning_rank?: number;
}

export async function POST(request: NextRequest) {
  try {
    const { page, count, type, type_args, round, winning_flag, winning_rank }: Data = await request.json();

    // Create a query reference to the collection
    let query = db.collection("raffle_lotto_numbers").limit(count);

    // Apply filters based on the provided data
    if (type !== undefined) {
      query = query.where("type", "==", type);
    }
    if (type_args !== undefined) {
      query = query.where("type_args", "==", type_args);
    }
    if (round !== undefined) {
      query = query.where("round", "==", round);
    }
    if (winning_flag !== undefined) {
      query = query.where("winning_flag", "==", winning_flag);
    }
    if (winning_rank !== undefined) {
      query = query.where("winning_rank", "==", winning_rank);
    }
    if (page !== undefined) {
      // Assuming pagination logic: skip documents based on page number
      // For example, skip documents if `page` is 2 and `count` is 10, skip 10 documents
      query = query.offset((page - 1) * count);
    }

    // Execute the query
    const querySnapshot = await query.get();
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Failed to create document:", error);
    return NextResponse.json({ error: "Failed to create document" }, { status: 500 });
  }
}

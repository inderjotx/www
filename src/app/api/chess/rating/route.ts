import { NextRequest, NextResponse } from "next/server";
import { cachedRapidRating } from "@/lib/chess";

export const revalidate = 60 * 60 * 24  // 1 day 


export async function GET(req: NextRequest) {


    const data = await cachedRapidRating()

    return NextResponse.json(data)

}
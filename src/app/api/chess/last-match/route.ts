
import { NextRequest, NextResponse } from "next/server";
import { getLastMatch } from "@/lib/chess";

export const revalidate = 60 * 60 * 24   // 1 day

export async function GET() {


    const data = await getLastMatch()

    return NextResponse.json(data)

}
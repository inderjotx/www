


import { NextRequest, NextResponse } from "next/server";
import { getRecentBook } from "@/lib/books";

export const revalidate = 60 * 60  // 1 hour

export async function GET(req: NextRequest) {


    const data = await getRecentBook()

    return NextResponse.json(data)

}
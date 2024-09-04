


import { NextResponse } from "next/server";
import { getRecentBook } from "@/lib/books";

export const revalidate = 60 * 60 * 24 * 7  // 1 week

export async function GET() {

    const data = await getRecentBook()
    return NextResponse.json(data)

}
import { getRecentBook } from "@/lib/books"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET() {


    const book = await getRecentBook()
    return NextResponse.json(book)
}
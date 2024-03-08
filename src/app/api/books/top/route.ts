import { getShelfBooks } from "@/lib/books";
import { NextResponse } from "next/server";



export async function GET() {

    const topBooks = await getShelfBooks()

    return NextResponse.json(topBooks)
}
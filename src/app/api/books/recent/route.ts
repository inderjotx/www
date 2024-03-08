
import { getRecentBook, getShelfBooks } from "@/lib/books";
import { getRecentTrack } from "@/lib/favsongs";
import { NextResponse } from "next/server";



export async function GET() {

    const recent = await getRecentBook()

    return NextResponse.json(recent)
}
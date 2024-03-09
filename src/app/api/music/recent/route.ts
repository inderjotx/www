import { getRecentTrack } from "@/lib/favsongs";
import { NextResponse } from "next/server";


export async function GET() {
    const recent = await getRecentTrack()
    return NextResponse.json(recent, { status: 200 })
}
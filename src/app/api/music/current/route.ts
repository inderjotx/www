import { getCurrentTrack } from "@/lib/favsongs";
import { NextResponse } from "next/server";


export async function GET() {
    const current = await getCurrentTrack()
    return NextResponse.json(current, { status: 200 })
}
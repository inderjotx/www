import { NextRequest, NextResponse } from "next/server";
import { getTopTracks } from "@/lib/music";

export async function GET(req: NextRequest) {
    const topTracks = await getTopTracks();

    return NextResponse.json({ success: true, data: topTracks })
}   
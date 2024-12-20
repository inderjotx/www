import { NextResponse } from "next/server";
import { getTopTracks } from "@/lib/music";

export const revalidate = 60 * 60 * 24

export async function GET() {
    const topTracks = await getTopTracks();
    return NextResponse.json({ success: true, data: topTracks })
}   
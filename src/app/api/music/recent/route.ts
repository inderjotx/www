import { NextRequest, NextResponse } from "next/server";
import { getRecentTrack, getCurrentTrack } from "@/lib/music";
import { unstable_noStore as noStore } from 'next/cache';




export async function GET() {

    noStore()

    const [currentTrack, recentTrack] = await Promise.all([getCurrentTrack(), getRecentTrack()])


    if (currentTrack) {
        return NextResponse.json({
            success: true,
            data: {
                ...currentTrack,
                type: "current"
            }
        })
    }


    if (recentTrack) {

        return NextResponse.json({
            success: true,
            data: {
                ...recentTrack,
                type: "recent"
            }
        })
    }

    return NextResponse.json({ success: false, data: null })


}
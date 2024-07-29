import { NextRequest, NextResponse } from "next/server";
import { getRecentTrack, getCurrentTrack } from "@/lib/music";
import { unstable_noStore as noStore } from 'next/cache';




export async function GET(req: NextRequest) {

    // to get dynamic data
    noStore()

    const currentTrack = await getCurrentTrack()


    if (currentTrack) {
        console.log("Playing song on spotify....")
        return NextResponse.json({
            success: true,
            data: {
                ...currentTrack,
                type: "current"
            }
        })
    }

    const recentTrack = await getRecentTrack()

    if (recentTrack) {

        console.log("Not playing anything on spotify....")
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
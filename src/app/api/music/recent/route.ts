import { getRecentTrack } from "@/lib/favsongs";
import { NextResponse } from "next/server";



export const dynamic = 'force-dynamic'


export async function GET() {
    const recent = await getRecentTrack()
    console.log('/api/recent')

    const response = {
        response: recent,
        success: ('href' in recent)
    }

    return NextResponse.json(response, { status: 200 })

}
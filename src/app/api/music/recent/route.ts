import { getRecentTrack } from "@/lib/favsongs";
import { NextResponse } from "next/server";



export const dynamic = 'force-dynamic'


export async function GET() {
    const recent = await getRecentTrack()
    console.log('/api/recent')

    return NextResponse.json(recent, { status: 200 })

}
import { getCurrentTrack } from "@/lib/favsongs";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET() {
    const current = await getCurrentTrack()
    console.log('/api/current ')
    console.log(current)

    return NextResponse.json(current, { status: 200 })

}
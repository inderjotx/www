import { getCurrentTrack } from "@/lib/favsongs";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET() {
    const current = await getCurrentTrack()
    console.log('/api/current ')
    console.log(current)

    const response = {
        response: current,
        success: ('href' in current)
    }

    return NextResponse.json(response, { status: 200 })

}
import { getDiscordStatus } from "@/lib/discord"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'



export async function GET() {

    const data = await getDiscordStatus()


    return NextResponse.json({ status: data })


}
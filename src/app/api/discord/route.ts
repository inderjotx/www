import { NextRequest, NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
import { getDiscordStatus } from "@/lib/discord";



export async function GET(req: NextRequest) {

    noStore()

    const data = await getDiscordStatus()

    return NextResponse.json(data)

}
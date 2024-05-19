import { getCurrentTrack, getRecentTrack } from "@/lib/favsongs";
import { NextResponse } from "next/server";



export const dynamic = 'force-dynamic'



export async function GET() {


    const current = await getCurrentTrack()

    if ('href' in current) {

        return NextResponse.json(
            {
                response: current,
                success: true
            }
            , { status: 200 }
        )
    }


    const recent = await getRecentTrack()



    return NextResponse.json(
        {
            response: recent,
            success: ('href' in recent)
        }
        , { status: 200 }
    )






}
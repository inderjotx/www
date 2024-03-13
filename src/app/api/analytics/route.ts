import { getAnalytics } from "@/lib/graphData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const url = new URL(req.url)
    const frequency = url.searchParams.get('frequency')


    if (frequency && isValid(frequency)) {

        const data = await getAnalytics(frequency as TimeFrame)
        return NextResponse.json(data)

    }

    else {
        return new NextResponse("Invalid request , invalid arguments ", { status: 402 })
    }
}


function isValid(value: string) {
    if (value === "Hours" || value === "Days" || value == "Weeks" || value == "Months") {
        return true
    }
    else {
        return false
    }

}
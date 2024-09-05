import { getAnalytics } from "@/lib/analytics";
import { unstable_noStore } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { frequency: string } }) {

    unstable_noStore()


    const frequency = params?.frequency

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
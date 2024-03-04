import { NextRequest, NextResponse } from "next/server";



export function GET(req: NextRequest) {

    return NextResponse.json({ data: "some random data" }, { status: 200 })
}
import { getViews } from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {

    const blogTitle = req.nextUrl.searchParams.get('title')

    if (blogTitle) {
        const views = await getViews(blogTitle)

        return NextResponse.json({ views, success: true })
    }

    return NextResponse.json({ views: 0, success: false })
}
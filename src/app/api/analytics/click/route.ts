

import { NextResponse, userAgent } from 'next/server'
import type { NextRequest } from 'next/server'
import { alreadyClicked, registerClick } from '@/lib/redis'
import { addClickToDB } from '@/lib/addClicktoDb'

export type UserInfo = {
    browser: string,
    city: string,
    country: string,
    os: string,
    ref: string,
    device: string,
    ip: string,
    clickedOn: number
}



export async function POST(request: NextRequest) {

    const data = userAgent(request)
    const ip = request.ip
    try {

        if (ip) {

            const hasAlreadyClicked = await alreadyClicked(ip)

            console.log(`${ip} has already clicked the url`)
            if (!hasAlreadyClicked) {

                console.log('clicked for the first time')

                const view: (UserInfo | Partial<UserInfo>) = {
                    city: request.geo?.city,
                    country: request.geo?.country,
                    os: data.os.name,
                    //@ts-ignore
                    ref: request.referer || request.referrer || "self",
                    ip: request.ip,
                    device: data.device.type === 'mobile' ? 'Mobile' : 'Desktop',
                    browser: data.browser.name
                }

                console.log('click data of the user' + view)

                await Promise.all([registerClick(view), addClickToDB(view)])

            }
        }
        else {
            console.log('no ip data available')
        }

        return NextResponse.json({ success: true })
    }

    catch (error) {

        console.log('error while registering click')
        return NextResponse.json({ success: false })
    }

}



import { NextResponse, userAgent } from 'next/server'
import type { NextRequest } from 'next/server'
import { alreadyClicked, incrementView, registerClick } from './lib/redis'
import { addClickToDB } from './lib/addClicktoDb'

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



export async function middleware(request: NextRequest) {



    // for analytical data
    const data = userAgent(request)
    const ip = request.ip

    if (ip) {

        const hasAlreadyClicked = await alreadyClicked(ip)

        console.log(`${ip} has already clicked the url`)
        if (!hasAlreadyClicked) {

            console.log('clicked for the first time')

            const view: (UserInfo | Partial<UserInfo>) = {
                city: request.geo?.city,
                country: request.geo?.country,
                os: data.os.name,
                ref: request.referrer || "self",
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
}


// mathes everyting execpt some next things that are not routes
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
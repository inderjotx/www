
import { NextResponse, userAgent } from 'next/server'
import type { NextRequest } from 'next/server'
import { alreadyClicked, registerClick } from './lib/redis'

type UserInfo = {
    browser: string,
    city: string,
    country: string,
    os: string,
    ref: string,
    device: string,
    ip: string
}

// store in the database and in the analytics of 



export async function middleware(request: NextRequest) {

    const data = userAgent(request)

    const ip = request.ip

    if (ip) {

        const hasAlreadyClicked = await alreadyClicked(ip)

        if (!hasAlreadyClicked) {

            console.log('clicked')

            const view: (UserInfo | Partial<UserInfo>) = {
                city: request.geo?.city,
                country: request.geo?.country,
                os: data.os.name,
                ref: request.referrer,
                ip: request.ip,
                device: data.device.type,
            }



            // register click and not register click from same ip for one hour 
            await registerClick(ip)

            // store click in the database

        }
    }



}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
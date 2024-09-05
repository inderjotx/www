import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { alreadyClicked, registerClick } from '@/lib/redis'
import { addClickToDB } from '@/lib/addClicktoDb'
import axios from 'axios'
import UAParser from 'ua-parser-js'

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

async function getIPInfo(ip: string) {
    try {
        const response = await axios.get(`https://ipapi.co/${ip}/json/`)
        return response.data
    } catch (error) {
        console.error('Error fetching IP info:', error)
        return null
    }
}

export async function POST(request: NextRequest) {


    const ip = request.headers.get('x-forwarded-for') || request.ip
    console.log(`----------------------------------------------------------------------------------------------------------`)
    console.log('ip of the request', ip)

    try {
        if (ip) {
            const hasAlreadyClicked = await alreadyClicked(ip)
            console.log(`----------------------------------------------------------------------------------------------------------`)

            if (!hasAlreadyClicked) {
                const ipInfo = await getIPInfo(ip)
                const uaParser = new UAParser(request.headers.get('user-agent') || '')
                const parsedUA = uaParser.getResult()

                const view: (UserInfo | Partial<UserInfo>) = {
                    city: ipInfo?.city,
                    country: ipInfo?.country_name,
                    os: parsedUA.os.name,
                    ref: request.headers.get('referer') || "self",
                    ip: ip,
                    device: parsedUA.device.type === 'mobile' ? 'Mobile' : 'Desktop',
                    browser: parsedUA.browser.name
                }
                await Promise.all([registerClick(view), addClickToDB(view)])
            }
            else {
                console.log(`----------------------------------------------------------------------------------------------------------`)
                console.log('already clicked')
            }
        }
        else {
            console.log('no ip data available')
        }
        return NextResponse.json({ success: true })
    }
    catch (error) {
        console.error('Error processing request:', error)
        return NextResponse.json({ success: false })
    }
}
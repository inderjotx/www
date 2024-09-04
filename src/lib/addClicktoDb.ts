'use server'

import { prismaClient } from "./prisma";



export async function addClickToDB(user: UserInfo | Partial<UserInfo>) {

    try {

        await prismaClient.click.create({
            data: {
                browser: user.browser,
                city: user.city,
                country: user.country,
                os: user.os,
                ref: user.ref,
                ip: user.ip,
                device: user.device
            }
        })
    }

    catch (error) {
        console.log('error adding click data')
        console.log(error)
    }

}
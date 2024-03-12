import { UserInfo } from "@/middleware";
import { prismaClient } from "./prisma";



export async function addClickToDB(user: UserInfo | Partial<UserInfo>) {

    try {

        await prismaClient.click.create({
            data: {
                ...user
            }
        })
    }

    catch (error) {
        console.log('error adding click data')
    }

}
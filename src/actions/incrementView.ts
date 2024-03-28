'use server'

import { incrementView } from "@/lib/redis"
import { redirect } from "next/navigation"






export async function IncrementViewAction(title: string) {
    console.log('title')
    console.log(title)

    if (title) {
        await incrementView(title)

        console.log('incremtent view')
        redirect(`/writing/${title}`)
    }
}
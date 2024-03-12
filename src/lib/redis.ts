import { Redis } from '@upstash/redis'



const client = new Redis({
    url: 'https://us1-safe-foxhound-41977.upstash.io',
    token: process.env.UPSTASH_REDIS_REST_TOKEN!
})






export async function getViews(key: string) {

    const value = await client.get<number>(key)
    if (!value) {
        await client.set<number>(key, 0)
        return 0
    }
    return value
}


export async function incrementView(key: string) {
    await client.incr(key)
}



export async function registerClick(ip: string) {

    await client.set(ip, '1', {})
    await client.expire(ip, 3600)
}



export async function alreadyClicked(ip: string) {

    // return number of keys exists
    // https://upstash.com/docs/oss/sdks/py/redis/commands/generic/exists
    const response = await client.exists(ip)


    return response >= 1
}
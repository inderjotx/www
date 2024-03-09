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
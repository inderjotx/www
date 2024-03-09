import React from 'react'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { poppins } from '@/lib/fonts/poppins'
import ArticleTitle from './_components/ArticleTitle'
import { getViews } from '@/lib/redis'

type Metadata = {
    slug: string,
    title: string,
    writtenOn: string,
    redisKey: string
}



export default async function page() {

    async function curDirFolder(dirPath: string) {

        const parentDir = process.cwd()
        const fullPath = path.join(parentDir, dirPath)
        const items = await fs.promises.readdir(fullPath)
        const folders = items.filter(item => fs.statSync(path.join(fullPath, item)).isDirectory());
        return folders

    }


    const folders = await curDirFolder('src/app/writing/(articles)')

    return (

        <div className='flex flex-col gap-10 w-full '>
            <h1 className={cn('text-2xl', poppins.className)} >
                Writings
            </h1>

            <p className='text-muted-foreground'>
                Programming, Computers , Linux and occasinal life insights , follow on twitter for updates
            </p>

            <ul className=''>
                {
                    // form by time 
                    folders.map(async (folder: string) => {
                        const { metadata }: { metadata: Metadata } = await import(`./(articles)/${folder}/content.mdx`)
                        const views = await getViews(metadata.redisKey)
                        console.log(views)
                        return (
                            <ArticleTitle {...metadata} views={views} redis_key={metadata.redisKey} key={metadata.redisKey} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

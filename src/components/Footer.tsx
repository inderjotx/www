import { siteConfig, config } from '@/config'
import { GithubIcon, Linkedin, TwitterIcon } from 'lucide-react'
import React from 'react'

export function Footer() {
    return (
        <div className='mt-16 h-28 flex flex-col gap-2 w-full items-center justify-center'>
            <h1>By <span className='text-muted-foreground font-serif'> {siteConfig.creator} </span></h1>
            <div className='flex gap-4'>
                <a href={config.links.linkedIn}>
                    <Linkedin className='hover:scale-105 transition-all' />
                </a>

                <a href={config.links.github}>
                    <GithubIcon className='hover:scale-105 transition-all' />
                </a>


                <a href={config.links.twitter}>
                    <TwitterIcon className='hover:scale-105 transition-all' />
                </a>

            </div>
        </div>
    )
}

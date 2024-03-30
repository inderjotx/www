import { siteConfig, config } from '@/config'
import { GithubIcon, Linkedin, TwitterIcon } from 'lucide-react'
import React from 'react'
import { Anchor } from './Anchor'

export function Footer() {
    return (
        <div className='mt-10 h-28 flex flex-col gap-3 w-full items-center justify-center'>
            <h1>By
                <a href={config.links.twitter} className='underline px-1 decoration-2 decoration-gray-600 hover:decoration-gray-400' >
                    Inderjot Singh
                </a>
            </h1>
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

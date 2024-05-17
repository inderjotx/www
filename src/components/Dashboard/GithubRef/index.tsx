import React from 'react'
import Image from 'next/image'
import { Github } from 'lucide-react'

const IMAGE_URL = '/dashboard/cat.jpg'

export function GithubRef() {
    return (
        <div className='relative h-full w-full  '>
            <a className='' href='https://github.com/inderjotx' target='_blank' >
                <Image src={IMAGE_URL} alt='github' className='object-cover' fill quality={100} />
                <div className='absolute flex p-4 justify-center md:justify-between  flex-col  bg-black/80 top-0 h-full w-full' >

                    <div className='h-8 w-8 rounded-full bg-zinc-800 border p-2 flex items-center ' >
                        <Github className='h-5 w-5' />
                    </div>

                    <div>
                        <h1 className='font-medium'>Github</h1>
                        <h1 className='text-sm'>My experiments (aka projects)</h1>
                    </div>
                </div>
            </a>
        </div>
    )
}

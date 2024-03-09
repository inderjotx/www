import React from 'react'
import Image from 'next/image'
import { Github } from 'lucide-react'

const IMAGE_URL = '/dashboard/cat.jpg'

export function GithubRef() {
    return (
        <div className='relative h-full w-full'>
            <Image src={IMAGE_URL} alt='github' className='object-cover' fill quality={100} />
            <div className='absolute flex p-4 justify-center md:justify-between  flex-col  bg-black/70 top-0 h-full w-full' >
                <Github />
                <div>
                    <h1 className='font-medium'>Github</h1>
                    <h1 className='text-sm'>My experiments (aja projects)</h1>
                </div>
            </div>
        </div>
    )
}

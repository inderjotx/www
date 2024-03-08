import { weeklyCodeTime } from '@/lib/codeTime'
import { poppins } from '@/lib/fonts/poppins'
import { cn } from '@/lib/utils'
import { Code2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export async function Code() {

    const data = await weeklyCodeTime()

    return (
        <Link href={'https://wakatime.com/@inderjotx'} >
            <div className={cn('flex w-full h-full text-sm  font-semibold gap-1   rounded-lg flex-col items-center justify-center bg-purple-400/60  text-white')}>
                <div className='flex gap-1'>
                    <Code2 className='size-5' ></Code2>
                    <span >{data ?
                        <span>{data.time}</span>
                        : <>Timeout</>
                    }</span>
                </div>
                <div>
                    <span className='text-[14px]' >coding hrs</span>
                </div>
            </div>
        </Link>
    )
}

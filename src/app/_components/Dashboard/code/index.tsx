import { weeklyCodeTime } from '@/lib/codeTime'
import { poppins } from '@/lib/fonts/poppins'
import { cn } from '@/lib/utils'
import { Code2 } from 'lucide-react'
import React from 'react'

export async function Code() {

    await weeklyCodeTime()



    return (
        <div className={cn('flex w-full h-full text-sm font-semibold gap-1   rounded-lg flex-col items-center justify-center bg-purple-900  text-white')}>
            <div className='flex gap-1'>
                <Code2 className='size-5' ></Code2>
                <span >400</span>
            </div>
            <div>
                <span  >coding hrs</span>
            </div>
        </div>
    )
}

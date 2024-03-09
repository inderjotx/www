import React from 'react'
import { metadata } from '@/app/writing/(articles)/text/content.mdx'



export function Post() {

    return (
        <div className='flex flex-col p-2'>
            <div className='text-xl'>Latest Post</div>
            <div className='text-lg'>{metadata.title}</div>
            <div className='text-lg'>Image</div>
        </div>
    )
}

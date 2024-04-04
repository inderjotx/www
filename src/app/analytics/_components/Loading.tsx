import React from 'react'


export const Loading = () => {
    return (
        <div className='grid grid-cols-1 w-full gap-2 h-full'>
            <div className='h-full w-full flex animate-pulse bg-muted rounded-sm mx-auto my-auto' />
            <div className='grid grid-cols-2 w-full h-1/2  gap-2' >
                <div className='col-span-2 md:col-span-1 w-full h-full flex animate-pulse border bg-muted rounded-sm mx-auto my-auto ' />
                <div className='col-span-2 md:col-span-1 w-full h-full flex animate-pulse border bg-muted rounded-sm mx-auto my-auto  ' />
            </div>
        </div>
    )
}
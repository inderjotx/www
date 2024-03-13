
import React from 'react'

interface ChartFrameProps {
    children: Readonly<React.ReactNode>
}

export default function ChartFrame({ children }: ChartFrameProps) {
    return (
        <div className='border p-1 bg-muted-foreground/5  rounded-sm h-full w-full '>
            <div className='border bg-black h-full rounded-sm'>
                {children}
            </div>
        </div>
    )
}

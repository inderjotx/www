'use client'
import { Button } from '@/components/ui/button'
import React, { Dispatch, SetStateAction } from 'react'

interface GraphChangeButtonProps {
    buttons: { title: string, action: string }[],
    updateState: Dispatch<SetStateAction<any>>

}

export function GraphChangeButton({ buttons, updateState }: GraphChangeButtonProps) {
    return (
        <div className='flex gap-2' >
            {
                buttons.map((button) => (
                    <Button className='text-[12px] text-muted-foreground py-[0px] px-[4px] ' variant={"ghost"} onClick={() => updateState(button.action)} key={button.action}  >
                        {button.title}
                    </Button>
                ))
            }
        </div>
    )
}

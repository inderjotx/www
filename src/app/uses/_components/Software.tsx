import React from 'react'
import { Title } from './title'

const data: { [key: string]: string } = {
    "OS": "Dual Boot ( Windows 11 + Ubuntu ) ",
    "Init System": "systemd",
    "DNS": "Route53",
    "Window Manager": "bspwm",
    "Terminal": "oh_my_zsh",
    "Text Editor": "vscode with vim plugin",
    "Status Bars": "Polybar",
    "Video Streaming": "obs",
    "Music": "spotify",
    "Notes": "notion",
}

export function Software() {

    const keys = Object.keys(data)

    return (
        <div className='flex flex-col gap-6 mt-10'>
            <Title title='Software' />
            <div>
                {
                    keys.map((key) => {
                        return (
                            <div key={key} className='flex gap-2  text-muted-foreground'>
                                <div className='text-white'>{key}</div>
                                <div>{data[key]}</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

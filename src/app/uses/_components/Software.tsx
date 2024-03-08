import React from 'react'
import { Title } from './title'

const data: { [key: string]: string } = {
    "OS": "Arch Linux",
    "Init System": "systemd",
    "DNS": "Cloudflare",
    "Window Manager": "bspwm",
    "Terminal": "Kitty",
    "Text Editor": "Neovim",
    "Status Bars": "Polybar",
    "Video Streaming": "MPV + Jellyfin",
    "Music": "MPD + NCMPCPP (and occasionally Spotify or YT Music)",
    "Notes": "Neovim + Vimwiki",
    "Password Manager": "GnuPG + pass",
    "Sync": "Syncthing (Local), Mega, or Google Drive (Cloud)"
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

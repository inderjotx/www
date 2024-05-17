import React from 'react'
import { Title } from './title'

export function Browser() {

    const browserExtensions = [
        "vimium",
        "uBlock Origin",
        "React Developer Tools",
        "color-picker",
        "web-vitals",
        "what-font"
    ];


    return (
        <div className='flex flex-col gap-6 mt-10'>
            <Title title='Browser' />

            <div className='flex flex-col gap-4'>

                <p>
                    use firefox-developer-edition as my primary browser, and ungoogled-chromium as my secondary browser, along with following extensions:
                </p>


                <ol>

                    {
                        browserExtensions.map((ext, index) => (
                            <li key={index} className='flex gap-1 text-sm text-muted-foreground' >
                                <span className='text-white'>{index + 1}.</span>
                                <p>{ext}</p>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

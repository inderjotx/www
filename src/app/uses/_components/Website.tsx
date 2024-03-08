import React from 'react'
import { Title } from './title'

type data = { image_url: string, href: string }[]

export function Website() {
    return (
        <div className='flex flex-col gap-6 mt-10'>
            <Title title='Website' />

            <h2 className='text-xl font-bold'>Tech Stack</h2>
            <div className='flex flex-col gap-4'>
                <p>
                    This website is created with Next.js, Tailwind CSS, MDX, Umami, and PlanetScale. It&apso;s hosted on Vercel. If you&apos;jre curious, feel free to explore the source code on GitHub.
                </p>
            </div>
        </div>

    )
}

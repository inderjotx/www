import React from 'react'
import { Title } from './title'
import Image from 'next/image'

type Data = { image_url: string, href: string }[]

const data: Data = [
    { image_url: '/uses/next.svg', href: "https://nextjs.org" }
]

/**
 * 
 * next js 
 * drizzle orm 
 * shadcn 
 * tailwind 
 * aws 
 * kubenres 
 * docker 
 * mdx 
 *  
 *  
 */


export function Website() {
    return (
        <div className='flex flex-col gap-6 my-10'>
            <Title title='Website' />

            <h2 className='text-xl font-bold'>Tech Stack</h2>
            <div className='flex flex-col gap-4'>
                <p>
                    This website is created with Next.js, Tailwind CSS, MDX, Umami, and PlanetScale. It&apso;s hosted on Vercel. If you&apos;jre curious, feel free to explore the source code on GitHub.
                </p>

                {/* <div className='relative flex  col-span-1 '>
                    <Image src={'/uses/aws.svg'} className='absolute object-cover' alt='next_js_image' fill sizes='100' quality={100} />
                </div> */}
            </div>
            <div>
                <div className=' grid grid-cols-4 h-28 '>
                    <div className='flex p-8'>
                        <div className='flex relative h-full w-full '>
                            <Image src={'/uses/aws.svg'} alt='next_js_image' fill sizes='100' quality={100} />
                        </div>
                    </div>
                    <div className='flex p-5'>
                        <div className='flex relative h-full w-full '>
                            <Image src={'/uses/next.svg'} alt='next_js_image' fill sizes='100' quality={100} />
                        </div>
                    </div>
                    <div className='flex p-8'>
                        <div className='flex relative h-full w-full '>
                            <Image src={'/uses/tailwind.svg'} alt='next_js_image' fill sizes='100' quality={100} />
                        </div>
                    </div>
                    <div className='flex p-8'>
                        <div className='flex relative h-full w-full '>
                            <Image src={'/uses/docker.svg'} alt='next_js_image' fill sizes='100' quality={100} />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 h-28 '>
                    <div className='flex p-8'>
                        <div className='flex relative h-full w-full '>
                            <Image src={'/uses/drizzle.svg'} alt='next_js_image' fill sizes='100' quality={100} />
                        </div>
                    </div>
                    <div className='flex p-8'>
                        <div className='flex relative h-full w-full '>
                            <Image src={'/uses/shadcn.png'} alt='next_js_image' fill sizes='100' quality={100} />
                        </div>
                    </div>
                    <div className='flex p-8'>
                        <div className='flex relative h-full w-full '>
                            <Image src={'/uses/tailwind.svg'} alt='next_js_image' fill sizes='100' quality={100} />
                        </div>
                    </div>
                    <div className='flex p-8'>
                        <div className='flex relative h-full w-full '>
                            <Image src={'/uses/typescript.svg'} alt='next_js_image' fill sizes='100' quality={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

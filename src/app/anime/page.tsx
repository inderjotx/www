import { AnimePoster } from '@/components/AnimeImage'
import { StarRating } from '@/components/Star';
import { getFavouriteShow } from '@/lib/favshows';
import { poppins } from '@/lib/fonts/poppins'
import { cn } from '@/lib/utils'
import { Eye } from 'lucide-react';
import Image from 'next/image';
import React from 'react'


const images = [
    {
        image_url: "/anime/blackclover.jpg",
        slug: "Black Clover",
        href: "/"
    },
    {
        image_url: "/anime/no_game_no_life.jpg",
        slug: "No Game No Life",
        href: "/"
    },
    {
        image_url: "/anime/parasyte.jpg",
        slug: "Parasyte",
        href: "/"
    },
    {
        image_url: "/anime/vinland_saga.jpg",
        slug: "Vinland Saga",
        href: "/"
    },
    {
        image_url: "/anime/deathnote.jpg",
        slug: "Death Note",
        href: "/"
    },
    {
        image_url: "/anime/onepunchman.jpg",
        slug: "One Punch Man",
        href: "/"
    },
    {
        image_url: "/anime/slime.jpg",
        slug: "Reincarnated as a Slime",
        href: "/"
    },
    {
        image_url: "/anime/hunter.jpg",
        slug: "Hunter x Hunter",
        href: "/"
    },
    {
        image_url: "/anime/overlord.jpg",
        slug: "Overlord",
        href: "/"
    },
    {
        image_url: "/anime/tomodachi.jpg",
        slug: "Tomodachi",
        href: "/"
    }
];



export default async function Anime() {

    const data = await getFavouriteShow()



    return (

        <div className='flex flex-col gap-4'>
            <h1 className={cn('font-semibold text-xl', poppins.className)} >Anime</h1>

            <div className='text-sm text-muted-foreground'>
                I have loved watching anime since childhood. My first anime was Death Note, which is one of the most popular ones. It was suggested to me by a friend. Since then, I have watched many anime of different genres, but Isekai, Mecha, and Slice of Life are some of my favorites.
            </div>

            {/* recent */}
            <div>
                <RecentAnime
                    published={2015}
                    href='/'
                    stars={4}
                    image_url='/anime/blackclover.jpg' date={4} title='ClassRoom of the Elite' />
            </div>
            <div className='text-sm'>
                Below are some of my all-time favorite anime.
            </div>

            {/* { anime favourite } */}
            <div className='grid grid-cols-1 h-full gap-2 md:grid-cols-2  ' >
                {
                    data.map(({ image_url, href, slug }) => (
                        <div key={image_url} >
                            <AnimePoster
                                image_url={image_url}
                                href={href}
                                slug={slug}
                                className='h-36' />
                        </div>
                    ))

                }
            </div>
        </div>
    )
}


function RecentAnime({ image_url, date, title, stars, published, href }: {
    image_url: string,
    date: number,
    title: string,
    stars: number,
    published: number,
    href: string
}) {
    return (
        <div className='w-full h-24 active:ring active:ring-purple-400 bg-muted-foreground/10  rounded-md flex'>
            <div className='w-1/6 h-full rounded-sm overflow-hidden relative' >
                <Image className='object-cover' alt='image' quality={100} src={image_url} fill sizes='100' ></Image>
            </div>
            <div className='w-5/6 p-2 justify-center pl-5 h-full flex flex-col gap-1' >
                <div className='text-[12px]  font-sans  flex items-center  gap-2  text-[#A3E635]'>
                    <Eye className='size-4' /> <span >
                        {date} DAYS AGO
                    </span>
                </div>
                <div className='font-semibold flex gap-1' >
                    <span>
                        {title}
                    </span>
                    <div className='text-[10px] rounded-[4px] self-end p-[3px] bg-muted-foreground/20' >
                        {published}
                    </div>
                </div>
                <div>
                    <StarRating rating={stars} />
                </div>
            </div>
        </div>
    )
}

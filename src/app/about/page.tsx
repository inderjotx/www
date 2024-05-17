import React from 'react'
import { Title } from '../uses/_components/title'
import { getAge } from '@/lib/utils'


export const metadata = {
    title: "Inderjot // About",
    description: "About page of Inderjot Singh",
};



export default function page() {
    return (
        <div className='flex flex-col gap-10 w-full '>
            <Title title='About' />
            <section id='about' className='flex flex-col gap-10'>
                <div className='flex flex-col md:flex-row gap-1 md:gap-6 text-muted-foreground' >


                    <div className='w-full md:w-1/6' >Who am I ? </div>
                    <div className='w-full text-white text-sm md:text-base'>

                        <p>
                            Hi there 👋🏻 I &apos; m Inderjot, a {getAge()}-year-old guy, passionate about computers.
                        </p>

                        <p className='text-balance leading-relaxed'>

                            I started my journey in October 2022 after completing my 12th grade. I joined a course on Udemy and started learning Python. Since then, I have been developing stuff, from websites, games to web3 tokens. At one point in time, I went very deep into DevOps and cloud, learned Kubernetes and Docker. But I found building products more satisfying for me than setting up servers and infrastructure.
                            So, now I&apos;m fully focused on web development. Lately, I have joined a startup as a founding member, and my prime focus is to build a robust backend to handle scale and performance. Apart from this, I am also freelancing and building my own products.
                        </p>

                    </div>
                </div>


                <div className='flex flex-col md:flex-row gap-1 md:gap-6 text-muted-foreground'>
                    <div className='w-full text-muted-foreground md:w-1/6'>Mistakes I have made?</div>

                    <div className='w-full text-white  text-balance leading-relaxed'>
                        <p>  Relying too much on courses for learning, I have found that the best way to learn is by doing and struggling . </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

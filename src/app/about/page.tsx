import { poppins } from '@/lib/fonts/poppins'
import { cn } from '@/lib/utils'
import React from 'react'


const data = [
    {
        title: 'Who am I ?',
        content: " Hi there 👋🏻 I'm Arunava, a 19-year-old guy, passionate about computers. My journey began in 6th or 7th grade when I installed Linux on my computer, seeking something new beyond the dull Windows environment. Since then, I've never looked back. I got into the terminal, learned Python, engaged in basic shell scripting, automated stuff, scraped websites, tweaked system services, and enjoyed breaking stuff to understand how things work. Later, I explored web development, working with various technologies, libraries, and frameworks. I learned about backend operations, databases, scalability, and real-time communications. Currently, I'm engaged in the startup world, working with cloud platforms, and doing freelancing on the side.",
    }
    ,
    {
        title: "How I Tech ? ",
        content: "As a full-stack developer, my primary focus involves handling both backend operations and user interface development. For robust tasks requiring performance and scalability, I rely on Golang, while for typical backend functionalities, I turn to NodeJS. Additionally, I use React (Next.js) for creating user interfaces, and I enhance the styling with TailwindCSS.I have several years of experience working with these technologies, as well as experience in other languages such as TypeScript, Python, C++, Elixir, and Rust, ranked in order from most to least experienced.In a nutshell, I'm all about breaking down complex tech stuff, building cool things, and having some fun along the way!"
    }
]







export default function page() {
    return (
        <div className='flex flex-col gap-10 w-full '>
            <h1 className={cn('text-2xl', poppins.className)} >
                About
            </h1>
            <section id='about' className='flex flex-col gap-10'>
                <div className='flex flex-col md:flex-row gap-1 md:gap-6 text-muted-foreground' >
                    <div className='w-full md:w-1/6' >Who am I ? </div>
                    <div className='w-full text-white md:w-5/6'>
                        <p>
                            Hi there 👋🏻 I&apos;m Inderjot, a 20-year-old guy, passionate about computers.
                        </p>

                        <p>
                            My journey started after I completed my 12th, since I ought to move abroad for my bachelor but i had 6 months . I started lerning about tech , and found this field exlirating . I wanted a more structured path and did some research and found CS50 by Harvard . There I learned a bunch of new things , C , SQL , DSA , React , Javascript and build my first website . I paralled opted for a course in python by Angela Yu on Udemy . After completing there course  , I get to know how web dev works in general . I build some servers in flask . On Jan 1 , 2023 I decide I should do DSA since , it an improtant part of Techinal Interview . I gone  I followed youtube video of Kunal Kushwaha and Striver , learned Java and started solving question on leetcode, I did this for about 2-3 months consistenly solved around 200-220 question , then I thought that is good enought it isn&apos; I am going to give interview now since I don&apos;t have a degree , so  I thought now its better i should improved my developments skills and learn Web Dev. I like to try new things , I started doing Web 3 because one of my friend was doing it , simulatenould i started learning about cloud and machine learning . I did this for a month and so , build i project in web3 a website to create web tokens , in machine learing i was just brushing up my maths . During this time , I tried vim and dual booted my windows to the ubuntu installed , ( best decision I made ). I took that step after wathcihng a video by Harkirat . Fast forward I learned devops , kubernetes , jenkins , terraform and anisble  . So in the first year of my programming I have touch on all domains of tech I find .  Mistakes i made was I gernetall opt for course ,or youtube videoes . Now i have decided i will go more deep in web dev and there days since next js is quite popular i am making projects in next and trying to learn all the latest tech . I am also learning golang <div className=""></div>
                        </p>

                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-1 md:gap-6 text-muted-foreground' >
                    <div className='w-full text-muted-foreground md:w-1/6' >Mistakes I have made ? </div>
                    <div className='w-full text-white md:w-5/6'>
                        <p>Relying on courses for learnign , i have found that the best way to learn is by doing it oureself. I have opted for a course on react did for one 1/2 month and build a todo app as show in tutorial . but when i build my own web3 token craeting app i learned bunch of new things .  </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

import React from 'react'
import { Title } from '../uses/_components/title'


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
            <Title title='About' />
            <section id='about' className='flex flex-col gap-10'>
                <div className='flex flex-col md:flex-row gap-1 md:gap-6 text-muted-foreground' >


                    <div className='w-full md:w-1/6' >Who am I ? </div>
                    <div className='w-full text-white text-sm md:text-[15px]'>

                        <p>
                            Hi there 👋🏻 I &apos; m Inderjot, a 20-year-old guy, passionate about computers.
                        </p>

                        <p className='text-balance leading-relaxed'>
                            My journey started after I completed my 12th, since I had to move abroad for my bachelor &apos;s degree, but I had 6 months. I started learning about tech, and found this field exhilarating. I wanted a more structured path and did some research and found CS50 by Harvard. There, I learned a bunch of new things, C, SQL, DSA, React, JavaScript, and built my first website. I parallelly opted for a course in Python by Angela Yu on Udemy. After completing these courses, I got to know how web development works in general. I built some servers in Flask. On January 1, 2023, I decided I should do DSA since it &apos;s an important part of technical interviews. I followed YouTube videos by Kunal Kushwaha and Striver, learned Java, and started solving questions on LeetCode. I did this for about 2-3 months consistently, solved around 200-220 questions, then I thought that &apos; s good enough, and I am not going to give interviews now since I don &apos; t have a degree. So, I thought it &apos; s better I should improve my development skills and learn Web Development. I like to try new things, so I started doing Web3 because one of my friends was doing it. Simultaneously, I started learning about cloud and machine learning. I did this for a month or so, built a project in web3 - a website to create web tokens, and in machine learning, I was just brushing up my math. During this time, I tried vim and dual booted my Windows to Ubuntu (the best decision I made). I took that step after watching a video by Harkirat. Fast forward, I learned DevOps, Kubernetes, Jenkins, Terraform, and Ansible. So, in the first year of my programming, I have touched on all domains of tech I find interesting. The mistake I made was that I generally opted for courses or YouTube videos. Now, I have decided I will go deeper into web development, and these days, since Next.js is quite popular, I am making projects in Next.js and trying to learn all the latest tech. I am also learning Golang.
                        </p>

                    </div>
                </div>


                <div className='flex flex-col md:flex-row gap-1 md:gap-6 text-muted-foreground'>
                    <div className='w-full text-muted-foreground md:w-1/6'>Mistakes I have made?</div>

                    <div className='w-full text-white text-[15px] text-sm text-balance leading-relaxed'>
                        <p>  Relying too much on courses for learning, I have found that the best way to learn is by doing and struggling . </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

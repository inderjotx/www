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
                            Hi there 👋🏻 I&apos;m Arunava, a 19-year-old guy, passionate about computers.
                        </p>

                        <p>
                            My journey began in 6th or 7th grade when I installed Linux on my computer, seeking something new beyond the dull Windows environment. Since then, I&apos;ve never looked back. I got into the terminal, learned Python, engaged in basic shell scripting, automated stuff, scraped websites, tweaked system services, and enjoyed breaking stuff to understand how things work.
                        </p>

                        <p>
                            Later, I explored web development, working with various technologies, libraries, and frameworks. I learned about backend operations, databases, scalability, and real-time communications.
                            Currently, I&apos;m engaged in the startup world, working with cloud platforms, and doing freelancing on the side.
                        </p>
                    </div>
                </div>


                <div className='flex flex-col md:flex-row gap-1 md:gap-6 text-muted-foreground'  >
                    <div className='w-full md:w-1/6' >Who am I ? </div>
                    <div className='w-full text-white md:w-5/6'>
                        <p>
                            Hi there 👋🏻 I&apos;m Arunava, a 19-year-old guy, passionate about computers.
                        </p>

                        <p>
                            My journey began in 6th or 7th grade when I installed Linux on my computer, seeking something new beyond the dull Windows environment. Since then, I&apos;ve never looked back. I got into the terminal, learned Python, engaged in basic shell scripting, automated stuff, scraped websites, tweaked system services, and enjoyed breaking stuff to understand how things work.
                        </p>

                        <p>
                            Later, I explored web development, working with various technologies, libraries, and frameworks. I learned about backend operations, databases, scalability, and real-time communications.
                            Currently, I&apos;m engaged in the startup world, working with cloud platforms, and doing freelancing on the side.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

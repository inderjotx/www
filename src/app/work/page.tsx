import React from 'react'
import { Title } from '../uses/_components/title'
import { Table } from './_component/Table'


export type TableData = {
    projectName: string,
    Description: string,
    tags: string[],
    year: number,
    githubUrl: string,
    liveUrl: string | null
}




export default function page() {
    return (

        <div className='flex flex-col gap-6'>

            {/* title */}
            <Title title='Work' />

            <div className='space-y-3'>
                <p>
                    I love building side projects that solve either my own or someone else&apos;s problems. Here is an extensive list of all the stuff I have built over the years.
                </p>
                <p>
                    As a student, I might not have the time for full-time projects, but who knows 🤭?
                </p>
                <p>
                    Always happy to discuss an idea — hit me a up at@arnvgh.

                </p>
            </div>

            <Table />

        </div>
    )
}

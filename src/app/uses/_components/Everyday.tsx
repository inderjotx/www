import React from 'react'
import { Title } from './title'

const data: { [key: string]: string } = {
    "Laptop": "Dell Inspiron 3453",
    "Phone": "Oppo A51",
    "Earphones": "Oppo Enco buds 2",
    "Backpack": "Generic"
}



export function Everyday() {

    const keys = Object.keys(data)

    return (
        <div className='flex flex-col gap-6 mt-10'>
            <Title title='Everyday' />
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

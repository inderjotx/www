import React from 'react'
import { Title } from './title'

const data: { [key: string]: string } = {
    "Laptop": "Lenovo Legion 5 Pro running Arch Linux",
    "Old Laptop": "HP Laptop 15s running Ubuntu Server",
    "Secondary Monitor": "BenQ GW2283 (22 inch)",
    "Phone": "OnePlus Nord CE 3 5G",
    "Earphones": "OnePlus Nord Buds 2",
    "Smartwatch": "Nope, analog (Fossil, specific model unknown)",
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

import React from 'react'
import { Everyday } from './Everyday'
import { Software } from './Software'
import { Browser } from './Browser'
import { Coding } from './Coding'
import { Website } from './Website'

export function All() {
    return (
        <div className='flex flex-col'>
            <Everyday />
            <Software />
            <Browser />
            <Coding />
            <Website />
        </div>
    )
}

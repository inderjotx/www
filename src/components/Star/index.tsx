import { Star, StarHalf } from 'lucide-react'
import React from 'react'

export function StarRating({ rating }: { rating: number }) {

    const val = Math.floor(rating)
    const needHalf = (val === rating) ? false : true
    const array = Array.from(Array(val).keys())

    return (
        <div className='flex gap-1 items-center'>
            {
                array.map((index) => (
                    <Star className='size-5' color='white' fill='white' key={index} />
                ))
            }
            {
                needHalf && <HalfStar />
            }
        </div>


    )
}



function HalfStar() {
    return (
        <div className='relative '>
            <StarHalf className='size-5' color='white' fill='white ' />
        </div>
    )
}
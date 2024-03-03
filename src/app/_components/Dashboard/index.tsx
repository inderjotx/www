import React from 'react'
import { Carousel } from './carousel'

export function Dashboard() {
    return (

        <div className='grid grid-rows-2' >
            <div>
                <div className='w-full h-[150px] grid grid-cols-1 md:grid-cols-2  ' >
                    <div className='col-span-2 md:col-span-1' >
                        <Carousel />
                    </div>
                    <div className='grid grid-cols-3 ' >
                        <div className='col-span-2  border' >Github activity</div>
                        <div className='border' >Discord Activity</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-full h-[150px] grid grid-cols-6' >
                    <div className='border col-span-4  md:col-span-2 '>Carousel Tools </div>
                    <div className='grid col-span-2  md:col-span-1 w-full  md:order-3'>
                        <div className='grid grid-rows-2  md:order-2' >
                            <div className='border '>Time</div>
                            <div className='border' >Weather</div>
                        </div>
                    </div>
                    <div className='border col-span-4 md:col-span-2  md:order-2' >Location</div>
                    <div className='border col-span-2 md:col-span-1 md:order-2' >Anime</div>
                    {/* change order in md  */}
                </div>
            </div>
        </div>
    )
}

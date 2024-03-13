'use client'
import { BarChart, BarList, Color } from '@tremor/react';
import { fetcher } from "@/lib/utils"
import { useState } from "react";
import useSWR from "swr"
import ChartFrame from './ChartFrame';
import { Signal } from 'lucide-react';


export function AnalyticsChart() {



    const [freq, setFreq] = useState<TimeFrame>("Days")

    const { data, isLoading, error } = useSWR<Analytics, any>(`/api/analytics?frequency=${freq}`, fetcher, { refreshInterval: 30000 })



    if (isLoading || error) {
        return (
            <div>data</div>
        )
    }
    else if (data) {

        console.log(data.cityData)

        return (
            <div className='flex gap-10 w-full h-full flex-col'>


                {/* click analytics  */}
                <ChartFrame >
                    <div className='flex flex-col gap-6'>

                        <div className='flex flex-col h-20 w-32 items-center justify-end'>
                            <div className='flex gap-1  items-center text-3xl font-black'>
                                {data.totalClicks}
                                <Signal />
                            </div>
                            <div className='text-sm pl-6 text-muted-foreground'>
                                Total Clicks
                            </div>
                        </div>
                        <BarChart
                            data={data.barGraphData}
                            index='humanReadTime'
                            categories={['clicks']}
                            colors={['emerald']}
                            yAxisWidth={40}
                            showAnimation={true}
                        />
                    </div>
                </ChartFrame>


                <div className='grid h-40 grid-cols-1 '>

                    {/* location */}
                    <ChartFrame>
                        <div className='flex  p-6 w-full col-span-1'>
                            <BarList
                                data={data.cityData}
                                showAnimation={true}
                                color={'emerald'}
                                className='w-full'
                            />
                        </div>
                    </ChartFrame>



                    {/* browers*/}

                    <div className='flex w-full col-span-1'>

                    </div>
                </div>



            </div>
        )

    }

}



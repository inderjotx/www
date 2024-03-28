'use client'
import { BarChart, BarList, Card, Color } from '@tremor/react';
import { fetcher } from "@/lib/utils"
import { useState } from "react";
import useSWR from "swr"
import { Signal } from 'lucide-react';
import { GraphChangeButton } from './GraphChangeButton';


const buttonDemograph: { title: string, action: demographics }[] = [
    { title: "City", action: 'cityData' },
    { title: "Country", action: "countryData" },
    { title: "Ref", action: "refData" }
];

const buttonUserData: { title: string, action: userDevice }[] = [
    { title: "OS", action: 'osData' },
    { title: "Browser", action: "browserData" },
    { title: "Device", action: "deviceData" }
];





export function AnalyticsChart() {


    const [freq, setFreq] = useState<TimeFrame>("Days")
    const [demograph, setDemograph] = useState<demographics>("refData")
    const [userDevice, setUserDevice] = useState<userDevice>("deviceData")

    const { data, isLoading, error } = useSWR<Analytics, any>(`/api/analytics?frequency=${freq}`, fetcher, { refreshInterval: 30000 })


    if (isLoading || error) {
        return (
            <div>data</div>
        )
    }
    else if (data) {

        console.log(data)

        return (
            <div className='flex gap-10 w-full h-full flex-col'>


                {/* change time period */}
                <Card className="w-full"
                    decorationColor={"emerald"} decoration={"top"}
                >
                    <div className='flex items-center justify-between'>
                        <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Website Analytics</h3>
                    </div>

                    <BarChart
                        data={data.barGraphData}
                        index='humanReadTime'
                        categories={['clicks']}
                        colors={['emerald']}
                        yAxisWidth={40}
                        showAnimation={true}
                    />
                </Card>


                <div className='grid h-40 gap-6 md:gap-2 grid-cols-1 md:grid-cols-2 '>

                    {/* location */}
                    {/* TODO : { display country flag along }  */}
                    {/* TODO : { display city flag along }  */}
                    {/* TODO : { display referre flag along }  */}
                    <Card className="w-full" decorationColor={"indigo"} decoration={"top"}  >
                        <div className='flex items-center justify-between'>
                            <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">City</h3>
                            <GraphChangeButton buttons={buttonDemograph} updateState={setDemograph} />
                        </div>
                        <p className="mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
                            <span>Source</span>
                            <span>Views</span>
                        </p>
                        <BarList data={data[demograph]} className="mt-2 h-32" showAnimation />
                    </Card>




                    {/* browers*/}
                    {/*os */}
                    {/*device */}

                    <Card className="w-full"
                        decorationColor={"rose"} decoration={"top"}
                    >
                        <div className='flex items-center justify-between'>
                            <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Browser</h3>
                            <GraphChangeButton buttons={buttonUserData} updateState={setUserDevice} />
                        </div>
                        <p className="mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
                            <span>Browser</span>
                            <span>Views</span>
                        </p>
                        <BarList data={data[userDevice]} color={'rose'} className="mt-2 h-32" showAnimation={true} />
                    </Card>
                </div>



            </div>
        )

    }

}



// <div className='flex flex-col h-20 w-32 items-center justify-end'>
//     <div className='flex gap-1  items-center text-3xl font-black'>
//         {data.totalClicks}
//         <Signal />
//     </div>
//     <div className='text-sm pl-6 text-muted-foreground'>
//         Total Clicks
//     </div>
// </div>
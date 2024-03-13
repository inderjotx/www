'use client'
import { BarChart } from '@tremor/react';
import { fetcher, formatGraphTimeData } from "@/lib/utils"
import { useState } from "react";
import useSWR from "swr"


export function AnalyticsChart() {



    const [freq, setFreq] = useState<TimeFrame>("Days")

    const { data, isLoading, error } = useSWR<BarGraphInput, any>(`/api/analytics?frequency=${freq}`, fetcher, { refreshInterval: 30000 })



    if (isLoading || error) {
        return (
            <div>data</div>
        )
    }
    else if (data) {

        const formattedData = formatGraphTimeData(data)
        return (
            <BarChart
                data={formattedData}
                index='timeSlotStart'
                categories={['clicks']}
                colors={['blue']}
                yAxisWidth={48} />
        )

    }

}



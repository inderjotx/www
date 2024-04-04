import { Click } from "@prisma/client";
import { prismaClient } from "./prisma";
import { getHumanReadTime } from "./utils";


enum TIME {
    "Hours" = 3600,
    "Days" = 24 * 3600,
    "Weeks" = 7 * 24 * 3600,
    "Months" = 30 * 24 * 3600
}

function calculateTimeBefore(seconds: number) {
    const curMilliSec = new Date().getTime();
    const millisecondsBefore = curMilliSec - (seconds * 1000);
    return new Date(millisecondsBefore);
}

export async function getClickData(from: TimeFrame) {
    if (!(from in TIME)) {
        throw new Error("Invalid time frame provided.");
    }

    const seconds = TIME[from];
    const date = calculateTimeBefore(seconds);

    const data = await prismaClient.click.findMany({
        where: {
            createdOn: {
                gt: date
            }
        }
    });

    return data;
}




export async function transformData(from: TimeFrame, clickDataArray: Click[]) {

    const seconds = TIME[from]

    // milliseonds 
    const timeFromStartSeconds = calculateTimeBefore(seconds).getTime()

    // for 6 colums 
    // millisecons 
    const delta = (seconds * 1000) / 6

    const dataArray: BarGraphInput = []

    for (let i = 0; i <= 6; i++) {

        const dataItem = {
            startIntervalMiliSec: timeFromStartSeconds + delta * i,
            clicks: 0,
            time: timeFromStartSeconds + delta * i
        }
        dataArray.push(dataItem)
    }


    clickDataArray.forEach((clickItem) => {

        const timeClickMadeInSeconds = clickItem.createdOn.getTime()
        const timeSlotOfClick = findColumnForDataPoint(delta, timeFromStartSeconds, timeClickMadeInSeconds)

        // just for protection
        if (dataArray.length > timeSlotOfClick) {
            dataArray[timeSlotOfClick].clicks += 1
        }


    })


    return dataArray

}


function findColumnForDataPoint(delta: number, slotStartSecond: number, secondsClickMade: number) {

    const diffSeconds = secondsClickMade - slotStartSecond

    // index start from 0 
    // ideall we should have done ceil like if we have 45min , dealt of 20min , the ansewr of this will be 2.secomthing , means data has to be in 3 columns
    // which means 2 index , 
    const columnIndex = Math.floor(diffSeconds / delta)
    return columnIndex
}



export async function getAnalytics(from: TimeFrame): Promise<Analytics> {

    const clickData = await getClickData(from)
    const totalClicks = clickData.length
    const otherData = getAccumulatedData(clickData)
    const barBarData = await transformData(from, clickData)
    return {
        ...otherData,
        totalClicks: totalClicks,
        barGraphData: barBarData
    }

}



export function getAccumulatedData(rawData: Click[]) {

    const cityClick: DataArray<DataItem & { country: string }> = []
    const countryClick: DataArray<DataItem> = []
    const deviceClick: DataArray<DataItem> = []
    const browserClick: DataArray<DataItem> = []
    const osClick: DataArray<DataItem> = []
    const refClick: DataArray<DataItem> = []


    rawData.forEach((click) => {

        updateArrayClickInfo(click, click.country, countryClick)
        updateArrayClickInfo(click, click.browser, browserClick)
        updateArrayClickInfo(click, click.device, deviceClick)
        updateArrayClickInfo(click, click.os, osClick)
        updateArrayClickInfo<boolean>(click, click.city, cityClick, true)
        updateArrayClickInfo(click, click.ref, refClick)

    })


    sortArrays(cityClick, countryClick, deviceClick, browserClick, osClick, refClick)




    return {
        cityData: cityClick,
        countryData: countryClick,
        deviceData: deviceClick,
        browserData: browserClick,
        osData: osClick,
        refData: refClick
    }

}

type DataArrayInput<T extends boolean> = T extends true ? DataArray<DataItem & { country: null | string | undefined }> : DataArray<DataItem>

function updateArrayClickInfo<T extends boolean>(clicks: Click, key: string | null, dataArray: DataArrayInput<T>, isClickData?: T) {


    if (key === null) return

    for (let i = 0; i < dataArray.length; i++) {

        // if found increment the value  
        if (dataArray[i].name === key) {
            dataArray[i].value += 1
            return
        }

    }



    // not found , create one
    // have to add country name initally only

    const dataItem = isClickData ? { name: key, value: 1, country: clicks.country || null } : { name: key, value: 1 }

    // @ts-ignore
    dataArray.push(dataItem)

}



function sortArrays(...arrays: DataItem[][]) {

    arrays.forEach(arr => {
        arr.sort((a, b) => b.value - a.value)
    })

    console.log(arrays)

}

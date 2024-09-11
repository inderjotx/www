'use server'


import { Click } from "@prisma/client";
import { prismaClient } from "../prisma";


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

interface CityClick extends DataItem {
    country: string
}

function getAccumulatedData(rawData: Click[]) {

    const cityClick: CityClick[] = []
    const countryClick: DataArray = []
    const deviceClick: DataArray = []
    const browserClick: DataArray = []
    const osClick: DataArray = []
    const refClick: DataArray = []


    rawData.forEach((click) => {

        updateArrayClickInfo(click, click.country, countryClick, "country")
        updateArrayClickInfo(click, click.browser, browserClick, "browser")
        updateArrayClickInfo(click, click.device, deviceClick, "device")
        updateArrayClickInfo(click, click.os, osClick, "os")
        updateArrayClickInfo(click, click.city, cityClick, "city")
        updateArrayClickInfo(click, click.ref, refClick, "ref")

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


function updateArrayClickInfo(click: Click, key: string | null, dataArray: DataArray, type: "city" | "country" | "ref" | "browser" | "os" | "device") {


    if (key === null) return

    for (let i = 0; i < dataArray.length; i++) {

        // if found increment the value  
        if (dataArray[i].name === key) {
            dataArray[i].value += 1
            return
        }

    }

    // not found , create one
    if (type === 'city') {
        const dataItem = { name: key, value: 1, iconKey: click?.code || "XX" }
        dataArray.push(dataItem)
        return

    }

    const dataItem = { name: key, value: 1, iconKey: click?.code || "XX" }
    dataArray.push(dataItem)

}





function sortArrays(...arrays: DataItem[][]) {

    arrays.forEach(arr => {
        arr.sort((a, b) => b.value - a.value)
    })

}

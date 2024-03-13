
type TimeFrame = "Hours" | "Days" | "Weeks" | "Months";


type BarGraphInput = { startIntervalMiliSec: number, humanReadTime: string, clicks: number }[]

type DataItem = { name: string, value: number }
type DataArray = DataItem[]

interface Analytics {
    barGraphData: BarGraphInput,
    totalClicks: number,
    cityData: DataArray,
    countryData: DataArray,
    deviceData: DataArray,
    browserData: DataArray,
    osData: DataArray,
    refData: DataArray,
}

type demographics = keyof Analytics & ("cityData" | "countryData" | "refData")
type userDevice = keyof Analytics & ("browserData" | "osData" | "deviceData")
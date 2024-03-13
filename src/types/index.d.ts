
type TimeFrame = "Hours" | "Days" | "Weeks" | "Months";


type BarGraphInput = { startIntervalMiliSec: number, humanReadTime: string, clicks: number }[]

type DataItem = { name: string, value: number }
type DataArray = DataItem[]

type Analytics = {
    barGraphData: BarGraphInput,
    totalClicks: number,
    cityData: DataArray,
    countryData: DataArray,
    deviceData: DataArray,
    browserData: DataArray,
    osData: DataArray,
    refClick: DataArray,
}
// exa: { key: "chandigarh" : value : 34 },  ...
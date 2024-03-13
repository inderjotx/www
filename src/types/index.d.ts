
type TimeFrame = "Hours" | "Days" | "Weeks" | "Months";


type BarGraphInput = { timeSlotStart: number, clicks: number }[]

type DataItem = { key: string, value: number }
type DataArray = DataItem[]
// exa: { key: "chandigarh" : value : 34 },  ...
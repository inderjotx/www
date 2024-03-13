import { getAnalytics } from "@/lib/getAnalytics"
import { AnalyticsChart } from "./_components/AnalyticsChart"

export default async function page() {


    // if hour -> time in hours:minutes
    // if day -> time in hours:min
    // if week -> day hours:min
    // month -> day hour : min

    return (
        <div>
            <AnalyticsChart />
        </div>
    )
}

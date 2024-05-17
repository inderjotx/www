import { AnalyticsChart } from "./_components/AnalyticsChart"

export const metadata = {
    title: "Inderjot // Analytics",
    description: "Analytics page of Inderjot Singh",
};


export default async function page() {


    return (
        <div className="h-[140vh]">
            <AnalyticsChart />
        </div>
    )
}

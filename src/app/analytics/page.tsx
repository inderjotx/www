import { getAnalytics } from "@/lib/graphData"

export default async function page() {
    const data = await getAnalytics("Days")
    console.log(data)

    return (
        <div>
            Analytics
        </div>
    )
}

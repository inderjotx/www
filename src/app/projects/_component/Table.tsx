import { Separator } from "@/components/ui/separator";
import { TableData } from "../page";
import { Anchor } from "@/components/Anchor";
import { it } from "node:test";
const dataArray: TableData[] = [
    {
        projectName: "www",
        Description: "Personal website",
        tags: ["TS", "React", "NextJS", "Tailwind", "Redis"],
        year: 2024,
        githubUrl: "https://github.com/inderjotx/www",
        liveUrl: "https://www.inderjot.tech"
    },
    {
        projectName: "Snippet Space",
        Description: "Communicate with code",
        tags: ["NodeJS", "NextJs", "Tailwind", "React"],
        year: 2024,
        githubUrl: "https://github.com/inderjotx/striver-frontend",
        liveUrl: "https://code.inderjot.tech"
    }
];



export function Table() {
    return (
        <div className="h-full w-full ">
            <div className="grid text-muted-foreground text-sm hover:bg-muted-foreground/10 px-3 py-3 border-b grid-cols-10 ">
                <div className="col-span-3 ">Project</div>
                <div className="col-span-2 ">Github</div>
                <div className="col-span-4 text-right pr-7">Description</div>
                <div className="col-span-1 text-right">Year</div>
            </div>


            {
                dataArray.map((item: TableData, index) => (
                    <div key={index} className="grid text-sm hover:bg-muted-foreground/10 px-3 py-3 border-b grid-cols-10 ">
                        <div className="col-span-3 "><Anchor href={item.liveUrl} text={item.projectName} /> </div>
                        <div className="col-span-2 "><Anchor href={item.githubUrl} text={"Github"} /> </div>
                        <div className="col-span-4 text-right pr-7">{item.Description} </div>
                        <div className="col-span-1 text-right">{item.year}</div>
                    </div>
                ))
            }

        </div>

    )
}

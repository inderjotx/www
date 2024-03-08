import { Separator } from "@/components/ui/separator";
import { TableData } from "../page";
import { Anchor } from "@/components/Anchor";
import { it } from "node:test";
const dataArray: TableData[] = [
    {
        projectName: "Project 1",
        Description: "Description of Project 1",
        tags: ["TS/JS", "React"],
        year: 2022,
        githubUrl: "https://github.com/project1",
        liveUrl: "https://project1.com"
    },
    {
        projectName: "Project 2",
        Description: "Description of Project 2",
        tags: ["Web3", "NextJs"],
        year: 2023,
        githubUrl: "https://github.com/project2",
        liveUrl: null
    },
    {
        projectName: "Project 3",
        Description: "Description of Project 3",
        tags: ["AWS", "Rust"],
        year: 2021,
        githubUrl: "https://github.com/project3",
        liveUrl: "https://project3.com"
    },
    {
        projectName: "Project 4",
        Description: "Description of Project 4",
        tags: ["React", "TS/JS"],
        year: 2024,
        githubUrl: "https://github.com/project4",
        liveUrl: null
    },
    {
        projectName: "Project 5",
        Description: "Description of Project 5",
        tags: ["NextJs", "Rust"],
        year: 2023,
        githubUrl: "https://github.com/project5",
        liveUrl: "https://project5.com"
    },
    {
        projectName: "Project 6",
        Description: "Description of Project 6",
        tags: ["Web3", "AWS"],
        year: 2022,
        githubUrl: "https://github.com/project6",
        liveUrl: null
    },
    {
        projectName: "Project 7",
        Description: "Description of Project 7",
        tags: ["Rust", "NextJs"],
        year: 2020,
        githubUrl: "https://github.com/project7",
        liveUrl: "https://project7.com"
    },
    {
        projectName: "Project 8",
        Description: "Description of Project 8",
        tags: ["React", "TS/JS"],
        year: 2024,
        githubUrl: "https://github.com/project8",
        liveUrl: null
    },
    {
        projectName: "Project 9",
        Description: "Description of Project 9",
        tags: ["Web3", "AWS"],
        year: 2021,
        githubUrl: "https://github.com/project9",
        liveUrl: "https://project9.com"
    },
    {
        projectName: "Project 10",
        Description: "Description of Project 10",
        tags: ["Rust", "AWS"],
        year: 2023,
        githubUrl: "https://github.com/project10",
        liveUrl: null
    }
];



export function Table() {
    return (
        <div className="h-full w-full ">
            <div className="grid text-muted-foreground text-sm hover:bg-muted-foreground/10 px-3 py-3 border-b grid-cols-10 ">
                <div className="col-span-3 ">Project</div>
                <div className="col-span-6 text-right pr-7">Description</div>
                <div className="col-span-1 text-right">Year</div>
            </div>


            {
                dataArray.map((item: TableData, index) => (
                    <div key={index} className="grid text-sm hover:bg-muted-foreground/10 px-3 py-3 border-b grid-cols-10 ">
                        <div className="col-span-3 "><Anchor href={item.githubUrl} text={item.projectName} /> </div>
                        <div className="col-span-6 text-right pr-7">{item.Description} </div>
                        <div className="col-span-1 text-right">{item.year}</div>
                    </div>
                ))
            }

        </div>

    )
}

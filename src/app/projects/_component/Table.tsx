import { TableData } from "../page";
import { Anchor } from "@/components/Anchor";
const dataArray: TableData[] = [
  {
    projectName: "Web3 Jobs",
    Description: "Latest web3 jobs",
    tags: ["TS", "React", "NextJS", "Tailwind", "Redis"],
    year: 2024,
    githubUrl: "https://github.com/inderjotx/jobs",
    liveUrl: "https://token-jobs.inderjot.me",
  },
  {
    projectName: "www",
    Description: "Personal website",
    tags: ["TS", "React", "NextJS", "Tailwind", "Redis"],
    year: 2024,
    githubUrl: "https://github.com/inderjotx/www",
    liveUrl: "https://www.inderjot.me",
  },

  {
    projectName: "LinkTree",
    Description: "Inderjot's link tree",
    tags: ["TS", "React", "NextJS", "Tailwind", "Redis"],
    year: 2024,
    githubUrl: "https://github.com/inderjotx/linkTree",
    liveUrl: "https://hi.inderjot.me",
  },

  {
    projectName: "Snippet Space",
    Description: "Communicate with code",
    tags: ["NodeJS", "NextJs", "Tailwind", "React"],
    year: 2024,
    githubUrl: "https://github.com/inderjotx/striver-frontend",
    liveUrl: "https://code.inderjot.me/create",
  },

  {
    projectName: "DesignFly",
    Description: "Your Destination for Inspiring Visual Creavitity",
    tags: ["AWS", "NextJs", "Tailwind", "React", "TS"],
    year: 2024,
    githubUrl: "https://github.com/inderjotx/designFly",
    liveUrl: "https://designfly.inderjot.me",
  },
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

      {dataArray.map((item: TableData, index) => (
        <div
          key={index}
          className="grid text-sm hover:bg-muted-foreground/10 px-3 py-3 border-b grid-cols-10 "
        >
          <div className="col-span-3 ">
            <Anchor newTab href={item.liveUrl} text={item.projectName} />{" "}
          </div>
          <div className="col-span-2 ">
            <Anchor newTab href={item.githubUrl} text={"Github"} />{" "}
          </div>
          <div className="col-span-4 text-right pr-7">{item.Description} </div>
          <div className="col-span-1 text-right">{item.year}</div>
        </div>
      ))}
    </div>
  );
}

import { poppins } from "@/lib/fonts/poppins";
import { cn, getAge } from "@/lib/utils";
import { Dashboard } from "../components/Dashboard";
import { Anchor, AnchorArrow } from "@/components/Anchor";
import { config } from "@/config";




export default function Home() {
  const age = getAge()
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className={cn(poppins.className, "text-lg inline-block  font-medium text-transparent  bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-500 bg-clip-text")} >Inderjot Singh</h2>
        <h3 className=" text-muted-foreground" >{age} y/o Software Developer</h3>
      </div>
      <div>
        <p className=" text-muted-foreground">
          I design, craft and publish products of quality and reliability, specializing in building full-stack application using NextJS and React .
        </p>
      </div>
      <div>
        <p className=" text-muted-foreground">
          A chess enthusiast and gym freak. I thrive in the Linux and Vim ecosystem, embracing a terminal-centric lifestyle.
        </p>
      </div>
      <div className="flex gap-3">
        <AnchorArrow href={'/projects'} text="projects" />
        <AnchorArrow href={'/analytics'} text="analytics" />
        <AnchorArrow href={'/music'} text="music" />
      </div>
      <div>

      </div>
      <div>

        <p className=" text-muted-foreground">
          If you have an interesting project in mind and would like to work with me, feel free to reach out to me at <Anchor newTab href={config.links.twitter} text="@__Inderjot" ></Anchor>  or <Anchor href={'mailto:inderjotsingh141@gmail.com'} text="inderjotsingh141@gmail.com" ></Anchor>
        </p>

      </div>
      <div>
        <Dashboard />
      </div>
    </div>
  );
}

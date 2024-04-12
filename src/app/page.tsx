import { poppins } from "@/lib/fonts/poppins";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Dashboard } from "../components/Dashboard";
import { metadata } from "./layout";
import { Anchor } from "@/components/Anchor";

metadata.title = "Inderjot Singh"

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className={cn(poppins.className, "text-lg")} >Inderjot Singh</h2>
        <h3 className="text-sm text-muted-foreground" >20 y/o Software Engineer</h3>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">
          I design, craft and publish products of quality and reliability, specializing in scalable real-time systems & networking.
        </p>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">
          A chess enthusiast and competitive programmer. I thrive in the Linux and Vim ecosystem, embracing a terminal-centric lifestyle.
        </p>
      </div>
      <div>

      </div>
      <div>
        <p className="text-sm text-muted-foreground">
          That&apos;s it. Feel free to reach me out at <Anchor newTab href={'https://twitter.com/__Inderjot'} text="@__Inderjot" ></Anchor>  or <Anchor href={'mailto:inderjotsingh141@gmail.com'} text="inderjotsingh141@gmail.com" ></Anchor>
        </p>
      </div>
      <div>
        <Dashboard />
      </div>
    </div>
  );
}

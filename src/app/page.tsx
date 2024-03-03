import { poppins } from "@/lib/fonts/poppins";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Dashboard } from "./_components/Dashboard";

export default function Home() {
  return (
    <div className="mt-16 flex flex-col gap-4">
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
          That&apos;s it. Feel free to reach me out at <Link className="underline-offset-auto text-white underline  " href={'https://twitter.com/__Inderjot'} >@__Inderjot</Link>  or <Link className=" underline underline-offset-auto text-white " href={'mailto:inderjotsingh141@gmail.com'} >inderjotsingh141@gmail.com</Link>
        </p>
      </div>
      <div>
        <Dashboard />
      </div>
    </div>
  );
}

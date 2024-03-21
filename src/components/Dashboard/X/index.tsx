import { config } from "@/config";
import Image from "next/image";

export function X() {
    return (

        <a href={config.links.twitter} target="_blank" rel="norefferer"  >
            <div className="flex bg-zinc-900 gap-[2px] flex-col items-center justify-center h-full w-full">
                <div className="flex size-7 relative">
                    <Image src={'/dashboard/x.svg'} fill quality={100} className="absolute  top-0 w-full h-full object-contain" alt="twitter_logo" />
                </div>
                <span className="text-[11px] -rotate-6 ">(share meme ;) </span>
            </div>
        </a>

    )
}

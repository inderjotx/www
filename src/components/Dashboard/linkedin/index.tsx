import { config } from "@/config";
import { Linkedin } from "lucide-react";

export function LinkedIn() {
    return (
        <a href={config.links.linkedIn} target="_blank" rel="norefferer"  >
            <div className="flex bg-blue-500 gap-[2px] flex-col items-center justify-center h-full w-full">
                <Linkedin />
                <span className="text-[11px] -rotate-6 ">(serious stuff 😤 )</span>
            </div>
        </a>
    )
}



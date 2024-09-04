import { weeklyCodeTime } from "@/lib/wakatime";
import Image from "next/image";
import React from "react";

export async function Code() {
  const data = await weeklyCodeTime();

  const hours = data.time.split(":")[0];

  return (
    <a
      target="_blank"
      rel="noopener norefferer"
      href={"https://wakatime.com/@inderjotx"}
    >
      <div className="relative h-full bg-zinc-900 overflow-hidden flex justify-center items-center">
        <div className="-rotate-3 z-10 flex text-center  flex-col">
          <h1 className="text-lg font-bold">{hours}h</h1>
          <h2 className="text-[10px]">coding stats</h2>
          <h3 className="text-[8px]">(wakatime)</h3>
        </div>
        <div className="absolute  -rotate-12 left-0 -top-1">
          <Image
            src="/dashboard/vscode.svg"
            width={45}
            height={45}
            alt="vs_codeicon"
          />
        </div>
        <div className="w-full h-full absolute top-0 backdrop-blur-sm  backdrop-filter "></div>
      </div>
    </a>
  );
}

"use client";
import { DiscordIcon } from "./discordIcon";
import { config } from "@/config";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/utils";

export function Discord() {
  const { data } = useQuery({
    queryKey: ["discord-status"],
    queryFn: async () => await fetcher<string | undefined>("/api/discord"),
    refetchInterval: 1000 * 30,
  });

  return (
    <a href={config.links.discord} target="_blank" rel="noreferred">
      <div className=" w-full bg-zinc-900  h-full relative overflow-hidden flex items-center justify-center">
        <div className="flex absolute top-0 left-0 h-full md:size-20 md:left-0  -rotate-45 ">
          <DiscordIcon />
        </div>
        <div className="text-xl z-10 -rotate-12 font-bold">{data}</div>
        <div className="w-full h-full absolute top-0  backdrop-blur-sm bg-black/20  backdrop-filter "></div>
      </div>
    </a>
  );
}

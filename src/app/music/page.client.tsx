"use client";
import { getCurrentTrack, getRecentTrack, getTopTracks } from "@/lib/music";
import { poppins } from "@/lib/fonts/poppins";
import { cn } from "@/lib/utils";
import React from "react";
import { RecentPlay } from "./_components/MusicCard";
import { SingleTrack } from "./_components/SingleTracks";
import { useQueries, useQuery } from "@tanstack/react-query";

export default function ClientPage() {
  const [top, recent, current] = useQueries({
    queries: [
      {
        queryKey: ["top-tracks"],
        queryFn: async () => getTopTracks(),
        refetchInterval: 1000 * 60 * 60, // every 1 hours
      },
      {
        queryKey: ["recent-track"],
        queryFn: async () => getRecentTrack(),
        refetchInterval: 1000 * 60, // every 60 second
      },
      {
        queryKey: ["current-track"],
        queryFn: async () => getCurrentTrack(),
        refetchInterval: 1000 * 10, // every 10 second
      },
    ],
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className={cn("font-semibold text-xl", poppins.className)}>Music</h1>
      <div className=" text-muted-foreground">
        Music has always been something near to my heart. Whether it&apos;s a
        happy day or a sad one, there is a memory linked with it, and a song
        that accompanies the moment.
      </div>

      <div>
        <RecentPlay data={current.data ?? recent.data} />
      </div>
      <div className="mt-10">
        <h1 className={cn("font-semibold text-xl", poppins.className)}>
          Fav Songs
        </h1>
      </div>
      <div className="text-muted-foreground">
        I listen to a lot of Spotify, Over the last 12 months, Below you can
        find an up-to-date collection of my favourite songs from the past ~4
        weeks.
      </div>

      <div className="h-40 gap-2 w-full whitespace-nowrap scrollbar-hide  flex overflow-x-auto  ">
        {top.data?.map((track, index) => (
          <SingleTrack {...track} key={index} />
        ))}
      </div>
    </div>
  );
}

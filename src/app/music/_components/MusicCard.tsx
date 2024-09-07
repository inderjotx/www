"use client";

import Image from "next/image";
import Link from "next/link";
import { parseDate } from "@/lib/utils";
import { Music } from "lucide-react";
import { MusicCardTrack } from "@/interfaces/music/music";

export function RecentPlay({
  data,
}: {
  data: MusicCardTrack | null | undefined;
}) {
  if (!data) {
    return <LoadingRecent />;
  }

  return <TrackCard data={data} />;
}

function TrackCard({ data }: { data: MusicCardTrack }) {
  return (
    <a href={data.href} target="_blank" rel="norefferer noopener">
      <div className="w-full h-20 active:ring active:ring-red-500 bg-muted-foreground/10 relative rounded-sm flex">
        <div className="w-1/6 h-full rounded-l-sm overflow-hidden relative">
          <Image
            className="object-cover"
            alt="image"
            quality={100}
            src={data.image_url}
            fill
            sizes="100"
          ></Image>
        </div>
        <div className="w-5/6 p-2  justify-center pl-5 h-full flex flex-col ">
          <div className="text-[12px]  font-mono flex items-center  gap-2  text-red-400">
            {data.listenOn ? parseDate(data.listenOn) : "CURRENTLY PLAYING..."}
          </div>
          <div className="font-semibold flex gap-1">
            <span>{data.title}</span>
          </div>
          <div className="font-semibold text-sm text-muted-foreground flex gap-1">
            <span>{data.artist}</span>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full transition-all w-full hover:bg-black/30"></div>
      </div>
    </a>
  );
}

function LoadingRecent() {
  return (
    <div className="w-full h-20 active:ring active:ring-red-500 bg-muted-foreground/10 relative rounded-sm flex">
      <div className="w-1/6 h-full bg-muted-foreground/5 rounded-l-sm  overflow-hidden flex items-center justify-center">
        <Music className="size-8" />
      </div>
      <div className="w-5/6 p-2  justify-center pl-5 h-full flex flex-col ">
        <div className="text-[12px]  font-mono flex items-center  gap-2  text-red-400">
          Fetching ...
        </div>
        <div className="font-semibold flex gap-1">
          <span>Title</span>
        </div>
        <div className="font-semibold text-sm text-muted-foreground flex gap-1">
          <span>Artist</span>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full transition-all w-full hover:bg-black/30"></div>
    </div>
  );
}

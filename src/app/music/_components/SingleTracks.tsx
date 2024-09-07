import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SingleTrackProps {
  href: string;
  image_url: string;
  title: string;
  artist: string;
}

export function SingleTrack({
  href,
  image_url,
  title,
  artist,
}: SingleTrackProps) {
  return (
    <a href={href} target="_blank" rel="noopener norefferer">
      <div className="h-full rounded-sm overflow-hidden w-[140px] group relative inline-block">
        <Image
          src={image_url}
          alt="image"
          className="object-cover"
          fill
          quality={100}
          sizes="100"
        />
        <div className="flex h-full gap-2 whitespace-pre-line items-center justify-center  flex-col w-[140px]">
          <div className="hidden text-center font-mono  group-hover:flex z-50">
            {title}
          </div>
          <div className="hidden  group-hover:flex  text-[11px] z-50">
            {artist}
          </div>
        </div>
        <div className="absolute transition-all top-0 z-10 h-full w-full group-hover:bg-black/80"></div>
      </div>
    </a>
  );
}

import { Disc3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function FallbackMusic() {
  return (
    <Link href={"/music"} className="w-full h-full">
      <div className="relative overflow-hidden bg-zinc-900 w-full h-full">
        <Disc3 className="animate-spin  h-32 w-32  -mx-16" />

        <Image
          className="absolute bottom-0 right-0 "
          src={"/dashboard/musicCat.gif"}
          height={100}
          width={100}
          unoptimized
          alt="cat-music"
        />
      </div>
    </Link>
  );
}

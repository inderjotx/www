import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function FallbackBook() {
  return (
    <div className="h-full w-full flex relative flex-col items-center justify-center bg-muted">
      <h1 className={cn("absolute   top-2  ")}>Fetching...</h1>
      <Image
        className="absolute object-fill"
        width={100}
        height={100}
        src={"/dashboard/bookcat.gif"}
        alt="cat-reading-book"
        unoptimized
      />
    </div>
  );
}

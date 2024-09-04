import React from "react";
import Image from "next/image";

export function FallbackAnalytics() {
  return (
    <div className="relative h-full w-full">
      <Image
        quality={100}
        src={"/dashboard/analytics.webp"}
        alt="cat girl showing analytics "
        fill
        className="object-cover absolute inset-0 -z-20 "
        sizes="100"
      />
    </div>
  );
}

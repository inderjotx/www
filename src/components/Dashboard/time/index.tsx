"use client";
import { cn, getTime } from "@/lib/utils";
import { CloudMoon, CloudSun } from "lucide-react";
import React, { useEffect, useState } from "react";

interface timeFormat {
  hours: string;
  minutes: string;
  isDay: boolean;
}

export function Time() {
  const [time, setTime] = useState<timeFormat>(getTime());

  useEffect(() => {
    const minLag = setTimeout(() => {
      setTime(() => getTime());
    }, 60 * 1000);

    return () => {
      clearTimeout(minLag);
    };
  }, [time]);

  return (
    <div
      className={cn(
        "flex w-full h-full gap-1 pt-1 rounded-lg flex-col items-center justify-center   text-white",
        time.isDay ? "bg-blue-600/50" : "bg-blue-600/30"
      )}
    >
      <div>
        {time.isDay ? <CloudSun></CloudSun> : <CloudMoon></CloudMoon>}
        <span className={cn("text-sm")}>
          {time.hours} : {time.minutes}
        </span>
      </div>
    </div>
  );
}

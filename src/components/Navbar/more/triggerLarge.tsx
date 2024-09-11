"use client";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { MoreData } from "./moreData";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { usePathname } from "next/navigation";
import { useClient } from "@/hooks/useClient";
import { motion } from "framer-motion";

export function MoreLarge({}) {
  const [open, setOper] = useState(true);
  const pathname = usePathname();
  const [isClient] = useClient();
  const timeOutRef = useRef<NodeJS.Timeout | null>(null);

  const isMore = !(
    pathname === "/" ||
    pathname.includes("work") ||
    pathname.includes("projects")
  );

  useEffect(() => {
    setOper(() => false);
  }, [pathname]);

  if (!isClient) {
    return <div>more</div>;
  }

  function onStart() {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }

    if (open) return;
    setOper(true);
  }

  function onEnd() {
    const timeOut = setTimeout(() => {
      setOper(false);
    }, 400);

    timeOutRef.current = timeOut;
  }

  function onDropDownChange(val: boolean) {
    switch (val) {
      case true:
        onStart();
        break;
      case false:
        onEnd();
        break;
    }
  }

  return (
    <Popover open={open} onOpenChange={onDropDownChange}>
      <PopoverTrigger onMouseEnter={onStart} onMouseLeave={onEnd}>
        <div className="flex cursor-pointer   items-center gap-1 group relative py-1 pl-2 pr-1">
          <span>
            more
            {isMore && (
              <motion.div
                layout
                layoutId="blob"
                className="absolute left-0 top-0 h-full w-full bg-muted -z-10 rounded-full"
              />
            )}
          </span>
          <ChevronDown
            className={cn("size-4 transition-transform", open && "rotate-180")}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={onStart}
        onMouseLeave={onEnd}
        className="w-[300px] p-1"
        side="bottom"
        align="start"
      >
        <MoreData />
      </PopoverContent>
    </Popover>
  );
}

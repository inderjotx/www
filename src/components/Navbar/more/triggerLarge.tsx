"use client";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { MoreData } from "./moreData";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { useClient } from "@/hooks/useClient";

export function MoreLarge() {
  const [open, setOper] = useState(true);
  const pathname = usePathname();
  const [isClient] = useClient();
  const timeOutRef = useRef<NodeJS.Timeout | null>(null);

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
    }, 800);

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
    <DropdownMenu open={open} onOpenChange={onDropDownChange}>
      <DropdownMenuTrigger onMouseEnter={onStart} onMouseLeave={onEnd}>
        <div className="flex cursor-pointer items-center gap-1 group relative p-1">
          <span>more</span>
          <ChevronDown
            className={cn(
              "size-4",
              open ? "-rotate-180  duration-200" : "rotate-0 duration-200"
            )}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onMouseEnter={onStart}
        onMouseLeave={onEnd}
        className="w-[300px]"
        side="bottom"
        align="start"
      >
        <MoreData />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarDrawer } from "./navbarDrawer";
import { MoreData } from "./moreData";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MoreSmall() {
  const [open, onOpenChange] = useState<boolean>(false);
  const pathname = usePathname();

  const isMore = !(
    pathname === "/" ||
    pathname.includes("work") ||
    pathname.includes("projects")
  );

  useEffect(() => {
    onOpenChange(() => false);
  }, [pathname]);

  function setValue(val: boolean) {
    onOpenChange(val);
  }

  return (
    <div className="cursor-pointer" onClick={() => onOpenChange(true)}>
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
        <ChevronDown className={cn("size-4 ")} />
      </div>
      {
        <NavbarDrawer open={open} onOpenChange={setValue}>
          <MoreData />
        </NavbarDrawer>
      }
    </div>
  );
}

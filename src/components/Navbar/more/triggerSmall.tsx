"use client";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarDrawer } from "./navbarDrawer";
import { MoreData } from "./moreData";

export function MoreSmall() {
  const [open, onOpenChange] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    onOpenChange(() => false);
  }, [pathname]);

  function setValue(val: boolean) {
    onOpenChange(val);
  }

  return (
    <div className="cursor-pointer" onClick={() => onOpenChange(true)}>
      <div className="flex items-center gap-1 group ">
        more
        <ChevronDown className="size-4" />
      </div>
      <NavbarDrawer open={open} onOpenChange={setValue}>
        <MoreData />
      </NavbarDrawer>
    </div>
  );
}

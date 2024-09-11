"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const navLinks = [
  {
    text: "α",
    href: "/",
  },
  {
    text: "work",
    href: "/work",
  },
  {
    text: "projects",
    href: "/projects",
  },
];

export function Navbar() {
  let pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 765 });
  const [curLink, setLink] = useState("");
  const [MoreLarge, setMoreLarge] = useState<React.ComponentType | null>(null);
  const [MoreSmall, setMoreSmall] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    setLink(pathname);
  }, [pathname]);

  useEffect(() => {
    if (!isMobile) {
      import("./more/triggerLarge").then((module) => {
        setMoreLarge(() => module.MoreLarge);
      });
    } else {
      import("./more/triggerSmall").then((module) => {
        setMoreSmall(() => module.MoreSmall);
      });
    }
  }, [isMobile]);

  return (
    <div className="h-20 mb-2 top-0  w-full flex justify-center">
      <div className={cn(" flex relative items-center w-full md:gap-6 gap-4 ")}>
        {navLinks.map((link) => {
          return (
            <Link
              key={link.text}
              className={cn(
                "px-3  relative h-9 flex items-center rounded-full"
              )}
              href={link.href}
            >
              <h1>{link.text} </h1>
              {pathname === link.href && (
                <motion.div
                  layout
                  layoutId="blob"
                  className="absolute left-0 top-0 h-full w-full bg-muted -z-10 rounded-full"
                />
              )}
            </Link>
          );
        })}
        <div className="hidden md:flex">
          {!isMobile && MoreLarge && <MoreLarge />}
        </div>
        <div className="flex md:hidden">
          {isMobile && MoreSmall && <MoreSmall />}
        </div>
      </div>
    </div>
  );
}

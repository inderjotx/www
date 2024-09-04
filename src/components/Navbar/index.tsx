"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MoreLarge } from "./more/triggerLarge";
import { MoreSmall } from "./more/triggerSmall";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  {
    text: "α",
    href: "/",
  },

  {
    text: "about",
    href: "/about",
  },

  {
    text: "projects",
    href: "/projects",
  },
];

export function Navbar() {
  let pathname = usePathname();

  const [curLink, setLink] = useState("");

  useEffect(() => {
    setLink(pathname);
  }, [pathname]);

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
        <div className="hidden lg:flex">
          <MoreLarge />{" "}
        </div>
        <div className="flex lg:hidden">
          <MoreSmall />{" "}
        </div>
      </div>
    </div>
  );
}

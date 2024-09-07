"use client";
import React, { useState } from "react";

import {
  IconJava,
  IconJenkins,
  IconNextJS,
  IconKubernetes,
  IconLambda,
  IconPrisma,
  IconPostgres,
  IconPython,
  IconReactJS,
  IconTailwindcss,
  IconTerraform,
  IconTypescript,
  IconVite,
  IconAWS,
  IconGit,
  IconMySQL,
} from "@/components/Icons";
import { cn } from "@/lib/utils";

const icons = [
  IconJava,
  IconJenkins,
  IconNextJS,
  IconKubernetes,
  IconLambda,
  IconPrisma,
  IconPostgres,
  IconPython,
  IconReactJS,
  IconTailwindcss,
  IconTerraform,
  IconTypescript,
  IconVite,
  IconAWS,
  IconGit,
  IconMySQL,
];

export function Tools() {
  const reversedIcons = [...icons];
  reversedIcons.reverse();

  return (
    <div className="w-full h-full flex flex-col gap-4 justify-center relative   ">
      <Carousel icons={icons} direction="left" />
      <Carousel icons={reversedIcons} direction="right" />
    </div>
  );
}

function Carousel({
  icons,
  direction,
}: {
  icons: any;
  direction: "left" | "right";
}) {
  const effect =
    direction == "left" ? "animate-slide_left" : "animate-slide_right";

  return (
    <div className="w-full group inline-flex  flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul
        className={cn(
          "flex items-center justify-center group-hover:pause md:justify-start ",
          effect
        )}
        aria-hidden="true"
      >
        {icons.map((Icon: any, index: number) => (
          <li className="mx-4" key={"icon" + index}>
            <div className="max-w-none">
              <IconWrapper key={index}>
                <Icon />
              </IconWrapper>
            </div>
          </li>
        ))}
      </ul>

      <ul
        className={cn(
          "flex items-center justify-center group-hover:pause md:justify-start ",
          effect
        )}
        aria-hidden="true"
      >
        {icons.map((Icon: any, index: number) => (
          <li className="mx-4" key={"icon" + index}>
            <div className="max-w-none">
              <IconWrapper key={index}>
                <Icon />
              </IconWrapper>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="size-12 p-1 bg-zinc-900 flex items-center justify-center rounded-sm ">
      {children}
    </div>
  );
}

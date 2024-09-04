"use client";
import React, { Dispatch, SetStateAction } from "react";
import dynamic from "next/dynamic";

interface GraphChangeButtonProps {
  buttons: { title: string; action: string }[];
  updateState: Dispatch<SetStateAction<any>>;
  curData: string;
  type: string;
}

export function GraphChangeButton({
  buttons,
  type,
  curData,
  updateState,
}: GraphChangeButtonProps) {
  const Motion = dynamic(
    () => import("framer-motion").then((mod) => mod.motion.div),
    { ssr: false }
  ) as React.ComponentType<any>;

  return (
    <div className="flex gap-2">
      {buttons.map((button) => (
        <div
          className="flex cursor-pointer items-center relative text-[12px]  p-3 h-5 mx-0 "
          onClick={() => updateState(button.action)}
          key={button.action}
        >
          <div className="z-20">{button.title}</div>

          {curData === button.action && (
            <Motion
              layout
              layoutId={`blob_${type}`}
              className="z-10 absolute inset-0 backdrop-blur-sm rounded-sm bg-blue-900  "
            ></Motion>
          )}
        </div>
      ))}
    </div>
  );
}

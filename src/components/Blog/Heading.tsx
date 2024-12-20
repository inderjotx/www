import { cn } from "@/lib/utils";
import React from "react";

export function Heading({
  title,
  className,
}: {
  title: React.ReactNode;
  className?: String;
}) {
  return (
    <div className={cn("text-4xl font-bold text-yellow-300", className)}>
      {title}
    </div>
  );
}

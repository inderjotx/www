import { cn } from "@/lib/utils";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Everyday } from "./_components/Everyday";
import { Software } from "./_components/Software";
import { Browser } from "./_components/Browser";
import { Coding } from "./_components/Coding";
import { Website } from "./_components/Website";
import { All } from "./_components/All";

export const metadata = {
  title: "Inderjot // Uses",
  description: "Things Inderjot Singh uses",
};

export default function page() {
  return (
    <div className="flex flex-col gap-10 w-full ">
      <h1 className={cn("text-2xl")}>Uses</h1>

      <div className="text-muted-foreground flex flex-col gap-2">
        <p>
          Here&apos;s a list of software and hardware that I use on a regular
          basis.
        </p>
        <p>
          Every once in a while someone asks me about my development environment
          or has questions about certain hardware. I thought it would be fun to
          list out everything I use here. Keep in mind, I change things around
          quite a bit, but I will try to keep this page updated. If I missed
          anything, please let me know.
        </p>
      </div>

      <Tabs defaultValue="all" className="overflow-x-auto scrollbar-hide ">
        <TabsList className="">
          <TabsTrigger className="" value="all">
            All
          </TabsTrigger>
          <TabsTrigger value="everyday">Everyday</TabsTrigger>
          <TabsTrigger value="software">Software</TabsTrigger>
          <TabsTrigger value="browser">Browser</TabsTrigger>
          <TabsTrigger value="coding">Coding</TabsTrigger>
          <TabsTrigger value="website">Website</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <All />{" "}
        </TabsContent>
        <TabsContent value="everyday">
          <Everyday />
        </TabsContent>
        <TabsContent value="software">
          {" "}
          <Software />{" "}
        </TabsContent>
        <TabsContent value="browser">
          <Browser />{" "}
        </TabsContent>
        <TabsContent value="coding">
          <Coding />{" "}
        </TabsContent>
        <TabsContent value="website">
          <Website />{" "}
        </TabsContent>
      </Tabs>
    </div>
  );
}

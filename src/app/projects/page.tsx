import React from "react";
import { Title } from "../uses/_components/title";
import { Table } from "./_component/Table";
import { Anchor } from "@/components/Anchor";
import { config } from "@/config";

export type TableData = {
  projectName: string;
  Description: string;
  tags: string[];
  year: number;
  githubUrl: string;
  liveUrl: string;
};

export const metadata = {
  title: "Inderjot // Projects",
  description: "Projects by Inderjot Singh",
};

export default function page() {
  return (
    <div className="flex flex-col gap-6">
      {/* title */}
      <Title title="Projects" />

      <div className="space-y-3 text-muted-foreground">
        <p>
          I love building side projects that solve either my own or someone
          else&apos;s problems.
        </p>

        <p>
          I have more projects to share to they are currently not deployed ,
          that includes my own google drive using AWS S3 , my udemy clone , and
          dribble alternative.
        </p>
        <p>
          Always happy to discuss an idea — hit me a up.{" "}
          <Anchor text="@inderjotx" href={config.links.twitter} newTab />
        </p>
      </div>

      <Table />
    </div>
  );
}

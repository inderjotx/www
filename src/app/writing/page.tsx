import React from "react";
import fs from "fs";
import path from "path";
import { cn } from "@/lib/utils";
import ArticleTitle from "./_components/ArticleTitle";
import { incrementView } from "@/lib/redis";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

type Metadata = {
  slug: string;
  title: string;
  writtenOn: string;
  redisKey: string;
};

export const metadata = {
  title: "Inderjot // Writings",
  description: "Writings page of Inderjot Singh",
};

export default async function page() {
  async function curDirFolder(dirPath: string) {
    const parentDir = process.cwd();
    const fullPath = path.join(parentDir, dirPath);
    const items = await fs.promises.readdir(fullPath);
    const folders = items.filter((item) =>
      fs.statSync(path.join(fullPath, item)).isDirectory()
    );
    return folders;
  }

  const folders = await curDirFolder("src/app/writing/(articles)");

  return (
    <div className="flex flex-col h-screen gap-10 w-full ">
      <h1 className={cn("text-2xl")}>Writings</h1>

      <p className="text-muted-foreground">
        Programming, Computers , Linux and occasinal life insights , follow on
        twitter for updates
      </p>

      <ul className="">
        {folders.map(async (folder: string) => {
          const { metadata }: { metadata: Metadata } = await import(
            `./(articles)/${folder}/content.mdx`
          );

          return (
            <form
              key={metadata.redisKey}
              action={async () => {
                "use server";
                incrementView(metadata.redisKey);
                redirect(`/writing/${metadata.redisKey}`);
              }}
            >
              <Button
                className={"flex p-0 m-0 h-full w-full"}
                variant={"secondary"}
                type="submit"
              >
                <ArticleTitle
                  {...metadata}
                  redis_key={metadata.redisKey}
                  key={metadata.redisKey}
                />
              </Button>
            </form>
          );
        })}
      </ul>
    </div>
  );
}

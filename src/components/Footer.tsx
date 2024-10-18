import { config } from "@/config";
import { GithubIcon, Linkedin, TwitterIcon } from "lucide-react";
import React from "react";

export function Footer() {
  return (
    <div className="mt-20  flex border-t-2 flex-col   max-w-3xl mx-4 md:mx-auto  py-3 ">
      <div className="flex justify-between items-center">
        <h1 className="flex gap-1 items-center">
          <span className="size-[30px] p-2 flex items-center justify-center rounded-full bg-black border-2">
            α
          </span>
          <a
            href={config.links.twitter}
            target="_blank"
            rel="norefferer noopener"
            className="underline px-1 decoration-2 decoration-gray-600 hover:decoration-gray-400"
          >
            Inderjot Singh
          </a>
        </h1>
        <div className="flex gap-3">
          <a
            href={config.links.linkedIn}
            target="_blank"
            rel="norefferer noopener"
          >
            <span className="size-[30px] p-1.5 flex items-center justify-center rounded-full bg-black border-2">
              <Linkedin className="hover:scale-105 size-5  transition-transform" />
              <span className="sr-only">LinkedIn </span>
            </span>
          </a>

          <a
            href={config.links.github}
            target="_blank"
            rel="norefferer noopener"
          >
            <span className="size-[30px] p-1 flex items-center justify-center rounded-full bg-black border-2">
              <GithubIcon className="hover:scale-105 size-5  transition-transform" />
              <span className="sr-only">Github</span>
            </span>
          </a>

          <a
            href={config.links.twitter}
            target="_blank"
            rel="norefferer noopener"
          >
            <span className="size-[30px] p-1 flex items-center justify-center rounded-full bg-black border-2">
              <TwitterIcon className="hover:scale-105 size-5  transition-transform" />
              <span className="sr-only">Twitter</span>
            </span>
          </a>
        </div>
      </div>
      <span className="text-muted-foreground mx-auto text-xs  sm:text-sm">
        Copyright© {new Date().getFullYear()} Inderjot Singh
      </span>
    </div>
  );
}

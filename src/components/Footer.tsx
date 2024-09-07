import { config } from "@/config";
import { GithubIcon, Linkedin, TwitterIcon } from "lucide-react";
import React from "react";

export function Footer() {
  return (
    <div className="mt-10 h-28 flex flex-col gap-3 w-full items-center justify-center">
      <h1>
        <a
          href={config.links.twitter}
          target="_blank"
          rel="norefferer noopener"
          className="underline px-1 decoration-2 decoration-gray-600 hover:decoration-gray-400"
        >
          Inderjot Singh
        </a>
      </h1>
      <div className="flex gap-4">
        <a
          href={config.links.linkedIn}
          target="_blank"
          rel="norefferer noopener"
        >
          <Linkedin className="hover:scale-105 transition-all" />
          <span className="sr-only">LinkedIn </span>
        </a>

        <a href={config.links.github} target="_blank" rel="norefferer noopener">
          <GithubIcon className="hover:scale-105 transition-all" />
          <span className="sr-only">Github</span>
        </a>

        <a
          href={config.links.twitter}
          target="_blank"
          rel="norefferer noopener"
        >
          <TwitterIcon className="hover:scale-105 transition-all" />
          <span className="sr-only">Twitter</span>
        </a>
      </div>
    </div>
  );
}

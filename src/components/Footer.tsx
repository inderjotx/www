import { config } from "@/config";
import { GithubIcon, Linkedin, TwitterIcon } from "lucide-react";
import React from "react";

export function Footer() {
  return (
    <div className="mt-20  flex border-t-2 flex-col   max-w-3xl mx-4 md:mx-auto  py-3 ">
      <div className="flex justify-between">
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
        <div className="flex gap-3">
          <a
            href={config.links.linkedIn}
            target="_blank"
            rel="norefferer noopener"
          >
            <Linkedin className="hover:scale-105 size-5  transition-transform" />
            <span className="sr-only">LinkedIn </span>
          </a>

          <a
            href={config.links.github}
            target="_blank"
            rel="norefferer noopener"
          >
            <GithubIcon className="hover:scale-105 size-5  transition-transform" />
            <span className="sr-only">Github</span>
          </a>

          <a
            href={config.links.twitter}
            target="_blank"
            rel="norefferer noopener"
          >
            <TwitterIcon className="hover:scale-105 size-5  transition-transform" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
}

import { githubStats } from "@/lib/github";
import { cn } from "@/lib/utils";
import React from "react";

export async function Github() {
  let data;

  try {
    data = await githubStats();
  } catch (error) {
    data = {
      followers: 9,
      following: 26,
      repos: 90,
      image_url:
        "https://avatars.githubusercontent.com/u/112561014?s=400&u=fb7e9217dbffeafb8e7a09bb3c5ae06a2dca5bde&v=4",
    };
  }

  return (
    <a
      target="_blank"
      rel="noopener norefferer"
      href={"https://github.com/inderjotx"}
    >
      <div className="flex bg-zinc-900 h-full w-full flex-col ">
        <div className="h-5/6 md:h-4/6 w-full">
          <Background />
        </div>
        <div className="grid grid-cols-2 px-4 text-sm flex-wrap text-muted-foreground">
          <div>
            <span className="">Repos: </span>
            <span className="text-white">{data.repos}</span>
          </div>
          <div>
            <span className="">Following: </span>
            <span className="text-white">{data.following}</span>
          </div>
          <div>
            <span className="">Followers: </span>
            <span className="text-white">{data.followers}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function Background() {
  const array = Array.from({ length: 90 }, (_, index) => index);
  return (
    <div className="flex flex-wrap ">
      {array.map((val, index) => {
        const opacity = Math.random();
        return (
          <div
            key={val}
            className={cn(
              "bg-green-400 m-[2px] rounded-[2px]  size-3",
              index > 60 && "md:hidden"
            )}
            style={{ opacity: opacity }}
          ></div>
        );
      })}
    </div>
  );
}

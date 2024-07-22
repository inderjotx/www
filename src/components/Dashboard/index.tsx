import React, { Suspense } from "react";
import { GithubRef } from "./GithubRef";
import { Github } from "./github";
import { Anime } from "./anime";
import { Discord } from "./discord";
import { Tools } from "./tools-carousel";
import { Post } from "./LatestPost";
import { Spotify } from "./spotify";
import { LinkedIn } from "./linkedin";
import { X } from "./X";
import { Code } from "./code";
import { BookCard } from "./book";
import { FallbackBook } from "./book/FallbackBook";
import { Analytics } from "./analytics";
import { SendEmail } from "./email";
import { FallbackMusic } from "./spotify/FallbackMusic";

export function Dashboard() {
  return (
    <div className="grid gap-3 md:grid-cols-2 grid-col-1 mb-10">
      <div className="h-36  dashboard_box">
        <GithubRef />
      </div>
      <div className="grid gap-3 grid-cols-3 h-36">
        <div className="col-span-2  dashboard_box ">
          <Github />
        </div>
        <div className="col-span-1  dashboard_box  ">
          <Spotify />
        </div>
      </div>
      <div className="h-36  grid gap-3 grid-cols-4">
        <div className=" dashboard_box">
          <Anime />
        </div>
        <div className=" col-span-3 gap-3 grid grid-rows-2">
          <div className="grid gap-3 grid-cols-2">
            <div className=" dashboard_box ">
              <LinkedIn />
            </div>
            <div className=" dashboard_box ">
              <X />
            </div>
          </div>
          <div className=" dashboard_box ">
            {/* todo */}
            <Code />
          </div>
        </div>
      </div>
      <div className="grid gap-3 grid-cols-3 h-36  ">
        <div className="col-span-1  dashboard_box ">
          <Discord />
        </div>
        <div className="col-span-2  dashboard_box ">
          {/* todo */}
          <Post />
        </div>
      </div>
      <div className="h-36 grid gap-3 grid-cols-3">
        <div className="col-span-2   dashboard_box">
          <Analytics />
        </div>
        <div className="col-span-1   dashboard_box ">
          <Suspense fallback={<FallbackBook />}>
            <BookCard />
          </Suspense>
        </div>
      </div>
      <div className="h-36  bg-background flex overflow-hidden rounded-md">
        <Tools />
      </div>

      <div className="  md:col-span-2 flex overflow-hidden rounded-md">
        <SendEmail />
      </div>
    </div>
  );
}

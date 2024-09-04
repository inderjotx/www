import React from "react";
import { GithubRef } from "./GithubRef";
import { Github } from "./github";
import { Anime } from "./anime";
import { Discord } from "./discord";
import { Spotify } from "./spotify";
import { LinkedIn } from "./linkedin";
import { X } from "./X";
import { Code } from "./code";
import dynamic from "next/dynamic";

// Dynamically imported components
const Tools = dynamic(() =>
  import("./tools-carousel").then((mod) => mod.Tools)
);
const Post = dynamic(() => import("./LatestPost").then((mod) => mod.Post));
const BookCard = dynamic(() => import("./book").then((mod) => mod.BookCard));
const Analytics = dynamic(
  () => import("./analytics").then((mod) => mod.Analytics),
  { ssr: false }
);
const SendEmail = dynamic(() => import("./email").then((mod) => mod.SendEmail));
const ChessRating = dynamic(() =>
  import("./chess").then((mod) => mod.ChessRating)
);
const LastChessGame = dynamic(
  () => import("./chess").then((mod) => mod.LastChessGame),

  { ssr: false }
);

export function Dashboard() {
  return (
    <div className="grid   gap-3 md:grid-cols-2 grid-col-1 mb-10">
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
            <Code />
          </div>
        </div>
      </div>
      <div className="grid gap-3 grid-cols-3 h-36  ">
        <div className="col-span-1  dashboard_box ">
          <Discord />
        </div>
        <div className="col-span-2  dashboard_box ">
          <Post />
        </div>
      </div>
      <div className="h-36 grid gap-3 grid-cols-3">
        <div className="col-span-2   dashboard_box">
          <Analytics />
        </div>
        <div className="col-span-1   dashboard_box ">
          <BookCard />
        </div>
      </div>
      <div className="h-36  bg-background flex overflow-hidden rounded-md">
        <Tools />
      </div>

      <div className="h-52  bg-background flex overflow-hidden rounded-md">
        <ChessRating />
      </div>

      <div className="h-52 grid gap-3 grid-cols-3">
        <div className="col-span-3   dashboard_box">
          <LastChessGame />
        </div>
      </div>

      <div className="  md:col-span-2 flex overflow-hidden rounded-md">
        <SendEmail />
      </div>
    </div>
  );
}

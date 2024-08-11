import React from "react";
import {
  cachedRapidRating,
  cachedRecentMatches,
  getAllAnalytics,
} from "@/lib/chess";

import { Luckiest_Guy, Zeyada } from "next/font/google";
import Image from "next/image";
import { Title } from "../uses/_components/title";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RatingChart } from "@/components/Dashboard/chess/RatingChart.client";
import { cn } from "@/lib/utils";

const profileLink = "https://www.chess.com/member/x_index";
const samaryRainaLink =
  "https://www.youtube.com/channel/UCAov2BBv1ZJav0c_yHEciAw";

export const revalidate = 60 * 60 * 24;

import { Crown, Link } from "lucide-react";
import { ChessBackground } from "@/components/ui/chess-background";

const luckGuy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
const zeyada = Zeyada({ subsets: ["latin"], weight: ["400"] });

export default async function page() {
  const [rapidRatingForGraph, recentMatches, totalGamesData] =
    await Promise.all([
      cachedRapidRating(),
      cachedRecentMatches(),
      getAllAnalytics(),
    ]);

  const rapidStats = totalGamesData.data.stats.find(
    ({ key }) => key === "rapid"
  );

  const myStats = [
    {
      label: "Current Rating",
      value: rapidStats?.stats.rating ?? 0,
    },

    {
      label: "Total",
      value: rapidStats?.stats.total_game_count ?? 0,
    },
    {
      label: "Win",
      value: rapidStats?.stats.total_win_count ?? 0,
    },
    {
      label: "Draw",
      value: rapidStats?.stats.total_draw_count ?? 0,
    },
    {
      label: "Lose %",
      value:
        (
          ((rapidStats?.stats.total_loss_count ?? 1) /
            (rapidStats?.stats.total_game_count ?? 1)) *
          100
        ).toFixed(1) ?? 0,
    },
  ];

  return (
    <section id="chess-section" className="flex flex-col gap-4 ">
      <Title title="Chess" />
      <div>
        I used to play chess during my childhood, but stopped as I got older.
        The fun of playing chess was reignited by
        <a
          target="_blank"
          rel="noreferrer"
          className="underline text-orange-400 underline-offset-2 hover:decoration-2 decoration-gray-400"
          href={samaryRainaLink}
        >
          {" "}
          @samay_raina
        </a>
        , a popular comedian and chess enthusiast. Since then, I have been
        playing chess regularly . If you are interested in chess, you can check
        out my profile{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="underline text-orange-400 underline-offset-2 hover:decoration-2 decoration-gray-400"
          href={profileLink}
        >
          @x_index
        </a>{" "}
        on chess.com.
      </div>

      <div className="relative  w-auto">
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row ">
            <div className="flex justify-between w-full">
              <Image
                width={200}
                height={200}
                src={"/avatar/me.png"}
                alt="inderjot's avatar in chess.com"
                className="h-32 w-full  object-center object-cover"
              ></Image>

              <div className="flex">
                {myStats.map(({ label, value }, index) => {
                  return (
                    <div
                      key={`${label}-${value}-${index}`}
                      className={cn(
                        index >= 3 ? "hidden md:flex" : "flex ",
                        "relative z-30 flex-1 flex-col  justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 border-x sm:px-8 sm:py-6"
                      )}
                    >
                      <span className="text-xs text-muted-foreground">
                        {label}
                      </span>
                      <span className="text-lg font-bold leading-none sm:text-3xl">
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-1 h-80 w-full">
            <RatingChart
              rapidStats={rapidRatingForGraph.data}
              color="hsl(var(--chart-3))"
            />
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4 mt-10">
        <h2
          className={cn("text-5xl text-center font-semibold", zeyada.className)}
        >
          Recent Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {recentMatches.data?.slice(0, 10).map((match, index) => {
            return (
              <div className="w-full h-48" key={`chess-${match.href}`}>
                <ChessMatchCard data={match} key={index} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ChessMatchCard({ data }: { data: FormatedChessGame }) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={data?.href ?? "/chess"}
      className="w-full h-full "
    >
      <div className="w-full h-full flex  gap-0.5 border-2 rounded-md ">
        <div className="radial_gradient    overflow-hidden  bg-black grid rounded-md relative grid-row-3 p-1 flex-1 gap-1">
          <div className="flex relative items-center gap-4">
            <Image
              src={data?.me.avatarUrl ?? "/dashboard/chess.png"}
              alt="chess_image"
              width={30}
              height={30}
              className=" rounded-sm size-12 border-[4px] border-gray-800 "
              quality={100}
            />

            {data.result === "Win" && (
              <Crown className="absolute -top-1 -left-2 text-yellow-500 -rotate-45  fill-yellow-300" />
            )}

            <div className="flex flex-col gap-1 ">
              <div
                className={cn("text-white   text-center")}
                style={{
                  textShadow:
                    "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
                }}
              >
                <span className="max-w-[100px] font-mono md:max-w-[70px] truncate">
                  {data.me.username}
                </span>
                <span>
                  {"  "}({data.me.rating})
                </span>
              </div>
            </div>

            <div></div>
          </div>

          <div
            className={cn(
              "text-center font-mono -rotate-[20deg] flex flex-col"
            )}
          >
            <div
              style={{
                textShadow:
                  "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
              }}
              className={cn(
                luckGuy.className,
                "  font-extrabold text-4xl md:text-4xl  ",
                data.result === "Win"
                  ? "text-[#00FF00]"
                  : data.result === "Lose"
                  ? "text-red-600"
                  : "text-white"
              )}
            >
              {data?.result}
            </div>
            <div
              className="text-xs tracking-tighter font-extrabold"
              style={{
                textShadow:
                  "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
              }}
            >
              (in {data.moves} moves)
            </div>
          </div>

          <div className="flex relative justify-end  items-center gap-4">
            <div className="flex flex-col gap-1 ">
              <div
                className="flex gap-1"
                style={{
                  textShadow:
                    "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
                }}
              >
                <span className="max-w-[100px] font-mono md:max-w-[70px] truncate">
                  {data.opponent.username}
                </span>
                <span>({data.opponent.rating})</span>
              </div>
            </div>

            {data.result === "Lose" && (
              <Crown
                className="absolute -top-2  right-3 text-yellow-600   fill-yellow-300"
                style={{
                  textShadow:
                    "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
                }}
              />
            )}

            <Image
              src={data?.opponent.avatarUrl ?? "/dashboard/chess.png"}
              alt="chess_image"
              width={30}
              height={30}
              className=" rounded-sm size-12 border-[4px] border-gray-800 "
              quality={100}
            />
          </div>

          <ChessBackground squareSize={30} />
        </div>
      </div>
    </a>
  );
}

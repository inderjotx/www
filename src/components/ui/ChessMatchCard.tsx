import Image from "next/image";
import Link from "next/link";
import { Crown } from "lucide-react";
import { ChessBackground } from "./chess-background";
import { cn } from "@/lib/utils";
import { Luckiest_Guy } from "next/font/google";

const luckGuy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });

export function ChessMatchCard({ data }: { data: FormatedChessGame }) {
  return (
    <Link
      rel="noopener noreferrer"
      target="_blank"
      href={"/chess"}
      className="w-full h-full "
    >
      <div className="w-full h-full flex  gap-0.5 ">
        <div
          style={{ textOrientation: "mixed", writingMode: "vertical-lr" }}
          className={cn(
            "h-full text-center   bg-orange-950  font-mono  w-6  text-sm font-bold text-orange-400 rotate-180 "
          )}
        >
          <div className="   ">Last Chess Match</div>
        </div>

        <div className="radial_gradient border-[4px] border-black  overflow-hidden  bg-black grid rounded-md relative grid-row-3 p-1 flex-1 gap-1">
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
    </Link>
  );
}

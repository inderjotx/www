"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FallbackBook } from "./FallbackBook";
import { useQuery } from "@tanstack/react-query";
import { getRecentBook } from "@/lib/books";

export function BookCard() {
  const { data } = useQuery({
    queryKey: ["recent-book"],
    queryFn: async () => await getRecentBook(),
    refetchInterval: 1000 * 60 * 60, // 1 hour
  });

  if (!data) {
    return <FallbackBook />;
  } else {
    return (
      <Link href={"/books"}>
        <div className="w-full h-full relative ">
          <Image
            className="object-center object-cover"
            alt="image"
            quality={99}
            src={data?.book.cover || ""}
            fill
            sizes="100"
          ></Image>
          <div className="absolute flex items-center justify-center flex-col  h-1/3 md:h-2/5 bottom-0 w-full bg-black/50">
            <h1 className="font-medium text-xs lg:text-[10px] text-center ">
              {data?.book.title}
            </h1>
            <h2 className="text-[8px] truncate">
              by {data?.book.authors[0].name}
            </h2>
          </div>
        </div>
      </Link>
    );
  }
}

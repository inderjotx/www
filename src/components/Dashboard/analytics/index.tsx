"use client";
import { fetcher } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useQuery } from "@tanstack/react-query";
import { FallbackAnalytics } from "./FallbackAnalytics";

export function Analytics() {
  const { data } = useQuery({
    queryKey: ["analytics-Hours"],
    queryFn: async () => fetcher<Analytics>("/api/analytics/Days"),
    refetchInterval: 1000 * 60, // every 1 minute
  });

  const isMobile = useMediaQuery({ maxWidth: 640 });

  if (data) {
    let city: string | undefined;
    let country: string | undefined;

    data.cityData.forEach((val: DataItem) => {
      city = val.name;
    });

    data.countryData.forEach((val: DataItem) => {
      country = val.name;
    });

    return (
      <Link href={"/analytics"}>
        <div className="relative w-full  h-full flex ">
          {isMobile ? (
            <div className="absolute  -rotate-6 font-mono right-3 -inset-y-5 text-sm text-center z-10 bg-black/50 font-medium  backdrop-blur-sm vertical_text ">
              In Last 24 Hours
            </div>
          ) : (
            <div className="absolute  rotate-6 font-mono -inset-x-5 bottom-2  text-sm text-center z-10 bg-black/50 font-medium  backdrop-blur-sm  ">
              In Last 24 Hours
            </div>
          )}
          <div className="flex pl-2 md:-mt-5 mt-0 md:text-[15px] items-start  justify-center flex-col">
            <div className="flex  font-sans items-start">
              <div className="text-[80px] leading-[60px] mr-1 ">C</div>
              <div className="flex -space-y-1 flex-col">
                <div>licks : {data.totalClicks}</div>
                <div>ity : {city?.split(" ")[0] ?? "Hidden"}</div>
                <div>ountry : {country ?? "Hidden"}</div>
              </div>
            </div>
          </div>
          <Image
            quality={100}
            src={"/dashboard/analytics.png"}
            alt="cat girl showing analytics "
            fill
            className="object-cover absolute inset-0 -z-20 "
            sizes="100"
          />
          <div className="absolute h-full -z-10 w-full bg-black/70" />
        </div>
      </Link>
    );
  } else {
    return <FallbackAnalytics />;
  }
}

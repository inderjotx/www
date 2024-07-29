"use client";
import { MusicCard } from "./MusicCard";
import { FallbackMusic } from "./FallbackMusic";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/utils";
import { MusicCardTrack } from "@/interfaces/music/music";

export function Spotify() {
  const { data } = useQuery({
    queryKey: ["recent-track"],
    queryFn: async () =>
      await fetcher<{
        success: boolean;
        data: MusicCardTrack & { type: "current" | "recent" };
      }>("/api/music/recent"),
    refetchInterval: 1000 * 10, // every 10 seconds
  });

  if (data?.data) {
    return <MusicCard data={data.data} />;
  } else {
    return <FallbackMusic />;
  }
}

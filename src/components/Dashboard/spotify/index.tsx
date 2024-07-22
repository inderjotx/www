"use client";
import { RecentPlayProps } from "@/app/music/_components/MusicCard";
import { MusicCard } from "./MusicCard";
import { FallbackMusic } from "./FallbackMusic";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getCurrentTrack, getRecentTrack } from "@/lib/music";

export function Spotify() {
  const [currentTrack, recentTrack] = useQueries({
    queries: [
      {
        queryKey: ["current-track"],
        queryFn: async () => await getCurrentTrack(),
        refetchInterval: 1000 * 10, // every 10 seconds
      },
      {
        queryKey: ["recent-track"],
        queryFn: async () => await getRecentTrack(),
        refetchInterval: 1000 * 100, // every 100 seconds
      },
    ],
  });

  if (!currentTrack.data && !recentTrack.data) {
    return <FallbackMusic />;
  } else {
    return <MusicCard data={currentTrack.data ?? recentTrack.data} />;
  }
}

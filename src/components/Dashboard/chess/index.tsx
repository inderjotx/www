"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { RatingChart } from "./RatingChart.client";
import { fetcher } from "@/lib/utils";
import { ChessPiece as King } from "./chess.piece.client";
import { ChessMatchCard } from "@/components/ui/ChessMatchCard";

interface FormatedChessGame {
  href: string;
  result: string;
  moves: number;
  formattedTime: string;
  me: {
    id: number;
    title: string | null;
    username: string;
    countryId: number;
    countryName: string;
    membershipLevel: number;
    flairCode: string;
    avatarUrl: string;
    rating: number;
  };
  opponent: {
    id: number;
    title: string | null;
    username: string;
    countryId: number;
    countryName: string;
    membershipLevel: number;
    flairCode: string;
    avatarUrl: string;
    rating: number;
  };
}

import { Luckiest_Guy } from "next/font/google";
import { Crown } from "lucide-react";

const luckGuy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });

export function ChessRating() {
  const { data } = useQuery({
    queryKey: ["rapid-rating"],
    queryFn: async () =>
      await fetcher<{
        success: boolean;
        data: { timestamp: number; rating: number }[];
      }>("/api/chess/rating"),
    refetchInterval: 1000 * 60 * 60 * 24,
  });

  console.log("chess rating", data);

  if (!data?.data) {
    return <div>loading</div>;
  } else {
    return <RatingChart rapidStats={data.data} />;
  }
}

export function LastChessGame() {
  const { data } = useQuery({
    queryKey: ["recent-match"],
    queryFn: async () =>
      await fetcher<FormatedChessGame>("/api/chess/last-match"),
    refetchInterval: 1000 * 60 * 60 * 24,
  });
  console.log("last chess game", data);

  if (!data) {
    return <div>loading</div>;
  }

  return <ChessMatchCard data={data} />;
}

export function ChessPiece() {
  return <King />;
}

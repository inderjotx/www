"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

export function RatingChart({
  rapidStats,
  color = "hsl(var(--chart-1))",
}: {
  rapidStats: { timestamp: number; rating: number }[];
  color?: string;
}) {
  const chartConfig = {
    timestamp: {
      label: "timestamp",
    },
    rating: {
      label: "Rating",
      color: color,
    },
  } satisfies ChartConfig;

  return (
    <Card className="w-full h-full border-none relative overflow-hidden rounded-md">
      <h1
        className={cn(
          "pl-2 bottom-[20%] left-2 text-3xl font-semibold absolute  font-lucky"
        )}
      >
        Chess Ratings{" "}
      </h1>

      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-full w-full"
      >
        <AreaChart data={rapidStats}>
          <defs>
            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-rating)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-rating)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="timestamp"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={32}
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });
            }}
          />
          <ChartTooltip
            cursor={false}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <ChartTooltipContent
                    active={active}
                    payload={payload}
                    label={new Date(data.timestamp).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                      }
                    )}
                    indicator="dot"
                  />
                );
              }
              return null;
            }}
          />
          <Area
            dataKey="rating"
            type="natural"
            fill="url(#fillDesktop)"
            stroke="var(--color-rating)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </Card>
  );
}

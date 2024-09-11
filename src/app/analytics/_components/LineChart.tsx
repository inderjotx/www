"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type BarGraphInput = {
  startIntervalMiliSec: number;
  time: any;
  clicks: number;
}[];
type TimeFrame = "Hours" | "Days" | "Weeks" | "Months";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  clicks: {
    label: "Clicks",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ShadcnLineChart({
  data,
  timeRange,
  setTimeRange,
}: {
  data: BarGraphInput;
  timeRange: TimeFrame;
  setTimeRange: React.Dispatch<React.SetStateAction<TimeFrame>>;
}) {
  const filteredData = React.useMemo(() => {
    const now = Date.now();
    let timeLimit: number;

    switch (timeRange) {
      case "Hours":
        timeLimit = now - 60 * 60 * 1000;
        break;
      case "Days":
        timeLimit = now - 24 * 60 * 60 * 1000;
        break;
      case "Weeks":
        timeLimit = now - 7 * 24 * 60 * 60 * 1000;
        break;
      case "Months":
        timeLimit = now - 30 * 24 * 60 * 60 * 1000;
        break;
    }

    return data.filter((item) => item.startIntervalMiliSec >= timeLimit);
  }, [data, timeRange]);

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Web Analytics</CardTitle>
          <CardDescription>
            Showing total clicks for the selected time range
          </CardDescription>
        </div>
        <GraphChangeButton freq={timeRange} setFreq={setTimeRange} />
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        {filteredData.length > 0 ? (
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[350px] w-full"
          >
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="fillClicks" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-clicks)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-clicks)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="time"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  });
                }}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      });
                    }}
                    indicator="dot"
                  />
                }
              />
              <Area
                dataKey="clicks"
                type="linear"
                fill="url(#fillClicks)"
                stroke="var(--color-clicks)"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        ) : (
          <Skeleton className="w-full h-[350px] rounded-md" />
        )}
      </CardContent>
    </Card>
  );
}

function SelectFrequency({
  setFreq,
  freq,
}: {
  freq: TimeFrame;
  setFreq: React.Dispatch<React.SetStateAction<TimeFrame>>;
}) {
  return (
    <Select value={freq} onValueChange={(val) => setFreq(val as TimeFrame)}>
      <SelectTrigger className="w-[150px] bg-[#0c1116] ">
        <SelectValue placeholder="Frequency" />
      </SelectTrigger>
      <SelectContent className="bg-[#0c1116]">
        <SelectItem value="Hours">Last 60 Mins</SelectItem>
        <SelectItem value="Days">Last 24 Hours</SelectItem>
        <SelectItem value="Weeks">Last 7 Days</SelectItem>
        <SelectItem value="Months">Last Month</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function GraphChangeButton({
  setFreq,
  freq,
}: {
  freq: TimeFrame;
  setFreq: React.Dispatch<React.SetStateAction<TimeFrame>>;
}) {
  const options: TimeFrame[] = ["Hours", "Days", "Weeks", "Months"];

  return (
    <div className="flex gap-0.5 bg-muted p-1 rounded-md">
      {options.map((option) => (
        <div
          key={option}
          className="flex cursor-pointer items-center  relative text-sm px-3 py-4 h-5 mx-0"
          onClick={() => setFreq(option as TimeFrame)}
        >
          <span className="z-20">{option}</span>
          {freq === option && (
            <motion.div
              layout
              layoutId="frequesy_blob"
              className="z-10 absolute inset-0 backdrop-blur-sm rounded-sm bg-blue-800"
            ></motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

"use client";
import React from "react";
// import IconData from "@/lib/icons/data.json";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1)/50%)",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export function BarList({
  data,
  title,
  children,
}: {
  data: DataItem[];
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="gap-6 border-b">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardHeader>
        <div className="ml-auto">{children}</div>
      </CardHeader>
      <CardContent>
        {data.length > 0 ? (
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={data}
              layout="vertical"
              margin={{
                right: 16,
              }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey="month"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                hide
              />
              <XAxis dataKey="value" type="number" />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    label="Click"
                    indicator="dot"
                    labelFormatter={(value) => `Clicks`}
                  />
                }
              />

              <Bar
                dataKey="value"
                layout="vertical"
                fill="var(--color-desktop)"
                radius={4}
              >
                <LabelList
                  dataKey="name"
                  position="insideLeft"
                  offset={8}
                  className="fill-foreground"
                  fontSize={12}
                  // formatter={(value) => GetIconLabel(value, data)}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        ) : (
          <Skeleton className="w-full h-[200px] rounded-md" />
        )}
      </CardContent>
    </Card>
  );
}

// const GetIconLabel = (name: string, items: DataItem[]) => {
//   const item = items.find((item) => item.name === name);
//   const icon = IconData[item?.iconKey as keyof typeof IconData];
//   return `${icon} ${item?.name}`;
// };

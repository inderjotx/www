"use client";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Icon } from "@/components/Icon";

const chartConfig: ChartConfig = {
  value: {
    label: "Users",
    color: "hsl(var(--chart-1))",
  },
};

export function BarList({ data }: { data: DataItem[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Browser Usage</CardTitle>
        <CardDescription>Top browsers by usage</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{ left: 50 }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="iconKey"
              type="category"
              tickLine={false}
              axisLine={false}
              tick={<CustomYAxisTick />}
              width={50}
            />
            <XAxis type="number" hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="value" fill="var(--color-value)" radius={4}>
              <LabelList
                dataKey="name"
                position="insideLeft"
                offset={8}
                fill="var(--color-label)"
                fontSize={12}
              />
              <LabelList
                dataKey="value"
                position="right"
                offset={8}
                fill="var(--color-foreground)"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const CustomYAxisTick = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x - 30},${y - 12})`}>
      {JSON.stringify(payload)}
    </g>
  );
};

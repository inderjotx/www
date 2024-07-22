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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Icon } from "@/components/Icon";

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
            <XAxis dataKey="value" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
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
                // content={(props) => <CustomLabel {...props} data={data} />}
              />
              <LabelList
                dataKey="value"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

// const CustomLabel = (props: any) => {
//   const { x, y, width, height, value, name, data } = props;
//   const iconKey = data?.find((item: DataItem) => item.name === name)?.iconKey;
//   // const Icon = data.find((item) => item.name === name)?.icon;

//   console.log(props);

//   const formattedValue = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   }).format(value);

//   return (
//     <g
//       x={x}
//       y={y}
//       width={width}
//       height={height}
//       transform={`translate(${x},${y})`}
//     >
//       <Icon code={iconKey} />
//     </g>
//   );
// };

"use client";
import { ShadcnLineChart } from "./LineChart";
import { BarList } from "./BarList";
import { addIcon, getHumanReadTime } from "@/lib/utils";
import { useState } from "react";
import { GraphChangeButton } from "./GraphChangeButton";
import { Loading } from "./Loading";
import { useQuery } from "@tanstack/react-query";
import { getAnalytics } from "@/lib/analytics";

const buttonDemograph: { title: string; action: demographics }[] = [
  { title: "City", action: "cityData" },
  { title: "Country", action: "countryData" },
  { title: "Ref", action: "refData" },
];

const buttonUserData: { title: string; action: userDevice }[] = [
  { title: "OS", action: "osData" },
  { title: "Browser", action: "browserData" },
  { title: "Device", action: "deviceData" },
];

export function AnalyticsChart() {
  const [freq, setFreq] = useState<TimeFrame>("Hours");
  const [demograph, setDemograph] = useState<demographics>("cityData");
  const [userDevice, setUserDevice] = useState<userDevice>("osData");

  const { data, isLoading, error } = useQuery({
    queryKey: [`analytics-${freq}`],
    queryFn: async () => await getAnalytics(freq),
    refetchInterval: 1000 * 60, // every minute
  });

  if (isLoading || error) {
    return <Loading />;
  } else if (data) {
    data.barGraphData.forEach((item, index) => {
      data.barGraphData[index].time = getHumanReadTime(item.time);
    });

    addIcon(data.browserData);
    addIcon(data.cityData);
    addIcon(data.countryData);
    addIcon(data.deviceData);
    addIcon(data.osData);
    addIcon(data.refData);

    return (
      <div className="flex gap-10 w-full h-full  flex-col">
        <ShadcnLineChart
          data={data.barGraphData}
          timeRange={freq}
          setTimeRange={setFreq}
        />

        <div className="grid  gap-6 md:gap-2 grid-cols-1 md:grid-cols-2 ">
          <BarList
            title={"Demographics"}
            data={data[demograph].slice(0, Math.min(5, data[demograph].length))}
          >
            <GraphChangeButton
              type="demograph"
              curData={demograph}
              buttons={buttonDemograph}
              updateState={setDemograph}
            />
          </BarList>

          <BarList
            title={"Devices"}
            data={data[userDevice].slice(
              0,
              Math.min(5, data[userDevice].length)
            )}
          >
            <GraphChangeButton
              type="userdevice"
              curData={userDevice}
              buttons={buttonUserData}
              updateState={setUserDevice}
            />
          </BarList>
        </div>
      </div>
    );
  }
}

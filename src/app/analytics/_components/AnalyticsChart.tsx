"use client";
import { ShadcnLineChart } from "./LineChart";
import react from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarList } from "./BarList";
import { addIcon, fetcher, getHumanReadTime } from "@/lib/utils";
import { useState } from "react";
import useSWR from "swr";
import { GraphChangeButton } from "./GraphChangeButton";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Loading } from "./Loading";

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

  const { data, isLoading, error } = useSWR<Analytics, any>(
    `/api/analytics?frequency=${freq}`,
    fetcher,
    { refreshInterval: 30000 }
  );

  if (isLoading || error) {
    return <Loading />;
  } else if (data) {
    console.log(data);

    // doing this here so that user will be data as per his time zone , since this code runs in browser
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

        <div className="grid h-40 gap-6 md:gap-2 grid-cols-1 md:grid-cols-2 ">
          <Card>
            <div className="flex items-center justify-between">
              <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                City
              </h3>
              <GraphChangeButton
                type="demograph"
                curData={demograph}
                buttons={buttonDemograph}
                updateState={setDemograph}
              />
            </div>
            <p className="mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
              <span>
                {buttonDemograph.find((e) => e.action === demograph)?.title}
              </span>
              <span>Views</span>
            </p>
            <BarList
              data={data[demograph].slice(
                0,
                Math.min(3, data[demograph].length)
              )}
            />
          </Card>

          {/* <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                  Browser
                </h3>
                <GraphChangeButton
                  type="userdevice"
                  curData={userDevice}
                  buttons={buttonUserData}
                  updateState={setUserDevice}
                />
              </div>
              <p className="mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
                <span>
                  {buttonUserData.find((e) => e.action === userDevice)?.title}
                </span>
                <span>Views</span>
              </p> */}
          <BarList
            data={data[userDevice].slice(
              0,
              Math.min(3, data[userDevice].length)
            )}
          />
          {/* </CardContent>
          </Card> */}
        </div>
      </div>
    );
  }
}

function SelectFrequency({
  setFreq,
  freq,
}: {
  freq: TimeFrame;
  setFreq: (val: react.SetStateAction<TimeFrame>) => void;
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

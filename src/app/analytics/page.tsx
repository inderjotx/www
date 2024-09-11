import { AnalyticsChart } from "./_components/AnalyticsChart";

export const metadata = {
  title: "Inderjot // Analytics",
  description: "Analytics on Inderjot Singh's website",
};

export default async function page() {
  return (
    <div className="min-h-screen">
      <AnalyticsChart />
    </div>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar/index";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { QueryProvider } from "@/components/Provider/QueryProvider";
import dynamic from "next/dynamic";
import { Luckiest_Guy, Inter } from "next/font/google";

const UserClickManager = dynamic(
  () => import("@/components/UserClickManager"),
  {
    ssr: false,
  }
);

export const poppins = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const luckGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lucky",
});
// const zeyada = Zeyada({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-zeyada",
// });

export const metadata: Metadata = {
  title: "Inderjot Singh",
  metadataBase: new URL("https://www.inderjot.tech"),
  description: "Personal website of Inderjot Singh",
  openGraph: {
    images: "/opengraph-image.png",
    type: "website",
    url: "https://www.inderjot.tech",
    title: "Inderjot Singh",
    description: "Personal website of Inderjot Singh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased dark"
      style={{ colorScheme: "dark" }}
    >
      <body
        className={cn(
          poppins.className,
          luckGuy.variable,
          " relative   overflow-x-hidden dark selection:bg-white/80 selection:text-black"
        )}
      >
        <UserClickManager />
        <QueryProvider>
          <div className="flex   flex-col gap-2 max-w-3xl px-4 md:px-0  md:mx-auto relative  ">
            <Navbar />
            <Toaster richColors />
            {children}
          </div>
        </QueryProvider>

        <Footer />
      </body>
    </html>
  );
}

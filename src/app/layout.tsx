import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar/index";
import { Gradient } from "@/components/gradient";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
// import { ThemeProvider } from "@/components/Provider/ThemeProvider";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { QueryProvider } from "@/components/Provider/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

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
        className={cn(inter.className, " relative   overflow-x-hidden dark")}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={["dark"]}
          disableTransitionOnChange
        > */}
        {/* <div className="fixed inset-0 overflow-hidden" >
            <Gradient />
          </div> */}
        <QueryProvider>
          <div className="flex   flex-col gap-2 max-w-3xl px-4 md:px-0  md:mx-auto relative  ">
            <Navbar />
            <Toaster />
            {children}
          </div>
        </QueryProvider>

        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from '@/components/Navbar/index'
import { Gradient } from "@/components/gradient";
import "./globals.css";
import { ThemeProvider } from "@/components/Provider/ThemeProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" >
      <body className={cn(inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className='h-full flex justify-center w-full ' >
            <div className='flex  flex-col gap-2 w-11/12 md:w-[600px] relative  ' >
              <Gradient />
              <Navbar />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

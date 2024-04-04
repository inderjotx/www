import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from '@/components/Navbar/index'
import { Gradient } from "@/components/gradient";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/Provider/ThemeProvider";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inderjot Singh",
  metadataBase: new URL('https://www.inderjot.tech'),
  description: "Personal website of Inderjot Singh",
  openGraph: {
    images: '/opengraph-image.png',
    type: "website",
    url: "https://www.inderjot.tech",
    title: "Inderjot Singh",
    description: "Personal website of Inderjot Singh"
  }
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
            <div className='flex  flex-col gap-2 w-11/12 md:w-[650px] relative  ' >
              <Gradient />
              <Navbar />
              <Toaster />
              {children}
            </div>
          </div>
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}

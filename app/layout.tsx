import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';

import "./globals.css";

import dynamic from 'next/dynamic'
const ThemeProvider = dynamic(() => import('@/components/theme-provider'), { ssr: false })

// import ThemeProvider from "@/components/theme-provider";


// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "betterself",
  description: "achieve your goals, one step at a time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          {/* <div></div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

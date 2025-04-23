import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WagmiContext } from "@/context/wagmiContext";
import { MiniAppContext } from "@/context/miniAppContext";
import { Toaster } from "@/components/ui/sonner"



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3 Wheeler Bike Club | Ownership, Community & Governance",
  description: "P2P Financing Platform for the 3 Wheeler Bike Club",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WagmiContext>
          <MiniAppContext>
            {children}
            <Toaster />
          </MiniAppContext>
        </WagmiContext>
      </body>
    </html>
  );
}

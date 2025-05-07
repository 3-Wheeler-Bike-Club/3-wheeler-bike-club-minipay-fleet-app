import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { WagmiContext } from "@/context/wagmiContext";
import { MiniAppContext } from "@/context/miniAppContext";
import { Toaster } from "@/components/ui/sonner"



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
        className={`${geistMono.className}`}
      >
        <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-black py-2 text-center font-bold z-50">
          ⚠️ Test Mode: Do not use real funds. Contact us at <a href="https://t.me/threeWB" className="text-blue-500">https://t.me/threeWB</a> for test tokens.
        </div>
        <WagmiContext>
          <MiniAppContext>
              {children}
            <Toaster expand={true} richColors />
          </MiniAppContext>
        </WagmiContext>
      </body>
    </html>
  );
}

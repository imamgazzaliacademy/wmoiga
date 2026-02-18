import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat', // optional
});


export const metadata: Metadata = {
  title: "WMO IMAM GAZZALI ACADEMY",
  description: "WMO IMAM GAZZALI ACADEMY, KOOLIVAYAL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <div>
          <Navbar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}

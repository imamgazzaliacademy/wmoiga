import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Montserrat } from "next/font/google";
import Announcement from "@/components/Announcement";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat", // optional
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
      <body className={`${montserrat.className} antialiased`}>
        <div className="">
          <Navbar />
          <div>{children}</div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}

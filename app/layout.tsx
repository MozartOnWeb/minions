import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import gsap from "gsap";

const satoshi = localFont({
  src: "../public/fonts/satoshi/Satoshi-Variable.woff2",
  variable: "--satoshi",
});

const switzer = localFont({
  src: "../public/fonts/switzer/Switzer-Variable.woff2",
  variable: "--switzer",
});

export const metadata: Metadata = {
  title: "Les Minions",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${satoshi.variable} ${switzer.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

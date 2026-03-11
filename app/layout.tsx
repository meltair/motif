import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motif UI — Design system and React component library by TÜRKSAT",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Motif UI is a production-ready React design system initially designed by the e-Government Application Development Department of TÜRKSAT, now available as an open-source library for public-sector and enterprise projects. Motif UI offers a robust set of customizable and production-ready UI components built under the design system discipline of TÜRKSAT.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

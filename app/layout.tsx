import type { Metadata } from "next";
import "./globals.css";
import {MotifWrapper} from "@/components/MotifWrapper";

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
      <body>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/motif-ui/assets/css/motif-icons.css" />
        <MotifWrapper>{children}</MotifWrapper>
      </body>
    </html>
  );
}

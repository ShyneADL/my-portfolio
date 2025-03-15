import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Loader from "@/app/components/Loader";

export const metadata: Metadata = {
  title: "Ifeanyi Aladi",
  description: "Ifeanyi Aladi's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Loader>{children}</Loader> {/* Wrap children in Loader */}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./index.css";

export const metadata: Metadata = {
  title: "Ifeanyi Aladi",
  description: "Ifeanyi Aladi's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

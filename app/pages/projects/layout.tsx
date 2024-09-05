import type { Metadata } from "next";
import "./index.css";

export const metadata: Metadata = {
  title: "Ifeanyi Aladi",
  description: "The page of all projects I've done so far",
};

export default function ProjectsLayout({
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

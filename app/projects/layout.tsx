import type { Metadata } from "next";
import { Footer, Navbar } from "@/app/containers";
import "../globals.css";

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

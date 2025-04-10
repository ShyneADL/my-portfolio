import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Loader from "@/app/components/Loader";

export const metadata: Metadata = {
  title: "Ifeanyi Aladi - Web Designer & Developer",
  description:
    "Professional portfolio of Ifeanyi Aladi, showcasing web development projects, software engineering expertise, and technical skills.",
  keywords: [
    "Frontend Developer",
    "Web Developer",
    "Web Designer",
    "Mobile Developer",
    "Software Engineer",
    "Web Development",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Ifeanyi Aladi",
  ],
  authors: [{ name: "Ifeanyi Aladi" }],
  creator: "Ifeanyi Aladi",
  publisher: "Ifeanyi Aladi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ifeanyi-aladi.vercel.app",
    title: "Ifeanyi Aladi - Web & Mobile Developer",
    description:
      "Professional portfolio of Ifeanyi Aladi, showcasing web development projects, software engineering expertise, and technical skills.",
    siteName: "Ifeanyi Aladi Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ifeanyi Aladi - Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ifeanyi Aladi - Web & Mobile Developer",
    description:
      "Professional portfolio of Ifeanyi Aladi, showcasing web development projects, software engineering expertise, and technical skills.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Loader>{children}</Loader>
      </body>
    </html>
  );
}

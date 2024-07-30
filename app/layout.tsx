import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QWIKI Chat",
  description: "Video chat with random people quickly.",
  keywords: ""
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{String(metadata.title)}</title>
        <meta name="title" content={String(metadata.title)} />
        <meta name="description" content={String(metadata.description)} />
        <meta
          name="keywords"
          content="Chat, Video, Random, ProgrammerDATCH, Programmer DATCH, QWIKI Chat, Conference"
        />
        <link rel="icon" type="image/png" href="/favicons/favicon.png" />
        <link
          rel="alternate icon"
          type="image/x-icon"
          href="/favicons/favicon.ico"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ProgrammerDATCH" />
        <meta name="theme-color" content="#121212" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

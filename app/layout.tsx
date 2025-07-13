import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight:[400,500,600,700],
  variable: '--font-ibm-plex' 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Genova",
  description: "An AI-powered design SaaS platform that lets users generate images, create stunning designs, and boost conversions with intelligent upselling tools. Like Canva, but smarter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("font-IBMPex antialiased", IBMPlex.variable)}>
        {children}
      </body>
    </html>
  );
}

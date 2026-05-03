import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crystaldreamssinginggroup.co.uk"),
  title: {
    default: "Crystal Dreams Singing Group Blackpool | Singing for Wellbeing",
    template: "%s | Crystal Dreams Singing Group",
  },
  description:
    "Crystal Dreams Singing Group in Blackpool helps people improve mental and social wellbeing through music, confidence, connection and the joy of singing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontClasses = playfair.variable + " " + inter.variable;

  return (
    <html lang="en-GB" className={fontClasses}>
      <body>{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

// Using Google fonts instead of local fonts to avoid issues
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-druk", // We keep the same variable name for consistency
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AGNW Festival | Shift the Frequency",
  description: "AGNW Festival - Techno underground rave in Agnew Park, Stranraer, Scotland on 30 May 2026",
  keywords: ["festival", "music", "techno", "rave", "scotland", "agnw", "stranraer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}

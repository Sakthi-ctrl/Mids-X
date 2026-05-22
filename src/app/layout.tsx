import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MIDASX | One Intelligent WealthTech Platform. Endless Possibilities.",
  description: "All-in-one digital wealth management infrastructure for serious financial intermediaries, wealth managers, and mutual fund distributors.",
  keywords: "WealthTech, Financial Intermediaries, Mutual Fund Distributors, Wealth Managers, Payout Engine, RECON Engine, Portfolio Management, MIDASX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

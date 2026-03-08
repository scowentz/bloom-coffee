import type { Metadata } from "next";
import { DM_Serif_Display, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jost = Jost({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bloom Coffee Roasters",
  description:
    "Small-batch specialty coffee roasted with intention, sourced with care, and shipped at its freshest.",
  icons: [
    { rel: "icon", type: "image/x-icon", url: "/favicon.ico" },
    { rel: "icon", type: "image/png", url: "/Favicon.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerif.variable} ${cormorant.variable} ${jost.variable}`}
      >
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

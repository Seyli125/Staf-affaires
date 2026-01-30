import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STAF Affaires | Saïd Taaroust - Coaching & Formation",
  description: "Performer sans s'épuiser. Manager et vendre avec sens. Coach certifié RNCP expert en développement commercial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}

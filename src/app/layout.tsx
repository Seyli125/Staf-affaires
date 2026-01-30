import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STAF Affaires | Saïd Taaroust - Coaching & Formation",
  description: "Performer sans s'épuiser. Manager et vendre avec sens. Coach certifié RNCP, formateur et expert en développement commercial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}

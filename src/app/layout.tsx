import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { CookieBanner } from "@/components/CookieBanner";
import { CustomCursor } from "@/components/CustomCursor";
import { IntroScreen } from "@/components/IntroScreen";

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
    <html lang="fr" suppressHydrationWarning className="light">
      <head />
      <body
          className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
          style={{ colorScheme: "light" }}
        >
            <IntroScreen />
              <div
                id="site-wrapper"
                style={{
                    borderTopLeftRadius: "14px",
                    borderTopRightRadius: "14px",
                    borderBottomLeftRadius: "14px",
                    borderBottomRightRadius: "14px",
                    overflow: "hidden",
                    backgroundColor: "#FFFFFF",
                    minHeight: "calc(100dvh - 12px)",
                  width: "100%",
                  position: "relative",
                }}
              >
              {children}
              <CookieBanner />
            </div>
            <CustomCursor />
          <VisualEditsMessenger />
        </body>
    </html>
  );
}

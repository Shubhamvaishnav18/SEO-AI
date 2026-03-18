import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Baloo_2 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI SEO - done for you by AI ",
  description: "SEO on autopilot for small businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.className}
          ${baloo.className}
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          font-sans
          bg-[#ffffff]
        `}
      >
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Minimalist dark mode developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* Subtle Mechatronics Background Watermark */}
          <div 
            className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.04] dark:opacity-[0.06] bg-repeat transition-opacity duration-1000" 
            style={{ backgroundImage: "url('/circuit.svg')" }}
          />
          <ThemeToggle />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

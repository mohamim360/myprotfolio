import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import { Playfair_Display } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { personalInfo } from "@/lib/personal-info";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
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
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: `${personalInfo.name} - ${personalInfo.tagline}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} relative min-h-screen font-sans text-gray-800 antialiased transition-colors dark:text-gray-200`}
      >
        <div
          className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]"
          aria-hidden="true"
        />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <div className="relative">{children}</div>
            <Toaster
              position="top-right"
              toastOptions={{
                className:
                  "!bg-white !text-gray-900 dark:!bg-gray-800 dark:!text-gray-100 !shadow-card !rounded-xl",
              }}
            />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

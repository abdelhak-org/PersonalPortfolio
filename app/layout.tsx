import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boussafer Abdelhak - Full Stack MERN Developer",
  description:
    "Full Stack MERN Developer specializing in building exceptional web applications with MongoDB, Express.js, React, and Node.js. Based in Wuppertal, Germany.",
  keywords: [
    "Boussafer Abdelhak",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer",
    "Wuppertal",
    "Germany",
  ],
  authors: [{ name: "Boussafer Abdelhak" }],
  creator: "Boussafer Abdelhak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdelhak.dev",
    siteName: "Boussafer Abdelhak Portfolio",
    title: "Boussafer Abdelhak - Full Stack MERN Developer",
    description:
      "Full Stack MERN Developer specializing in building exceptional web applications with MongoDB, Express.js, React, and Node.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boussafer Abdelhak - Full Stack MERN Developer",
    description:
      "Full Stack MERN Developer specializing in building exceptional web applications.",
    creator: "@abdelhak_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

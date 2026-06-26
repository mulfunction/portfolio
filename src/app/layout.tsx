import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Muldan | Systems & Automation",
  description: "Engineering portfolio specializing in data extraction, automation, and bespoke systems.",
  icons: {
    icon: '/icon.jpeg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-accent selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="noise-overlay" />
          <div className="flex flex-col min-h-screen relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

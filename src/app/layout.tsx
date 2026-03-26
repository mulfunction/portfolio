import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muldan — Data & Automation",
  description: "Freelance specialist in web scraping, data pipelines, and workflow automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`antialiased font-sans bg-[#e5e5e5] min-h-screen text-[var(--color-fg)]`}
      >
        <div className="max-w-[1440px] mx-auto grid-border-l grid-border-r min-h-screen flex flex-col bg-bg">
          {children}
        </div>
      </body>
    </html>
  );
}

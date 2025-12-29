import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Aguiar - Portfolio",
  description: "Portfolio de Gabriel Aguiar, estudante e desenvolvedor backend ",
  icons: {
    icon: [{ url: "/logo-preta.svg"}],
    shortcut: "/logo-preta.svg",
    apple: "/logo-preta.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo-preta.svg" />
        <link rel="alternate icon" href="/logo-preta.svg" />
        <link rel="apple-touch-icon" href="/logo-preta.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen">{children}</div>
        <div className="spotlight" aria-hidden="true" />
      </body>
    </html>
  );
}

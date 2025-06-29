import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AosInit } from "./_components/aos-init";
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
  title: "Desenvolvendo Mulheres",
  description: "Um Projeto Cades- Desenvolvendo de Mulheres para o Futuro ",
  keywords: [
    "Mulheres na Tecnologia",
    "Mulheres do Futuro",
    "Mulheres Empreendedoras",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <AosInit />
      </body>
    </html>
  );
}

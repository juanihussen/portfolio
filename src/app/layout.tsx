import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HoverProvider } from "@/components/HoverContext";
import { ThemeProvider } from "@/components/ThemeContext";
import { LangProvider } from "@/components/LangContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Juani | Diseñador & Creativo",
  description: "Full-stack developer integrando IA para construir el futuro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LangProvider><ThemeProvider><HoverProvider>{children}</HoverProvider></ThemeProvider></LangProvider>
      </body>
    </html>
  );
}

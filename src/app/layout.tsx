import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "ThinkingThoughts (experimental) - Code at the Speed of Thought",
  description:
    "An experimental, AI-powered online IDE that anticipates your next move.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${firaCode.variable} font-sans`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

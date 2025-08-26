import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-fira-code",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable} ${firaCode.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

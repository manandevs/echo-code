import type { Metadata } from "next";
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

// --- SEO METADATA ---
// --- SITE CONFIGURATION ---
const siteConfig = {
  title: "EchoCode | Web-Based Code Compiler & Playground",
  description:
    "EchoCode is a fast, AI-assisted online code compiler and playground. Instantly write, run, and test code in JavaScript, Python, C++, and more — right from your browser.",
  url: ""
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | EchoCode`,
  },
  description: siteConfig.description,
  keywords: [
    "online code compiler",
    "online IDE",
    "EchoCode",
    "code playground",
    "JavaScript compiler",
    "Python online IDE",
    "web-based code editor",
    "run code online",
    "AI code assistant",
    "code sandbox"
  ],
  authors: [{ name: "EchoCode Team", url: siteConfig.url }],
  creator: "EchoCode",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "EchoCode",
    images: [
      {
        url: `${siteConfig.url}/images/image.png`, // ✅ Make sure this image exists
        width: 1200,
        height: 630,
        alt: "EchoCode - Web-Based Code Compiler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/image.png`],
    creator: "@echocodeapp", // 🔁 Replace with your actual Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "EchoCode",
    operatingSystem: "All",
    applicationCategory: "DeveloperApplication",
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1500",
    },
  };

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0D1117" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} font-sans`}>
        {/* Inject JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
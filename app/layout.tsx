import type { Metadata } from "next";
import { Space_Grotesk, Tektur } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Third Gen Studio",
  description:
    "I bring web and mobile products to life. React, Next.js, React Native, and TypeScript development services.",
  openGraph: {
    title: "Third Gen Studio",
    description: "Building web and mobile products the right way",
    url: "https://www.thirdgenstudio.dev",
    siteName: "Third Gen Studio",
    images: [
      {
        url: "https://www.thirdgenstudio.dev/og_image.png",
        width: 1200,
        height: 630,
        alt: "Third Gen Studio",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Third Gen Studio",
    description: "Building web and mobile products the right way",
    images: ["https://www.thirdgenstudio.dev/og_image.png"],
  },
  icons: {
    icon: "./icon.svg",
    shortcut: "https://www.thirdgenstudio.dev/apple-icon.png",
    apple: "https://www.thirdgenstudio.dev/apple-icon.png",
  },
  keywords: [
    "software engineer",
    "frontend",
    "frontend engineer",
    "full stack",
    "full stack engineer",
    "react.js",
    "reactjs",
    "react developer",
    "react native",
    "web development",
    "web developer",
    "mobile app development",
    "app developer",
    "typescript",
    "javascript",
    "next.js",
    "consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${spaceGrotesk.variable} ${tektur.variable}`}
    >
      <body className='bg-background text-foreground antialiased'>
        {children}
      </body>
    </html>
  );
}

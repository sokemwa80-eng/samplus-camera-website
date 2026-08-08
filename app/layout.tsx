import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://www.sampluscamera.com"),

  title: "Hot Deals at Samplus Camera",

  description:
    "Limited-time camera offers available at Samplus Camera Nairobi. Shop cameras, camcorders, lenses and accessories.",

  verification: {
    other: {
      "facebook-domain-verification":
        "xpvl94ohni22vct67fv7pb76xt8dzr",
    },
  },

  openGraph: {
    title: "Hot Deals at Samplus Camera",

    description:
      "Limited-time camera offers available at Samplus Camera Nairobi.",

    url: "https://www.sampluscamera.com",

    siteName: "Samplus Camera",

    images: [
      {
        url: "https://www.sampluscamera.com/images/offer-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Samplus Camera Hot Deals",
      },
    ],

    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Hot Deals at Samplus Camera",

    description:
      "Limited-time camera offers available at Samplus Camera Nairobi.",

    images: [
      "https://www.sampluscamera.com/images/offer-preview.jpg",
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
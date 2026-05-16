import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleTagManager from "@/components/GoogleTagManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IDA Classes Jaipur – NDA & Defence Coaching Institute",
  description:
    "IDA Classes Jaipur provides NDA, Army GD, Airforce X/Y, SSC GD, Rajasthan Police and defence coaching with hostel facilities, physical training and disciplined preparation environment in Jaipur.",

  keywords: [
    "NDA coaching Jaipur",
    "Defence coaching Jaipur",
    "Army GD coaching Jaipur",
    "Airforce coaching Jaipur",
    "SSC GD coaching Jaipur",
    "Rajasthan Police coaching Jaipur",
    "Defence academy Jaipur",
    "Hostel facility coaching Jaipur",
  ],

  metadataBase: new URL("https://idaclassesjaipur.in"),

  openGraph: {
    title: "IDA Classes Jaipur",
    description:
      "Defence coaching institute in Jaipur for NDA, Army GD, Airforce X/Y, SSC GD and Rajasthan Police preparation.",
    url: "https://idaclassesjaipur.in",
    siteName: "IDA Classes Jaipur",
    images: [
      {
        url: "/images/hero/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "IDA Classes Jaipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "IDA Classes Jaipur",
    description:
      "NDA, Army GD, Airforce and SSC GD coaching institute in Jaipur.",
    images: ["/images/hero/hero-main.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N7D3DCCF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <GoogleTagManager />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

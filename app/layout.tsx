import type { Metadata } from "next";
import { Inter, Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import { AppointmentProvider } from "@/context/AppointmentContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import MobileFloatingBar from "@/components/MobileFloatingBar";

const inter = Inter({

  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tyree’s Auto Detailing | Premier Mobile & Shop Detailing in Clayton, NC",
  description:
    "Expert mobile and shop auto detailing serving Clayton, Raleigh, Garner, Smithfield, and Johnston County. 6–8 hour dedicated full details, paint decontamination, ceramic sealant, and interior shampooing. Call (919) 320-3010.",
  metadataBase: new URL("https://tyreesautodetailing.com"),
  robots: {
    index: false, // Per prompt instructions: staging/demo version must remain noindex until launch
    follow: false,
  },
  openGraph: {
    title: "Tyree’s Auto Detailing | Precision Detailing in Clayton, NC",
    description:
      "Showroom-level mobile and shop detailing in Clayton and the Triangle. 6 to 8 hours dedicated craftsmanship per vehicle.",
    url: "https://tyreesautodetailing.com",
    siteName: "Tyree’s Auto Detailing",
    images: [
      {
        url: "/images/hero-car.jpg",
        width: 1200,
        height: 630,
        alt: "Tyree's Auto Detailing Finished Supercar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "name": "Tyree's Auto Detailing",
    "image": "https://tyreesautodetailing.com/images/tyrees-logo.webp",
    "telephone": "+1-919-320-3010",
    "url": "https://tyreesautodetailing.com",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Clayton",
      "addressRegion": "NC",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.6507,
      "longitude": -78.4564,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00",
      },
    ],
    "areaServed": [
      "Clayton, NC",
      "Smithfield, NC",
      "Garner, NC",
      "Knightdale, NC",
      "Wendell, NC",
      "Zebulon, NC",
      "Raleigh, NC",
      "Apex, NC",
      "Holly Springs, NC",
      "Fuquay-Varina, NC",
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "22",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} ${barlowCondensed.variable} dark`}>
      <head>
        <link rel="preconnect" href="https://app.votel.ai" />
        <link rel="dns-prefetch" href="https://app.votel.ai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col font-sans selection:bg-primary selection:text-black">
        <AppointmentProvider>
          <Header />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <AppointmentModal />
          <MobileFloatingBar />
        </AppointmentProvider>
      </body>
    </html>
  );
}


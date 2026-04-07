import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mirchihotel.com'),
  title: "Mirchi Restaurant & Hotel | Best Pure Veg Food in Ballia",
  description: "Experience authentic Indian Pure Veg flavors and luxury stays at Mirchi Restaurant & Hotel, Ballia. 30+ years of hospitality excellence, grand banquet halls, and premium cuisine.",
  keywords: ["Mirchi Restaurant Ballia", "Best Hotel in Ballia", "Pure Veg Restaurant Ballia", "Party Hall Ballia", "Banquet Hall Bahadurpur", "Masala Dosa Ballia", "Paneer Tikka Ballia", "Mirchi Hotel"],
  openGraph: {
    title: "Mirchi Restaurant & Hotel | Best Pure Veg Food in Ballia",
    description: "Authentic Pure Veg dining and luxury stays in Ballia since 2025. 30+ years of legacy.",
    url: "https://mirchihotel.com",
    siteName: "Mirchi Restaurant & Hotel",
    images: ["/assets/hero_dosa.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirchi Restaurant & Hotel | Ballia",
    description: "Pure Veg excellence and luxury stays in Ballia.",
    images: ["/assets/hero_dosa.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "https://mirchihotel.com/#restaurant",
        "name": "Mirchi Restaurant & Hotel",
        "image": "https://mirchihotel.com/assets/logo.png",
        "description": "Premium Pure Veg restaurant in Ballia with 30+ years of hospitality excellence.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Meena Bazar, Bahadurpur",
          "addressLocality": "Ballia",
          "addressRegion": "UP",
          "postalCode": "277001",
          "addressCountry": "IN"
        },
        "url": "https://mirchihotel.com",
        "telephone": "+918354019620",
        "priceRange": "$$",
        "servesCuisine": "Indian, South Indian, Chinese"
      },
      {
        "@type": "Hotel",
        "@id": "https://mirchihotel.com/#hotel",
        "name": "Mirchi Hotel",
        "description": "Luxury AC rooms and banquet facilities in Ballia.",
        "telephone": "+919214234342"
      }
    ]
  };

  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

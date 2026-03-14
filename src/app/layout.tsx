import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Czarna Perła - Antyki i Kolekcje | Porcelana, Obrazy, Biżuteria",
  description: "Czarna Perła - sklep z antykami i kolekcjami. Oferujemy porcelanę Wedgwood, obrazy olejne, biżuterię vintage, srebra i monety kolekcjonerskie. Unikalne skarby z historią.",
  keywords: "antyki, kolekcje, porcelana, Wedgwood, obrazy, biżuteria vintage, srebra, monety, Czarna Perła, antyki Polska",
  authors: [{ name: "Czarna Perła" }],
  creator: "Czarna Perła",
  publisher: "Czarna Perła",
  robots: "index, follow",
  alternates: {
    canonical: "https://czarnaperelka.com",
  },
  icons: {
    icon: "/images/owner.webp",
  },
  openGraph: {
    title: "Czarna Perła - Antyki i Kolekcje",
    description: "Sklep z antykami i kolekcjami. Porcelana, obrazy, biżuteria vintage i unikalne skarby.",
    url: "https://czarnaperelka.com",
    siteName: "Czarna Perła",
    images: [
      {
        url: "/images/boat.webp",
        width: 1200,
        height: 630,
        alt: "Czarna Perła - statek piracki",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Czarna Perła - Antyki i Kolekcje",
    description: "Sklep z antykami i kolekcjami. Porcelana, obrazy, biżuteria vintage.",
    images: ["/images/boat.webp"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Czarna Perła",
    description: "Sklep z antykami i kolekcjami. Porcelana, obrazy, biżuteria vintage.",
    url: "https://czarnaperelka.com",
    image: "https://czarnaperelka.com/images/boat.webp",
    email: "Djmisniabank@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PL",
    },
    sameAs: [],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <html lang="pl" className={`${inter.className} ${playfair.className}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-stone-50 text-stone-900">
        {/* Desktop: Side strips as flex items */}
        <div className="hidden md:flex min-h-screen">
          {/* Left decorative strip */}
          <div 
            className="w-24 flex-shrink-0"
            style={{
              backgroundImage: 'url(/images/strip.webp)',
              backgroundSize: '100% auto',
              backgroundRepeat: 'repeat-y',
              backgroundPosition: 'top'
            }}
          />
          
          {/* Main content */}
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          
          {/* Right decorative strip */}
          <div 
            className="w-24 flex-shrink-0"
            style={{
              backgroundImage: 'url(/images/strip.webp)',
              backgroundSize: '100% auto',
              backgroundRepeat: 'repeat-y',
              backgroundPosition: 'top',
              transform: 'scaleX(-1)'
            }}
          />
        </div>

        {/* Mobile: Strips as flex items pushing content */}
        <div className="md:hidden flex min-h-screen">
          {/* Left strip */}
          <div 
            className="w-8 flex-shrink-0"
            style={{
              backgroundImage: 'url(/images/strip_mobile.webp)',
              backgroundSize: '100% auto',
              backgroundRepeat: 'repeat-y',
              backgroundPosition: 'top'
            }}
          />

          {/* Main content */}
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>

          {/* Right strip */}
          <div 
            className="w-8 flex-shrink-0"
            style={{
              backgroundImage: 'url(/images/strip_mobile.webp)',
              backgroundSize: '100% auto',
              backgroundRepeat: 'repeat-y',
              backgroundPosition: 'top',
              transform: 'scaleX(-1)'
            }}
          />
        </div>
      </body>
    </html>
  );
}

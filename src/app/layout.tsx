import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Czarna Perła - Antyki i Kolekcje",
  description: "Antyki i kolekcje z pasją. Porcelana, obrazy, biżuteria.",
  icons: {
    icon: "/images/owner.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${inter.className} ${playfair.className}`}>
      <body className="bg-stone-50 text-stone-900">
        <div className="flex">
          {/* Left decorative strip - scrolls with page */}
          <div 
            className="w-16 md:w-24 flex-shrink-0"
            style={{
              backgroundImage: 'url(/images/strip.webp)',
              backgroundSize: '100% auto',
              backgroundRepeat: 'repeat-y',
              backgroundPosition: 'top'
            }}
          />
          
          {/* Main content */}
          <div className="flex-1 flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          
          {/* Right decorative strip - scrolls with page */}
          <div 
            className="w-16 md:w-24 flex-shrink-0"
            style={{
              backgroundImage: 'url(/images/strip.webp)',
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

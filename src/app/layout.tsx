import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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

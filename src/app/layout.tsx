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

        {/* Mobile: Strips as overlays */}
        <div className="md:hidden relative">
          {/* Left strip overlay */}
          <div 
            className="fixed left-0 top-0 bottom-0 w-8 z-40 pointer-events-none"
            style={{
              backgroundImage: 'url(/images/strip_mobile.jpg)',
              backgroundSize: '100% auto',
              backgroundRepeat: 'repeat-y',
              backgroundPosition: 'top'
            }}
          />
          
          {/* Right strip overlay */}
          <div 
            className="fixed right-0 top-0 bottom-0 w-8 z-40 pointer-events-none"
            style={{
              backgroundImage: 'url(/images/strip_mobile.jpg)',
              backgroundSize: '100% auto',
              backgroundRepeat: 'repeat-y',
              backgroundPosition: 'top',
              transform: 'scaleX(-1)'
            }}
          />

          {/* Main content */}
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

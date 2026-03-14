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
    icon: "/images/owner.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${inter.className} ${playfair.className}`}>
      <body className="bg-stone-50 text-stone-900">
        <Header />
        
        {/* Left decorative strip */}
        <div className="absolute left-0 top-0 w-16 md:w-24 z-40 pointer-events-none">
          <Image
            src="/images/strip.jpg"
            alt=""
            width={100}
            height={600}
            className="w-full h-auto"
            sizes="100px"
          />
        </div>
        
        {/* Right decorative strip (mirrored) */}
        <div className="absolute right-0 top-0 w-16 md:w-24 z-40 pointer-events-none">
          <Image
            src="/images/strip.jpg"
            alt=""
            width={100}
            height={600}
            className="w-full h-auto scale-x-[-1]"
            sizes="100px"
          />
        </div>
        
        <div className="ml-16 md:ml-24 mr-16 md:mr-24">
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/home/FeatureCard";
import { CategoryPreview } from "@/components/home/CategoryPreview";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-accent-gold">
              Czarna Perelka
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-8 leading-relaxed">
              Odkryj wyjątkowe antyki, starocje i przedmioty kolekcjonerskie. 
              Każdy przedmiot opowiada swoją historię.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kolekcja">
                <Button variant="primary" size="lg">
                  Zobacz Kolekcję
                </Button>
              </Link>
              <Link href="/o-nas">
                <Button variant="outline" size="lg">
                  O Nas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Dlaczego Czarna Perelka?
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Z pasją do antyków i wieloletnim doświadczeniem oferujemy tylko autentyczne, 
              wyjątkowe przedmioty.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🔍"
              title="Autentyczność"
              description="Każdy przedmiot jest starannie weryfikowany i pochodzi z pewnych źródeł."
            />
            <FeatureCard
              icon="📜"
              title="Historia"
              description="Dokumentujemy pochodzenie i historię każdego antyku w naszej kolekcji."
            />
            <FeatureCard
              icon="🤝"
              title="Zaufanie"
              description="Wielu zadowolonych klientów w Polsce i za granicą."
            />
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
            Nasze Kategorie
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryPreview title="Meble" image="/placeholder-furniture.jpg" href="/kolekcja/meble" />
            <CategoryPreview title="Porcelana" image="/placeholder-porcelain.jpg" href="/kolekcja/porcelana" />
            <CategoryPreview title="Srebra" image="/placeholder-silver.jpg" href="/kolekcja/srebra" />
            <CategoryPreview title="Obrazy" image="/placeholder-paintings.jpg" href="/kolekcja/obrazy" />
          </div>
        </div>
      </section>

      {/* News/Blog Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
              Aktualności
            </h2>
            <Link href="/aktualnosci" className="text-accent-gold hover:text-accent-bronze transition-colors">
              Zobacz wszystkie →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="antique-card bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-stone-200 flex items-center justify-center text-stone-400">
                [Zdjęcie]
              </div>
              <div className="p-6">
                <span className="text-sm text-accent-gold font-medium">Nowości</span>
                <h3 className="font-serif text-xl font-semibold mt-2 mb-3">
                  Nowa dostawa antyków z XIX wieku
                </h3>
                <p className="text-stone-600 text-sm">
                  Właśnie otrzymaliśmy wyjątkową kolekcję mebli i porcelany...
                </p>
              </div>
            </article>
            <article className="antique-card bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-stone-200 flex items-center justify-center text-stone-400">
                [Zdjęcie]
              </div>
              <div className="p-6">
                <span className="text-sm text-accent-gold font-medium">Wydarzenia</span>
                <h3 className="font-serif text-xl font-semibold mt-2 mb-3">
                  Targi Antyków w Warszawie
                </h3>
                <p className="text-stone-600 text-sm">
                  Zapraszamy na nadchodzące targi antyków, gdzie będziemy obecni...
                </p>
              </div>
            </article>
            <article className="antique-card bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-stone-200 flex items-center justify-center text-stone-400">
                [Zdjęcie]
              </div>
              <div className="p-6">
                <span className="text-sm text-accent-gold font-medium">Artykuły</span>
                <h3 className="font-serif text-xl font-semibold mt-2 mb-3">
                  Jak rozpoznać oryginalne srebro?
                </h3>
                <p className="text-stone-600 text-sm">
                  Poradnik dla początkujących kolekcjonerów srebra antycznego...
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-accent-gold">
            Masz pytania?
          </h2>
          <p className="text-lg text-stone-300 mb-8">
            Skontaktuj się z nami. Chętnie pomożemy w znalezieniu idealnego antyku 
            lub odpowiemy na pytania o naszą kolekcję.
          </p>
          <Link href="/kontakt">
            <Button variant="primary" size="lg">
              Kontakt
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/home/FeatureCard";
import { CategoryPreview } from "@/components/home/CategoryPreview";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,98,0.3),transparent_70%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-accent-gold">
              Czarna Perła
            </h1>
            <p className="font-serif text-xl md:text-2xl text-stone-300 mb-6 italic">
              Skarby dla prawdziwych kolekcjonerów
            </p>
            <p className="text-lg text-stone-300 mb-8 leading-relaxed">
              Czarna Perła to statek piratów, a piraci – jak wielu z nas – lubią walczyć, zdobywać i gromadzić skarby. 
              Może jesteście wszyscy jak ci piraci, zaokrętowani na tym zgrabnym galionie?
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

      {/* Story Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-stone-700">
            <p className="text-lg leading-relaxed mb-6">
              <span className="font-serif text-2xl text-accent-gold">Czarna Perła...</span> Statek o tej nazwie nie jest fikcją, istniał naprawdę, 
              a w dodatku jego kapitanem był <strong>Henry Morgan</strong>, jeden z najsłynniejszych piratów.
            </p>
            <p className="leading-relaxed mb-6">
              Płyniemy przez morza bezpieczni na pokładzie tej steranej przez historię łajby. Znajdujemy, gromadzimy porcelanę, 
              szkło i inne ulubione przedmioty.
            </p>
            <p className="leading-relaxed mb-6">
              W końcu jesteśmy w stosunku do piratów bezpieczniejsi. Dzisiejsi zdobywcy to często majtkowie zamustrowani w sieci, 
              siedzący w wygodnej kanapie – choćby na tej stronie. I nie straszne są im fale oceanów, a doskwiera zaś może czasem 
              brak zasięgu, gotówki, cena...
            </p>
            <p className="leading-relaxed text-lg font-medium text-stone-900">
              Tylko rozwagi, wyobraźni i szczęścia w łowach pozostaje życzyć!
            </p>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 md:py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-center">
            Nasze Kategorie
          </h2>
          <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
            Znajdujemy i gromadzimy porcelanę, szkło, obrazy i inne unikalne przedmioty.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryPreview title="Porcelana" image="/images/products/img-08.50.51.jpg" href="/kolekcja/porcelana" />
            <CategoryPreview title="Obrazy" image="/images/products/img-08.50.53.jpg" href="/kolekcja/obrazy" />
            <CategoryPreview title="Biżuteria" image="/images/products/img-08.50.56.jpg" href="/kolekcja/bizuteria" />
            <CategoryPreview title="Inne" image="/images/products/img-08.51.01.jpg" href="/kolekcja/inne" />
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

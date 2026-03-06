import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Nas | Czarna Perła",
  description: "Poznaj historię Czarnej Perły - sklepu z antykami i kolekcjonerskimi skarbami.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-accent-gold mb-4">
            O Nas
          </h1>
          <p className="text-xl text-stone-300">
            Historia Czarnej Perły
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Owner Photo */}
            <div className="relative">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/owner.jpg"
                  alt="Właściciel Czarnej Perły"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-gold/20 rounded-full blur-2xl" />
            </div>

            {/* Story Content */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-stone-900">
                Czarna Perła
              </h2>
              <div className="prose prose-lg text-stone-700 space-y-4">
                <p>
                  <strong className="text-accent-gold">Czarna Perła</strong> to statek piratów, 
                  a piraci – jak wielu z nas – lubią walczyć, zdobywać i gromadzić skarby. 
                  Może jesteście wszyscy jak ci piraci, zaokrętowani na tym zgrabnym galionie?
                </p>
                <p>
                  Statek o tej nazwie nie jest fikcją, istniał naprawdę, a w dodatku jego kapitanem 
                  był <strong>Henry Morgan</strong>, jeden z najsłynniejszych piratów.
                </p>
                <p>
                  Płyniemy przez morza bezpieczni na pokładzie tej steranej przez historię łajby. 
                  Znajdujemy, gromadzimy porcelanę, szkło i inne ulubione przedmioty.
                </p>
                <p>
                  W końcu jesteśmy w stosunku do piratów bezpieczniejsi. Dzisiejsi zdobywcy to często 
                  majtkowie zamustrowani w sieci, siedzący w wygodnej kanapie – choćby na tej stronie. 
                  I nie straszne są im fale oceanów, a doskwiera zaś może czasem brak zasięgu, 
                  gotówki, cena...
                </p>
                <p className="text-lg font-medium text-stone-900">
                  Tylko rozwagi, wyobraźni i szczęścia w łowach pozostaje życzyć!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-stone-900 text-center mb-12">
            Nasze Wartości
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">
                Autentyczność
              </h3>
              <p className="text-stone-600">
                Każdy przedmiot jest starannie weryfikowany i pochodzi z pewnych źródeł.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📜</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">
                Historia
              </h3>
              <p className="text-stone-600">
                Dokumentujemy pochodzenie i historię każdego antyku w naszej kolekcji.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚓</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">
                Pasja
              </h3>
              <p className="text-stone-600">
                Z pasją do antyków i wieloletnim doświadczeniem w kolekcjonowaniu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4 text-accent-gold">
            Chcesz dowiedzieć się więcej?
          </h2>
          <p className="text-lg text-stone-300 mb-8">
            Skontaktuj się z nami w sprawie przedmiotów z naszej kolekcji.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-md bg-accent-gold text-stone-900 hover:bg-accent-bronze hover:text-white transition-all duration-200"
          >
            Kontakt
          </a>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";

export default function Home() {
  const products = [
    { name: "Zestaw herbaciany z porcelany", image: "/images/products/img-08.50.51.jpg", category: "Porcelana" },
    { name: "Portret kobiecy - olej na płótnie", image: "/images/products/img-08.50.53.jpg", category: "Obrazy" },
    { name: "Kolekcja biżuterii vintage", image: "/images/products/img-08.50.56.jpg", category: "Biżuteria" },
    { name: "Kolekcja Wedgwood", image: "/images/products/img-08.50.59.jpg", category: "Porcelana" },
    { name: "Kolekcja obrazów w ramach", image: "/images/products/img-08.50.58.jpg", category: "Obrazy" },
    { name: "Monety i guziki kolekcjonerskie", image: "/images/products/img-08.51.01.jpg", category: "Inne" },
  ];

  return (
    <>
      {/* Hero with Owner */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl font-bold text-amber-400 mb-6">Czarna Perła</h1>
              <p className="text-lg text-stone-300 leading-relaxed mb-4">
                Czarna Perła to statek piratów, a piraci – jak wielu z nas – lubią walczyć, zdobywać i gromadzić skarby. 
                Może jesteście wszyscy jak ci piraci, zaokrętowani na tym zgrabnym galionie?
              </p>
              <p className="text-lg text-stone-300 leading-relaxed">
                Statek o tej nazwie nie jest fikcją, istniał naprawdę, a jego kapitanem byl{" "}
                <strong className="text-amber-400">Henry Morgan</strong>, jeden z najsłynniejszych piratów.
              </p>
            </div>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/images/owner.jpg"
                alt="Właściciel"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - All 6 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Nasze Skarby</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div key={i} className="group">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-stone-100 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm text-amber-600 font-medium">{product.category}</span>
                <h3 className="font-serif text-lg font-semibold">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Story */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Witaj na pokładzie</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            Płyniemy przez morza bezpieczni na pokładzie tej steranej przez historię łajby. 
            Znajdujemy, gromadzimy porcelanę, szkło i inne ulubione przedmioty.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            W końcu jesteśmy w stosunku do piratów bezpieczniejsi. Dzisiejsi zdobywcy to często majtkowie zamustrowani w sieci, 
            siedzący w wygodnej kanapie – choćby na tej stronie. I nie straszne są im fale oceanów, 
            a doskwira zaś może czasem brak zasięgu, gotówki, cena...
          </p>
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            Tutaj znajdziecie: skarby, łupy, statki, jedzenie, napoje, pieniądze i zabawę. 
            To bezpieczna przystań dla piratów.
          </p>
          <p className="text-xl font-semibold text-stone-900">
            Tylko rozwagi, wyobraźni i szczęścia w łowach pozostaje życzyć!
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4 text-amber-400">Kontakt</h2>
          <p className="text-stone-300 mb-6">Masz pytania o nasze skarby? Napisz do nas.</p>
          <a href="mailto:info@czarnaperelka.com" className="text-amber-400 text-xl hover:text-amber-300">
            info@czarnaperelka.com
          </a>
        </div>
      </section>
    </>
  );
}

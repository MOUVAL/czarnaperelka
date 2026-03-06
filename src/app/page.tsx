import Image from "next/image";

export default function Home() {
  const products = [
    { name: "Zestaw herbaciany z porcelany", image: "/images/products/img-08.50.51.jpg", category: "Porcelana" },
    { name: "Porcelanowa zastawa", image: "/images/products/img-08.50.51-1.jpg", category: "Porcelana" },
    { name: "Zestaw obiadów z porcelany", image: "/images/products/img-08.50.51-2.jpg", category: "Porcelana" },
    { name: "Porcelana ozdobna", image: "/images/products/img-08.50.52.jpg", category: "Porcelana" },
    { name: "Portret kobiecy - olej na płótnie", image: "/images/products/img-08.50.53.jpg", category: "Obrazy" },
    { name: "Obraz w ramie", image: "/images/products/img-08.50.53-1.jpg", category: "Obrazy" },
    { name: "Biżuteria vintage", image: "/images/products/img-08.50.54.jpg", category: "Biżuteria" },
    { name: "Kolekcja broszek", image: "/images/products/img-08.50.54-1.jpg", category: "Biżuteria" },
    { name: "Naszyjniki antyczne", image: "/images/products/img-08.50.54-2.jpg", category: "Biżuteria" },
    { name: "Pierścionki vintage", image: "/images/products/img-08.50.54-3.jpg", category: "Biżuteria" },
    { name: "Kolczyki antyczne", image: "/images/products/img-08.50.54-4.jpg", category: "Biżuteria" },
    { name: "Zegarki kieszonkowe", image: "/images/products/img-08.50.54-5.jpg", category: "Biżuteria" },
    { name: "Bransoletki vintage", image: "/images/products/img-08.50.54-6.jpg", category: "Biżuteria" },
    { name: "Srebra stołowe", image: "/images/products/img-08.50.55.jpg", category: "Srebra" },
    { name: "Srebrne sztućce", image: "/images/products/img-08.50.55-1.jpg", category: "Srebra" },
    { name: "Kolekcja biżuterii", image: "/images/products/img-08.50.56.jpg", category: "Biżuteria" },
    { name: "Biżuteria ozdobna", image: "/images/products/img-08.50.56-1.jpg", category: "Biżuteria" },
    { name: "Obraz olejny", image: "/images/products/img-08.50.57.jpg", category: "Obrazy" },
    { name: "Malarstwo klasyczne", image: "/images/products/img-08.50.57-1.jpg", category: "Obrazy" },
    { name: "Portret historyczny", image: "/images/products/img-08.50.57-2.jpg", category: "Obrazy" },
    { name: "Obraz w złotej ramie", image: "/images/products/img-08.50.57-3.jpg", category: "Obrazy" },
    { name: "Kolekcja obrazów", image: "/images/products/img-08.50.58.jpg", category: "Obrazy" },
    { name: "Porcelana Wedgwood", image: "/images/products/img-08.50.59.jpg", category: "Porcelana" },
    { name: "Waza Wedgwood", image: "/images/products/img-08.50.59-1.jpg", category: "Porcelana" },
    { name: "Porcelana angielska", image: "/images/products/img-08.50.59-2.jpg", category: "Porcelana" },
    { name: "Zestaw Wedgwood", image: "/images/products/img-08.50.59-3.jpg", category: "Porcelana" },
    { name: "Monety kolekcjonerskie", image: "/images/products/img-08.51.00.jpg", category: "Inne" },
    { name: "Guziki antyczne", image: "/images/products/img-08.51.00-1.jpg", category: "Inne" },
    { name: "Monety i medale", image: "/images/products/img-08.51.01.jpg", category: "Inne" },
    { name: "Kolekcja numizmatyczna", image: "/images/products/img-08.51.01-1.jpg", category: "Inne" },
  ];

  return (
    <>
      {/* Full Hero with Boat Image - Full height, centered */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/boat.webp"
          alt="Czarna Perła - statek"
          fill
          className="object-contain bg-stone-900"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-transparent to-stone-900/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <h1 className="font-serif text-6xl md:text-7xl font-bold text-amber-400 mb-8 drop-shadow-2xl">
              Czarna Perła
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed mb-6 drop-shadow-lg">
              Czarna Perła to statek piratów, a piraci – jak wielu z nas – lubią walczyć, zdobywać i gromadzić skarby. 
              Może jesteście wszyscy jak ci piraci, zaokrętowani na tym zgrabnym galionie?
            </p>
            <p className="text-lg md:text-xl text-stone-200 leading-relaxed drop-shadow-lg">
              Statek o tej nazwie nie jest fikcją, istniał naprawdę, a jego kapitanem byl{" "}
              <strong className="text-amber-400">Henry Morgan</strong>, jeden z najsłynniejszych piratów.
            </p>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="relative w-56 h-56 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-amber-400">
            <Image
              src="/images/owner.jpg"
              alt="Właściciel"
              fill
              sizes="224px"
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl font-bold text-amber-400 mb-4">Witaj na pokładzie</h2>
            <p className="text-lg text-stone-300 leading-relaxed">
              Płyniemy przez morza bezpieczni na pokładzie tej steranej przez historię łajby. 
              Znajdujemy, gromadzimy porcelanę, szkło i inne ulubione przedmioty.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid - ALL 30 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Nasze Skarby</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product, i) => (
              <div key={i} className="group">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-stone-100 mb-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-amber-600 font-medium">{product.category}</span>
                <h3 className="font-serif text-sm font-semibold leading-tight">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Story */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Bezpieczna Przystań</h2>
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

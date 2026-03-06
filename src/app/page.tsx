import Image from "next/image";
import Link from "next/link";

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
      {/* Hero */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl font-bold text-amber-400 mb-6">Czarna Perła</h1>
          <p className="text-xl text-stone-300 leading-relaxed">
            Czarna Perła to statek piratów, a piraci – jak wielu z nas – lubią zdobywać i gromadzić skarby.
            Statek o tej nazwie istniał naprawdę, a jego kapitanem był Henry Morgan, jeden z najsłynniejszych piratów.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Nasze Skarby</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square relative rounded-lg overflow-hidden bg-stone-100 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm text-amber-600 font-medium">{product.category}</span>
                <h3 className="font-serif text-lg font-semibold">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Historia</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            Płyniemy przez morza bezpieczni na pokładzie tej steranej przez historię łajby. 
            Znajdujemy, gromadzimy porcelanę, szkło i inne ulubione przedmioty.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed">
            W końcu jesteśmy w stosunku do piratów bezpieczniejsi. Dzisiejsi zdobywcy siedzą w wygodnej kanapie 
            i nie straszne są im fale oceanów. Tylko rozwagi, wyobraźni i szczęścia w łowach pozostaje życzyć!
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4 text-amber-400">Kontakt</h2>
          <p className="text-stone-300 mb-6">Masz pytania o nasze skarby? Napisz do nas.</p>
          <a href="mailto:info@czarnaperla.pl" className="text-amber-400 text-xl hover:text-amber-300">
            info@czarnaperla.pl
          </a>
        </div>
      </section>
    </>
  );
}

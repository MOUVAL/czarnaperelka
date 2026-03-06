import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getProducts, getCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kolekcja | Czarna Perła",
  description: "Przeglądaj naszą kolekcję antyków - porcelana, obrazy, biżuteria i inne skarby.",
};

export default function CollectionPage() {
  const products = getProducts();
  const categories = getCategories();
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-accent-gold mb-4">
            Nasza Kolekcja
          </h1>
          <p className="text-xl text-stone-300">
            Znajdujemy i gromadzimy porcelanę, szkło, obrazy i inne unikalne przedmioty.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-stone-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/kolekcja"
              className="px-4 py-2 rounded-full bg-accent-gold text-stone-900 font-medium text-sm"
            >
              Wszystkie
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/kolekcja/${category.id}`}
                className="px-4 py-2 rounded-full bg-stone-100 text-stone-700 hover:bg-accent-gold hover:text-stone-900 transition-colors font-medium text-sm"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-12 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-8">
              Wyróżnione
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/kolekcja/${product.id}`}
                  className="antique-card bg-white rounded-lg shadow-md overflow-hidden group"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.period && (
                      <span className="absolute top-3 left-3 px-2 py-1 bg-stone-900/80 text-white text-xs rounded">
                        {product.period}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-semibold text-stone-900 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-stone-500 line-clamp-2 mb-2">
                      {product.description}
                    </p>
                    <p className="text-accent-gold font-medium text-sm">
                      {product.priceText}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-8">
            Wszystkie przedmioty
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/kolekcja/${product.id}`}
                className="antique-card bg-white rounded-lg shadow-md overflow-hidden group border border-stone-100"
              >
                <div className="aspect-square relative">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.period && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-stone-900/80 text-white text-xs rounded">
                      {product.period}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-accent-gold uppercase tracking-wide mb-1">
                    {categories.find((c) => c.id === product.category)?.name}
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-stone-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-stone-500 line-clamp-2 mb-2">
                    {product.description}
                  </p>
                  <p className="text-accent-gold font-medium text-sm">
                    {product.priceText}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4 text-accent-gold">
            Nie znalazłeś czegoś szukasz?
          </h2>
          <p className="text-stone-300 mb-6">
            Skontaktuj się z nami - możemy pomóc w znalezieniu konkretnego przedmiotu.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-md bg-accent-gold text-stone-900 hover:bg-accent-bronze hover:text-white transition-all duration-200"
          >
            Kontakt
          </Link>
        </div>
      </section>
    </>
  );
}

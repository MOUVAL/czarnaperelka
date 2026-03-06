import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getProducts, getCategories } from "@/lib/content";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categories = getCategories();
  const cat = categories.find((c) => c.id === category);
  
  if (!cat) {
    return { title: "Kategoria nie znaleziona | Czarna Perła" };
  }

  return {
    title: `${cat.name} | Czarna Perła`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const products = getProducts();
  const categories = getCategories();
  const currentCategory = categories.find((c) => c.id === category);

  if (!currentCategory) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === category);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-4">
            <Link href="/kolekcja" className="hover:text-accent-gold">
              Kolekcja
            </Link>
            <span className="mx-2">/</span>
            <span className="text-accent-gold">{currentCategory.name}</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-accent-gold mb-4">
            {currentCategory.name}
          </h1>
          <p className="text-xl text-stone-300">
            {currentCategory.description}
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-stone-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/kolekcja"
              className="px-4 py-2 rounded-full bg-stone-100 text-stone-700 hover:bg-accent-gold hover:text-stone-900 transition-colors font-medium text-sm"
            >
              Wszystkie
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/kolekcja/${cat.id}`}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                  cat.id === category
                    ? "bg-accent-gold text-stone-900"
                    : "bg-stone-100 text-stone-700 hover:bg-accent-gold hover:text-stone-900"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-stone-500 text-lg mb-4">
                Brak przedmiotów w tej kategorii.
              </p>
              <Link
                href="/kolekcja"
                className="text-accent-gold hover:text-accent-bronze"
              >
                ← Powrót do kolekcji
              </Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
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
          )}
        </div>
      </section>
    </>
  );
}

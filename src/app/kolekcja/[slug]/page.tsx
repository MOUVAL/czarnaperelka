import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getProducts, getCategories } from "@/lib/content";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categories = getCategories();
  const products = getProducts();
  
  const category = categories.find((c) => c.id === slug);
  const product = products.find((p) => p.id === slug);
  
  if (category) {
    return {
      title: `${category.name} | Czarna Perła`,
      description: category.description,
    };
  }
  
  if (product) {
    return {
      title: `${product.name} | Czarna Perła`,
      description: product.description,
    };
  }
  
  return { title: "Nie znaleziono | Czarna Perła" };
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const products = getProducts();
  const categories = getCategories();
  const category = categories.find((c) => c.id === slug);
  const product = products.find((p) => p.id === slug);

  // If it's a category, show category page
  if (category) {
    const categoryProducts = products.filter((p) => p.category === slug);

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
              <span className="text-accent-gold">{category.name}</span>
            </nav>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-accent-gold mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-stone-300">
              {category.description}
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
                    cat.id === slug
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
                {categoryProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/kolekcja/${p.id}`}
                    className="antique-card bg-white rounded-lg shadow-md overflow-hidden group border border-stone-100"
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {p.period && (
                        <span className="absolute top-3 left-3 px-2 py-1 bg-stone-900/80 text-white text-xs rounded">
                          {p.period}
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-semibold text-stone-900 mb-1">
                        {p.name}
                      </h3>
                      <p className="text-sm text-stone-500 line-clamp-2 mb-2">
                        {p.description}
                      </p>
                      <p className="text-accent-gold font-medium text-sm">
                        {p.priceText}
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

  // If it's a product, show product detail page
  if (product) {
    const productCategory = categories.find((c) => c.id === product.category);
    const relatedProducts = products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);

    return (
      <>
        {/* Breadcrumb */}
        <section className="bg-stone-100 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-stone-500">
              <Link href="/" className="hover:text-accent-gold">
                Strona główna
              </Link>
              <span className="mx-2">/</span>
              <Link href="/kolekcja" className="hover:text-accent-gold">
                Kolekcja
              </Link>
              {productCategory && (
                <>
                  <span className="mx-2">/</span>
                  <Link href={`/kolekcja/${productCategory.id}`} className="hover:text-accent-gold">
                    {productCategory.name}
                  </Link>
                </>
              )}
              <span className="mx-2">/</span>
              <span className="text-stone-900">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Detail */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Images */}
              <div className="space-y-4">
                <div className="aspect-square relative rounded-lg overflow-hidden bg-stone-100">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {product.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="aspect-square relative rounded-md overflow-hidden bg-stone-100 cursor-pointer hover:ring-2 hover:ring-accent-gold transition-all"
                      >
                        <Image
                          src={img}
                          alt={`${product.name} - zdjęcie ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                {productCategory && (
                  <Link
                    href={`/kolekcja/${productCategory.id}`}
                    className="text-sm text-accent-gold uppercase tracking-wide hover:text-accent-bronze"
                  >
                    {productCategory.name}
                  </Link>
                )}
                
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
                  {product.name}
                </h1>

                <p className="text-2xl font-semibold text-accent-gold">
                  {product.priceText}
                </p>

                <div className="prose prose-lg text-stone-700">
                  <p>{product.description}</p>
                </div>

                {/* Product Details */}
                <div className="border-t border-stone-200 pt-6 space-y-4">
                  {product.period && (
                    <div className="flex justify-between">
                      <span className="text-stone-500">Okres:</span>
                      <span className="text-stone-900 font-medium">{product.period}</span>
                    </div>
                  )}
                  {product.condition && (
                    <div className="flex justify-between">
                      <span className="text-stone-500">Stan:</span>
                      <span className="text-stone-900 font-medium">{product.condition}</span>
                    </div>
                  )}
                  {product.dimensions && (
                    <div className="flex justify-between">
                      <span className="text-stone-500">Wymiary:</span>
                      <span className="text-stone-900 font-medium">{product.dimensions}</span>
                    </div>
                  )}
                </div>

                {/* Contact CTA */}
                <div className="bg-stone-50 rounded-lg p-6 space-y-4">
                  <p className="text-stone-700">
                    Interesuje Cię ten przedmiot? Skontaktuj się z nami w celu uzyskania 
                    dodatkowych informacji lub umówienia spotkania.
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center w-full px-6 py-3 font-medium rounded-md bg-accent-gold text-stone-900 hover:bg-accent-bronze hover:text-white transition-all duration-200"
                  >
                    Zapytaj o przedmiot
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-2xl font-bold text-stone-900 mb-8">
                Podobne przedmioty
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/kolekcja/${relatedProduct.id}`}
                    className="antique-card bg-white rounded-lg shadow-md overflow-hidden group"
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-semibold text-stone-900 mb-1">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-stone-500 line-clamp-2">
                        {relatedProduct.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </>
    );
  }

  // Not found
  notFound();
}

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getProducts, getCategories } from "@/lib/content";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProducts().find((p) => p.id === id);
  
  if (!product) {
    return { title: "Przedmiot nie znaleziony | Czarna Perła" };
  }

  return {
    title: `${product.name} | Czarna Perła`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const products = getProducts();
  const categories = getCategories();
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const category = categories.find((c) => c.id === product.category);

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
            {category && (
              <>
                <span className="mx-2">/</span>
                <Link href={`/kolekcja/${category.id}`} className="hover:text-accent-gold">
                  {category.name}
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
              {category && (
                <Link
                  href={`/kolekcja/${category.id}`}
                  className="text-sm text-accent-gold uppercase tracking-wide hover:text-accent-bronze"
                >
                  {category.name}
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
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-8">
            Podobne przedmioty
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
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
    </>
  );
}

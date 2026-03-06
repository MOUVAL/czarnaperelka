import { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aktualności | Czarna Perła",
  description: "Najnowsze wiadomości i artykuły od Czarnej Perły.",
};

export default function NewsPage() {
  const posts = getBlogPosts();

  const categoryLabels: Record<string, string> = {
    aktualnosci: "Aktualności",
    artykuly: "Artykuły",
    wydarzenia: "Wydarzenia",
  };

  const categoryColors: Record<string, string> = {
    aktualnosci: "bg-accent-gold",
    artykuly: "bg-blue-600",
    wydarzenia: "bg-green-600",
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-accent-gold mb-4">
            Aktualności
          </h1>
          <p className="text-xl text-stone-300">
            Najnowsze wiadomości, artykuły i wydarzenia.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-stone-500 text-lg">Brak artykułów.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="antique-card bg-white rounded-lg shadow-md overflow-hidden border border-stone-100"
                >
                  <div className="aspect-video relative bg-stone-200">
                    {post.image ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center">
                        <span className="text-stone-500 text-sm">[Zdjęcie]</span>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center">
                        <span className="text-4xl">📜</span>
                      </div>
                    )}
                    <span
                      className={`absolute top-3 left-3 px-2 py-1 text-white text-xs rounded ${
                        categoryColors[post.category] || "bg-stone-600"
                      }`}
                    >
                      {categoryLabels[post.category] || post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <time className="text-sm text-stone-400 block mb-2">
                      {new Date(post.date).toLocaleDateString("pl-PL", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h3 className="font-serif text-xl font-semibold text-stone-900 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-stone-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/aktualnosci/${post.slug}`}
                      className="text-accent-gold hover:text-accent-bronze text-sm font-medium"
                    >
                      Czytaj więcej →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

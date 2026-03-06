import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-serif text-xl text-amber-400 mb-4">Czarna Perła</p>
        <p className="text-stone-400 text-sm mb-4">
          Antyki i kolekcje z pasją
        </p>
        <p className="text-stone-500 text-sm">
          © {new Date().getFullYear()} Czarna Perła
        </p>
      </div>
    </footer>
  );
}

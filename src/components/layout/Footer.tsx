import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl text-accent-gold mb-4">
              Czarna Perła
            </h3>
            <p className="text-stone-400 mb-4 max-w-md">
              Odkryj wyjątkowe antyki i przedmioty kolekcjonerskie. Każdy przedmiot w naszej kolekcji 
              został starannie wyselekcjonowany i posiada swoją unikalną historię.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Szybkie Linki</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/kolekcja" className="text-stone-400 hover:text-accent-gold transition-colors">
                  Kolekcja
                </Link>
              </li>
              <li>
                <Link href="/aktualnosci" className="text-stone-400 hover:text-accent-gold transition-colors">
                  Aktualności
                </Link>
              </li>
              <li>
                <Link href="/o-nas" className="text-stone-400 hover:text-accent-gold transition-colors">
                  O Nas
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-stone-400 hover:text-accent-gold transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontakt</h4>
            <ul className="space-y-2 text-stone-400">
              <li>info@czarnaperelka.pl</li>
              <li>+48 XXX XXX XXX</li>
              <li>Polska</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} Czarna Perła. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}

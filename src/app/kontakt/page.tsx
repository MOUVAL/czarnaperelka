import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Czarna Perła",
  description: "Skontaktuj się z nami w sprawie antyków i przedmiotów kolekcjonerskich.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-accent-gold mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-stone-300">
            Masz pytania? Chętnie pomożemy.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
                  Jak się z nami skontaktować
                </h2>
                <p className="text-stone-600">
                  Zapraszamy do kontaktu w sprawie przedmiotów z naszej kolekcji, 
                  wycen lub spotkań.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
                    <p className="text-stone-600">info@czarnaperla.pl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Telefon</h3>
                    <p className="text-stone-600">+48 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Lokalizacja</h3>
                    <p className="text-stone-600">Polska</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-stone-50 rounded-lg p-8">
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-6">
                Wyślij wiadomość
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-md border border-stone-300 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-md border border-stone-300 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all"
                    placeholder="jan@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                    Temat
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-md border border-stone-300 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all"
                    placeholder="Pytanie o przedmiot"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-stone-300 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Treść wiadomości..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 font-medium rounded-md bg-accent-gold text-stone-900 hover:bg-accent-bronze hover:text-white transition-all duration-200"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">O nas</h1>
      
      <div className="prose prose-stone mx-auto">
        <p className="text-lg text-stone-600 mb-6">
          Czarna Perła to pasja do antyków i historii. Jak piraci na statku Henry'ego Morgana, 
          szukamy, zdobywamy i gromadzimy skarby - porcelanę, obrazy, biżuterię i inne 
          unikalne przedmioty.
        </p>
        
        <p className="text-lg text-stone-600 mb-6">
          Płyniemy przez morza antyków, bezpieczni na pokładzie tej steranej przez historię łajby. 
          Znajdujemy, gromadzimy i dzielimy się pięknem przeszłości.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Kontakt</h2>
        <div className="bg-stone-100 rounded-lg p-6 mb-8">
          <p className="mb-2"><strong>Email:</strong> Djmisniabank@gmail.com</p>
          <p className="text-stone-500 text-sm">Odpisujemy zazwyczaj w ciągu 24h</p>
        </div>

        <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Prywatność</h2>
        <div className="text-sm text-stone-600 space-y-4">
          <p>
            Nie zbieramy żadnych danych osobowych bez Twojej wiedzy. 
            Jeśli do nas napiszesz - odpisujemy i tyle. Nie spamujemy, nie sprzedajemy danych.
          </p>
          
          <p>
            Strona używa minimalnych plików cookies żeby działać poprawnie. 
            Nic nie śledzimy, nie analizujemy.
          </p>
          
          <p>
            Masz pytania o swoje dane? Napisz na email - usuniemy wszystko jeśli chcesz.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Zakupy</h2>
        <div className="text-sm text-stone-600 space-y-4">
          <p>
            Wszystkie przedmioty są unikalne - każdy jest jedyny w swoim rodzaju. 
            Sprzedajemy przez email - napisz, dogadamy szczegóły.
          </p>
          
          <p>
            <strong>Zwroty:</strong> Antyki to nie zwykłe zakupy. Jeśli się zastanawiasz - 
            pytaj przed zakupem. Pokazujemy dokładne zdjęcia, odpowiadamy na pytania. 
            Zwrot możliwy tylko jeśli przedmiot nie zgadza się z opisem.
          </p>
          
          <p>
            <strong>Dostawa:</strong> Pakujemy starannie, wysyłamy bezpiecznie. 
            Koszt i sposób dostawy ustalamy indywidualnie.
          </p>
        </div>
      </div>
    </div>
  );
}

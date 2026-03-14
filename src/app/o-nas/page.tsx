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

        <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Dane firmy</h2>
        <div className="bg-stone-100 rounded-lg p-6 mb-8">
          <p className="mb-2"><strong>Nazwa:</strong> Czarna Perła</p>
          <p className="mb-2"><strong>Adres:</strong> Polska</p>
          <p className="mb-2"><strong>Email:</strong> Djmisniabank@gmail.com</p>
        </div>

        <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Polityka prywatności (RODO)</h2>
        <div className="text-sm text-stone-600 space-y-4">
          <p>
            <strong>1. Administrator danych</strong><br />
            Administratorem danych osobowych jest właściciel sklepu Czarna Perła.
          </p>
          
          <p>
            <strong>2. Cel przetwarzania</strong><br />
            Dane przetwarzane są wyłącznie w celu obsługi zapytań i realizacji zamówień.
          </p>
          
          <p>
            <strong>3. Prawa użytkownika</strong><br />
            Masz prawo do dostępu, sprostowania, usunięcia lub ograniczenia przetwarzania 
            swoich danych. Wnioski należy kierować na adres email.
          </p>
          
          <p>
            <strong>4. Cookies</strong><br />
            Strona może używać plików cookies w celu zapewnienia prawidłowego działania.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Regulamin</h2>
        <div className="text-sm text-stone-600 space-y-4">
          <p>
            <strong>1. Postanowienia ogólne</strong><br />
            Czarna Perła prowadzi sprzedaż antyków i przedmiotów kolekcjonerskich.
          </p>
          
          <p>
            <strong>2. Zamówienia</strong><br />
            Zamówienia przyjmowane są przez email. Każdy przedmiot jest unikalny 
            i dostępny w jednym egzemplarzu.
          </p>
          
          <p>
            <strong>3. Dostawa i płatność</strong><br />
            Szczegóły dostawy i płatności ustalane są indywidualnie przy zamówieniu.
          </p>
          
          <p>
            <strong>4. Zwroty</strong><br />
            Zgodnie z polskim prawem, na antyki nie przysługuje prawo odstąpienia 
            od umowy (art. 38 ustawy o prawach konsumenta).
          </p>
        </div>
      </div>
    </div>
  );
}

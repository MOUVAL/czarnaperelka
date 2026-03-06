import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
          <Image
            src="/images/owner.jpg"
            alt="Właściciel"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="font-serif text-4xl font-bold mb-6">Czarna Perła</h1>
          <p className="text-lg text-stone-600 mb-4">
            Czarna Perła to statek piratów, a piraci – jak wielu z nas – lubią zdobywać i gromadzić skarby.
          </p>
          <p className="text-stone-600 mb-4">
            Statek o tej nazwie istniał naprawdę, a jego kapitanem był Henry Morgan, jeden z najsłynniejszych piratów.
          </p>
          <p className="text-stone-600 mb-4">
            Płyniemy przez morza bezpieczni na pokładzie tej steranej przez historię łajby. 
            Znajdujemy, gromadzimy porcelanę, szkło i inne ulubione przedmioty.
          </p>
          <p className="text-stone-600">
            Dzisiejsi zdobywcy siedzą w wygodnej kanapie i nie straszne są im fale oceanów. 
            Tylko rozwagi, wyobraźni i szczęścia w łowach pozostaje życzyć!
          </p>
        </div>
      </div>
    </div>
  );
}

import { ClipboardCheck } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import CarCard from '@/components/cars/CarCard';
import { cars, carLogistics, tripMeta } from '@/data';

const CarsPage = () => (
  <>
    <PageHero
      eyebrow="Flota"
      title="Mașini, șoferi & logistică"
      subtitle={`${tripMeta.cars} mașini · ridicare la Beauvais (BVA) · retur split BVA / CDG. Captains și pasageri sunt placeholder până îi completați.`}
      breadcrumbs={[{ label: 'Acasă', to: '/' }, { label: 'Mașini' }]}
    />

    <div className="container mx-auto px-4 py-12 space-y-10">
      {/* Logistics checklist */}
      <section className="rounded-lg border border-brand-gold/30 bg-brand-gold/5 p-6">
        <h2 className="flex items-center gap-2 text-lg font-bold text-brand-greenDark mb-4">
          <ClipboardCheck className="h-5 w-5 text-brand-gold" /> Checklist logistică
        </h2>
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
          {carLogistics.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Cars grid */}
      <section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </div>
  </>
);

export default CarsPage;

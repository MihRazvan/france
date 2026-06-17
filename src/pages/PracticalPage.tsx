import {
  CalendarCheck,
  ShoppingCart,
  ShieldAlert,
  Siren,
  Luggage,
  Lock,
} from 'lucide-react';

import PageHero from '@/components/layout/PageHero';
import ReservationRow from '@/components/common/ReservationRow';
import UsefulLinkCard from '@/components/links/UsefulLinkCard';
import ReservationStatusBadge from '@/components/common/ReservationStatusBadge';
import { reservations, linksByCategory, stays } from '@/data';
import type { ReservationStatus } from '@/types/trip';

// Static packing checklist tuned to this trip.
const packing = [
  'Acte mașină, permis, card de credit pentru garanție',
  'Costume de baie + prosoape de plajă (Plage Valentin)',
  'Haine de schimb / tricou extra pentru karting',
  'Adaptoare & încărcătoare, baterie externă',
  'Cremă de protecție solară, ochelari, șapcă',
  'Pungi pentru cumpărăturile de grup (supermarket runs)',
  'Cash mic pentru parcări / piețe / boulangerie',
  'Tricou / fular pentru meciul Norvegia–Franța 🇫🇷',
];

const statusLegend: ReservationStatus[] = [
  'TODO',
  'Contacted',
  'Reserved',
  'Paid',
  'Confirmed',
  'Backup',
  'Cancelled',
];

const PracticalPage = () => {
  const supermarkets = linksByCategory('supermarket');
  const emergency = [...linksByCategory('emergency'), ...linksByCategory('practical')];
  const houseRules = stays
    .filter((s) => s.houseRules && s.houseRules.length > 0)
    .map((s) => ({ name: s.shortName ?? s.name, rules: s.houseRules! }));

  return (
    <>
      <PageHero
        eyebrow="Operațional"
        title="Info practic"
        subtitle="Status rezervări, cumpărături, reguli, urgențe și un checklist de bagaje."
        breadcrumbs={[{ label: 'Acasă', to: '/' }, { label: 'Practic' }]}
      />

      <div className="container mx-auto px-4 py-12 space-y-14">
        {/* Reservations status board */}
        <section>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-brand-green mb-2">
            <CalendarCheck className="h-6 w-6" /> Status rezervări
          </h2>
          <p className="text-gray-500 mb-4">
            Tablou de control pentru tot ce trebuie rezervat. Editați statusul în{' '}
            <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">src/data/reservations.ts</code>.
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            {statusLegend.map((s) => (
              <ReservationStatusBadge key={s} status={s} />
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reservations.map((r) => (
              <ReservationRow key={r.id} reservation={r} />
            ))}
          </div>
        </section>

        {/* Shopping */}
        <section>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-brand-green mb-2">
            <ShoppingCart className="h-6 w-6" /> Cumpărături
          </h2>
          <p className="text-gray-500 mb-5">
            Duminică seara (Ziua 0) supermarketurile mari sunt închise — aprovizionarea mare se
            face la Guérande (Ziua 2) și Chinon (Ziua 4).
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supermarkets.map((l) => (
              <UsefulLinkCard key={l.id} link={l} />
            ))}
          </div>
        </section>

        {/* House rules + privacy */}
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-brand-greenDark mb-4">
              <ShieldAlert className="h-5 w-5 text-amber-600" /> Reguli ale caselor
            </h2>
            <div className="space-y-4">
              {houseRules.map((g) => (
                <div key={g.name}>
                  <p className="font-semibold text-gray-800 text-sm">{g.name}</p>
                  <ul className="mt-1 space-y-1">
                    {g.rules.map((r, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-gray-100 bg-white shadow-sm p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-brand-greenDark mb-4">
              <Lock className="h-5 w-5 text-brand-green" /> Confidențialitate
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Site-ul poate conține nume, alocări de camere, mașini și logistică de zbor. Pentru
              versiunea publică, folosiți inițiale / porecle în loc de nume complete, sau țineți
              site-ul în spatele unei parole / hosting privat. Un câmp de parolă pe client nu este
              securitate reală — nu vă bazați pe el pentru date sensibile.
            </p>
          </div>
        </section>

        {/* Emergency */}
        <section>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-brand-green mb-5">
            <Siren className="h-6 w-6" /> Urgență & practic
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {emergency.map((l) => (
              <UsefulLinkCard key={l.id} link={l} />
            ))}
          </div>
        </section>

        {/* Packing checklist */}
        <section>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-brand-green mb-5">
            <Luggage className="h-6 w-6" /> Checklist de bagaje
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {packing.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-gray-700">
                <span className="mt-1 flex h-4 w-4 items-center justify-center rounded border border-brand-green/40 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default PracticalPage;

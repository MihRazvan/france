import { Link } from 'react-router-dom';
import {
  CalendarDays,
  Users,
  Car,
  BedDouble,
  ArrowRight,
  CalendarClock,
  PartyPopper,
  Map as MapIcon,
  ShoppingCart,
  Utensils,
  Ticket,
  Plane,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/common/SectionTitle';
import TripSnapshotCard from '@/components/common/TripSnapshotCard';
import ImportantReminderCard from '@/components/common/ImportantReminderCard';
import QuickLinkCard from '@/components/common/QuickLinkCard';
import StayCard from '@/components/stays/StayCard';
import { tripMeta, reminders, mainStays } from '@/data';
import { tripStatus } from '@/lib/today';

const Hero = () => (
  <section className="relative bg-gradient-to-br from-brand-greenDark via-brand-green to-brand-greenLight text-white overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <svg className="absolute -right-10 -top-10 h-72 w-72" viewBox="0 0 200 200">
        <path fill="#FFFFFF" d="M47.6,-57.3C57.9,-48.3,60.2,-29.8,62.1,-12.2C64,5.5,65.6,22.2,58.8,34.8C52,47.4,36.8,55.8,20.4,62.4C4.1,69,-13.4,73.8,-29,69.9C-44.5,66.1,-58.2,53.6,-65.3,38.4C-72.5,23.1,-73.2,5.1,-69.7,-11.3C-66.3,-27.8,-58.8,-42.6,-46.5,-51.4C-34.2,-60.2,-17.1,-62.9,0.6,-63.7C18.3,-64.4,36.7,-63.3,47.6,-57.3Z" transform="translate(100 100)" />
      </svg>
    </div>
    <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 animate-fadeIn">
      <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-sm font-medium text-brand-gold mb-4">
        Hub privat al grupului
      </span>
      <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
        {tripMeta.title}
      </h1>
      <p className="mt-4 text-lg text-white/85 max-w-2xl">{tripMeta.subtitle}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/itinerary">
          <Button className="bg-white text-brand-green hover:bg-brand-gold hover:text-white">
            Vezi itinerariul
          </Button>
        </Link>
        <Link to="/stays">
          <Button className="bg-transparent border border-white/60 text-white hover:bg-white/10">
            Cazări & camere
          </Button>
        </Link>
        <Link to="/links">
          <Button className="bg-transparent border border-white/60 text-white hover:bg-white/10">
            Link-uri utile
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

const TodayCard = () => {
  const s = tripStatus();
  let label: string;
  let body: React.ReactNode;
  let to = '/itinerary';

  if (s.status === 'before') {
    label = s.daysUntil === 0 ? 'Plecăm azi!' : `Mai sunt ${s.daysUntil} zile`;
    body = (
      <>
        Primul pas: <span className="font-semibold">{s.day.title}</span> — {s.day.region}.
      </>
    );
    to = `/itinerary/${s.day.id}`;
  } else if (s.status === 'during') {
    label = `Azi · Ziua ${s.day.dayNumber}`;
    body = (
      <>
        <span className="font-semibold">{s.day.title}</span> — {s.day.theme}.
      </>
    );
    to = `/itinerary/${s.day.id}`;
  } else {
    label = 'Drum bun spre casă!';
    body = 'Roadtrip-ul s-a încheiat. Mulțumim că ați fost parte din el.';
  }

  return (
    <Link
      to={to}
      className="block rounded-2xl bg-white shadow-md border border-brand-gold/30 p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold/15 text-brand-brown">
          {s.status === 'after' ? <PartyPopper className="h-5 w-5" /> : <CalendarClock className="h-5 w-5" />}
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-green/60">
            Acum
          </p>
          <p className="text-lg font-bold text-brand-green">{label}</p>
        </div>
      </div>
      <p className="mt-3 text-gray-600">{body}</p>
    </Link>
  );
};

const HomePage = () => {
  const quickLinks = [
    { icon: MapIcon, title: 'Hărți & rute', description: 'Ruta completă și locațiile', to: '/links' },
    { icon: ShoppingCart, title: 'Supermarketuri', description: 'Guérande, Chinon, Beauvais', to: '/links' },
    { icon: Utensils, title: 'Restaurante', description: 'Le Croisic, Tours & prânzuri', to: '/links' },
    { icon: Ticket, title: 'Activități & rezervări', description: 'Surf, karting, balon, canoe', to: '/links' },
    { icon: Plane, title: 'Aeroport & mașini', description: 'BVA, CDG, închirieri', to: '/links' },
    { icon: BedDouble, title: 'Cazări & camere', description: '3 cazări + ultima noapte', to: '/stays' },
  ];

  return (
    <>
      <Hero />

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <TripSnapshotCard icon={CalendarDays} value={tripMeta.days} label="zile" />
          <TripSnapshotCard icon={Users} value={tripMeta.adults} label="adulți" />
          <TripSnapshotCard icon={Car} value={tripMeta.cars} label="mașini" />
          <TripSnapshotCard icon={BedDouble} value={`${tripMeta.mainStays}+1`} label="cazări" />
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          Regiuni: {tripMeta.regions.join(' · ')}
        </p>
      </div>

      {/* Today / next */}
      <section className="container mx-auto px-4 pt-12">
        <TodayCard />
      </section>

      {/* Stays */}
      <section className="container mx-auto px-4 pt-14">
        <SectionTitle
          eyebrow="Unde dormim"
          title="Cazările noastre"
          subtitle="Trei cazări principale plus o ultimă noapte flexibilă, în funcție de aeroport."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mainStays.map((stay) => (
            <StayCard key={stay.id} stay={stay} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/stays"
            className="inline-flex items-center gap-1.5 text-brand-green font-medium hover:text-brand-brown transition-colors"
          >
            Toate cazările & camerele <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Reminders */}
      <section className="bg-brand-beige/50 mt-16 py-14">
        <div className="container mx-auto px-4">
          <SectionTitle
            eyebrow="Atenție"
            title="De reținut"
            subtitle="Câteva lucruri care fac diferența între un roadtrip lin și unul cu surprize."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reminders.map((r) => (
              <ImportantReminderCard key={r.id} reminder={r} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="container mx-auto px-4 py-14">
        <SectionTitle eyebrow="Acces rapid" title="Link-uri rapide" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((q) => (
            <QuickLinkCard key={q.title} {...q} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;

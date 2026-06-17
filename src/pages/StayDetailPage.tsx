import { Link, useParams } from 'react-router-dom';
import {
  MapPin,
  Navigation,
  LogIn,
  LogOut,
  CalendarDays,
  ParkingCircle,
  ShieldAlert,
  Info,
  DoorOpen,
  Compass,
  ExternalLink,
} from 'lucide-react';

import PageHero from '@/components/layout/PageHero';
import RoomCard from '@/components/stays/RoomCard';
import UsefulLinkCard from '@/components/links/UsefulLinkCard';
import { getStay, roomsByStay, linksByStay, roomOccupancy } from '@/data';

const Detail = ({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value?: string;
}) => {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green/10 text-brand-green flex-shrink-0">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">{label}</p>
        <p className="text-sm text-gray-700">{value}</p>
      </div>
    </div>
  );
};

const StayDetailPage = () => {
  const { stayId } = useParams();
  const stay = stayId ? getStay(stayId) : undefined;

  if (!stay) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-brand-green">Cazarea nu a fost găsită</h1>
        <Link to="/stays" className="mt-4 inline-block text-brand-green hover:text-brand-brown">
          ← Înapoi la cazări
        </Link>
      </div>
    );
  }

  const rooms = roomsByStay(stay.id);
  const peoplePlaced = rooms.reduce((s, r) => s + roomOccupancy(r).people, 0);
  const nearby = [...(stay.nearby ?? []), ...linksByStay(stay.id)];

  return (
    <>
      <PageHero
        eyebrow={stay.location}
        title={stay.name}
        subtitle={stay.dates}
        breadcrumbs={[
          { label: 'Acasă', to: '/' },
          { label: 'Cazări', to: '/stays' },
          { label: stay.shortName ?? stay.name },
        ]}
      >
        {stay.mapUrl && (
          <a
            href={stay.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white text-brand-green hover:bg-brand-gold hover:text-white px-4 py-2 text-sm font-medium transition-colors"
          >
            <Navigation className="h-4 w-4" /> Deschide în hartă
          </a>
        )}
      </PageHero>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Key details */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-white rounded-lg border border-gray-100 shadow-sm p-6">
          <Detail icon={MapPin} label="Adresă" value={stay.address} />
          <Detail icon={Compass} label="Coordonate" value={stay.coordinates} />
          <Detail icon={CalendarDays} label="Date" value={stay.dates} />
          <Detail icon={LogIn} label="Check-in" value={stay.checkIn} />
          <Detail icon={LogOut} label="Check-out" value={stay.checkOut} />
          <Detail icon={ParkingCircle} label="Parcare" value={stay.parking} />
        </section>

        {/* Notes + house rules */}
        <div className="grid lg:grid-cols-2 gap-6">
          {stay.notes && stay.notes.length > 0 && (
            <div className="rounded-lg border border-gray-100 bg-white shadow-sm p-5">
              <h3 className="flex items-center gap-2 font-semibold text-brand-greenDark mb-3">
                <Info className="h-5 w-5 text-brand-green" /> Note
              </h3>
              <ul className="space-y-2">
                {stay.notes.map((n, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-green flex-shrink-0" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {stay.houseRules && stay.houseRules.length > 0 && (
            <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-5">
              <h3 className="flex items-center gap-2 font-semibold text-brand-greenDark mb-3">
                <ShieldAlert className="h-5 w-5 text-amber-600" /> Reguli ale casei
              </h3>
              <ul className="space-y-2">
                {stay.houseRules.map((n, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Rooms */}
        <section>
          <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-brand-green">
              <DoorOpen className="h-6 w-6" /> Camere
            </h2>
            {rooms.length > 0 && (
              <p className="text-sm text-gray-500">
                {rooms.length} camere · {peoplePlaced} persoane
              </p>
            )}
          </div>

          {rooms.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rooms.map((r) => (
                <RoomCard key={r.id} room={r} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-500">
              {stay.flexible
                ? 'Ultima noapte e flexibilă — fiecare subgrup își rezervă singur cazarea.'
                : 'TODO: adaugă camerele pentru această cazare în src/data/rooms.ts.'}
            </div>
          )}
        </section>

        {/* Nearby links */}
        {nearby.length > 0 && (
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-brand-green mb-5">
              <ExternalLink className="h-6 w-6" /> În apropiere & link-uri
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nearby.map((l) => (
                <UsefulLinkCard key={l.id} link={l} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default StayDetailPage;

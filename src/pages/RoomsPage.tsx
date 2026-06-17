import { useMemo, useState } from 'react';
import { Search, DoorOpen } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import RoomCard from '@/components/stays/RoomCard';
import { mainStays, roomsByStay, personName } from '@/data';
import { cn } from '@/lib/utils';

const RoomsPage = () => {
  const [stayFilter, setStayFilter] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();

  const sections = useMemo(() => {
    const matchesQuery = (people: string[]) =>
      !q || people.some((p) => personName(p).toLowerCase().includes(q));
    return mainStays
      .filter((s) => !stayFilter || s.id === stayFilter)
      .map((s) => ({
        stay: s,
        rooms: roomsByStay(s.id).filter((r) => matchesQuery(r.assignedPeople)),
      }))
      .filter((sec) => sec.rooms.length > 0 || !q);
  }, [stayFilter, q]);

  return (
    <>
      <PageHero
        eyebrow="Cine, unde"
        title="Camere"
        subtitle="Distribuția camerelor pe cazări. Alocările sunt placeholder până le completați în date."
        breadcrumbs={[{ label: 'Acasă', to: '/' }, { label: 'Camere' }]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setStayFilter(null)}
              className={cn(
                'rounded-full border px-3 py-1 text-sm font-medium transition-colors',
                stayFilter === null
                  ? 'bg-brand-green text-white border-brand-green'
                  : 'bg-white text-brand-green border-brand-green/20 hover:bg-brand-green/10',
              )}
            >
              Toate cazările
            </button>
            {mainStays.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStayFilter(s.id)}
                className={cn(
                  'rounded-full border px-3 py-1 text-sm font-medium transition-colors',
                  stayFilter === s.id
                    ? 'bg-brand-green text-white border-brand-green'
                    : 'bg-white text-brand-green border-brand-green/20 hover:bg-brand-green/10',
                )}
              >
                {s.shortName ?? s.name}
              </button>
            ))}
          </div>

          <label className="relative md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Caută o persoană…"
              className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            />
          </label>
        </div>

        {/* Sections per stay */}
        <div className="space-y-12">
          {sections.map(({ stay, rooms }) => (
            <section key={stay.id}>
              <h2 className="flex items-center gap-2 text-xl font-bold text-brand-green mb-1">
                <DoorOpen className="h-5 w-5" /> {stay.name}
              </h2>
              <p className="text-sm text-gray-500 mb-5">
                {stay.location} · {stay.dates}
              </p>
              {rooms.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {rooms.map((r) => (
                    <RoomCard key={r.id} room={r} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400 italic">Nicio cameră care să se potrivească.</p>
              )}
            </section>
          ))}
        </div>

        {q && sections.length === 0 && (
          <p className="text-center text-gray-500">Nicio cameră pentru „{query}”.</p>
        )}
      </div>
    </>
  );
};

export default RoomsPage;

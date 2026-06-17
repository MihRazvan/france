import { Link, useParams } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  BedDouble,
  CalendarCheck,
  Link2,
  Clock,
  Compass,
  Utensils,
  ArrowRight,
} from 'lucide-react';

import PageHero from '@/components/layout/PageHero';
import DayTimeline from '@/components/itinerary/DayTimeline';
import ActivityOptionCard from '@/components/itinerary/ActivityOptionCard';
import DayNotes from '@/components/itinerary/DayNotes';
import ReservationRow from '@/components/common/ReservationRow';
import UsefulLinkCard from '@/components/links/UsefulLinkCard';
import { days, getDay, getStay, reservationsForDay, linksByDay } from '@/data';

const SideTitle = ({ icon: Icon, children }: { icon: typeof Clock; children: React.ReactNode }) => (
  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-green/70 mb-3">
    <Icon className="h-4 w-4" />
    {children}
  </h3>
);

const DayDetailPage = () => {
  const { dayId } = useParams();
  const day = dayId ? getDay(dayId) : undefined;

  if (!day) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-brand-green">Ziua nu a fost găsită</h1>
        <Link to="/itinerary" className="mt-4 inline-block text-brand-green hover:text-brand-brown">
          ← Înapoi la itinerariu
        </Link>
      </div>
    );
  }

  const index = days.findIndex((d) => d.id === day.id);
  const prev = index > 0 ? days[index - 1] : undefined;
  const next = index < days.length - 1 ? days[index + 1] : undefined;

  const stay = getStay(day.stayId);
  const dayReservations = reservationsForDay(day);
  const dayLinks = linksByDay(day.id);

  return (
    <>
      <PageHero
        eyebrow={`Ziua ${day.dayNumber} · ${day.weekday}, ${day.date}`}
        title={day.title}
        subtitle={`${day.region} · ${day.theme}`}
        breadcrumbs={[
          { label: 'Acasă', to: '/' },
          { label: 'Itinerariu', to: '/itinerary' },
          { label: `Ziua ${day.dayNumber}` },
        ]}
      >
        {day.anchors && day.anchors.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {day.anchors.map((a) => (
              <span key={a} className="rounded-full bg-white/15 px-3 py-1 text-sm text-white">
                {a}
              </span>
            ))}
          </div>
        )}
      </PageHero>

      <div className="container mx-auto px-4 py-12">
        {day.notes && day.notes.length > 0 && (
          <div className="mb-10">
            <DayNotes notes={day.notes} />
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <SideTitle icon={Clock}>Program</SideTitle>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                <DayTimeline schedule={day.schedule} />
              </div>
            </section>

            {day.options && day.options.length > 0 && (
              <section>
                <SideTitle icon={Compass}>Activități opționale</SideTitle>
                <div className="grid sm:grid-cols-2 gap-5">
                  {day.options.map((o) => (
                    <ActivityOptionCard key={o.id} option={o} />
                  ))}
                </div>
              </section>
            )}

            {day.food && day.food.length > 0 && (
              <section>
                <SideTitle icon={Utensils}>Mâncare & cină</SideTitle>
                <div className="grid sm:grid-cols-2 gap-5">
                  {day.food.map((o) => (
                    <ActivityOptionCard key={o.id} option={o} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {stay && (
              <section>
                <SideTitle icon={BedDouble}>Unde dormim</SideTitle>
                <Link
                  to={stay.flexible ? '/stays' : `/stays/${stay.id}`}
                  className="block bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md hover:border-brand-green/30 transition-all"
                >
                  <p className="font-semibold text-brand-green">{stay.name}</p>
                  <p className="text-sm text-gray-500">{stay.location}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm text-brand-green">
                    Detalii <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </section>
            )}

            {dayReservations.length > 0 && (
              <section>
                <SideTitle icon={CalendarCheck}>Rezervări</SideTitle>
                <div className="space-y-3">
                  {dayReservations.map((r) => (
                    <ReservationRow key={r.id} reservation={r} />
                  ))}
                </div>
              </section>
            )}

            {dayLinks.length > 0 && (
              <section>
                <SideTitle icon={Link2}>Link-uri pentru ziua asta</SideTitle>
                <div className="space-y-3">
                  {dayLinks.map((l) => (
                    <UsefulLinkCard key={l.id} link={l} />
                  ))}
                </div>
              </section>
            )}
          </aside>
        </div>

        {/* Prev / next */}
        <div className="mt-14 flex items-stretch justify-between gap-4 border-t border-gray-100 pt-6">
          {prev ? (
            <Link
              to={`/itinerary/${prev.id}`}
              className="group flex items-center gap-2 text-left text-brand-green hover:text-brand-brown transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>
                <span className="block text-xs text-gray-400">Ziua {prev.dayNumber}</span>
                <span className="font-medium">{prev.title}</span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/itinerary/${next.id}`}
              className="group flex items-center gap-2 text-right text-brand-green hover:text-brand-brown transition-colors ml-auto"
            >
              <span>
                <span className="block text-xs text-gray-400">Ziua {next.dayNumber}</span>
                <span className="font-medium">{next.title}</span>
              </span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </>
  );
};

export default DayDetailPage;

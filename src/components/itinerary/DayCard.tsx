import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CalendarDays } from 'lucide-react';
import type { DayPlan } from '@/types/trip';

// Day card for the itinerary overview grid.
const DayCard = ({ day }: { day: DayPlan }) => (
  <Link
    to={`/itinerary/${day.id}`}
    className="group bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
  >
    {/* header band */}
    <div className="bg-gradient-to-br from-brand-green to-brand-greenDark text-white p-5">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center justify-center rounded-full bg-white/15 text-sm font-semibold px-3 py-1">
          Ziua {day.dayNumber}
        </span>
        <span className="flex items-center gap-1.5 text-sm text-white/80">
          <CalendarDays className="h-4 w-4" />
          {day.weekday}, {day.date.replace(' 2026', '')}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-snug">{day.title}</h3>
      <p className="mt-1 flex items-center gap-1.5 text-sm text-brand-gold">
        <MapPin className="h-4 w-4" />
        {day.region}
      </p>
    </div>

    {/* body */}
    <div className="p-5 flex flex-col flex-1">
      <span className="text-xs font-semibold uppercase tracking-wide text-brand-green/60">
        {day.theme}
      </span>
      {day.summary && (
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{day.summary}</p>
      )}
      {day.anchors && day.anchors.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {day.anchors.map((a) => (
            <span
              key={a}
              className="rounded-full bg-brand-beige px-2.5 py-0.5 text-xs text-brand-greenDark"
            >
              {a}
            </span>
          ))}
        </div>
      )}
      <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-green group-hover:text-brand-brown transition-colors">
        Vezi ziua
        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </div>
  </Link>
);

export default DayCard;

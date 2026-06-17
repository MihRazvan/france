import { Link } from 'react-router-dom';
import { MapPin, CalendarDays, Moon, ArrowRight } from 'lucide-react';
import type { Stay } from '@/types/trip';
import TripImage from '@/components/common/TripImage';

// Accommodation overview card (template gallery/package card treatment).
const StayCard = ({ stay }: { stay: Stay }) => (
  <Link
    to={`/stays/${stay.id}`}
    className="group bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
  >
    <div className="relative">
      <TripImage
        src={stay.heroImage}
        alt={stay.name}
        placeholderLabel={stay.location}
        className="h-44 w-full"
      />
      {stay.flexible && (
        <span className="absolute top-3 left-3 rounded-full bg-white/90 text-brand-greenDark text-xs font-semibold px-2.5 py-1">
          Flexibil
        </span>
      )}
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-lg font-semibold text-brand-green group-hover:text-brand-brown transition-colors">
        {stay.name}
      </h3>
      <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
        <MapPin className="h-4 w-4" />
        {stay.location}
      </p>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
        <span className="flex items-center gap-1.5">
          <CalendarDays className="h-4 w-4 text-brand-green/70" />
          {stay.dates}
        </span>
        {stay.nights != null && (
          <span className="flex items-center gap-1.5">
            <Moon className="h-4 w-4 text-brand-green/70" />
            {stay.nights} {stay.nights === 1 ? 'noapte' : 'nopți'}
          </span>
        )}
      </div>
      <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-green group-hover:text-brand-brown transition-colors">
        Detalii & camere
        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </div>
  </Link>
);

export default StayCard;

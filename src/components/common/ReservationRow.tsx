import { ExternalLink, User, CalendarClock } from 'lucide-react';
import type { Reservation } from '@/types/trip';
import ReservationStatusBadge from './ReservationStatusBadge';

// One reservation line: title + status, with owner / deadline / notes / link.
const ReservationRow = ({ reservation }: { reservation: Reservation }) => (
  <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4">
    <div className="flex items-start justify-between gap-3">
      <h4 className="font-semibold text-gray-800 leading-snug">{reservation.title}</h4>
      <ReservationStatusBadge status={reservation.status} />
    </div>

    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
      <span className="inline-flex items-center gap-1.5">
        <User className="h-3.5 w-3.5" />
        {reservation.owner ?? 'TODO'}
      </span>
      {reservation.deadline && (
        <span className="inline-flex items-center gap-1.5">
          <CalendarClock className="h-3.5 w-3.5" />
          {reservation.deadline}
        </span>
      )}
    </div>

    {reservation.notes && (
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{reservation.notes}</p>
    )}

    {reservation.link && (
      <a
        href={reservation.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-green hover:text-brand-brown transition-colors"
      >
        Deschide <ExternalLink className="h-3.5 w-3.5" />
      </a>
    )}
  </div>
);

export default ReservationRow;

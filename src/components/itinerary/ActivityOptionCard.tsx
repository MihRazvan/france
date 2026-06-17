import {
  MapPin,
  Clock,
  Wallet,
  Users,
  Car,
  Star,
  CalendarClock,
  ExternalLink,
  ListChecks,
} from 'lucide-react';
import type { ActivityOption } from '@/types/trip';
import Tag from '@/components/common/Tag';
import { cn } from '@/lib/utils';

// Card for an optional activity / food option (template "package card" treatment).
const Meta = ({
  icon: Icon,
  children,
}: {
  icon: typeof MapPin;
  children: React.ReactNode;
}) => (
  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
    <Icon className="h-4 w-4 text-brand-green/70 flex-shrink-0" />
    <span>{children}</span>
  </span>
);

const ActivityOptionCard = ({ option }: { option: ActivityOption }) => (
  <div
    className={cn(
      'bg-white rounded-lg shadow-md border p-5 flex flex-col h-full',
      option.recommended ? 'border-brand-gold/50' : 'border-gray-100',
    )}
  >
    {/* eyebrow + badges */}
    <div className="flex items-start justify-between gap-2 mb-1">
      {option.label && (
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-green/60">
          {option.label}
        </span>
      )}
      <div className="flex flex-wrap justify-end gap-1.5">
        {option.recommended && (
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-gold/15 text-brand-brown text-xs font-semibold px-2 py-0.5">
            <Star className="h-3 w-3" /> Recomandat
          </span>
        )}
        {option.bookingRequired && (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold px-2 py-0.5">
            <CalendarClock className="h-3 w-3" /> Rezervare
          </span>
        )}
      </div>
    </div>

    <h3 className="text-lg font-semibold text-brand-green">{option.title}</h3>

    {/* meta row */}
    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
      {option.location && <Meta icon={MapPin}>{option.location}</Meta>}
      {option.driveTime && <Meta icon={Car}>{option.driveTime}</Meta>}
      {option.duration && <Meta icon={Clock}>{option.duration}</Meta>}
      {option.budget && <Meta icon={Wallet}>{option.budget}</Meta>}
    </div>

    <p className="mt-3 text-gray-600 text-sm leading-relaxed">{option.description}</p>

    {option.audience && (
      <p className="mt-3 flex items-start gap-1.5 text-sm text-gray-500">
        <Users className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-green/70" />
        <span>
          <span className="font-medium text-gray-600">Pentru cine: </span>
          {option.audience}
        </span>
      </p>
    )}

    {option.plan && option.plan.length > 0 && (
      <div className="mt-3 rounded-lg bg-brand-beige/60 p-3">
        <p className="flex items-center gap-1.5 text-xs font-semibold text-brand-greenDark uppercase tracking-wide mb-1.5">
          <ListChecks className="h-3.5 w-3.5" /> Plan posibil
        </p>
        <ul className="space-y-1">
          {option.plan.map((step, i) => (
            <li key={i} className="text-sm text-gray-700">
              {step}
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* footer: tags + links */}
    <div className="mt-auto pt-4 flex flex-wrap items-center gap-2">
      {option.tags?.map((t) => <Tag key={t} tag={t} />)}
      {option.links?.map((l) =>
        l.url ? (
          <a
            key={l.id}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-green hover:text-brand-brown transition-colors"
          >
            {l.title}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : null,
      )}
    </div>
  </div>
);

export default ActivityOptionCard;

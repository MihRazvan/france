import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Reminder, ReminderTone } from '@/types/trip';
import { iconByName } from '@/lib/icons';
import { cn } from '@/lib/utils';

// Tone → accent colors for the reminder cards.
const TONE: Record<ReminderTone, { ring: string; icon: string }> = {
  info: { ring: 'border-brand-green/20', icon: 'bg-brand-green/10 text-brand-green' },
  warning: { ring: 'border-amber-200', icon: 'bg-amber-100 text-amber-700' },
  fun: { ring: 'border-brand-gold/30', icon: 'bg-brand-gold/15 text-brand-brown' },
};

const ImportantReminderCard = ({ reminder }: { reminder: Reminder }) => {
  const tone = TONE[reminder.tone ?? 'info'];
  const Icon = iconByName(reminder.icon);
  return (
    <div className={cn('bg-white rounded-lg shadow-sm border p-5 flex flex-col h-full', tone.ring)}>
      <div className="flex items-start gap-3">
        <span className={cn('flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0', tone.icon)}>
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-semibold text-gray-800 leading-snug">{reminder.title}</h3>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{reminder.description}</p>
      {reminder.relatedDayId && (
        <Link
          to={`/itinerary/${reminder.relatedDayId}`}
          className="mt-auto pt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-green hover:text-brand-brown transition-colors"
        >
          Vezi ziua
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
};

export default ImportantReminderCard;

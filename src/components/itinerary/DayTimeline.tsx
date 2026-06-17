import {
  ClipboardList,
  Navigation2,
  Utensils,
  Compass,
  Coffee,
  CalendarCheck,
  type LucideIcon,
} from 'lucide-react';
import type { ScheduleItem, ScheduleType } from '@/types/trip';
import { cn } from '@/lib/utils';

// Visual treatment per schedule item type.
const TYPE_STYLE: Record<ScheduleType, { icon: LucideIcon; dot: string }> = {
  logistics: { icon: ClipboardList, dot: 'bg-gray-400' },
  drive: { icon: Navigation2, dot: 'bg-brand-greenLight' },
  meal: { icon: Utensils, dot: 'bg-brand-gold' },
  activity: { icon: Compass, dot: 'bg-brand-green' },
  free: { icon: Coffee, dot: 'bg-brand-sand' },
  reservation: { icon: CalendarCheck, dot: 'bg-brand-brown' },
};

const DayTimeline = ({ schedule }: { schedule: ScheduleItem[] }) => (
  <ol className="relative">
    {schedule.map((item, i) => {
      const style = TYPE_STYLE[item.type ?? 'logistics'];
      const Icon = style.icon;
      const last = i === schedule.length - 1;
      return (
        <li key={i} className="flex gap-4">
          {/* time + connector */}
          <div className="flex flex-col items-center">
            <span
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full text-white flex-shrink-0',
                style.dot,
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
            {!last && <span className="w-px flex-1 bg-gray-200 my-1" />}
          </div>
          {/* content */}
          <div className={cn('pb-6', last && 'pb-0')}>
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-green/70">
              {item.time}
            </span>
            <h4 className="font-semibold text-gray-800 leading-snug">{item.title}</h4>
            {item.description && (
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        </li>
      );
    })}
  </ol>
);

export default DayTimeline;

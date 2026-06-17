import { days, tripMeta } from '@/data';
import type { DayPlan } from '@/types/trip';

export type TripStatus =
  | { status: 'before'; daysUntil: number; day: DayPlan }
  | { status: 'during'; day: DayPlan; dayIndex: number }
  | { status: 'after' };

const atMidnight = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const MS_PER_DAY = 86_400_000;

// Date-aware "where are we in the trip" used by the homepage card.
export function tripStatus(now: Date = new Date()): TripStatus {
  const start = new Date(`${tripMeta.startDate}T00:00:00`);
  const end = new Date(`${tripMeta.endDate}T00:00:00`);
  const today = atMidnight(now);

  if (today < atMidnight(start)) {
    const daysUntil = Math.round((atMidnight(start).getTime() - today.getTime()) / MS_PER_DAY);
    return { status: 'before', daysUntil, day: days[0] };
  }
  if (today > atMidnight(end)) {
    return { status: 'after' };
  }
  const dayIndex = Math.round((today.getTime() - atMidnight(start).getTime()) / MS_PER_DAY);
  return { status: 'during', day: days[dayIndex] ?? days[days.length - 1], dayIndex };
}

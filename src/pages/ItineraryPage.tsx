import { useMemo, useState } from 'react';
import PageHero from '@/components/layout/PageHero';
import DayCard from '@/components/itinerary/DayCard';
import Tag, { tagLabel } from '@/components/common/Tag';
import { days, tripMeta } from '@/data';
import type { ActivityTag } from '@/types/trip';
import { cn } from '@/lib/utils';

// All tags that appear in any day's options/food, for the filter row.
const allTags = (): ActivityTag[] => {
  const set = new Set<ActivityTag>();
  days.forEach((d) =>
    [...(d.options ?? []), ...(d.food ?? [])].forEach((o) =>
      o.tags?.forEach((t) => set.add(t)),
    ),
  );
  return Array.from(set);
};

const dayHasTag = (dayIndex: number, tag: ActivityTag) =>
  [...(days[dayIndex].options ?? []), ...(days[dayIndex].food ?? [])].some((o) =>
    o.tags?.includes(tag),
  );

const ItineraryPage = () => {
  const [active, setActive] = useState<ActivityTag | null>(null);
  const tags = useMemo(allTags, []);

  const visible = days.filter((_, i) => !active || dayHasTag(i, active));

  return (
    <>
      <PageHero
        eyebrow="8 zile"
        title="Itinerariu complet"
        subtitle={`${tripMeta.dateRange} · ${tripMeta.routeSummary}`}
        breadcrumbs={[{ label: 'Acasă', to: '/' }, { label: 'Itinerariu' }]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Filter by activity tag */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActive(null)}
            className={cn(
              'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
              active === null
                ? 'bg-brand-green text-white border-brand-green'
                : 'bg-white text-brand-green border-brand-green/20 hover:bg-brand-green/10',
            )}
          >
            Toate zilele
          </button>
          {tags.map((t) => (
            <Tag
              key={t}
              tag={t}
              active={active === t}
              onClick={() => setActive(active === t ? null : t)}
            />
          ))}
        </div>

        {active && (
          <p className="mb-4 text-sm text-gray-500">
            Zile cu activități „{tagLabel(active)}”: {visible.length}
          </p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((day) => (
            <DayCard key={day.id} day={day} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItineraryPage;

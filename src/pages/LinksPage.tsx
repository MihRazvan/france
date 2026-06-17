import { useState } from 'react';
import {
  Map as MapIcon,
  Plane,
  ShoppingCart,
  Utensils,
  Ticket,
  BedDouble,
  Siren,
  Info,
  type LucideIcon,
} from 'lucide-react';

import PageHero from '@/components/layout/PageHero';
import UsefulLinkCard from '@/components/links/UsefulLinkCard';
import { linkCategories, linksByCategory } from '@/data';
import type { LinkCategory } from '@/types/trip';
import { cn } from '@/lib/utils';

const CATEGORY_ICON: Record<LinkCategory, LucideIcon> = {
  maps: MapIcon,
  airport: Plane,
  supermarket: ShoppingCart,
  restaurant: Utensils,
  activity: Ticket,
  stay: BedDouble,
  emergency: Siren,
  practical: Info,
};

const LinksPage = () => {
  const [active, setActive] = useState<LinkCategory | null>(null);
  const shown = active ? linkCategories.filter((c) => c.key === active) : linkCategories;

  return (
    <>
      <PageHero
        eyebrow="Tot ce-ți trebuie"
        title="Link-uri utile"
        subtitle="Hărți, supermarketuri, restaurante, activități și contacte. Link-urile lipsă sunt marcate cu TODO."
        breadcrumbs={[{ label: 'Acasă', to: '/' }, { label: 'Link-uri' }]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Category filter */}
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActive(null)}
            className={cn(
              'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
              active === null
                ? 'bg-brand-green text-white border-brand-green'
                : 'bg-white text-brand-green border-brand-green/20 hover:bg-brand-green/10',
            )}
          >
            Toate
          </button>
          {linkCategories.map((c) => {
            const Icon = CATEGORY_ICON[c.key];
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setActive(active === c.key ? null : c.key)}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
                  active === c.key
                    ? 'bg-brand-green text-white border-brand-green'
                    : 'bg-white text-brand-green border-brand-green/20 hover:bg-brand-green/10',
                )}
              >
                <Icon className="h-4 w-4" />
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-12">
          {shown.map((c) => {
            const items = linksByCategory(c.key);
            if (items.length === 0) return null;
            const Icon = CATEGORY_ICON[c.key];
            return (
              <section key={c.key}>
                <h2 className="flex items-center gap-2 text-xl font-bold text-brand-green mb-5">
                  <Icon className="h-5 w-5" /> {c.label}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((l) => (
                    <UsefulLinkCard key={l.id} link={l} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LinksPage;

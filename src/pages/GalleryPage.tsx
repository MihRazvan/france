import { Link } from 'react-router-dom';
import { ImagePlus } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import TripImage from '@/components/common/TripImage';
import { stays, days } from '@/data';

// Placeholder gallery. Tiles use the branded placeholder until real photos are
// added under public/images/france/ and referenced from the data files.
const Tile = ({
  src,
  label,
  to,
}: {
  src?: string;
  label: string;
  to?: string;
}) => {
  const inner = (
    <TripImage
      src={src}
      alt={label}
      placeholderLabel={label}
      className="aspect-[4/3] w-full rounded-lg"
    />
  );
  return to ? (
    <Link to={to} className="block hover:opacity-90 transition-opacity">
      {inner}
    </Link>
  ) : (
    inner
  );
};

const GalleryPage = () => (
  <>
    <PageHero
      eyebrow="Imagini"
      title="Galerie"
      subtitle="Deocamdată placeholdere. Adăugați poze reale în public/images/france/ și legați-le din date."
      breadcrumbs={[{ label: 'Acasă', to: '/' }, { label: 'Galerie' }]}
    />

    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="rounded-lg border border-dashed border-brand-green/30 bg-brand-beige/40 p-5 flex items-start gap-3">
        <ImagePlus className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-600 leading-relaxed">
          Aici pot ajunge poze de la cazări, capturi cu rutele, imagini de la activități și pozele
          voastre din timpul roadtrip-ului. Nu adăugați imagini fără drept de folosință.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-brand-green mb-5">Cazări</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stays.map((s) => (
            <Tile
              key={s.id}
              src={s.heroImage}
              label={s.shortName ?? s.name}
              to={s.flexible ? '/stays' : `/stays/${s.id}`}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-green mb-5">Zile & rute</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {days.map((d) => (
            <Tile
              key={d.id}
              src={d.heroImage ?? d.routeImage}
              label={`Ziua ${d.dayNumber} · ${d.region}`}
              to={`/itinerary/${d.id}`}
            />
          ))}
        </div>
      </section>
    </div>
  </>
);

export default GalleryPage;

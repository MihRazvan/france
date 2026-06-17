import PageHero from '@/components/layout/PageHero';
import StayCard from '@/components/stays/StayCard';
import { stays } from '@/data';

const StaysPage = () => (
  <>
    <PageHero
      eyebrow="Unde dormim"
      title="Cazări"
      subtitle="Trei cazări principale și o ultimă noapte flexibilă. Apasă pe o cazare pentru detalii, reguli și camere."
      breadcrumbs={[{ label: 'Acasă', to: '/' }, { label: 'Cazări' }]}
    />
    <div className="container mx-auto px-4 py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stays.map((stay) => (
          <StayCard key={stay.id} stay={stay} />
        ))}
      </div>
    </div>
  </>
);

export default StaysPage;

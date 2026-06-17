import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => (
  <div className="container mx-auto px-4 py-24 text-center">
    <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
      <Compass className="h-8 w-8" />
    </span>
    <h1 className="text-4xl font-bold text-brand-green">404</h1>
    <p className="mt-2 text-gray-600">Pagina asta nu există pe traseul nostru.</p>
    <Link to="/" className="mt-6 inline-block">
      <Button className="bg-brand-olive hover:bg-brand-oliveLight text-white">
        Înapoi acasă
      </Button>
    </Link>
  </div>
);

export default NotFoundPage;

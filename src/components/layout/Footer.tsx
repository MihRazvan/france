import { Link } from 'react-router-dom';
import { MapPin, Lock, Plane } from 'lucide-react';
import { navItems } from '@/lib/nav';
import { tripMeta } from '@/data';

// Footer adapted from TourCraft: green background, decorative blobs, link grid.
// Marketing copy replaced with trip nav + a privacy reminder + attribution.
const Footer = () => (
  <footer className="bg-brand-green/95 text-white relative overflow-hidden mt-16">
    {/* Decorative blobs (from the template) */}
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <svg className="absolute bottom-0 left-0 h-64 w-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFFFFF" d="M39.9,-51.2C50.1,-39.4,56.2,-25.7,59.6,-10.9C63,3.9,63.7,19.8,57.1,31.5C50.5,43.2,36.5,50.7,21.7,56.6C6.9,62.5,-8.6,66.8,-23.3,63.6C-38,60.4,-51.8,49.8,-59.8,36C-67.8,22.2,-69.9,5.2,-66.1,-10.1C-62.3,-25.4,-52.6,-39,-40.2,-50.8C-27.8,-62.5,-13.9,-72.5,0.4,-73.1C14.8,-73.6,29.6,-64.9,39.9,-51.2Z" transform="translate(100 100)" />
      </svg>
      <svg className="absolute top-0 right-0 h-64 w-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFFFFF" d="M47.6,-57.3C57.9,-48.3,60.2,-29.8,62.1,-12.2C64,5.5,65.6,22.2,58.8,34.8C52,47.4,36.8,55.8,20.4,62.4C4.1,69,-13.4,73.8,-29,69.9C-44.5,66.1,-58.2,53.6,-65.3,38.4C-72.5,23.1,-73.2,5.1,-69.7,-11.3C-66.3,-27.8,-58.8,-42.6,-46.5,-51.4C-34.2,-60.2,-17.1,-62.9,0.6,-63.7C18.3,-64.4,36.7,-63.3,47.6,-57.3Z" transform="translate(100 100)" />
      </svg>
    </div>

    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand + about */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
              <MapPin className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold">
              France <span className="text-brand-gold">2026</span>
            </span>
          </div>
          <p className="text-gray-200 text-sm leading-relaxed">
            Hub privat al grupului pentru roadtrip-ul din Franța.
          </p>
          <p className="mt-3 flex items-center gap-2 text-gray-200 text-sm">
            <Plane className="h-4 w-4" />
            {tripMeta.dateRange} · {tripMeta.adults} adulți · {tripMeta.cars} mașini
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-base font-semibold mb-4">Navigare</h3>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-gray-200 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Privacy */}
        <div>
          <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
            <Lock className="h-4 w-4" /> Confidențialitate
          </h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            Acest site poate conține nume, alocări de camere, mașini și detalii de
            zbor. Nu îl publica deschis cu date reale — folosește inițiale /
            porecle sau ține-l în spatele unei parole / hosting privat.
          </p>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs text-gray-300">
        <p>© {new Date().getFullYear()} France Roadtrip 2026 — hub privat al grupului.</p>
        <p>
          Design bazat pe{' '}
          <a
            href="https://github.com/themixlyweb/react-tourism-website-template"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            TourCraft
          </a>{' '}
          (MIT © Themixly).
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { primaryNavItems } from '@/lib/nav';

// Sticky bottom navigation for mobile — the hub's primary destinations:
// Acasă · Itinerariu · Cazări · Camere · Link-uri. Hidden on lg+ (top nav).
const MobileNav = () => (
  <nav
    className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-200"
    style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
  >
    <div className="grid grid-cols-5">
      {primaryNavItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center justify-center gap-1 py-2 text-[11px] font-medium transition-colors',
                isActive ? 'text-brand-gold' : 'text-brand-green/70',
              )
            }
          >
            <Icon className="h-5 w-5" />
            <span className="leading-none">{item.label}</span>
          </NavLink>
        );
      })}
    </div>
  </nav>
);

export default MobileNav;

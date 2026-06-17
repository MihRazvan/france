import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems } from '@/lib/nav';

// Top navigation, styled after TourCraft's header: fixed, white/95, blurred,
// shadow, green links that hover to brown. Mobile uses a left drawer with all
// routes (the bottom MobileNav covers the primary destinations).
const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the drawer whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          <Link
            to="/"
            className="flex items-center gap-2 text-brand-green font-bold text-lg md:text-xl"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green text-white">
              <MapPin className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              France <span className="text-brand-gold">2026</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'text-brand-gold'
                      : 'text-brand-green hover:text-brand-brown',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-brand-green"
            onClick={() => setOpen(true)}
            aria-label="Deschide meniul"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={cn(
          'fixed top-0 left-0 h-screen w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 lg:hidden',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold text-brand-green">France Roadtrip 2026</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Închide meniul"
            className="text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-brand-green/10 text-brand-green'
                      : 'text-gray-700 hover:bg-gray-50',
                  )
                }
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;

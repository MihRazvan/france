import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Crumb = { label: string; to?: string };

// Compact inner-page header band (green gradient, white text). Mirrors the
// template's breadcrumb hero but tuned for the hub's section pages.
type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
  className?: string;
};

const PageHero = ({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  children,
  className,
}: PageHeroProps) => (
  <section
    className={cn(
      'bg-gradient-to-br from-brand-green to-brand-greenDark text-white',
      className,
    )}
  >
    <div className="container mx-auto px-4 py-10 md:py-14">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="flex flex-wrap items-center gap-1 text-sm text-white/70 mb-3">
          {breadcrumbs.map((c, i) => (
            <span key={`${c.label}-${i}`} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
              {c.to ? (
                <Link to={c.to} className="hover:text-white transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/90">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      {eyebrow && (
        <span className="inline-block text-brand-gold font-semibold text-sm uppercase tracking-wide mb-2">
          {eyebrow}
        </span>
      )}
      <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
      {subtitle && (
        <p className="mt-3 text-white/85 max-w-2xl leading-relaxed">{subtitle}</p>
      )}
      {children && <div className="mt-6">{children}</div>}
    </div>
  </section>
);

export default PageHero;

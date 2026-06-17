import { cn } from '@/lib/utils';
import Pill from './Pill';

// Section heading following the template: eyebrow pill + bold heading + subtitle.
type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
};

const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionTitleProps) => (
  <div
    className={cn(
      'mb-10',
      align === 'center' ? 'text-center' : 'text-left',
      className,
    )}
  >
    {eyebrow && (
      <div className={cn('mb-3', align === 'center' && 'flex justify-center')}>
        <Pill>{eyebrow}</Pill>
      </div>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-brand-green">{title}</h2>
    {subtitle && (
      <p
        className={cn(
          'mt-3 text-gray-600 leading-relaxed',
          align === 'center' && 'max-w-2xl mx-auto',
        )}
      >
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;

import { cn } from '@/lib/utils';

// TourCraft's signature "label pill": sand background + green dot + text.
type PillProps = {
  children: React.ReactNode;
  className?: string;
};

const Pill = ({ children, className }: PillProps) => (
  <span
    className={cn(
      'inline-flex items-center gap-2 bg-brand-sand rounded-full px-4 py-2 text-sm font-medium text-brand-greenDark',
      className,
    )}
  >
    <span className="w-2 h-2 bg-brand-olive rounded-full" />
    {children}
  </span>
);

export default Pill;

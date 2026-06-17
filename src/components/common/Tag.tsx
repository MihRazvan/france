import { cn } from '@/lib/utils';
import type { ActivityTag } from '@/types/trip';

// Romanian labels for the activity tag vocabulary.
const TAG_LABELS: Record<ActivityTag, string> = {
  natura: 'Natură',
  oras: 'Oraș',
  sport: 'Sport',
  sightseeing: 'Sightseeing',
  food: 'Mâncare',
  plaja: 'Plajă',
  cultura: 'Cultură',
  relax: 'Relax',
  adrenalina: 'Adrenalină',
  logistica: 'Logistică',
};

export const tagLabel = (tag: ActivityTag) => TAG_LABELS[tag] ?? tag;

// Monochrome brand chip — keeps the template's restrained palette.
type TagProps = {
  tag: ActivityTag;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

const Tag = ({ tag, active, onClick, className }: TagProps) => {
  const Comp = onClick ? 'button' : 'span';
  return (
    <Comp
      onClick={onClick}
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors',
        active
          ? 'bg-brand-green text-white border-brand-green'
          : 'bg-brand-green/10 text-brand-green border-brand-green/20',
        onClick && !active && 'hover:bg-brand-green/20',
        className,
      )}
      type={onClick ? 'button' : undefined}
    >
      {tagLabel(tag)}
    </Comp>
  );
};

export default Tag;

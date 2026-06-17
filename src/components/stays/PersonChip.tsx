import { User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { personName } from '@/data';

// A person tag. Resolves person ids to names. Unassigned placeholders
// ("Persoană NN" / "TODO") render in a muted, dashed style.
const isPlaceholder = (name: string) => /^(persoană|todo)/i.test(name.trim());

const PersonChip = ({ value }: { value: string }) => {
  const name = personName(value);
  const placeholder = isPlaceholder(name);
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
        placeholder
          ? 'border border-dashed border-gray-300 text-gray-400'
          : 'bg-brand-green/10 text-brand-green',
      )}
    >
      <User className="h-3 w-3" />
      {name}
    </span>
  );
};

export default PersonChip;

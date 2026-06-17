import { Info } from 'lucide-react';

// Notes / logistics callout for a day.
const DayNotes = ({ notes, title = 'De reținut' }: { notes: string[]; title?: string }) => {
  if (!notes || notes.length === 0) return null;
  return (
    <div className="rounded-lg border border-brand-gold/30 bg-brand-gold/5 p-5">
      <h3 className="flex items-center gap-2 font-semibold text-brand-greenDark mb-3">
        <Info className="h-5 w-5 text-brand-gold" />
        {title}
      </h3>
      <ul className="space-y-2">
        {notes.map((n, i) => (
          <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold flex-shrink-0" />
            <span>{n}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayNotes;

import { ExternalLink, MapPin } from 'lucide-react';
import type { LinkItem } from '@/types/trip';
import { cn } from '@/lib/utils';

// A single useful link. With a URL it's a clickable card; without, it shows a
// "TODO: adaugă link" placeholder so the gap is visible but not broken.
const UsefulLinkCard = ({ link }: { link: LinkItem }) => {
  const hasUrl = Boolean(link.url);
  const body = (
    <>
      <span
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-full flex-shrink-0',
          hasUrl ? 'bg-brand-green/10 text-brand-green' : 'bg-gray-100 text-gray-400',
        )}
      >
        <MapPin className="h-4 w-4" />
      </span>
      <span className="flex-1 min-w-0">
        <span className="block font-medium text-gray-800">{link.title}</span>
        {link.description && (
          <span className="block text-sm text-gray-500">{link.description}</span>
        )}
      </span>
      {hasUrl ? (
        <ExternalLink className="h-4 w-4 text-gray-400 flex-shrink-0" />
      ) : (
        <span className="text-xs text-gray-400 italic flex-shrink-0">TODO</span>
      )}
    </>
  );

  const className =
    'flex items-center gap-3 bg-white rounded-lg border border-gray-100 shadow-sm p-4';

  return hasUrl ? (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className, 'hover:shadow-md hover:border-brand-green/30 transition-all')}
    >
      {body}
    </a>
  ) : (
    <div className={cn(className, 'opacity-80')}>{body}</div>
  );
};

export default UsefulLinkCard;

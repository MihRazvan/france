import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TODO_IMAGE } from '@/types/trip';

// Renders an image, or a clean on-brand placeholder when the image is missing
// (undefined or the TODO_IMAGE sentinel). Replace placeholders by adding real
// photos under public/images/france/ and setting the path in data.
type TripImageProps = {
  src?: string;
  alt: string;
  className?: string;
  /** Optional label shown on the placeholder, e.g. a region name. */
  placeholderLabel?: string;
};

const isMissing = (src?: string) => !src || src === TODO_IMAGE;

const TripImage = ({ src, alt, className, placeholderLabel }: TripImageProps) => {
  if (isMissing(src)) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-green to-brand-greenLight text-white/90',
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <ImageIcon className="h-7 w-7 opacity-80" />
        <span className="text-xs font-medium uppercase tracking-wide opacity-80">
          {placeholderLabel ?? 'Imagine în curând'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn('object-cover', className)}
    />
  );
};

export default TripImage;

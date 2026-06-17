import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, type LucideIcon } from 'lucide-react';

// Compact link tile. Internal (to) renders a router Link; external (href)
// renders an anchor. One of `to` / `href` is expected.
type Props = {
  icon: LucideIcon;
  title: string;
  description?: string;
  to?: string;
  href?: string;
};

const QuickLinkCard = ({ icon: Icon, title, description, to, href }: Props) => {
  const inner = (
    <>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green flex-shrink-0">
        <Icon className="h-5 w-5" />
      </span>
      <span className="flex-1 min-w-0">
        <span className="block font-medium text-gray-800">{title}</span>
        {description && (
          <span className="block text-sm text-gray-500 truncate">{description}</span>
        )}
      </span>
      {href ? (
        <ExternalLink className="h-4 w-4 text-gray-400" />
      ) : (
        <ArrowRight className="h-4 w-4 text-gray-400" />
      )}
    </>
  );

  const className =
    'flex items-center gap-3 bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md hover:border-brand-green/30 transition-all';

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to ?? '#'} className={className}>
      {inner}
    </Link>
  );
};

export default QuickLinkCard;

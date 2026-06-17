import { cn } from '@/lib/utils';
import type { ReservationStatus } from '@/types/trip';

// Status → label + color. Greens for "done", amber/sand for "in progress",
// gray for TODO/backup, red for cancelled.
const STATUS_STYLES: Record<ReservationStatus, { label: string; className: string }> = {
  TODO: { label: 'De făcut', className: 'bg-gray-100 text-gray-600 border-gray-200' },
  Contacted: { label: 'Contactat', className: 'bg-amber-50 text-amber-700 border-amber-200' },
  Reserved: { label: 'Rezervat', className: 'bg-brand-gold/15 text-brand-brown border-brand-gold/30' },
  Paid: { label: 'Plătit', className: 'bg-brand-green/10 text-brand-green border-brand-green/20' },
  Confirmed: { label: 'Confirmat', className: 'bg-brand-green text-white border-brand-green' },
  Backup: { label: 'Backup', className: 'bg-gray-50 text-gray-500 border-gray-200' },
  Cancelled: { label: 'Anulat', className: 'bg-red-50 text-red-600 border-red-200' },
};

type Props = {
  status: ReservationStatus;
  className?: string;
};

const ReservationStatusBadge = ({ status, className }: Props) => {
  const s = STATUS_STYLES[status];
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap',
        s.className,
        className,
      )}
    >
      {s.label}
    </span>
  );
};

export default ReservationStatusBadge;

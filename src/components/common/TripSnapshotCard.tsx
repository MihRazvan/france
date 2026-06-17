import type { LucideIcon } from 'lucide-react';

// Small stat card used in the homepage snapshot row.
type Props = {
  icon: LucideIcon;
  value: string | number;
  label: string;
};

const TripSnapshotCard = ({ icon: Icon, value, label }: Props) => (
  <div className="bg-white rounded-lg shadow-md border border-gray-100 p-5 text-center">
    <span className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
      <Icon className="h-5 w-5" />
    </span>
    <div className="text-2xl font-bold text-brand-green">{value}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);

export default TripSnapshotCard;

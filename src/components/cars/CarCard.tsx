import {
  Car as CarIcon,
  UserCog,
  Users,
  PlaneTakeoff,
  PlaneLanding,
  ClipboardList,
} from 'lucide-react';
import type { Car } from '@/types/trip';
import PersonChip from '@/components/stays/PersonChip';

// Car logistics card: captain, passengers, pickup/return, duties, notes.
const Row = ({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof CarIcon;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-2 text-sm">
    <Icon className="h-4 w-4 mt-0.5 text-brand-green/70 flex-shrink-0" />
    <span className="text-gray-500 w-20 flex-shrink-0">{label}</span>
    <span className="text-gray-700 flex-1">{children}</span>
  </div>
);

const CarCard = ({ car }: { car: Car }) => (
  <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden flex flex-col h-full">
    <div className="bg-gradient-to-br from-brand-green to-brand-greenDark text-white p-4 flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <CarIcon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="font-semibold leading-tight">{car.label}</h3>
        {car.captain && (
          <p className="text-sm text-brand-gold">Captain: {car.captain}</p>
        )}
      </div>
    </div>

    <div className="p-5 space-y-2.5 flex-1">
      {car.drivers && car.drivers.length > 0 && (
        <Row icon={UserCog} label="Șoferi">{car.drivers.join(', ')}</Row>
      )}
      <Row icon={Users} label="Pasageri">
        {car.passengers && car.passengers.length > 0 ? (
          <span className="flex flex-wrap gap-1.5">
            {car.passengers.map((p, i) => (
              <PersonChip key={`${p}-${i}`} value={p} />
            ))}
          </span>
        ) : (
          <span className="text-gray-400 italic">TODO: adaugă pasagerii</span>
        )}
      </Row>
      {car.pickup && <Row icon={PlaneTakeoff} label="Ridicare">{car.pickup}</Row>}
      {car.return && <Row icon={PlaneLanding} label="Retur">{car.return}</Row>}

      {car.responsibilities && car.responsibilities.length > 0 && (
        <div className="pt-1">
          {car.responsibilities.map((r, i) => (
            <p
              key={i}
              className="flex items-start gap-2 rounded-md bg-brand-beige/60 px-2.5 py-1.5 text-sm text-brand-greenDark"
            >
              <ClipboardList className="h-4 w-4 mt-0.5 flex-shrink-0" />
              {r}
            </p>
          ))}
        </div>
      )}
    </div>

    {car.notes && car.notes.length > 0 && (
      <div className="border-t border-gray-100 px-5 py-3">
        <ul className="space-y-1">
          {car.notes.map((n, i) => (
            <li key={i} className="text-xs text-gray-400">
              {n}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default CarCard;

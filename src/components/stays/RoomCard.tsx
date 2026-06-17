import { Bed, Users, Info } from 'lucide-react';
import type { Room } from '@/types/trip';
import PersonChip from './PersonChip';
import { roomOccupancy } from '@/data';

// Single room. Renders a bed-by-bed breakdown when available, otherwise falls
// back to a flat people list / empty state.
const RoomCard = ({ room }: { room: Room }) => {
  const beds = room.bedAssignments ?? [];
  const occ = roomOccupancy(room);
  const freeBeds = occ.totalBeds - occ.occupiedBeds;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          {room.group && (
            <span className="block text-xs font-semibold uppercase tracking-wide text-brand-green/50">
              {room.group}
            </span>
          )}
          <h4 className="font-semibold text-gray-800">{room.name}</h4>
        </div>
        {occ.people > 0 && (
          <span className="inline-flex items-center gap-1 text-xs text-gray-500 whitespace-nowrap">
            <Users className="h-3.5 w-3.5" />
            {occ.people}
          </span>
        )}
      </div>

      {beds.length > 0 ? (
        <>
          <ul className="mt-3 space-y-1.5">
            {beds.map((b, i) => (
              <li key={i} className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                  <Bed className="h-3.5 w-3.5 text-brand-green/60" />
                  {b.bed}
                </span>
                {b.people ? (
                  <PersonChip value={b.people} />
                ) : (
                  <span className="text-xs italic text-gray-300">liber</span>
                )}
              </li>
            ))}
          </ul>
          {freeBeds > 0 && (
            <p className="mt-2 text-xs text-gray-400">
              {freeBeds} {freeBeds === 1 ? 'pat liber' : 'paturi libere'}
            </p>
          )}
        </>
      ) : (
        <div className="mt-3">
          {(room.assignedPeople?.length ?? 0) > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {room.assignedPeople!.map((p, i) => (
                <PersonChip key={`${p}-${i}`} value={p} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 italic">{room.notes ?? 'TODO: alocă persoane'}</p>
          )}
        </div>
      )}

      {room.notes && beds.length > 0 && (
        <p className="mt-2 flex items-start gap-1.5 text-xs text-gray-500">
          <Info className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-brand-gold" />
          {room.notes}
        </p>
      )}
    </div>
  );
};

export default RoomCard;

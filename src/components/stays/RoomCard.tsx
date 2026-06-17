import { BedDouble, Users } from 'lucide-react';
import type { Room } from '@/types/trip';
import PersonChip from './PersonChip';

// Single room with capacity, beds and assigned people (or an empty state).
const RoomCard = ({ room }: { room: Room }) => {
  const hasPeople = room.assignedPeople.length > 0;
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-semibold text-gray-800">{room.name}</h4>
        {room.capacity != null && (
          <span className="inline-flex items-center gap-1 text-xs text-gray-500 whitespace-nowrap">
            <Users className="h-3.5 w-3.5" />
            {room.assignedPeople.length}/{room.capacity}
          </span>
        )}
      </div>
      {room.beds && (
        <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
          <BedDouble className="h-4 w-4" />
          {room.beds}
        </p>
      )}

      <div className="mt-3">
        {hasPeople ? (
          <div className="flex flex-wrap gap-1.5">
            {room.assignedPeople.map((p, i) => (
              <PersonChip key={`${p}-${i}`} value={p} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400 italic">{room.notes ?? 'TODO: alocă persoane'}</p>
        )}
      </div>
    </div>
  );
};

export default RoomCard;

import type { Person } from '@/types/trip';

// Placeholder roster of 29 adults. Replace with real names (or initials /
// nicknames for privacy — see README_TRIP_EDITING.md). You can also set
// `carId` and `roomId` here to link a person to a car and a room.
//
// To switch to an explicit, easy-to-edit list, replace the block below with:
//   export const people: Person[] = [
//     { id: 'p01', name: 'Andrei', carId: 'car-1', roomId: 'manou-r1' },
//     ...
//   ];
export const people: Person[] = Array.from({ length: 29 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { id: `p${n}`, name: `Persoană ${n}` };
});

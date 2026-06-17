import type { Room } from '@/types/trip';

// Room breakdown per accommodation. These are PLACEHOLDERS — counts, capacities
// and bed setups are guesses until the real layout is known. Fill `assignedPeople`
// with person ids (see people.ts) or raw names. Add/remove rooms freely.
// The flexible final night has no rooms (each subgroup books its own).
export const rooms: Room[] = [
  // --- Château de Manou (21–23 iunie) ---
  { id: 'manou-r1', stayId: 'manou', name: 'Cameră 1', capacity: 4, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'manou-r2', stayId: 'manou', name: 'Cameră 2', capacity: 4, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'manou-r3', stayId: 'manou', name: 'Cameră 3', capacity: 4, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'manou-r4', stayId: 'manou', name: 'Cameră 4', capacity: 4, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'manou-r5', stayId: 'manou', name: 'Cameră 5', capacity: 3, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'manou-r6', stayId: 'manou', name: 'Cameră 6', capacity: 3, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'manou-r7', stayId: 'manou', name: 'Cameră 7', capacity: 4, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'manou-r8', stayId: 'manou', name: 'Cameră 8', capacity: 3, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },

  // --- Villa Plage Valentin, Batz-sur-Mer (23–25 iunie) ---
  { id: 'batz-r1', stayId: 'batz', name: 'Cameră 1', capacity: 4, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'batz-r2', stayId: 'batz', name: 'Cameră 2', capacity: 4, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'batz-r3', stayId: 'batz', name: 'Cameră 3', capacity: 4, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'batz-r4', stayId: 'batz', name: 'Cameră 4', capacity: 4, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'batz-r5', stayId: 'batz', name: 'Cameră 5', capacity: 3, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'batz-r6', stayId: 'batz', name: 'Cameră 6', capacity: 3, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'batz-r7', stayId: 'batz', name: 'Cameră 7', capacity: 4, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'batz-r8', stayId: 'batz', name: 'Cameră 8', capacity: 3, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },

  // --- Domaine, 1 Jable, Lémeré (25–27 iunie) ---
  { id: 'lemere-r1', stayId: 'lemere', name: 'Cameră 1', capacity: 4, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'lemere-r2', stayId: 'lemere', name: 'Cameră 2', capacity: 4, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'lemere-r3', stayId: 'lemere', name: 'Cameră 3', capacity: 4, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'lemere-r4', stayId: 'lemere', name: 'Cameră 4', capacity: 4, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'lemere-r5', stayId: 'lemere', name: 'Cameră 5', capacity: 3, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'lemere-r6', stayId: 'lemere', name: 'Cameră 6', capacity: 3, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'lemere-r7', stayId: 'lemere', name: 'Cameră 7', capacity: 4, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
  { id: 'lemere-r8', stayId: 'lemere', name: 'Cameră 8', capacity: 3, beds: 'TODO', assignedPeople: [], notes: 'TODO: alocă persoane' },
];

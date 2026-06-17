import type { Car } from '@/types/trip';

// 8 rental cars. Captains, drivers and passengers are placeholders until the
// group fills them in. Pickup is Beauvais (BVA); return is split (BVA for the
// Craiova group, CDG for the București group, individual for the rest).
const defaultNotes = [
  'TODO: confirmă firma de închiriere și nr. de înmatriculare.',
  'Atenție la taxe de autostradă (péage) și combustibil — strângeți bonurile.',
];

export const cars: Car[] = [
  {
    id: 'car-1',
    label: 'Mașina 1',
    captain: 'TODO',
    drivers: ['TODO'],
    passengers: [],
    rentalCompany: 'TODO',
    pickup: 'Beauvais (BVA), 21 iunie',
    return: 'TODO (BVA / CDG / individual)',
    responsibilities: [
      'Ziua 2: posibil tură de cumpărături la E.Leclerc Guérande.',
    ],
    notes: defaultNotes,
  },
  {
    id: 'car-2',
    label: 'Mașina 2',
    captain: 'TODO',
    drivers: ['TODO'],
    passengers: [],
    rentalCompany: 'TODO',
    pickup: 'Beauvais (BVA), 21 iunie',
    return: 'TODO (BVA / CDG / individual)',
    responsibilities: [
      'Ziua 2: posibil tură de cumpărături la E.Leclerc Guérande.',
    ],
    notes: defaultNotes,
  },
  {
    id: 'car-3',
    label: 'Mașina 3',
    captain: 'TODO',
    drivers: ['TODO'],
    passengers: [],
    rentalCompany: 'TODO',
    pickup: 'Beauvais (BVA), 21 iunie',
    return: 'TODO (BVA / CDG / individual)',
    responsibilities: ['Ziua 2: posibil Decathlon (Saint-Nazaire) — fileu + minge de volei.'],
    notes: defaultNotes,
  },
  {
    id: 'car-4',
    label: 'Mașina 4',
    captain: 'TODO',
    drivers: ['TODO'],
    passengers: [],
    rentalCompany: 'TODO',
    pickup: 'Beauvais (BVA), 21 iunie',
    return: 'TODO (BVA / CDG / individual)',
    notes: defaultNotes,
  },
  {
    id: 'car-5',
    label: 'Mașina 5',
    captain: 'TODO',
    drivers: ['TODO'],
    passengers: [],
    rentalCompany: 'TODO',
    pickup: 'Beauvais (BVA), 21 iunie',
    return: 'TODO (BVA / CDG / individual)',
    notes: defaultNotes,
  },
  {
    id: 'car-6',
    label: 'Mașina 6',
    captain: 'TODO',
    drivers: ['TODO'],
    passengers: [],
    rentalCompany: 'TODO',
    pickup: 'Beauvais (BVA), 21 iunie',
    return: 'TODO (BVA / CDG / individual)',
    notes: defaultNotes,
  },
  {
    id: 'car-7',
    label: 'Mașina 7',
    captain: 'TODO',
    drivers: ['TODO'],
    passengers: [],
    rentalCompany: 'TODO',
    pickup: 'Beauvais (BVA), 21 iunie',
    return: 'TODO (BVA / CDG / individual)',
    notes: defaultNotes,
  },
  {
    id: 'car-8',
    label: 'Mașina 8',
    captain: 'TODO',
    drivers: ['TODO'],
    passengers: [],
    rentalCompany: 'TODO',
    pickup: 'Beauvais (BVA), 21 iunie',
    return: 'TODO (BVA / CDG / individual)',
    notes: defaultNotes,
  },
];

// Shared logistics checklist shown on the Cars page.
export const carLogistics: string[] = [
  'Ridicare mașini la Beauvais (BVA) pe 21 iunie — verificați documentele și combustibilul.',
  'Ziua 0: 5–6 mașini merg direct la castel, restul nu se bazează pe supermarket mare după 19:00.',
  'Ziua 2: 5–6 mașini direct la vilă, 2–3 mașini cumpărături la Guérande, 1 persoană Decathlon.',
  'Stabiliți din timp șoferii pentru serile cu cină (Le Croisic, Tours) — nu trebuie să plece toate cele 8 mașini.',
  'Cei care merg la karting: haine de schimb / tricou extra în mașină.',
  'Ziua 7: returnați mașinile — Craiova de la BVA, București de la CDG, restul individual.',
];

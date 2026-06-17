import type { Room } from '@/types/trip';

// Room breakdown per accommodation, bed by bed.
// `people` on a bed = occupant(s); a missing `people` = pat liber (free bed).
// Occupancy this trip differs per stay (not everyone is at every cazare):
//   Manou = 29 · Plage Valentin = 21 · Lémeré = 27.
// The flexible final night has no rooms (each subgroup books its own).
export const rooms: Room[] = [
  // ======================================================================
  // Cazare #1 — Parc & Château de Manou (21–23 iunie) · 29 persoane
  // ======================================================================
  {
    id: 'manou-r1', stayId: 'manou', name: 'Cameră 1',
    bedAssignments: [
      { bed: 'Pat dublu', people: 'Matei & Alexandra' },
      { bed: 'Pat dublu', people: 'Radu' },
    ],
  },
  {
    id: 'manou-r2', stayId: 'manou', name: 'Cameră 2',
    bedAssignments: [
      { bed: 'Pat dublu', people: 'Chiri & Elena' },
      { bed: 'Pat dublu', people: 'Doru' },
    ],
  },
  {
    id: 'manou-r3', stayId: 'manou', name: 'Cameră 3',
    bedAssignments: [
      { bed: 'Pat dublu', people: 'Pistol & Andreea' },
      { bed: 'Pat single' },
    ],
  },
  {
    id: 'manou-r4', stayId: 'manou', name: 'Cameră 4',
    bedAssignments: [
      { bed: 'Pat dublu', people: 'Razvan & Stefi' },
      { bed: 'Pat dublu', people: 'Lili' },
    ],
  },
  {
    id: 'manou-r5', stayId: 'manou', name: 'Cameră 5',
    bedAssignments: [{ bed: 'Pat dublu', people: 'Coman & Andreea' }],
  },
  {
    id: 'manou-r6', stayId: 'manou', name: 'Cameră 6',
    bedAssignments: [
      { bed: 'Pat dublu', people: 'Danut & Mihaela' },
      { bed: 'Pat single' },
    ],
  },
  {
    id: 'manou-r7', stayId: 'manou', name: 'Cameră 7',
    bedAssignments: [{ bed: 'Pat dublu', people: 'Fazi & Oana' }],
  },
  {
    id: 'manou-r8', stayId: 'manou', name: 'Cameră 8',
    bedAssignments: [
      { bed: 'Pat dublu', people: 'Vlad & Gabi' },
      { bed: 'Pat dublu' },
      { bed: 'Pat single' },
    ],
  },
  {
    id: 'manou-r9', stayId: 'manou', name: 'Cameră 9',
    bedAssignments: [
      { bed: 'Pat dublu', people: 'Floki & Viktoriia' },
      { bed: 'Pat single' },
    ],
  },
  {
    id: 'manou-r10', stayId: 'manou', name: 'Cameră 10',
    bedAssignments: [
      { bed: 'Pat dublu', people: 'Diana & Angelko' },
      { bed: 'Pat dublu' },
    ],
  },
  {
    id: 'manou-r11', stayId: 'manou', name: 'Cameră 11',
    bedAssignments: [
      { bed: 'Pat dublu', people: 'Robi & Sergiu' },
      { bed: 'Pat dublu' },
    ],
  },
  {
    id: 'manou-r12', stayId: 'manou', name: 'Cameră 12',
    bedAssignments: [
      { bed: 'Pat dublu', people: 'Andra & Eugen' },
      { bed: 'Pat supraetajat' },
    ],
  },
  {
    id: 'manou-r13', stayId: 'manou', name: 'Cameră 13',
    notes: 'Le unim sau mutăm un pat din altă cameră.',
    bedAssignments: [
      { bed: 'Pat single', people: 'Vlad & Denisa' },
      { bed: 'Pat single' },
    ],
  },

  // ======================================================================
  // Cazare #2 — Villa Plage Valentin (23–25 iunie) · 21 persoane
  // ======================================================================
  {
    id: 'batz-studio', stayId: 'batz', name: 'Studio',
    bedAssignments: [{ bed: 'Pat dublu', people: 'Razvan & Stefi' }],
  },

  {
    id: 'batz-etaj-d1', stayId: 'batz', group: 'Apartament etaj', name: 'Dormitor 1',
    bedAssignments: [{ bed: 'Pat dublu', people: 'Matei & Alexandra' }],
  },
  {
    id: 'batz-etaj-d2', stayId: 'batz', group: 'Apartament etaj', name: 'Dormitor 2',
    bedAssignments: [{ bed: '2 paturi single', people: 'Fazi & Oana' }],
  },
  {
    id: 'batz-etaj-d3', stayId: 'batz', group: 'Apartament etaj', name: 'Dormitor 3',
    bedAssignments: [{ bed: '2 paturi single', people: 'Vlad & Denisa' }],
  },
  {
    id: 'batz-etaj-living', stayId: 'batz', group: 'Apartament etaj', name: 'Living',
    bedAssignments: [{ bed: 'Canapea extensibilă', people: 'Eugen & Andra' }],
  },

  {
    id: 'batz-micparter-d1', stayId: 'batz', group: 'Apartament mic parter', name: 'Dormitor 1',
    bedAssignments: [{ bed: '2 paturi single', people: 'Robi & Sergiu' }],
  },
  {
    id: 'batz-micparter-living', stayId: 'batz', group: 'Apartament mic parter', name: 'Living',
    bedAssignments: [{ bed: 'Canapea extensibilă', people: 'Floki & Viktoriia' }],
  },

  {
    id: 'batz-mareparter-d1', stayId: 'batz', group: 'Apartament mare parter', name: 'Dormitor 1',
    bedAssignments: [{ bed: 'Pat dublu', people: 'Chiri & Elena' }],
  },
  {
    id: 'batz-mareparter-d2', stayId: 'batz', group: 'Apartament mare parter', name: 'Dormitor 2',
    bedAssignments: [{ bed: '2 paturi single', people: 'Coman & Andreea' }],
  },
  {
    id: 'batz-mareparter-d3', stayId: 'batz', group: 'Apartament mare parter', name: 'Dormitor 3',
    bedAssignments: [{ bed: '3 paturi supraetajate', people: 'Lili, Doru, Radu' }],
  },

  // ======================================================================
  // Cazare #3 — Domaine, 1 Jable, Lémeré (25–27 iunie) · 27 persoane
  // ======================================================================
  {
    id: 'lemere-r1', stayId: 'lemere', name: 'Cameră 1',
    bedAssignments: [
      { bed: 'Pat dublu', people: 'Fazi & Oana' },
      { bed: 'Pat single', people: 'Radu' },
    ],
  },
  {
    id: 'lemere-r2', stayId: 'lemere', name: 'Cameră 2',
    bedAssignments: [
      { bed: 'Pat dublu', people: 'Diana & Angelko' },
      { bed: 'Pat single', people: 'Doru' },
    ],
  },
  {
    id: 'lemere-r3', stayId: 'lemere', name: 'Cameră 3',
    bedAssignments: [{ bed: 'Pat single', people: 'Coman & Andreea' }],
  },
  {
    id: 'lemere-r4', stayId: 'lemere', name: 'Cameră 4',
    bedAssignments: [
      { bed: 'Pat dublu', people: 'Razvan & Stefi' },
      { bed: 'Pat single', people: 'Lili' },
    ],
  },
  {
    id: 'lemere-r5', stayId: 'lemere', name: 'Cameră 5',
    bedAssignments: [{ bed: 'Pat dublu', people: 'Vlad & Gabi' }],
  },
  {
    id: 'lemere-r6', stayId: 'lemere', name: 'Cameră 6',
    bedAssignments: [{ bed: 'Pat dublu', people: 'Pistol & Andreea' }],
  },
  {
    id: 'lemere-r7', stayId: 'lemere', name: 'Cameră 7',
    bedAssignments: [
      { bed: 'Pat dublu', people: 'Chiri & Elena' },
      { bed: 'Pat single' },
    ],
  },
  {
    id: 'lemere-r8', stayId: 'lemere', name: 'Cameră 8',
    bedAssignments: [{ bed: 'Pat single', people: 'Vlad & Denisa' }],
  },
  {
    id: 'lemere-r9', stayId: 'lemere', name: 'Cameră 9',
    bedAssignments: [{ bed: 'Pat dublu', people: 'Floki & Viktoriia' }],
  },
  {
    id: 'lemere-r10', stayId: 'lemere', name: 'Cameră 10',
    bedAssignments: [{ bed: 'Pat dublu', people: 'Andra & Eugen' }],
  },
  {
    id: 'lemere-r11', stayId: 'lemere', name: 'Cameră 11',
    bedAssignments: [{ bed: 'Pat dublu', people: 'Matei & Alexandra' }],
  },
  {
    id: 'lemere-r12', stayId: 'lemere', name: 'Cameră 12',
    bedAssignments: [
      { bed: 'Pat dublu', people: 'Robi & Sergiu' },
      { bed: 'Pat single' },
    ],
  },
];

import type { Stay } from '@/types/trip';

// Accommodations. Map links use Google Maps search/coordinates from the PDF.
// Replace heroImage/images with real photos in public/images/france/stays/.
export const stays: Stay[] = [
  {
    id: 'manou',
    name: 'Parc & Château de Manou',
    shortName: 'Château de Manou',
    location: 'Manou, Perche (Eure-et-Loir)',
    coordinates: "48°31'23.0\"N 0°58'53.4\"E",
    searchQuery: 'Parc & Château de Manou',
    address: 'Manou, 28240, Centre-Val de Loire',
    dates: '21–23 iunie 2026',
    nights: 2,
    checkIn: 'Duminică, 21 iunie (seara, după sosirea de la Beauvais)',
    checkOut: 'Marți, 23 iunie · 08:30–10:00, ultima mașină până la 10:30',
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=48%C2%B031'23.0%22N+0%C2%B058'53.4%22E",
    notes: [
      'Castelul este obiectivul Zilei 0 — scopul serii de duminică este pur și simplu să ajungem aici.',
      'Vezi și documentul „services et options 2025 2026” pentru servicii, mâncare, echitație, volei, tir cu arcul și adrese locale.',
    ],
    houseRules: [
      'TODO: confirmă regulile casei cu proprietarul.',
      'Check-out fără haos marți dimineața — bagaje gata, camere verificate.',
    ],
    parking: 'TODO: confirmă parcarea pentru 8 mașini la castel.',
    nearby: [
      {
        id: 'near-manou-intermarche',
        title: 'Intermarché La Loupe',
        category: 'supermarket',
        description: 'Aproape de castel. Duminică doar 09:00–12:30.',
      },
      {
        id: 'near-manou-tourbiere',
        title: 'Tourbière des Froux',
        category: 'activity',
        description: 'Zonă umedă protejată, 5–10 min de castel, traseu scurt.',
      },
    ],
    heroImage: undefined,
  },
  {
    id: 'batz',
    name: 'Villa Plage Valentin',
    shortName: 'Villa Plage Valentin',
    location: 'Batz-sur-Mer, Pays de la Loire',
    address: '14B Rue de Casse Caillou, Batz-sur-Mer, 44740',
    searchQuery: '14B Rue de Casse Caillou, Batz-sur-Mer 44740',
    dates: '23–25 iunie 2026',
    nights: 2,
    checkIn: 'Marți, 23 iunie · sosire 15:30–17:30',
    checkOut: 'Joi, 25 iunie · late checkout, plecare în jur de 13:00',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=14B+Rue+de+Casse+Caillou+Batz-sur-Mer+44740',
    notes: [
      'Vila este la câțiva pași de Plage Valentin.',
      'La sosire: check-in, parcare, descărcat bagaje, verificat frigider / congelator / veselă / terasă.',
      'Apus foarte târziu în perioada asta — în jur de 22:05–22:10.',
    ],
    houseRules: [
      'TODO: confirmă regulile vilei (zgomot, fumat, animale).',
      'Plaja este nesupravegheată înainte de 5 iulie — baie pe propria răspundere.',
    ],
    parking: 'TODO: confirmă parcarea la vilă pentru flota de mașini.',
    nearby: [
      {
        id: 'near-batz-leclerc',
        title: 'E.Leclerc Guérande (ZAC de Villejames)',
        category: 'supermarket',
        description: 'Supermarket mare + traiteur. Marți 09:00–19:30.',
      },
      {
        id: 'near-batz-intermarche',
        title: 'Intermarché Super Guérande',
        category: 'supermarket',
        description: 'Backup, Route de la Baule. Marți 09:00–19:30.',
      },
      {
        id: 'near-batz-petitebouffe',
        title: 'La Petite Bouffe (Plage Valentin)',
        category: 'restaurant',
        description: 'Snack de plajă, take-away, terasă cu vedere la mare.',
      },
    ],
    heroImage: undefined,
  },
  {
    id: 'lemere',
    name: 'Domaine, 1 Jable, Lémeré',
    shortName: 'Domaine Lémeré',
    location: 'Lémeré, Centre-Val de Loire',
    address: '1 Jable, Lémeré, 37120',
    searchQuery: '1 Jable, Lémeré 37120',
    dates: '25–27 iunie 2026',
    nights: 2,
    checkIn: 'Joi, 25 iunie · 17:30–18:30',
    checkOut: 'Sâmbătă, 27 iunie · 10:00',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=1+Jable+Lemere+37120',
    notes: [
      'La sosire: check-in, descărcat bagaje, verificat bucătăria, frigiderul, camerele și parcarea.',
      'Château du Rivau este foarte aproape de cazare.',
    ],
    houseRules: [
      'Reguli stricte privind zgomotul — serile se păstrează relaxate.',
      'TODO: confirmă restul regulilor domeniului.',
    ],
    parking: 'TODO: confirmă parcarea la domeniu.',
    nearby: [
      {
        id: 'near-lemere-leclerc',
        title: 'E.Leclerc Chinon',
        category: 'supermarket',
        description:
          '50 rue Georges Guynemer, ZAC du Blanc Carroi, 37500 Chinon. 08:30–20:00.',
      },
      {
        id: 'near-lemere-rivau',
        title: 'Château du Rivau',
        category: 'activity',
        description: 'Castel + grădini + artă contemporană, foarte aproape.',
      },
    ],
    heroImage: undefined,
  },
  {
    id: 'final',
    name: 'Ultima noapte — flexibil',
    shortName: 'Ultima noapte',
    location: 'Paris / Beauvais / individual',
    dates: '27–28 iunie 2026',
    nights: 1,
    flexible: true,
    checkIn: 'Sâmbătă, 27 iunie',
    checkOut: 'Duminică, 28 iunie (în funcție de zbor)',
    notes: [
      'Fiecare subgrup își gestionează separat cazarea, masa, parcarea și logistica pentru zborul de duminică.',
      'Direcții: Paris (oraș), Beauvais / zona aeroportului, sau opriri intermediare.',
    ],
    houseRules: [
      'TODO: fiecare grup adaugă aici cazarea proprie de ultima noapte.',
    ],
    nearby: [],
    heroImage: undefined,
  },
];

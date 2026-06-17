import type { TripMeta, Reminder } from '@/types/trip';

// High-level trip facts shown on the dashboard hero + snapshot cards.
export const tripMeta: TripMeta = {
  title: 'France Roadtrip 2026',
  subtitle:
    '21–28 Iunie · 29 adulți · Beauvais → Perche → Atlantic → Loire → Paris/Beauvais',
  dateRange: '21–28 iunie 2026',
  startDate: '2026-06-21',
  endDate: '2026-06-28',
  adults: 29,
  cars: 8,
  days: 8,
  mainStays: 3,
  regions: ['Perche', 'Batz-sur-Mer', 'Valea Loarei', 'Paris / Beauvais'],
  routeSummary: 'Beauvais → Manou → Batz-sur-Mer → Lémeré → Paris / Beauvais',
};

// Important reminders surfaced on the homepage. Keep them short and practical.
export const reminders: Reminder[] = [
  {
    id: 'rem-supermarket-sunday',
    title: 'Duminică seara, supermarketurile mari sunt închise',
    description:
      'În Ziua 0 nu ne bazăm pe un supermarket mare după 19:00. Singurul backup util seara este Carrefour Express Beauvais Clermont (24/24), dar nu pentru aprovizionare completă.',
    icon: 'ShoppingCart',
    tone: 'warning',
    relatedDayId: 'day-0',
  },
  {
    id: 'rem-beach-unsupervised',
    title: 'Plaja Valentin este nesupravegheată înainte de iulie',
    description:
      'Supravegherea oficială începe pe 5 iulie. Pe 23–25 iunie tratăm baia ca nesupravegheată — atenție la copii, curenți și maree.',
    icon: 'Waves',
    tone: 'warning',
    relatedDayId: 'day-3',
  },
  {
    id: 'rem-lemere-noise',
    title: 'Reguli stricte de zgomot la Lémeré',
    description:
      'Domeniul din 1 Jable are reguli stricte privind zgomotul. Serile se păstrează relaxate, fără gălăgie târziu.',
    icon: 'VolumeX',
    tone: 'warning',
    relatedDayId: 'day-4',
  },
  {
    id: 'rem-match',
    title: 'Norvegia – Franța, 26 iunie ora 21:00',
    description:
      'Vinerea facem cină + meci în Tours. Rezervăm din timp un loc care difuzează meciul și încape 29 de persoane. Ne așezăm până la 19:00.',
    icon: 'Tv',
    tone: 'fun',
    relatedDayId: 'day-5',
  },
  {
    id: 'rem-reservations',
    title: 'Ce trebuie rezervat din timp',
    description:
      'Surf, karting, una dintre activitățile speciale (Brière / Les Jardins de la Mer), cina în Le Croisic și locul pentru meci în Tours nu se rezolvă spontan pentru 29 de oameni.',
    icon: 'CalendarCheck',
    tone: 'info',
  },
];

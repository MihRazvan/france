import type { Reservation } from '@/types/trip';

// Booking status board. No backend — edit `status`/`owner`/`deadline` here.
// Statuses: TODO · Contacted · Reserved · Paid · Confirmed · Backup · Cancelled
export const reservations: Reservation[] = [
  {
    id: 'res-chef-manou',
    title: 'Cină aniversară / chef la castel',
    relatedDayId: 'day-1',
    relatedStayId: 'manou',
    status: 'TODO',
    owner: 'TODO',
    notes:
      'Seara de zi de naștere la Château de Manou, 19:30. Vezi opțiunile de catering/chef din documentul de servicii al castelului.',
  },
  {
    id: 'res-echitatie',
    title: 'Echitație (zona Manou / Senonches)',
    relatedDayId: 'day-1',
    status: 'TODO',
    owner: 'TODO',
    notes: 'Se face prin rezervare la proprietar. Buget în pozele de pe grup.',
  },
  {
    id: 'res-surf',
    title: 'Surf — Low Tide Surf School',
    relatedDayId: 'day-3',
    status: 'TODO',
    owner: 'TODO',
    notes:
      'Prima variantă: Low Tide (chiar pe Plage Valentin). Backup: Nomas (Plage de la Govelle). Confirmăm dacă pot prelua grup mare sau dacă împărțim.',
  },
  {
    id: 'res-karting',
    title: 'Karting outdoor — Racing Kart Jade',
    relatedDayId: 'day-3',
    status: 'TODO',
    owner: 'TODO',
    notes:
      'Saint-Michel-Chef-Chef, ~1h05–1h20 dus. ~20 €/sesiune sau 50 €/3 sesiuni. Backup: Solokart, Plessé.',
  },
  {
    id: 'res-activitate-speciala',
    title: 'Activitate specială: Brière sau Les Jardins de la Mer',
    relatedDayId: 'day-3',
    status: 'TODO',
    owner: 'TODO',
    notes:
      'Brière: chaland + calèche (Brière Evasion). Les Jardins de la Mer (Le Croisic): vizită ghidată, rezervare obligatorie, ~2h30, grup până la 60.',
  },
  {
    id: 'res-cina-croisic',
    title: 'Cină de grup în Le Croisic',
    relatedDayId: 'day-3',
    status: 'TODO',
    owner: 'TODO',
    deadline: 'Prioritate mare',
    notes:
      'Recomandare: L’Air du Temps (grupuri până la 50), 20:00, meniu de grup. Backup: Domaine de Port aux Rocs, La Criée, Le Lénigo.',
  },
  {
    id: 'res-tours-meci',
    title: 'Cină + meci Norvegia–Franța în Tours',
    relatedDayId: 'day-5',
    status: 'TODO',
    owner: 'TODO',
    notes:
      'Loc care difuzează meciul, cu ecran/sunet, capacitate 29, unde putem mânca. Variante: The Pale, Buck Mulligan’s, Au Bureau Tours Nord, 3 Brasseurs. Rezervare 19:00.',
  },
  {
    id: 'res-balon',
    title: 'Zbor cu balonul peste Valea Loarei',
    relatedDayId: 'day-5',
    status: 'TODO',
    owner: 'TODO',
    notes:
      'Opțional, 06:00–09:00, buget separat, rezervare fermă. Depinde de vreme.',
  },
  {
    id: 'res-canoe',
    title: 'Canoe / caiac sub Château de Chenonceau',
    relatedDayId: 'day-5',
    status: 'TODO',
    owner: 'TODO',
    notes:
      'Pe râul Cher, pe lângă arcadele castelului. Necesită rezervare; participanții trebuie să știe să înoate. Haine de schimb.',
  },
];

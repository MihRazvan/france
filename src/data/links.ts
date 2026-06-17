import type { LinkItem } from '@/types/trip';

// Helper: builds a safe Google Maps search URL from a place name.
// We use this for map/place links instead of inventing exact websites.
// For official sites / booking pages, leave `url` undefined → the UI shows a
// "TODO: adaugă link" placeholder you can fill in later.
export const maps = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const links: LinkItem[] = [
  // ---------- Hărți / rute ----------
  { id: 'map-route-overview', title: 'Ruta completă (Beauvais → Loire)', category: 'maps', description: 'Beauvais → Manou → Batz-sur-Mer → Lémeré → Paris/Beauvais', url: maps('Beauvais France') },
  { id: 'map-manou', title: 'Château de Manou', category: 'maps', description: "Coordonate: 48°31'23.0\"N 0°58'53.4\"E", relatedStayId: 'manou', url: maps("48°31'23.0\"N 0°58'53.4\"E") },
  { id: 'map-batz', title: 'Villa Plage Valentin', category: 'maps', description: '14B Rue de Casse Caillou, Batz-sur-Mer 44740', relatedStayId: 'batz', url: maps('14B Rue de Casse Caillou Batz-sur-Mer 44740') },
  { id: 'map-lemere', title: 'Domaine, 1 Jable, Lémeré', category: 'maps', description: '1 Jable, Lémeré 37120', relatedStayId: 'lemere', url: maps('1 Jable Lemere 37120') },

  // ---------- Aeroporturi / închirieri mașini ----------
  { id: 'air-bva', title: 'Aeroport Beauvais–Tillé (BVA)', category: 'airport', description: 'Sosire 21 iunie · retur grup Craiova', url: maps('Aéroport Beauvais-Tillé BVA') },
  { id: 'air-cdg', title: 'Aeroport Paris–Charles de Gaulle (CDG)', category: 'airport', description: 'Retur grup București', url: maps('Aéroport Charles de Gaulle CDG') },
  { id: 'air-rental', title: 'Închiriere mașini (BVA)', category: 'airport', description: 'TODO: adaugă firma, rezervarea și ora de ridicare.' },

  // ---------- Supermarketuri ----------
  { id: 'shop-carrefour-beauvais', title: 'Carrefour Beauvais', category: 'supermarket', description: 'Duminică 09:00–12:45', relatedDayId: 'day-0', url: maps('Carrefour Beauvais') },
  { id: 'shop-carrefour-express', title: 'Carrefour Express Beauvais Clermont', category: 'supermarket', description: '14 Rue Clermont · 24/24 · backup seara (Ziua 0)', relatedDayId: 'day-0', url: maps('Carrefour Express 14 Rue Clermont Beauvais') },
  { id: 'shop-intermarche-laloupe', title: 'Intermarché La Loupe', category: 'supermarket', description: 'Aproape de castel · duminică 09:00–12:30', relatedDayId: 'day-0', url: maps('Intermarché La Loupe') },
  { id: 'shop-leclerc-guerande', title: 'E.Leclerc Guérande', category: 'supermarket', description: 'ZAC de Villejames · marți 09:00–19:30 · traiteur', relatedDayId: 'day-2', url: maps('E.Leclerc Guérande ZAC de Villejames') },
  { id: 'shop-intermarche-guerande', title: 'Intermarché Super Guérande', category: 'supermarket', description: 'Route de la Baule · backup · marți 09:00–19:30', relatedDayId: 'day-2', url: maps('Intermarché Super Guérande') },
  { id: 'shop-decathlon-nazaire', title: 'Decathlon Saint-Nazaire', category: 'supermarket', description: 'Accesorii de plajă: fileu + minge de volei', relatedDayId: 'day-2', url: maps('Decathlon Saint-Nazaire') },
  { id: 'shop-leclerc-chinon', title: 'E.Leclerc Chinon', category: 'supermarket', description: '50 rue Georges Guynemer, ZAC du Blanc Carroi · 08:30–20:00', relatedDayId: 'day-4', url: maps('E.Leclerc Chinon ZAC du Blanc Carroi') },

  // ---------- Restaurante ----------
  { id: 'food-airdutemps', title: "L’Air du Temps (Le Croisic)", category: 'restaurant', description: 'Recomandarea principală · grupuri până la 50 · 20:00', relatedDayId: 'day-3', url: maps("L'Air du Temps Le Croisic") },
  { id: 'food-portauxrocs', title: 'Domaine de Port aux Rocs — Le France', category: 'restaurant', description: 'Backup cină de grup', relatedDayId: 'day-3', url: maps('Domaine de Port aux Rocs Le Croisic') },
  { id: 'food-lacriee', title: 'La Criée (Le Croisic)', category: 'restaurant', description: 'Backup · pește / fructe de mare', relatedDayId: 'day-3', url: maps('La Criée Le Croisic') },
  { id: 'food-lenigo', title: 'Le Lénigo (Le Croisic)', category: 'restaurant', description: 'Backup · pește / fructe de mare', relatedDayId: 'day-3', url: maps('Le Lénigo Le Croisic') },
  { id: 'food-petitebouffe', title: 'La Petite Bouffe (Plage Valentin)', category: 'restaurant', description: 'Prânz · snack de plajă, take-away', relatedDayId: 'day-3', url: maps('La Petite Bouffe Plage Valentin Batz-sur-Mer') },
  { id: 'food-cotemer', title: 'Côté Mer (Batz-sur-Mer)', category: 'restaurant', description: 'Prânz · fructe de mare, ostriche', relatedDayId: 'day-3', url: maps('Côté Mer Batz-sur-Mer') },
  { id: 'food-fleurdesel', title: 'Crêperie Fleur de Sel (Kervalet)', category: 'restaurant', description: 'Prânz breton · 12:00–13:45 · fără rezervări', relatedDayId: 'day-3', url: maps('Crêperie Fleur de Sel Kervalet') },
  { id: 'food-thepale', title: 'The Pale Irish Pub (Tours)', category: 'restaurant', description: 'Meci · pub central, ecrane mari', relatedDayId: 'day-5', url: maps('The Pale Irish Pub Tours') },
  { id: 'food-buckmulligans', title: "Buck Mulligan’s (Tours)", category: 'restaurant', description: 'Meci · Vieux Tours, lângă Place Plumereau', relatedDayId: 'day-5', url: maps("Buck Mulligan's Tours") },
  { id: 'food-aubureau', title: 'Au Bureau Tours Nord', category: 'restaurant', description: 'Meci · sigur logistic pentru grup mare', relatedDayId: 'day-5', url: maps('Au Bureau Tours Nord') },
  { id: 'food-3brasseurs', title: '3 Brasseurs Tours', category: 'restaurant', description: 'Meci · brasserie, mâncare simplă', relatedDayId: 'day-5', url: maps('3 Brasseurs Tours') },

  // ---------- Activități ----------
  { id: 'act-lowtide', title: 'Low Tide Surf School', category: 'activity', description: 'Surf pe Plage Valentin · prima variantă', relatedDayId: 'day-3', url: maps('Low Tide Surf School Batz-sur-Mer') },
  { id: 'act-nomas', title: 'Nomas École de Surf (Govelle)', category: 'activity', description: 'Backup surf · Plage de la Govelle', relatedDayId: 'day-3', url: maps('Nomas École de Surf Plage de la Govelle') },
  { id: 'act-racingkart', title: 'Racing Kart Jade', category: 'activity', description: 'Karting outdoor · Saint-Michel-Chef-Chef', relatedDayId: 'day-3', url: maps('Racing Kart Jade Saint-Michel-Chef-Chef') },
  { id: 'act-solokart', title: 'Solokart (Plessé)', category: 'activity', description: 'Backup karting · piste 800 m / 1350 m', relatedDayId: 'day-3', url: maps('Solokart Plessé') },
  { id: 'act-briere', title: 'Brière Evasion (chaland + calèche)', category: 'activity', description: 'Plimbare cu barcă prin mlaștini + calèche', relatedDayId: 'day-3', url: maps('Brière Evasion Saint-Lyphard') },
  { id: 'act-jardinsmer', title: 'Les Jardins de la Mer (Le Croisic)', category: 'activity', description: 'Fermă marină / alge · rezervare obligatorie', relatedDayId: 'day-3', url: maps('Les Jardins de la Mer Le Croisic') },
  { id: 'act-terredesel', title: 'Terre de Sel (marais salants)', category: 'activity', description: 'Vizite ghidate în salinele Guérande', relatedDayId: 'day-3', url: maps('Terre de Sel Guérande') },
  { id: 'act-guerande', title: 'Château-Musée de Guérande', category: 'activity', description: 'Porte Saint-Michel · cetate medievală · 7 €', relatedDayId: 'day-3', url: maps('Porte Saint-Michel Guérande') },
  { id: 'act-tourbiere', title: 'Tourbière des Froux + Senonches', category: 'activity', description: 'Natură, traseu scurt, 5–10 min de castel', relatedDayId: 'day-1', url: maps('Tourbière des Froux Senonches') },
  { id: 'act-chartres', title: 'Catedrala Notre-Dame de Chartres', category: 'activity', description: '08:30–19:30 · acces gratuit', relatedDayId: 'day-1', url: maps('Cathédrale Notre-Dame de Chartres') },
  { id: 'act-rivau', title: 'Château du Rivau', category: 'activity', description: 'Castel + grădini + artă · aproape de Lémeré', relatedDayId: 'day-5', url: maps('Château du Rivau Lémeré') },
  { id: 'act-chinon', title: 'Forteresse Royale de Chinon', category: 'activity', description: 'Fortăreață + oraș vechi', relatedDayId: 'day-5', url: maps('Forteresse Royale de Chinon') },
  { id: 'act-fontevraud', title: 'Abbaye Royale de Fontevraud', category: 'activity', description: '+ Montsoreau / Candes-Saint-Martin', relatedDayId: 'day-5', url: maps('Abbaye Royale de Fontevraud') },
  { id: 'act-azay', title: 'Château d’Azay-le-Rideau', category: 'activity', description: '+ Jardins de Villandry', relatedDayId: 'day-5', url: maps('Château d’Azay-le-Rideau') },
  { id: 'act-villandry', title: 'Jardins de Villandry', category: 'activity', description: 'Grădini spectaculoase', relatedDayId: 'day-5', url: maps('Jardins de Villandry') },
  { id: 'act-canoe', title: 'Canoe / caiac sub Chenonceau', category: 'activity', description: 'Pe râul Cher · rezervare obligatorie', relatedDayId: 'day-5', url: maps('Canoë Chenonceau Cher') },
  { id: 'act-balon', title: 'Zbor cu balonul (Valea Loarei)', category: 'activity', description: 'TODO: adaugă operatorul și rezervarea.', relatedDayId: 'day-5' },

  // ---------- Cazări ----------
  { id: 'stay-manou-link', title: 'Parc & Château de Manou', category: 'stay', description: 'Cazare 1 · Perche', relatedStayId: 'manou', url: maps('Parc & Château de Manou') },
  { id: 'stay-batz-link', title: 'Villa Plage Valentin', category: 'stay', description: 'Cazare 2 · Batz-sur-Mer', relatedStayId: 'batz', url: maps('14B Rue de Casse Caillou Batz-sur-Mer') },
  { id: 'stay-lemere-link', title: 'Domaine, 1 Jable, Lémeré', category: 'stay', description: 'Cazare 3 · Valea Loarei', relatedStayId: 'lemere', url: maps('1 Jable Lemere 37120') },

  // ---------- Urgență / practic ----------
  { id: 'emg-112', title: 'Urgențe Europa: 112', category: 'emergency', description: 'Număr unic de urgență (poliție / ambulanță / pompieri).', url: 'tel:112' },
  { id: 'emg-pharmacy', title: 'Farmacie de gardă (pe traseu)', category: 'emergency', description: 'TODO: notează cea mai apropiată farmacie pentru fiecare cazare.' },
  { id: 'prac-tides', title: 'Maree Plage Valentin', category: 'practical', description: '23 iunie: maree joasă ~18:49. Apus ~22:05–22:10.', relatedDayId: 'day-2', url: maps('Plage Valentin Batz-sur-Mer') },
];

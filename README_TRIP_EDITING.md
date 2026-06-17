# Cum editezi conținutul trip-ului

Tot conținutul stă în [`src/data/`](src/data/), în fișiere TypeScript simple.
Nu trebuie să atingi componentele sau paginile. După ce salvezi un fișier,
`npm run dev` reîncarcă automat.

Tipurile pentru orice câmp sunt în [`src/types/trip.ts`](src/types/trip.ts) — dacă
ai un dubiu despre ce câmpuri există, acolo te uiți.

## Fișierele de date

| Fișier | Ce conține |
| --- | --- |
| `trip.ts` | Titlu, subtitlu, date, nr. adulți/mașini, regiuni + **reminderele** de pe homepage |
| `days.ts` | **Itinerariul** complet: program, activități opționale, mâncare, note, rezervări |
| `stays.ts` | Cazările: adresă, coordonate, check-in/out, reguli, link hartă, „în apropiere” |
| `rooms.ts` | Camerele per cazare + persoanele alocate |
| `cars.ts` | Cele 8 mașini: captain, șoferi, pasageri, responsabilități + checklist logistică |
| `people.ts` | Lista celor 29 de adulți (placeholder acum) |
| `links.ts` | Biblioteca de link-uri pe categorii |
| `reservations.ts` | Tabloul de status pentru rezervări |

`src/data/index.ts` doar adună totul și oferă funcții ajutătoare — în mod normal
nu îl editezi.

## Sarcini frecvente

### Adaugi numele reale ale grupului
În [`src/data/people.ts`](src/data/people.ts), înlocuiește blocul generat cu o
listă explicită (exemplul e chiar în fișier):

```ts
export const people: Person[] = [
  { id: 'p01', name: 'Andrei' },
  { id: 'p02', name: 'Maria' },
  // ...
];
```

> Pentru confidențialitate, poți folosi inițiale sau porecle („A.M.”, „Riri”).

### Aloci oameni pe camere
În [`src/data/rooms.ts`](src/data/rooms.ts), pune `id`-urile persoanelor (sau
direct nume) în `assignedPeople`:

```ts
{ id: 'manou-r1', stayId: 'manou', name: 'Cameră 1', capacity: 4,
  beds: '2 duble', assignedPeople: ['p01', 'p02', 'Andrei', 'Maria'] },
```

Numele se rezolvă automat: dacă pui un `id` (`p01`) apare numele din `people.ts`;
dacă pui text liber, apare ca atare. Camerele neatribuite arată „TODO”.

### Completezi mașinile
În [`src/data/cars.ts`](src/data/cars.ts): `captain`, `drivers`, `passengers`
(id-uri sau nume), plus `responsibilities` (ture de cumpărături etc.).

### Actualizezi un status de rezervare
În [`src/data/reservations.ts`](src/data/reservations.ts), schimbă `status`,
`owner`, `deadline`, `link`. Statusuri permise:

```
TODO · Contacted · Reserved · Paid · Confirmed · Backup · Cancelled
```

### Adaugi un link
În [`src/data/links.ts`](src/data/links.ts). Pentru hărți poți folosi
helper-ul `maps('nume loc')` care construiește un link de Google Maps. Pentru
site-uri oficiale, pune URL-ul direct în `url`. Fără `url`, link-ul apare ca
„TODO” (vizibil, dar marcat).

### Editezi o zi din itinerariu
În [`src/data/days.ts`](src/data/days.ts), fiecare zi are: `schedule` (timeline),
`options` (activități opționale), `food`, `notes`, `reservations`. Fiecare opțiune
poate avea `recommended: true`, `bookingRequired: true` și `tags` (folosite la
filtrul din pagina de itinerariu).

### Adaugi imagini
1. Pune fișierele în `public/images/france/` (`stays/`, `routes/`, `activities/`,
   `food/`).
2. Referă-le în date cu calea de la rădăcina publică, de ex.:
   ```ts
   heroImage: '/images/france/stays/manou.jpg',
   ```
Câmpurile de imagine lipsă afișează un placeholder branded până le completezi.

## Verificare rapidă

```bash
npm run build          # trebuie să treacă
npx tsc --noEmit -p tsconfig.app.json   # verificare de tipuri
```

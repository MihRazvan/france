# France Roadtrip 2026 — Hub privat al grupului

Hub privat, mobile-first, pentru roadtrip-ul grupului în Franța, **21–28 iunie 2026**
(29 adulți · 8 mașini). Înlocuiește PDF-ul de itinerariu cu un singur loc unde
găsești: itinerariul pe zile, activitățile opționale, cazările și camerele,
mașinile, rezervările și link-urile utile.

> Nu este un site de agenție de turism — este o platformă operațională pentru un
> singur trip.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · React Router · lucide-react.
Fără backend: tot conținutul stă în fișiere TypeScript sub [`src/data/`](src/data/).

## Cum rulezi

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # build de producție în dist/
npm run preview  # servește build-ul
```

## Structură

```
src/
  data/        # CONȚINUTUL trip-ului (editezi aici) — vezi README_TRIP_EDITING.md
  types/       # tipurile pentru toate datele (trip.ts)
  components/  # layout/ · common/ · itinerary/ · stays/ · cars/ · links/ · ui/
  pages/       # o pagină per rută
  lib/         # utilitare (nav, icons, today, cn)
public/images/france/   # poze (routes / stays / activities / food) — placeholdere acum
```

### Rute

| Rută | Pagină |
| --- | --- |
| `/` | Dashboard / acasă |
| `/itinerary` · `/itinerary/:dayId` | Itinerariu + detaliu zi |
| `/stays` · `/stays/:stayId` | Cazări + detaliu cazare cu camere |
| `/rooms` | Toate camerele, cu filtre |
| `/cars` | Mașini, șoferi, pasageri, logistică |
| `/links` | Link-uri utile pe categorii |
| `/practical` | Status rezervări, cumpărături, reguli, urgențe, checklist |
| `/gallery` | Galerie (placeholdere) |

Pe mobil există un meniu jos cu destinațiile principale: **Acasă · Itinerariu ·
Cazări · Camere · Link-uri** (restul prin meniul hamburger).

## Editarea conținutului

Nu trebuie să atingi componentele. Tot ce ține de trip se editează în
[`src/data/`](src/data/). Detalii pas cu pas în
[`README_TRIP_EDITING.md`](README_TRIP_EDITING.md).

Date care sunt încă **placeholder** (marcate cu `TODO`): nume persoane, alocări
de camere, captains/pasageri pe mașini, o parte din link-uri și toate imaginile
(`TODO_IMAGE`).

## ⚠️ Confidențialitate

Site-ul poate conține nume, alocări de camere, mașini și logistică de zbor.
Pentru **v1 nu există date personale reale**. Dacă îl publici:

- folosește **inițiale / porecle** în loc de nume complete, **sau**
- ține-l în spatele unei **parole / hosting privat**.

Un câmp de parolă pe client **nu este securitate reală** — nu te baza pe el pentru
date sensibile. Site-ul este marcat `noindex, nofollow`.

## Design & licență

Designul este **copiat, nu inventat**: pornește de la șablonul open-source
**TourCraft – React Travel Agency & Tourism Website Template**
(MIT © 2025 Themixly). Regulile vizuale extrase sunt documentate în
[`DESIGN_SOURCE.md`](DESIGN_SOURCE.md). Licența originală este păstrată în
[`LICENSE`](LICENSE).

Sursa șablonului:
<https://github.com/themixlyweb/react-tourism-website-template>

Imaginile din șablon (safari) sunt doar placeholdere temporare — înlocuiește-le
cu poze proprii sau corect licențiate. Nu adăuga imagini fără drept de folosință.

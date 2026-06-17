// Barrel + small selector helpers over the trip data.
// Pages/components import from here instead of reaching into individual files.
import { days } from './days';
import { stays } from './stays';
import { rooms } from './rooms';
import { cars, carLogistics } from './cars';
import { people } from './people';
import { links } from './links';
import { reservations } from './reservations';
import { tripMeta, reminders } from './trip';
import type {
  DayPlan,
  Stay,
  Room,
  Car,
  Person,
  LinkItem,
  LinkCategory,
  Reservation,
} from '@/types/trip';

export {
  days,
  stays,
  rooms,
  cars,
  carLogistics,
  people,
  links,
  reservations,
  tripMeta,
  reminders,
};

// ---- Days ----
export const getDay = (id: string): DayPlan | undefined =>
  days.find((d) => d.id === id);

// ---- Stays ----
export const getStay = (id?: string): Stay | undefined =>
  id ? stays.find((s) => s.id === id) : undefined;

export const mainStays = stays.filter((s) => !s.flexible);

// ---- Rooms ----
export const roomsByStay = (stayId: string): Room[] =>
  rooms.filter((r) => r.stayId === stayId);

export const getRoom = (id: string): Room | undefined =>
  rooms.find((r) => r.id === id);

/** Split an occupant label ('Matei & Alexandra') into individual names. */
export const splitPeople = (s: string): string[] =>
  s
    .split(/\s*[&,+]\s*/)
    .map((x) => x.trim())
    .filter(Boolean);

/** Occupant labels for a room (bed-level when available, else the flat list). */
export const roomPeople = (room: Room): string[] => {
  if (room.bedAssignments?.length) {
    return room.bedAssignments
      .filter((b) => b.people)
      .map((b) => b.people as string);
  }
  return room.assignedPeople ?? [];
};

/** Occupancy stats: total/occupied beds and head count. */
export const roomOccupancy = (room: Room) => {
  const beds = room.bedAssignments ?? [];
  if (beds.length === 0) {
    const people = room.assignedPeople?.length ?? 0;
    return { totalBeds: 0, occupiedBeds: people, people };
  }
  const occupiedBeds = beds.filter((b) => b.people).length;
  const people = beds.reduce(
    (n, b) => n + (b.people ? splitPeople(b.people).length : 0),
    0,
  );
  return { totalBeds: beds.length, occupiedBeds, people };
};

// ---- Cars ----
export const getCar = (id: string): Car | undefined =>
  cars.find((c) => c.id === id);

// ---- People ----
export const getPerson = (id: string): Person | undefined =>
  people.find((p) => p.id === id);

/** Resolve a person id to a display name; if it isn't an id, return as-is. */
export const personName = (idOrName: string): string =>
  getPerson(idOrName)?.name ?? idOrName;

// ---- Links ----
export const linksByCategory = (category: LinkCategory): LinkItem[] =>
  links.filter((l) => l.category === category);

export const linksByDay = (dayId: string): LinkItem[] =>
  links.filter((l) => l.relatedDayId === dayId);

export const linksByStay = (stayId: string): LinkItem[] =>
  links.filter((l) => l.relatedStayId === stayId);

// All categories in display order.
export const linkCategories: { key: LinkCategory; label: string }[] = [
  { key: 'maps', label: 'Hărți & rute' },
  { key: 'airport', label: 'Aeroporturi & închirieri' },
  { key: 'supermarket', label: 'Supermarketuri' },
  { key: 'restaurant', label: 'Restaurante' },
  { key: 'activity', label: 'Activități' },
  { key: 'stay', label: 'Cazări' },
  { key: 'emergency', label: 'Urgență' },
  { key: 'practical', label: 'Practic' },
];

// ---- Reservations ----
export const getReservation = (id: string): Reservation | undefined =>
  reservations.find((r) => r.id === id);

export const reservationsByDay = (dayId: string): Reservation[] =>
  reservations.filter((r) => r.relatedDayId === dayId);

/** Reservations referenced by a day's `reservations` id list. */
export const reservationsForDay = (day: DayPlan): Reservation[] =>
  (day.reservations ?? [])
    .map(getReservation)
    .filter((r): r is Reservation => Boolean(r));

// Central type definitions for the France Roadtrip 2026 hub.
// All user-facing content lives in `src/data/*` and is typed against this file.

/** Sentinel used in data when an image is intentionally missing.
 *  The <TripImage> component renders a branded placeholder for these. */
export const TODO_IMAGE = 'TODO_IMAGE' as const;

export type LinkCategory =
  | 'maps' // Google Maps routes / location links
  | 'airport' // airports & rental cars
  | 'supermarket'
  | 'restaurant'
  | 'activity'
  | 'stay'
  | 'emergency'
  | 'practical';

export type LinkItem = {
  id: string;
  title: string;
  category: LinkCategory;
  description?: string;
  /** Optional — when missing the UI shows a "TODO: adaugă link" placeholder. */
  url?: string;
  relatedDayId?: string;
  relatedStayId?: string;
};

export type ScheduleType =
  | 'logistics'
  | 'drive'
  | 'meal'
  | 'activity'
  | 'free'
  | 'reservation';

export type ScheduleItem = {
  time: string;
  title: string;
  description?: string;
  type?: ScheduleType;
};

/** Filter/tag vocabulary for activity & day cards. */
export type ActivityTag =
  | 'natura'
  | 'oras'
  | 'sport'
  | 'sightseeing'
  | 'food'
  | 'plaja'
  | 'cultura'
  | 'relax'
  | 'adrenalina'
  | 'logistica';

export type ActivityOption = {
  id: string;
  /** e.g. "Opțiunea A". Optional label shown as an eyebrow on the card. */
  label?: string;
  title: string;
  location?: string;
  driveTime?: string;
  duration?: string;
  budget?: string;
  /** "Pentru cine" — who this option suits. */
  audience?: string;
  description: string;
  plan?: string[];
  bookingRequired?: boolean;
  recommended?: boolean;
  links?: LinkItem[];
  image?: string;
  tags?: ActivityTag[];
};

export type DayPlan = {
  id: string; // 'day-0'
  dayNumber: number; // 0..7
  date: string; // '21 iunie 2026'
  weekday: string; // 'Duminică'
  title: string;
  region: string;
  theme: string;
  summary?: string; // one-line essence for cards
  heroImage?: string;
  routeImage?: string;
  /** Key places / anchors of the day (chips). */
  anchors?: string[];
  schedule: ScheduleItem[];
  options?: ActivityOption[];
  food?: ActivityOption[];
  /** Reservation ids (see reservations.ts) relevant to this day. */
  reservations?: string[];
  notes?: string[];
  /** Stay where the group sleeps that night. */
  stayId?: string;
};

export type Stay = {
  id: string;
  name: string;
  shortName?: string;
  location: string;
  address?: string;
  coordinates?: string;
  /** Free-text search string for Google Maps when there is no exact address. */
  searchQuery?: string;
  dates: string;
  nights?: number;
  checkIn?: string;
  checkOut?: string;
  mapUrl?: string;
  heroImage?: string;
  images?: string[];
  notes?: string[];
  houseRules?: string[];
  parking?: string;
  nearby?: LinkItem[];
  /** True for the flexible final night (no single booking). */
  flexible?: boolean;
};

export type Room = {
  id: string;
  stayId: string;
  name: string;
  capacity?: number;
  beds?: string;
  /** Person ids (see people.ts) or raw names. Empty/placeholder until assigned. */
  assignedPeople: string[];
  notes?: string;
};

export type Car = {
  id: string;
  label: string;
  captain?: string;
  drivers?: string[];
  passengers?: string[];
  rentalCompany?: string;
  pickup?: string;
  return?: string;
  notes?: string[];
  /** Operational duties, e.g. "tură de cumpărături la Guérande". */
  responsibilities?: string[];
};

export type Person = {
  id: string;
  /** Placeholder initials / nicknames until the group provides real names. */
  name: string;
  carId?: string;
  roomId?: string;
  notes?: string;
};

export type ReservationStatus =
  | 'TODO'
  | 'Contacted'
  | 'Reserved'
  | 'Paid'
  | 'Confirmed'
  | 'Backup'
  | 'Cancelled';

export type Reservation = {
  id: string;
  title: string;
  relatedDayId?: string;
  relatedStayId?: string;
  status: ReservationStatus;
  owner?: string;
  deadline?: string;
  notes?: string;
  link?: string;
};

export type ReminderTone = 'info' | 'warning' | 'fun';

export type Reminder = {
  id: string;
  title: string;
  description: string;
  /** lucide-react icon name. */
  icon?: string;
  tone?: ReminderTone;
  relatedDayId?: string;
};

export type TripMeta = {
  title: string;
  subtitle: string;
  dateRange: string;
  /** ISO dates, used for the date-aware "today / next" card. */
  startDate: string;
  endDate: string;
  adults: number;
  cars: number;
  days: number;
  mainStays: number;
  regions: string[];
  routeSummary: string;
};

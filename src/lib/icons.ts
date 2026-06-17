import {
  ShoppingCart,
  Waves,
  VolumeX,
  Tv,
  CalendarCheck,
  Info,
  type LucideIcon,
} from 'lucide-react';

// Resolves the string icon names used in data (e.g. reminders) to components.
const ICONS: Record<string, LucideIcon> = {
  ShoppingCart,
  Waves,
  VolumeX,
  Tv,
  CalendarCheck,
  Info,
};

export const iconByName = (name?: string): LucideIcon =>
  (name && ICONS[name]) || Info;

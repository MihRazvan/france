import {
  Home,
  Map,
  BedDouble,
  DoorOpen,
  Car,
  Link as LinkIcon,
  Info,
  Image,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = {
  to: string;
  label: string;
  icon: LucideIcon;
  /** Shown in the sticky bottom mobile nav. */
  primary?: boolean;
};

// Single source of truth for navigation (top nav + bottom mobile nav).
export const navItems: NavItem[] = [
  { to: '/', label: 'Acasă', icon: Home, primary: true },
  { to: '/itinerary', label: 'Itinerariu', icon: Map, primary: true },
  { to: '/stays', label: 'Cazări', icon: BedDouble, primary: true },
  { to: '/rooms', label: 'Camere', icon: DoorOpen, primary: true },
  { to: '/cars', label: 'Mașini', icon: Car },
  { to: '/links', label: 'Link-uri', icon: LinkIcon, primary: true },
  { to: '/practical', label: 'Practic', icon: Info },
  { to: '/gallery', label: 'Galerie', icon: Image },
];

export const primaryNavItems = navItems.filter((i) => i.primary);

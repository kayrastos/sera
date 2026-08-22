export type MenuCategoryType = 
  | 'BAŞLANGIÇLAR'
  | 'ATEŞTEN'
  | 'DENİZDEN'
  | 'BAHÇEDEN'
  | 'TATLILAR'
  | 'İÇECEKLER';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategoryType;
  tags?: string[];
  pairing?: string;
  isSignature?: boolean;
  image?: string;
}

export interface SignatureDish {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  price: number;
  image: string;
  details: string[];
}

export type GalleryCategory = 'Tümü' | 'Mutfak' | 'Tabaklar' | 'Mekân' | 'Detaylar';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Mutfak' | 'Tabaklar' | 'Mekân' | 'Detaylar';
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
  caption: string;
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  seatingArea: 'Salon' | 'Açık Mutfak Barı' | 'Bahçe / Teras';
  specialRequest: string;
}

export interface PrivateDiningFormData {
  fullName: string;
  companyOrOccasion: string;
  phone: string;
  email: string;
  date: string;
  guests: string;
  notes: string;
}

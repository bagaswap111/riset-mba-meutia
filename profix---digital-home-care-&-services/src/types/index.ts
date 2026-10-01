export type ScreenId =
  | 'home'
  | 'services'
  | 'service-ac'
  | 'service-leak'
  | 'service-pump'
  | 'checkout'
  | 'confirmation'
  | 'auth';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'AC Repair' | 'Plumbing' | 'Pump Services' | 'Electrical' | 'Sanitization';
  basePrice: number;
  vatRate: number; // e.g. 0.05
  estimatedMinutes: number;
  shortDesc: string;
  longDesc: string;
  heroImage: string;
  verified: boolean;
  warrantyIncluded: boolean;
  screenTarget?: 'service-ac' | 'service-leak' | 'service-pump';
  includedFeatures: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  roadmap: Array<{
    step: number | string;
    title: string;
    description: string;
    icon?: string;
  }>;
  reviews: Array<{
    author: string;
    initials: string;
    timeAgo: string;
    rating: number;
    quote: string;
    serviceTag?: string;
    avatarBg?: string;
    verified: boolean;
  }>;
}

export interface BookingState {
  orderId: string;
  serviceId: string;
  serviceTitle: string;
  serviceSubtitle: string;
  serviceCategory?: string;
  serviceImage: string;
  price: number;
  serviceFee: number;
  tax: number;
  total: number;
  date: string;
  timeSlot: string;
  arrivalWindow?: string;
  address: {
    street: string;
    apartment?: string;
    city?: string;
    zipCode: string;
    instructions?: string;
  };
  customer?: {
    fullName: string;
    phone: string;
    email: string;
  };
  technician?: {
    name: string;
    badge: string;
    specialization: string;
    rating: number;
    jobsCompleted: number;
  };
  paymentMethod: 'card' | 'gpay' | 'whatsapp';
  paidAt: string;
}

export interface UserProfile {
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  address?: string;
}

export type ScreenType = 
  | 'home'
  | 'services'
  | 'detail'
  | 'checkout'
  | 'confirmation'
  | 'tracking'
  | 'auth';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'ac' | 'plumbing' | 'pump' | 'electrical' | 'appliances' | 'sanitation';
  categoryLabel: string;
  description: string;
  price: number;
  startingPrice: number;
  currency: string;
  image: string;
  verified?: boolean;
  warranty: boolean;
  estimatedMinutes?: number;
  inclusions?: string[];
}

export interface BookingState {
  serviceId: string;
  serviceTitle: string;
  servicePrice: number;
  selectedDate: string;
  selectedTimeSlot: string;
  streetAddress: string;
  unit: string;
  postalCode: string;
  instructions: string;
  paymentMethod: 'card' | 'gpay' | 'whatsapp';
  orderId: string;
  serviceFee: number;
  tax: number;
  totalPrice: number;
  technicianName: string;
  technicianRating: number;
  technicianReviews: number;
  etaMinutes: number;
}

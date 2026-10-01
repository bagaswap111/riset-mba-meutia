export type ScreenType = 
  | 'home'
  | 'services'
  | 'detail'
  | 'checkout'
  | 'confirmation'
  | 'tracking'
  | 'auth';

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

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
  processSteps?: ProcessStep[];
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
  paymentMethod: 'card' | 'gpay';
  paymentStatus?: 'simulation' | 'paid';
  orderId: string;
  serviceFee: number;
  tax: number;
  totalPrice: number;
  technicianName: string;
}

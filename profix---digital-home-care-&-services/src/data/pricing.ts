export const PLATFORM_FEE = 4.5;
export const TAX_RATE = 0.08;

export interface BookingTotals {
  servicePrice: number;
  platformFee: number;
  tax: number;
  total: number;
}

export const calculateBookingTotals = (servicePrice: number): BookingTotals => {
  const tax = Number(((servicePrice + PLATFORM_FEE) * TAX_RATE).toFixed(2));

  return {
    servicePrice,
    platformFee: PLATFORM_FEE,
    tax,
    total: Number((servicePrice + PLATFORM_FEE + tax).toFixed(2))
  };
};

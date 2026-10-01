export const PLATFORM_FEE = 4.5;
export const TAX_RATE = 0.08;

/**
 * All amounts in this prototype are sample USD figures. Partner-confirmed IDR
 * pricing has not been supplied, so every rendered amount is labelled as a
 * simulation rather than a payable total.
 */
export const SAMPLE_CURRENCY = 'USD';

export const formatSampleAmount = (amount: number): string =>
  `${SAMPLE_CURRENCY} ${amount.toFixed(2)}`;

export interface BookingTotals {
  servicePrice: number;
  platformFee: number;
  tax: number;
  totalPrice: number;
}

export const calculateBookingTotals = (servicePrice: number): BookingTotals => {
  const tax = Number(((servicePrice + PLATFORM_FEE) * TAX_RATE).toFixed(2));

  return {
    servicePrice,
    platformFee: PLATFORM_FEE,
    tax,
    totalPrice: Number((servicePrice + PLATFORM_FEE + tax).toFixed(2))
  };
};

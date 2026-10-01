import React, { useState } from 'react';
import { ScreenId, BookingState } from '../../types';
import { PROFIX_IMAGES } from '../../data/services';
import { calculateBookingTotals } from '../../data/pricing';

interface CheckoutScreenProps {
  onNavigate: (screen: ScreenId) => void;
  booking: BookingState;
  onUpdateBooking: (updated: Partial<BookingState>) => void;
  onCompletePayment: (completedBooking: BookingState) => void;
}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({
  onNavigate,
  booking,
  onUpdateBooking,
  onCompletePayment
}) => {
  const dates = Array.from({ length: 6 }, (_, offset) => {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() + offset);
    const value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return {
      value,
      month: new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date).toUpperCase(),
      day: String(date.getDate()),
      label: offset === 0 ? 'Today' : new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date)
    };
  });
  const [selectedDate, setSelectedDate] = useState(booking.date || dates[0].value);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(booking.timeSlot || '11:30 AM');
  const [streetAddress, setStreetAddress] = useState(booking.address.street || '');
  const [apt, setApt] = useState(booking.address.apartment || '');
  const [zip, setZip] = useState(booking.address.zipCode || '');
  const [instructions, setInstructions] = useState(booking.address.instructions || '');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'gpay' | 'whatsapp'>(booking.paymentMethod || 'card');
  const [processing, setProcessing] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const timeSlots = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

  // Calculations
  const { servicePrice: basePrice, platformFee: serviceFee, tax, total } = calculateBookingTotals(booking.price);

  const handleConfirmAndPay = () => {
    if (!streetAddress.trim() || !/^\d{5}$/.test(zip.trim())) {
      setFormError('Enter a street address and a valid 5-digit ZIP code to continue.');
      return;
    }

    setFormError(null);
    setProcessing(true);
    const finalBooking: BookingState = {
      ...booking,
      orderId: booking.orderId || `DEMO-PF-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(`${selectedDate}T12:00:00`)),
      timeSlot: selectedTimeSlot,
      address: {
        ...booking.address,
        street: streetAddress.trim(),
        apartment: apt.trim(),
        zipCode: zip.trim(),
        instructions: instructions.trim()
      },
      paymentMethod,
      paymentStatus: 'simulation',
      serviceFee,
      tax,
      total,
      paidAt: ''
    };

    setTimeout(() => {
      onCompletePayment(finalBooking);
      setProcessing(false);
      onNavigate('confirmation');
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen py-10 px-4 md:px-16 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left Column: Progress & Forms */}
        <div className="lg:col-span-8 space-y-12">
          {/* Stepper */}
          <div className="flex items-center justify-between max-w-2xl">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0058bf] text-white font-bold text-sm shadow">
                1
              </div>
              <span className="text-xs font-bold text-[#0058bf]">Summary</span>
            </div>
            <div className="flex-1 h-0.5 mx-3 sm:mx-4 bg-[#0058bf]/40 mb-5"></div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#0058bf] text-[#0058bf] font-bold text-sm bg-[#d8e2ff]/30">
                2
              </div>
              <span className="text-xs font-bold text-[#0058bf]">Schedule</span>
            </div>
            <div className="flex-1 h-0.5 mx-3 sm:mx-4 bg-[#c8c5cd]/40 mb-5"></div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#78767d] text-[#78767d] font-bold text-sm">
                3
              </div>
              <span className="text-xs font-semibold text-[#78767d]">Address</span>
            </div>
            <div className="flex-1 h-0.5 mx-3 sm:mx-4 bg-[#c8c5cd]/40 mb-5"></div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#78767d] text-[#78767d] font-bold text-sm">
                4
              </div>
              <span className="text-xs font-semibold text-[#78767d]">Payment</span>
            </div>
          </div>

          {/* Form Section 1: Service Summary */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00000b]">Service Summary</h2>
            <div className="bg-white border border-[#c8c5cd]/50 p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col sm:flex-row items-start gap-6 hover:border-[#0058bf] transition-all">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#eeeeee] shrink-0 border border-[#c8c5cd]/30">
                <img
                  src={booking.serviceImage || PROFIX_IMAGES.checkoutEquipment}
                  alt={booking.serviceTitle}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-[#00000b]">
                      {booking.serviceTitle || 'AC Deep Cleaning'}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#47464c] mt-1">
                      {booking.serviceSubtitle || 'Full chemical sanitation and filter replacement.'}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-[#0058bf]">
                      ${basePrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 bg-[#d8e2ff] text-[#001a42] font-semibold text-xs rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      verified
                    </span>
                    Professional
                  </span>
                  <span className="text-xs text-[#78767d]">
                    Estimated: {booking.serviceId === 'ac-deep-cleaning' ? '90 mins' : '60 mins'}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Form Section 2: Schedule Selection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00000b]">Schedule Selection</h2>
            <div className="bg-white border border-[#c8c5cd]/50 p-6 sm:p-8 rounded-2xl shadow-sm space-y-8">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#00000b] block mb-4">
                  Select Date
                </label>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {dates.map((d) => {
                    const isSelected = selectedDate === d.value;
                    return (
                      <button
                        key={d.day}
                        onClick={() => setSelectedDate(d.value)}
                        className={`shrink-0 w-24 h-24 rounded-2xl flex flex-col items-center justify-center transition-all ${
                          isSelected
                            ? 'border-2 border-[#0058bf] bg-[#d8e2ff]/40 shadow-sm'
                            : 'border border-[#c8c5cd] hover:border-[#0058bf] bg-white'
                        }`}
                      >
                        <span className="text-[11px] font-bold text-[#78767d] uppercase">{d.month}</span>
                        <span className={`text-2xl font-extrabold my-0.5 ${isSelected ? 'text-[#0058bf]' : 'text-[#00000b]'}`}>
                          {d.day}
                        </span>
                        <span className={`text-xs font-semibold ${isSelected ? 'text-[#0058bf]' : 'text-[#78767d]'}`}>
                          {d.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#00000b] block mb-4">
                  Select Time Slot
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {timeSlots.map((ts) => {
                    const isSelected = selectedTimeSlot === ts;
                    return (
                      <button
                        key={ts}
                        onClick={() => setSelectedTimeSlot(ts)}
                        className={`py-3.5 rounded-xl text-center text-xs font-bold transition-all ${
                          isSelected
                            ? 'border-2 border-[#0058bf] bg-[#d8e2ff]/40 text-[#0058bf] shadow-sm'
                            : 'border border-[#c8c5cd] text-[#1a1c1c] hover:border-[#0058bf]'
                        }`}
                      >
                        {ts}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Form Section 3: Service Address */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00000b]">Service Address</h2>
            <div className="bg-white border border-[#c8c5cd]/50 p-6 sm:p-8 rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2 space-y-1.5">
                <label htmlFor="checkout-street" className="text-xs font-bold uppercase tracking-wider text-[#00000b]">Street Address</label>
                <input
                  id="checkout-street"
                  type="text"
                  required
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  placeholder="House number and street name (e.g. 742 Evergreen Terrace)"
                  className="w-full p-4 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-sm focus:border-[#0058bf] focus:ring-1 focus:ring-[#0058bf] outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="checkout-apartment" className="text-xs font-bold uppercase tracking-wider text-[#00000b]">Apartment / Suite</label>
                <input
                  id="checkout-apartment"
                  type="text"
                  value={apt}
                  onChange={(e) => setApt(e.target.value)}
                  placeholder="e.g. Apt 4B"
                  className="w-full p-4 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-sm focus:border-[#0058bf] focus:ring-1 focus:ring-[#0058bf] outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="checkout-zip" className="text-xs font-bold uppercase tracking-wider text-[#00000b]">Zip Code</label>
                <input
                  id="checkout-zip"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{5}"
                  maxLength={5}
                  required
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="10001"
                  className="w-full p-4 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-sm focus:border-[#0058bf] focus:ring-1 focus:ring-[#0058bf] outline-none transition-all"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label htmlFor="checkout-instructions" className="text-xs font-bold uppercase tracking-wider text-[#00000b]">Special Instructions</label>
                <textarea
                  id="checkout-instructions"
                  rows={3}
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="Access codes, parking info, pet on premises, etc."
                  className="w-full p-4 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-sm focus:border-[#0058bf] focus:ring-1 focus:ring-[#0058bf] outline-none transition-all resize-none"
                />
              </div>
            </div>
          </section>

          {/* Form Section 4: Payment Method */}
          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 id="payment-method-heading" className="text-2xl font-bold text-[#00000b]">Payment Method (Prototype)</h2>
              <p className="text-xs text-[#47464c]">Demo only. No payment is processed.</p>
            </div>

              <div role="radiogroup" aria-labelledby="payment-method-heading" className="space-y-3">
              {/* Option 1: Credit / Debit Card */}
              <label
                className={`flex items-center justify-between p-5 bg-white border rounded-2xl cursor-pointer transition-all ${
                  paymentMethod === 'card'
                    ? 'border-[#0058bf] bg-[#d8e2ff]/20 shadow-sm'
                    : 'border-[#c8c5cd]/50 hover:border-[#0058bf]'
                }`}
              >
                <input className="sr-only" type="radio" name="payment-method" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#1a1a2e] rounded-xl flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-xl">credit_card</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#00000b]">Credit or Debit Card</div>
                    <div className="text-xs text-[#78767d]">Ending in 4242 (Visa/Mastercard)</div>
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'card' ? 'border-[#0058bf]' : 'border-[#c8c5cd]'
                  }`}
                >
                  {paymentMethod === 'card' && <div className="w-3 h-3 bg-[#0058bf] rounded-full"></div>}
                </div>
              </label>

              {/* Option 2: Google Pay */}
              <label
                className={`flex items-center justify-between p-5 bg-white border rounded-2xl cursor-pointer transition-all ${
                  paymentMethod === 'gpay'
                    ? 'border-[#0058bf] bg-[#d8e2ff]/20 shadow-sm'
                    : 'border-[#c8c5cd]/50 hover:border-[#0058bf]'
                }`}
              >
                <input className="sr-only" type="radio" name="payment-method" value="gpay" checked={paymentMethod === 'gpay'} onChange={() => setPaymentMethod('gpay')} />
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#00000b] rounded-xl flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-xl">wallet</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#00000b]">Google Pay</div>
                    <div className="text-xs text-[#78767d]">Quick 1-tap checkout</div>
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'gpay' ? 'border-[#0058bf]' : 'border-[#c8c5cd]'
                  }`}
                >
                  {paymentMethod === 'gpay' && <div className="w-3 h-3 bg-[#0058bf] rounded-full"></div>}
                </div>
              </label>

              {/* Option 3: WhatsApp Pay */}
              <label
                className={`flex items-center justify-between p-5 bg-white border rounded-2xl cursor-pointer transition-all ${
                  paymentMethod === 'whatsapp'
                    ? 'border-[#0058bf] bg-[#d8e2ff]/20 shadow-sm'
                    : 'border-[#c8c5cd]/50 hover:border-[#0058bf]'
                }`}
              >
                <input className="sr-only" type="radio" name="payment-method" value="whatsapp" checked={paymentMethod === 'whatsapp'} onChange={() => setPaymentMethod('whatsapp')} />
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-xl">chat</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#00000b]">WhatsApp Pay</div>
                    <div className="text-xs text-[#78767d]">Pay via chat link upon arrival</div>
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'whatsapp' ? 'border-[#0058bf]' : 'border-[#c8c5cd]'
                  }`}
                >
                  {paymentMethod === 'whatsapp' && <div className="w-3 h-3 bg-[#0058bf] rounded-full"></div>}
                </div>
              </label>
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Summary & Guarantees */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-6">
          <div className="bg-[#1a1a2e] p-6 sm:p-8 rounded-3xl text-white shadow-xl border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-white">Order Summary</h3>

            <div className="space-y-4 pb-6 border-b border-white/15 text-sm">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-white">{booking.serviceTitle || 'AC Deep Cleaning'}</div>
                  <div className="text-xs text-[#83829b]">Standard Residential Unit</div>
                </div>
                <span className="font-bold text-white">${basePrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center text-[#83829b]">
                <span>Service Fee</span>
                <span className="text-white">${serviceFee.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center text-[#83829b]">
                <span>Tax (8%)</span>
                <span className="text-white">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="pt-6 space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-lg font-bold text-white">Total</span>
                <span className="text-3xl font-extrabold text-[#aec6ff]">${total.toFixed(2)}</span>
              </div>

              <div className="bg-white/10 p-4 rounded-xl flex items-start gap-3">
                <span className="material-symbols-outlined text-[#aec6ff] text-xl shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <p className="text-xs text-[#83829b] leading-relaxed">
                  <strong className="text-white font-semibold">Prototype estimate.</strong> This sample amount and these payment options are not connected to a provider. No charge will be made.
                </p>
              </div>

              {formError && <p role="alert" className="text-sm text-rose-200">{formError}</p>}

              <button
                disabled={processing}
                onClick={handleConfirmAndPay}
                className="w-full py-4 bg-[#0058bf] hover:bg-[#004396] text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 disabled:opacity-70"
              >
                {processing ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                    Saving Demo Booking...
                  </>
                ) : (
                  <>
                    Submit Demo Booking
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </>
                )}
              </button>

            </div>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#c8c5cd]/40 text-xs text-[#47464c]">
            Sample service details and prices must be confirmed with a local provider before real use or participant testing.
          </div>
        </aside>
      </div>
    </div>
  );
};

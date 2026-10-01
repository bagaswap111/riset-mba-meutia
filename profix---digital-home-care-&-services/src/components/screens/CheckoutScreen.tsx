import React, { useState } from 'react';
import { ScreenId, BookingState } from '../../types';
import { PROFIX_IMAGES } from '../../data/services';

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
  const [selectedDate, setSelectedDate] = useState('OCT 24');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('11:30 AM');
  const [streetAddress, setStreetAddress] = useState(booking.address.street || '');
  const [apt, setApt] = useState(booking.address.apartment || '');
  const [zip, setZip] = useState(booking.address.zipCode || '10001');
  const [instructions, setInstructions] = useState(booking.address.instructions || '');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'gpay' | 'whatsapp'>(booking.paymentMethod || 'card');
  const [processing, setProcessing] = useState(false);

  const dates = [
    { month: 'OCT', day: '24', label: 'Today' },
    { month: 'OCT', day: '25', label: 'Fri' },
    { month: 'OCT', day: '26', label: 'Sat' },
    { month: 'OCT', day: '27', label: 'Sun' },
    { month: 'OCT', day: '28', label: 'Mon' },
    { month: 'OCT', day: '29', label: 'Tue' }
  ];

  const timeSlots = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

  // Calculations
  const basePrice = booking.price || 55.0;
  const serviceFee = 4.5;
  const tax = Number((basePrice * 0.08).toFixed(2));
  const total = Number((basePrice + serviceFee + tax).toFixed(2));

  const handleConfirmAndPay = () => {
    setProcessing(true);
    const finalBooking: BookingState = {
      ...booking,
      orderId: booking.orderId || `#PF-${Math.floor(100000 + Math.random() * 900000)}`,
      date: `${selectedDate}, 2023`,
      timeSlot: selectedTimeSlot,
      address: {
        street: streetAddress || '452 Broadway Ave',
        apartment: apt || 'Apt 4B',
        zipCode: zip || '10001',
        instructions: instructions || 'Ring bell #4'
      },
      paymentMethod,
      serviceFee,
      tax,
      total,
      paidAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
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
                    const isSelected = selectedDate === `${d.month} ${d.day}`;
                    return (
                      <button
                        key={d.day}
                        onClick={() => setSelectedDate(`${d.month} ${d.day}`)}
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
                <label className="text-xs font-bold uppercase tracking-wider text-[#00000b]">Street Address</label>
                <input
                  type="text"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  placeholder="House number and street name (e.g. 742 Evergreen Terrace)"
                  className="w-full p-4 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-sm focus:border-[#0058bf] focus:ring-1 focus:ring-[#0058bf] outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#00000b]">Apartment / Suite</label>
                <input
                  type="text"
                  value={apt}
                  onChange={(e) => setApt(e.target.value)}
                  placeholder="e.g. Apt 4B"
                  className="w-full p-4 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-sm focus:border-[#0058bf] focus:ring-1 focus:ring-[#0058bf] outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#00000b]">Zip Code</label>
                <input
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="10001"
                  className="w-full p-4 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-sm focus:border-[#0058bf] focus:ring-1 focus:ring-[#0058bf] outline-none transition-all"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#00000b]">Special Instructions</label>
                <textarea
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
              <h2 className="text-2xl font-bold text-[#00000b]">Payment Method</h2>
              <div className="flex items-center gap-1.5 text-xs text-[#0058bf] font-semibold">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  lock
                </span>
                Secure SSL Encrypted
              </div>
            </div>

            <div className="space-y-3">
              {/* Option 1: Credit / Debit Card */}
              <div
                onClick={() => setPaymentMethod('card')}
                className={`flex items-center justify-between p-5 bg-white border rounded-2xl cursor-pointer transition-all ${
                  paymentMethod === 'card'
                    ? 'border-[#0058bf] bg-[#d8e2ff]/20 shadow-sm'
                    : 'border-[#c8c5cd]/50 hover:border-[#0058bf]'
                }`}
              >
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
              </div>

              {/* Option 2: Google Pay */}
              <div
                onClick={() => setPaymentMethod('gpay')}
                className={`flex items-center justify-between p-5 bg-white border rounded-2xl cursor-pointer transition-all ${
                  paymentMethod === 'gpay'
                    ? 'border-[#0058bf] bg-[#d8e2ff]/20 shadow-sm'
                    : 'border-[#c8c5cd]/50 hover:border-[#0058bf]'
                }`}
              >
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
              </div>

              {/* Option 3: WhatsApp Pay */}
              <div
                onClick={() => setPaymentMethod('whatsapp')}
                className={`flex items-center justify-between p-5 bg-white border rounded-2xl cursor-pointer transition-all ${
                  paymentMethod === 'whatsapp'
                    ? 'border-[#0058bf] bg-[#d8e2ff]/20 shadow-sm'
                    : 'border-[#c8c5cd]/50 hover:border-[#0058bf]'
                }`}
              >
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
              </div>
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
                  <strong className="text-white font-semibold">No Hidden Fees Guarantee.</strong> The price you see is exactly what you pay. Any onsite adjustments require your digital signature.
                </p>
              </div>

              <button
                disabled={processing}
                onClick={handleConfirmAndPay}
                className="w-full py-4 bg-[#0058bf] hover:bg-[#004396] text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 disabled:opacity-70"
              >
                {processing ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                    Processing Secure Payment...
                  </>
                ) : (
                  <>
                    Confirm and Pay
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </>
                )}
              </button>

              {/* Payment brand badges */}
              <div className="flex justify-center items-center gap-6 pt-2 opacity-60">
                <span className="text-xs tracking-widest font-mono font-bold text-white/80">VISA</span>
                <span className="text-xs tracking-widest font-mono font-bold text-white/80">MASTERCARD</span>
                <span className="text-xs tracking-widest font-mono font-bold text-white/80">AMEX</span>
                <span className="text-xs tracking-widest font-mono font-bold text-white/80">APPLE PAY</span>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-[#c8c5cd]/40 flex flex-col items-center text-center gap-2 shadow-xs">
              <span className="material-symbols-outlined text-[#0058bf] text-3xl">shield</span>
              <div className="text-xs font-bold text-[#00000b]">Insured Work</div>
              <div className="text-[11px] text-[#78767d]">$1M coverage</div>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-[#c8c5cd]/40 flex flex-col items-center text-center gap-2 shadow-xs">
              <span className="material-symbols-outlined text-[#0058bf] text-3xl">workspace_premium</span>
              <div className="text-xs font-bold text-[#00000b]">Top 1% Pros</div>
              <div className="text-[11px] text-[#78767d]">Strictly vetted</div>
            </div>
          </div>

          {/* Heuristic Evaluation Panel (Image 11 & Image 18) */}
          <div className="bg-[#f3f3f3] p-6 rounded-2xl border border-[#c8c5cd]/40 space-y-4">
            <div className="flex items-center gap-2 text-[#0058bf]">
              <span className="material-symbols-outlined text-xl">psychology</span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#00000b]">
                Heuristic Evaluation
              </h4>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex items-center gap-1.5 font-bold text-[#00000b]">
                  <span className="material-symbols-outlined text-sm text-[#0058bf]">check_circle</span>
                  User Control & Freedom
                </div>
                <p className="text-[#47464c] mt-0.5 leading-relaxed">
                  Multi-step progress bar allows users to track and navigate their booking journey easily.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 font-bold text-[#00000b]">
                  <span className="material-symbols-outlined text-sm text-[#0058bf]">check_circle</span>
                  Error Prevention
                </div>
                <p className="text-[#47464c] mt-0.5 leading-relaxed">
                  Clear input labels and specific placeholders guide users to provide correct data.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 font-bold text-[#00000b]">
                  <span className="material-symbols-outlined text-sm text-[#0058bf]">check_circle</span>
                  Visibility of System Status
                </div>
                <p className="text-[#47464c] mt-0.5 leading-relaxed">
                  Real-time order summary updates ensure users always know the final cost before payment.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

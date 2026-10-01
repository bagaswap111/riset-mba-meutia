import React, { useState } from 'react';
import { ScreenType, BookingState } from '../types';
import { IMAGES, SERVICES, BOOKING_SLOTS } from '../data/mockData';
import { calculateBookingTotals, formatSampleAmount } from '../data/pricing';

interface CheckoutScreenProps {
  booking: BookingState;
  onUpdateBooking: (updates: Partial<BookingState>) => void;
  onNavigate: (screen: ScreenType) => void;
}

const CHECKOUT_STEPS = [
  { id: 'summary', label: 'Ringkasan' },
  { id: 'schedule', label: 'Jadwal' },
  { id: 'address', label: 'Alamat' },
  { id: 'payment', label: 'Bayar' }
] as const;

type CheckoutStepId = (typeof CHECKOUT_STEPS)[number]['id'];

interface FieldErrors {
  schedule?: string;
  address?: string;
  postalCode?: string;
  postalTruncated?: boolean;
}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({
  booking,
  onUpdateBooking,
  onNavigate
}) => {
  const [selectedDate, setSelectedDate] = useState<string>(booking.selectedDate || '');
  const [selectedSlot, setSelectedSlot] = useState<string>(booking.selectedTimeSlot || '');
  const [address, setAddress] = useState(booking.streetAddress || '');
  const [unit, setUnit] = useState(booking.unit || '');
  const [postal, setPostal] = useState(booking.postalCode || '');
  const [notes, setNotes] = useState(booking.instructions || '');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'gpay'>(booking.paymentMethod || 'card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const selectedService = SERVICES.find((service) => service.id === booking.serviceId) || SERVICES[0];

  const dates = Array.from({ length: 5 }, (_, offset) => {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() + offset);
    const value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return {
      value,
      day: String(date.getDate()),
      month: new Intl.DateTimeFormat('id-ID', { month: 'short' }).format(date).replace('.', '').toUpperCase(),
      label: offset === 0 ? 'Hari ini' : new Intl.DateTimeFormat('id-ID', { weekday: 'short' }).format(date)
    };
  });

  const slots = BOOKING_SLOTS;

  const servicePrice = booking.servicePrice;
  const { platformFee, tax, totalPrice: total } = calculateBookingTotals(servicePrice);

  const isScheduleComplete = Boolean(selectedDate && selectedSlot);
  const isAddressComplete = Boolean(address.trim() && /^\d{5}$/.test(postal.trim()));
  const stepCompletion: Record<CheckoutStepId, boolean> = {
    summary: true,
    schedule: isScheduleComplete,
    address: isAddressComplete,
    payment: false
  };

  const handleConfirmAndPay = () => {
    const errors: FieldErrors = {};
    if (!selectedDate || !selectedSlot) {
      errors.schedule = 'Pilih tanggal dan slot waktu layanan.';
    }
    if (!address.trim()) {
      errors.address = 'Alamat jalan wajib diisi.';
    }
    if (!/^\d{5}$/.test(postal.trim())) {
      errors.postalCode = 'Kode pos harus terdiri dari 5 digit angka.';
    }

    setFieldErrors(errors);
    setFormError(null);

    if (Object.keys(errors).length > 0) {
      setFormError('Periksa kembali bagian yang ditandai sebelum melanjutkan.');
      const firstInvalid = errors.schedule
        ? 'checkout-date-first'
        : errors.address
          ? 'service-address'
          : 'service-postal-code';
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setIsProcessing(true);
    onUpdateBooking({
      selectedDate: new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${selectedDate}T12:00:00`)),
      selectedTimeSlot: selectedSlot,
      streetAddress: address,
      unit,
      postalCode: postal,
      instructions: notes,
      paymentMethod,
      paymentStatus: 'simulation',
      totalPrice: total,
      serviceFee: platformFee,
      tax
    });

    setTimeout(() => {
      setIsProcessing(false);
      onNavigate('confirmation');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] pt-6 pb-28">
      <main className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Progress & Forms */}
          <div className="lg:col-span-8 space-y-12">
            {/* Stepper Roadmap */}
            <ol className="flex items-center max-w-xl bg-white p-5 rounded-2xl border border-[#c8c5cd]/30 shadow-sm">
              {CHECKOUT_STEPS.map((step, index) => {
                const isComplete = stepCompletion[step.id];
                const isCurrent = !isComplete && CHECKOUT_STEPS.slice(0, index).every((s) => stepCompletion[s.id]);

                return (
                  <li key={step.id} className="flex items-center flex-1 last:flex-none">
                    <div className="flex flex-col items-center gap-1.5">
                      <div
                        aria-hidden="true"
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-md ${
                          isComplete
                            ? 'bg-[#0058bf] text-white'
                            : isCurrent
                              ? 'bg-white border-2 border-[#0058bf] text-[#0058bf]'
                              : 'bg-white border-2 border-[#c8c5cd] text-[#78767d]'
                        }`}
                      >
                        {isComplete ? (
                          <span className="material-symbols-outlined text-[16px]">check</span>
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider ${
                          isComplete || isCurrent ? 'text-[#0058bf]' : 'text-[#78767d]'
                        }`}
                      >
                        {step.label}
                      </span>
                      <span className="sr-only">
                        {isComplete
                          ? 'Langkah selesai'
                          : isCurrent
                            ? 'Langkah saat ini'
                            : 'Langkah belum dimulai'}
                      </span>
                    </div>
                    {index < CHECKOUT_STEPS.length - 1 && (
                      <div
                        aria-hidden="true"
                        className={`flex-1 h-0.5 mx-2 ${
                          isComplete ? 'bg-[#0058bf]/40' : 'bg-[#c8c5cd]'
                        }`}
                      />
                    )}
                  </li>
                );
              })}
            </ol>

            {/* Section 1: Ringkasan Layanan */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#00000b]">Ringkasan Layanan</h2>
              <div className="bg-white border border-[#c8c5cd]/40 p-6 md:p-8 rounded-2xl shadow-sm flex items-start gap-5 hover:border-[#0058bf] transition-all">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#e2e2e2] shrink-0 border border-[#c8c5cd]/30">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-[#00000b]">{booking.serviceTitle || 'Pembersihan AC Mendalam'}</h3>
                      <p className="text-xs text-[#47464c] mt-0.5">{selectedService.description}</p>
                    </div>
                    <span className="text-xl font-bold text-[#0058bf]">{formatSampleAmount(servicePrice)}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="px-3 py-1 bg-[#d8e2ff] text-[#001a42] text-[11px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                      Data layanan contoh
                    </span>
                    <span className="text-xs text-[#78767d]">Estimasi: {selectedService.estimatedMinutes || 60} menit</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Pilih Jadwal */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#00000b]">Pilih Jadwal</h2>
              <div className="bg-white border border-[#c8c5cd]/40 p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
                <div className="space-y-2">
                  <p id="checkout-date-label" className="text-xs font-bold uppercase tracking-wider text-[#00000b]">
                    Pilih Tanggal
                  </p>
                  <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                    {dates.map((d, dateIndex) => (
                      <button
                        key={d.value}
                        id={dateIndex === 0 ? 'checkout-date-first' : undefined}
                        type="button"
                        aria-pressed={selectedDate === d.value}
                        aria-describedby={fieldErrors.schedule ? 'checkout-schedule-error' : undefined}
                        onClick={() => {
                          setSelectedDate(d.value);
                          setFieldErrors((prev) => ({ ...prev, schedule: undefined }));
                        }}
                        className={`shrink-0 w-24 h-24 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                          selectedDate === d.value
                            ? 'border-2 border-[#0058bf] bg-[#d8e2ff]/30 shadow-sm'
                            : 'border border-[#c8c5cd] hover:border-[#0058bf] bg-white'
                        }`}
                      >
                        <span className="text-[10px] uppercase font-bold text-[#78767d]">{d.month}</span>
                        <span className={`text-2xl font-bold ${selectedDate === d.value ? 'text-[#0058bf]' : 'text-[#00000b]'}`}>
                          {d.day}
                        </span>
                        <span className={`text-[11px] font-medium ${selectedDate === d.value ? 'text-[#0058bf] font-bold' : 'text-[#47464c]'}`}>
                          {d.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#00000b]">
                    Pilih Slot Waktu
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {slots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        aria-pressed={selectedSlot === slot}
                        onClick={() => {
                          setSelectedSlot(slot);
                          setFieldErrors((prev) => ({ ...prev, schedule: undefined }));
                        }}
                        className={`py-3.5 px-4 rounded-xl text-center text-xs font-bold transition-all cursor-pointer ${
                          selectedSlot === slot
                            ? 'border-2 border-[#0058bf] bg-[#d8e2ff]/30 text-[#0058bf] shadow-sm'
                            : 'border border-[#c8c5cd] text-[#1a1c1c] hover:border-[#0058bf] bg-white'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {fieldErrors.schedule && (
                  <p id="checkout-schedule-error" role="alert" className="text-xs text-rose-700">
                    {fieldErrors.schedule}
                  </p>
                )}
              </div>
            </section>

            {/* Section 3: Alamat Layanan */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#00000b]">Alamat Layanan</h2>
              <div className="bg-white border border-[#c8c5cd]/40 p-6 md:p-8 rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2 space-y-1.5">
                  <label htmlFor="service-address" className="text-xs font-bold uppercase tracking-wider text-[#00000b]">
                    Alamat Jalan
                  </label>
                  <input
                    id="service-address"
                    type="text"
                    required
                    value={address}
                    aria-invalid={Boolean(fieldErrors.address)}
                    aria-describedby={fieldErrors.address ? 'service-address-error' : undefined}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      setFieldErrors((prev) => ({ ...prev, address: undefined }));
                    }}
                    placeholder="Nomor rumah dan nama jalan"
                    className={`w-full p-3.5 bg-[#f9f9f9] border rounded-xl text-xs text-[#1a1c1c] focus:outline-none focus:border-[#0058bf] focus:bg-white transition-all ${
                      fieldErrors.address ? 'border-rose-500' : 'border-[#c8c5cd]'
                    }`}
                  />
                  {fieldErrors.address && (
                    <p id="service-address-error" role="alert" className="text-xs text-rose-700">
                      {fieldErrors.address}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="service-unit" className="text-xs font-bold uppercase tracking-wider text-[#00000b]">
                    Apartemen / Suite
                  </label>
                  <input
                    id="service-unit"
                    type="text"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    placeholder="misalnya Apt 4B"
                    className="w-full p-3.5 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-xs text-[#1a1c1c] focus:outline-none focus:border-[#0058bf] focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="service-postal-code" className="text-xs font-bold uppercase tracking-wider text-[#00000b]">
                    Kode Pos
                  </label>
                  <input
                    id="service-postal-code"
                    type="text"
                    inputMode="numeric"
                    required
                    value={postal}
                    aria-invalid={Boolean(fieldErrors.postalCode)}
                    aria-describedby={
                      fieldErrors.postalCode
                        ? 'service-postal-code-error'
                        : fieldErrors.postalTruncated
                          ? 'service-postal-code-truncated'
                          : 'service-postal-code-hint'
                    }
                    onChange={(e) => {
                      const rawDigits = e.target.value.replace(/\D/g, '');
                      if (rawDigits.length > 5) {
                        setFieldErrors((prev) => ({ ...prev, postalTruncated: true }));
                        setPostal(rawDigits.slice(0, 5));
                        return;
                      }
                      if (/^\d{5}$/.test(rawDigits)) {
                        setFieldErrors((prev) => ({ ...prev, postalCode: undefined }));
                      }
                      if (fieldErrors.postalTruncated) {
                        setFieldErrors((prev) => ({ ...prev, postalTruncated: undefined }));
                      }
                      setPostal(rawDigits);
                    }}
                    placeholder="12345"
                    className={`w-full p-3.5 bg-[#f9f9f9] border rounded-xl text-xs text-[#1a1c1c] focus:outline-none focus:border-[#0058bf] focus:bg-white transition-all ${
                      fieldErrors.postalCode || fieldErrors.postalTruncated
                        ? 'border-amber-500'
                        : 'border-[#c8c5cd]'
                    }`}
                  />
                  {fieldErrors.postalCode ? (
                    <p id="service-postal-code-error" role="alert" className="text-xs text-rose-700">
                      {fieldErrors.postalCode}
                    </p>
                  ) : fieldErrors.postalTruncated ? (
                    <p id="service-postal-code-truncated" role="alert" className="text-xs text-amber-700">
                      Kode pos dipotong menjadi lima digit pertama.
                    </p>
                  ) : (
                    <p id="service-postal-code-hint" className="text-[11px] text-[#78767d]">
                      Lima digit angka.
                    </p>
                  )}
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label htmlFor="service-instructions" className="text-xs font-bold uppercase tracking-wider text-[#00000b]">
                    Instruksi Khusus
                  </label>
                  <textarea
                    id="service-instructions"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Kode akses, info parkir, dll."
                    className="w-full p-3.5 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-xs text-[#1a1c1c] focus:outline-none focus:border-[#0058bf] focus:bg-white transition-all"
                  />
                </div>
              </div>
            </section>

            {/* Section 4: Metode Pembayaran */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 id="payment-method-heading" className="text-2xl font-bold tracking-tight text-[#00000b]">Metode Pembayaran (Simulasi)</h2>
                <div className="flex items-center gap-1.5 text-xs text-[#0058bf] font-bold">
                  <span className="material-symbols-outlined text-base">lock</span>
                  Simulasi saja · tidak ada pembayaran
                </div>
              </div>

              <div role="radiogroup" aria-labelledby="payment-method-heading" className="space-y-3">
                {/* Option 1: Card */}
                <label
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between focus-within:ring-2 focus-within:ring-[#0058bf] focus-within:ring-offset-2 focus-within:ring-offset-white ${
                    paymentMethod === 'card'
                      ? 'border-[#0058bf] bg-[#d8e2ff]/20 shadow-sm'
                      : 'border-[#c8c5cd]/40 bg-white hover:border-[#0058bf]/50'
                  }`}
                >
                  <input className="sr-only" type="radio" name="payment-method" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-[#001a42] text-white rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">credit_card</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#00000b]">Kartu Kredit atau Debit</div>
                      <div className="text-xs text-[#78767d]">Kartu contoh · tidak ditagih</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'card' ? 'border-[#0058bf]' : 'border-[#c8c5cd]'
                  }`}>
                    {paymentMethod === 'card' && <div className="w-2.5 h-2.5 rounded-full bg-[#0058bf]"></div>}
                  </div>
                </label>

                {/* Option 2: Google Pay */}
                <label
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between focus-within:ring-2 focus-within:ring-[#0058bf] focus-within:ring-offset-2 focus-within:ring-offset-white ${
                    paymentMethod === 'gpay'
                      ? 'border-[#0058bf] bg-[#d8e2ff]/20 shadow-sm'
                      : 'border-[#c8c5cd]/40 bg-white hover:border-[#0058bf]/50'
                  }`}
                >
                  <input className="sr-only" type="radio" name="payment-method" value="gpay" checked={paymentMethod === 'gpay'} onChange={() => setPaymentMethod('gpay')} />
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-white border border-[#c8c5cd] rounded-xl flex items-center justify-center p-2">
                      <img src={IMAGES.googleLogo} alt="Google Pay" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#00000b]">Google Pay</div>
                      <div className="text-xs text-[#78767d]">Pilihan demo · belum terhubung</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'gpay' ? 'border-[#0058bf]' : 'border-[#c8c5cd]'
                  }`}>
                    {paymentMethod === 'gpay' && <div className="w-2.5 h-2.5 rounded-full bg-[#0058bf]"></div>}
                  </div>
                </label>
              </div>

              <p className="text-xs text-[#47464c] leading-relaxed">
                Kedua metode di atas hanya dipilih untuk menguji alur pemesanan. Prototipe tidak
                meminta data kartu dan tidak memproses pembayaran apa pun.
              </p>

              <div className="p-4 bg-white border border-[#c8c5cd]/40 rounded-xl flex items-start gap-3">
                <span className="material-symbols-outlined text-[#25D366] text-lg shrink-0 mt-0.5">chat</span>
                <div className="text-xs text-[#47464c] leading-relaxed">
                  <strong className="text-[#00000b]">Ingin memesan lewat WhatsApp?</strong> WhatsApp
                  adalah jalur kontak dan konfirmasi pemesanan, bukan metode pembayaran di prototipe
                  ini. Nomor mitra belum dikonfirmasikan sehingga tombol kontak belum aktif.
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Order Total & Sticky Checkout CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="bg-[#1a1a2e] text-white p-7 rounded-3xl shadow-xl space-y-6">
                <h3 className="text-xl font-bold tracking-tight">Ringkasan Simulasi</h3>

                <div className="space-y-4 pb-6 border-b border-white/10 text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-white text-sm">{booking.serviceTitle || 'Pembersihan AC Mendalam'}</div>
                      <div className="text-[#83829b]">Item contoh · detail mitra belum diverifikasi</div>
                    </div>
                    <span className="font-bold text-white text-sm">{formatSampleAmount(servicePrice)}</span>
                  </div>

                  <div className="flex justify-between text-[#83829b]">
                    <span>Biaya platform (contoh)</span>
                    <span>{formatSampleAmount(platformFee)}</span>
                  </div>

                  <div className="flex justify-between text-[#83829b]">
                    <span>Pajak simulasi</span>
                    <span>{formatSampleAmount(tax)}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-white">Total simulasi</span>
                    <span className="text-3xl font-bold text-[#aec6ff]">{formatSampleAmount(total)}</span>
                  </div>

                  {/* Trust highlight box */}
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#aec6ff] text-lg shrink-0 mt-0.5">verified</span>
                    <p className="text-[11px] text-[#c6c4df] leading-relaxed">
                      <strong className="text-white">Simulasi prototipe.</strong> Nilai dan metode pembayaran belum terhubung ke mitra; tidak ada biaya yang akan diproses.
                    </p>
                  </div>

                  {formError && (
                    <p role="alert" className="text-sm text-rose-200">
                      {formError}
                    </p>
                  )}

                  {/* Primary CTA */}
                  <button
                    onClick={handleConfirmAndPay}
                    disabled={isProcessing}
                    className="w-full py-4 bg-[#0058bf] hover:bg-[#006fef] disabled:opacity-50 text-white rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-[#0058bf]/30 cursor-pointer"
                  >
                    {isProcessing ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                        Memproses Pesanan...
                      </span>
                    ) : (
                      <>
                        <span>Konfirmasi Simulasi</span>
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </>
                    )}
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

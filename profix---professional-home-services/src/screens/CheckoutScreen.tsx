import React, { useState } from 'react';
import { ScreenType, BookingState } from '../types';
import { IMAGES } from '../data/mockData';

interface CheckoutScreenProps {
  booking: BookingState;
  onUpdateBooking: (updates: Partial<BookingState>) => void;
  onNavigate: (screen: ScreenType) => void;
}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({
  booking,
  onUpdateBooking,
  onNavigate
}) => {
  const [selectedDate, setSelectedDate] = useState<string>(booking.selectedDate || '24');
  const [selectedSlot, setSelectedSlot] = useState<string>(booking.selectedTimeSlot || '11:30 AM');
  const [address, setAddress] = useState(booking.streetAddress || 'Jl. Sudirman No. 45, Tower Emerald');
  const [unit, setUnit] = useState(booking.unit || 'Apt 14B');
  const [postal, setPostal] = useState(booking.postalCode || '10220');
  const [notes, setNotes] = useState(booking.instructions || 'Harap lapor resepsionis lobi untuk kartu akses lift.');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'gpay' | 'whatsapp'>(booking.paymentMethod || 'card');
  const [isProcessing, setIsProcessing] = useState(false);

  const dates = [
    { day: '24', month: 'OKT', label: 'Hari Ini' },
    { day: '25', month: 'OKT', label: 'Jum' },
    { day: '26', month: 'OKT', label: 'Sab' },
    { day: '27', month: 'OKT', label: 'Min' },
    { day: '28', month: 'OKT', label: 'Sen' },
  ];

  const slots = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

  const serviceFee = 55.00;
  const platformFee = 4.50;
  const tax = 4.76;
  const total = serviceFee + platformFee + tax;

  const handleConfirmAndPay = () => {
    setIsProcessing(true);
    onUpdateBooking({
      selectedDate: `${selectedDate} Okt 2024`,
      selectedTimeSlot: selectedSlot,
      streetAddress: address,
      unit,
      postalCode: postal,
      instructions: notes,
      paymentMethod,
      totalPrice: total,
      serviceFee,
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
            <div className="flex items-center justify-between max-w-xl bg-white p-5 rounded-2xl border border-[#c8c5cd]/30 shadow-sm">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#0058bf] text-white font-bold text-xs shadow-md">
                  1
                </div>
                <span className="text-[11px] font-bold text-[#0058bf] uppercase tracking-wider">Ringkasan</span>
              </div>
              <div className="flex-1 h-0.5 mx-2 bg-[#0058bf]/30"></div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#0058bf] text-white font-bold text-xs shadow-md">
                  2
                </div>
                <span className="text-[11px] font-bold text-[#0058bf] uppercase tracking-wider">Jadwal</span>
              </div>
              <div className="flex-1 h-0.5 mx-2 bg-[#0058bf]/30"></div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#0058bf] text-white font-bold text-xs shadow-md">
                  3
                </div>
                <span className="text-[11px] font-bold text-[#0058bf] uppercase tracking-wider">Alamat</span>
              </div>
              <div className="flex-1 h-0.5 mx-2 bg-[#c8c5cd]"></div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center border-2 border-[#0058bf] text-[#0058bf] font-bold text-xs">
                  4
                </div>
                <span className="text-[11px] font-bold text-[#0058bf] uppercase tracking-wider">Bayar</span>
              </div>
            </div>

            {/* Section 1: Ringkasan Layanan */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#00000b]">Ringkasan Layanan</h2>
              <div className="bg-white border border-[#c8c5cd]/40 p-6 md:p-8 rounded-2xl shadow-sm flex items-start gap-5 hover:border-[#0058bf] transition-all">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#e2e2e2] shrink-0 border border-[#c8c5cd]/30">
                  <img
                    src={IMAGES.acEquipment}
                    alt="Pembersihan AC Mendalam"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-[#00000b]">{booking.serviceTitle || 'Pembersihan AC Mendalam'}</h3>
                      <p className="text-xs text-[#47464c] mt-0.5">Sanitasi kimia lengkap dan penggantian filter antibakteri.</p>
                    </div>
                    <span className="text-xl font-bold text-[#0058bf]">${serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="px-3 py-1 bg-[#d8e2ff] text-[#001a42] text-[11px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">verified</span>
                      Profesional Tersertifikasi
                    </span>
                    <span className="text-xs text-[#78767d]">Estimasi: 90 menit</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Pilih Jadwal */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#00000b]">Pilih Jadwal</h2>
              <div className="bg-white border border-[#c8c5cd]/40 p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#00000b] block mb-3">
                    Pilih Tanggal
                  </label>
                  <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                    {dates.map((d) => (
                      <button
                        key={d.day}
                        type="button"
                        onClick={() => setSelectedDate(d.day)}
                        className={`shrink-0 w-24 h-24 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                          selectedDate === d.day
                            ? 'border-2 border-[#0058bf] bg-[#d8e2ff]/30 shadow-sm'
                            : 'border border-[#c8c5cd] hover:border-[#0058bf] bg-white'
                        }`}
                      >
                        <span className="text-[10px] uppercase font-bold text-[#78767d]">{d.month}</span>
                        <span className={`text-2xl font-bold ${selectedDate === d.day ? 'text-[#0058bf]' : 'text-[#00000b]'}`}>
                          {d.day}
                        </span>
                        <span className={`text-[11px] font-medium ${selectedDate === d.day ? 'text-[#0058bf] font-bold' : 'text-[#47464c]'}`}>
                          {d.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#00000b] block mb-3">
                    Pilih Slot Waktu
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {slots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
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
              </div>
            </section>

            {/* Section 3: Alamat Layanan */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#00000b]">Alamat Layanan</h2>
              <div className="bg-white border border-[#c8c5cd]/40 p-6 md:p-8 rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#00000b]">
                    Alamat Jalan
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Nomor rumah dan nama jalan"
                    className="w-full p-3.5 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-xs text-[#1a1c1c] focus:outline-none focus:border-[#0058bf] focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#00000b]">
                    Apartemen / Suite
                  </label>
                  <input
                    type="text"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    placeholder="misalnya Apt 4B"
                    className="w-full p-3.5 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-xs text-[#1a1c1c] focus:outline-none focus:border-[#0058bf] focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#00000b]">
                    Kode Pos
                  </label>
                  <input
                    type="text"
                    value={postal}
                    onChange={(e) => setPostal(e.target.value)}
                    placeholder="10001"
                    className="w-full p-3.5 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-xs text-[#1a1c1c] focus:outline-none focus:border-[#0058bf] focus:bg-white transition-all"
                  />
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#00000b]">
                    Instruksi Khusus
                  </label>
                  <textarea
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
                <h2 className="text-2xl font-bold tracking-tight text-[#00000b]">Metode Pembayaran</h2>
                <div className="flex items-center gap-1.5 text-xs text-[#0058bf] font-bold">
                  <span className="material-symbols-outlined text-base">lock</span>
                  SSL Aman 256-Bit
                </div>
              </div>

              <div className="space-y-3">
                {/* Option 1: Card */}
                <div
                  onClick={() => setPaymentMethod('card')}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    paymentMethod === 'card'
                      ? 'border-[#0058bf] bg-[#d8e2ff]/20 shadow-sm'
                      : 'border-[#c8c5cd]/40 bg-white hover:border-[#0058bf]/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-[#001a42] text-white rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">credit_card</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#00000b]">Kartu Kredit atau Debit</div>
                      <div className="text-xs text-[#78767d]">Visa, Mastercard (Berakhir di 4242)</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'card' ? 'border-[#0058bf]' : 'border-[#c8c5cd]'
                  }`}>
                    {paymentMethod === 'card' && <div className="w-2.5 h-2.5 rounded-full bg-[#0058bf]"></div>}
                  </div>
                </div>

                {/* Option 2: Google Pay */}
                <div
                  onClick={() => setPaymentMethod('gpay')}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    paymentMethod === 'gpay'
                      ? 'border-[#0058bf] bg-[#d8e2ff]/20 shadow-sm'
                      : 'border-[#c8c5cd]/40 bg-white hover:border-[#0058bf]/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-white border border-[#c8c5cd] rounded-xl flex items-center justify-center p-2">
                      <img src={IMAGES.googleLogo} alt="Google Pay" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#00000b]">Google Pay</div>
                      <div className="text-xs text-[#78767d]">Tersedia pembayaran cepat & aman</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'gpay' ? 'border-[#0058bf]' : 'border-[#c8c5cd]'
                  }`}>
                    {paymentMethod === 'gpay' && <div className="w-2.5 h-2.5 rounded-full bg-[#0058bf]"></div>}
                  </div>
                </div>

                {/* Option 3: WhatsApp Pay */}
                <div
                  onClick={() => setPaymentMethod('whatsapp')}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    paymentMethod === 'whatsapp'
                      ? 'border-[#0058bf] bg-[#d8e2ff]/20 shadow-sm'
                      : 'border-[#c8c5cd]/40 bg-white hover:border-[#0058bf]/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-[#25D366] text-white rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">chat</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#00000b]">WhatsApp Pay</div>
                      <div className="text-xs text-[#78767d]">Bayar via tautan chat resmi instan</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'whatsapp' ? 'border-[#0058bf]' : 'border-[#c8c5cd]'
                  }`}>
                    {paymentMethod === 'whatsapp' && <div className="w-2.5 h-2.5 rounded-full bg-[#0058bf]"></div>}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Order Total & Sticky Checkout CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="bg-[#1a1a2e] text-white p-7 rounded-3xl shadow-xl space-y-6">
                <h3 className="text-xl font-bold tracking-tight">Ringkasan Pesanan</h3>

                <div className="space-y-4 pb-6 border-b border-white/10 text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-white text-sm">{booking.serviceTitle || 'Pembersihan AC Mendalam'}</div>
                      <div className="text-[#83829b]">Unit Residensial Standar</div>
                    </div>
                    <span className="font-bold text-white text-sm">${serviceFee.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-[#83829b]">
                    <span>Biaya Layanan</span>
                    <span>${platformFee.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-[#83829b]">
                    <span>Pajak (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-white">Total</span>
                    <span className="text-3xl font-bold text-[#aec6ff]">${total.toFixed(2)}</span>
                  </div>

                  {/* Trust highlight box */}
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#aec6ff] text-lg shrink-0 mt-0.5">verified</span>
                    <p className="text-[11px] text-[#c6c4df] leading-relaxed">
                      <strong className="text-white">Jaminan Tanpa Biaya Tersembunyi.</strong> Harga yang Anda lihat adalah yang Anda bayar. Perubahan di lokasi memerlukan persetujuan digital Anda.
                    </p>
                  </div>

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
                        <span>Konfirmasi dan Bayar</span>
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </>
                    )}
                  </button>

                  {/* Payment provider logos */}
                  <div className="pt-2 flex justify-center items-center gap-6 opacity-60 grayscale brightness-200">
                    <img src={IMAGES.visaLogo} alt="Visa" className="h-4 object-contain" />
                    <img src={IMAGES.mastercardLogo} alt="Mastercard" className="h-4 object-contain" />
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-white border border-[#c8c5cd]/30 rounded-2xl flex flex-col items-center text-center gap-2 shadow-sm">
                  <span className="material-symbols-outlined text-[#0058bf] text-2xl">shield</span>
                  <div className="text-xs font-bold text-[#00000b]">Pekerjaan Diasuransi</div>
                </div>
                <div className="p-5 bg-white border border-[#c8c5cd]/30 rounded-2xl flex flex-col items-center text-center gap-2 shadow-sm">
                  <span className="material-symbols-outlined text-[#0058bf] text-2xl">workspace_premium</span>
                  <div className="text-xs font-bold text-[#00000b]">1% Ahli Terbaik</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

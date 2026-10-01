import React, { useState } from 'react';
import { ScreenType, ServiceItem } from '../types';
import { calculateBookingTotals, formatSampleAmount } from '../data/pricing';
import { BOOKING_SLOTS, DOCUMENTATION_STEP } from '../data/mockData';

interface ServiceDetailScreenProps {
  service: ServiceItem;
  onNavigate: (screen: ScreenType) => void;
  onProceedToBooking: (date: string, time: string) => void;
}

export const ServiceDetailScreen: React.FC<ServiceDetailScreenProps> = ({
  service,
  onNavigate,
  onProceedToBooking
}) => {
  const availableDates = Array.from({ length: 5 }, (_, offset) => {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() + offset);
    const value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return {
      value,
      label: offset === 0 ? 'Hari ini' : new Intl.DateTimeFormat('id-ID', { weekday: 'short', day: 'numeric', month: 'short' }).format(date)
    };
  });
  const [selectedDate, setSelectedDate] = useState<string>(availableDates[0].value);
  const [selectedTime, setSelectedTime] = useState<string>(BOOKING_SLOTS[0]);

  const { servicePrice, platformFee, tax, totalPrice } = calculateBookingTotals(service.price);
  const processSteps = [...(service.processSteps ?? []), DOCUMENTATION_STEP];

  const handleContinue = () => {
    onProceedToBooking(selectedDate, selectedTime);
    onNavigate('checkout');
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] pt-6 pb-24">
      <main className="max-w-[1280px] mx-auto px-4 md:px-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-8 text-xs font-semibold text-[#78767d]">
          <button 
            onClick={() => onNavigate('services')}
            className="hover:text-[#0058bf] transition-colors cursor-pointer"
          >
            Layanan
          </button>
          <span className="material-symbols-outlined text-[16px] text-[#c8c5cd]">chevron_right</span>
          <span className="text-[#47464c]">{service.categoryLabel}</span>
          <span className="material-symbols-outlined text-[16px] text-[#c8c5cd]">chevron_right</span>
          <span className="text-[#00000b] font-bold">{service.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Detail Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Hero Image & Headings */}
            <section className="space-y-6">
              <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-sm border border-[#c8c5cd]/40 bg-[#e2e2e2]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00000b] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    Data teknisi contoh · belum diverifikasi
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#c8c5cd]/30">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#00000b]">
                    {service.title}
                  </h1>
                  <p className="text-sm text-[#47464c] mt-2 max-w-xl leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <div className="text-3xl font-bold text-[#0058bf]">{formatSampleAmount(servicePrice)}</div>
                  <div className="text-[11px] text-[#78767d]">Harga simulasi, belum divalidasi mitra</div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#0058bf] bg-[#d8e2ff] px-2.5 py-1 rounded-md mt-1">
                    <span className="material-symbols-outlined text-[14px]">security</span>
                    Informasi garansi belum dikonfirmasi
                  </div>
                </div>
              </div>
            </section>

            {/* What's Included */}
            <section className="bg-white p-8 rounded-2xl border border-[#c8c5cd]/40 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-[#00000b]">Apa Saja yang Termasuk</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(service.inclusions || []).map((inclusion) => (
                  <div key={inclusion} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#0058bf] text-xl shrink-0 mt-0.5">check_circle</span>
                    <p className="text-sm text-[#47464c]">{inclusion}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Roadmap */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-[#00000b]">Alur Proses</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {processSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="bg-white p-5 rounded-2xl border border-[#c8c5cd]/30 flex flex-col items-center"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-md ${
                        index === processSteps.length - 1
                          ? 'border-2 border-[#78767d] bg-white text-[#78767d]'
                          : 'bg-[#0058bf] text-white'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">{step.icon}</span>
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#00000b]">{step.title}</h4>
                    <p className="text-[11px] text-[#78767d] mt-1">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Sticky Booking Widget */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white border border-[#c8c5cd]/40 rounded-2xl p-7 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-[#00000b]">Pesan Layanan</h3>

                {/* Date options */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#00000b] block mb-2.5">
                    Tanggal Pilihan
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableDates.slice(0, 3).map((date) => (
                      <button
                        key={date.value}
                        type="button"
                        aria-pressed={selectedDate === date.value}
                        onClick={() => setSelectedDate(date.value)}
                        className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          selectedDate === date.value
                            ? 'bg-[#0058bf] text-white shadow-sm'
                            : 'border border-[#c8c5cd] text-[#1a1c1c] hover:border-[#0058bf]'
                        }`}
                      >
                        {date.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Arrival time dropdown */}
                <div>
                  <label htmlFor="arrival-time" className="text-xs font-bold uppercase tracking-wider text-[#00000b] block mb-2.5">
                    Waktu Kedatangan
                  </label>
                  <select
                    id="arrival-time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-[#f3f3f3] border border-[#c8c5cd] rounded-xl p-3 text-xs font-medium text-[#1a1c1c] focus:outline-none focus:border-[#0058bf] transition-all cursor-pointer"
                  >
                    {BOOKING_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                {/* Pricing Breakdown */}
                <div className="border-t border-[#c8c5cd]/30 pt-5 space-y-2.5 text-xs">
                  <div className="flex justify-between text-[#47464c]">
                    <span>Harga layanan (contoh)</span>
                    <span className="font-semibold text-[#00000b]">{formatSampleAmount(servicePrice)}</span>
                  </div>
                  <div className="flex justify-between text-[#47464c]">
                    <span>Biaya platform (contoh)</span>
                    <span className="font-semibold text-[#00000b]">{formatSampleAmount(platformFee)}</span>
                  </div>
                  <div className="flex justify-between text-[#47464c]">
                    <span>Pajak simulasi</span>
                    <span className="font-semibold text-[#00000b]">{formatSampleAmount(tax)}</span>
                  </div>
                  <div className="flex justify-between items-end border-t border-dashed border-[#c8c5cd] pt-3 text-sm">
                    <span className="font-bold text-[#00000b]">Total simulasi</span>
                    <span className="text-xl font-bold text-[#0058bf]">{formatSampleAmount(totalPrice)}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleContinue}
                  className="w-full bg-[#00000b] hover:bg-[#0058bf] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Lanjutkan ke Pemesanan</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>

                <p className="text-center text-[11px] text-[#78767d] leading-relaxed">
                  Rincian di atas adalah simulasi. Tidak ada biaya yang dapat dibayar dan slot waktu belum terhubung ke sistem mitra.
                </p>
              </div>

              {/* Partner-confirmation placeholder */}
              <div className="bg-[#1a1a2e] p-6 rounded-2xl text-white space-y-4 shadow-md">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#aec6ff] text-xl">workspace_premium</span>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#aec6ff]">Informasi Mitra</h4>
                </div>
                <ul className="space-y-2.5 text-xs text-[#c6c4df]">
                  {['Cakupan dan masa garansi', 'Kualifikasi serta sertifikasi teknisi', 'Nomor kontak dan wilayah layanan'].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-sm text-[#aec6ff] mt-px">pending</span>
                      <span>
                        <span className="text-white">{item}</span> belum dikonfirmasi mitra.
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

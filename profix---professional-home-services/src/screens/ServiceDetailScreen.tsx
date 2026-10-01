import React, { useState } from 'react';
import { ScreenType, ServiceItem } from '../types';
import { IMAGES } from '../data/mockData';

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
  const [selectedDate, setSelectedDate] = useState<string>('Hari Ini');
  const [selectedTime, setSelectedTime] = useState<string>('Pagi (08:00 - 12:00)');

  const serviceFee = service.price || 55.0;
  const vat = serviceFee * 0.05;
  const total = serviceFee + vat;

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
          <span className="hover:text-[#0058bf] cursor-pointer">Perawatan {service.category.toUpperCase()}</span>
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
                  src={IMAGES.acDetailAction}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00000b] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <span className="material-symbols-outlined text-[14px] text-[#aec6ff]">verified</span>
                    Teknisi Terverifikasi
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#c8c5cd]/30">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#00000b]">
                    {service.title}
                  </h1>
                  <p className="text-sm text-[#47464c] mt-2 max-w-xl leading-relaxed">
                    Kembalikan performa unit Anda seperti baru dengan sterilisasi antimikroba khas kami dan pembersihan koil kimiawi.
                  </p>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <div className="text-3xl font-bold text-[#0058bf]">${serviceFee.toFixed(0)}</div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#0058bf] bg-[#d8e2ff] px-2.5 py-1 rounded-md mt-1">
                    <span className="material-symbols-outlined text-[14px]">security</span>
                    Termasuk Garansi Digital
                  </div>
                </div>
              </div>
            </section>

            {/* What's Included */}
            <section className="bg-white p-8 rounded-2xl border border-[#c8c5cd]/40 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-[#00000b]">Apa Saja yang Termasuk</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#0058bf] text-xl shrink-0 mt-0.5">check_circle</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#00000b]">Jet-Wash Coil Cleaning</h3>
                    <p className="text-xs text-[#47464c] mt-0.5">Pembersihan air bertekanan tinggi untuk evaporator internal.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#0058bf] text-xl shrink-0 mt-0.5">check_circle</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#00000b]">Perawatan Antimikroba</h3>
                    <p className="text-xs text-[#47464c] mt-0.5">Semprotan sterilisasi yang disetujui FDA untuk membasmi bakteri.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#0058bf] text-xl shrink-0 mt-0.5">check_circle</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#00000b]">Pembersihan Saluran Pembuangan</h3>
                    <p className="text-xs text-[#47464c] mt-0.5">Membersihkan sumbatan untuk mencegah kebocoran dan kerusakan air.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#0058bf] text-xl shrink-0 mt-0.5">check_circle</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#00000b]">Pengecekan Performa</h3>
                    <p className="text-xs text-[#47464c] mt-0.5">Pengujian tekanan gas dan suhu hembusan setelah pengerjaan selesai.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Process Roadmap */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-[#00000b]">Alur Proses</h2>
              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {/* Step 1 */}
                <div className="bg-white p-5 rounded-2xl border border-[#c8c5cd]/30 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#00000b] text-white flex items-center justify-center mb-3 shadow-md">
                    <span className="material-symbols-outlined text-xl">troubleshoot</span>
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#00000b]">Diagnosis</h4>
                  <p className="text-[11px] text-[#78767d] mt-1">Pengecekan awal</p>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-5 rounded-2xl border border-[#c8c5cd]/30 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#0058bf] text-white flex items-center justify-center mb-3 shadow-md">
                    <span className="material-symbols-outlined text-xl">cleaning_services</span>
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#00000b]">Pembersihan</h4>
                  <p className="text-[11px] text-[#78767d] mt-1">Cuci kimia menyeluruh</p>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-5 rounded-2xl border border-[#c8c5cd]/30 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#0058bf] bg-[#d8e2ff]/30 text-[#0058bf] flex items-center justify-center mb-3 shadow-md">
                    <span className="material-symbols-outlined text-xl">sanitizer</span>
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#00000b]">Sterilisasi</h4>
                  <p className="text-[11px] text-[#78767d] mt-1">Lapisan antimikroba</p>
                </div>

                {/* Step 4 */}
                <div className="bg-white p-5 rounded-2xl border border-[#c8c5cd]/30 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#78767d] bg-white text-[#78767d] flex items-center justify-center mb-3 shadow-md">
                    <span className="material-symbols-outlined text-xl">assignment_turned_in</span>
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#00000b]">Garansi</h4>
                  <p className="text-[11px] text-[#78767d] mt-1">Pencatatan digital</p>
                </div>
              </div>
            </section>

            {/* Verified Reviews */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#00000b]">Ulasan Pelanggan Terverifikasi</h2>
              <div className="space-y-4">
                <div className="p-6 bg-white border border-[#c8c5cd]/40 rounded-2xl shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#d8e2ff] text-[#001a42] font-bold flex items-center justify-center text-xs">
                        JD
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#00000b]">James D.</div>
                        <div className="text-[11px] text-[#78767d]">Layanan Terverifikasi • 2 hari yang lalu</div>
                      </div>
                    </div>
                    <div className="flex text-[#0058bf]">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm">star</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#47464c] italic leading-relaxed">
                    "Sangat profesional. Teknisi datang tepat waktu dan bahkan menunjukkan foto koil internal sebelum/sesudah dibersihkan. Perbedaan kualitas udaranya sangat terasa."
                  </p>
                </div>

                <div className="p-6 bg-white border border-[#c8c5cd]/40 rounded-2xl shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1a1a2e] text-white font-bold flex items-center justify-center text-xs">
                        SK
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#00000b]">Sarah K.</div>
                        <div className="text-[11px] text-[#78767d]">Layanan Terverifikasi • 1 minggu yang lalu</div>
                      </div>
                    </div>
                    <div className="flex text-[#0058bf]">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm">star</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#47464c] italic leading-relaxed">
                    "Proses pengerjaannya sangat bersih. Mereka menggunakan pelindung plastik untuk melindungi dinding dan furnitur saya. AC saya sekarang mendingin seperti baru lagi."
                  </p>
                </div>
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
                    {['Hari Ini', 'Besok', '24 Okt'].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setSelectedDate(d)}
                        className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          selectedDate === d
                            ? 'bg-[#0058bf] text-white shadow-sm'
                            : 'border border-[#c8c5cd] text-[#1a1c1c] hover:border-[#0058bf]'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Arrival time dropdown */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#00000b] block mb-2.5">
                    Waktu Kedatangan
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-[#f3f3f3] border border-[#c8c5cd] rounded-xl p-3 text-xs font-medium text-[#1a1c1c] focus:outline-none focus:border-[#0058bf] transition-all cursor-pointer"
                  >
                    <option value="Pagi (08:00 - 12:00)">Pagi (08:00 - 12:00)</option>
                    <option value="Siang (12:00 - 16:00)">Siang (12:00 - 16:00)</option>
                    <option value="Sore (16:00 - 20:00)">Sore (16:00 - 20:00)</option>
                  </select>
                </div>

                {/* Pricing Breakdown */}
                <div className="border-t border-[#c8c5cd]/30 pt-5 space-y-2.5 text-xs">
                  <div className="flex justify-between text-[#47464c]">
                    <span>Biaya Layanan</span>
                    <span className="font-semibold text-[#00000b]">${serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#47464c]">
                    <span>PPN (5%)</span>
                    <span className="font-semibold text-[#00000b]">${vat.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-end border-t border-dashed border-[#c8c5cd] pt-3 text-sm">
                    <span className="font-bold text-[#00000b]">Total</span>
                    <span className="text-xl font-bold text-[#0058bf]">${total.toFixed(2)}</span>
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

                <p className="text-center text-[11px] text-[#78767d]">
                  Tanpa biaya sampai layanan selesai dikerjakan.
                </p>
              </div>

              {/* Jaminan Premium Card */}
              <div className="bg-[#1a1a2e] p-6 rounded-2xl text-white space-y-4 shadow-md">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#aec6ff] text-xl">workspace_premium</span>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#aec6ff]">Jaminan Premium</h4>
                </div>
                <ul className="space-y-2.5 text-xs text-[#c6c4df]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#aec6ff]">done_all</span>
                    Garansi Layanan 30 Hari
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#aec6ff]">done_all</span>
                    Perlindungan Tanggung Jawab $1Jt
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#aec6ff]">done_all</span>
                    Teknisi Lolos Cek Latar Belakang
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

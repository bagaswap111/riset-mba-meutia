import React, { useState } from 'react';
import { ScreenType, ServiceItem } from '../types';
import { IMAGES, FEATURED_SERVICES, TESTIMONIALS, FAQS, SERVICES } from '../data/mockData';
import { formatSampleAmount } from '../data/pricing';

interface HomeScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onSelectService: (service: ServiceItem) => void;
  onOpenWhatsApp: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectService,
  onOpenWhatsApp
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTabBeforeAfter, setActiveTabBeforeAfter] = useState<'all' | 'ac' | 'pipe'>('all');

  const handleOpenDetail = (serviceId: string) => {
    const s = SERVICES.find((item) => item.id === serviceId) || SERVICES[0];
    onSelectService(s);
    onNavigate('detail');
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Hero Section */}
      <section className="relative min-h-[82vh] flex items-center pt-8 md:pt-14 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1a1a2e]/[0.03] -z-10 hidden lg:block"></div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Block */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0058bf]/10 text-[#0058bf] border border-[#0058bf]/20 text-xs font-bold tracking-wide">
              <span className="material-symbols-outlined text-[18px] text-[#0058bf]">verified</span>
              PROTOTIPE PENELITIAN · DATA CONTOH
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold leading-[1.12] tracking-tight text-[#00000b]">
              Perawatan Rumah Ahli, <br />
              <span className="text-[#0058bf]">Hadir Secara Digital.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#47464c] max-w-lg leading-relaxed">
              Prototipe untuk mengevaluasi informasi layanan perawatan rumah. Tarif, mitra, dan garansi belum dikonfirmasi.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavigate('services')}
                className="bg-[#00000b] hover:bg-[#0058bf] text-white px-8 py-4 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Jelajahi Layanan</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>

              <a
                href="#process"
                className="border-2 border-[#00000b] hover:bg-[#00000b] hover:text-white text-[#00000b] px-8 py-4 rounded-xl text-sm font-bold transition-all active:scale-95 inline-flex items-center justify-center cursor-pointer"
              >
                Cara Kerja
              </a>
            </div>

            {/* Micro stats banner */}
            <div className="pt-4 flex items-center gap-6 border-t border-[#c8c5cd]/30 text-xs text-[#47464c]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0058bf] text-base">bolt</span>
                <span>Waktu kedatangan belum tersedia</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0058bf] text-base">verified_user</span>
                <span>Informasi garansi belum diverifikasi</span>
              </div>
            </div>
          </div>

          {/* Right Image with Floating Badge */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-[#e2e2e2]">
              <img
                src={IMAGES.heroTechnician}
                alt="Teknisi Profesional ProFix"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-4 md:-left-6 bg-white p-5 rounded-2xl shadow-xl border border-[#c8c5cd]/40 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4">
              <div className="w-12 h-12 bg-[#0058bf]/10 rounded-2xl flex items-center justify-center text-[#0058bf]">
                <span className="material-symbols-outlined text-2xl text-[#0058bf]">timer</span>
              </div>
              <div>
                <div className="text-sm font-bold text-[#00000b]">Informasi contoh</div>
                <div className="text-xs text-[#47464c]">Mitra layanan belum terhubung</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-24 bg-[#f3f3f3] border-y border-[#c8c5cd]/30" id="services">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00000b] mb-4">Contoh Katalog Layanan</h2>
          <p className="text-base text-[#47464c]">Harga pada prototipe masih berupa contoh USD, bukan tarif mitra atau tarif pasar.</p>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_SERVICES.map(({ service, icon }) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-2xl border border-[#c8c5cd]/50 hover:border-[#0058bf] transition-all hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-[#1a1a2e] text-[#aec6ff] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <span className="material-symbols-outlined text-[32px]">{icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#00000b] mb-2">{service.title}</h3>
                <p className="text-sm text-[#47464c] mb-6 leading-relaxed">{service.description}</p>
              </div>

              <div className="pt-4 border-t border-[#eeeeee]">
                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-xs text-[#78767d] uppercase tracking-wider font-semibold">USD contoh</span>
                  <span className="text-3xl font-bold text-[#00000b]">{formatSampleAmount(service.startingPrice)}</span>
                </div>

                <button
                  onClick={() => handleOpenDetail(service.id)}
                  className="w-full py-3 rounded-xl border border-[#78767d] text-[#00000b] text-xs font-bold uppercase tracking-wider group-hover:bg-[#00000b] group-hover:text-white group-hover:border-[#00000b] transition-all cursor-pointer"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOP Roadmap (Protokol Layanan Kami) */}
      <section className="py-24" id="process">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00000b] mb-4">Protokol Layanan Kami</h2>
            <p className="text-base text-[#47464c]">Rasakan standar keandalan baru melalui peta jalan 4 langkah kami.</p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 pt-4">
            {/* Connecting line on desktop */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#c8c5cd]/40 -translate-y-1/2 hidden md:block -z-0"></div>

            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center z-10 group">
              <div className="w-12 h-12 bg-[#0058bf] text-white rounded-full flex items-center justify-center font-bold mb-6 ring-8 ring-[#f9f9f9] shadow-md group-hover:scale-110 transition-transform">
                1
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#00000b] mb-2">Diagnosis</h4>
              <p className="text-xs text-[#47464c] leading-relaxed max-w-[200px]">Penilaian kondisi awal dan pencatatan keluhan yang disampaikan pengguna.</p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center z-10 group">
              <div className="w-12 h-12 bg-[#0058bf] text-white rounded-full flex items-center justify-center font-bold mb-6 ring-8 ring-[#f9f9f9] shadow-md group-hover:scale-110 transition-transform">
                2
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#00000b] mb-2">Estimasi</h4>
              <p className="text-xs text-[#47464c] leading-relaxed max-w-[200px]">Penawaran digital instan dengan rincian biaya suku cadang transparan.</p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center z-10 group">
              <div className="w-12 h-12 bg-[#0058bf] text-white rounded-full flex items-center justify-center font-bold mb-6 ring-8 ring-[#f9f9f9] shadow-md group-hover:scale-110 transition-transform">
                3
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#00000b] mb-2">Perbaikan</h4>
              <p className="text-xs text-[#47464c] leading-relaxed max-w-[200px]">Pengerjaan sesuai ruang lingkup yang disepakati, dengan catatan hasil kerja.</p>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col items-center text-center z-10 group">
              <div className="w-12 h-12 bg-[#00000b] text-white rounded-full flex items-center justify-center font-bold mb-6 ring-8 ring-[#f9f9f9] shadow-md group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[20px]">check</span>
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#00000b] mb-2">Data layanan</h4>
              <p className="text-xs text-[#47464c] leading-relaxed max-w-[200px]">Ketentuan layanan dan garansi akan ditambahkan setelah dikonfirmasi mitra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Hub (Hasil Kerja - Before / After) */}
      <section className="py-24 bg-[#1a1a2e] text-[#c6c4df]" id="results">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#aec6ff] block mb-2">Contoh Portofolio</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Contoh Konten Portofolio</h2>
              <p className="text-sm text-[#83829b]">Gambar pada layar ini adalah ilustrasi, bukan bukti pekerjaan mitra.</p>
            </div>

            {/* Filter buttons */}
            <div className="flex gap-2" role="group" aria-label="Saring contoh portofolio">
              <button
                onClick={() => setActiveTabBeforeAfter('all')}
                aria-pressed={activeTabBeforeAfter === 'all'}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTabBeforeAfter === 'all'
                    ? 'bg-[#0058bf] text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                Semua Hasil
              </button>
              <button
                onClick={() => setActiveTabBeforeAfter('ac')}
                aria-pressed={activeTabBeforeAfter === 'ac'}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTabBeforeAfter === 'ac'
                    ? 'bg-[#0058bf] text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                AC Sanitasi
              </button>
              <button
                onClick={() => setActiveTabBeforeAfter('pipe')}
                aria-pressed={activeTabBeforeAfter === 'pipe'}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTabBeforeAfter === 'pipe'
                    ? 'bg-[#0058bf] text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                Pipa & Kebocoran
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Case 1: AC Deep Sanitasi */}
            {(activeTabBeforeAfter === 'all' || activeTabBeforeAfter === 'ac') && (
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 overflow-hidden hover:border-[#006fef]/40 transition-all">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/60">Sebelum</span>
                    <div className="aspect-square rounded-2xl overflow-hidden bg-black/30 border border-white/10">
                      <img src={IMAGES.beforeAC} alt="Kondisi AC sebelum servis" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#aec6ff]">Sesudah</span>
                    <div className="aspect-square rounded-2xl overflow-hidden bg-black/30 border border-[#0058bf]/30">
                      <img src={IMAGES.afterAC} alt="Kondisi AC setelah servis ProFix" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <h4 className="text-lg font-bold text-white">Sanitasi AC Mendalam</h4>
                  <p className="text-xs text-[#83829b] mt-1.5 leading-relaxed">
                    Contoh tampilan kasus sebelum dan sesudah. Angka hasil kerja tidak tersedia
                    karena belum ada pekerjaan mitra yang terdokumentasi.
                  </p>
                </div>
              </div>
            )}

            {/* Case 2: Resolusi Kebocoran */}
            {(activeTabBeforeAfter === 'all' || activeTabBeforeAfter === 'pipe') && (
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 overflow-hidden hover:border-[#006fef]/40 transition-all">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/60">Sebelum</span>
                    <div className="aspect-square rounded-2xl overflow-hidden bg-black/30 border border-white/10">
                      <img src={IMAGES.beforePipe} alt="Pipa bocor sebelum restorasi" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#aec6ff]">Sesudah</span>
                    <div className="aspect-square rounded-2xl overflow-hidden bg-black/30 border border-[#0058bf]/30">
                      <img src={IMAGES.afterPipe} alt="Restorasi pipa ProFix selesai rapi" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <h4 className="text-lg font-bold text-white">Resolusi Kebocoran Pipa</h4>
                  <p className="text-xs text-[#83829b] mt-1.5 leading-relaxed">
                    Contoh tampilan kasus perbaikan pipa. Jaminan anti-bocor dan masa berlakunya
                    belum dikonfirmasi mitra.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Masonry */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00000b] mb-4">Contoh Ulasan Pelanggan</h2>
            <p className="text-base text-[#47464c]">
              Seluruh nama dan kutipan di bawah adalah data contoh untuk menguji tata letak kartu ulasan. Bukan testimoni pelanggan nyata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#f3f3f3] p-8 rounded-2xl border border-[#c8c5cd]/30 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  {t.hasImage && t.image && (
                    <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-white border border-[#c8c5cd]/30">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-[#d8e2ff] text-[#001a42] font-bold flex items-center justify-center text-sm shadow-sm">
                      {t.initials}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-[#00000b]">{t.name}</h5>
                      <span className="text-xs text-[#78767d] block">{t.role}</span>
                      <div className="flex items-center gap-1.5">
                        <div className="flex text-[#78767d]" aria-hidden="true">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-[16px] text-[#78767d]">
                              {i < t.rating ? 'star' : 'star_outline'}
                            </span>
                          ))}
                        </div>
                        <span className="sr-only">Rating contoh {t.rating} dari 5</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[#1a1c1c] italic leading-relaxed mb-6">
                    "{t.review}"
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#47464c] bg-[#eeeeee] px-3 py-1 rounded-full w-fit">
                  <span className="material-symbols-outlined text-[14px]">groups</span>
                  Data contoh · bukan ulasan nyata
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Fix FAQ */}
      <section className="py-24 bg-white border-t border-[#c8c5cd]/30" id="faq">
        <div className="max-w-3xl mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00000b] mb-4">FAQ Perbaikan Cepat</h2>
            <p className="text-base text-[#47464c]">Jawaban instan untuk pertanyaan seputar layanan rumah tangga Anda.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-[#c8c5cd]/40 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex justify-between items-center p-6 text-left bg-[#f9f9f9] hover:bg-[#f3f3f3] transition-colors cursor-pointer"
                  >
                    <span className="font-semibold text-base text-[#00000b]">{faq.question}</span>
                    <span
                      className={`material-symbols-outlined text-[#78767d] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="p-6 pt-2 text-sm text-[#47464c] leading-relaxed bg-[#f9f9f9] border-t border-[#c8c5cd]/20"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-8 bg-[#1a1a2e] rounded-2xl text-white text-center space-y-4 shadow-xl">
            <h3 className="text-xl font-bold">Masih punya pertanyaan lain?</h3>
            <p className="text-xs text-[#83829b] max-w-md mx-auto">
              Prototipe ini belum terhubung ke nomor mitra mana pun, sehingga fitur kontak WhatsApp
              hanya menampilkan jendela simulasi dan tidak mengirim pesan.
            </p>
            <button
              onClick={onOpenWhatsApp}
              className="bg-[#25D366] hover:bg-[#128c7e] text-white px-6 py-3 rounded-full text-xs font-bold inline-flex items-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              Tanya via WhatsApp Sekarang
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

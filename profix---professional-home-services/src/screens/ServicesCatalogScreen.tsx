import React, { useState, useMemo, useEffect } from 'react';
import { ScreenType, ServiceItem } from '../types';
import { SERVICES } from '../data/mockData';

const CATEGORY_FILTERS = (
  ['ac', 'plumbing', 'pump', 'electrical', 'appliances', 'sanitation'] as const
)
  .map((value) => ({
    value,
    label: SERVICES.find((service) => service.category === value)?.categoryLabel ?? value,
    count: SERVICES.filter((service) => service.category === value).length
  }))
  .filter((category) => category.count > 0);

interface ServicesCatalogScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onSelectService: (service: ServiceItem) => void;
  initialSearchKeyword?: string;
}

export const ServicesCatalogScreen: React.FC<ServicesCatalogScreenProps> = ({
  onNavigate,
  onSelectService,
  initialSearchKeyword = ''
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>(initialSearchKeyword);

  useEffect(() => {
    setSearchKeyword(initialSearchKeyword);
  }, [initialSearchKeyword]);

  const filteredServices = useMemo(() => {
    const keyword = searchKeyword.trim().toLowerCase();
    return SERVICES.filter((s) => {
      const matchCat = selectedCategory === 'all' || s.category === selectedCategory;

      const matchSearch =
        keyword === '' ||
        s.title.toLowerCase().includes(keyword) ||
        s.categoryLabel.toLowerCase().includes(keyword) ||
        s.description.toLowerCase().includes(keyword);

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchKeyword]);

  const handleBook = (service: ServiceItem) => {
    onSelectService(service);
    onNavigate('detail');
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] pb-24">
      {/* Search & Filter Hero */}
      <section className="py-16 px-4 md:px-12 max-w-[1280px] mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#00000b] mb-4">
            Layanan Ahli, Sesuai Kebutuhan.
          </h1>
          <p className="text-base md:text-lg text-[#47464c] mb-8 leading-relaxed">
            Prototipe layanan perawatan rumah. Detail mitra, tarif, jadwal, dan garansi masih menunggu verifikasi.
          </p>

          {/* Large Search Input */}
          <div className="relative mb-6">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#00000b] text-2xl select-none">
              search
            </span>
            <input
              type="text"
              aria-label="Cari layanan"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Layanan apa yang Anda butuhkan hari ini?"
              className="w-full pl-14 pr-6 py-4 rounded-xl border border-[#c8c5cd] focus:border-[#0058bf] focus:ring-2 focus:ring-[#0058bf]/10 text-base bg-white shadow-sm transition-all focus:outline-none"
            />
            {searchKeyword && (
              <button
                onClick={() => setSearchKeyword('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#78767d] hover:text-[#00000b] p-1"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2.5">
            <button
              onClick={() => setSelectedCategory('all')}
              aria-pressed={selectedCategory === 'all'}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#00000b] text-white shadow-sm'
                  : 'bg-white border border-[#c8c5cd] text-[#1a1c1c] hover:border-[#0058bf] hover:text-[#0058bf]'
              }`}
            >
              Semua ({SERVICES.length})
            </button>
            {CATEGORY_FILTERS.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                aria-pressed={selectedCategory === category.value}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedCategory === category.value
                    ? 'bg-[#00000b] text-white shadow-sm'
                    : 'bg-white border border-[#c8c5cd] text-[#1a1c1c] hover:border-[#0058bf] hover:text-[#0058bf]'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-8 border-b border-[#c8c5cd]/30 pb-4">
          <p className="text-xs text-[#78767d] uppercase tracking-wider font-semibold">
            Menampilkan <span className="text-[#00000b] font-bold">{filteredServices.length}</span> layanan profesional
          </p>
          <span className="text-xs text-[#0058bf] font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">info</span> Data layanan contoh
          </span>
        </div>

        {/* Service Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#c8c5cd]/40 max-w-md mx-auto my-8">
            <span className="material-symbols-outlined text-5xl text-[#78767d] mb-4">search_off</span>
            <h3 className="text-base font-bold mb-2">Layanan Tidak Ditemukan</h3>
            <p className="text-xs text-[#47464c] mb-6">
              Tidak ada hasil untuk pencarian "{searchKeyword}". Coba kata kunci lain atau reset filter.
            </p>
            <button
              onClick={() => {
                setSearchKeyword('');
                setSelectedCategory('all');
              }}
              className="px-5 py-2.5 bg-[#00000b] text-white text-xs font-bold rounded-xl"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#c8c5cd]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Thumbnail */}
                  <div className="h-60 overflow-hidden relative bg-[#e2e2e2]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#00000b] text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                        <span className="material-symbols-outlined text-[13px] text-[#aec6ff]">verified</span>
                        Data contoh
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-7">
                    <div className="flex items-center gap-1.5 mb-2.5 text-[#0058bf]">
                      <span className="material-symbols-outlined text-base">workspace_premium</span>
                      <span className="text-xs font-bold uppercase tracking-wider">Garansi belum diverifikasi</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#00000b] mb-2 group-hover:text-[#0058bf] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#47464c] line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer with Price and CTA */}
                <div className="p-7 pt-0">
                  <div className="flex justify-between items-center pt-5 border-t border-[#c8c5cd]/30">
                    <div>
                      <span className="text-[10px] text-[#78767d] block uppercase tracking-wider font-bold">Harga contoh USD</span>
                      <span className="text-2xl font-bold text-[#00000b]">${service.startingPrice}</span>
                    </div>

                    <button
                      onClick={() => handleBook(service)}
                      className="bg-[#0058bf] hover:bg-[#006fef] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-sm hover:shadow cursor-pointer"
                    >
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View More section */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchKeyword('');
            }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00000b] hover:text-[#0058bf] transition-colors cursor-pointer group"
          >
            <span>Muat Ulang Semua Layanan</span>
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </section>

          {/* Provider information status */}
      <section className="bg-[#1a1a2e] text-[#83829b] py-20 mt-12 border-t border-white/5">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.03] backdrop-blur-sm">
              <span className="material-symbols-outlined text-3xl mb-4 text-[#aec6ff]">verified_user</span>
              <h4 className="text-lg font-bold mb-2 text-white">Informasi garansi</h4>
              <p className="text-xs text-[#83829b] leading-relaxed">
                Cakupan garansi belum dikonfirmasi oleh mitra layanan.
              </p>
            </div>

            <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.03] backdrop-blur-sm">
              <span className="material-symbols-outlined text-3xl mb-4 text-[#aec6ff]">electric_bolt</span>
              <h4 className="text-lg font-bold mb-2 text-white">Ketersediaan jadwal</h4>
              <p className="text-xs text-[#83829b] leading-relaxed">
                Slot dan waktu kedatangan belum terhubung ke sistem penyedia jasa.
              </p>
            </div>

            <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.03] backdrop-blur-sm">
              <span className="material-symbols-outlined text-3xl mb-4 text-[#aec6ff]">payments</span>
              <h4 className="text-lg font-bold mb-2 text-white">Harga lokal</h4>
              <p className="text-xs text-[#83829b] leading-relaxed">
                Nilai USD yang terlihat adalah data simulasi; tarif IDR perlu dikonfirmasi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

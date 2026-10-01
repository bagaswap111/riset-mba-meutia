import React, { useState, useMemo } from 'react';
import { ScreenId, ServiceItem } from '../../types';
import { SERVICES } from '../../data/services';

interface ServicesScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({
  onNavigate,
  onSelectService
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'AC Repair', 'Plumbing', 'Pump Services', 'Electrical'];

  const filteredServices = useMemo(() => {
    return SERVICES.filter((s) => {
      const matchCat =
        selectedCategory === 'All' || s.category === selectedCategory;
      const matchSearch =
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCardClick = (service: ServiceItem) => {
    onSelectService(service);
    if (service.screenTarget) {
      onNavigate(service.screenTarget);
    } else {
      onNavigate('checkout');
    }
  };

  const handleBookNow = (e: React.MouseEvent, service: ServiceItem) => {
    e.stopPropagation();
    onSelectService(service);
    onNavigate('checkout');
  };

  return (
    <div className="w-full min-h-screen">
      {/* Search & Filter Hero */}
      <section className="py-12 md:py-16 px-4 md:px-16 max-w-[1280px] mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00000b] mb-4 tracking-tight">
            Expert Services, On Demand.
          </h1>
          <p className="text-base sm:text-lg text-[#47464c] mb-8 leading-relaxed">
            Premium home maintenance engineered for modern life. Transparent pricing, verified professionals, and digital guarantees.
          </p>

          {/* Search Input Bar */}
          <div className="relative mb-6">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#00000b] text-2xl">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What service do you need today?"
              className="w-full pl-14 pr-6 py-4 sm:py-5 rounded-2xl border border-[#c8c5cd] focus:border-[#0058bf] focus:ring-2 focus:ring-[#0058bf]/20 text-base bg-white shadow-sm transition-all outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#78767d] hover:text-[#00000b]"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all active:scale-95 ${
                  selectedCategory === cat
                    ? 'bg-[#00000b] text-white shadow-sm'
                    : 'bg-white border border-[#c8c5cd] text-[#1a1c1c] hover:border-[#0058bf] hover:text-[#0058bf]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter if searching */}
        {searchQuery && (
          <div className="text-center text-xs text-[#78767d] mb-8">
            Showing {filteredServices.length} service{filteredServices.length === 1 ? '' : 's'} matching "{searchQuery}"
          </div>
        )}

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service)}
              className="bg-white rounded-2xl overflow-hidden border border-[#c8c5cd]/40 service-card-shadow group cursor-pointer flex flex-col justify-between transition-all hover:-translate-y-1 hover:border-[#0058bf]"
            >
              <div>
                <div className="h-60 overflow-hidden relative bg-[#eeeeee]">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {service.verified && (
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-[#00000b] text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          verified
                        </span>
                        Verified
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8">
                  {service.warrantyIncluded && (
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <span className="material-symbols-outlined text-[#0058bf] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                        workspace_premium
                      </span>
                      <span className="text-[#0058bf] text-xs font-semibold">
                        Digital Warranty included
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-[#00000b] mb-2 group-hover:text-[#0058bf] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#47464c] line-clamp-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t border-[#c8c5cd]/30 flex justify-between items-center">
                <div>
                  <span className="text-[11px] text-[#78767d] block uppercase font-medium">Starting at</span>
                  <span className="text-2xl font-extrabold text-[#00000b]">
                    ${service.basePrice}
                  </span>
                </div>
                <button
                  onClick={(e) => handleBookNow(e, service)}
                  className="bg-[#0058bf] hover:bg-[#004396] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-sm"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Empty State */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#c8c5cd]/40 mt-8">
            <span className="material-symbols-outlined text-5xl text-[#78767d] mb-3">search_off</span>
            <h3 className="text-lg font-bold text-[#00000b]">No matching services found</h3>
            <p className="text-sm text-[#47464c] mt-1 mb-4">Try clearing your filters or search keywords.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2 bg-[#00000b] text-white text-xs font-semibold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-16 text-center">
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 font-bold text-sm text-[#00000b] hover:text-[#0058bf] group transition-colors"
            >
              View All Services
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        )}
      </section>

      {/* Guarantee Bento Section */}
      <section className="bg-[#1a1a2e] text-white py-20 md:py-24">
        <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 md:p-10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-[#0058bf]/50 transition-all">
              <span className="material-symbols-outlined text-4xl mb-6 text-[#aec6ff]">
                verified_user
              </span>
              <h4 className="text-xl font-bold mb-3 text-white">Full Digital Warranty</h4>
              <p className="text-sm text-[#83829b] leading-relaxed">
                Every service is backed by our 30-day digital guarantee. Track claims directly in the app.
              </p>
            </div>

            <div className="p-8 md:p-10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-[#0058bf]/50 transition-all">
              <span className="material-symbols-outlined text-4xl mb-6 text-[#aec6ff]">
                electric_bolt
              </span>
              <h4 className="text-xl font-bold mb-3 text-white">60-Min Response</h4>
              <p className="text-sm text-[#83829b] leading-relaxed">
                Urgent repairs prioritized with our rapid-dispatch fleet. Professional help in under an hour.
              </p>
            </div>

            <div className="p-8 md:p-10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-[#0058bf]/50 transition-all">
              <span className="material-symbols-outlined text-4xl mb-6 text-[#aec6ff]">
                payments
              </span>
              <h4 className="text-xl font-bold mb-3 text-white">Transparent Pricing</h4>
              <p className="text-sm text-[#83829b] leading-relaxed">
                No hidden fees or "onsite estimates." What you see in the catalog is what you pay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

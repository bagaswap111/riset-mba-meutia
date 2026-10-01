import React, { useState } from 'react';
import { ScreenId, ServiceItem, BookingState } from '../../types';
import { SERVICES, PROFIX_IMAGES } from '../../data/services';

interface ACDetailScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onInitiateBooking: (customBooking?: Partial<BookingState>) => void;
}

export const ACDetailScreen: React.FC<ACDetailScreenProps> = ({
  onNavigate,
  onInitiateBooking
}) => {
  const service = SERVICES.find((s) => s.id === 'ac-deep-cleaning') || SERVICES[0];
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedWindow, setSelectedWindow] = useState('Morning (08:00 - 12:00)');

  const serviceFee = 55.0;
  const vat = 2.75;
  const total = serviceFee + vat;

  const handleProceed = () => {
    onInitiateBooking({
      serviceId: service.id,
      serviceTitle: service.title,
      serviceSubtitle: 'Antimicrobial sterilization & coil chemical wash',
      serviceImage: PROFIX_IMAGES.acCleanHero,
      price: serviceFee,
      serviceFee: 4.5,
      tax: vat,
      total: total + 4.5,
      date: selectedDate === 'Today' ? 'Oct 24, 2023 (Today)' : selectedDate,
      arrivalWindow: selectedWindow,
      timeSlot: selectedWindow.includes('Morning') ? '09:00 AM' : '02:00 PM'
    });
    onNavigate('checkout');
  };

  return (
    <div className="w-full min-h-screen py-8 px-4 md:px-16 max-w-[1280px] mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-8 text-xs sm:text-sm font-semibold text-[#47464c]">
        <button
          onClick={() => onNavigate('services')}
          className="hover:text-[#0058bf] transition-colors"
        >
          Services
        </button>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <button
          onClick={() => onNavigate('services')}
          className="hover:text-[#0058bf] transition-colors"
        >
          AC Maintenance
        </button>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-[#00000b] font-bold">AC Deep Cleaning</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left Column: Details */}
        <div className="lg:col-span-8 space-y-12">
          {/* Hero Banner */}
          <section>
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-sm border border-[#c8c5cd]/40 mb-6 bg-[#eeeeee]">
              <img
                src={PROFIX_IMAGES.acCleanHero}
                alt="AC Deep Cleaning technician"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-[#00000b] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                  Verified Pro
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-[#00000b] tracking-tight">
                    AC Deep Cleaning
                  </h1>
                  <p className="text-[#47464c] text-base mt-2 max-w-2xl leading-relaxed">
                    Restore your unit's factory performance with our signature antimicrobial sterilization and chemical coil cleaning.
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0058bf]">$55</div>
                  <div className="inline-flex items-center gap-1 text-[#001a42] text-xs font-semibold bg-[#d8e2ff] px-2.5 py-1 rounded-md mt-1">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      security
                    </span>
                    Digital Warranty Included
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What's Included Card */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#c8c5cd]/40 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[#00000b] mb-6">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#0058bf] text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <div>
                  <h3 className="font-bold text-sm text-[#00000b]">Jet-Wash Coil Cleaning</h3>
                  <p className="text-xs sm:text-sm text-[#47464c] mt-0.5">High-pressure water cleaning for internal evaporators.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#0058bf] text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <div>
                  <h3 className="font-bold text-sm text-[#00000b]">Antimicrobial Treatment</h3>
                  <p className="text-xs sm:text-sm text-[#47464c] mt-0.5">FDA-approved sterilization spray to eliminate bacteria.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#0058bf] text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <div>
                  <h3 className="font-bold text-sm text-[#00000b]">Drain Line Flush</h3>
                  <p className="text-xs sm:text-sm text-[#47464c] mt-0.5">Clearing blockages to prevent leakage and water damage.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#0058bf] text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <div>
                  <h3 className="font-bold text-sm text-[#00000b]">Performance Check</h3>
                  <p className="text-xs sm:text-sm text-[#47464c] mt-0.5">Post-service gas pressure and temperature testing.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Process Roadmap */}
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#c8c5cd]/40 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[#00000b] mb-8">Process Roadmap</h2>
            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4 px-2">
              <div className="absolute top-6 left-6 right-6 h-[2px] bg-[#eeeeee] hidden md:block -z-0"></div>

              <div className="flex md:flex-col items-center gap-4 text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#00000b] text-white flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-lg">troubleshoot</span>
                </div>
                <div className="text-left md:text-center">
                  <h4 className="font-bold text-sm text-[#00000b]">Diagnosis</h4>
                  <p className="text-xs text-[#78767d]">Initial health check</p>
                </div>
              </div>

              <div className="flex md:flex-col items-center gap-4 text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#0058bf] text-white flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-lg">cleaning_services</span>
                </div>
                <div className="text-left md:text-center">
                  <h4 className="font-bold text-sm text-[#00000b]">Cleaning</h4>
                  <p className="text-xs text-[#78767d]">Deep chemical wash</p>
                </div>
              </div>

              <div className="flex md:flex-col items-center gap-4 text-center relative z-10">
                <div className="w-12 h-12 rounded-full border-2 border-[#0058bf] bg-white text-[#0058bf] flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-lg">sanitizer</span>
                </div>
                <div className="text-left md:text-center">
                  <h4 className="font-bold text-sm text-[#00000b]">Sterilization</h4>
                  <p className="text-xs text-[#78767d]">Antimicrobial coating</p>
                </div>
              </div>

              <div className="flex md:flex-col items-center gap-4 text-center relative z-10">
                <div className="w-12 h-12 rounded-full border-2 border-[#c8c5cd] bg-white text-[#78767d] flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-lg">assignment_turned_in</span>
                </div>
                <div className="text-left md:text-center">
                  <h4 className="font-bold text-sm text-[#00000b]">Warranty</h4>
                  <p className="text-xs text-[#78767d]">Digital logging</p>
                </div>
              </div>
            </div>
          </section>

          {/* Verified Customer Reviews */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#00000b]">Verified Customer Reviews</h2>

            <div className="p-6 bg-white border border-[#c8c5cd]/40 rounded-2xl shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d8e2ff] flex items-center justify-center text-[#001a42] font-bold text-xs">
                    JD
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#00000b]">James D.</div>
                    <div className="text-xs text-[#78767d]">Verified Service • 2 days ago</div>
                  </div>
                </div>
                <div className="flex text-[#0058bf] gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-[#47464c] italic leading-relaxed">
                "Extremely professional. The technician arrived exactly on time and even showed me the before/after photos of the internal coils. Huge difference in air quality."
              </p>
            </div>

            <div className="p-6 bg-white border border-[#c8c5cd]/40 rounded-2xl shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#e2e0fc] flex items-center justify-center text-[#1a1a2e] font-bold text-xs">
                    SK
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#00000b]">Sarah K.</div>
                    <div className="text-xs text-[#78767d]">Verified Service • 1 week ago</div>
                  </div>
                </div>
                <div className="flex text-[#0058bf] gap-0.5">
                  {[1, 2, 3, 4].map((s) => (
                    <span key={s} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                  <span className="material-symbols-outlined text-[16px]">star</span>
                </div>
              </div>
              <p className="text-sm text-[#47464c] italic leading-relaxed">
                "The process was very clean. They used plastic coverings to protect my walls and furniture. My AC is cooling like it's brand new."
              </p>
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Booking Sidebar */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-white border border-[#c8c5cd]/50 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#00000b] mb-6">Book Service</h3>

              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#00000b] block mb-2">
                    Preferred Date
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Today', 'Tomorrow', 'Oct 24'].map((d) => (
                      <button
                        key={d}
                        onClick={() => setSelectedDate(d)}
                        className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                          selectedDate === d
                            ? 'border-2 border-[#0058bf] bg-[#d8e2ff] text-[#001a42]'
                            : 'border border-[#c8c5cd] text-[#47464c] hover:border-[#0058bf]'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#00000b] block mb-2">
                    Arrival Window
                  </label>
                  <select
                    value={selectedWindow}
                    onChange={(e) => setSelectedWindow(e.target.value)}
                    className="w-full bg-[#eeeeee] border border-[#c8c5cd] rounded-xl p-3 text-sm text-[#1a1c1c] font-medium focus:ring-2 focus:ring-[#0058bf]/30 focus:border-[#0058bf] outline-none"
                  >
                    <option>Morning (08:00 - 12:00)</option>
                    <option>Afternoon (12:00 - 16:00)</option>
                    <option>Evening (16:00 - 20:00)</option>
                  </select>
                </div>

                <div className="border-t border-[#c8c5cd]/30 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between text-[#47464c]">
                    <span>Service Fee</span>
                    <span className="font-semibold text-[#1a1c1c]">${serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#47464c]">
                    <span>VAT (5%)</span>
                    <span className="font-semibold text-[#1a1c1c]">${vat.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-end border-t border-dashed border-[#c8c5cd] pt-3 text-[#00000b]">
                    <span className="font-bold text-base">Total</span>
                    <span className="text-2xl font-extrabold text-[#0058bf]">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleProceed}
                  className="w-full bg-[#00000b] hover:bg-[#0058bf] text-white py-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
                >
                  Proceed to Booking
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
                <p className="text-center text-[11px] text-[#78767d]">
                  No charge until service is completed.
                </p>
              </div>
            </div>

            {/* Premium Assurance */}
            <div className="bg-[#1a1a2e] p-6 rounded-2xl text-white shadow-md">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="material-symbols-outlined text-[#aec6ff] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  workspace_premium
                </span>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#aec6ff]">
                  Premium Assurance
                </h4>
              </div>
              <ul className="space-y-3 text-xs text-[#83829b]">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#aec6ff]">done_all</span>
                  30-Day Service Guarantee
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#aec6ff]">done_all</span>
                  $1M Liability Protection
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#aec6ff]">done_all</span>
                  Background Checked Pros
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

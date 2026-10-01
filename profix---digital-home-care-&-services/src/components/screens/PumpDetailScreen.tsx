import React from 'react';
import { ScreenId, BookingState } from '../../types';
import { SERVICES, PROFIX_IMAGES } from '../../data/services';
import { calculateBookingTotals } from '../../data/pricing';

interface PumpDetailScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onInitiateBooking: (customBooking?: Partial<BookingState>) => void;
}

export const PumpDetailScreen: React.FC<PumpDetailScreenProps> = ({
  onNavigate,
  onInitiateBooking
}) => {
  const service = SERVICES.find((s) => s.id === 'pump-calibration') || SERVICES[3];

  const handleProceed = () => {
    const totals = calculateBookingTotals(service.basePrice);
    onInitiateBooking({
      serviceId: service.id,
      serviceTitle: service.title,
      serviceSubtitle: 'Electronic pressure calibration & motor optimization',
      serviceImage: PROFIX_IMAGES.pumpHero,
      price: totals.servicePrice,
      serviceFee: totals.platformFee,
      tax: totals.tax,
      total: totals.total,
      date: '',
      arrivalWindow: 'Morning (08:00 - 12:00)',
      timeSlot: '11:30 AM'
    });
  };

  return (
    <div className="w-full min-h-screen py-10 px-4 md:px-16 max-w-[1280px] mx-auto">
      {/* Hero Section with Ambient Card */}
      <section className="mb-16">
        <div className="relative w-full h-[380px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl group bg-[#1a1a2e]">
          <img
            src={PROFIX_IMAGES.pumpHero}
            alt="Pump System Calibration"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00000b]/85 via-[#00000b]/60 to-transparent flex items-center p-8 md:p-16">
            <div className="max-w-xl text-white">
              <span className="bg-[#0058bf] px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-5 inline-block">
                PREMIUM SERVICE
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">
                Pump System Calibration
              </h1>
              <p className="text-sm sm:text-base text-[#83829b] leading-relaxed mb-6">
                Precision-engineered tuning for industrial and residential water systems. Maximize efficiency, reduce noise, and extend pump lifespan with our expert calibration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Details & Roadmap */}
        <div className="lg:col-span-8 space-y-16">
          {/* What's Included */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#00000b] mb-8">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#c8c5cd]/40 shadow-sm hover:border-[#0058bf] transition-all">
                <span className="material-symbols-outlined text-[#0058bf] text-3xl mb-4">
                  compress
                </span>
                <h3 className="font-bold text-sm text-[#00000b] mb-2">Pressure Testing</h3>
                <p className="text-xs sm:text-sm text-[#47464c] leading-relaxed">
                  Real-time monitoring and stress testing to ensure system integrity under peak load conditions.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#c8c5cd]/40 shadow-sm hover:border-[#0058bf] transition-all">
                <span className="material-symbols-outlined text-[#0058bf] text-3xl mb-4">
                  bolt
                </span>
                <h3 className="font-bold text-sm text-[#00000b] mb-2">Motor Efficiency</h3>
                <p className="text-xs sm:text-sm text-[#47464c] leading-relaxed">
                  Precision amperage and voltage calibration to reduce energy consumption by up to 15%.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#c8c5cd]/40 shadow-sm hover:border-[#0058bf] transition-all">
                <span className="material-symbols-outlined text-[#0058bf] text-3xl mb-4">
                  settings_input_component
                </span>
                <h3 className="font-bold text-sm text-[#00000b] mb-2">Sensor Replacement</h3>
                <p className="text-xs sm:text-sm text-[#47464c] leading-relaxed">
                  Installation of high-precision digital sensors for accurate autonomous flow management.
                </p>
              </div>
            </div>
          </section>

          {/* Process Roadmap */}
          <section className="bg-white p-8 rounded-2xl border border-[#c8c5cd]/40 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#00000b] mb-8">Process Roadmap</h2>
            <div className="relative flex flex-col gap-10">
              {/* Vertical connector */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-[#eeeeee] hidden md:block md:left-1/2 md:-translate-x-1/2"></div>

              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:justify-between group">
                <div className="md:w-[45%] md:text-right">
                  <h4 className="text-lg font-bold text-[#00000b]">01. Analysis</h4>
                  <p className="text-xs sm:text-sm text-[#47464c] mt-1 leading-relaxed">
                    Comprehensive acoustic and thermal diagnostic scan of the entire pump housing.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#0058bf] text-white flex items-center justify-center font-bold text-sm z-10 shadow-md">
                  1
                </div>
                <div className="md:w-[45%] hidden md:block"></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:justify-between group">
                <div className="md:w-[45%] hidden md:block"></div>
                <div className="w-12 h-12 rounded-full bg-[#00000b] text-white flex items-center justify-center font-bold text-sm z-10 shadow-md">
                  2
                </div>
                <div className="md:w-[45%] text-left">
                  <h4 className="text-lg font-bold text-[#00000b]">02. Tuning</h4>
                  <p className="text-xs sm:text-sm text-[#47464c] mt-1 leading-relaxed">
                    Mechanical adjustment of impeller clearance and electronic sensor syncing.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:justify-between group">
                <div className="md:w-[45%] md:text-right">
                  <h4 className="text-lg font-bold text-[#00000b]">03. Verification</h4>
                  <p className="text-xs sm:text-sm text-[#47464c] mt-1 leading-relaxed">
                    Post-service efficiency audit with a digital performance report delivered via app.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-[#c8c5cd] bg-white text-[#78767d] flex items-center justify-center font-bold text-sm z-10 shadow-md">
                  3
                </div>
                <div className="md:w-[45%] hidden md:block"></div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Pricing & Techs */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="bg-[#1a1a2e] text-white p-8 sm:p-10 rounded-2xl shadow-xl overflow-hidden relative">
            <h3 className="text-xs font-bold text-[#aec6ff] uppercase tracking-widest mb-2">
              Service Fee
            </h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-extrabold text-white">$75</span>
              <span className="text-sm text-[#83829b]">/ calibration</span>
            </div>

            <ul className="space-y-4 mb-8 text-sm">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#aec6ff] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>On-site diagnostic</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#aec6ff] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>Parts discount included</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#aec6ff] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>6-month guarantee</span>
              </li>
            </ul>

            <button
              onClick={handleProceed}
              className="w-full bg-[#0058bf] hover:bg-[#004396] text-white py-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
            >
              Proceed to Booking
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>

          <div className="bg-[#f3f3f3] p-6 rounded-2xl border border-[#c8c5cd]/40 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1a1a2e] flex items-center justify-center text-[#aec6ff] shrink-0">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
            </div>
            <div>
              <p className="font-bold text-sm text-[#00000b]">Certified Techs</p>
              <p className="text-xs text-[#47464c]">Vetted Professionals Only</p>
            </div>
          </div>
        </aside>
      </div>

    </div>
  );
};

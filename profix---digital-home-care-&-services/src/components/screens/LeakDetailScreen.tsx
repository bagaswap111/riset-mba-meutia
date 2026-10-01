import React from 'react';
import { ScreenId, BookingState } from '../../types';
import { SERVICES, PROFIX_IMAGES } from '../../data/services';
import { calculateBookingTotals } from '../../data/pricing';

interface LeakDetailScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onInitiateBooking: (customBooking?: Partial<BookingState>) => void;
}

export const LeakDetailScreen: React.FC<LeakDetailScreenProps> = ({
  onNavigate,
  onInitiateBooking
}) => {
  const service = SERVICES.find((s) => s.id === 'smart-leak-detection') || SERVICES[1];

  const handleBookDiagnostic = () => {
    const totals = calculateBookingTotals(service.basePrice);
    onInitiateBooking({
      serviceId: service.id,
      serviceTitle: service.title,
      serviceSubtitle: 'Ultrasonic & Thermal acoustic audit',
      serviceImage: PROFIX_IMAGES.leakDetectionHero,
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
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-[#1a1a2e]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-[#1a1a2e]/85 to-transparent z-10"></div>
          <img
            src={PROFIX_IMAGES.leakDetectionHero}
            alt="Ultrasonic Leak Detection technician"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 w-full px-4 md:px-16 max-w-[1280px] mx-auto py-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#0058bf] text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest">
                Premium Service
              </span>
              <div className="flex items-center text-[#aec6ff] text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                Verified Tech
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Smart Leak Detection
            </h1>

            <p className="text-[#83829b] text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              Non-invasive diagnostic technology that finds hidden leaks with millimeter precision. Protect your home's integrity without a single unnecessary hole.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleBookDiagnostic}
                className="bg-[#0058bf] hover:bg-[#004396] text-white px-8 py-4 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg"
              >
                Start Diagnostics
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('precision-diagnostics');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-sm transition-all active:scale-95"
              >
                View Technology
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Precision Diagnostics */}
      <section className="py-20 md:py-24 px-4 md:px-16 max-w-[1280px] mx-auto" id="precision-diagnostics">
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-[#00000b] mb-3">Precision Diagnostics</h2>
          <p className="text-sm sm:text-base text-[#47464c] max-w-2xl leading-relaxed">
            Our smart toolkit combines acoustic, thermal, and visual sensors to map your plumbing ecosystem from the outside in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#f3f3f3] p-8 rounded-2xl border border-[#c8c5cd]/40 hover:border-[#0058bf] transition-all group shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#0058bf]/10 flex items-center justify-center mb-6 text-[#0058bf]">
              <span className="material-symbols-outlined text-2xl">graphic_eq</span>
            </div>
            <h3 className="text-xl font-bold text-[#00000b] mb-3">Ultrasonic Testing</h3>
            <p className="text-sm text-[#47464c] leading-relaxed">
              High-frequency acoustic sensors pinpoint the exact vibration profile of pressurized water escaping pipes, even behind thick masonry.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f3f3f3] p-8 rounded-2xl border border-[#c8c5cd]/40 hover:border-[#0058bf] transition-all group shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#0058bf]/10 flex items-center justify-center mb-6 text-[#0058bf]">
              <span className="material-symbols-outlined text-2xl">thermostat</span>
            </div>
            <h3 className="text-xl font-bold text-[#00000b] mb-3">Thermal Imaging</h3>
            <p className="text-sm text-[#47464c] leading-relaxed">
              FLIR technology detects temperature anomalies caused by moisture accumulation, revealing saturated areas invisible to the human eye.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f3f3f3] p-8 rounded-2xl border border-[#c8c5cd]/40 hover:border-[#0058bf] transition-all group shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#0058bf]/10 flex items-center justify-center mb-6 text-[#0058bf]">
              <span className="material-symbols-outlined text-2xl">videocam</span>
            </div>
            <h3 className="text-xl font-bold text-[#00000b] mb-3">Pipe Inspection</h3>
            <p className="text-sm text-[#47464c] leading-relaxed">
              Micro-robotic HD cameras navigate your drainage system to provide a real-time visual feed of internal structural integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Your Path to Resolution */}
      <section className="py-20 md:py-24 bg-[#eeeeee]">
        <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#00000b] mb-2">Your Path to Resolution</h2>
            <p className="text-base text-[#47464c]">Four steps to a dry, secure home.</p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-2xl border border-[#c8c5cd]/40 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#0058bf] text-white flex items-center justify-center mx-auto mb-4 font-bold shadow-md">
                  1
                </div>
                <h4 className="font-bold text-sm text-[#00000b] mb-2">Sensor Mapping</h4>
                <p className="text-xs text-[#47464c] leading-relaxed">
                  Deployment of acoustic sensors across your primary lines.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-2xl border border-[#c8c5cd]/40 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#0058bf] text-white flex items-center justify-center mx-auto mb-4 font-bold shadow-md">
                  2
                </div>
                <h4 className="font-bold text-sm text-[#00000b] mb-2">Signal Analysis</h4>
                <p className="text-xs text-[#47464c] leading-relaxed">
                  Digital triangulation of sound peaks to isolate the leak zone.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-2xl border border-[#c8c5cd]/40 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#0058bf] text-white flex items-center justify-center mx-auto mb-4 font-bold shadow-md">
                  3
                </div>
                <h4 className="font-bold text-sm text-[#00000b] mb-2">Visual Confirmation</h4>
                <p className="text-xs text-[#47464c] leading-relaxed">
                  Thermal and video verification of the suspected fault area.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-2xl border border-[#c8c5cd]/40 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#78767d] text-white flex items-center justify-center mx-auto mb-4 font-bold shadow-md">
                  4
                </div>
                <h4 className="font-bold text-sm text-[#00000b] mb-2">Repair Blueprint</h4>
                <p className="text-xs text-[#47464c] leading-relaxed">
                  Generation of a surgical repair plan and quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA Audit Section */}
      <section className="py-20 md:py-24 px-4 md:px-16 max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00000b] tracking-tight">
            Start with a Professional Audit
          </h2>
          <p className="text-base sm:text-lg text-[#47464c] leading-relaxed">
            We offer a flat-fee diagnostic service. No hidden costs, no hourly overruns. Just clear answers backed by sensor data.
          </p>
          <ul className="space-y-4 text-sm sm:text-base text-[#1a1c1c]">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#0058bf] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <span>Full property acoustic scan</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#0058bf] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <span>Digital leak report with PDF evidence</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#0058bf] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <span>Credit towards any subsequent repairs</span>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-[420px] shrink-0">
          <div className="bg-[#1a1a2e] p-8 sm:p-10 rounded-3xl text-white shadow-2xl border border-white/10 relative overflow-hidden">
            <span className="text-[#aec6ff] text-xs font-bold uppercase tracking-widest mb-2 block">
              Standard Diagnostic
            </span>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-white text-5xl font-extrabold">$89</span>
              <span className="text-[#83829b] text-sm font-medium">/ session</span>
            </div>
            <p className="text-xs text-[#83829b] mb-8 italic">
              Average duration: 45 - 60 minutes
            </p>
            <button
              onClick={handleBookDiagnostic}
              className="w-full bg-[#0058bf] hover:bg-[#004396] text-white py-4 rounded-xl font-bold text-sm sm:text-base transition-all active:scale-95 mb-4 shadow-lg"
            >
              Book Diagnostic Now
            </button>
            <p className="text-center text-xs text-[#83829b]">
              Money-back accuracy guarantee
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

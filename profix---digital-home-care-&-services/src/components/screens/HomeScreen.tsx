import React, { useState } from 'react';
import { ScreenId } from '../../types';
import { PROFIX_IMAGES } from '../../data/services';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectServiceAndBook?: (serviceId: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectServiceAndBook
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [resultsActiveIndex, setResultsActiveIndex] = useState(0);

  const faqs = [
    {
      q: 'How does the digital warranty work?',
      a: 'Every service record is stored in our secure cloud. You receive a link to your digital service passport containing photos, part numbers, and a 12-month clickable claim button for instant warranty support.'
    },
    {
      q: 'What is "Flat-Rate" pricing?',
      a: 'Unlike traditional firms that charge by the hour, we charge a base fee for the diagnosis and standardized labor rates for specific tasks. This ensures you pay for results, not time.'
    },
    {
      q: 'Are your technicians certified?',
      a: 'Yes, all ProFix technicians undergo a rigorous 3-stage vetting process including background checks, trade certification verification, and our proprietary Digital Service SOP training.'
    }
  ];

  const resultsItems = [
    {
      title: 'Deep AC Sanitization',
      desc: 'Efficiency increased by 35% after complete allergen removal.',
      beforeImg: PROFIX_IMAGES.beforeAC,
      afterImg: PROFIX_IMAGES.afterAC
    },
    {
      title: 'Leak Resolution',
      desc: 'Emergency pipe restoration with 5-year sealant guarantee.',
      beforeImg: PROFIX_IMAGES.beforeLeak,
      afterImg: PROFIX_IMAGES.afterLeak
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-8 pb-20 md:pt-12 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1a1a2e]/5 -z-10 hidden lg:block"></div>
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0058bf]/10 text-[#0058bf] border border-[#0058bf]/20 text-xs font-semibold tracking-wider uppercase">
              <span className="material-symbols-outlined text-[18px] text-[#0058bf]" style={{ fontVariationSettings: "'FILL' 1" }}>
                science
              </span>
              RESEARCH PROTOTYPE · SAMPLE DATA
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-[#00000b]">
              Expert Home Care, <br />
              <span className="text-[#0058bf]">Digitally Delivered.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#47464c] max-w-lg leading-relaxed">
              Research prototype for AC, plumbing and pump service discovery. Prices, partners,
              and warranty terms are sample data and have not been confirmed.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavigate('services')}
                className="bg-[#00000b] hover:bg-[#0058bf] text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all shadow-lg active:scale-95"
              >
                Explore Services
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('process');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-[#00000b] text-[#00000b] hover:bg-[#00000b] hover:text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all active:scale-95"
              >
                How it Works
              </button>
            </div>
          </div>

          {/* Right Hero Image & Floating Badge */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#c8c5cd]/30 bg-[#eeeeee]">
              <img
                src={PROFIX_IMAGES.heroTech}
                alt="A professional male HVAC technician holding a diagnostic tablet"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-5 sm:p-6 rounded-2xl shadow-xl border border-[#c8c5cd]/40 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0058bf]/10 rounded-full flex items-center justify-center text-[#0058bf]">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    timer
                  </span>
                </div>
                <div>
                  <div className="font-bold text-sm text-[#00000b]">Response time not available</div>
                  <div className="text-xs text-[#47464c]">No partner dispatch connected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flat-Rate Service Fees Section */}
      <section className="py-20 md:py-24 bg-[#f3f3f3]" id="services">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00000b] mb-4">Flat-Rate Service Fees</h2>
          <p className="text-base text-[#47464c]">
            No hidden costs. Just professional excellence starting from base rates.
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AC Card */}
          <div className="bg-white p-8 rounded-2xl border border-[#c8c5cd]/50 hover:border-[#0058bf] transition-all group shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-[#1a1a2e] text-[#aec6ff] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">ac_unit</span>
              </div>
              <h3 className="text-xl font-bold text-[#00000b] mb-2">AC Maintenance</h3>
              <p className="text-sm text-[#47464c] mb-6 leading-relaxed">
                Complete filter cleaning, pressure check, and performance tuning.
              </p>
            </div>
            <div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-xs text-[#47464c]">from</span>
                <span className="text-3xl font-extrabold text-[#00000b]">$49</span>
              </div>
              <button
                onClick={() => onNavigate('service-ac')}
                className="w-full py-3 rounded-lg border border-[#78767d] text-[#00000b] font-semibold text-sm group-hover:bg-[#00000b] group-hover:text-white transition-all text-center block"
              >
                View Details
              </button>
            </div>
          </div>

          {/* Plumbing Card */}
          <div className="bg-white p-8 rounded-2xl border border-[#c8c5cd]/50 hover:border-[#0058bf] transition-all group shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-[#1a1a2e] text-[#aec6ff] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">plumbing</span>
              </div>
              <h3 className="text-xl font-bold text-[#00000b] mb-2">Plumbing Expert</h3>
              <p className="text-sm text-[#47464c] mb-6 leading-relaxed">
                Leak detection, fixture repair, and drainage optimization.
              </p>
            </div>
            <div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-xs text-[#47464c]">from</span>
                <span className="text-3xl font-extrabold text-[#00000b]">$39</span>
              </div>
              <button
                onClick={() => onNavigate('service-leak')}
                className="w-full py-3 rounded-lg border border-[#78767d] text-[#00000b] font-semibold text-sm group-hover:bg-[#00000b] group-hover:text-white transition-all text-center block"
              >
                View Details
              </button>
            </div>
          </div>

          {/* Pump Card */}
          <div className="bg-white p-8 rounded-2xl border border-[#c8c5cd]/50 hover:border-[#0058bf] transition-all group shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-[#1a1a2e] text-[#aec6ff] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">water_pump</span>
              </div>
              <h3 className="text-xl font-bold text-[#00000b] mb-2">Pump Systems</h3>
              <p className="text-sm text-[#47464c] mb-6 leading-relaxed">
                Booster pump repair, sensor replacement, and tank servicing.
              </p>
            </div>
            <div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-xs text-[#47464c]">from</span>
                <span className="text-3xl font-extrabold text-[#00000b]">$59</span>
              </div>
              <button
                onClick={() => onNavigate('service-pump')}
                className="w-full py-3 rounded-lg border border-[#78767d] text-[#00000b] font-semibold text-sm group-hover:bg-[#00000b] group-hover:text-white transition-all text-center block"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SOP Roadmap / Our Service Protocol */}
      <section className="py-20 md:py-24" id="process">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00000b] mb-4">Our Service Protocol</h2>
            <p className="text-base text-[#47464c]">
              Experience a new standard of reliability through our 4-step roadmap.
            </p>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-4">
            {/* Horizontal Line on Desktop */}
            <div className="absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-[#c8c5cd]/40 hidden md:block -z-0"></div>

            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center z-10 group">
              <div className="w-14 h-14 bg-[#0058bf] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 ring-8 ring-[#f9f9f9] shadow-md group-hover:scale-105 transition-transform">
                1
              </div>
              <h4 className="font-bold text-base text-[#00000b] mb-2">Diagnosis</h4>
              <p className="text-xs text-[#47464c] leading-relaxed max-w-xs">
                AI-assisted assessment of the system fault.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center z-10 group">
              <div className="w-14 h-14 bg-[#0058bf] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 ring-8 ring-[#f9f9f9] shadow-md group-hover:scale-105 transition-transform">
                2
              </div>
              <h4 className="font-bold text-base text-[#00000b] mb-2">Estimation</h4>
              <p className="text-xs text-[#47464c] leading-relaxed max-w-xs">
                Instant digital quote with itemized parts cost.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center z-10 group">
              <div className="w-14 h-14 bg-[#0058bf] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 ring-8 ring-[#f9f9f9] shadow-md group-hover:scale-105 transition-transform">
                3
              </div>
              <h4 className="font-bold text-base text-[#00000b] mb-2">Repair</h4>
              <p className="text-xs text-[#47464c] leading-relaxed max-w-xs">
                SOP-based precision repair by certified pros.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col items-center text-center z-10 group">
              <div className="w-14 h-14 bg-[#00000b] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 ring-8 ring-[#f9f9f9] shadow-md group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[22px]">check</span>
              </div>
              <h4 className="font-bold text-base text-[#00000b] mb-2">Digital Warranty</h4>
              <p className="text-xs text-[#47464c] leading-relaxed max-w-xs">
                Lifetime logs and 12-month digital guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Results / Portfolio Hub */}
      <section className="py-20 md:py-24 bg-[#1a1a2e] text-white" id="results">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Work Results</h2>
              <p className="text-sm md:text-base text-[#83829b]">
                Sample case studies. No partner work has been documented, so no result figures are
                claimed.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setResultsActiveIndex((prev) => (prev === 0 ? 1 : 0))}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0058bf] hover:border-[#0058bf] transition-colors"
                aria-label="Previous result"
              >
                <span className="material-symbols-outlined text-xl">arrow_back</span>
              </button>
              <button
                onClick={() => setResultsActiveIndex((prev) => (prev === 1 ? 0 : 1))}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0058bf] hover:border-[#0058bf] transition-colors"
                aria-label="Next result"
              >
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Result 1: Deep AC Sanitization */}
            <div className="group relative bg-white/5 p-6 rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/60">Before</span>
                  <div className="aspect-square rounded-2xl overflow-hidden bg-[#eeeeee]/10">
                    <img
                      src={PROFIX_IMAGES.beforeAC}
                      alt="Dirty AC coil before cleaning"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#aec6ff]">After</span>
                  <div className="aspect-square rounded-2xl overflow-hidden bg-[#eeeeee]/10">
                    <img
                      src={PROFIX_IMAGES.afterAC}
                      alt="Gleaming clean AC coil after ProFix"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-white">Deep AC Sanitization</h4>
                <p className="text-sm text-[#83829b] mt-1">
                  Efficiency increased by 35% after complete allergen removal.
                </p>
              </div>
            </div>

            {/* Result 2: Leak Resolution */}
            <div className="group relative bg-white/5 p-6 rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/60">Before</span>
                  <div className="aspect-square rounded-2xl overflow-hidden bg-[#eeeeee]/10">
                    <img
                      src={PROFIX_IMAGES.beforeLeak}
                      alt="Corroded leaking copper pipe"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#aec6ff]">After</span>
                  <div className="aspect-square rounded-2xl overflow-hidden bg-[#eeeeee]/10">
                    <img
                      src={PROFIX_IMAGES.afterLeak}
                      alt="Repaired PVC and copper plumbing connection"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-white">Leak Resolution</h4>
                <p className="text-sm text-[#83829b] mt-1">
                  Emergency pipe restoration with 5-year sealant guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Customer Stories */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00000b] mb-3">Customer Stories</h2>
            <p className="text-base text-[#47464c]">
              Direct feedback from our digital service community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Testimonial 1 */}
            <div className="bg-[#f3f3f3] p-8 rounded-2xl border border-[#c8c5cd]/30 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#d8e2ff] flex items-center justify-center font-bold text-[#001a42]">
                    JD
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#00000b]">James D.</h5>
                    <div className="flex text-[#0058bf] items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#1a1c1c] mb-6 italic leading-relaxed">
                  &ldquo;Sample review text used to test review card layout and read length. Not a
                  real customer quote.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#47464c] bg-[#eeeeee] px-3 py-1 rounded-full w-fit">
                <span className="material-symbols-outlined text-[14px]">
                  groups
                </span>
                Sample data · not a real review
              </div>
            </div>

            {/* Testimonial 2 (With UGC Image) */}
            <div className="bg-[#f3f3f3] p-6 rounded-2xl border border-[#c8c5cd]/30 shadow-sm">
              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-[#eeeeee]">
                <img
                  src={PROFIX_IMAGES.ugcCustomer}
                  alt="Customer living room with freshly maintained AC"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#e2e0fc] flex items-center justify-center font-bold text-[#1a1a2e]">
                  SC
                </div>
                <h5 className="font-bold text-sm text-[#00000b]">Sarah Chen</h5>
              </div>
              <p className="text-sm text-[#1a1c1c] italic leading-relaxed">
                "Best AC service in the city. The digital logs are so helpful for my property records!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#f3f3f3] p-8 rounded-2xl border border-[#c8c5cd]/30 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#0058bf] text-white flex items-center justify-center font-bold">
                    MK
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#00000b]">Mark K.</h5>
                    <span className="text-xs text-[#47464c]">Pump System Overhaul</span>
                  </div>
                </div>
                <p className="text-sm text-[#1a1c1c] mb-4 italic leading-relaxed">
                  "The level of transparency is unmatched. I knew exactly what I was paying for before they even touched the pump."
                </p>
              </div>
              <div className="flex text-[#0058bf] items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Fix FAQ */}
      <section className="py-20 md:py-24 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00000b] mb-3">Quick Fix FAQ</h2>
            <p className="text-base text-[#47464c]">
              Instant answers to common household service queries.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#c8c5cd]/50 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center p-6 text-left cursor-pointer bg-[#f9f9f9] hover:bg-[#eeeeee] transition-colors"
                  >
                    <span className="font-semibold text-base sm:text-lg text-[#00000b]">
                      {faq.q}
                    </span>
                    <span
                      className={`material-symbols-outlined text-2xl transition-transform duration-300 text-[#47464c] ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 text-sm text-[#47464c] leading-relaxed bg-[#f9f9f9] animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

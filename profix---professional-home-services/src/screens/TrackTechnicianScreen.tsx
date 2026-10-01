import React, { useState, useEffect } from 'react';
import { BookingState } from '../types';
import { IMAGES } from '../data/mockData';
import { CallModal } from '../components/CallModal';
import { SupportModal } from '../components/SupportModal';

interface TrackTechnicianScreenProps {
  booking: BookingState;
}

export const TrackTechnicianScreen: React.FC<TrackTechnicianScreenProps> = ({
  booking
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [etaMins, setEtaMins] = useState(12);
  const [distanceKm, setDistanceKm] = useState(2.4);
  const [isCalling, setIsCalling] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [markerOffset, setMarkerOffset] = useState({ x: 0, y: 0 });

  // Simulate real-time GPS movement and ETA countdown
  useEffect(() => {
    let tick = 0;
    const interval = setInterval(() => {
      tick += 1;
      // Gentle orbital path simulating vehicle navigation along street
      const x = Math.sin(tick * 0.4) * 12 + Math.cos(tick * 0.2) * 6;
      const y = Math.cos(tick * 0.3) * 10 - (tick % 50) * 0.3;
      setMarkerOffset({ x, y });

      if (tick % 15 === 0) {
        setEtaMins((prev) => (prev > 2 ? prev - 1 : 12));
        setDistanceKm((prev) => (prev > 0.4 ? Number((prev - 0.1).toFixed(1)) : 2.4));
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.15, 1.6));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.15, 0.85));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col md:flex-row bg-[#f9f9f9] text-[#1a1c1c]">
      {/* Left Panel: Map Visualization (60%) */}
      <section className="relative w-full md:w-3/5 h-[480px] md:h-auto min-h-[480px] border-r border-[#c8c5cd]/30 bg-[#eeeeee] overflow-hidden select-none">
        {/* Map Background with zoom transform */}
        <div
          className="absolute inset-0 grayscale opacity-85 transition-transform duration-300 ease-out origin-center"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={IMAGES.mapDubai}
            alt="Peta Arsitektur Kota Dubai Metropolitan"
            className="w-full h-full object-cover"
          />

          {/* Simulated Route Polyline connecting Tech to Home */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d="M 28% 36% Q 38% 46%, 52% 58% T 74% 74%"
              fill="none"
              stroke="#006fef"
              strokeWidth="4"
              strokeDasharray="6 6"
              className="opacity-75"
            />
          </svg>
        </div>

        {/* Shimmer sweep effect over map */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer-sweep"></div>
        </div>

        {/* Map Overlays */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between pointer-events-none">
          {/* Top Status Badge */}
          <div className="flex justify-center pointer-events-auto">
            <div className="bg-[#00000b] text-white px-6 py-2.5 rounded-full shadow-xl flex items-center gap-2.5 backdrop-blur-md border border-white/15">
              <span className="material-symbols-outlined text-[#aec6ff] text-xl">speed</span>
              <span className="text-xs font-bold uppercase tracking-wider font-mono">
                ARRIVING IN {etaMins} MINS
              </span>
            </div>
          </div>

          {/* Map Markers Container */}
          <div className="relative flex-1">
            {/* User Location Pin */}
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 pointer-events-auto">
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-[#00000b] hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[#00000b] text-xl">home</span>
                </div>
                <div className="mt-1 bg-[#00000b]/90 text-white text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-tighter shadow-md">
                  Your Home
                </div>
              </div>
            </div>

            {/* Live Moving Technician Pin */}
            <div
              className="absolute top-1/3 left-1/4 pointer-events-auto transition-transform duration-700 ease-out"
              style={{
                transform: `translate(${markerOffset.x}px, ${markerOffset.y}px)`
              }}
            >
              <div className="relative flex flex-col items-center">
                {/* Speech Bubble */}
                <div className="mb-2 bg-white shadow-xl border border-[#c8c5cd]/40 px-3 py-1.5 rounded-xl flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-[#006fef] animate-ping"></span>
                  <span className="text-xs font-bold text-[#00000b]">Ahmed is en route</span>
                </div>

                {/* Pulsing Icon */}
                <div className="relative tech-pulse w-14 h-14 bg-[#006fef] rounded-full shadow-2xl flex items-center justify-center border-4 border-white cursor-pointer hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-white text-2xl">electric_bolt</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Controls & System Status */}
          <div className="flex justify-between items-end gap-4 pointer-events-auto">
            {/* System Status info box */}
            <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#c8c5cd]/40 shadow-md max-w-[260px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <h4 className="text-xs font-bold text-[#00000b] uppercase tracking-wider">System Status</h4>
              </div>
              <p className="text-[11px] leading-relaxed text-[#47464c]">
                Real-time GPS tracking enabled. Refreshing technician location every 5 seconds for maximum precision.
              </p>
            </div>

            {/* Zoom / Re-center Buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={handleZoomIn}
                className="w-10 h-10 bg-white rounded-xl shadow-md border border-[#c8c5cd]/40 flex items-center justify-center text-[#00000b] hover:bg-[#f3f3f3] active:scale-95 transition-all cursor-pointer"
                title="Zoom In"
              >
                <span className="material-symbols-outlined text-xl">add</span>
              </button>
              <button
                onClick={handleZoomOut}
                className="w-10 h-10 bg-white rounded-xl shadow-md border border-[#c8c5cd]/40 flex items-center justify-center text-[#00000b] hover:bg-[#f3f3f3] active:scale-95 transition-all cursor-pointer"
                title="Zoom Out"
              >
                <span className="material-symbols-outlined text-xl">remove</span>
              </button>
              <button
                onClick={handleResetZoom}
                className="w-10 h-10 bg-white rounded-xl shadow-md border border-[#c8c5cd]/40 flex items-center justify-center text-[#0058bf] hover:bg-[#f3f3f3] active:scale-95 transition-all cursor-pointer"
                title="Re-center"
              >
                <span className="material-symbols-outlined text-lg">my_location</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Right Panel: Status & Info (40%) */}
      <aside className="w-full md:w-2/5 bg-white flex flex-col custom-scrollbar overflow-y-auto border-t md:border-t-0">
        <div className="p-6 md:p-10 space-y-8">
          {/* Technician Profile Card */}
          <div className="bg-[#f3f3f3] rounded-2xl p-6 border border-[#c8c5cd]/40 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex gap-4 items-center">
                <div className="relative w-16 h-16 shrink-0">
                  <img
                    src={IMAGES.technicianAhmed}
                    alt="Ahmed K."
                    className="w-full h-full object-cover rounded-2xl border border-white shadow-sm"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-[#0058bf] text-white rounded-full p-0.5 border-2 border-white">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#00000b] tracking-tight">{booking.technicianName || 'Ahmed K.'}</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="flex text-[#0058bf]">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[16px]">
                          star
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#47464c]">4.9 (124 reviews)</span>
                  </div>
                  <span className="inline-block mt-1.5 px-2 py-0.5 bg-[#0058bf]/10 text-[#0058bf] text-[10px] font-bold rounded uppercase tracking-wider border border-[#0058bf]/20">
                    Verified Pro
                  </span>
                </div>
              </div>

              {/* Call Button */}
              <button
                onClick={() => setIsCalling(true)}
                className="w-12 h-12 bg-[#00000b] hover:bg-[#0058bf] text-white rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90 cursor-pointer"
                title="Panggil Teknisi"
              >
                <span className="material-symbols-outlined text-xl">call</span>
              </button>
            </div>
          </div>

          {/* Live Progress Stepper */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#78767d]">
              Live Progress
            </h4>

            <div className="relative pl-8 space-y-8">
              {/* Vertical Connecting Line */}
              <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-[#c8c5cd]/30"></div>

              {/* Step 1: Confirmed */}
              <div className="relative flex items-start gap-4">
                <div className="absolute -left-[23px] w-8 h-8 bg-[#00000b] rounded-full flex items-center justify-center text-white ring-4 ring-white shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#00000b] uppercase tracking-wider">Booking Confirmed</p>
                  <p className="text-xs text-[#78767d]">Order #PF-88210 verified</p>
                </div>
              </div>

              {/* Step 2: Assigned */}
              <div className="relative flex items-start gap-4">
                <div className="absolute -left-[23px] w-8 h-8 bg-[#00000b] rounded-full flex items-center justify-center text-white ring-4 ring-white shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#00000b] uppercase tracking-wider">Technician Assigned</p>
                  <p className="text-xs text-[#78767d]">Ahmed K. accepted the request</p>
                </div>
              </div>

              {/* Step 3: Active En Route */}
              <div className="relative flex items-start gap-4">
                <div className="absolute -left-[23px] w-8 h-8 bg-[#0058bf] rounded-full flex items-center justify-center text-white ring-4 ring-white shadow-md animate-pulse">
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0058bf] uppercase tracking-wider">En Route</p>
                  <p className="text-xs text-[#47464c] font-medium">
                    Technician is approximately {distanceKm}km away
                  </p>
                </div>
              </div>

              {/* Step 4: Service Start (Future) */}
              <div className="relative flex items-start gap-4 opacity-40">
                <div className="absolute -left-[23px] w-8 h-8 bg-white border-2 border-[#c8c5cd] rounded-full flex items-center justify-center text-[#78767d] ring-4 ring-white">
                  <span className="material-symbols-outlined text-[18px]">handyman</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#00000b] uppercase tracking-wider">Service Start</p>
                  <p className="text-xs text-[#78767d]">Expected at 2:15 PM</p>
                </div>
              </div>

              {/* Step 5: Warranty (Future) */}
              <div className="relative flex items-start gap-4 opacity-40">
                <div className="absolute -left-[23px] w-8 h-8 bg-white border-2 border-[#c8c5cd] rounded-full flex items-center justify-center text-[#78767d] ring-4 ring-white">
                  <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#00000b] uppercase tracking-wider">Digital Warranty Issued</p>
                  <p className="text-xs text-[#78767d]">12-month ProFix Guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Summary Card */}
          <div className="pt-6 border-t border-[#c8c5cd]/30 space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#78767d]">
                Service Summary
              </h4>
              <span className="text-[11px] font-bold text-[#00000b] bg-[#eeeeee] px-2.5 py-0.5 rounded-full font-mono">
                Order #PF-88210
              </span>
            </div>

            <div className="bg-[#f9f9f9] p-5 rounded-2xl border border-[#c8c5cd]/40 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a2e] flex items-center justify-center text-[#aec6ff]">
                  <span className="material-symbols-outlined text-2xl">ac_unit</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#00000b]">{booking.serviceTitle || 'AC Deep Cleaning'}</p>
                  <p className="text-[11px] text-[#78767d]">Full maintenance & sanitization</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#00000b]">$55.00</p>
                <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">PAID ONLINE</p>
              </div>
            </div>
          </div>

          {/* Heuristic Error Support Card */}
          <div
            onClick={() => setIsSupportOpen(true)}
            className="p-5 bg-[#1a1a2e] rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-[#00000b] transition-all shadow-md"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#006fef] flex items-center justify-center text-white shrink-0">
                <span className="material-symbols-outlined text-lg">help_center</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Something wrong?</p>
                <p className="text-[11px] text-[#83829b] group-hover:text-white/80 transition-colors">
                  Help us recognize and recover from errors.
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-white/50 group-hover:translate-x-1 transition-transform text-lg">
              arrow_forward_ios
            </span>
          </div>
        </div>
      </aside>

      {/* VoIP Calling Modal */}
      <CallModal
        isOpen={isCalling}
        onClose={() => setIsCalling(false)}
        technicianName={booking.technicianName || 'Ahmed K.'}
      />

      {/* Support & Heuristic Recovery Modal */}
      <SupportModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
        orderId="#PF-88210"
        technicianName={booking.technicianName || 'Ahmed K.'}
      />
    </div>
  );
};

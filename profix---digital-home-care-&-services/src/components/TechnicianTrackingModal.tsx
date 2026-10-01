import React, { useState } from 'react';
import { BookingState } from '../types';

interface TechnicianTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: BookingState;
}

export const TechnicianTrackingModal: React.FC<TechnicianTrackingModalProps> = ({
  isOpen,
  onClose,
  booking
}) => {
  const [eta, setEta] = useState(18);
  const [called, setCalled] = useState(false);
  const [chatNoteSent, setChatNoteSent] = useState(false);
  const [noteInput, setNoteInput] = useState('');

  if (!isOpen) return null;

  const handleSimulateCall = () => {
    setCalled(true);
    setTimeout(() => setCalled(false), 4000);
  };

  const handleSendNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (noteInput.trim()) {
      setChatNoteSent(true);
      setNoteInput('');
      setTimeout(() => setChatNoteSent(false), 4000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-[#c8c5cd]/40 max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#78767d] hover:text-[#00000b] p-1.5 rounded-full hover:bg-[#eeeeee] transition-colors z-10"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#eeeeee] pb-5 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#d8e2ff] text-[#0058bf] text-[11px] font-bold uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#0058bf] animate-ping"></span>
              Live Fleet Dispatch
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#00000b]">
              Technician En Route
            </h2>
            <p className="text-xs text-[#47464c]">
              Order {booking.orderId} • {booking.serviceTitle}
            </p>
          </div>
          <div className="text-right pr-8">
            <span className="text-2xl md:text-3xl font-extrabold text-[#0058bf] tabular-nums">
              {eta} <span className="text-xs font-normal text-[#47464c]">mins</span>
            </span>
            <div className="text-[11px] text-[#78767d]">Estimated Arrival</div>
          </div>
        </div>

        {/* Simulated GPS Radar / Map */}
        <div className="relative h-44 w-full bg-[#1a1a2e] rounded-xl overflow-hidden mb-6 border border-[#c8c5cd]/30 flex items-center justify-center">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          ></div>

          {/* Route path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 60 120 Q 200 40 340 90 T 560 60"
              fill="none"
              stroke="#0058bf"
              strokeWidth="4"
              strokeDasharray="6 6"
              className="animate-pulse"
            />
          </svg>

          {/* Customer destination pin */}
          <div className="absolute right-12 top-10 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-sm">home</span>
            </div>
            <span className="text-[10px] text-white font-semibold mt-1 bg-black/50 px-2 py-0.5 rounded">
              Your Home
            </span>
          </div>

          {/* Van moving indicator */}
          <div className="absolute left-1/3 top-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce">
            <div className="w-10 h-10 rounded-full bg-[#0058bf] text-white flex items-center justify-center shadow-xl border-2 border-white">
              <span className="material-symbols-outlined text-lg">local_shipping</span>
            </div>
            <span className="text-[10px] text-white font-bold mt-1 bg-[#0058bf] px-2 py-0.5 rounded-full shadow">
              ProFix Van #12
            </span>
          </div>

          <div className="absolute bottom-2 left-3 text-[11px] text-white/70 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Speed: 32 mph • Distance: 2.8 miles away
          </div>
        </div>

        {/* Technician Bio Card */}
        <div className="bg-[#f9f9f9] border border-[#c8c5cd]/50 rounded-xl p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOI8klBVE0UP0tbls2u3RvB3d5czX0uDpu6tXM0ZtxKWN3Imja_10aPFR23C95I12fWU-8X-x-muH5-k99yLfopSjJqOdOcH-oYEOAt3voD_j7HUE0H9CpuVtKhVX70VFTvxtprM8nNcwVzcfHgBVOZ4tgpALZIGiu7rs1TdqTPscf9lHQHdjHc_ONcl4jgitslwRzzQzx73xSwlpg2YvUJlNTL-9-g5TtcOPMZD4GPoxA9v2r1-1yZkvA2cKx95x_Q4WmQHkyoqMp"
                alt="Marcus Vance"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#0058bf]"
              />
              <span className="absolute -bottom-1 -right-1 bg-[#0058bf] text-white rounded-full p-0.5">
                <span className="material-symbols-outlined text-[12px]">verified</span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-sm text-[#00000b]">Marcus Vance</h4>
                <span className="text-[11px] bg-[#d8e2ff] text-[#001a42] px-2 py-0.5 rounded font-semibold">
                  Badge #PF-448
                </span>
              </div>
              <p className="text-xs text-[#47464c]">Certified HVAC & Diagnostic Specialist</p>
              <div className="flex items-center gap-3 mt-1 text-xs text-[#78767d]">
                <span className="flex items-center text-amber-500 font-bold">
                  ★ 4.95 <span className="text-[#78767d] font-normal ml-0.5">(342 jobs)</span>
                </span>
                <span>•</span>
                <span>7 Yrs Pro Experience</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleSimulateCall}
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-[#0058bf] hover:bg-[#004396] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              {called ? 'Connecting...' : 'Call'}
            </button>
            <button
              onClick={() => setEta(Math.max(1, eta - 5))}
              className="px-3 py-2.5 bg-[#eeeeee] hover:bg-[#e2e2e2] text-[#1a1c1c] text-xs font-semibold rounded-lg flex items-center gap-1 transition-all"
              title="Fast forward simulation"
            >
              <span className="material-symbols-outlined text-[16px]">fast_forward</span>
              -5m
            </button>
          </div>
        </div>

        {called && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2 animate-fade-in">
            <span className="material-symbols-outlined text-emerald-600">ring_volume</span>
            Simulated secure VoIP bridge opened with Technician Marcus Vance.
          </div>
        )}

        {/* Live Milestones Stepper */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-bold text-[#47464c] uppercase tracking-wider">Service Protocol Milestones</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-[#f3f3f3] rounded-xl border border-emerald-300/60 flex items-center gap-2.5">
              <span className="material-symbols-outlined text-emerald-600 text-base">check_circle</span>
              <div>
                <div className="font-bold text-[#1a1c1c]">Technician Assigned</div>
                <div className="text-[10px] text-[#78767d]">09:02 AM • Verified Pro</div>
              </div>
            </div>
            <div className="p-3 bg-[#d8e2ff]/40 rounded-xl border border-[#0058bf] flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#0058bf] text-base animate-pulse">local_shipping</span>
              <div>
                <div className="font-bold text-[#0058bf]">En Route</div>
                <div className="text-[10px] text-[#001a42]">ETA ~{eta} mins • Tracking live</div>
              </div>
            </div>
            <div className="p-3 bg-[#f3f3f3] rounded-xl border border-[#c8c5cd]/40 opacity-70 flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#78767d] text-base">qr_code_scanner</span>
              <div>
                <div className="font-semibold text-[#47464c]">Contactless Check-In</div>
                <div className="text-[10px] text-[#78767d]">Ready on arrival</div>
              </div>
            </div>
          </div>
        </div>

        {/* Note to Technician Form */}
        <form onSubmit={handleSendNote} className="flex gap-2">
          <input
            type="text"
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
            placeholder="Add note for technician (e.g. gate code #4912, ring doorbell)"
            className="flex-1 px-4 py-2.5 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-xs focus:border-[#0058bf] outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2.5 bg-[#00000b] text-white text-xs font-semibold rounded-xl hover:bg-[#1a1a2e] transition-colors"
          >
            Send Note
          </button>
        </form>
        {chatNoteSent && (
          <p className="text-xs text-emerald-600 mt-2 font-medium">✓ Note transmitted directly to technician tablet.</p>
        )}
      </div>
    </div>
  );
};

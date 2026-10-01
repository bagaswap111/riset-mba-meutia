import React, { useState, useEffect } from 'react';
import { IMAGES } from '../data/mockData';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  technicianName: string;
}

export const CallModal: React.FC<CallModalProps> = ({
  isOpen,
  onClose,
  technicianName
}) => {
  const [callStatus, setCallStatus] = useState<'connecting' | 'connected' | 'ended'>('connecting');
  const [callSeconds, setCallSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setCallStatus('connecting');
      setCallSeconds(0);
      return;
    }

    const timer1 = setTimeout(() => {
      setCallStatus('connected');
    }, 1800);

    return () => clearTimeout(timer1);
  }, [isOpen]);

  useEffect(() => {
    if (callStatus !== 'connected') return;

    const interval = setInterval(() => {
      setCallSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [callStatus]);

  if (!isOpen) return null;

  const formatDuration = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remaining = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${remaining.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    setCallStatus('ended');
    setTimeout(() => {
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-sm bg-[#1a1a2e] text-white rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl border border-white/10 relative overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute top-0 w-full h-32 bg-[#0058bf]/20 blur-3xl pointer-events-none"></div>

        {/* Technician Avatar */}
        <div className="relative w-28 h-28 mb-6 mt-4">
          <img
            src={IMAGES.technicianAhmed}
            alt={technicianName}
            className="w-full h-full object-cover rounded-full border-4 border-[#006fef] shadow-xl"
          />
          {callStatus === 'connected' && (
            <span className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#1a1a2e] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold tracking-tight text-white mb-1">{technicianName}</h3>
        <p className="text-xs text-[#83829b] mb-4">ProFix Field Engineer · Order #PF-88210</p>

        <div className="mb-8">
          {callStatus === 'connecting' && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#aec6ff] animate-pulse">
              <span className="material-symbols-outlined text-sm">wifi_calling_3</span>
              Menghubungkan via VoIP Aman...
            </div>
          )}
          {callStatus === 'connected' && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {formatDuration(callSeconds)}
            </div>
          )}
          {callStatus === 'ended' && (
            <div className="text-xs text-red-400 font-semibold">Panggilan Berakhir</div>
          )}
        </div>

        {/* In-Call Controls */}
        <div className="grid grid-cols-3 gap-4 w-full mb-8">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-3 rounded-full flex flex-col items-center gap-1 transition-all ${
              isMuted ? 'bg-white text-[#1a1a2e]' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <span className="material-symbols-outlined">{isMuted ? 'mic_off' : 'mic'}</span>
            <span className="text-[10px]">{isMuted ? 'Muted' : 'Mute'}</span>
          </button>

          <button
            onClick={() => setIsSpeaker(!isSpeaker)}
            className={`p-3 rounded-full flex flex-col items-center gap-1 transition-all ${
              isSpeaker ? 'bg-white text-[#1a1a2e]' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <span className="material-symbols-outlined">{isSpeaker ? 'volume_up' : 'volume_down'}</span>
            <span className="text-[10px]">Speaker</span>
          </button>

          <button
            onClick={() => alert('Pesan singkat terkirim ke Ahmed: "Saya menunggu di depan lobi."')}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white flex flex-col items-center gap-1 transition-all"
          >
            <span className="material-symbols-outlined">chat</span>
            <span className="text-[10px]">Pesan</span>
          </button>
        </div>

        {/* End Call Button */}
        <button
          onClick={handleEndCall}
          className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 active:scale-90 text-white flex items-center justify-center shadow-lg shadow-red-600/30 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-3xl">call_end</span>
        </button>
      </div>
    </div>
  );
};

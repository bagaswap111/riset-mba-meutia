import React, { useState } from 'react';
import { ScreenType } from '../types';

interface ScreenSwitcherProps {
  currentScreen: ScreenType;
  onSelectScreen: (screen: ScreenType) => void;
}

export const ScreenSwitcher: React.FC<ScreenSwitcherProps> = ({
  currentScreen,
  onSelectScreen
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const screens: { id: ScreenType; name: string; icon: string; badge?: string }[] = [
    { id: 'home', name: '1. Beranda', icon: 'home' },
    { id: 'services', name: '2. Katalog Layanan', icon: 'grid_view' },
    { id: 'detail', name: '3. Detail Layanan', icon: 'tune' },
    { id: 'checkout', name: '4. Checkout & Bayar', icon: 'shopping_bag' },
    { id: 'confirmation', name: '5. Konfirmasi', icon: 'check_circle' },
    { id: 'tracking', name: '6. Lacak Teknisi (Live)', icon: 'near_me', badge: 'Live GPS' },
    { id: 'auth', name: '7. Masuk / Daftar', icon: 'lock' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isExpanded && (
        <div className="mb-3 bg-white/95 backdrop-blur-xl border border-[#c8c5cd]/60 p-2.5 rounded-2xl shadow-2xl space-y-1 w-64 max-w-[90vw] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="px-3 py-1.5 border-b border-[#eeeeee] flex items-center justify-between text-xs font-bold text-[#1a1c1c]">
            <span className="uppercase tracking-wider text-[11px] text-[#78767d]">Pilih Layar Demo</span>
            <span className="text-[10px] text-[#0058bf] bg-[#d8e2ff] px-1.5 py-0.5 rounded font-mono">7 Screens</span>
          </div>

          <div className="max-h-72 overflow-y-auto py-1 space-y-1 custom-scrollbar">
            {screens.map((scr) => (
              <button
                key={scr.id}
                onClick={() => {
                  onSelectScreen(scr.id);
                  setIsExpanded(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all cursor-pointer ${
                  currentScreen === scr.id
                    ? 'bg-[#0058bf] text-white shadow-sm'
                    : 'text-[#1a1c1c] hover:bg-[#f3f3f3]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`material-symbols-outlined text-[18px] ${currentScreen === scr.id ? 'text-white' : 'text-[#78767d]'}`}>
                    {scr.icon}
                  </span>
                  <span>{scr.name}</span>
                </div>
                {scr.badge && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    currentScreen === scr.id ? 'bg-white/20 text-white' : 'bg-[#d8e2ff] text-[#0058bf]'
                  }`}>
                    {scr.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2.5 bg-[#00000b] hover:bg-[#1a1a2e] text-white px-4 py-2.5 rounded-full shadow-xl border border-white/20 text-xs font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer"
        title="Ganti Tampilan Layar"
      >
        <span className="material-symbols-outlined text-[18px] text-[#aec6ff]">view_carousel</span>
        <span>Jelajah Layar ({screens.find(s => s.id === currentScreen)?.name.split('.')[1]?.trim() || currentScreen})</span>
        <span className="material-symbols-outlined text-sm">{isExpanded ? 'expand_more' : 'expand_less'}</span>
      </button>
    </div>
  );
};

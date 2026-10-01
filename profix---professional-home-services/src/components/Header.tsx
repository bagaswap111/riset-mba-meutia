import React, { useState } from 'react';
import { ScreenType } from '../types';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenWhatsApp
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate('services');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full h-20 bg-[#f9f9f9]/85 backdrop-blur-xl border-b border-[#c8c5cd]/30 transition-all duration-200">
      <div className="flex justify-between items-center w-full px-4 md:px-12 max-w-[1280px] mx-auto h-full">
        {/* Zone 1: Wordmark */}
        <div className="flex items-center gap-8">
          <button 
            onClick={() => handleNavClick('home')}
            className="text-2xl font-bold tracking-tight text-[#00000b] hover:opacity-85 transition-opacity text-left cursor-pointer"
          >
            ProFix
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex gap-7 items-center">
            <button
              onClick={() => handleNavClick('services')}
              className={`text-sm font-semibold transition-colors cursor-pointer pb-1 ${
                currentScreen === 'services' || currentScreen === 'detail'
                  ? 'text-[#0058bf] border-b-2 border-[#0058bf]'
                  : 'text-[#47464c] hover:text-[#0058bf]'
              }`}
            >
              Layanan
            </button>
            <button
              onClick={() => handleNavClick('home')}
              className="text-sm font-semibold text-[#47464c] hover:text-[#0058bf] transition-colors cursor-pointer"
            >
              Proses
            </button>
            <button
              onClick={() => handleNavClick('home')}
              className="text-sm font-semibold text-[#47464c] hover:text-[#0058bf] transition-colors cursor-pointer"
            >
              Hasil
            </button>
            <button
              onClick={() => handleNavClick('home')}
              className="text-sm font-semibold text-[#47464c] hover:text-[#0058bf] transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('tracking')}
              className={`text-sm font-semibold flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
                currentScreen === 'tracking'
                  ? 'bg-[#0058bf] text-white'
                  : 'bg-[#d8e2ff]/50 text-[#0058bf] hover:bg-[#d8e2ff]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#006fef] animate-pulse"></span>
              Lacak Teknisi
            </button>
          </nav>
        </div>

        {/* Zone 3: Search and Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <form onSubmit={handleSearchSubmit} className="hidden lg:flex items-center bg-[#eeeeee] px-4 py-2 rounded-full border border-[#c8c5cd]/50 focus-within:border-[#0058bf] focus-within:ring-2 focus-within:ring-[#0058bf]/10 transition-all">
            <span className="material-symbols-outlined text-[#78767d] text-lg mr-2 select-none">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari layanan..."
              className="bg-transparent border-none text-xs text-[#1a1c1c] placeholder-[#78767d] focus:outline-none w-32 xl:w-44"
            />
          </form>

          <button
            onClick={() => onNavigate('auth')}
            className={`hidden sm:inline-flex text-xs font-semibold px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              currentScreen === 'auth' ? 'text-[#0058bf] bg-white' : 'text-[#47464c] hover:text-[#00000b]'
            }`}
          >
            Masuk
          </button>

          <button
            onClick={onOpenWhatsApp}
            className="bg-[#00000b] hover:bg-[#1a1a2e] text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold duration-200 active:scale-95 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow"
          >
            <span className="material-symbols-outlined text-base text-[#25D366]">chat</span>
            <span className="whitespace-nowrap">Pesan via WhatsApp</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1a1c1c] rounded-lg hover:bg-black/5 active:scale-95"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#c8c5cd]/40 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2 font-semibold text-sm ${currentScreen === 'home' ? 'text-[#0058bf]' : 'text-[#1a1c1c]'}`}
            >
              Beranda
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`text-left py-2 font-semibold text-sm ${currentScreen === 'services' ? 'text-[#0058bf]' : 'text-[#1a1c1c]'}`}
            >
              Katalog Layanan
            </button>
            <button
              onClick={() => handleNavClick('tracking')}
              className={`text-left py-2 font-semibold text-sm flex items-center justify-between ${currentScreen === 'tracking' ? 'text-[#0058bf]' : 'text-[#1a1c1c]'}`}
            >
              <span>Lacak Teknisi (Live)</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#006fef] animate-pulse"></span>
            </button>
            <button
              onClick={() => handleNavClick('checkout')}
              className="text-left py-2 font-semibold text-sm text-[#47464c]"
            >
              Checkout / Pemesanan
            </button>
            <button
              onClick={() => handleNavClick('auth')}
              className="text-left py-2 font-semibold text-sm text-[#47464c]"
            >
              Akun & Masuk
            </button>
          </div>
          <div className="pt-4 border-t border-[#eeeeee]">
            <button
              onClick={() => {
                onOpenWhatsApp();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#00000b] text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base text-[#25D366]">chat</span>
              Hubungi via WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

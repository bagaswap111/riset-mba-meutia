import React, { useState } from 'react';
import { ScreenId, UserProfile } from '../types';

interface TopNavBarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  user: UserProfile | null;
  onOpenWhatsApp: () => void;
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  currentScreen,
  onNavigate,
  user,
  onOpenWhatsApp,
  searchQuery = '',
  onSearchChange
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (target: string) => {
    if (target === 'services') {
      onNavigate('services');
    } else {
      if (currentScreen !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const el = document.getElementById(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full h-20 bg-[#f9f9f9]/85 backdrop-blur-md border-b border-[#c8c5cd]/30 transition-all">
      <div className="flex justify-between items-center w-full px-4 md:px-16 max-w-[1280px] mx-auto h-full">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold text-[#00000b] tracking-tight hover:opacity-85 transition-opacity flex items-center gap-1.5 text-left"
          >
            <span>ProFix</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0058bf]"></span>
          </button>

        </div>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('services')}
            className={`text-sm font-semibold transition-colors pb-1 ${
              currentScreen === 'services' || currentScreen.startsWith('service-')
                ? 'text-[#0058bf] border-b-2 border-[#0058bf]'
                : 'text-[#47464c] hover:text-[#0058bf]'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('process')}
            className="text-sm font-semibold text-[#47464c] hover:text-[#0058bf] transition-colors pb-1"
          >
            Process
          </button>
          <button
            onClick={() => handleNavClick('results')}
            className="text-sm font-semibold text-[#47464c] hover:text-[#0058bf] transition-colors pb-1"
          >
            Results
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="text-sm font-semibold text-[#47464c] hover:text-[#0058bf] transition-colors pb-1"
          >
            FAQ
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {onSearchChange && (
            <div className="hidden lg:flex items-center bg-[#eeeeee] rounded-full px-3 py-1.5 border border-[#c8c5cd]/30 focus-within:border-[#0058bf] transition-colors">
              <span className="material-symbols-outlined text-[#47464c] text-[18px] mr-1.5">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search services..."
                className="bg-transparent border-none focus:outline-none text-xs w-36 text-[#1a1c1c] placeholder:text-[#78767d]"
              />
            </div>
          )}

          {user ? (
            <div className="flex items-center gap-2 bg-[#eeeeee] py-1 px-3 rounded-full border border-[#c8c5cd]/30">
              <div className="w-7 h-7 rounded-full bg-[#0058bf] text-white flex items-center justify-center font-bold text-xs">
                {user.name.slice(0, 1).toUpperCase()}
              </div>
              <span className="text-xs font-semibold text-[#1a1c1c] hidden sm:inline max-w-[100px] truncate">
                {user.name}
              </span>
            </div>
          ) : (
            <button
              onClick={() => onNavigate('auth')}
              className="text-sm font-semibold text-[#47464c] hover:text-[#0058bf] transition-colors px-2 py-1"
            >
              Sign In
            </button>
          )}

          <button
            onClick={onOpenWhatsApp}
            className="flex items-center gap-2 bg-[#0058bf] text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#004396] active:scale-95 transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="hidden sm:inline">Book via WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#00000b] hover:bg-[#eeeeee] rounded-lg"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#c8c5cd] px-6 py-6 space-y-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('services')}
              className="text-left font-semibold text-sm text-[#1a1c1c] py-2 border-b border-[#eeeeee]"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('process')}
              className="text-left font-semibold text-sm text-[#1a1c1c] py-2 border-b border-[#eeeeee]"
            >
              Process
            </button>
            <button
              onClick={() => handleNavClick('results')}
              className="text-left font-semibold text-sm text-[#1a1c1c] py-2 border-b border-[#eeeeee]"
            >
              Results
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left font-semibold text-sm text-[#1a1c1c] py-2 border-b border-[#eeeeee]"
            >
              FAQ
            </button>
          </nav>

        </div>
      )}
    </header>
  );
};

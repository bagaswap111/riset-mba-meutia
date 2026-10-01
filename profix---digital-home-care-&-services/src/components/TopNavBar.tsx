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
  const [screensDropdownOpen, setScreensDropdownOpen] = useState(false);

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

  const screensList: Array<{ id: ScreenId; label: string }> = [
    { id: 'home', label: '1. Landing Page' },
    { id: 'services', label: '2. Service Catalog' },
    { id: 'service-ac', label: '3. AC Deep Cleaning Detail' },
    { id: 'service-leak', label: '4. Smart Leak Detection Detail' },
    { id: 'service-pump', label: '5. Pump Calibration Detail' },
    { id: 'checkout', label: '6. Booking & Checkout' },
    { id: 'confirmation', label: '7. Booking Confirmed' },
    { id: 'auth', label: '8. Sign In / Register' },
  ];

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

          {/* Quick Screen Switcher Pill for reviewer ease */}
          <div className="relative hidden xl:block">
            <button
              onClick={() => setScreensDropdownOpen(!screensDropdownOpen)}
              className="text-xs bg-[#eeeeee] hover:bg-[#e2e2e2] text-[#47464c] hover:text-[#00000b] px-2.5 py-1 rounded-full border border-[#c8c5cd]/40 flex items-center gap-1 transition-colors"
              title="Quickly jump between all 8 mockup screens"
            >
              <span className="font-semibold text-[#0058bf]">Screens</span>
              <span className="material-symbols-outlined text-[14px]">expand_more</span>
            </button>
            {screensDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#c8c5cd]/40 py-2 z-50"
                onClick={() => setScreensDropdownOpen(false)}
              >
                <div className="px-3 py-1 text-[11px] font-bold text-[#78767d] uppercase tracking-wider">
                  Select Screen Prototype
                </div>
                {screensList.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      onNavigate(s.id);
                      setScreensDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                      currentScreen === s.id
                        ? 'bg-[#d8e2ff]/50 text-[#0058bf] font-bold'
                        : 'text-[#1a1c1c] hover:bg-[#f3f3f3]'
                    }`}
                  >
                    <span>{s.label}</span>
                    {currentScreen === s.id && (
                      <span className="material-symbols-outlined text-[14px]">check</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
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

          <div className="pt-2 border-t border-[#eeeeee]">
            <div className="text-xs font-bold text-[#78767d] uppercase mb-2">Switch Screen</div>
            <div className="grid grid-cols-2 gap-1.5">
              {screensList.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    onNavigate(s.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-xs p-2 rounded-lg border transition-colors ${
                    currentScreen === s.id
                      ? 'border-[#0058bf] bg-[#d8e2ff]/40 text-[#0058bf] font-bold'
                      : 'border-[#c8c5cd]/30 text-[#47464c] hover:bg-[#f9f9f9]'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

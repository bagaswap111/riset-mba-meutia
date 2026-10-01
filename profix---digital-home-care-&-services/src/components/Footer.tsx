import React, { useState } from 'react';
import { ScreenId } from '../types';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#1a1a2e] text-[#83829b] border-t border-[#c8c5cd]/10">
      <div className="w-full py-16 px-4 md:px-16 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1 */}
        <div className="space-y-6">
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold text-white tracking-tight hover:opacity-85 transition-opacity text-left"
          >
            ProFix
          </button>
          <p className="text-sm text-[#83829b]/80 leading-relaxed">
            Redefining professional home services for the digital age. Precision, Transparency, Reliability.
          </p>
          <div className="flex gap-3">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0058bf] hover:text-white transition-colors text-white/80"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0058bf] hover:text-white transition-colors text-white/80"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Solutions */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">Solutions</h4>
          <nav className="flex flex-col gap-2.5 text-sm">
            <button
              onClick={() => onNavigate('service-ac')}
              className="text-left text-[#83829b]/80 hover:text-[#d8e2ff] transition-colors"
            >
              AC Solutions
            </button>
            <button
              onClick={() => onNavigate('service-leak')}
              className="text-left text-[#83829b]/80 hover:text-[#d8e2ff] transition-colors"
            >
              Smart Plumbing
            </button>
            <button
              onClick={() => onNavigate('service-pump')}
              className="text-left text-[#83829b]/80 hover:text-[#d8e2ff] transition-colors"
            >
              Pump Systems
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="text-left text-[#83829b]/80 hover:text-[#d8e2ff] transition-colors"
            >
              Emergency Repair
            </button>
          </nav>
        </div>

        {/* Col 3: Company */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">Company</h4>
          <nav className="flex flex-col gap-2.5 text-sm">
            <a href="#terms" className="text-[#83829b]/80 hover:text-[#d8e2ff] transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" className="text-[#83829b]/80 hover:text-[#d8e2ff] transition-colors">
              Privacy Policy
            </a>
            <a href="#guarantee" className="text-[#83829b]/80 hover:text-[#d8e2ff] transition-colors">
              Guarantee (unconfirmed)
            </a>
            <a href="#support" className="text-[#83829b]/80 hover:text-[#d8e2ff] transition-colors">
              Support (demo)
            </a>
          </nav>
        </div>

        {/* Col 4: Newsletter */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">Join Our Newsletter</h4>
          <p className="text-sm text-[#83829b]/80">
            Get tips on home maintenance and exclusive booking discounts.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="flex gap-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="email@example.com"
                className="bg-white/10 border border-[#83829b]/30 rounded-lg px-3 py-2 text-white text-xs w-full focus:outline-none focus:border-[#0058bf] placeholder:text-[#83829b]/50"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-[#0058bf] text-white p-2 rounded-lg hover:bg-[#004396] transition-colors flex items-center justify-center shrink-0"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
            {subscribed && (
              <p className="text-xs text-[#aec6ff]">✓ You are subscribed! Check your inbox soon.</p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full py-8 border-t border-[#83829b]/15 px-4 md:px-16 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#83829b]/60">
        <p>© 2024 ProFix Professional Services. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#terms" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span className="flex items-center gap-1 text-[#aec6ff]">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            256-Bit Encrypted
          </span>
        </div>
      </div>
    </footer>
  );
};

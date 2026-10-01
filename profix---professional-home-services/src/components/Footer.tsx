import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2500);
    }
  };

  return (
    <footer className="bg-[#1a1a2e] text-[#83829b] border-t border-white/5 transition-colors">
      <div className="w-full py-16 px-6 md:px-16 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="text-2xl font-bold text-white tracking-tight">ProFix</div>
          <p className="text-sm text-[#83829b]/80 leading-relaxed max-w-xs">
            Elevating professional services with silicon-valley precision and reliability.
          </p>
          <div className="flex gap-3 pt-2">
            <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#d8e2ff] hover:bg-[#0058bf] hover:text-white transition-all cursor-pointer">
              <span className="material-symbols-outlined text-base">share</span>
            </span>
            <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#d8e2ff] hover:bg-[#0058bf] hover:text-white transition-all cursor-pointer">
              <span className="material-symbols-outlined text-base">notifications</span>
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="text-xs font-bold uppercase tracking-widest text-[#d8e2ff]">Company</h5>
          <nav className="flex flex-col gap-2.5 text-sm">
            <a className="text-[#83829b] hover:text-[#d8e2ff] transition-colors" href="#terms">Terms</a>
            <a className="text-[#83829b] hover:text-[#d8e2ff] transition-colors" href="#privacy">Privacy</a>
            <a className="text-[#83829b] hover:text-[#d8e2ff] transition-colors" href="#guarantee">Guarantee</a>
            <a className="text-[#83829b] hover:text-[#d8e2ff] transition-colors" href="#support">Support</a>
          </nav>
        </div>

        <div className="space-y-4">
          <h5 className="text-xs font-bold uppercase tracking-widest text-[#d8e2ff]">Global Reach</h5>
          <p className="text-sm text-[#83829b]/80 leading-relaxed">
            Operating across major metropolitan hubs with 24/7 technical dispatch and certified engineering standards.
          </p>
        </div>

        <div className="space-y-4">
          <h5 className="text-xs font-bold uppercase tracking-widest text-[#d8e2ff]">Newsletter</h5>
          <p className="text-xs text-[#83829b]">Get home maintenance insights & exclusive booking discounts.</p>
          {subscribed ? (
            <div className="p-3 bg-[#0058bf]/20 border border-[#0058bf] rounded-lg text-xs text-[#d8e2ff] flex items-center gap-2">
              <span className="material-symbols-outlined text-base">check_circle</span>
              Terima kasih! Anda telah terdaftar.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-[#00000b] border border-white/10 text-white text-xs px-3.5 py-2.5 rounded-lg w-full focus:outline-none focus:border-[#0058bf] transition-colors placeholder:text-[#83829b]/60"
                placeholder="email@contoh.com"
              />
              <button
                type="submit"
                className="bg-[#006fef] hover:bg-[#0058bf] text-white px-3.5 py-2.5 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                title="Langganan"
              >
                <span className="material-symbols-outlined text-base">send</span>
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/5 py-6 px-6 text-center">
        <p className="text-xs text-[#83829b]/50">
          © 2024 ProFix Professional Services. All rights reserved. Precision, Transparency, Reliability.
        </p>
      </div>
    </footer>
  );
};

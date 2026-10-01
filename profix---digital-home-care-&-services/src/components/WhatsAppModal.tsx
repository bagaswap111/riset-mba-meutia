import React, { useState } from 'react';
import { SERVICES } from '../data/services';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];
  const message = `Hello ProFix, I would like to book a service:
• Service: ${currentService.title} (Starting from $${currentService.basePrice})
• Notes: ${notes.trim() || 'Standard diagnostic and service requested'}
• Preferred Time: ASAP (60-Min Emergency Ready)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleOpenWhatsApp = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/1555776349?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-[#c8c5cd]/40 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#78767d] hover:text-[#00000b] p-1 rounded-full hover:bg-[#eeeeee] transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">chat</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#00000b]">Book via WhatsApp</h3>
            <p className="text-xs text-[#47464c]">Instant response from our rapid-dispatch fleet coordinator</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#47464c] uppercase tracking-wider mb-1.5">
              Select Desired Service
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-3 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-sm font-medium focus:border-[#0058bf] outline-none"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title} — from ${s.basePrice}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#47464c] uppercase tracking-wider mb-1.5">
              Urgency or Special Details (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Master bedroom split AC is blowing warm air..."
              className="w-full p-3 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-sm focus:border-[#0058bf] outline-none resize-none"
            />
          </div>

          {/* Generated message preview */}
          <div>
            <label className="block text-[11px] font-bold text-[#78767d] uppercase tracking-wider mb-1">
              WhatsApp Message Preview
            </label>
            <div className="p-3 bg-[#f3f3f3] rounded-xl text-xs font-mono text-[#1a1c1c] whitespace-pre-wrap border border-[#c8c5cd]/30">
              {message}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleOpenWhatsApp}
            className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            Open in WhatsApp
          </button>
          <button
            onClick={handleCopy}
            className="bg-[#eeeeee] hover:bg-[#e2e2e2] text-[#1a1c1c] py-3.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">
              {copied ? 'check' : 'content_copy'}
            </span>
            {copied ? 'Copied!' : 'Copy Text'}
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose
}) => {
  const [selectedTopic, setSelectedTopic] = useState('Pemesanan Darurat (60 Menit)');
  const [message, setMessage] = useState('Halo ProFix, saya membutuhkan teknisi servis ke lokasi saya secepatnya.');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const topics = [
    'Pemesanan Darurat (60 Menit)',
    'Cuci AC Deep Cleaning',
    'Deteksi Kebocoran Pipa',
    'Konsultasi Tarif & Garansi',
  ];

  const handleSend = () => {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#c8c5cd]/40 overflow-hidden">
        {/* WhatsApp Brand Header */}
        <div className="p-6 bg-[#075e54] text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl text-[#25D366]">chat</span>
            </div>
            <div>
              <h3 className="font-bold text-base">ProFix WhatsApp Dispatch</h3>
              <p className="text-[11px] text-white/80">Online · Respon rata-rata &lt; 2 menit</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white p-1">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="text-xs font-bold uppercase text-[#78767d] tracking-wider block mb-2">Pilih Layanan</label>
            <div className="grid grid-cols-1 gap-2">
              {topics.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setSelectedTopic(t);
                    setMessage(`Halo ProFix, saya ingin konsultasi / memesan ${t}.`);
                  }}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
                    selectedTopic === t
                      ? 'border-[#075e54] bg-[#25D366]/10 text-[#075e54]'
                      : 'border-[#c8c5cd]/40 hover:border-[#075e54]'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-[#78767d] tracking-wider block mb-2">Pesan Cepat</label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-xs focus:outline-none focus:border-[#075e54]"
            />
          </div>

          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2">
            <span className="material-symbols-outlined text-base text-emerald-600">verified</span>
            <span>Customer service resmi ProFix akan segera mengkonfirmasi ketersediaan teknisi bersertifikat terdekat.</span>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleSend}
              disabled={isSent}
              className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#128c7e] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-base">send</span>
              {isSent ? 'Membuka WhatsApp...' : 'Mulai Chat WhatsApp'}
            </button>
            <button
              onClick={onClose}
              className="py-3 px-4 bg-[#eeeeee] hover:bg-[#e2e2e2] text-[#1a1c1c] rounded-xl font-semibold text-xs transition-all"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

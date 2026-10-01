import React, { useState } from 'react';
import { Modal } from './Modal';
import { SERVICES } from '../data/mockData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const buildMessage = (topic: string) =>
  `Halo ProFix, saya ingin menanyakan layanan "${topic}". Mohon informasi harga dan ketersediaannya.`;

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose
}) => {
  const topics = SERVICES.map((service) => service.title);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [message, setMessage] = useState(buildMessage(topics[0]));
  const [hasOpenedWhatsApp, setHasOpenedWhatsApp] = useState(false);

  const handleSelectTopic = (topic: string) => {
    setSelectedTopic(topic);
    setMessage(buildMessage(topic));
  };

  const handleSend = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setHasOpenedWhatsApp(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="whatsapp-modal-title">
      <div className="p-6 bg-[#075e54] text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl text-[#25D366]">chat</span>
            </div>
            <div>
              <h3 id="whatsapp-modal-title" className="font-bold text-base">Jalur Kontak WhatsApp</h3>
              <p className="text-[11px] text-white/80">Jalur kontak dan konfirmasi, bukan metode pembayaran.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup jendela kontak WhatsApp"
            className="text-white/70 hover:text-white p-1 rounded-lg"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 space-y-4 overflow-y-auto">
          <div>
            <label
              htmlFor="whatsapp-topic"
              id="whatsapp-topics-label"
              className="text-xs font-bold uppercase text-[#78767d] tracking-wider block mb-2"
            >
              Layanan yang Ditanyakan
            </label>
            <select
              id="whatsapp-topic"
              value={selectedTopic}
              onChange={(event) => handleSelectTopic(event.target.value)}
              className="w-full px-3 py-2.5 bg-white border border-[#c8c5cd] rounded-lg text-xs font-semibold focus:outline-none focus:border-[#075e54]"
            >
              {topics.map((topic) => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="whatsapp-message" className="text-xs font-bold uppercase text-[#78767d] tracking-wider block mb-2">Pesan</label>
            <textarea
              id="whatsapp-message"
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full p-3 bg-[#f9f9f9] border border-[#c8c5cd] rounded-xl text-xs focus:outline-none focus:border-[#075e54]"
            />
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
            <span className="material-symbols-outlined text-base text-amber-700">info</span>
            <span>
              Nomor mitra belum dikonfigurasi, sehingga tombol di bawah hanya membuka WhatsApp tanpa
              nomor tujuan. Pesan tetap harus Anda kirim sendiri di aplikasi tersebut.
            </span>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={handleSend}
              className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#128c7e] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-base">open_in_new</span>
              {hasOpenedWhatsApp ? 'Buka WhatsApp lagi' : 'Buka WhatsApp'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-3 px-4 bg-[#eeeeee] hover:bg-[#e2e2e2] text-[#1a1c1c] rounded-xl font-semibold text-xs transition-all cursor-pointer"
            >
              Batal
            </button>
          </div>
          {hasOpenedWhatsApp && (
            <p role="status" className="text-xs text-[#075e54] mt-3">
              WhatsApp dibuka di tab lain. Kirim pesan di aplikasi untuk melanjutkan.
            </p>
          )}
        </div>
    </Modal>
  );
};
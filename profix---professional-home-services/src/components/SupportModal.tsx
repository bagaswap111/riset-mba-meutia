import React, { useState } from 'react';
import { Modal } from './Modal';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId?: string;
  serviceTitle?: string;
}

const OBSERVATIONS = [
  'Saya tidak menemukan layanan yang saya cari',
  'Informasi harga atau garansi tidak jelas',
  'Ada langkah yang membingungkan atau membingungkan saya',
  'Tampilan sulit dibaca atau tidak responsif',
  'Saya tidak menemukan cara menghubungi mitra',
  'Lainnya (akan saya jelaskan saat wawancara)'
];

/**
 * Prototype feedback collector. It records nothing: there is no dispatch system,
 * no compensation flow and no operator behind this screen.
 */
export const SupportModal: React.FC<SupportModalProps> = ({
  isOpen,
  onClose,
  orderId = 'DEMO-PF-0001',
  serviceTitle = 'Layanan belum dipilih'
}) => {
  const [selectedObservation, setSelectedObservation] = useState<string | null>(null);

  const handleReset = () => {
    setSelectedObservation(null);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="support-modal-title">
      <div className="p-6 bg-[#1a1a2e] text-white flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#006fef] flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">feedback</span>
          </div>
          <div>
            <h3 id="support-modal-title" className="font-bold text-base">
              Catat Temuan Anda
            </h3>
            <p className="text-xs text-[#83829b]">
              Order simulasi {orderId} · {serviceTitle}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup jendela catatan temuan"
          className="text-white/70 hover:text-white p-1 rounded-lg"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="p-6 space-y-4 overflow-y-auto">
        <p className="text-xs text-[#47464c] leading-relaxed">
          Jendela ini membantu moderator mencatat hambatan yang Anda temui saat memakai
          prototipe. Pilihan di bawah hanya mengubah tampilan dan tidak mengirim data ke mana pun.
        </p>

        <fieldset className="space-y-2">
          <legend className="text-xs font-bold uppercase text-[#78767d] tracking-wider mb-1">
            Apa yang Anda alami?
          </legend>
          {OBSERVATIONS.map((observation) => (
            <label
              key={observation}
              className={`w-full flex items-center gap-3 p-3.5 rounded-xl border text-xs cursor-pointer transition-all focus-within:ring-2 focus-within:ring-[#0058bf] focus-within:ring-offset-2 focus-within:ring-offset-white ${
                selectedObservation === observation
                  ? 'border-[#0058bf] bg-[#d8e2ff]/30'
                  : 'border-[#c8c5cd]/40 hover:border-[#0058bf]/50'
              }`}
            >
              <input
                type="radio"
                name="support-observation"
                className="sr-only"
                checked={selectedObservation === observation}
                onChange={() => setSelectedObservation(observation)}
              />
              <span
                aria-hidden="true"
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  selectedObservation === observation ? 'border-[#0058bf]' : 'border-[#c8c5cd]'
                }`}
              >
                {selectedObservation === observation && (
                  <span className="w-2 h-2 rounded-full bg-[#0058bf]" />
                )}
              </span>
              <span className="font-medium text-[#1a1c1c]">{observation}</span>
            </label>
          ))}
        </fieldset>

        {selectedObservation && (
          <p role="status" className="text-xs text-[#0058bf] leading-relaxed">
            Dicatat di sesi ini: &ldquo;{selectedObservation}&rdquo;. Sampaikan detailnya kepada
            moderator setelah sesi berakhir.
          </p>
        )}

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={handleReset}
            disabled={!selectedObservation}
            className="py-3 px-4 bg-[#eeeeee] hover:bg-[#e2e2e2] disabled:opacity-40 disabled:cursor-not-allowed text-[#1a1c1c] rounded-xl font-semibold text-xs transition-all cursor-pointer"
          >
            Hapus Pilihan
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-[#0058bf] hover:bg-[#006fef] text-white rounded-xl font-bold text-xs transition-all active:scale-95 cursor-pointer"
          >
            Selesai
          </button>
        </div>
      </div>
    </Modal>
  );
};
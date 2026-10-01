import React, { useState } from 'react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId?: string;
  technicianName?: string;
}

export const SupportModal: React.FC<SupportModalProps> = ({
  isOpen,
  onClose,
  orderId = '#PF-88210',
  technicianName = 'Ahmed K.'
}) => {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const issues = [
    { id: 'delay', label: 'Teknisi terlambat lebih dari 15 menit', action: 'Klaim kompensasi kredit $10 otomatis' },
    { id: 'wrong_address', label: 'Perlu update alamat atau instruksi pintu masuk', action: 'Perbarui pin lokasi' },
    { id: 'cancel_reschedule', label: 'Ingin ubah jam atau jadwalkan ulang', action: 'Pilih slot waktu baru' },
    { id: 'emergency_agent', label: 'Bicara dengan supervisor dispatch langsung', action: 'Panggilan prioritas 30 detik' }
  ];

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedIssue(null);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#c8c5cd]/40 overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#1a1a2e] text-white flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#006fef] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl">help_center</span>
            </div>
            <div>
              <h3 className="font-bold text-base">Pusat Resolusi Cepat</h3>
              <p className="text-xs text-[#83829b]">Order {orderId} · Teknisi: {technicianName}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white p-1">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-xs text-[#47464c] leading-relaxed">
            Sistem mitigasi heuristik ProFix siap menyelesaikan gangguan dalam hitungan menit agar pesanan Anda tetap lancar.
          </p>

          <div className="space-y-2">
            {issues.map((issue) => (
              <button
                key={issue.id}
                type="button"
                onClick={() => setSelectedIssue(issue.id)}
                className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all cursor-pointer ${
                  selectedIssue === issue.id
                    ? 'border-[#0058bf] bg-[#d8e2ff]/30 ring-2 ring-[#0058bf]/20'
                    : 'border-[#c8c5cd]/40 hover:border-[#0058bf]/50'
                }`}
              >
                <div className="font-semibold text-[#1a1c1c]">{issue.label}</div>
                <div className="text-[11px] text-[#0058bf] mt-0.5 flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
                  {issue.action}
                </div>
              </button>
            ))}
          </div>

          {submitted ? (
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-600">check_circle</span>
              <span>Laporan Anda telah diproses. Dispatcher akan menghubungi Anda dalam 60 detik.</span>
            </div>
          ) : (
            <div className="flex gap-3 pt-3">
              <button
                onClick={handleSubmit}
                disabled={!selectedIssue}
                className="flex-1 py-3 px-4 bg-[#0058bf] hover:bg-[#006fef] disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                Kirim Solusi Cepat
              </button>
              <button
                onClick={onClose}
                className="py-3 px-4 bg-[#eeeeee] hover:bg-[#e2e2e2] text-[#1a1c1c] rounded-xl font-semibold text-xs"
              >
                Batal
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

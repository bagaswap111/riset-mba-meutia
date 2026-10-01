import React, { useState } from 'react';

interface ReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId?: string;
  serviceTitle?: string;
  totalAmount?: number;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({
  isOpen,
  onClose,
  orderId = '#PF-882901',
  serviceTitle = 'Perbaikan Sistem HVAC / Cuci AC Deep Cleaning',
  totalAmount = 64.26
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    setDownloaded(true);
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#c8c5cd]/40 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-[#00000b] text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight">ProFix</span>
            <span className="text-xs bg-[#0058bf] px-2 py-0.5 rounded font-mono font-semibold">KUITANSI RESMI</span>
          </div>
          <button 
            onClick={onClose}
            className="text-white/60 hover:text-white p-1 rounded-lg"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Receipt Body */}
        <div className="p-8 overflow-y-auto space-y-6 text-[#1a1c1c] text-sm">
          <div className="flex justify-between items-start border-b border-[#eeeeee] pb-4">
            <div>
              <p className="text-xs text-[#78767d] uppercase font-bold tracking-wider">Nomor Pesanan</p>
              <p className="text-lg font-bold text-[#00000b]">{orderId}</p>
              <p className="text-xs text-[#78767d] mt-0.5">Tanggal: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">
                <span className="material-symbols-outlined text-sm">check_circle</span> LUNAS ONLINE
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase text-[#78767d] tracking-wider mb-2">Rincian Layanan</h4>
            <div className="space-y-2 bg-[#f9f9f9] p-4 rounded-xl border border-[#c8c5cd]/30">
              <div className="flex justify-between font-semibold">
                <span>{serviceTitle}</span>
                <span>$55.00</span>
              </div>
              <div className="flex justify-between text-xs text-[#78767d]">
                <span>Biaya Layanan & Disinfeksi Standar</span>
                <span>$4.50</span>
              </div>
              <div className="flex justify-between text-xs text-[#78767d]">
                <span>Pajak (PPN 8%)</span>
                <span>$4.76</span>
              </div>
              <div className="border-t border-[#eeeeee] pt-2 mt-2 flex justify-between font-bold text-base text-[#00000b]">
                <span>Total Pembayaran</span>
                <span className="text-[#0058bf]">${totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#f3f3f3] rounded-xl border border-[#c8c5cd]/30 flex items-center justify-between">
            <div>
              <p className="font-bold text-xs text-[#00000b] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-[#0058bf]">verified_user</span>
                Garansi Digital 30 Hari Aktif
              </p>
              <p className="text-[11px] text-[#78767d] mt-0.5">Klaim instan langsung dari aplikasi jika ada kendala pasca-servis.</p>
            </div>
            <div className="w-12 h-12 bg-white rounded border border-[#c8c5cd] flex items-center justify-center p-1 text-[10px] font-mono text-center">
              QR AUTH
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#f9f9f9] border-t border-[#c8c5cd]/30 flex gap-3">
          <button
            onClick={handlePrint}
            className="flex-1 py-3 px-4 bg-[#0058bf] hover:bg-[#006fef] text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">download</span>
            {downloaded ? 'Mengunduh PDF...' : 'Unduh Kuitansi PDF'}
          </button>
          <button
            onClick={onClose}
            className="py-3 px-5 bg-white border border-[#c8c5cd] hover:bg-[#eeeeee] text-[#1a1c1c] rounded-xl font-semibold text-xs transition-all active:scale-95 cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

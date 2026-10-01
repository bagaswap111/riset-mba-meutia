import React, { useState } from 'react';
import { Modal } from './Modal';
import { formatSampleAmount } from '../data/pricing';

interface ReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId?: string;
  serviceTitle?: string;
  serviceAmount?: number;
  platformFee?: number;
  taxAmount?: number;
  totalAmount?: number;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({
  isOpen,
  onClose,
  orderId = 'DEMO-PF-0001',
  serviceTitle = 'Layanan belum dipilih',
  serviceAmount = 0,
  platformFee = 0,
  taxAmount = 0,
  totalAmount = 0
}) => {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);
    window.setTimeout(() => {
      setIsPrinting(false);
      window.print();
    }, 400);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="receipt-modal-title" containerClassName="max-w-lg">
      {/* Header */}
        <div className="p-6 bg-[#00000b] text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight">ProFix</span>
            <span className="text-xs bg-[#0058bf] px-2 py-0.5 rounded font-mono font-semibold">RINGKASAN SIMULASI</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup ringkasan simulasi"
            className="text-white/60 hover:text-white p-1 rounded-lg"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Receipt Body */}
        <div className="p-8 overflow-y-auto space-y-6 text-[#1a1c1c] text-sm">
          <h2 id="receipt-modal-title" className="sr-only">
            Ringkasan simulasi pemesanan {orderId}
          </h2>

          <div className="flex justify-between items-start border-b border-[#eeeeee] pb-4">
            <div>
              <p className="text-xs text-[#78767d] uppercase font-bold tracking-wider">Nomor Pesanan</p>
              <p className="text-lg font-bold text-[#00000b]">{orderId}</p>
              <p className="text-xs text-[#78767d] mt-0.5">Tanggal: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold">
                Tidak ada pembayaran diproses
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xs uppercase text-[#78767d] tracking-wider mb-2">Rincian Layanan</h3>
            <div className="space-y-2 bg-[#f9f9f9] p-4 rounded-xl border border-[#c8c5cd]/30">
              <div className="flex justify-between font-semibold gap-4">
                <span>{serviceTitle}</span>
                <span>{formatSampleAmount(serviceAmount)}</span>
              </div>
              <div className="flex justify-between text-xs text-[#78767d]">
                <span>Biaya platform (contoh)</span>
                <span>{formatSampleAmount(platformFee)}</span>
              </div>
              <div className="flex justify-between text-xs text-[#78767d]">
                <span>Pajak simulasi</span>
                <span>{formatSampleAmount(taxAmount)}</span>
              </div>
              <div className="border-t border-[#eeeeee] pt-2 mt-2 flex justify-between font-bold text-base text-[#00000b]">
                <span>Total simulasi</span>
                <span className="text-[#0058bf]">{formatSampleAmount(totalAmount)}</span>
              </div>
            </div>
          </div>

          <p className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">Ini bukan kuitansi resmi. Harga, pajak, pembayaran, dan garansi perlu dikonfirmasi dengan mitra.</p>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#f9f9f9] border-t border-[#c8c5cd]/30 flex gap-3">
          <button
            type="button"
            onClick={handlePrint}
            disabled={isPrinting}
            className="flex-1 py-3 px-4 bg-[#0058bf] hover:bg-[#006fef] disabled:opacity-50 text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">download</span>
            {isPrinting ? 'Membuka dialog cetak...' : 'Cetak ringkasan simulasi'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="py-3 px-5 bg-white border border-[#c8c5cd] hover:bg-[#eeeeee] text-[#1a1c1c] rounded-xl font-semibold text-xs transition-all active:scale-95 cursor-pointer"
          >
            Tutup
          </button>
        </div>
    </Modal>
  );
};

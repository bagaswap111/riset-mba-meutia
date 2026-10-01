import React from 'react';
import { BookingState } from '../types';
import { Modal } from './Modal';

interface ReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: BookingState;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({
  isOpen,
  onClose,
  booking
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      labelledBy="receipt-modal-title"
      containerClassName="max-w-lg"
      panelClassName="bg-white rounded-2xl w-full p-6 md:p-8 shadow-2xl border border-[#c8c5cd]/40 max-h-[95vh] overflow-y-auto relative print:border-none print:shadow-none print:max-w-full"
      backdropClassName="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white"
    >
        <button
          type="button"
          aria-label="Close receipt summary"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#78767d] hover:text-[#00000b] p-1.5 rounded-full hover:bg-[#eeeeee] transition-colors print:hidden"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <h2 id="receipt-modal-title" className="sr-only">
          Ringkasan simulasi pemesanan {booking.orderId}
        </h2>

        {/* Receipt Header */}
        <div className="flex items-start justify-between border-b border-[#c8c5cd]/30 pb-6 mb-6">
          <div>
            <div className="text-2xl font-bold text-[#00000b] flex items-center gap-1.5">
              <span>ProFix</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0058bf]"></span>
            </div>
            <p className="text-xs text-[#78767d] mt-1">Ringkasan simulasi pemesanan</p>
            <p className="text-[11px] text-[#78767d]">Bukan bukti transaksi atau garansi.</p>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1 bg-amber-50 text-amber-900 text-xs font-bold rounded-full border border-amber-200">
              Tidak ada pembayaran diproses
            </span>
            <p className="text-xs font-mono font-bold text-[#00000b] mt-2">
              Order: {booking.orderId}
            </p>
            <p className="text-[11px] text-[#78767d]">
              Pratinjau saja
            </p>
          </div>
        </div>

        {/* Customer & Location */}
        <div className="grid grid-cols-2 gap-4 text-xs mb-6 bg-[#f9f9f9] p-4 rounded-xl border border-[#eeeeee]">
          <div>
            <div className="font-bold text-[#47464c] uppercase tracking-wider text-[10px] mb-1">
              Service Location
            </div>
            <div className="font-semibold text-[#1a1c1c]">{booking.address.street || 'Belum diisi'}</div>
            <div className="text-[#47464c]">
              {booking.address.apartment ? `${booking.address.apartment}, ` : ''}
              Kode pos {booking.address.zipCode || 'Belum diisi'}
            </div>
          </div>
          <div>
            <div className="font-bold text-[#47464c] uppercase tracking-wider text-[10px] mb-1">
              Schedule & Window
            </div>
            <div className="font-semibold text-[#1a1c1c]">{booking.date || 'Belum dipilih'}</div>
            <div className="text-[#47464c]">Time: {booking.timeSlot || '11:30 AM'} ({booking.arrivalWindow})</div>
          </div>
        </div>

        {/* Itemized Table */}
        <div className="border border-[#c8c5cd]/30 rounded-xl overflow-hidden mb-6">
          <div className="bg-[#f3f3f3] px-4 py-2.5 text-xs font-bold text-[#47464c] grid grid-cols-12">
            <div className="col-span-8">Description</div>
            <div className="col-span-4 text-right">Amount</div>
          </div>
          <div className="p-4 space-y-3 text-xs">
            <div className="grid grid-cols-12">
              <div className="col-span-8">
                <div className="font-bold text-[#1a1c1c]">{booking.serviceTitle}</div>
                <div className="text-[11px] text-[#78767d]">{booking.serviceSubtitle || 'Standard Professional Service'}</div>
              </div>
              <div className="col-span-4 text-right font-semibold text-[#1a1c1c]">
                ${booking.price.toFixed(2)}
              </div>
            </div>
            <div className="grid grid-cols-12 text-[#47464c]">
              <div className="col-span-8">Service Dispatch & Booking Fee</div>
              <div className="col-span-4 text-right font-medium">
                ${booking.serviceFee.toFixed(2)}
              </div>
            </div>
            <div className="grid grid-cols-12 text-[#47464c]">
              <div className="col-span-8">Pajak simulasi</div>
              <div className="col-span-4 text-right font-medium">
                ${booking.tax.toFixed(2)}
              </div>
            </div>
            <div className="border-t border-[#c8c5cd]/30 pt-3 grid grid-cols-12 font-bold text-sm text-[#00000b]">
              <div className="col-span-8">Total simulasi</div>
              <div className="col-span-4 text-right text-[#0058bf]">
                ${booking.total.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        <p className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">Harga, pajak, metode pembayaran, dan garansi masih berupa data contoh yang perlu diverifikasi.</p>

        {/* Print / Close Actions */}
        <div className="flex gap-3 print:hidden">
          <button
            type="button"
            onClick={handlePrint}
            className="flex-1 py-3 bg-[#0058bf] hover:bg-[#004396] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">print</span>
            Cetak ringkasan simulasi
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 bg-[#eeeeee] hover:bg-[#e2e2e2] text-[#1a1c1c] text-xs font-bold rounded-xl transition-all"
          >
            Close
          </button>
        </div>
    </Modal>
  );
};

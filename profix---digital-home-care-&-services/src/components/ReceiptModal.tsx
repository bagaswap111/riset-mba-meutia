import React from 'react';
import { BookingState } from '../types';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-[#c8c5cd]/40 max-h-[95vh] overflow-y-auto relative print:border-none print:shadow-none print:max-w-full">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#78767d] hover:text-[#00000b] p-1.5 rounded-full hover:bg-[#eeeeee] transition-colors print:hidden"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Receipt Header */}
        <div className="flex items-start justify-between border-b border-[#c8c5cd]/30 pb-6 mb-6">
          <div>
            <div className="text-2xl font-bold text-[#00000b] flex items-center gap-1.5">
              <span>ProFix</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0058bf]"></span>
            </div>
            <p className="text-xs text-[#78767d] mt-1">Official Digital Tax Receipt & Warranty</p>
            <p className="text-[11px] text-[#78767d]">ProFix Technology Inc. • Support: +1 (555) PRO-FIX</p>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
              PAID IN FULL
            </span>
            <p className="text-xs font-mono font-bold text-[#00000b] mt-2">
              Order: {booking.orderId}
            </p>
            <p className="text-[11px] text-[#78767d]">
              Date: {booking.paidAt || 'Oct 24, 2023'}
            </p>
          </div>
        </div>

        {/* Customer & Location */}
        <div className="grid grid-cols-2 gap-4 text-xs mb-6 bg-[#f9f9f9] p-4 rounded-xl border border-[#eeeeee]">
          <div>
            <div className="font-bold text-[#47464c] uppercase tracking-wider text-[10px] mb-1">
              Service Location
            </div>
            <div className="font-semibold text-[#1a1c1c]">{booking.address.street || '452 Broadway Ave'}</div>
            <div className="text-[#47464c]">
              {booking.address.apartment ? `${booking.address.apartment}, ` : ''}
              Zip {booking.address.zipCode || '10001'}
            </div>
          </div>
          <div>
            <div className="font-bold text-[#47464c] uppercase tracking-wider text-[10px] mb-1">
              Schedule & Window
            </div>
            <div className="font-semibold text-[#1a1c1c]">{booking.date || 'Today, Oct 24, 2023'}</div>
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
              <div className="col-span-8">Estimated Tax / VAT (5%)</div>
              <div className="col-span-4 text-right font-medium">
                ${booking.tax.toFixed(2)}
              </div>
            </div>
            <div className="border-t border-[#c8c5cd]/30 pt-3 grid grid-cols-12 font-bold text-sm text-[#00000b]">
              <div className="col-span-8">Total Paid</div>
              <div className="col-span-4 text-right text-[#0058bf]">
                ${booking.total.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        {/* Warranty Badge & QR */}
        <div className="p-4 bg-[#1a1a2e] text-white rounded-xl flex items-center justify-between gap-4 mb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#aec6ff]">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              12-Month Digital Lifetime Guarantee
            </div>
            <p className="text-[11px] text-[#83829b]">
              Backed by ProFix $10,000 Quality Assurance. Claim anytime via portal.
            </p>
          </div>
          <div className="w-12 h-12 bg-white rounded-lg p-1 shrink-0 flex items-center justify-center">
            {/* Simulated QR Code */}
            <div className="w-full h-full grid grid-cols-3 gap-0.5 p-0.5">
              <div className="bg-black rounded-xs"></div>
              <div className="bg-black rounded-xs"></div>
              <div className="bg-black rounded-xs"></div>
              <div className="bg-black rounded-xs"></div>
              <div className="bg-white"></div>
              <div className="bg-black rounded-xs"></div>
              <div className="bg-black rounded-xs"></div>
              <div className="bg-white"></div>
              <div className="bg-black rounded-xs"></div>
            </div>
          </div>
        </div>

        {/* Print / Close Actions */}
        <div className="flex gap-3 print:hidden">
          <button
            onClick={handlePrint}
            className="flex-1 py-3 bg-[#0058bf] hover:bg-[#004396] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">print</span>
            Print / Save PDF
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-[#eeeeee] hover:bg-[#e2e2e2] text-[#1a1c1c] text-xs font-bold rounded-xl transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

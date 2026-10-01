import React, { useState } from 'react';
import { ScreenType, BookingState } from '../types';
import { ReceiptModal } from '../components/ReceiptModal';

interface OrderConfirmationScreenProps {
  booking: BookingState;
  onNavigate: (screen: ScreenType) => void;
  onStartNewBooking: () => void;
}

export const OrderConfirmationScreen: React.FC<OrderConfirmationScreenProps> = ({
  booking,
  onNavigate,
  onStartNewBooking
}) => {
  const [showReceiptModal, setShowReceiptModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] flex flex-col items-center py-12 md:py-16 px-4 md:px-12">
      <main className="w-full max-w-[1000px] flex-1 flex flex-col items-center">
        {/* Animated Digital Checkmark */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#0058bf]/10 rounded-full scale-150 blur-2xl animate-pulse"></div>
          <svg className="relative w-20 h-20 text-[#0058bf]" viewBox="0 0 52 52">
            <circle
              className="stroke-current opacity-20"
              cx="26"
              cy="26"
              fill="none"
              r="24"
              strokeWidth="2.5"
            />
            <path
              className="success-checkmark-draw stroke-current"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#00000b] text-center mb-2">
          Simulasi Pemesanan Selesai
        </h1>
        <p className="text-sm md:text-base text-[#47464c] text-center max-w-lg mb-10 leading-relaxed">
          Ini adalah konfirmasi simulasi untuk pengujian prototipe. Tidak ada pemesanan, pembayaran, atau penugasan teknisi yang dikirim.
        </p>

        {/* Summary & Next Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          {/* Order Summary Card */}
          <div className="md:col-span-5 bg-white border border-[#c8c5cd]/40 p-7 rounded-2xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#78767d]">
                    ID Pesanan
                  </span>
                  <p className="text-2xl font-bold text-[#00000b] mt-0.5">
                    {booking.orderId || 'DEMO-PF-0001'}
                  </p>
                </div>
                <div className="bg-[#0058bf]/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#0058bf] text-sm">verified</span>
                  <span className="text-xs font-bold text-[#0058bf]">SIMULASI · BELUM DIBAYAR</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#f3f3f3] flex items-center justify-center text-[#00000b]">
                    <span className="material-symbols-outlined text-lg">construction</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#00000b]">{booking.serviceTitle || 'Layanan belum dipilih'}</p>
                    <p className="text-[11px] text-[#78767d]">Detail layanan contoh</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#f3f3f3] flex items-center justify-center text-[#00000b]">
                    <span className="material-symbols-outlined text-lg">calendar_today</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#00000b]">{booking.selectedDate || 'Belum dipilih'}</p>
                    <p className="text-[11px] text-[#78767d]">{booking.selectedTimeSlot || 'Belum dipilih'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#f3f3f3] flex items-center justify-center text-[#00000b]">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#00000b]">{booking.streetAddress || 'Belum diisi'}</p>
                    <p className="text-[11px] text-[#78767d]">
                      {[booking.unit, booking.postalCode && `Kode pos ${booking.postalCode}`]
                        .filter(Boolean)
                        .join(' · ') || 'Unit dan kode pos belum diisi'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#c8c5cd]/30">
              <button
                onClick={() => setShowReceiptModal(true)}
                className="w-full py-3 px-4 rounded-xl border-2 border-[#00000b] text-[#00000b] text-xs font-bold uppercase tracking-wider hover:bg-[#00000b] hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">receipt_long</span>
                Lihat Ringkasan Simulasi
              </button>
            </div>
          </div>

          {/* What Happens Next Card */}
          <div className="md:col-span-7 space-y-6">
            <div className="bg-white border border-[#c8c5cd]/40 p-7 rounded-2xl shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-[#00000b]">Apa yang terjadi selanjutnya</h2>

              <div className="space-y-6 relative pl-3">
                {/* Stepper vertical line */}
                <div className="absolute left-[27px] top-3 bottom-3 w-0.5 bg-[#c8c5cd]/40"></div>

                {/* Step 1 */}
                <div className="relative flex gap-4 items-start">
                  <div className="z-10 w-9 h-9 rounded-full bg-[#0058bf] flex items-center justify-center text-white shadow-md shrink-0">
                    <span className="material-symbols-outlined text-lg">person_search</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#00000b] uppercase tracking-wider">Penugasan Teknisi</h3>
                    <p className="text-xs text-[#47464c] mt-0.5 leading-relaxed">
                      Status penugasan teknisi tidak tersedia dalam prototipe ini.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex gap-4 items-start">
                  <div className="z-10 w-9 h-9 rounded-full bg-[#eeeeee] border border-[#c8c5cd] flex items-center justify-center text-[#78767d] shrink-0">
                    <span className="material-symbols-outlined text-lg">notifications_active</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#00000b] uppercase tracking-wider">Notifikasi Kedatangan</h3>
                    <p className="text-xs text-[#47464c] mt-0.5 leading-relaxed">
                      Notifikasi dan pelacakan langsung belum terhubung.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex gap-4 items-start">
                  <div className="z-10 w-9 h-9 rounded-full bg-[#eeeeee] border border-[#c8c5cd] flex items-center justify-center text-[#78767d] shrink-0">
                    <span className="material-symbols-outlined text-lg">verified_user</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#00000b] uppercase tracking-wider">Check-In Aman</h3>
                    <p className="text-xs text-[#47464c] mt-0.5 leading-relaxed">
                      Check-in dan kode verifikasi hanya dapat diuji setelah integrasi mitra tersedia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee Callout Banner */}
            <div className="bg-[#1a1a2e] p-6 rounded-2xl flex items-center gap-5 overflow-hidden relative shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-[#0058bf] flex items-center justify-center shrink-0 text-white shadow-md">
                <span className="material-symbols-outlined text-2xl">workspace_premium</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#aec6ff] uppercase tracking-wider">Informasi Garansi</h4>
                <p className="text-xs text-[#83829b] mt-0.5 leading-relaxed">
                  Ketentuan garansi belum tersedia. Cakupan dan masa berlakunya harus dikonfirmasi
                  kepada penyedia layanan sebelum digunakan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full">
          <button
            onClick={() => onNavigate('tracking')}
            className="flex-1 py-4 px-6 bg-[#0058bf] hover:bg-[#006fef] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#0058bf]/20 transition-all active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">near_me</span>
            Lihat Simulasi Pelacakan
          </button>

          <button
            onClick={onStartNewBooking}
            className="flex-1 py-4 px-6 bg-white border border-[#c8c5cd] text-[#00000b] hover:bg-[#eeeeee] rounded-xl text-sm font-bold transition-all active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">add_circle</span>
            Pesan Layanan Lain
          </button>

          <button
            onClick={() => onNavigate('home')}
            className="flex-1 py-4 px-6 bg-white border border-[#c8c5cd] text-[#00000b] hover:bg-[#eeeeee] rounded-xl text-sm font-bold transition-all active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">dashboard</span>
            Kembali ke Dasbor
          </button>
        </div>
      </main>

      <ReceiptModal
        isOpen={showReceiptModal}
        onClose={() => setShowReceiptModal(false)}
        orderId={booking.orderId}
        serviceTitle={booking.serviceTitle}
        serviceAmount={booking.servicePrice}
        platformFee={booking.serviceFee}
        taxAmount={booking.tax}
        totalAmount={booking.totalPrice}
      />
    </div>
  );
};

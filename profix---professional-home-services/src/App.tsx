/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ScreenType, ServiceItem, BookingState } from './types';
import { SERVICES } from './data/mockData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { HomeScreen } from './screens/HomeScreen';
import { ServicesCatalogScreen } from './screens/ServicesCatalogScreen';
import { ServiceDetailScreen } from './screens/ServiceDetailScreen';
import { CheckoutScreen } from './screens/CheckoutScreen';
import { OrderConfirmationScreen } from './screens/OrderConfirmationScreen';
import { TrackTechnicianScreen } from './screens/TrackTechnicianScreen';
import { AuthScreen } from './screens/AuthScreen';
import { calculateBookingTotals } from './data/pricing';

const AVAILABLE_SCREENS: ScreenType[] = [
  'home', 'services', 'detail', 'checkout', 'confirmation', 'tracking', 'auth'
];

const screenFromHash = (): ScreenType => {
  const screen = window.location.hash.slice(1) as ScreenType;
  return AVAILABLE_SCREENS.includes(screen) ? screen : 'home';
};

const SCREENS_REQUIRING_BOOKING: ScreenType[] = ['confirmation', 'tracking'];

const TRACKING_BLOCKED_NOTICE =
  'Halaman lacak teknisi baru tersedia setelah Anda menyelesaikan simulasi pemesanan. Pilih layanan untuk melanjutkan.';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>(screenFromHash);
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[0]);
  const [catalogQuery, setCatalogQuery] = useState('');
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const initialServicePrice = SERVICES[0].price;
  const initialTotals = calculateBookingTotals(initialServicePrice);
  const [booking, setBooking] = useState<BookingState>({
    serviceId: SERVICES[0].id,
    serviceTitle: SERVICES[0].title,
    servicePrice: SERVICES[0].price,
    selectedDate: '',
    selectedTimeSlot: '',
    streetAddress: '',
    unit: '',
    postalCode: '',
    instructions: '',
    paymentMethod: 'card',
    orderId: 'DEMO-PF-0001',
    serviceFee: initialTotals.platformFee,
    tax: initialTotals.tax,
    totalPrice: initialTotals.totalPrice,
    technicianName: 'Teknisi Contoh'
  });

  // Scroll to top whenever screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  useEffect(() => {
    const syncScreenFromHistory = () => {
      setNotice(null);
      setCurrentScreen(screenFromHash());
    };
    window.addEventListener('popstate', syncScreenFromHistory);
    window.addEventListener('hashchange', syncScreenFromHistory);
    return () => {
      window.removeEventListener('popstate', syncScreenFromHistory);
      window.removeEventListener('hashchange', syncScreenFromHistory);
    };
  }, []);

  // Post-booking screens must not be reachable on a cold load or via a stale
  // deep link, otherwise the participant sees an empty order summary.
  useEffect(() => {
    if (SCREENS_REQUIRING_BOOKING.includes(currentScreen) && !booking.paymentStatus) {
      if (currentScreen === 'tracking') {
        setNotice(TRACKING_BLOCKED_NOTICE);
      }
      handleNavigate('services');
    }
  }, [currentScreen, booking.paymentStatus]);

  const handleNavigate = (screen: ScreenType) => {
    setNotice(null);
    if (screen !== currentScreen) {
      window.history.pushState(null, '', `#${screen}`);
    }
    setCurrentScreen(screen);
  };

  const handleSelectService = (service: ServiceItem) => {
    const totals = calculateBookingTotals(service.price);
    setSelectedService(service);
    setBooking((prev) => ({
      ...prev,
      serviceId: service.id,
      serviceTitle: service.title,
      servicePrice: service.price,
      serviceFee: totals.platformFee,
      tax: totals.tax,
      totalPrice: totals.totalPrice
    }));
  };

  const handleUpdateBooking = (updates: Partial<BookingState>) => {
    setBooking((prev) => ({
      ...prev,
      ...updates
    }));
  };

  const handleProceedToBooking = (date: string, time: string) => {
    setBooking((prev) => ({
      ...prev,
      selectedDate: date,
      selectedTimeSlot: time
    }));
  };

  // Lets a participant discard the simulated order and start a fresh booking
  // without reloading the page, which would otherwise clear all state silently.
  const handleStartNewBooking = () => {
    setBooking((prev) => ({
      ...prev,
      selectedDate: '',
      selectedTimeSlot: '',
      streetAddress: '',
      unit: '',
      postalCode: '',
      instructions: '',
      paymentStatus: undefined
    }));
    handleNavigate('services');
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] flex flex-col font-sans">
      {/* Header (hidden on auth screen for focused sign-in experience) */}
      {currentScreen !== 'auth' && (
        <Header
          currentScreen={currentScreen}
          onNavigate={handleNavigate}
          onSearch={(query) => {
            setCatalogQuery(query);
            handleNavigate('services');
          }}
          onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
        />
      )}

      {currentScreen !== 'auth' && (
        <div role="note" className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-xs text-amber-950">
          Prototipe penelitian: harga USD, ulasan, sertifikasi, ketersediaan, dan pelacakan adalah data contoh, bukan tarif Indonesia. Tidak ada pembayaran atau layanan yang dikirim.
        </div>
      )}

      {notice && (
        <div role="status" className="border-b border-[#0058bf]/20 bg-[#d8e2ff]/60 px-4 py-3">
          <div className="max-w-[1280px] mx-auto flex items-start gap-3">
            <span className="material-symbols-outlined text-[#0058bf] text-lg shrink-0 mt-px">info</span>
            <p className="text-xs text-[#001a42] leading-relaxed flex-1">{notice}</p>
            <button
              type="button"
              onClick={() => setNotice(null)}
              aria-label="Tutup pemberitahuan"
              className="text-[#001a42]/60 hover:text-[#001a42] p-0.5 rounded-lg shrink-0"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>
        </div>
      )}

      {/* Screen Router */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
            onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
          />
        )}

        {currentScreen === 'services' && (
          <ServicesCatalogScreen
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
            initialSearchKeyword={catalogQuery}
          />
        )}

        {currentScreen === 'detail' && (
          <ServiceDetailScreen
            service={selectedService}
            onNavigate={handleNavigate}
            onProceedToBooking={handleProceedToBooking}
          />
        )}

        {currentScreen === 'checkout' && (
          <CheckoutScreen
            booking={booking}
            onUpdateBooking={handleUpdateBooking}
            onNavigate={handleNavigate}
          />
        )}

        {currentScreen === 'confirmation' && (
          <OrderConfirmationScreen
            booking={booking}
            onNavigate={handleNavigate}
            onStartNewBooking={handleStartNewBooking}
          />
        )}

        {currentScreen === 'tracking' && (
          <TrackTechnicianScreen
            booking={booking}
          />
        )}

        {currentScreen === 'auth' && (
          <AuthScreen
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Footer (hidden on tracking and auth screens matching mockup layout) */}
      {currentScreen !== 'tracking' && currentScreen !== 'auth' && (
        <Footer />
      )}

      {/* Concierge WhatsApp Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />
    </div>
  );
}

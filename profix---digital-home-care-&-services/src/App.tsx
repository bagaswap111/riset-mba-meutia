import React, { useState, useEffect } from 'react';
import { ScreenId, ServiceItem, BookingState, UserProfile } from './types';
import { SERVICES, PROFIX_IMAGES } from './data/services';
import { calculateBookingTotals } from './data/pricing';
import { TopNavBar } from './components/TopNavBar';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { TechnicianTrackingModal } from './components/TechnicianTrackingModal';
import { ReceiptModal } from './components/ReceiptModal';
import { HomeScreen } from './components/screens/HomeScreen';
import { ServicesScreen } from './components/screens/ServicesScreen';
import { ACDetailScreen } from './components/screens/ACDetailScreen';
import { LeakDetailScreen } from './components/screens/LeakDetailScreen';
import { PumpDetailScreen } from './components/screens/PumpDetailScreen';
import { CheckoutScreen } from './components/screens/CheckoutScreen';
import { ConfirmationScreen } from './components/screens/ConfirmationScreen';
import { AuthScreen } from './components/screens/AuthScreen';
import { CheckCircle2 } from 'lucide-react';

const AVAILABLE_SCREENS: ScreenId[] = [
  'home', 'services', 'service-ac', 'service-leak', 'service-pump', 'checkout', 'confirmation', 'auth'
];

const screenFromHash = (): ScreenId => {
  const screen = window.location.hash.slice(1) as ScreenId;
  return AVAILABLE_SCREENS.includes(screen) ? screen : 'home';
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>(screenFromHash);
  const [user, setUser] = useState<UserProfile | null>(null);
  const initialBookingTotals = calculateBookingTotals(55);

  const [booking, setBooking] = useState<BookingState>({
    orderId: '',
    serviceId: 'ac-deep-cleaning',
    serviceTitle: 'AC Deep Cleaning & Coil Sanitization',
    serviceSubtitle: 'Restore 99.9% airflow efficiency with high-pressure coil wash & antibacterial treatment',
    serviceCategory: 'AC Repair',
    serviceImage: PROFIX_IMAGES.heroTech,
    price: initialBookingTotals.servicePrice,
    serviceFee: initialBookingTotals.platformFee,
    tax: initialBookingTotals.tax,
    total: initialBookingTotals.total,
    date: '',
    timeSlot: '',
    arrivalWindow: '',
    address: {
      street: '',
      apartment: '',
      city: '',
      zipCode: '',
      instructions: '',
    },
    paymentMethod: 'card',
    paymentStatus: 'simulation',
    paidAt: '',
  });

  // Modal states
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  // Scroll to top whenever screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  useEffect(() => {
    const syncScreenFromHistory = () => setCurrentScreen(screenFromHash());
    window.addEventListener('popstate', syncScreenFromHistory);
    window.addEventListener('hashchange', syncScreenFromHistory);
    return () => {
      window.removeEventListener('popstate', syncScreenFromHistory);
      window.removeEventListener('hashchange', syncScreenFromHistory);
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleNavigate = (screen: ScreenId) => {
    if (screen !== currentScreen) {
      window.history.pushState(null, '', `#${screen}`);
    }
    setCurrentScreen(screen);
  };

  const handleSelectServiceFromCatalog = (service: ServiceItem) => {
    if (service.screenTarget) {
      handleNavigate(service.screenTarget);
    } else {
      const totals = calculateBookingTotals(service.basePrice);
      // Setup booking and go to checkout
      setBooking((prev) => ({
        ...prev,
        serviceId: service.id,
        serviceTitle: service.title,
        serviceSubtitle: service.shortDesc,
        serviceCategory: service.category,
        serviceImage: service.heroImage,
        price: totals.servicePrice,
        serviceFee: totals.platformFee,
        tax: totals.tax,
        total: totals.total,
      }));
      handleNavigate('checkout');
    }
  };

  const handleSelectServiceAndBook = (serviceId: string) => {
    const found = SERVICES.find((s) => s.id === serviceId);
    if (found) {
      handleSelectServiceFromCatalog(found);
    } else {
      handleNavigate('services');
    }
  };

  const handleInitiateBooking = (customConfig?: Partial<BookingState>) => {
    setBooking((prev) => {
      const totals = calculateBookingTotals(customConfig?.price ?? prev.price);
      return {
        ...prev,
        ...customConfig,
        price: totals.servicePrice,
        serviceFee: totals.platformFee,
        tax: totals.tax,
        total: totals.total,
        paymentStatus: 'simulation'
      };
    });
    handleNavigate('checkout');
    showToast('Service details loaded. Choose your schedule & location.');
  };

  const handleUpdateBooking = (updated: Partial<BookingState>) => {
    setBooking((prev) => ({
      ...prev,
      ...updated,
    }));
  };

  const handleCompletePayment = (completedBooking: BookingState) => {
    setBooking(completedBooking);
    showToast('Demo booking saved. No payment or technician dispatch occurred.');
  };

  const handleLoginSuccess = (userProfile: UserProfile) => {
    setUser(userProfile);
    showToast(`Welcome back, ${userProfile.name.split(' ')[0]}!`);
    handleNavigate('home');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-slate-900 selection:text-white relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 animate-bounce duration-300">
          <div className="bg-slate-950 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-3 text-sm font-medium">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Top Navbar (except on dedicated auth page if needed, but TopNavBar has home link) */}
      {currentScreen !== 'auth' && (
        <TopNavBar
          currentScreen={currentScreen}
          onNavigate={handleNavigate}
          user={user}
          onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
        />
      )}

      {currentScreen !== 'auth' && (
        <div role="note" className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-center text-xs text-amber-950">
          Research prototype: USD prices, credentials, reviews, availability, and tracking are sample data, not Indonesian market rates. No payment or dispatch occurs.
        </div>
      )}

      {/* Main Screen Router */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onSelectServiceAndBook={handleSelectServiceAndBook}
          />
        )}

        {currentScreen === 'services' && (
          <ServicesScreen
            onNavigate={handleNavigate}
            onSelectService={handleSelectServiceFromCatalog}
          />
        )}

        {currentScreen === 'service-ac' && (
          <ACDetailScreen
            onNavigate={handleNavigate}
            onInitiateBooking={handleInitiateBooking}
          />
        )}

        {currentScreen === 'service-leak' && (
          <LeakDetailScreen
            onNavigate={handleNavigate}
            onInitiateBooking={handleInitiateBooking}
          />
        )}

        {currentScreen === 'service-pump' && (
          <PumpDetailScreen
            onNavigate={handleNavigate}
            onInitiateBooking={handleInitiateBooking}
          />
        )}

        {currentScreen === 'checkout' && (
          <CheckoutScreen
            onNavigate={handleNavigate}
            booking={booking}
            onUpdateBooking={handleUpdateBooking}
            onCompletePayment={handleCompletePayment}
          />
        )}

        {currentScreen === 'confirmation' && (
          <ConfirmationScreen
            onNavigate={handleNavigate}
            booking={booking}
            onOpenTracking={() => setIsTrackingOpen(true)}
            onOpenReceipt={() => setIsReceiptOpen(true)}
            onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
          />
        )}

        {currentScreen === 'auth' && (
          <AuthScreen
            onNavigate={handleNavigate}
            onLoginSuccess={handleLoginSuccess}
          />
        )}
      </main>

      {/* Footer (Rendered on main marketing and detail screens) */}
      {currentScreen !== 'auth' && <Footer onNavigate={handleNavigate} />}

      {/* Global Modals */}
      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />

      <TechnicianTrackingModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
        booking={booking}
      />

      <ReceiptModal
        isOpen={isReceiptOpen}
        onClose={() => setIsReceiptOpen(false)}
        booking={booking}
      />
    </div>
  );
}

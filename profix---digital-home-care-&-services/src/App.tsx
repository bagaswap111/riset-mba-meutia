import React, { useState, useEffect } from 'react';
import { ScreenId, ServiceItem, BookingState, UserProfile } from './types';
import { SERVICES, PROFIX_IMAGES } from './data/services';
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
import { Layers, CheckCircle2, Navigation, FileText, MessageSquare } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [user, setUser] = useState<UserProfile | null>({
    name: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-8901',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
  });

  const [booking, setBooking] = useState<BookingState>({
    orderId: '#PF-882901',
    serviceId: 'ac-deep-cleaning',
    serviceTitle: 'AC Deep Cleaning & Coil Sanitization',
    serviceSubtitle: 'Restore 99.9% airflow efficiency with high-pressure coil wash & antibacterial treatment',
    serviceCategory: 'AC Repair',
    serviceImage: PROFIX_IMAGES.heroTech,
    price: 55.0,
    serviceFee: 4.5,
    tax: 4.4,
    total: 63.9,
    date: 'Oct 24, 2023',
    timeSlot: '11:30 AM',
    arrivalWindow: '11:15 AM - 11:45 AM',
    address: {
      street: '452 Broadway Ave',
      apartment: 'Apt 4B',
      city: 'New York',
      zipCode: '10001',
      instructions: 'Ring buzzer #4B, elevator code 1024',
    },
    customer: {
      fullName: 'Alex Morgan',
      phone: '+1 (555) 234-8901',
      email: 'alex.morgan@example.com',
    },
    technician: {
      name: 'Marcus Vance',
      badge: 'PF-448',
      specialization: 'Certified HVAC & Diagnostic Specialist',
      rating: 4.96,
      jobsCompleted: 342,
    },
    paymentMethod: 'card',
    paidAt: 'Oct 24, 2023',
  });

  // Modal states
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScreenSwitcher, setShowScreenSwitcher] = useState(false);

  // Scroll to top whenever screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
  };

  const handleSelectServiceFromCatalog = (service: ServiceItem) => {
    if (service.screenTarget) {
      setCurrentScreen(service.screenTarget);
    } else {
      // Setup booking and go to checkout
      setBooking((prev) => ({
        ...prev,
        serviceId: service.id,
        serviceTitle: service.title,
        serviceSubtitle: service.shortDesc,
        serviceCategory: service.category,
        serviceImage: service.heroImage,
        price: service.basePrice,
        tax: Number((service.basePrice * service.vatRate).toFixed(2)),
        total: Number((service.basePrice + prev.serviceFee + service.basePrice * service.vatRate).toFixed(2)),
      }));
      setCurrentScreen('checkout');
    }
  };

  const handleSelectServiceAndBook = (serviceId: string) => {
    const found = SERVICES.find((s) => s.id === serviceId);
    if (found) {
      handleSelectServiceFromCatalog(found);
    } else {
      setCurrentScreen('services');
    }
  };

  const handleInitiateBooking = (customConfig?: Partial<BookingState>) => {
    if (customConfig) {
      setBooking((prev) => ({
        ...prev,
        ...customConfig,
      }));
    }
    setCurrentScreen('checkout');
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
    showToast('Payment successful! Specialist Marcus Vance dispatched.');
  };

  const handleLoginSuccess = (userProfile: UserProfile) => {
    setUser(userProfile);
    showToast(`Welcome back, ${userProfile.name.split(' ')[0]}!`);
    setCurrentScreen('home');
  };

  const screenOptions: Array<{ id: ScreenId; label: string; icon: string }> = [
    { id: 'home', label: '1. Landing Page', icon: '🏠' },
    { id: 'services', label: '2. All Services Catalog', icon: '📋' },
    { id: 'service-ac', label: '3. AC Deep Cleaning Detail', icon: '❄️' },
    { id: 'service-leak', label: '4. Leak Detection Detail', icon: '💧' },
    { id: 'service-pump', label: '5. Pump Calibration Detail', icon: '⚙️' },
    { id: 'checkout', label: '6. Checkout & Schedule', icon: '💳' },
    { id: 'confirmation', label: '7. Order Confirmed & Dispatch', icon: '✅' },
    { id: 'auth', label: '8. User Auth / Sign In', icon: '👤' },
  ];

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

      {/* Floating Screen Navigator for quick testing & review */}
      <div className="fixed bottom-5 right-5 z-40">
        <div className="relative">
          {showScreenSwitcher && (
            <div className="absolute bottom-14 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 space-y-1 mb-2 text-xs">
              <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                <span className="font-bold text-slate-900 uppercase tracking-wider text-[10px]">
                  All Screens & Views
                </span>
                <span className="text-[10px] text-slate-400 font-mono">ProFix v1.0</span>
              </div>
              <div className="max-h-72 overflow-y-auto space-y-0.5 py-1">
                {screenOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setCurrentScreen(opt.id);
                      setShowScreenSwitcher(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl flex items-center gap-2 transition-colors cursor-pointer ${
                      currentScreen === opt.id
                        ? 'bg-slate-950 text-white font-semibold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{opt.icon}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100 grid grid-cols-3 gap-1 text-[11px]">
                <button
                  onClick={() => {
                    setIsTrackingOpen(true);
                    setShowScreenSwitcher(false);
                  }}
                  className="p-1.5 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 flex flex-col items-center cursor-pointer text-center font-medium"
                >
                  <Navigation className="w-3.5 h-3.5 mb-0.5" />
                  Live Radar
                </button>
                <button
                  onClick={() => {
                    setIsReceiptOpen(true);
                    setShowScreenSwitcher(false);
                  }}
                  className="p-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 flex flex-col items-center cursor-pointer text-center font-medium"
                >
                  <FileText className="w-3.5 h-3.5 mb-0.5" />
                  Receipt
                </button>
                <button
                  onClick={() => {
                    setIsWhatsAppOpen(true);
                    setShowScreenSwitcher(false);
                  }}
                  className="p-1.5 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 flex flex-col items-center cursor-pointer text-center font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5 mb-0.5" />
                  WhatsApp
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() => setShowScreenSwitcher(!showScreenSwitcher)}
            className="flex items-center gap-2 bg-slate-950 text-white px-4 py-2.5 rounded-full shadow-xl hover:bg-slate-800 transition-all border border-slate-700 text-xs font-bold cursor-pointer"
            title="Switch between mockup screens"
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">Screen Switcher</span>
            <span className="bg-emerald-500 text-slate-950 px-1.5 py-0.2 rounded-full text-[10px] font-black">
              8 Views
            </span>
          </button>
        </div>
      </div>

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

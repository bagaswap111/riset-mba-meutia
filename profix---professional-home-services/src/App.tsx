/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ScreenType, ServiceItem, BookingState } from './types';
import { SERVICES } from './data/mockData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScreenSwitcher } from './components/ScreenSwitcher';
import { WhatsAppModal } from './components/WhatsAppModal';
import { HomeScreen } from './screens/HomeScreen';
import { ServicesCatalogScreen } from './screens/ServicesCatalogScreen';
import { ServiceDetailScreen } from './screens/ServiceDetailScreen';
import { CheckoutScreen } from './screens/CheckoutScreen';
import { OrderConfirmationScreen } from './screens/OrderConfirmationScreen';
import { TrackTechnicianScreen } from './screens/TrackTechnicianScreen';
import { AuthScreen } from './screens/AuthScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[0]);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const [booking, setBooking] = useState<BookingState>({
    serviceId: SERVICES[0].id,
    serviceTitle: SERVICES[0].title,
    servicePrice: SERVICES[0].price,
    selectedDate: '24 Okt 2024',
    selectedTimeSlot: '11:30 AM',
    streetAddress: 'Jl. Sudirman No. 45, Tower Emerald',
    unit: 'Apt 14B',
    postalCode: '10220',
    instructions: 'Harap lapor resepsionis lobi untuk kartu akses lift.',
    paymentMethod: 'card',
    orderId: '#PF-882901',
    serviceFee: 55.00,
    tax: 4.76,
    totalPrice: 64.26,
    technicianName: 'Ahmed K.',
    technicianRating: 4.9,
    technicianReviews: 124,
    etaMinutes: 12
  });

  // Scroll to top whenever screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setBooking((prev) => ({
      ...prev,
      serviceId: service.id,
      serviceTitle: service.title,
      servicePrice: service.price,
      totalPrice: service.price + 4.50 + 4.76
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

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] flex flex-col font-sans">
      {/* Header (hidden on auth screen for focused sign-in experience) */}
      {currentScreen !== 'auth' && (
        <Header
          currentScreen={currentScreen}
          onNavigate={setCurrentScreen}
          onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
        />
      )}

      {/* Screen Router */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={setCurrentScreen}
            onSelectService={handleSelectService}
            onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
          />
        )}

        {currentScreen === 'services' && (
          <ServicesCatalogScreen
            onNavigate={setCurrentScreen}
            onSelectService={handleSelectService}
          />
        )}

        {currentScreen === 'detail' && (
          <ServiceDetailScreen
            service={selectedService}
            onNavigate={setCurrentScreen}
            onProceedToBooking={handleProceedToBooking}
          />
        )}

        {currentScreen === 'checkout' && (
          <CheckoutScreen
            booking={booking}
            onUpdateBooking={handleUpdateBooking}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'confirmation' && (
          <OrderConfirmationScreen
            booking={booking}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'tracking' && (
          <TrackTechnicianScreen
            booking={booking}
          />
        )}

        {currentScreen === 'auth' && (
          <AuthScreen
            onNavigate={setCurrentScreen}
          />
        )}
      </main>

      {/* Global Footer (hidden on tracking and auth screens matching mockup layout) */}
      {currentScreen !== 'tracking' && currentScreen !== 'auth' && (
        <Footer />
      )}

      {/* Quick Screen Explorer Floating Pill */}
      <ScreenSwitcher
        currentScreen={currentScreen}
        onSelectScreen={setCurrentScreen}
      />

      {/* Concierge WhatsApp Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />
    </div>
  );
}

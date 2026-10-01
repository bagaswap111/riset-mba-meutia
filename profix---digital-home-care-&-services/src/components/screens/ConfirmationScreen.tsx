import React, { useState } from 'react';
import { ScreenId, BookingState } from '../../types';
import { PROFIX_IMAGES } from '../../data/services';
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  ShieldCheck,
  Phone,
  MessageSquare,
  Navigation,
  FileText,
  RotateCcw,
  Sparkles,
  QrCode,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

interface ConfirmationScreenProps {
  onNavigate: (screen: ScreenId) => void;
  booking: BookingState;
  onOpenTracking: () => void;
  onOpenReceipt: () => void;
  onOpenWhatsApp: () => void;
}

export const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({
  onNavigate,
  booking,
  onOpenTracking,
  onOpenReceipt,
  onOpenWhatsApp,
}) => {
  const [rescheduleNotice, setRescheduleNotice] = useState(false);

  const tech = booking.technician || {
    name: 'Marcus Vance',
    badge: 'PF-448',
    specialization: 'Master HVAC & Fluid Systems Specialist',
    rating: 4.96,
    jobsCompleted: 342,
  };

  const customerName = booking.customer?.fullName || 'Alex Morgan';
  const customerPhone = booking.customer?.phone || '+1 (555) 234-8901';
  const customerEmail = booking.customer?.email || 'alex.morgan@example.com';
  const addressStreet = booking.address?.street || '452 Broadway Ave';
  const addressApt = booking.address?.apartment ? `, ${booking.address.apartment}` : '';
  const addressZip = booking.address?.zipCode || '10001';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20 pt-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Success Header Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm text-center mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm border border-emerald-200">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Booking Confirmed & Dispatched
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-2">
            You&apos;re All Set for Quality Home Care
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-base">
            Your appointment has been secured. Your dedicated specialist Marcus Vance has received your diagnostic brief and route details.
          </p>

          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-slate-100/90 rounded-2xl px-5 py-2.5 text-sm font-medium text-slate-700 border border-slate-200">
            <span>Booking ID: <strong className="text-slate-950 font-mono">{booking.orderId}</strong></span>
            <span className="text-slate-300">|</span>
            <span>Date: <strong>{booking.paidAt || 'Today'}</strong></span>
            <span className="text-slate-300">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Payment Approved (${booking.total.toFixed(2)})
            </span>
          </div>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenTracking}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 text-white font-semibold text-sm hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-emerald-400" />
              Track Specialist Live Radar
            </button>
            <button
              onClick={onOpenReceipt}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-800 font-semibold text-sm border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              View Digital Invoice
            </button>
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-50 text-emerald-800 font-semibold text-sm border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              WhatsApp Dispatch Desk
            </button>
          </div>
        </div>

        {/* Reschedule Alert banner if requested */}
        {rescheduleNotice && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-start gap-3 animate-fade-in">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-950">Free Flexible Rescheduling Available</p>
              <p className="mt-0.5 text-amber-800">
                You can change your schedule up to 2 hours before the technician arrives at no extra charge. Contact Marcus Vance or our 24/7 concierge via WhatsApp to pick a new slot.
              </p>
              <button
                onClick={() => setRescheduleNotice(false)}
                className="mt-2 text-xs font-bold text-amber-950 underline hover:text-amber-700"
              >
                Dismiss notification
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Assigned Specialist & Security QR */}
          <div className="lg:col-span-2 space-y-6">
            {/* Specialist Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Assigned Field Specialist
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  Active on Route
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="relative">
                  <img
                    src={PROFIX_IMAGES.heroTech}
                    alt={tech.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-slate-100 shadow-md"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-slate-950 text-white p-1.5 rounded-full shadow border-2 border-white">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-950">{tech.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono font-medium">
                      Badge #{tech.badge}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-0.5 font-medium">
                    {tech.specialization}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-slate-600">
                    <span className="flex items-center gap-1 font-semibold text-slate-900">
                      ★ {tech.rating}
                      <span className="text-slate-400 font-normal">({tech.jobsCompleted}+ verified jobs)</span>
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                      Background Checked
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-blue-700 font-medium bg-blue-50 px-2 py-0.5 rounded">
                      EPA Certified
                    </span>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Current Status</p>
                    <p className="text-sm font-bold text-slate-900">
                      Dispatched in ProFix Rapid Unit #04 • <span className="text-emerald-600">ETA ~14 Mins</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={onOpenTracking}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call
                  </button>
                  <button
                    onClick={onOpenWhatsApp}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                  </button>
                  <button
                    onClick={onOpenTracking}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-950 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" /> Live Radar
                  </button>
                </div>
              </div>
            </div>

            {/* Service & Security Pass */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-950 mb-4">Digital Service Pass & Verification</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* QR Authorization */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 text-white relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Arrival QR Pass
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-mono px-2 py-0.5 rounded border border-emerald-500/40">
                      AES-256 SECURED
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-white p-2.5 rounded-xl">
                      <QrCode className="w-16 h-16 text-slate-950" />
                    </div>
                    <div className="text-xs text-slate-300 space-y-1">
                      <p className="font-semibold text-white">Contactless Check-In</p>
                      <p className="text-slate-400 leading-relaxed text-[11px]">
                        Scan with specialist device on doorstep to verify technician credentials and start warranty clock.
                      </p>
                      <p className="font-mono text-[11px] text-emerald-400 pt-1">
                        Token: {booking.orderId.replace('#', '')}-SEC
                      </p>
                    </div>
                  </div>
                </div>

                {/* Digital Warranty Certificate Badge */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                      <ShieldCheck className="w-4 h-4" /> 90-Day Digital Warranty
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every repair is logged with digital pressure test telemetry and guaranteed for 90 days. If any issue arises, re-servicing is 100% free with priority dispatch.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Warranty ID:</span>
                    <span className="font-mono font-bold text-slate-900">#WARR-{booking.orderId.replace('#PF-', '')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Step Milestones */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-950 mb-5">Job Progression Protocol</h2>
              <div className="space-y-4">
                {[
                  {
                    step: '01',
                    title: 'Service Order Authorized',
                    desc: 'Digital booking captured and locked in cloud database.',
                    status: 'completed',
                  },
                  {
                    step: '02',
                    title: 'Specialist Dispatched & In Transit',
                    desc: 'Marcus Vance en route with ProFix OEM calibration equipment.',
                    status: 'active',
                  },
                  {
                    step: '03',
                    title: 'Diagnostic Inspection & Scope Confirmation',
                    desc: 'Live acoustic/pressure test prior to touching any component.',
                    status: 'pending',
                  },
                  {
                    step: '04',
                    title: 'Precision Work & Sanitization',
                    desc: '99.9% antibacterial flush, high-pressure rinse, and calibration.',
                    status: 'pending',
                  },
                  {
                    step: '05',
                    title: 'Digital Sign-Off & Warranty Stamp',
                    desc: 'Before/After photos uploaded directly to your ProFix portal.',
                    status: 'pending',
                  },
                ].map((item, i) => {
                  const isCompleted = item.status === 'completed';
                  const isActive = item.status === 'active';

                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                          isCompleted
                            ? 'bg-emerald-600 text-white'
                            : isActive
                            ? 'bg-slate-950 text-emerald-400 ring-4 ring-emerald-100'
                            : 'bg-slate-100 text-slate-400'
                        }`}
                      >
                        {isCompleted ? '✓' : item.step}
                      </div>
                      <div className="flex-1 pb-3 border-b border-slate-100 last:border-b-0">
                        <div className="flex items-center justify-between">
                          <h4
                            className={`text-sm font-bold ${
                              isActive
                                ? 'text-slate-950 flex items-center gap-2'
                                : isCompleted
                                ? 'text-slate-800'
                                : 'text-slate-400'
                            }`}
                          >
                            {item.title}
                            {isActive && (
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                                IN PROGRESS
                              </span>
                            )}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h2 className="text-base font-bold text-slate-950 mb-4 pb-3 border-b border-slate-100">
                Appointment Summary
              </h2>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Service Plan</p>
                  <p className="font-bold text-slate-900 mt-1">{booking.serviceTitle}</p>
                  <p className="text-xs text-slate-500">{booking.serviceCategory || 'AC Repair'} • Flat-Rate Tier</p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Schedule & Time</p>
                  <div className="flex items-center gap-2 mt-1 font-semibold text-slate-900">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>{booking.date || 'Today, Oct 24, 2023'}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-slate-600 text-xs">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{booking.timeSlot || '11:30 AM'} (Window: ±15 mins)</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Service Location</p>
                  <div className="flex items-start gap-2 mt-1 text-xs text-slate-700">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">{addressStreet}{addressApt}</p>
                      <p className="text-slate-500">{addressZip}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Contact Details</p>
                  <p className="text-xs font-medium text-slate-900 mt-1">{customerName}</p>
                  <p className="text-xs text-slate-500">{customerPhone}</p>
                  <p className="text-xs text-slate-500">{customerEmail}</p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Financial Summary</p>
                  <div className="mt-2 space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Service Flat Fee:</span>
                      <span className="font-medium">${booking.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>EPA Compliance & Diagnostics:</span>
                      <span className="font-medium">${booking.serviceFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>State Regulatory Tax:</span>
                      <span className="font-medium">${booking.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-slate-950 pt-2 border-t border-slate-200 text-sm">
                      <span>Total Paid:</span>
                      <span className="text-emerald-700">${booking.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-2.5">
                <button
                  onClick={onOpenReceipt}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <FileText className="w-4 h-4" /> Download Official Receipt
                </button>
                <button
                  onClick={() => setRescheduleNotice(true)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 text-slate-400" /> Reschedule Appointment
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-blue-600" /> Book Another Service
                </button>
                <button
                  onClick={() => onNavigate('home')}
                  className="w-full py-2 text-center text-xs text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Return to ProFix Home
                </button>
              </div>
            </div>

            {/* Safety & Compliance Badge */}
            <div className="p-5 rounded-3xl bg-slate-900 text-white text-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" /> ProFix Zero-Surprise Promise
              </div>
              <p className="text-slate-300 leading-relaxed">
                If the technician identifies any additional OEM parts required outside the initial scope, you receive a digital itemized estimate with photo proof on your phone before any wrench turns.
              </p>
              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800 flex items-center justify-between">
                <span>Insured up to $2,000,000</span>
                <span>Licensed #CA-994821</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

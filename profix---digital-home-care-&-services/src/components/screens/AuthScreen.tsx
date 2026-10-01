import React, { useState } from 'react';
import { ScreenId, UserProfile } from '../../types';
import {
  ShieldCheck,
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Phone
} from 'lucide-react';

interface AuthScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onLoginSuccess: (user: UserProfile) => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({
  onNavigate,
  onLoginSuccess,
}) => {
  const [tab, setTab] = useState<'signin' | 'signup'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('alex.morgan@example.com');
  const [password, setPassword] = useState('••••••••••••');
  const [name, setName] = useState('Alex Morgan');
  const [phoneNumber, setPhoneNumber] = useState('+1 (555) 234-8901');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const userProfile: UserProfile = {
        name: tab === 'signup' ? (name || 'Alex Morgan') : 'Alex Morgan',
        email: emailOrPhone.includes('@') ? emailOrPhone : 'alex.morgan@example.com',
        phone: phoneNumber || '+1 (555) 234-8901',
        address: '742 Evergreen Terrace',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
      };
      onLoginSuccess(userProfile);
    }, 600);
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const userProfile: UserProfile = {
        name: `${provider} Verified User`,
        email: `user.${provider.toLowerCase()}@example.com`,
        phone: '+1 (555) 789-0123',
        address: '100 Market St, Suite 400',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=256&q=80',
      };
      onLoginSuccess(userProfile);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between py-8 px-4 sm:px-6">
      {/* Top Bar with Back Link */}
      <div className="max-w-md w-full mx-auto flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Home
        </button>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-slate-950 rounded-lg flex items-center justify-center text-white font-black text-sm">
            P
          </div>
          <span className="font-extrabold text-base tracking-tight text-slate-950">PROFIX</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-md w-full mx-auto my-auto pt-6 pb-8">
        <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-black text-slate-950 tracking-tight">
              {tab === 'signin' ? 'Welcome Back to ProFix' : 'Create Your ProFix Account'}
            </h1>
            <p className="text-xs text-slate-500 mt-1.5">
              {tab === 'signin'
                ? 'Manage bookings, live tracking radar, and digital warranties.'
                : 'Join over 5,000+ homeowners with digital flat-rate protection.'}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex rounded-2xl bg-slate-100 p-1 mb-6 border border-slate-200/80">
            <button
              type="button"
              onClick={() => {
                setTab('signin');
                setMessage(null);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                tab === 'signin'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setTab('signup');
                setMessage(null);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                tab === 'signup'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Create Account
            </button>
          </div>

          {message && (
            <div className="mb-4 p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{message}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Legal Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address or Phone
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder="name@example.com or phone"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                />
              </div>
            </div>

            {tab === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number (for SMS Tracking Updates)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                  />
                </div>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Password
                </label>
                {tab === 'signin' && (
                  <button
                    type="button"
                    onClick={() => setMessage('Password reset instructions sent to your email.')}
                    className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-slate-950 focus:ring-slate-900 border-slate-300"
                />
                <span className="text-xs text-slate-600">Keep me logged in</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl bg-slate-950 text-white font-bold text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-70 mt-2"
            >
              {isLoading ? (
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  <span>{tab === 'signin' ? 'Sign In to Portal' : 'Create Free Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Social Sign-in divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2.5 text-slate-400 font-medium">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleSocialLogin('Google')}
              className="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin('Apple')}
              className="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.91-.91.04-2.02.61-2.67 1.38-.58.67-1.09 1.76-.95 2.8 1.02.08 2.05-.5 2.68-1.27z" />
              </svg>
              <span>Apple</span>
            </button>
          </div>

          {/* Guarantee Badge */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-[11px] text-slate-500">
              <p className="font-semibold text-slate-800">100% Satisfaction Guarantee</p>
              <p>All service warranties, receipts, and technician logs are secured with 256-bit encryption.</p>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          <div className="p-3 bg-white/60 rounded-2xl border border-slate-200/60">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
            <span className="text-[11px] font-semibold text-slate-700 block">Flat-Rate</span>
            <span className="text-[10px] text-slate-400">Zero hidden costs</span>
          </div>
          <div className="p-3 bg-white/60 rounded-2xl border border-slate-200/60">
            <ShieldCheck className="w-4 h-4 text-blue-600 mx-auto mb-1" />
            <span className="text-[11px] font-semibold text-slate-700 block">90-Day Bond</span>
            <span className="text-[10px] text-slate-400">Digital warranty</span>
          </div>
          <div className="p-3 bg-white/60 rounded-2xl border border-slate-200/60">
            <Sparkles className="w-4 h-4 text-amber-600 mx-auto mb-1" />
            <span className="text-[11px] font-semibold text-slate-700 block">Live Radar</span>
            <span className="text-[10px] text-slate-400">Real-time ETA</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} ProFix Home Services, Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

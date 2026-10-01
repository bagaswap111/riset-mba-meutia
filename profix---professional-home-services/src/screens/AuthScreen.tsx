import React, { useState } from 'react';
import { ScreenType } from '../types';
import { IMAGES } from '../data/mockData';

interface AuthScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onNavigate }) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [identity, setIdentity] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNotice(null);
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      onNavigate('home');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] flex flex-col justify-between relative px-4 py-8 overflow-hidden">
      {/* Back to Home Link */}
      <div className="max-w-[1280px] w-full mx-auto">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#78767d] hover:text-[#00000b] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          <span>Kembali ke Beranda</span>
        </button>
      </div>

      {/* Main Auth Card */}
      <main className="flex-1 flex items-center justify-center my-6">
        <div className="w-full max-w-[480px] bg-white rounded-3xl shadow-xl border border-[#c8c5cd]/40 overflow-hidden flex flex-col">
          {/* Branding Header */}
          <div className="p-8 pb-4 text-center">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-[#00000b] text-white rounded-2xl shadow-md">
              <span className="material-symbols-outlined text-2xl">build</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-[#00000b] mb-1">
              Selamat Datang di ProFix
            </h1>
            <p className="text-xs text-[#78767d]">Layar demonstrasi · tidak ada akun yang dibuat atau disimpan.</p>
          </div>

          {/* Tab Switcher */}
          <div role="tablist" aria-label="Pilih metode autentikasi" className="px-8 flex border-b border-[#c8c5cd]/30 text-xs font-bold uppercase tracking-wider">
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'login'}
              onClick={() => {
                setMode('login');
                setNotice(null);
              }}
              className={`flex-1 py-4 border-b-2 transition-all cursor-pointer ${
                mode === 'login'
                  ? 'border-[#0058bf] text-[#0058bf]'
                  : 'border-transparent text-[#78767d] hover:text-[#00000b]'
              }`}
            >
              MASUK
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'signup'}
              onClick={() => {
                setMode('signup');
                setNotice(null);
              }}
              className={`flex-1 py-4 border-b-2 transition-all cursor-pointer ${
                mode === 'signup'
                  ? 'border-[#0058bf] text-[#0058bf]'
                  : 'border-transparent text-[#78767d] hover:text-[#00000b]'
              }`}
            >
              BUAT AKUN
            </button>
          </div>

          {/* Form Content */}
          <div className="p-8 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="auth-identity" className="block text-[11px] font-bold uppercase tracking-wider text-[#78767d]">
                  Email atau Telepon
                </label>
                <input
                  id="auth-identity"
                  type="text"
                  autoComplete="username"
                  required
                  value={identity}
                  onChange={(e) => setIdentity(e.target.value)}
                  placeholder="Masukkan email atau nomor ponsel"
                  className="w-full h-12 px-4 bg-[#f3f3f3] border border-[#c8c5cd] rounded-xl text-xs text-[#1a1c1c] focus:outline-none focus:border-[#0058bf] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label htmlFor="auth-password" className="block text-[11px] font-bold uppercase tracking-wider text-[#78767d]">
                    Kata Sandi
                  </label>
                  {mode === 'login' && (
                    <button
                      type="button"
                      onClick={() => setNotice('Pemulihan kata sandi tidak tersedia pada prototipe ini karena tidak ada sistem akun yang terhubung.')}
                      className="text-[11px] font-semibold text-[#0058bf] hover:underline"
                    >
                      Lupa?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <input
                    id="auth-password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    aria-describedby={notice ? 'auth-notice' : undefined}
                    className="w-full h-12 pl-4 pr-11 bg-[#f3f3f3] border border-[#c8c5cd] rounded-xl text-xs text-[#1a1c1c] focus:outline-none focus:border-[#0058bf] focus:bg-white transition-all font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                    aria-pressed={showPassword}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#78767d] hover:text-[#00000b] p-1 rounded-lg"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {notice && (
                <p id="auth-notice" role="status" className="text-xs text-[#0058bf] leading-relaxed">
                  {notice}
                </p>
              )}

              {/* Main Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-13 bg-[#0058bf] hover:bg-[#006fef] disabled:opacity-50 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md cursor-pointer mt-2"
              >
                {isSubmitting ? (
                  <span>Mengautentikasi...</span>
                ) : (
                  <>
                    <span>Lanjutkan</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-[#c8c5cd]/30"></div>
                <span className="shrink-0 mx-4 text-[10px] font-bold uppercase tracking-wider text-[#78767d]">
                  ATAU
                </span>
                <div className="flex-grow border-t border-[#c8c5cd]/30"></div>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-2.5">
                <p className="text-[11px] text-[#78767d] text-center">
                  Kedua tombol di bawah hanya berpindah halaman untuk menguji alur. Tidak ada
                  penyedia identitas yang terhubung.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="w-full h-12 border-2 border-[#c8c5cd] hover:border-[#00000b] text-[#47464c] rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
                >
                  <img src={IMAGES.googleLogo} alt="" aria-hidden="true" className="w-4 h-4 object-contain" />
                  Lanjutkan dengan Google (demo)
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="w-full h-12 border-2 border-[#c8c5cd] hover:border-[#00000b] text-[#47464c] rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl text-[#25D366]" aria-hidden="true">chat_bubble</span>
                  Lanjutkan dengan WhatsApp (demo)
                </button>
              </div>
            </form>

            {/* Prototype disclosure */}
            <div className="pt-6 border-t border-[#c8c5cd]/30 flex flex-col items-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1a1a2e]/5 rounded-full text-xs font-bold text-[#00000b]">
                <span className="material-symbols-outlined text-[#0058bf] text-base">science</span>
                SIMULASI AUTENTIKASI
              </div>
              <p className="mt-2 text-[11px] text-[#78767d] text-center max-w-[280px]">
                Isi yang Anda ketik tidak dikirim, disimpan, atau diverifikasi, dan tidak ada akun
                yang dibuat.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-4">
        <p className="text-[11px] text-[#78767d]">
          © 2026 ProFix · Prototipe riset · Autentikasi tidak aktif
        </p>
      </footer>
    </div>
  );
};

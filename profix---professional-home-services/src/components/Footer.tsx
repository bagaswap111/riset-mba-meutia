import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a2e] text-[#83829b] border-t border-white/5 transition-colors">
      <div className="w-full py-16 px-6 md:px-16 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <div className="text-2xl font-bold text-white tracking-tight">ProFix</div>
          <p className="text-sm text-[#83829b]/80 leading-relaxed max-w-xs">
            Prototipe penelitian untuk layanan perawatan rumah. Kerja sama mitra dan wilayah
            layanan belum dikonfirmasi.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#d8e2ff]">Katalog Contoh</h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            {SERVICES.slice(0, 5).map((service) => (
              <li key={service.id}>
                <a
                  href={`#services?q=${encodeURIComponent(service.title)}`}
                  className="text-[#83829b] hover:text-[#d8e2ff] transition-colors"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#d8e2ff]">Status Prototipe</h2>
          <ul className="flex flex-col gap-2.5 text-sm list-none">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-base text-[#aec6ff] mt-px">pending</span>
              <span>Tarif mitra, garansi, dan kredensial belum dikonfirmasi.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-base text-[#aec6ff] mt-px">pending</span>
              <span>Pembayaran dan penjadwalan belum terhubung ke sistem nyata.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-base text-[#aec6ff] mt-px">pending</span>
              <span>Pelacakan teknisi hanya berupa ilustrasi, tanpa akses GPS.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 px-6 text-center">
        <p className="text-xs text-[#83829b]/50">
          © 2026 ProFix · Prototipe riset usability · Tidak berlaku sebagai penawaran layanan
        </p>
      </div>
    </footer>
  );
};
import { ProcessStep, ServiceItem } from '../types';

/**
 * Every figure, review, credential and guarantee in this file is sample content
 * for research-prototype purposes only. Nothing here has been confirmed by a
 * partner provider and nothing here represents a real offer.
 */

export const BOOKING_SLOTS = ['09:00', '11:30', '14:00', '16:30'];

/** Trailing phase shared by every service; kept separate so it cannot drift per service. */
export const DOCUMENTATION_STEP: ProcessStep = {
  icon: 'assignment_turned_in',
  title: 'Dokumentasi',
  description: 'Dicatat setelah konfirmasi mitra'
};

export const IMAGES = {
  technicianAhmed: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp6Vg0RbtvX9u4rZGu7cyDyVu9dH6-WpaxHxbvZcazBLvzx0OyEEOKBBcj26JMRF_Kr7sjzGxgF1bt29V-EqQW_h23p2QKWEuY_M1n9JshW9poYBvgYnSuOceWJnjH-qH2sibM7V8zXsUrsohN6srDixdh8M_l_PUXVLJMMvnMUhk7NaXcj74R3PCoSMQsP1dqxRxEkKXdDJkNtxl4-xnvGKCmfFmHD36O9WUGLbgV1oc2eWdMyZZW1gBReWCqIqC7BVR3oS9fvuX9',
  acCleaningService: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkjew0gQBYpvAUc2tIvl72OCJW9xkXmMUp8PReyGeAXgS2e6Vcxw4IjrF02xHMh4dGQvSm_kjqKVKUGfIe9DrEu2uPcuWB2kzMtFr9p5k9SOowYAVTkFRoKbk__3s9OEWzYvYqWR3KYKR_TLueNQwshJD16uKf6SGap9FsFZfa5u2ZEZs8dvyLuF2ZovpY2hDkKy1tRf2Dqn_cRmM2Njsr3SjQbnd-72rShweae295a0rFEz-TITPYQx2Jv7qupx2-vxz5TgDeQWdw',
  leakDetection: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh0dsofm_G9lttLwnEeySTbNHnWIJELzCPof7HurnvjvqZDAeetot48h81PcJ1kLy6EXTkKUnWvXXIqt21r_KBw_jUSOIUOialJ3YOIVPcwWVGgZa6r9YNPnOnwuaUBchrmEyolEdIn3RNE0u6sjXdn64-0aG7iyVvJaGQqmArrL4UoJP9ZAqyyzc6l_zyyfw3FWE4nHQ4RLmTAAT7ryH4RgqAOM1VXp4o9EimE1AiGoMSLtcpVpRN6HNsUUJx0lY60_glHC3aV-y2',
  electricalInspection: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpQKa9oj3SaGCIUFZVr3VHuOyjChVpDmLW-tl0Z7P9aa4voGpv6Ei6nrbQ1pfcViKzfqdDd_nT0InQzIAjQsnpcFJspHgOekWS0YW5erqnSqzsv2qMMs1z3BLGrDe7AujDHXq6QRPyBLAah2fxVdmNckQN_2L5GWjJzTEjR60-twZTQqrXwU0G17Wnp6TiDPL4lfWcFdt6LGG7Bb1N6TqXBLPiUPCf2rEq_L48WRSYU9mf9ALBtZRWkKGCmg2mLr7J1B3Vzjz8lvgp',
  pumpCalibration: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGGuXfrZ59HUVkx4ynMr7_qTGNzGm6HlrUJtZs6HhpndXDpGNQYIMSvxga2YAh1jqtF-_jZ2EG3trZVvairFk4DFDZ6lGP4MJ0e0tHjw-XIADFW-UhAqqIDZUzneeJUMXxDHsl1p94Vej13q-5XKwJgq2qZAof62zrj6ZQnKdG6gClBNxtkyJL6rgINZKxhZwGHzVO6l6HCrSTPrh8VvyzBT9M7XWatcgakpxG06XGADR6bhncnX25NJH7aew0q3CEtS6NEY39ZWvB',
  applianceTuning: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcgnoMZK8og274w6Qau2gsTsoBhZquj2dsDfVuNTk7rFdA3gSYvwulfvL8c6Ep1h2sVu3_TKIbZlf9Q-97Zt9578rQybZvTf4332vPgzgS_ZDlwI0D4LYT_qyhkzxM2Bg2-BCE9Br2aQt6tq_A-x8eePh4ccECEdP-X4gvkZEEfkQ48aDDDSp6DB6yqkLQTjfFz7S0wIXsmeBkT5Jn6ikoba1p3KvBsCI-LFXREdoOh8x6ZnnExhhBpGM7cv5R6inVPYuAhv6Cto-M',
  homeSanitization: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnxS6ehUN8Cdz8g1zkNC0tjhPTnB3jdtwyo84FLhA9Yk2MfC6KOdgseh4vDfBxMfxodVGFeEwvrYbMtwV9iSDa49fB0Xdkf8t4XqnXYxzIBnXPDzQyskKdoRHt-UJLH533oaEdntB3QQtjWbK3Oq9MUs9Dv5AG49lYTVf_W7msT8HWu8Nc8utie2lzbpXVW_YHZ9OIcp9kpS_cLnJcJ4YANKG7QW1cTqUsFyG8curfANusLkRRFCOxe_dvy5FRAVWLGUmovnkMiAmn',
  heroTechnician: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOI8klBVE0UP0tbls2u3RvB3d5czX0uDpu6tXM0ZtxKWN3Imja_10aPFR23C95I12fWU-8X-x-muH5-k99yLfopSjJqOdOcH-oYEOAt3voD_j7HUE0H9CpuVtKhVX70VFTvxtprM8nNcwVzcfHgBVOZ4tgpALZIGiu7rs1TdqTPscf9lHQHdjHc_ONcl4jgitslwRzzQzx73xSwlpg2YvUJlNTL-9-g5TtcOPMZD4GPoxA9v2r1-1yZkvA2cKx95x_Q4WmQHkyoqMp',
  beforeAC: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOpzjytVrt8vsYtNaSNPVAd2eBRAFPGs6IjkM8pM_rAuj5cBWDDZ86agc-vs4wkE96qSRBeVqfjz3HL4QWpe6KcOBqKKle6qOem88ZPvCd8zt7H29ZebwpoORKLPO7sSb7NExEy8OVKUchnJXVgPaffGr5jHI91gQ8pqCM0kjL4KOB0t-aJARxRLB6K3zc43agBMSbdYrvHu3F8ASQg9QrTZT9yOZY0hA8IDWqD8el0Zxv9stS8Z5Dsfn68mi5JfyYr2lkRDSwbPW5',
  afterAC: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWGtHCv6J_h3zHfzBcuc4Z6uNe_x80_r8tbFgZDKVc5chXlePn7MHfN8JMToiotVxLYavLVwAY5bNNK2LbV9UCOs3MEjhUXVJj6OZTn6aRCHG9YOOhHDoP_TcfdyYqzeCmDXTtJN6euZqM-2iZLkwF6rHlXywxWn6b4pqyEiwfebtXhq8ay-O4UhUE0bhajwBFF5POj-ifzFi881VVMrqjcVARk05H_LKhQeuDkpEd3k5ak3HUA93RLn7MYwd2lQoPyKVoAPEOsN35',
  beforePipe: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmwn7v2mgS4oi_Qw8TufN5-UoxGzVycVkFedkGTv2kybmwXsC15j7Cscin1Gd-EjUz8xlJWTYwSkbm0s7jS1U9CuGETZbqN52mwPRwPmglXvUcS50xklzUcmCD0EQ0PBvdAd8jXoR2tprhHex21jEXsJp9DP0lF-PI7LEAUYCVVWKN4FOtmGkM7HymsGxKJ6gzdvu8blndo70hG7BZSSlCUJSUxBCvOi3r8xxB3VXVFgf3BkfgWIViR-5DLj9SLpVfsi5ajnUney6a',
  afterPipe: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIqZTVVptGJgcQP5ivdzxcZ_jNHjkug7SquHnxtzuVXAWtFHQEiRt6YLlKc2shBrmCHKGhZM6ni34DBg6CSRuBhE8GbTFN1qjzlOdVr5gaPmCqAG8e2v0GAsgjUredV73x7kKnCbtIYWtcbFLImWl9jTDBMQtrOcLKRrKWoyyPZJpRC6ieyU5g7KEZDh4D2b139S5ZI76XVU_poAEk5VJEobpxOoLCwPjCmozZFzUyp92DdcjvNGo5uX5PuMQVDyuXKjuWOcFpijKc',
  testimonialSarah: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7yoYU2Ip8YZtbDk7JnknKhTY8GENbMn_UecAzAymn4y8tSO257b3WVIZZo5AQyWXb8c1NAeRijF4irwCFYLez5h160wfRHOL0ut1NTRBURQeN9yoNZ2buvLi5V9AqdmKL4u4hoIaIrQ6P36uFMe4EylNjtyPH84znHl7L8VITG8c8XM5vgJMBN-7CFgj-Ytl5OkwsgRseMJ0sswiyeTTN-ueWcvsbWIzv5HkqLJHikTy6K7aY5dBAUTUqxlTIYP4TxcxePIJxnJMs',
  acDetailAction: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1m3rhvEDqIfdfxFJKGwEFwHYA8UOnYber4WVvt90SBu35ByB9Xcu4HNBqymBlxVVCcDm1sfmPh7tQA6nF3bbQwYiDP2jDxfIlJeHrofHKQtUT-5HKvdWfBlceCx9NH7wsip4DESfLWJUdJuN2Nn5giYSPVILCeghqiQlSogix1u8xcCingEyYNjfHhFirLLcOsAOuCrz4HMuQi-4fFy1sfD10M7FnyuNwmzen-87Qu5PHLMefjfSaH3CNQs_r4PLg5MtHvII6DsfV',
  acEquipment: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdxIm4W9u7NQzUMqDDFlIO4BbOtmVNV3nNxw_rBEPSu1aKxJt3B5joX6TOl5caO6OuK6i5EDcyW0vvsDIcWZFrPoHbueGQjheUT4q58XIttYbCeXo2wWHWYbhGS5oPy2Jbvy5qx_86vjAFev-J2Ckl3ZiPBsQwjkJoXrYDdgH-rPBDOgpnq0u7IuNLQWr-O_Ku_ut-H2sI5FcqSWdlklpl2_AVc-FpftM6zF2Zpkum6SNlSsy7RKrajbD-Ov8KFrmxCwKmX6tzxCQm',
  googleLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa12kT1ssWS_7KhJkjrftL5VxPS44FvmsxJs54bIQGvRnz7DXEeIwWDxpg_L2JiYOC8jUp9PE8Mvcvj1T1PBGmqjN8h9wKSLFrUV6KJE-JAcWwvMmaQxWKOZimtY5c8feeltY0RV-Tt9f_fESO57pIQF0iw5j6mokj7u5t-M6a9sE5pCgnVpfiMrKE-hbA2whBUMDGG57jvzRRuvzLJJlvqpzGXnT0l-gXDxWyRzz0RXa30kUHlkn1JHUKXL-aOGoo6cU1E-ypU-HZ',
  visaLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3Udwh0Sx491g9VCALGDHd_UaTXnox-Nx0y5zYCtfI0TJ_5fflu10K_y_ekyfCnNqU-j_CyOpmfbdzEaVq-0ko0-4nVDwTsbW6Illuk_LVTbZ9x1ZEDfm_0WJaO2Y4dAZEd5KU1HeB-smsTwlhidziNx5gDZnjc5CAFekkWAnUye9yGfcgk4rr5U4SyxUIR5LfEVOJbS5qBCMt0CiGQSetOv1fD5bNtJm6J1w8wE-LteULusHaqR7pzNXSXTvinSxjLSLhdAg-2kL8',
  mastercardLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKIULyvk48vr7sqQrQcLurUhJtGW2I7XAn5ZrloLNVk6fUtRcYYFiJ6lNc4Z_Ceg1aG7-6MOlp8MH36-5WH6ehi_Ci7kQoLP_d-rJRAr55tb-AYhjdsyhvXv7pAV12bB_bJFaU99Np_b9sG3gHgDJmAHbHk2sGJxsM8p2ZFeiqKil9L2vNaTnvIs2Q_xbGBneNLqmWcUrcbJbCLYRbRFbxAzw0MWmTANk5feXGQJYLRZJ1JCzpnT9pyx95hGFzf1Mi8sp_WDD7nWS1'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ac-deep-clean',
    title: 'Pembersihan AC Mendalam',
    category: 'ac',
    categoryLabel: 'Reparasi AC',
    description: 'Sterilisasi unit indoor & outdoor lengkap dengan perawatan antimikroba.',
    price: 55,
    startingPrice: 55,
    currency: 'USD',
    image: IMAGES.acCleaningService,
    verified: false,
    warranty: false,
    estimatedMinutes: 90,
    inclusions: [
      'Jet-Wash Coil Cleaning (Pembersihan air bertekanan tinggi untuk evaporator internal)',
      'Perawatan Antimikroba (Semprotan sterilisasi disetujui FDA membasmi bakteri)',
      'Pembersihan Saluran Pembuangan (Membersihkan sumbatan & cegah bocor)',
      'Pengecekan Performa (Pengujian tekanan freon & suhu hembusan)'
    ],
    processSteps: [
      { icon: 'troubleshoot', title: 'Diagnosis', description: 'Pengecekkan unit dan lokasi kebocoran air' },
      { icon: 'cleaning_services', title: 'Pembersihan', description: 'Cuci kimia menyeluruh bagian indoor dan outdoor' },
      { icon: 'sanitizer', title: 'Sterilisasi', description: 'Lapisan antimikroba pada koil dan bilah' }
    ]
  },
  {
    id: 'leak-detect',
    title: 'Deteksi Kebocoran Pintar',
    category: 'plumbing',
    categoryLabel: 'Plumbing',
    description: 'Deteksi kebocoran ultrasonik non-invasif untuk sistem pipa internal.',
    price: 89,
    startingPrice: 89,
    currency: 'USD',
    image: IMAGES.leakDetection,
    verified: false,
    warranty: false,
    estimatedMinutes: 60,
    inclusions: [
      'Scanning ultrasonik dinding & lantai tanpa bongkar',
      'Pemetaan titik kebocoran presisi milimeter',
      'Pengujian tekanan pipa hidrolik',
      'Rekomendasi perbaikan & estimasi suku cadang transparan'
    ],
    processSteps: [
      { icon: 'search', title: 'Pendeteksian', description: 'Pemindaian ultrasonik area yang dicurigai' },
      { icon: 'water_drop', title: 'Titik Bocor', description: 'Penandaan lokasi dan kedalaman kebocoran' },
      { icon: 'build', title: 'Rekomendasi', description: 'Rencana perbaikan dan perkiraan suku cadang' }
    ]
  },
  {
    id: 'electrical-inspect',
    title: 'Inspeksi Rumah Total',
    category: 'electrical',
    categoryLabel: 'Kelistrikan',
    description: 'Audit keamanan listrik 50 titik yang komprehensif dan cek thermal imaging.',
    price: 120,
    startingPrice: 120,
    currency: 'USD',
    image: IMAGES.electricalInspection,
    verified: false,
    warranty: false,
    estimatedMinutes: 120,
    inclusions: [
      'Pemeriksaan thermal imaging panel sekring',
      'Pengujian grounding & proteksi sengatan ELCB',
      'Pemeriksaan beban berlebih pada stopkontak',
      'Laporan audit digital 50-titik tersertifikasi'
    ],
    processSteps: [
      { icon: 'electrical_services', title: 'Pemeriksaan Panel', description: 'Pen Subsectionokan visual dan termal' },
      { icon: 'power', title: 'Pengujian Proteksi', description: 'Grounding dan proteksi sengatan' },
      { icon: 'fact_check', title: 'Laporan', description: 'Daftar temuan dan rekomendasi perbaikan' }
    ]
  },
  {
    id: 'pump-calibration',
    title: 'Kalibrasi Pompa',
    category: 'pump',
    categoryLabel: 'Layanan Pompa',
    description: 'Kalibrasi tekanan elektronik dan optimalisasi efisiensi motor.',
    price: 75,
    startingPrice: 75,
    currency: 'USD',
    image: IMAGES.pumpCalibration,
    verified: false,
    warranty: false,
    estimatedMinutes: 75,
    inclusions: [
      'Penyetelan pressure switch elektronik otomatis',
      'Pengecekan seal mekanis & bearing motor',
      'Pengurasan & kalibrasi tabung tekanan udara',
      'Uji coba debit air maksimal ke seluruh keran'
    ],
    processSteps: [
      { icon: 'water_pump', title: 'Pengecekan Pompa', description: 'Tekanan, seal, dan bearing motor' },
      { icon: 'tune', title: 'Kalibrasi', description: 'Setelan pressure switch dan tabung tekanan' },
      { icon: 'science', title: 'Uji Coba', description: 'Pengukuran debit air pada titik keran' }
    ]
  },
  {
    id: 'appliance-tuning',
    title: 'Penyetelan Alat Rumah',
    category: 'appliances',
    categoryLabel: 'Alat Rumah',
    description: 'Pemeliharaan preventif untuk mesin cuci, pengering, dan mesin pencuci piring.',
    price: 65,
    startingPrice: 65,
    currency: 'USD',
    image: IMAGES.applianceTuning,
    verified: false,
    warranty: false,
    estimatedMinutes: 60,
    inclusions: [
      'Pembersihan filter drum & saluran drainase',
      'Pemeriksaan v-belt dan leveling getaran motor',
      'Dekalsifikasi pemanas dan katup selenoid',
      'Garansi pengerjaan 30 hari penuh'
    ],
    processSteps: [
      { icon: 'inspect', title: 'Pemeriksaan', description: 'Filter, drainase, dan getaran motor' },
      { icon: 'cleaning_services', title: 'Perawatan', description: 'Pembersihan dan dekalsifikasi komponen' },
      { icon: 'play_circle', title: 'Uji Fungsi', description: 'Menjalankan satu siklus penuh mesin' }
    ]
  },
  {
    id: 'home-sanitation',
    title: 'Sanitasi Rumah Mendalam',
    category: 'sanitation',
    categoryLabel: 'Sanitasi',
    description: 'Disinfeksi permukaan tingkat rumah sakit dan pembersihan uap sofa/kasur.',
    price: 150,
    startingPrice: 150,
    currency: 'USD',
    image: IMAGES.homeSanitization,
    verified: false,
    warranty: false,
    estimatedMinutes: 180,
inclusions: [
      'Disinfeksi kabut kering (dry-fogging) anti-virus',
      'Hydro-vacuum ekstraksi tungau kasur & sofa',
      'Sanitasi uap panas 150°C membunuh 99.9% patogen',
      'Sertifikat sanitasi digital ProFix'
    ],
    processSteps: [
      { icon: 'sanitizer', title: 'Persiapan', description: 'Pemeriksaan area dan pemilihan metode' },
      { icon: 'mist', title: 'Penerapan', description: 'Kabut kering dan ekstraksi pada permukaan' },
      { icon: 'task_alt', title: 'Pemeriksaan', description: 'Evaluasi area setelah penanganan' }
    ]
  }
];

export interface FeaturedService {
  service: ServiceItem;
  icon: string;
}

/**
 * Homepage highlights. Title, description and price are read from SERVICES so the
 * landing page can never advertise a figure that disagrees with the catalog or
 * the detail page. Only the display icon is declared here.
 */
export const FEATURED_SERVICES: FeaturedService[] = [
  { serviceId: 'ac-deep-clean', icon: 'ac_unit' },
  { serviceId: 'leak-detect', icon: 'plumbing' },
  { serviceId: 'pump-calibration', icon: 'water_pump' }
]
  .map(({ serviceId, icon }) => {
    const service = SERVICES.find((item) => item.id === serviceId);
    return service ? { service, icon } : null;
  })
  .filter((entry): entry is FeaturedService => entry !== null);

export const TESTIMONIALS = [
  {
    id: 't1',
    initials: 'PA',
    name: 'Pelanggan Contoh A',
    role: 'Contoh profil pemilik unit hunian',
    review: 'Contoh teks ulasan untuk menguji panjang bacaan dan hierarki informasi pada kartu ulasan. Bukan kutipan pelanggan nyata.',
    rating: 5,
    hasImage: false
  },
  {
    id: 't2',
    initials: 'PB',
    name: 'Pelanggan Contoh B',
    role: 'Contoh profil penghuni apartemen',
    review: 'Contoh teks ulasan kedua untuk memeriksa apakah tiga kolom tetap terbaca pada layar ponsel. Bukan kutipan pelanggan nyata.',
    rating: 4,
    hasImage: true,
    image: IMAGES.testimonialSarah
  },
  {
    id: 't3',
    initials: 'PC',
    name: 'Pelanggan Contoh C',
    role: 'Contoh profil pengguna pompa air',
    review: 'Contoh teks ulasan ketiga untuk menguji keselarasan tinggi kartu dan jarak antar-teks. Bukan kutipan pelanggan nyata.',
    rating: 5,
    hasImage: false
  }
];

export const FAQS = [
  {
    question: 'Apakah harga di prototipe ini merupakan tarif sebenarnya?',
    answer: 'Belum. Seluruh nominal yang tampil adalah angka contoh dalam USD untuk menguji tampilan dan alur pemesanan. Tarif mitra dalam Rupiah, pajak, dan biaya layanan belum dikonfirmasi, sehingga prototipe tidak menampilkan jumlah yang dapat dibayar.'
  },
  {
    question: 'Bagaimana status garansi dan kredensial teknisi?',
    answer: 'Cakupan garansi, masa berlaku, dan kualifikasi teknisi belum dikonfirmasi oleh mitra. Halaman layanan hanya menyediakan ruang untuk informasi tersebut, dan prototipe tidak membuat klaim garansi maupun sertifikasi.'
  },
  {
    question: 'Apakah saya bisa membayar atau memesan lewat situs ini?',
    answer: 'Tidak. Prototipe tidak terhubung ke payment gateway, sistem penjadwalan, atau nomor mitra. Tombol konfirmasi hanya menyelesaikan simulasi alur untuk keperluan pengujian dan tidak mengirim apa pun.'
  },
  {
    question: 'Kenapa saya melihat halaman pelacakan teknisi?',
    answer: 'Halaman pelacakan hanya memvisualisasi tahap perjalanan sebagai ilustrasi. Prototipe tidak mengakses GPS perangkat Anda dan tidak menampilkan posisi teknisi sebenarnya.'
  }
];

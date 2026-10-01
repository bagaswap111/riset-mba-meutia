import { ServiceItem } from '../types';

export const PROFIX_IMAGES = {
  heroTech: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOI8klBVE0UP0tbls2u3RvB3d5czX0uDpu6tXM0ZtxKWN3Imja_10aPFR23C95I12fWU-8X-x-muH5-k99yLfopSjJqOdOcH-oYEOAt3voD_j7HUE0H9CpuVtKhVX70VFTvxtprM8nNcwVzcfHgBVOZ4tgpALZIGiu7rs1TdqTPscf9lHQHdjHc_ONcl4jgitslwRzzQzx73xSwlpg2YvUJlNTL-9-g5TtcOPMZD4GPoxA9v2r1-1yZkvA2cKx95x_Q4WmQHkyoqMp',
  acCleanHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1m3rhvEDqIfdfxFJKGwEFwHYA8UOnYber4WVvt90SBu35ByB9Xcu4HNBqymBlxVVCcDm1sfmPh7tQA6nF3bbQwYiDP2jDxfIlJeHrofHKQtUT-5HKvdWfBlceCx9NH7wsip4DESfLWJUdJuN2Nn5giYSPVILCeghqiQlSogix1u8xcCingEyYNjfHhFirLLcOsAOuCrz4HMuQi-4fFy1sfD10M7FnyuNwmzen-87Qu5PHLMefjfSaH3CNQs_r4PLg5MtHvII6DsfV',
  leakDetectionHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA26R_2-kPd0Fp4ppkBAh4AvCJ9dIolmfRmcqGc6hQ7O_ismq21ssQcUG1k67IQuDf3xeEB98w06cMhO_PHg4UN3LKl0EDef19FCK5q0P_KDO8Lc3BWGxXFuupP5yvRMtl-4YKSOuBhnx2y2bdyoTme9IMDvzkOKEOAJFbfJDVrh62L5Wj-7QPiNRDSdCQ5HkInRqzmoqXYQh3FvdXfmCHc7rTPhcIWH0wmMS12TZZsFX-krHYtg6eeGWdhZnS5f4uS0pBr05lu6n9M',
  pumpHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzYGb5EqMsVz7cHPn7A6gBNpVVdJ5Ylh1T7x6ugYBwnfPIm-jE85ZPunXsP3EIRaQdq-Lt4QUYvzk5zu_kFlW1o6RJhMTEy4a47D10ccCvUbnaraIFFQGoXyKBDYbxbF0RLhmZDRUy3EOKokYIDgJI4gHmgxXvMjxHHvP7uh5gthvMQmzs3hYNIs36ZZ0ayEnb70nqU6nDPsek6INYiaCPeTIfhfY_Nw_-pvUMVnDdw2-m6ReDyd0OUwK8a-n1d54HLd9VtOPxhN7c',
  beforeAC: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOpzjytVrt8vsYtNaSNPVAd2eBRAFPGs6IjkM8pM_rAuj5cBWDDZ86agc-vs4wkE96qSRBeVqfjz3HL4QWpe6KcOBqKKle6qOem88ZPvCd8zt7H29ZebwpoORKLPO7sSb7NExEy8OVKUchnJXVgPaffGr5jHI91gQ8pqCM0kjL4KOB0t-aJARxRLB6K3zc43agBMSbdYrvHu3F8ASQg9QrTZT9yOZY0hA8IDWqD8el0Zxv9stS8Z5Dsfn68mi5JfyYr2lkRDSwbPW5',
  afterAC: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWGtHCv6J_h3zHfzBcuc4Z6uNe_x80_r8tbFgZDKVc5chXlePn7MHfN8JMToiotVxLYavLVwAY5bNNK2LbV9UCOs3MEjhUXVJj6OZTn6aRCHG9YOOhHDoP_TcfdyYqzeCmDXTtJN6euZqM-2iZLkwF6rHlXywxWn6b4pqyEiwfebtXhq8ay-O4UhUE0bhajwBFF5POj-ifzFi881VVMrqjcVARk05H_LKhQeuDkpEd3k5ak3HUA93RLn7MYwd2lQoPyKVoAPEOsN35',
  beforeLeak: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmwn7v2mgS4oi_Qw8TufN5-UoxGzVycVkFedkGTv2kybmwXsC15j7Cscin1Gd-EjUz8xlJWTYwSkbm0s7jS1U9CuGETZbqN52mwPRwPmglXvUcS50xklzUcmCD0EQ0PBvdAd8jXoR2tprhHex21jEXsJp9DP0lF-PI7LEAUYCVVWKN4FOtmGkM7HymsGxKJ6gzdvu8blndo70hG7BZSSlCUJSUxBCvOi3r8xxB3VXVFgf3BkfgWIViR-5DLj9SLpVfsi5ajnUney6a',
  afterLeak: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIqZTVVptGJgcQP5ivdzxcZ_jNHjkug7SquHnxtzuVXAWtFHQEiRt6YLlKc2shBrmCHKGhZM6ni34DBg6CSRuBhE8GbTFN1qjzlOdVr5gaPmCqAG8e2v0GAsgjUredV73x7kKnCbtIYWtcbFLImWl9jTDBMQtrOcLKRrKWoyyPZJpRC6ieyU5g7KEZDh4D2b139S5ZI76XVU_poAEk5VJEobpxOoLCwPjCmozZFzUyp92DdcjvNGo5uX5PuMQVDyuXKjuWOcFpijKc',
  ugcCustomer: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7yoYU2Ip8YZtbDk7JnknKhTY8GENbMn_UecAzAymn4y8tSO257b3WVIZZo5AQyWXb8c1NAeRijF4irwCFYLez5h160wfRHOL0ut1NTRBURQeN9yoNZ2buvLi5V9AqdmKL4u4hoIaIrQ6P36uFMe4EylNjtyPH84znHl7L8VITG8c8XM5vgJMBN-7CFgj-Ytl5OkwsgRseMJ0sswiyeTTN-ueWcvsbWIzv5HkqLJHikTy6K7aY5dBAUTUqxlTIYP4TxcxePIJxnJMs',
  checkoutEquipment: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdxIm4W9u7NQzUMqDDFlIO4BbOtmVNV3nNxw_rBEPSu1aKxJt3B5joX6TOl5caO6OuK6i5EDcyW0vvsDIcWZFrPoHbueGQjheUT4q58XIttYbCeXo2wWHWYbhGS5oPy2Jbvy5qx_86vjAFev-J2Ckl3ZiPBsQwjkJoXrYDdgH-rPBDOgpnq0u7IuNLQWr-O_Ku_ut-H2sI5FcqSWdlklpl2_AVc-FpftM6zF2Zpkum6SNlSsy7RKrajbD-Ov8KFrmxCwKmX6tzxCQm',
  googleLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa12kT1ssWS_7KhJkjrftL5VxPS44FvmsxJs54bIQGvRnz7DXEeIwWDxpg_L2JiYOC8jUp9PE8Mvcvj1T1PBGmqjN8h9wKSLFrUV6KJE-JAcWwvMmaQxWKOZimtY5c8feeltY0RV-Tt9f_fESO57pIQF0iw5j6mokj7u5t-M6a9sE5pCgnVpfiMrKE-hbA2whBUMDGG57jvzRRuvzLJJlvqpzGXnT0l-gXDxWyRzz0RXa30kUHlkn1JHUKXL-aOGoo6cU1E-ypU-HZ',
  catalogAc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkjew0gQBYpvAUc2tIvl72OCJW9xkXmMUp8PReyGeAXgS2e6Vcxw4IjrF02xHMh4dGQvSm_kjqKVKUGfIe9DrEu2uPcuWB2kzMtFr9p5k9SOowYAVTkFRoKbk__3s9OEWzYvYqWR3KYKR_TLueNQwshJD16uKf6SGap9FsFZfa5u2ZEZs8dvyLuF2ZovpY2hDkKy1tRf2Dqn_cRmM2Njsr3SjQbnd-72rShweae295a0rFEz-TITPYQx2Jv7qupx2-vxz5TgDeQWdw',
  catalogLeak: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh0dsofm_G9lttLwnEeySTbNHnWIJELzCPof7HurnvjvqZDAeetot48h81PcJ1kLy6EXTkKUnWvXXIqt21r_KBw_jUSOIUOialJ3YOIVPcwWVGgZa6r9YNPnOnwuaUBchrmEyolEdIn3RNE0u6sjXdn64-0aG7iyVvJaGQqmArrL4UoJP9ZAqyyzc6l_zyyfw3FWE4nHQ4RLmTAAT7ryH4RgqAOM1VXp4o9EimE1AiGoMSLtcpVpRN6HNsUUJx0lY60_glHC3aV-y2',
  catalogInspection: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpQKa9oj3SaGCIUFZVr3VHuOyjChVpDmLW-tl0Z7P9aa4voGpv6Ei6nrbQ1pfcViKzfqdDd_nT0InQzIAjQsnpcFJspHgOekWS0YW5erqnSqzsv2qMMs1z3BLGrDe7AujDHXq6QRPyBLAah2fxVdmNckQN_2L5GWjJzTEjR60-twZTQqrXwU0G17Wnp6TiDPL4lfWcFdt6LGG7Bb1N6TqXBLPiUPCf2rEq_L48WRSYU9mf9ALBtZRWkKGCmg2mLr7J1B3Vzjz8lvgp',
  catalogPump: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGGuXfrZ59HUVkx4ynMr7_qTGNzGm6HlrUJtZs6HhpndXDpGNQYIMSvxga2YAh1jqtF-_jZ2EG3trZVvairFk4DFDZ6lGP4MJ0e0tHjw-XIADFW-UhAqqIDZUzneeJUMXxDHsl1p94Vej13q-5XKwJgq2qZAof62zrj6ZQnKdG6gClBNxtkyJL6rgINZKxhZwGHzVO6l6HCrSTPrh8VvyzBT9M7XWatcgakpxG06XGADR6bhncnX25NJH7aew0q3CEtS6NEY39ZWvB',
  catalogAppliance: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcgnoMZK8og274w6Qau2gsTsoBhZquj2dsDfVuNTk7rFdA3gSYvwulfvL8c6Ep1h2sVu3_TKIbZlf9Q-97Zt9578rQybZvTf4332vPgzgS_ZDlwI0D4LYT_qyhkzxM2Bg2-BCE9Br2aQt6tq_A-x8eePh4ccECEdP-X4gvkZEEfkQ48aDDDSp6DB6yqkLQTjfFz7S0wIXsmeBkT5Jn6ikoba1p3KvBsCI-LFXREdoOh8x6ZnnExhhBpGM7cv5R6inVPYuAhv6Cto-M',
  catalogSanitization: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnxS6ehUN8Cdz8g1zkNC0tjhPTnB3jdtwyo84FLhA9Yk2MfC6KOdgseh4vDfBxMfxodVGFeEwvrYbMtwV9iSDa49fB0Xdkf8t4XqnXYxzIBnXPDzQyskKdoRHt-UJLH533oaEdntB3QQtjWbK3Oq9MUs9Dv5AG49lYTVf_W7msT8HWu8Nc8utie2lzbpXVW_YHZ9OIcp9kpS_cLnJcJ4YANKG7QW1cTqUsFyG8curfANusLkRRFCOxe_dvy5FRAVWLGUmovnkMiAmn'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ac-deep-cleaning',
    title: 'AC Deep Cleaning',
    category: 'AC Repair',
    basePrice: 55,
    vatRate: 0.05,
    estimatedMinutes: 90,
    shortDesc: 'Complete indoor & outdoor unit sterilization with antimicrobial treatment.',
    longDesc: "Restore your unit's factory performance with our signature antimicrobial sterilization and chemical coil cleaning.",
    heroImage: PROFIX_IMAGES.catalogAc,
    verified: false,
    warrantyIncluded: true,
    screenTarget: 'service-ac',
    includedFeatures: [
      {
        title: 'Jet-Wash Coil Cleaning',
        description: 'High-pressure water cleaning for internal evaporators.',
        icon: 'cleaning_services'
      },
      {
        title: 'Antimicrobial Treatment',
        description: 'FDA-approved sterilization spray to eliminate bacteria.',
        icon: 'sanitizer'
      },
      {
        title: 'Drain Line Flush',
        description: 'Clearing blockages to prevent leakage and water damage.',
        icon: 'water_drop'
      },
      {
        title: 'Performance Check',
        description: 'Post-service gas pressure and temperature testing.',
        icon: 'speed'
      }
    ],
    roadmap: [
      {
        step: 1,
        title: 'Diagnosis',
        description: 'Initial health check and thermal coil audit.',
        icon: 'troubleshoot'
      },
      {
        step: 2,
        title: 'Cleaning',
        description: 'Deep chemical wash and fin realignment.',
        icon: 'cleaning_services'
      },
      {
        step: 3,
        title: 'Sterilization',
        description: 'Antimicrobial coating application.',
        icon: 'sanitizer'
      },
      {
        step: 4,
        title: 'Warranty',
        description: 'Digital logging. Guarantee terms are not confirmed by any partner.',
        icon: 'assignment_turned_in'
      }
    ],
    reviews: [
      {
        author: 'Sample Reviewer A',
        initials: 'SR',
        timeAgo: 'Sample data',
        rating: 5,
        quote: 'Sample review text for layout testing. Extremely professional. The technician arrived exactly on time and even showed me the before/after photos of the internal coils. Huge difference in air quality.',
        serviceTag: 'AC Deep Cleaning',
        avatarBg: 'bg-secondary-fixed text-on-secondary-fixed',
        verified: false
      },
      {
        author: 'Sample Reviewer B',
        initials: 'SR',
        timeAgo: 'Sample data',
        rating: 5,
        quote: 'Sample review text for layout testing. The process was very clean. They used plastic coverings to protect my walls and furniture. My AC is cooling like it\'s brand new.',
        serviceTag: 'AC Deep Cleaning',
        avatarBg: 'bg-primary-fixed text-on-primary-fixed',
        verified: false
      }
    ]
  },
  {
    id: 'smart-leak-detection',
    title: 'Smart Leak Detection',
    category: 'Plumbing',
    basePrice: 89,
    vatRate: 0.05,
    estimatedMinutes: 60,
    shortDesc: 'Non-invasive ultrasonic leak detection for internal plumbing systems.',
    longDesc: 'Non-invasive diagnostic technology that finds hidden leaks with millimeter precision. Protect your home\'s integrity without a single unnecessary hole.',
    heroImage: PROFIX_IMAGES.catalogLeak,
    verified: false,
    warrantyIncluded: true,
    screenTarget: 'service-leak',
    includedFeatures: [
      {
        title: 'Ultrasonic Testing',
        description: 'High-frequency acoustic sensors pinpoint the exact vibration profile of pressurized water escaping pipes, even behind thick masonry.',
        icon: 'graphic_eq'
      },
      {
        title: 'Thermal Imaging',
        description: 'FLIR technology detects temperature anomalies caused by moisture accumulation, revealing saturated areas invisible to the human eye.',
        icon: 'thermostat'
      },
      {
        title: 'Pipe Inspection',
        description: 'Micro-robotic HD cameras navigate your drainage system to provide a real-time visual feed of internal structural integrity.',
        icon: 'videocam'
      }
    ],
    roadmap: [
      {
        step: 1,
        title: 'Sensor Mapping',
        description: 'Deployment of acoustic sensors across your primary lines.',
        icon: 'sensors'
      },
      {
        step: 2,
        title: 'Signal Analysis',
        description: 'Digital triangulation of sound peaks to isolate the leak zone.',
        icon: 'analytics'
      },
      {
        step: 3,
        title: 'Visual Confirmation',
        description: 'Thermal and video verification of the suspected fault area.',
        icon: 'camera_alt'
      },
      {
        step: 4,
        title: 'Repair Blueprint',
        description: 'Generation of a surgical repair plan and quote.',
        icon: 'architecture'
      }
    ],
    reviews: [
      {
        author: 'Sample Reviewer C',
        initials: 'SR',
        timeAgo: 'Sample data',
        rating: 5,
        quote: 'Sample review text for layout testing. Saved thousands in potential water damage. They located a pinhole pipe leak inside our kitchen wall within 20 minutes without breaking any drywall!',
        serviceTag: 'Smart Leak Detection',
        avatarBg: 'bg-secondary-fixed text-on-secondary-fixed',
        verified: false
      }
    ]
  },
  {
    id: 'full-house-inspection',
    title: 'Full House Inspection',
    category: 'Electrical',
    basePrice: 120,
    vatRate: 0.05,
    estimatedMinutes: 120,
    shortDesc: 'Comprehensive 50-point electrical safety audit and thermal imaging check.',
    longDesc: 'Complete residential electrical safety check covering fuse boxes, grounding, breaker load capacities, and thermal hotspots.',
    heroImage: PROFIX_IMAGES.catalogInspection,
    verified: false,
    warrantyIncluded: true,
    includedFeatures: [
      {
        title: '50-Point Safety Audit',
        description: 'Exhaustive check of breaker boxes, switchboards, and outlet grounding.',
        icon: 'fact_check'
      },
      {
        title: 'Thermal Breaker Analysis',
        description: 'Infrared scan to identify dangerous overheating circuits before failures occur.',
        icon: 'thermostat'
      },
      {
        title: 'Surge Protection Assessment',
        description: 'Testing grounding impedance and surge arrestor readiness.',
        icon: 'electric_bolt'
      }
    ],
    roadmap: [
      {
        step: 1,
        title: 'Panel Assessment',
        description: 'Main service entry and circuit breaker inspection.',
        icon: 'electrical_services'
      },
      {
        step: 2,
        title: 'Thermal Scan',
        description: 'FLIR imaging of hot junctions and loose terminal connections.',
        icon: 'sensors'
      },
      {
        step: 3,
        title: 'Load Testing',
        description: 'Full-house simulated consumption stress test.',
        icon: 'speed'
      },
      {
        step: 4,
        title: 'Digital Certification',
        description: 'Insurance-ready electrical safety report delivered instantly.',
        icon: 'verified'
      }
    ],
    reviews: [
      {
        author: 'Sample Reviewer D',
        initials: 'SR',
        timeAgo: 'Sample data',
        rating: 5,
        quote: 'Sample review text for layout testing. Essential for anyone purchasing an older home. Found two overloaded circuits that could have become major fire hazards.',
        serviceTag: 'Electrical Audit',
        avatarBg: 'bg-primary-fixed text-on-primary-fixed',
        verified: false
      }
    ]
  },
  {
    id: 'pump-calibration',
    title: 'Pump Calibration',
    category: 'Pump Services',
    basePrice: 75,
    vatRate: 0.05,
    estimatedMinutes: 75,
    shortDesc: 'Electronic pressure calibration and motor efficiency optimization.',
    longDesc: 'Precision-engineered tuning for industrial and residential water systems. Maximize efficiency, reduce noise, and extend pump lifespan with our expert calibration.',
    heroImage: PROFIX_IMAGES.catalogPump,
    verified: false,
    warrantyIncluded: true,
    screenTarget: 'service-pump',
    includedFeatures: [
      {
        title: 'Pressure Testing',
        description: 'Real-time monitoring and stress testing to ensure system integrity under peak load conditions.',
        icon: 'compress'
      },
      {
        title: 'Motor Efficiency',
        description: 'Precision amperage and voltage calibration to reduce energy consumption by up to 15%.',
        icon: 'bolt'
      },
      {
        title: 'Sensor Replacement',
        description: 'Installation of high-precision digital sensors for accurate autonomous flow management.',
        icon: 'settings_input_component'
      }
    ],
    roadmap: [
      {
        step: '01',
        title: 'Analysis',
        description: 'Comprehensive acoustic and thermal diagnostic scan of the entire pump housing.',
        icon: 'troubleshoot'
      },
      {
        step: '02',
        title: 'Tuning',
        description: 'Mechanical adjustment of impeller clearance and electronic sensor syncing.',
        icon: 'tune'
      },
      {
        step: '03',
        title: 'Verification',
        description: 'Post-service efficiency audit with a digital performance report delivered via app.',
        icon: 'verified'
      }
    ],
    reviews: [
      {
        author: 'Sample Reviewer E',
        initials: 'SR',
        timeAgo: 'Sample data',
        rating: 5,
        quote: 'Sample review text for layout testing. The level of transparency is unmatched. I knew exactly what I was paying for before they even touched the pump.',
        serviceTag: 'Pump System Overhaul',
        avatarBg: 'bg-secondary text-on-secondary',
        verified: false
      }
    ]
  },
  {
    id: 'appliance-tune-up',
    title: 'Appliance Tune-up',
    category: 'Electrical',
    basePrice: 65,
    vatRate: 0.05,
    estimatedMinutes: 60,
    shortDesc: 'Preventative maintenance for washing machines, dryers, and dishwashers.',
    longDesc: 'Comprehensive maintenance extending the life of your premium home appliances with genuine parts check and motor tuning.',
    heroImage: PROFIX_IMAGES.catalogAppliance,
    verified: false,
    warrantyIncluded: true,
    includedFeatures: [
      {
        title: 'Belt & Motor Check',
        description: 'Tension calibration and vibration damper inspection.',
        icon: 'build'
      },
      {
        title: 'Filter & Valve Descaling',
        description: 'Removal of mineral calcium deposits and lint obstructions.',
        icon: 'cleaning_services'
      },
      {
        title: 'Electronic Sensor Test',
        description: 'Calibration of temperature and water level telemetry.',
        icon: 'settings_input_component'
      }
    ],
    roadmap: [
      {
        step: 1,
        title: 'Mechanical Audit',
        description: 'Internal belt, motor, and bearing diagnostics.',
        icon: 'tune'
      },
      {
        step: 2,
        title: 'Cleaning & Descaling',
        description: 'Deep line descaling and lint trap sanitation.',
        icon: 'sanitizer'
      },
      {
        step: 3,
        title: 'Electronics Sync',
        description: 'Firmware check and cycle timing calibration.',
        icon: 'speed'
      }
    ],
    reviews: [
      {
        author: 'Sample Reviewer F',
        initials: 'SR',
        timeAgo: 'Sample data',
        rating: 5,
        quote: 'Sample review text for layout testing. Our front-loading washing machine was shaking violently. After this tune-up it runs completely silent like new.',
        serviceTag: 'Washer Maintenance',
        avatarBg: 'bg-secondary-fixed text-on-secondary-fixed',
        verified: false
      }
    ]
  },
  {
    id: 'deep-home-sanitization',
    title: 'Deep Home Sanitization',
    category: 'Sanitization',
    basePrice: 150,
    vatRate: 0.05,
    estimatedMinutes: 180,
    shortDesc: 'Hospital-grade surface disinfection and deep upholstery steam cleaning.',
    longDesc: 'Complete residential sterilization utilizing electrostatic antimicrobial mist and 180°C steam extraction for carpets and upholstery.',
    heroImage: PROFIX_IMAGES.catalogSanitization,
    verified: false,
    warrantyIncluded: true,
    includedFeatures: [
      {
        title: 'Electrostatic Fogging',
        description: 'Hospital-grade 360-degree surface coating destroying 99.9% of pathogens.',
        icon: 'sanitizer'
      },
      {
        title: 'High-Temp Steam Extraction',
        description: '180°C pressurized steam for deep mattress and sofa sanitization.',
        icon: 'cleaning_services'
      },
      {
        title: 'Air Quality Audit',
        description: 'Pre and post-service particulate PM2.5 and VOC measurement.',
        icon: 'air'
      }
    ],
    roadmap: [
      {
        step: 1,
        title: 'Air & Surface Testing',
        description: 'Baseline bacterial and particulate counts.',
        icon: 'biotech'
      },
      {
        step: 2,
        title: 'Steam Extraction',
        description: 'Thermal upholstery extraction and fabric rejuvenation.',
        icon: 'cleaning_services'
      },
      {
        step: 3,
        title: 'Electrostatic Mist',
        description: 'Long-lasting EPA registered micro-barrier coating.',
        icon: 'sanitizer'
      },
      {
        step: 4,
        title: 'Purity Certificate',
        description: 'Digital air quality pass with timestamped logs.',
        icon: 'verified'
      }
    ],
    reviews: [
      {
        author: 'Sample Reviewer G',
        initials: 'SR',
        timeAgo: 'Sample data',
        rating: 5,
        quote: 'Sample review text for layout testing. Noticeable difference in air crispness. Dust allergy symptoms stopped immediately after the steam extraction.',
        serviceTag: 'Deep Sanitization',
        avatarBg: 'bg-primary-fixed text-on-primary-fixed',
        verified: false
      }
    ]
  }
];

export const INITIAL_BOOKING: ServiceItem = SERVICES[0];

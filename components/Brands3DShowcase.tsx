import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { Language, TRANSLATIONS } from '../types';

interface Brands3DShowcaseProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onClose: () => void;
  onContactClick: () => void;
}

const BRANDS = [
  { name: 'LOVABELLA', image: '/LovabellaLuxuryBeautyStore.png' },
  { name: 'ASLAN Cosmetics', image: '/factory.png' },
  { name: 'Private Label', image: '/start-your-brand.png' },
  { name: 'Partnership', image: '/lovabella-partner.png' },
];

export default function Brands3DShowcase({
  language,
  onClose,
  onContactClick,
}: Brands3DShowcaseProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] bg-[#030303] overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className={`flex items-center justify-between mb-10 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className={isRtl ? 'text-right' : 'text-left'}>
            <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-2">BRAND UNIVERSE</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-light uppercase tracking-wide">
              {language === 'ar' ? 'علامات أصلان' : 'ASLAN Brands'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 border border-white/20 hover:border-amber-400 hover:text-amber-400 transition-colors"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10 perspective-[1200px]">
          {BRANDS.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, rotateY: isRtl ? -18 : 18, y: 30 }}
              animate={{ opacity: 1, rotateY: 0, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="relative min-h-[280px] overflow-hidden border border-white/10 group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className={`absolute bottom-0 inset-x-0 p-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-serif uppercase tracking-wide">{brand.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          type="button"
          onClick={onContactClick}
          className="border border-amber-400 text-amber-400 px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-amber-400 hover:text-black transition-colors"
        >
          {t.contactUs}
        </button>
      </div>
    </motion.div>
  );
}

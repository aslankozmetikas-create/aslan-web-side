import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { CompanyDetails, Language, TRANSLATIONS, getTranslation } from '../types';

interface CompanyModalProps {
  company: CompanyDetails | null;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onCtaClick: () => void;
}

export default function CompanyModal({
  company,
  isOpen,
  onClose,
  language,
  onCtaClick,
}: CompanyModalProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && company && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/90 overflow-y-auto"
        >
          <div className="min-h-screen">
            <div className="relative h-[48vh] min-h-[320px]">
              <img
                src={company.image}
                alt={getTranslation(company.title, language)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
              <button
                type="button"
                onClick={onClose}
                className="absolute top-6 right-6 z-10 p-2 border border-white/20 text-white hover:border-amber-400 hover:text-amber-400 transition-colors"
                aria-label={t.close}
              >
                <X className="w-5 h-5" />
              </button>
              <div className={`absolute bottom-0 inset-x-0 p-6 sm:p-10 max-w-7xl mx-auto ${isRtl ? 'text-right' : 'text-left'}`}>
                <p className="text-amber-400 text-xs tracking-[0.35em] uppercase mb-3">
                  {getTranslation(company.sector, language)}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light uppercase tracking-wide">
                  {getTranslation(company.title, language)}
                </h2>
                <p className="mt-3 text-neutral-300 max-w-3xl">
                  {getTranslation(company.tagline, language)}
                </p>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
              <div className={`grid lg:grid-cols-3 gap-10 ${isRtl ? 'text-right' : 'text-left'}`}>
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-neutral-300 leading-relaxed whitespace-pre-line">
                    {getTranslation(company.fullStory, language)}
                  </p>

                  <div>
                    <h3 className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-4">
                      {t.specificationsLabel}
                    </h3>
                    <div className="space-y-3">
                      {company.specifications.map((spec, i) => (
                        <div key={i} className="border border-white/10 p-4">
                          <p className="text-sm text-white mb-1">{getTranslation(spec.key, language)}</p>
                          <p className="text-xs text-neutral-400">{getTranslation(spec.value, language)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-4">
                      {t.statsLabel}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {company.stats.map((stat, i) => (
                        <div key={i} className="border border-white/10 p-4 bg-white/[0.02]">
                          <p className="text-2xl font-serif text-amber-400">{stat.value}</p>
                          <p className="text-[10px] tracking-wider uppercase text-neutral-400 mt-1">
                            {getTranslation(stat.label, language)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {company.gallery.map((src, i) => (
                      <img
                        key={`${src}-${i}`}
                        src={src}
                        alt=""
                        className="w-full h-40 object-cover border border-white/10"
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onCtaClick();
                    }}
                    className="w-full border border-amber-400 text-amber-400 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-amber-400 hover:text-black transition-colors"
                  >
                    {t.contactUs}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

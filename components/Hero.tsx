import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_SLIDES, Language, TRANSLATIONS, getTranslation } from '../types';

interface HeroProps {
  language: Language;
  onExploreClick: (sectionId: string) => void;
}

export default function Hero({ language, onExploreClick }: HeroProps) {
  const [index, setIndex] = useState(0);
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';
  const slide = HERO_SLIDES[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black pt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={getTranslation(slide.title, language)}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className={`relative z-10 max-w-7xl mx-auto px-6 min-h-[calc(100vh-5rem)] flex flex-col justify-end pb-20 ${isRtl ? 'items-end text-right' : 'items-start text-left'}`}>
        <motion.p
          key={`logo-${slide.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-amber-400 text-xs tracking-[0.45em] uppercase mb-4"
        >
          {slide.logoText}
        </motion.p>
        <motion.h1
          key={`title-${slide.id}`}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-wide uppercase text-white leading-tight"
        >
          {getTranslation(slide.title, language)}
        </motion.h1>
        <motion.p
          key={`sub-${slide.id}`}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mt-5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed"
        >
          {getTranslation(slide.subtitle, language)}
        </motion.p>
        <motion.button
          key={`cta-${slide.id}`}
          type="button"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          onClick={() => onExploreClick(slide.id === 'cosmetics-slide' ? 'cosmetics-factory' : 'companies-cosmetics')}
          className="mt-8 inline-flex items-center gap-3 border border-amber-400/50 text-amber-400 px-6 py-3 text-[11px] tracking-[0.3em] uppercase hover:bg-amber-400 hover:text-black transition-colors"
        >
          {getTranslation(slide.ctaText, language) || t.discoverNow}
        </motion.button>

        <div className={`flex gap-2 mt-10 ${isRtl ? 'flex-row-reverse' : ''}`}>
          {HERO_SLIDES.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1 transition-all duration-500 ${
                i === index ? 'w-10 bg-amber-400' : 'w-5 bg-white/25 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

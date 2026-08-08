import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import { HERO_SLIDES, Language, TRANSLATIONS, getTranslation } from '../types';

interface HeroProps {
  language: Language;
  onExploreClick: (id: string) => void;
}

export default function Hero({ language, onExploreClick }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  // Responsive device check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Automatically cycle slides with dynamic durations: corporate slide gets 6 seconds, video slide gets 18.67 seconds, others get 8 seconds
  useEffect(() => {
    let duration = 8000;
    if (HERO_SLIDES[current].id === 'corporate') {
      duration = 6000;
    } else if (HERO_SLIDES[current].id === 'cosmetics-slide') {
      duration = 18670;
    }
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [current]);

  const slide = HERO_SLIDES[current];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section id="hero" className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* 1. Dynamic Ken-Burns Animated Image Container */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={slide.id === 'corporate' ? {
              opacity: 0,
              scale: 1.05,
              x: 0,
              y: 0
            } : {
              opacity: 0,
              scale: 1.08
            }}
            animate={slide.id === 'corporate' ? {
              opacity: 0.7,
              scale: 1.13,
              x: -18,
              y: -8
            } : {
              opacity: 0.7,
              scale: 1.02
            }}
            exit={{
              opacity: 0,
              scale: 1.0,
              transition: { duration: slide.id === 'cosmetics-slide' ? 0.15 : 0.8, ease: 'easeIn' }
            }}
            transition={slide.id === 'corporate' ? {
              opacity: { duration: 1.5, ease: 'easeOut' },
              scale: { duration: 6, ease: 'linear' },
              x: { duration: 6, ease: 'linear' },
              y: { duration: 6, ease: 'linear' }
            } : {
              duration: 1.8,
              ease: [0.25, 1, 0.5, 1]
            }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="relative w-full h-full bg-black">
              {slide.image && !slide.video && (
                <img
                  src={slide.image.startsWith('/') ? slide.image : `/${slide.image}`}
                  alt={getTranslation(slide.title, language)}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.onerror = null;
                    img.src = '/meeting-room.png';
                  }}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                />
              )}
              {slide.video && (
                <video
                  src={slide.video}
                  preload="auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  disableRemotePlayback
                  controls={false}
                  className="relative z-10 w-full h-full object-cover pointer-events-none select-none"
                />
              )}
            </div>
            {/* Elegant multi-layer overlay to ensure contrast and premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Premium Grid Guiding Lines (Rolls-Royce architectural overlay) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full w-full relative">
          <div className="absolute inset-y-0 left-0 w-[1px] bg-white/20" />
          <div className="absolute inset-y-0 right-0 w-[1px] bg-white/20" />
          <div className="absolute inset-y-0 left-1/3 w-[1px] bg-white/10" />
          <div className="absolute inset-y-0 right-1/3 w-[1px] bg-white/10" />
        </div>
      </div>

      {/* 3. Centered Content (Display Title, Subtitle, & Animated Button) */}
      <AnimatePresence mode="wait">
        {slide.id === 'corporate' && (
          <motion.div
            key="center-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center"
          >
            {/* Dynamic Display Title with elegant letter-spacing */}
            <motion.h1
              key={`title-${current}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-serif font-extralight text-white tracking-[0.15em] sm:tracking-[0.2em] uppercase leading-tight filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] break-words max-w-[800px] w-full mx-auto px-2 text-center"
            >
              {getTranslation(slide.title, language)}
            </motion.h1>

            {/* Elegant Subtitle */}
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.85, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg text-neutral-300 font-light mt-6 max-w-2xl mx-auto leading-relaxed tracking-wider text-center"
            >
              {getTranslation(slide.subtitle, language)}
            </motion.p>

            {/* Discovery Action Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex justify-center w-full"
            >
              <button
                id={`hero-cta-btn-${slide.id}`}
                onClick={() => onExploreClick(slide.id === 'corporate' ? 'companies-cosmetics' : `companies-${slide.id === 'cosmetics-slide' ? 'cosmetics' : 'advanced-industries'}`)}
                className="px-10 py-4 bg-white text-black font-semibold tracking-widest text-xs uppercase hover:bg-amber-400 hover:text-black transition-all duration-500 rounded-[10px] shadow-xl cursor-pointer hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] filter"
              >
                {getTranslation(slide.ctaText, language)}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Left/Right Navigation Arrows */}
      <button
        id="prev-slide-arrow"
        onClick={handlePrev}
        className={`absolute top-1/2 -translate-y-1/2 z-30 p-3 text-white/55 hover:text-white bg-black/20 hover:bg-black/50 transition-all duration-300 backdrop-blur-sm border border-white/5 cursor-pointer ${
          isRtl ? 'left-6' : 'left-6'
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        id="next-slide-arrow"
        onClick={handleNext}
        className={`absolute top-1/2 -translate-y-1/2 z-30 p-3 text-white/55 hover:text-white bg-black/20 hover:bg-black/50 transition-all duration-300 backdrop-blur-sm border border-white/5 cursor-pointer ${
          isRtl ? 'right-6' : 'right-6'
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* 5. Scroll Down Indicator - Perfectly Centered Horizontally */}
      {slide.id === 'corporate' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-neutral-400 text-[10px] sm:text-xs tracking-widest uppercase pointer-events-auto [direction:ltr]">
          <span>{isRtl ? 'اسحب للأسفل' : 'SCROLL DOWN'}</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-amber-400" />
          </motion.div>
        </div>
      )}

      {/* 6. Bottom Status Panel: Active Slide Indicator & Slide Dots */}
      <div className="absolute bottom-8 left-6 right-6 z-20 max-w-7xl mx-auto flex items-center justify-between px-4 pointer-events-none">
        
        {/* Active Index Pill */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <span className="text-xs text-amber-400 font-sans font-bold tracking-widest">
            {String(current + 1).padStart(2, '0')}
          </span>
          <div className="w-16 h-[1.5px] bg-white/20 relative overflow-hidden">
            <motion.div
              key={`progress-${current}`}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: HERO_SLIDES[current].id === 'corporate' ? 6 : HERO_SLIDES[current].id === 'cosmetics-slide' ? 18.67 : 8, ease: 'linear' }}
              className="absolute top-0 left-0 h-full bg-amber-400"
            />
          </div>
          <span className="text-xs text-neutral-400 font-sans">
            {String(HERO_SLIDES.length).padStart(2, '0')}
          </span>
        </div>

        {/* Dynamic slide names indicators clickable */}
        <div className="hidden lg:flex items-center gap-6 pointer-events-auto">
          {HERO_SLIDES.map((s, idx) => (
            <button
              id={`slide-dot-btn-${s.id}`}
              key={s.id}
              onClick={() => setCurrent(idx)}
              className="group flex flex-col items-start focus:outline-none cursor-pointer py-2"
            >
              <div className={`h-[3px] transition-all duration-300 ${
                current === idx ? 'w-16 bg-amber-400' : 'w-6 bg-white/20 group-hover:w-12 group-hover:bg-white/40'
              }`} />
            </button>
          ))}
        </div>

      </div>

    </section>
  );
}

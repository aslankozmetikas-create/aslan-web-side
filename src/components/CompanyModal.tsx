import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, ArrowRight, CheckCircle, Activity, Thermometer, Clock, HelpCircle, Package, Heart } from 'lucide-react';
import { CompanyDetails, Language, TRANSLATIONS, getTranslation } from '../types';
import CosmeticLabExperience from './CosmeticLabExperience';

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
  onCtaClick
}: CompanyModalProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  // State for simulated live factory telemetry
  const [telemetry, setTelemetry] = useState({
    speed: 238, // units per min (matching factory telemetry)
    temp: 37.0, // celsius matching 37°C from main dashboard
    producedToday: 13000, // units matching 13.000 UNITS from main dashboard
    isNormal: true,
  });

  // Simulate real-time updates for telemetry
  useEffect(() => {
    if (!isOpen || !company) return;

    // Synchronize telemetry with main dashboard specifications (13.000 UNITS daily yield, 37.0°C sterile temp, 238 U/Min speed)
    let seedCount = 13000;
    let initialSpeed = 238;
    let initialTemp = 37.0;

    setTelemetry({
      producedToday: seedCount,
      speed: initialSpeed,
      temp: initialTemp,
      isNormal: true,
    });

    const interval = setInterval(() => {
      setTelemetry((prev) => {
        const delta = Math.floor(Math.random() * 2) + 1; // produce 1-2 units
        const speedNoise = Math.floor(Math.random() * 3) - 1; // subtle noise
        const tempNoise = Number((Math.random() * 0.2 - 0.1).toFixed(1));

        return {
          producedToday: prev.producedToday + delta,
          speed: Math.max(235, Math.min(242, prev.speed + speedNoise)),
          temp: Number(Math.max(36.8, Math.min(37.2, prev.temp + tempNoise)).toFixed(1)),
          isNormal: true,
        };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isOpen, company]);

  // Disable body scroll when modal is open to prevent double scrollbars and reset scroll position to top
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const container = document.getElementById('company-modal-container');
      if (container) {
        container.scrollTop = 0;
      }
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!company) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="company-modal-container" className="fixed inset-0 z-[99999] overflow-y-auto bg-black">
          
          {/* Backdrop and frame container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full min-h-screen bg-[#070707] text-white relative pb-32"
          >
            {/* Top Fixed floating Header with Back & Close Buttons */}
            <div className="sticky top-0 w-full z-40 bg-[#070707]/95 backdrop-blur-md border-b border-amber-500/20 py-3.5 px-4 sm:px-8 md:px-12 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="group flex items-center gap-2 text-white hover:text-amber-400 transition-colors duration-300 cursor-pointer text-xs font-sans font-bold tracking-[0.2em] uppercase py-1"
                  title={isRtl ? 'الرجوع للصفحة الرئيسية' : 'Back to Home'}
                >
                  {isRtl ? <ArrowRight className="w-4 h-4 text-white group-hover:text-amber-400 transition-colors" /> : <ArrowLeft className="w-4 h-4 text-white group-hover:text-amber-400 transition-colors" />}
                  <span>
                    {isRtl ? 'الرجوع للرئيسية' : language === 'tr' ? 'ANA SAYFAYA DÖN' : language === 'it' ? 'TORNA ALLA HOME' : 'BACK TO HOME'}
                  </span>
                </button>

                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-[10px] bg-amber-400 text-black px-2 py-0.5 font-bold tracking-widest font-sans rounded-none uppercase">
                    {getTranslation(company.sector, language)}
                  </span>
                  <span className="text-xs text-neutral-400 hidden md:inline">| {getTranslation(company.name, language)}</span>
                </div>
              </div>
              
              <button
                id="close-modal-btn"
                onClick={onClose}
                className="group flex items-center gap-2 border border-white/10 hover:border-amber-400 px-3.5 py-1.5 text-neutral-300 hover:text-amber-400 transition-all duration-300 cursor-pointer rounded-full"
              >
                <X className="w-4 h-4" />
                <span className="text-[10px] tracking-widest font-sans font-bold uppercase">{t.close}</span>
              </button>
            </div>

            {/* Immersive Hero Banner of Company/Factory */}
            <div className="relative w-full h-[50vh] md:h-[65vh] bg-black overflow-hidden">
              <img
                src={company.image.startsWith('/') ? company.image : `/${company.image}`}
                alt={getTranslation(company.name, language)}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.onerror = null;
                  img.src = '/meeting-room.png';
                }}
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-black/30" />
              
              {/* Floating Back Button inside Hero - moved down clear of header bar */}
              <div className={`absolute top-14 sm:top-16 md:top-20 ${isRtl ? 'right-6 sm:right-12' : 'left-6 sm:left-12'} z-30`}>
                <button
                  onClick={onClose}
                  className="group inline-flex items-center gap-2.5 text-white hover:text-amber-400 text-xs font-sans font-bold tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer drop-shadow-lg py-2 px-1"
                >
                  {isRtl ? <ArrowRight className="w-4 h-4 text-white group-hover:text-amber-400 transition-colors" /> : <ArrowLeft className="w-4 h-4 text-white group-hover:text-amber-400 transition-colors" />}
                  <span>{isRtl ? 'الرجوع للرئيسية' : language === 'tr' ? 'ANA SAYFAYA DÖN' : language === 'it' ? 'TORNA ALLA HOME' : 'BACK TO HOME'}</span>
                </button>
              </div>
              
              {/* Overlay text titles */}
              <div className="absolute bottom-12 inset-x-0 z-20">
                <div className={`max-w-7xl mx-auto px-6 ${
                  isRtl ? 'text-right' : 'text-left'
                }`}>
                  <div className="max-w-4xl">
                    <motion.span
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-amber-400 text-xs font-sans tracking-[0.4em] font-bold uppercase block mb-3"
                    >
                      {getTranslation(company.name, language)}
                    </motion.span>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-wide uppercase leading-tight"
                    >
                      {getTranslation(company.title, language)}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 0.85, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="text-sm sm:text-base md:text-lg text-neutral-300 font-light mt-4 max-w-2xl"
                    >
                      {getTranslation(company.tagline, language)}
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>

            {/* Body Grid Content */}
            <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* LEFT COLUMN: Story, Telemetry, and Images (8 cols on lg) */}
              <div className="lg:col-span-8 flex flex-col gap-12">
                
                {/* 1. Brand Story */}
                <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-serif text-amber-400 border-b border-white/10 pb-4 mb-5 uppercase tracking-wider">
                    {isRtl ? 'فلسفة التصنيع والتميز' : 'MANUFACTURING PHILOSOPHY & STORY'}
                  </h3>
                  <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light whitespace-pre-line">
                    {getTranslation(company.fullStory, language)}
                  </p>
                </div>

                {/* 2. LIVE INTERACTIVE FACTORY TELEMETRY HUD */}
                <div>
                  {company.id === 'cosmetics' ? (
                    <CosmeticLabExperience language={language} />
                  ) : (
                    <div className="border border-white/10 bg-[#0c0c0c] p-6 sm:p-8 rounded-none relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-1.5 h-full bg-emerald-500" />
                      
                      {/* Telemetry Header */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5 pb-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                          </div>
                          <span className="text-xs font-sans tracking-widest font-bold text-emerald-400 uppercase">
                            {t.telemetryActive}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-[10px] text-neutral-500 bg-neutral-900 border border-white/5 px-3 py-1 font-sans">
                          <Clock className="w-3 h-3 text-neutral-400" />
                          <span className="uppercase">{new Date().toLocaleTimeString()}</span>
                        </div>
                      </div>

                      {/* Telemetry Stats Rows */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        
                        {/* Status indicator */}
                        <div className="flex flex-col">
                          <span className="text-[10px] text-neutral-500 tracking-wider uppercase font-sans mb-1.5">
                            {t.liveStatus}
                          </span>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm font-semibold text-neutral-200">
                              {t.operational}
                            </span>
                          </div>
                        </div>

                        {/* Production Speed */}
                        <div className="flex flex-col">
                          <span className="text-[10px] text-neutral-500 tracking-wider uppercase font-sans mb-1.5">
                            {t.currentSpeed}
                          </span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-serif text-white font-semibold">
                              {telemetry.speed}
                            </span>
                            <span className="text-[10px] text-neutral-400 font-sans">
                              {isRtl ? 'وحدة/د' : 'U/Min'}
                            </span>
                          </div>
                        </div>

                        {/* Temperature */}
                        <div className="flex flex-col">
                          <span className="text-[10px] text-neutral-500 tracking-wider uppercase font-sans mb-1.5">
                            {t.tempC}
                          </span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-serif text-white font-semibold">
                              {telemetry.temp}
                            </span>
                            <span className="text-[10px] text-neutral-400 font-sans">°C</span>
                          </div>
                        </div>

                        {/* Total units completed live */}
                        <div className="flex flex-col">
                          <span className="text-[10px] text-neutral-500 tracking-wider uppercase font-sans mb-1.5">
                            {t.unitsToday}
                          </span>
                          <motion.span
                            key={telemetry.producedToday}
                            initial={{ scale: 1.15, color: '#fbbf24' }}
                            animate={{ scale: 1, color: '#ffffff' }}
                            className="text-xl font-mono font-bold tracking-tight text-white"
                          >
                            {telemetry.producedToday.toLocaleString('de-DE')}
                          </motion.span>
                        </div>

                      </div>

                    </div>
                  )}
                </div>

              </div>

              {/* RIGHT COLUMN: Specifications and Stats Summary (4 cols on lg) */}
              <div className="lg:col-span-4 flex flex-col gap-8">
                
                {/* Technical Specifications Block */}
                <div className="border border-white/10 bg-[#0a0a0a] p-8">
                  <h4 className="text-xs font-sans tracking-widest font-bold text-amber-400 uppercase mb-6 border-b border-white/5 pb-3">
                    {t.specificationsLabel}
                  </h4>
                  <div className="flex flex-col gap-6">
                    {company.specifications.map((spec, i) => (
                      <div key={i} className="flex flex-col gap-1.5 border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                        <span className="text-[10px] text-neutral-500 font-sans tracking-wider uppercase font-semibold">
                          {getTranslation(spec.key, language)}
                        </span>
                        <span className="text-xs text-neutral-200 leading-relaxed font-light">
                          {getTranslation(spec.value, language)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Global CTA / Private Label Action */}
                <button
                  id={`modal-cta-btn-${company.id}`}
                  onClick={() => {
                    onCtaClick();
                    onClose();
                  }}
                  className="w-full py-4 bg-amber-400 hover:bg-white text-black font-semibold tracking-widest text-xs uppercase transition-all duration-500 rounded-none shadow-lg cursor-pointer"
                >
                  {isRtl ? 'طلب عينات ودراسة جدوى' : 'REQUEST SAMPLE & DISCUSS PARTNERSHIP'}
                </button>

              </div>

            </div>

            {/* Bottom padding */}
            <div className="h-12 w-full" />

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

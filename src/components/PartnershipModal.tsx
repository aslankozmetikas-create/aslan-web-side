import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Globe, Store, Handshake, ArrowRight, ArrowLeft, CheckCircle2, Building2, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { Language, getTranslation } from '../types';
import earthImage from '../assets/images/earth.png';
import lovabellaStoreImage from '../assets/images/lovabella-luxury-beauty-store.png';
import lovabellaPartnerImage from '../assets/images/lovabella-partner.png';

interface PartnershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onOpenLovabellaStore: () => void;
  onApplyDistributor: () => void;
  onApplyStrategic: () => void;
}

export default function PartnershipModal({
  isOpen,
  onClose,
  language,
  onOpenLovabellaStore,
  onApplyDistributor,
  onApplyStrategic
}: PartnershipModalProps) {
  if (!isOpen) return null;

  const isRtl = language === 'ar';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 select-none">
        
        {/* Ambient Gold Glow Backdrops */}
        <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none" />
        <div className="fixed bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl bg-[#080808] border border-amber-400/30 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 my-auto shadow-[0_0_80px_rgba(212,175,55,0.15)] overflow-hidden"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {/* Header Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 z-50 w-11 h-11 rounded-full bg-black/80 border border-white/10 hover:border-amber-400 text-neutral-400 hover:text-amber-400 flex items-center justify-center transition-all duration-300 cursor-pointer group"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Top Badge & Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 text-[11px] font-sans tracking-[0.3em] uppercase font-bold mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>PARTNER WITH ASLAN</span>
            </motion.div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-white uppercase tracking-wider leading-tight mb-4">
              {isRtl ? 'اختر نموذج الشراكة المناسب لك' : 'CHOOSE THE PARTNERSHIP MODEL THAT BEST FITS YOUR BUSINESS'}
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
              {isRtl
                ? 'فرص متعددة للتوسع والنمو مع ASLAN في الأسواق العالمية عبر برامج التوزيع الحصري، المتاجر المعتمدة، والشراكات الاستراتيجية.'
                : 'Choose the partnership model that best fits your business goals and expand globally with ASLAN.'}
            </p>
            <div className="w-16 h-[1.5px] bg-amber-400 mx-auto mt-6" />
          </div>

          {/* 3 Partnership Option Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6">
            
            {/* OPTION 1: Exclusive Distributor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group relative bg-[#0d0d0d] border border-white/10 hover:border-amber-400/50 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] overflow-hidden"
            >
              {/* Graphic Header Box */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 bg-black flex items-center justify-center border border-amber-400/20 group-hover:border-amber-400/50 transition-colors">
                <img
                  src={earthImage}
                  alt="Exclusive Distributor Global Network"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src.includes('earth.png')) {
                      img.src = '/earth.jpg';
                    } else {
                      img.onerror = null;
                      img.src = '/ai-software.png';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/30 to-transparent pointer-events-none" />
              </div>

              {/* Title & Body */}
              <div className={`flex-1 flex flex-col justify-between ${isRtl ? 'text-right' : 'text-left'}`}>
                <div className={isRtl ? 'text-right' : 'text-left'}>
                  <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-amber-400 uppercase block mb-2">
                    OPTION 01
                  </span>
                  <h3 className="text-xl font-serif font-light text-white uppercase tracking-wide mb-3 group-hover:text-amber-400 transition-colors">
                    {isRtl ? 'الوكيل الحصري' : 'Exclusive Distributor'}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                    {isRtl
                      ? 'كن الوكيل الرسمي والحصري لعلامات ASLAN في بلدك أو منطقتك وطوّر السوق المحلي بدعم كامل من فريقنا الاحترافي.'
                      : 'Become the official distributor of ASLAN brands in your country and develop your local market with full support.'}
                  </p>
                </div>

                <button
                  onClick={onApplyDistributor}
                  className="w-full py-3.5 px-4 rounded-xl border border-amber-400/30 hover:border-amber-400 bg-amber-400/5 hover:bg-amber-400 text-amber-400 hover:text-black font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>{isRtl ? 'تقدم بطلب الآن' : 'Apply as Distributor'}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>

            {/* OPTION 2 (MOST IMPORTANT): Open a LOVABELLA Beauty Store */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group relative bg-[#120f0a] border-2 border-amber-400 hover:border-amber-300 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 shadow-[0_0_40px_rgba(212,175,55,0.2)] overflow-hidden scale-[1.02]"
            >
              {/* Featured Badge */}
              <div className="absolute top-4 right-4 z-20 bg-amber-400 text-black px-3 py-1 rounded-full text-[9px] font-sans font-extrabold tracking-widest uppercase shadow-md">
                {isRtl ? 'الفرصة الأبرز' : 'FEATURED PROGRAM'}
              </div>

              {/* Graphic Header Box */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 bg-black flex items-center justify-center border border-amber-400/20">
                <img
                  src={lovabellaStoreImage}
                  alt="LOVABELLA Beauty Store"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src.includes('lovabella-luxury-beauty-store.png')) {
                      img.src = '/lovabella-luxury-beauty-store.jpg';
                    } else {
                      img.onerror = null;
                      img.src = '/ai-software.png';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120f0a] via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-amber-400 text-black flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                    <Store className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>

              {/* Title & Body */}
              <div className={`flex-1 flex flex-col justify-between ${isRtl ? 'text-right' : 'text-left'}`}>
                <div className={isRtl ? 'text-right' : 'text-left'}>
                  <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-amber-400 uppercase block mb-2">
                    OPTION 02 • LOVABELLA RETAIL
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-light text-amber-300 uppercase tracking-wide mb-3">
                    {isRtl ? 'افتح متجر LOVABELLA' : 'Open a LOVABELLA Beauty Store'}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed mb-6">
                    {isRtl
                      ? 'افتح متجرك الخاص تحت علامة LOVABELLA الفاخرة، بينما توفر لك ASLAN المنتجات، التصميم، الهوية البصرية، التدريب، والدعم التسويقي الكامل.'
                      : 'Open your own luxury store under the LOVABELLA brand while ASLAN provides products, interior design, visual identity, training, and full marketing support.'}
                  </p>
                </div>

                <button
                  onClick={onOpenLovabellaStore}
                  className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-sans font-black text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:scale-[1.02]"
                >
                  <span>{isRtl ? 'استكشف برنامج المتجر' : 'Explore Store Program'}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>

            {/* OPTION 3: Strategic Partnership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="group relative bg-[#0d0d0d] border border-white/10 hover:border-amber-400/50 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] overflow-hidden"
            >
              {/* Graphic Header Box */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 bg-black flex items-center justify-center border border-white/5">
                <img
                  src={lovabellaPartnerImage}
                  alt="Strategic Partnership"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src.includes('lovabella-partner.png')) {
                      img.src = '/lovabella-partner.jpg';
                    } else if (img.src.includes('lovabella-partner.jpg')) {
                      img.src = '/lovabellapertner.jpg';
                    } else {
                      img.onerror = null;
                      img.src = '/ai-software.png';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-black/80 border border-amber-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    <Handshake className="w-8 h-8 text-amber-400" />
                  </div>
                </div>
              </div>

              {/* Title & Body */}
              <div className={`flex-1 flex flex-col justify-between ${isRtl ? 'text-right' : 'text-left'}`}>
                <div className={isRtl ? 'text-right' : 'text-left'}>
                  <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-amber-400 uppercase block mb-2">
                    OPTION 03
                  </span>
                  <h3 className="text-xl font-serif font-light text-white uppercase tracking-wide mb-3 group-hover:text-amber-400 transition-colors">
                    {isRtl ? 'شراكة استراتيجية' : 'Strategic Partnership'}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                    {isRtl
                      ? 'تعاون مع ASLAN لتطوير أسواق جديدة، وإطلاق مشاريع ومفاهيم تجارية مبتكرة، وبناء فرص أعمال طويلة الأمد معاً.'
                      : 'Cooperate with ASLAN to develop new markets, launch retail concepts, and build long-term business partnerships together.'}
                  </p>
                </div>

                <button
                  onClick={onApplyStrategic}
                  className="w-full py-3.5 px-4 rounded-xl border border-amber-400/30 hover:border-amber-400 bg-amber-400/5 hover:bg-amber-400 text-amber-400 hover:text-black font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>{isRtl ? 'كن شريكاً معنا' : 'Become a Partner'}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>

          </div>

          {/* Bottom Parent Company Note */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-[11px] text-neutral-500 font-sans tracking-wider uppercase">
              ASLAN INTERNATIONAL HOLDING • POWERING GLOBAL RETAIL & INDUSTRIAL EXCELLENCE
            </p>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

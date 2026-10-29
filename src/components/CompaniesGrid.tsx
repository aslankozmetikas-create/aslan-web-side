import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Globe, Store, Handshake } from 'lucide-react';
import { COMPANIES_DATA, CompanyDetails, Language, TRANSLATIONS, getTranslation } from '../types';

interface CompaniesGridProps {
  language: Language;
  onCompanySelect: (company: CompanyDetails) => void;
}

export default function CompaniesGrid({ language, onCompanySelect }: CompaniesGridProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  return (
    <section id="companies-grid" className="relative w-full bg-[#030303] py-24 sm:py-32 overflow-hidden">
      
      {/* Background visual detail (fine horizontal lines) */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading matching Slide 8 ("EXPLORE FURTHER") */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-amber-400 text-xs font-sans tracking-[0.4em] uppercase font-bold block mb-3"
          >
            {t.exploreFurther}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white uppercase tracking-widest leading-tight"
          >
            {t.continueJourney}
          </motion.h2>
          <div className="w-16 h-[1.5px] bg-amber-400 mx-auto mt-6" />
        </div>

        {/* 3-Column Luxury Card Grid matching Slide 9 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPANIES_DATA.map((company, idx) => {
            const isPartnershipCard = company.id === 'global-partnership';

            return (
              <motion.div
                id={`company-card-${company.id}`}
                key={company.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                onClick={() => onCompanySelect(company)}
                className={`group relative flex flex-col justify-between transition-all duration-500 h-[600px] overflow-hidden rounded-[40px] cursor-pointer ${
                  isPartnershipCard 
                    ? 'bg-gradient-to-b from-[#0e0c08] to-[#050505] border-2 border-amber-400/40 hover:border-amber-400 shadow-[0_0_40px_rgba(212,175,55,0.1)] hover:shadow-[0_0_60px_rgba(212,175,55,0.25)]' 
                    : 'bg-[#0a0a0a] border border-white/5 hover:border-amber-400/50'
                }`}
              >
                
                {/* Image Container with Ken Burns effect on card hover */}
                <div className="relative w-full h-[50%] overflow-hidden bg-black">
                  <img
                    src={company.image.startsWith('/') ? company.image : `/${company.image}`}
                    alt={getTranslation(company.name, language)}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.onerror = null;
                      img.src = '/meeting-room.png';
                    }}
                    className="w-full h-full object-cover opacity-65 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-85"
                  />
                  
                  {/* Indicator Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 flex items-center gap-1.5 border border-amber-400/30 rounded-full">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400"></span>
                    </span>
                    <span className="text-[9px] font-sans text-amber-300 font-extrabold tracking-widest uppercase">
                      {isPartnershipCard 
                        ? (isRtl ? 'فرص الشراكة' : 'GLOBAL PARTNERSHIP') 
                        : (isRtl ? 'مصنع متصل' : 'LIVE PLANT')}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />
                </div>

                {/* Card Content details */}
                <div className={`p-8 flex flex-col justify-between h-[50%] ${
                  isRtl ? 'text-right' : 'text-left'
                }`}>
                  <div>
                    <span className="text-[10px] font-sans tracking-widest text-amber-400 uppercase font-bold mb-2 block">
                      {getTranslation(company.sector, language)}
                    </span>
                    <h3 className="text-xl font-serif font-light text-white uppercase group-hover:text-amber-400 transition-colors duration-300 leading-snug">
                      {getTranslation(company.name, language)}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light mt-3 leading-relaxed line-clamp-2">
                      {getTranslation(company.description, language)}
                    </p>

                    {/* Mini Pillars Row for Partnership Card matching attached reference images (clean layout with thin vertical dividers) */}
                    {isPartnershipCard && (
                      <div
                        className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-center"
                        dir={isRtl ? 'rtl' : 'ltr'}
                      >
                        {/* 1. Exclusive Distributor */}
                        <div className="flex-1 flex flex-col items-center justify-center px-1 h-[60px]">
                          <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 mb-2" />
                          <span className="text-[9px] sm:text-[10px] font-sans font-extrabold text-neutral-200 uppercase tracking-widest leading-tight">
                            {isRtl ? 'توزيع' : 'EXCLUSIVE'}
                          </span>
                          <span className="text-[8px] sm:text-[9px] font-sans font-medium text-neutral-400 uppercase tracking-widest mt-0.5">
                            {isRtl ? 'حصري' : 'DISTRIBUTOR'}
                          </span>
                        </div>

                        {/* Vertical Line 1 */}
                        <div className="w-[1px] h-10 bg-amber-400/25 shrink-0" />

                        {/* 2. LOVABELLA Store */}
                        <div className="flex-1 flex flex-col items-center justify-center px-1 h-[60px]">
                          <Store className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 mb-2" />
                          <span className="text-[9px] sm:text-[10px] font-sans font-black text-amber-300 uppercase tracking-widest leading-tight">
                            LOVABELLA
                          </span>
                          <span className="text-[8px] sm:text-[9px] font-sans font-semibold text-amber-400/90 uppercase tracking-widest mt-0.5">
                            {isRtl ? 'متجر تجميل' : 'BEAUTY STORE'}
                          </span>
                        </div>

                        {/* Vertical Line 2 */}
                        <div className="w-[1px] h-10 bg-amber-400/25 shrink-0" />

                        {/* 3. Strategic Partnership */}
                        <div className="flex-1 flex flex-col items-center justify-center px-1 h-[60px]">
                          <Handshake className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 mb-2" />
                          <span className="text-[9px] sm:text-[10px] font-sans font-extrabold text-neutral-200 uppercase tracking-widest leading-tight">
                            {isRtl ? 'شراكة' : 'STRATEGIC'}
                          </span>
                          <span className="text-[8px] sm:text-[9px] font-sans font-medium text-neutral-400 uppercase tracking-widest mt-0.5">
                            {isRtl ? 'استراتيجية' : 'PARTNERSHIP'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Clean, luxury link action button with arrow animation */}
                  <div className="pt-4 border-t border-white/5">
                    <button
                      id={`explore-btn-${company.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onCompanySelect(company);
                      }}
                      className={`flex items-center gap-3 text-xs tracking-widest font-bold transition-colors duration-300 uppercase cursor-pointer ${
                        isPartnershipCard ? 'text-amber-400 group-hover:text-amber-300' : 'text-neutral-300 group-hover:text-amber-400'
                      } ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                      <span>
                        {isPartnershipCard
                          ? (isRtl ? 'EXPLORE PARTNERSHIPS ←' : 'EXPLORE PARTNERSHIPS →')
                          : t.exploreBtn}
                      </span>
                      {!isPartnershipCard && (
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                          {isRtl ? (
                            <ArrowLeft className="w-4 h-4 text-amber-400" />
                          ) : (
                            <ArrowRight className="w-4 h-4 text-amber-400" />
                          )}
                        </span>
                      )}
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


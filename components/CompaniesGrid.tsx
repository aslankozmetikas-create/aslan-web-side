import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { COMPANIES_DATA, CompanyDetails, Language, TRANSLATIONS, getTranslation } from '../types';

interface CompaniesGridProps {
  language: Language;
  onCompanySelect: (company: CompanyDetails) => void;
}

export default function CompaniesGrid({ language, onCompanySelect }: CompaniesGridProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  return (
    <section id="companies" className="relative py-24 sm:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-14 ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-bold block mb-3">
            ASLAN GROUP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light uppercase tracking-wider">
            {language === 'ar' ? 'شركات ومصانع المجموعة' : 'Group Companies & Factories'}
          </h2>
          <div className="w-16 h-[1.5px] bg-amber-400 mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {COMPANIES_DATA.map((company, index) => (
            <motion.button
              key={company.id}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onCompanySelect(company)}
              className={`group relative overflow-hidden text-left min-h-[420px] border border-white/10 hover:border-amber-400/40 transition-colors ${
                isRtl ? 'text-right' : 'text-left'
              }`}
            >
              <img
                src={company.image}
                alt={getTranslation(company.name, language)}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-7">
                <div className={`flex items-start justify-between gap-3 mb-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-amber-400">
                    {getTranslation(company.sector, language)}
                  </p>
                  <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white uppercase tracking-wide mb-2">
                  {getTranslation(company.name, language)}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-light line-clamp-3 mb-4">
                  {getTranslation(company.description, language)}
                </p>
                <span className="text-[10px] tracking-[0.25em] uppercase text-amber-400/80 group-hover:text-amber-400">
                  {t.exploreBtn} →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

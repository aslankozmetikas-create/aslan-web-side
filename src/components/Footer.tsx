import React from 'react';
import { Youtube, Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { Language, TRANSLATIONS } from '../types';
import Logo from './Logo';

interface FooterProps {
  language: Language;
  onNavigateToSection: (sectionId: string) => void;
  onLogoClick?: () => void;
}

export default function Footer({ language, onNavigateToSection, onLogoClick }: FooterProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#050505] text-white border-t border-white/5 pt-20 pb-12 overflow-hidden">
      
      {/* Scroll to Top button on the upper border */}
      <button
        id="scroll-to-top-btn"
        onClick={handleScrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] border border-white/10 hover:border-amber-400 p-3 hover:text-amber-400 transition-all duration-300 z-10 cursor-pointer"
        style={{ marginTop: '30px', marginBottom: '0px' }}
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid: Left Column group, Center Monogram, Right Column group */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-16 border-b border-white/5">
          
          {/* Group 1 Links (4 columns on md) */}
          <div className={`md:col-span-4 grid grid-cols-2 gap-8 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-neutral-500 font-sans tracking-widest font-bold uppercase">
                {isRtl ? 'المجموعة الشريكة' : 'CORPORATE'}
              </span>
              <button onClick={() => onNavigateToSection('hero')} className="text-xs text-neutral-400 hover:text-amber-400 text-left transition-colors cursor-pointer" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                {isRtl ? 'من نحن' : 'Who We Are'}
              </button>
              <button onClick={() => onNavigateToSection('metrics')} className="text-xs text-neutral-400 hover:text-amber-400 text-left transition-colors cursor-pointer" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                {t.preOwned}
              </button>
              <button onClick={() => onNavigateToSection('companies-grid')} className="text-xs text-neutral-400 hover:text-amber-400 text-left transition-colors cursor-pointer" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                {t.sustainability}
              </button>
              <a href="#" className="text-xs text-neutral-400 hover:text-amber-400 transition-colors">
                {t.careers}
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-neutral-500 font-sans tracking-widest font-bold uppercase">
                {isRtl ? 'العلاقات والإعلام' : 'MEDIA & INFO'}
              </span>
              <a href="#" className="text-xs text-neutral-400 hover:text-amber-400 transition-colors">
                {t.pressclub}
              </a>
              <a href="#" className="text-xs text-neutral-400 hover:text-amber-400 transition-colors">
                {t.whispers}
              </a>
              <a href="#" className="text-xs text-neutral-400 hover:text-amber-400 transition-colors">
                {t.faqs}
              </a>
              <a href="#" className="text-xs text-neutral-400 hover:text-amber-400 transition-colors">
                {t.siteMap}
              </a>
            </div>
          </div>

          {/* Center Monogram Logo (4 columns on md) */}
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center self-center py-6 md:py-0 border-y md:border-y-0 md:border-x border-white/5">
            <Logo 
              className="w-[162px] h-auto text-neutral-400 group-hover:text-amber-400" 
              showSubtitle={false} 
              onClick={onLogoClick || handleScrollToTop}
            />
            <span className="text-[8px] sm:text-[9px] text-neutral-400 tracking-[0.08em] uppercase font-sans mt-3 font-light block leading-relaxed max-w-[260px] px-2">
              ASLAN INTERNATIONAL DIS TICARET GIDA KOZMETIK ANONIM SIRKETI
            </span>
            <span className="text-[9px] text-neutral-500 tracking-[0.2em] uppercase font-sans mt-2 font-light block">
              {isRtl ? 'الريادة والتميز الصناعي' : 'Pioneering Industrial Mastery'}
            </span>
          </div>

          {/* Group 2 Links (4 columns on md) */}
          <div className={`md:col-span-4 grid grid-cols-2 gap-8 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-neutral-500 font-sans tracking-widest font-bold uppercase">
                {isRtl ? 'النزاهة القانونية' : 'LEGAL & TRUST'}
              </span>
              <a href="#" className="text-xs text-neutral-400 hover:text-amber-400 transition-colors">
                {t.legal}
              </a>
              <a href="#" className="text-xs text-neutral-400 hover:text-amber-400 transition-colors">
                {t.cookies}
              </a>
              <a href="#" className="text-xs text-neutral-400 hover:text-amber-400 transition-colors">
                {t.complaints}
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-neutral-500 font-sans tracking-widest font-bold uppercase">
                {isRtl ? 'تواصل معنا' : 'STAY IN TOUCH'}
              </span>
              <button onClick={() => onNavigateToSection('commission')} className="text-xs text-neutral-400 hover:text-amber-400 text-left transition-colors cursor-pointer font-semibold text-amber-400/90" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                {isRtl ? 'طلب شراكة' : 'B2B Inquiry'}
              </button>
              <a href="mailto:aslankozmetikas@gmail.com" className="text-xs text-neutral-400 hover:text-amber-400 transition-colors break-words">
                aslankozmetikas@gmail.com
              </a>
              <a
                href="tel:+905550006462"
                className="text-[10px] text-neutral-400 hover:text-amber-400 tracking-wider transition-colors"
              >
                T: 00905550006462
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright and social media tray */}
        <div className={`pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-neutral-500 text-xs text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
          
          {/* Copyright description */}
          <div className={isRtl ? 'text-right md:order-2' : 'text-left md:order-1'}>
            <p>{t.allRightsReserved}</p>
          </div>

          {/* Social Icons matching Rolls Royce footer style */}
          <div className="flex items-center gap-5 md:order-2">
            <a href="#" className="text-neutral-400 hover:text-amber-400 transition-all duration-300 transform hover:scale-110">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-amber-400 transition-all duration-300 transform hover:scale-110">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-amber-400 transition-all duration-300 transform hover:scale-110">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-amber-400 transition-all duration-300 transform hover:scale-110">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-amber-400 transition-all duration-300 transform hover:scale-110">
              <Twitter className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

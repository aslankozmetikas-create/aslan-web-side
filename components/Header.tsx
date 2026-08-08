import React from 'react';
import { Menu, X } from 'lucide-react';
import { Language, TRANSLATIONS } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onContactClick: () => void;
  onLogoClick: () => void;
}

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
  { code: 'tr', label: 'TR' },
  { code: 'it', label: 'IT' },
];

export default function Header({
  language,
  setLanguage,
  isMenuOpen,
  onMenuToggle,
  onContactClick,
  onLogoClick,
}: HeaderProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between ${isRtl ? 'flex-row-reverse' : ''}`}>
        <button
          type="button"
          onClick={onLogoClick}
          className="flex items-center gap-3 group"
          aria-label="ASLAN International"
        >
          <img
            src="/aslan-logo.png"
            alt="ASLAN"
            className="h-10 sm:h-12 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
          />
          <span className="hidden sm:block text-xs tracking-[0.35em] uppercase text-white/80 font-light">
            ASLAN
          </span>
        </button>

        <div className={`flex items-center gap-3 sm:gap-5 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className="hidden md:flex items-center gap-1 border border-white/10 rounded-full p-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code)}
                className={`px-2.5 py-1 text-[10px] tracking-widest rounded-full transition-colors ${
                  language === lang.code
                    ? 'bg-amber-400 text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onContactClick}
            className="hidden sm:inline-flex text-[10px] tracking-[0.25em] uppercase border border-amber-400/40 text-amber-400 px-4 py-2 hover:bg-amber-400 hover:text-black transition-colors"
          >
            {t.findDealer}
          </button>

          <button
            type="button"
            onClick={onMenuToggle}
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white/90 hover:text-amber-400 transition-colors"
            aria-label={isMenuOpen ? t.close : t.menu}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span className="hidden sm:inline">{isMenuOpen ? t.close : t.menu}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

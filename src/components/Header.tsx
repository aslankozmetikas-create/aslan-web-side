import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import { Language, TRANSLATIONS } from '../types';
import Logo from './Logo';
import { AnimatePresence, motion } from 'motion/react';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onContactClick: () => void;
  onLogoClick?: () => void;
}

const LANGUAGES = [
  { code: 'ar' as Language, label: 'العربية', flag: '🇸🇦' },
  { code: 'en' as Language, label: 'English', flag: '🇬🇧' },
  { code: 'tr' as Language, label: 'Türkçe', flag: '🇹🇷' },
  { code: 'it' as Language, label: 'Italiano', flag: '🇮🇹' },
];

export default function Header({
  language,
  setLanguage,
  isMenuOpen,
  onMenuToggle,
  onContactClick,
  onLogoClick
}: HeaderProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[1];

  return (
    <header className={`fixed top-0 left-0 w-full transition-all duration-500 ${
      isMenuOpen 
        ? 'z-[10000] bg-transparent border-transparent' 
        : 'z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px] border-b border-white/5'
    }`}>
      <div className={`max-w-7xl mx-auto px-6 h-24 flex items-center justify-between relative ${
        isRtl ? 'flex-row-reverse' : 'flex-row'
      }`}>
        
        {/* Left Side: Frosted Glass Circular Menu Toggle Button */}
        <button
          id="menu-toggle-button"
          onClick={onMenuToggle}
          className={`group flex items-center gap-3 text-white focus:outline-none cursor-pointer transition-all duration-300 ${
            isRtl ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          {/* Frosted Glass container */}
          <div
            className="relative w-[45px] h-[29px] rounded-[10px] flex items-center justify-center transition-all duration-500 group-hover:scale-105 border border-white/15 group-hover:border-amber-400/50 shadow-[0_6px_24px_rgba(0,0,0,0.2)]"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          >
            {/* Fine border glow shine */}
            <div className="absolute inset-0 rounded-[10px] border border-white/5 pointer-events-none" />

            {/* Icon animation with AnimatePresence */}
            <div className="relative w-5 h-5 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close-icon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute flex items-center justify-center"
                  >
                    <X className="w-4 h-4 text-white group-hover:text-amber-400 transition-colors duration-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu-icon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute flex flex-col justify-between w-4.5 h-3.5"
                  >
                    <span className="w-full h-[1.2px] bg-white group-hover:bg-amber-400 transition-all duration-300" />
                    <span className="w-3/4 h-[1.2px] bg-white group-hover:w-full group-hover:bg-amber-400 transition-all duration-300" />
                    <span className="w-full h-[1.2px] bg-white group-hover:bg-amber-400 transition-all duration-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <span className="text-xs font-semibold tracking-[0.2em] text-neutral-300 group-hover:text-amber-400 transition-colors duration-300 font-sans uppercase hidden xs:inline">
            {isMenuOpen ? t.close : t.menu}
          </span>
        </button>

        {/* Center: Luxury Logo Component (Fades out when menu open) */}
        <div 
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center select-none transition-all duration-500 [direction:ltr] ${
            isMenuOpen ? 'opacity-0 pointer-events-none -translate-y-6' : 'opacity-100'
          }`}
        >
          <Logo 
            className="w-[150px] sm:w-[168px] h-auto" 
            showSubtitle={false} 
            onClick={onLogoClick} 
          />
        </div>

        {/* Right Side: Language Toggle & Contact Us (Fades out when menu open) */}
        <div className={`flex items-center gap-6 transition-all duration-500 ${
          isMenuOpen ? 'opacity-0 pointer-events-none translate-y-[-10px]' : 'opacity-100'
        }`}>
          {/* Elegant Dropdown Language Switcher */}
          <div ref={dropdownRef} className="relative">
            <button
              id="lang-switcher-btn"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="group flex items-center justify-center gap-2 border border-white/10 hover:border-amber-400 p-0 w-[130px] h-[35px] text-xs font-semibold tracking-wider text-neutral-200 hover:text-amber-400 bg-black/40 hover:bg-black/60 transition-all duration-300 cursor-pointer select-none rounded-[12px] backdrop-blur-md"
            >
              <span className="text-sm leading-none filter drop-shadow-sm">{currentLang.flag}</span>
              <span className="uppercase font-sans tracking-widest">{currentLang.label}</span>
              <Globe className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-400 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute mt-2.5 w-44 bg-[#0a0a0a]/95 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.9)] backdrop-blur-xl p-1.5 flex flex-col gap-1 rounded-none ${
                    isRtl ? 'left-0 origin-top-left' : 'right-0 origin-top-right'
                  }`}
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsDropdownOpen(false);
                      }}
                      className={`flex items-center gap-3 px-3 py-2.5 w-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                        language === lang.code
                          ? 'bg-amber-400 text-black font-bold'
                          : 'text-neutral-300 hover:bg-white/10 hover:text-white'
                      } ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
                    >
                      <span className="text-base leading-none">{lang.flag}</span>
                      <span className="flex-1 font-sans tracking-wider">{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Premium Inquiry Button */}
          <button
            id="contact-button"
            onClick={onContactClick}
            className="hidden md:flex items-center justify-center gap-2 border border-white/20 hover:border-amber-400 w-[151px] h-[35px] rounded-[12px] text-xs font-semibold tracking-widest text-neutral-200 hover:text-black hover:bg-amber-400 transition-all duration-500 uppercase cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{t.findDealer}</span>
          </button>
        </div>

      </div>
    </header>
  );
}

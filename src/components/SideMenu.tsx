import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Language, getTranslation } from '../types';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onNavigateToSection: (sectionId: string) => void;
  onLogoClick?: () => void;
}

interface MenuItem {
  id: string;
  label: { ar: string; en: string; tr?: string; it?: string };
  sectionId: string;
}

// ==========================================
// CONFIGURATION FOR SIDE MENU ANIMATIONS
// ==========================================
// To revert to the original diagonal sliding animation, set 'horizontalOnly' to false.
const ANIMATION_CONFIG = {
  horizontalOnly: true,     // true = slide strictly horizontally on the same line; false = diagonal slide from the corner
  slideOffset: -150,        // Starting horizontal offset (negative value means sliding from left to right)
  yOffset: 0,               // Vertical offset (0 means strictly on the same line)
  initialScale: 0.98,       // Subtle initial scaling
  duration: 1.6,            // Animation duration in seconds (smooth cinematic)
  staggerDelay: 0.24,       // Delay between adjacent items
};

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'international',
    label: { ar: 'أسلان إنترناشونال ش.', en: 'ASLAN INTERNATIONAL INC.', tr: 'ASLAN INTERNATIONAL A.Ş.', it: 'ASLAN INTERNATIONAL S.p.A.' },
    sectionId: 'hero',
  },
  {
    id: 'cosmetics',
    label: { ar: 'الجمال ومستحضرات التجميل', en: 'BEAUTY & COSMETICS', tr: 'GÜZELLİK VE KOZMETİK', it: 'BELLEZZA E COSMETICI' },
    sectionId: 'companies-cosmetics',
  },
  {
    id: 'private-label',
    label: { ar: 'العلامة التجارية الخاصة', en: ' PRIVATE LABEL', tr: ' ÖZEL MARKA', it: ' MARCHIO PRIVATO' },
    sectionId: 'private-label',
  },
  {
    id: 'global-trade',
    label: { ar: 'السرية وحماية المشاريع', en: 'CONFIDENTIALITY & PROTECTION', tr: 'GİZLİLİK VE MARKA KORUMASI', it: 'RISERVATEZZA E PROTEZIONE' },
    sectionId: 'global-trade',
  },
  {
    id: 'brands',
    label: { ar: 'التجارة العالمية والتصدير', en: 'GLOBAL TRADE & EXPORT', tr: 'KÜRESEL TİCARET VE İHRACAT', it: 'COMMERCIO GLOBALE ED ESPORTAZIONE' },
    sectionId: 'brands',
  },
  {
    id: 'software',
    label: { ar: ' برامج  الذكاء الاصطناعي', en: 'AI-POWERED SOFTWARE ', tr: ' YAPAY ZEKA DESTEKLİ YAZILIMLAR', it: 'SOFTWARE BASATI SULL’INTELLIGENZA ARTIFICIALE' },
    sectionId: 'software',
  }
];

const COSMETICS_SUBMENU = [
  {
    id: 'factory',
    label: { ar: 'مصنع', en: 'FACTORY', tr: 'FABRİKA', it: 'FABBRICA' },
    sectionId: 'cosmetics-factory',
  },
  {
    id: 'products',
    label: { ar: 'منتجاتنا', en: 'OUR PRODUCTS', tr: 'ÜRÜNLERİMİZ', it: 'I NOSTRI PRODOTTI' },
    sectionId: 'private-label',
  },
  {
    id: 'lovabella',
    label: { ar: 'لوفابيلا ميلانو', en: 'LOVABELLA MILANO', tr: 'LOVABELLA MILANO', it: 'LOVABELLA MILANO' },
    sectionId: 'lovabella-brand',
  },
];

export default function SideMenu({
  isOpen,
  onClose,
  language,
  onNavigateToSection,
  onLogoClick
}: SideMenuProps) {
  const isRtl = language === 'ar';
  const [reducedMotion, setReducedMotion] = useState(false);
  const [menuLevel, setMenuLevel] = useState<'main' | 'cosmetics'>('main');

  // Reset menu level when sidebar closes
  useEffect(() => {
    if (!isOpen) {
      setMenuLevel('main');
    }
  }, [isOpen]);

  // Lock scrolling when the full-screen overlay menu is open to prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Support for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay for the remaining screen area with click-to-close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onClick={onClose}
            className="fixed inset-0 z-[998] bg-black/30 backdrop-blur-[2px] cursor-pointer"
          />

          {/* Side Menu Panel: Covers about 50% of screen width on desktop, featuring ultra-luxurious "Buzlu Cam" (frosted glass) */}
          <motion.div
            initial={{ x: isRtl ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? '100%' : '-100%' }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed inset-y-0 ${
              isRtl ? 'right-0 border-l' : 'left-0 border-r'
            } w-[90vw] sm:w-[60vw] md:w-[55vw] lg:w-[50vw] xl:w-[45vw] h-screen z-[999] overflow-hidden bg-zinc-950/45 backdrop-blur-3xl border-white/10 flex flex-col justify-center shadow-2xl`}
          >
            {/* Core Content Container */}
            <div className={`w-full px-8 sm:px-14 md:px-20 flex flex-col justify-center h-full ${
              isRtl ? 'items-end text-right' : 'items-start text-left'
            }`}>
              
              {/* Vertical aligned lists with premium cinematic staggered entry */}
              <AnimatePresence mode="wait">
                {menuLevel === 'main' ? (
                  <motion.nav 
                    key="main-menu"
                    initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isRtl ? -50 : 50 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-end gap-4 md:gap-6 py-8 max-w-full text-right"
                    style={{ width: '700px', maxWidth: '100%', textAlign: 'right', fontFamily: 'system-ui' }}
                  >
                    {MENU_ITEMS.map((item, index) => {
                      const isHolding = item.id === 'holding';
                      return (
                        <motion.button
                          key={item.id}
                          id={`menu-item-${item.id}`}
                          initial={{
                            opacity: 0,
                            x: reducedMotion ? 0 : (ANIMATION_CONFIG.horizontalOnly ? (isRtl ? 150 : ANIMATION_CONFIG.slideOffset) : (isRtl ? 600 : -600)),
                            y: reducedMotion ? 0 : (ANIMATION_CONFIG.horizontalOnly ? ANIMATION_CONFIG.yOffset : 200),
                            scale: ANIMATION_CONFIG.horizontalOnly ? ANIMATION_CONFIG.initialScale : 0.95
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            y: 0,
                            scale: 1,
                            transition: {
                              ease: [0.16, 1, 0.3, 1], // Premium smooth cinematic easing curve
                              duration: ANIMATION_CONFIG.duration, // Adjustable duration
                              delay: 0.45 + (MENU_ITEMS.length - 1 - index) * ANIMATION_CONFIG.staggerDelay, // Stagger delay starting from the bottom (B2B) up to the top
                            }
                          }}
                          exit={{
                            opacity: 0,
                            x: reducedMotion ? 0 : (isRtl ? 150 : -150),
                            y: 0,
                            scale: 0.98,
                            transition: {
                              ease: 'easeIn',
                              duration: 0.15,
                              delay: 0,
                            }
                          }}
                          onClick={() => {
                            if (item.id === 'cosmetics') {
                              setMenuLevel('cosmetics');
                            } else {
                              onNavigateToSection(item.sectionId);
                              onClose();
                            }
                          }}
                          className={`group relative font-light text-neutral-300 hover:text-amber-400 transition-colors duration-300 py-2.5 block w-fit tracking-[0.05em] select-none cursor-pointer ${
                            isHolding ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif' : ''
                          }`}
                          style={{
                            textAlign: 'right',
                            fontFamily: isHolding ? 'inherit' : 'system-ui',
                            fontSize: item.id === 'international' ? '24px' : (isHolding ? '25px' : '19px')
                          }}
                        >
                          {/* Hover text-shadow and smooth slide */}
                          <span 
                            style={{
                              textAlign: 'right',
                              fontFamily: isHolding ? 'inherit' : 'system-ui',
                              fontSize: item.id === 'international' ? '24px' : (isHolding ? '25px' : '19px')
                            }}
                            className={`inline-block transition-transform duration-500 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.35)] tracking-[0.08em] ${
                              isRtl 
                                ? 'group-hover:-translate-x-2 md:group-hover:-translate-x-3' 
                                : 'group-hover:translate-x-2 md:group-hover:translate-x-3'
                            }`}
                          >
                            {getTranslation(item.label, language)}
                          </span>

                          {/* Minimalist horizontal underline accent */}
                          <span 
                            className={`absolute bottom-0 block h-[1.5px] bg-amber-400 w-0 group-hover:w-full transition-all duration-500 ${
                              isRtl ? 'right-0' : 'left-0'
                            }`} 
                          />
                        </motion.button>
                      );
                    })}
                  </motion.nav>
                ) : (
                  <motion.nav 
                    key="cosmetics-menu"
                    initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isRtl ? 50 : -50 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-end gap-4 md:gap-6 py-8 max-w-full text-right animate-none"
                    style={{ width: '700px', maxWidth: '100%', textAlign: 'right', fontFamily: 'system-ui' }}
                  >
                    {/* Back Button */}
                    <motion.button
                      id="submenu-back-btn"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setMenuLevel('main')}
                      className={`group flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-amber-400 hover:text-white transition-colors duration-300 mb-8 cursor-pointer select-none ${
                        isRtl ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      <span>{language === 'ar' ? 'رجوع' : language === 'tr' ? 'GERİ' : language === 'it' ? 'INDIETRO' : 'BACK'}</span>
                      {isRtl ? <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" /> : <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />}
                    </motion.button>

                    {/* Submenu Title */}
                    <div className="mb-4 border-b border-white/10 pb-2 w-fit">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-bold font-sans">
                        {language === 'ar' ? 'الجمال ومستحضرات التجميل' : language === 'tr' ? 'GÜZELLİK VE KOZMETİK' : language === 'it' ? 'BELLEZZA E COSMETICI' : 'BEAUTY & COSMETICS'}
                      </span>
                    </div>

                    {COSMETICS_SUBMENU.map((item, index) => {
                      return (
                        <motion.button
                          key={item.id}
                          id={`submenu-item-${item.id}`}
                          initial={{
                            opacity: 0,
                            x: reducedMotion ? 0 : (ANIMATION_CONFIG.horizontalOnly ? (isRtl ? 150 : ANIMATION_CONFIG.slideOffset) : (isRtl ? 600 : -600)),
                            y: reducedMotion ? 0 : (ANIMATION_CONFIG.horizontalOnly ? ANIMATION_CONFIG.yOffset : 200),
                            scale: ANIMATION_CONFIG.horizontalOnly ? ANIMATION_CONFIG.initialScale : 0.95
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            y: 0,
                            scale: 1,
                            transition: {
                              ease: [0.16, 1, 0.3, 1],
                              duration: ANIMATION_CONFIG.duration,
                              delay: 0.45 + (COSMETICS_SUBMENU.length - 1 - index) * ANIMATION_CONFIG.staggerDelay,
                            }
                          }}
                          exit={{
                            opacity: 0,
                            x: reducedMotion ? 0 : (isRtl ? 150 : -150),
                            y: 0,
                            scale: 0.98,
                            transition: {
                              ease: 'easeIn',
                              duration: 0.15,
                              delay: 0,
                            }
                          }}
                          onClick={() => {
                            onNavigateToSection(item.sectionId);
                            onClose();
                          }}
                          className="group relative font-light text-neutral-300 hover:text-amber-400 transition-colors duration-300 py-2.5 block w-fit tracking-[0.05em] select-none cursor-pointer"
                          style={{
                            textAlign: 'right',
                            fontFamily: 'system-ui',
                            fontSize: '19px'
                          }}
                        >
                          <span 
                            style={{
                              textAlign: 'right',
                              fontFamily: 'system-ui',
                              fontSize: '19px'
                            }}
                            className={`inline-block transition-transform duration-500 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.35)] tracking-[0.08em] ${
                              isRtl 
                                ? 'group-hover:-translate-x-2 md:group-hover:-translate-x-3' 
                                : 'group-hover:translate-x-2 md:group-hover:translate-x-3'
                            }`}
                          >
                            {getTranslation(item.label, language)}
                          </span>

                          {/* Minimalist horizontal underline accent */}
                          <span 
                            className={`absolute bottom-0 block h-[1.5px] bg-amber-400 w-0 group-hover:w-full transition-all duration-500 ${
                              isRtl ? 'right-0' : 'left-0'
                            }`} 
                          />
                        </motion.button>
                      );
                    })}
                  </motion.nav>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, TRANSLATIONS } from '../types';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onNavigateToSection: (sectionId: string) => void;
  onLogoClick: () => void;
}

const MENU_ITEMS = [
  { id: 'companies-cosmetics', label: { en: 'Cosmetics', ar: 'مستحضرات التجميل', tr: 'Kozmetik', it: 'Cosmetici' } },
  { id: 'food', label: { en: 'Healthy Food', ar: 'الغذاء الصحي', tr: 'Sağlıklı Gıda', it: 'Cibi Sani' } },
  { id: 'private-label', label: { en: 'Private Label', ar: 'العلامة الخاصة', tr: 'Private Label', it: 'Private Label' } },
  { id: 'global-trade', label: { en: 'Global Trade', ar: 'التجارة العالمية', tr: 'Küresel Ticaret', it: 'Commercio Globale' } },
  { id: 'brands', label: { en: 'Brands', ar: 'العلامات', tr: 'Markalar', it: 'Marchi' } },
  { id: 'lovabella-brand', label: { en: 'LOVABELLA', ar: 'LOVABELLA', tr: 'LOVABELLA', it: 'LOVABELLA' } },
  { id: 'cosmetics-factory', label: { en: 'Cosmetics Factory', ar: 'مصنع التجميل', tr: 'Kozmetik Fabrikası', it: 'Fabbrica Cosmetici' } },
  { id: 'commission', label: { en: 'Contact / Partnership', ar: 'تواصل / شراكة', tr: 'İletişim / Ortaklık', it: 'Contatto / Partnership' } },
];

export default function SideMenu({
  isOpen,
  onClose,
  language,
  onNavigateToSection,
  onLogoClick,
}: SideMenuProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: isRtl ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? '-100%' : '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 ${isRtl ? 'left-0' : 'right-0'} z-50 h-full w-full max-w-md bg-[#0a0a0a] border-white/10 ${
              isRtl ? 'border-r' : 'border-l'
            } p-8 overflow-y-auto`}
          >
            <div className={`flex items-center justify-between mb-12 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <button type="button" onClick={onLogoClick} className="flex items-center gap-3">
                <img src="/aslan-logo.png" alt="ASLAN" className="h-10 w-auto object-contain" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 hover:text-white"
              >
                {t.close}
              </button>
            </div>

            <nav className={`space-y-2 ${isRtl ? 'text-right' : 'text-left'}`}>
              {MENU_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={{ opacity: 0, x: isRtl ? -16 : 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  onClick={() => onNavigateToSection(item.id)}
                  className="block w-full py-3 text-lg sm:text-xl font-serif tracking-wide text-white/85 hover:text-amber-400 border-b border-white/5 transition-colors"
                >
                  {item.label[language] || item.label.en}
                </motion.button>
              ))}
            </nav>

            <div className="mt-10">
              <img
                src="/who-we-work.png"
                alt="ASLAN partners"
                className="w-full h-40 object-cover opacity-70"
              />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

import React from 'react';
import { Language, TRANSLATIONS } from '../types';

interface FooterProps {
  language: Language;
  onNavigateToSection: (sectionId: string) => void;
  onLogoClick: () => void;
}

export default function Footer({ language, onNavigateToSection, onLogoClick }: FooterProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid md:grid-cols-3 gap-10 mb-12 ${isRtl ? 'text-right' : 'text-left'}`}>
          <div>
            <button type="button" onClick={onLogoClick} className="mb-4">
              <img src="/aslan-logo.png" alt="ASLAN" className="h-12 w-auto object-contain" />
            </button>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
              ASLAN INTERNATIONAL — industrial excellence, premium manufacturing, and global partnerships.
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-amber-400 mb-4">Navigate</p>
            <div className="space-y-2">
              {[
                { id: 'companies-cosmetics', label: language === 'ar' ? 'التجميل' : 'Cosmetics' },
                { id: 'food', label: language === 'ar' ? 'الغذاء' : 'Food' },
                { id: 'brands', label: language === 'ar' ? 'العلامات' : 'Brands' },
                { id: 'commission', label: t.contact },
              ].map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => onNavigateToSection(link.id)}
                  className="block text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-amber-400 mb-4">Legal</p>
            <div className="space-y-2 text-sm text-neutral-400">
              <p>{t.legal}</p>
              <p>{t.cookies}</p>
              <p>{t.sustainability}</p>
            </div>
          </div>
        </div>

        <div className={`pt-6 border-t border-white/10 text-[11px] text-neutral-500 ${isRtl ? 'text-right' : 'text-left'}`}>
          {t.allRightsReserved}
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { ArrowLeft, ArrowRight, BadgeCheck } from 'lucide-react';
import { Language, TRANSLATIONS } from '../types';

interface CertificationsPageProps {
  language: Language;
  onBack: () => void;
  onContactClick: () => void;
}

const CERTS = [
  { code: 'ISO 22716', name: 'GMP Cosmetics' },
  { code: 'ISO 9001', name: 'Quality Management' },
  { code: 'ISO 22000', name: 'Food Safety' },
  { code: 'HALAL', name: 'International Halal' },
  { code: 'HACCP', name: 'Food Hazard Control' },
  { code: 'Cruelty-Free', name: 'Ethical Standards' },
];

export default function CertificationsPage({ language, onBack, onContactClick }: CertificationsPageProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  return (
    <section className="pt-28 pb-20 min-h-screen bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <button
          type="button"
          onClick={onBack}
          className={`inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-neutral-400 hover:text-amber-400 mb-8 ${
            isRtl ? 'flex-row-reverse' : ''
          }`}
        >
          <BackIcon className="w-4 h-4" />
          {language === 'ar' ? 'عودة' : 'Back'}
        </button>

        <div className={`mb-12 ${isRtl ? 'text-right' : 'text-left'}`}>
          <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-3">{t.globalCertifications}</p>
          <h1 className="text-3xl sm:text-5xl font-serif font-light uppercase tracking-wide">
            {t.viewDocuments}
          </h1>
          <p className="mt-4 text-neutral-400 max-w-2xl">{t.globalCertificationsDesc}</p>
        </div>

        <div className="relative mb-12 overflow-hidden border border-white/10">
          <img src="/who-we-work.png" alt="" className="w-full h-56 object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {CERTS.map((cert) => (
            <div key={cert.code} className={`border border-white/10 p-6 bg-white/[0.02] ${isRtl ? 'text-right' : 'text-left'}`}>
              <BadgeCheck className="w-5 h-5 text-amber-400 mb-4" />
              <p className="text-xl font-serif text-white mb-1">{cert.code}</p>
              <p className="text-xs text-neutral-400 tracking-wide uppercase">{cert.name}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={onContactClick}
          className="border border-amber-400 text-amber-400 px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-amber-400 hover:text-black transition-colors"
        >
          {t.contactUs}
        </button>
      </div>
    </section>
  );
}

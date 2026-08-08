import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface LovabellaStorePageProps {
  language: Language;
  onBack: () => void;
  onStartStore: () => void;
}

export default function LovabellaStorePage({ language, onBack, onStartStore }: LovabellaStorePageProps) {
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

        <div className="relative h-[48vh] min-h-[300px] overflow-hidden mb-10">
          <img
            src="/LovabellaLuxuryBeautyStore.png"
            alt="LOVABELLA Store"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className={`absolute bottom-0 inset-x-0 p-6 sm:p-10 ${isRtl ? 'text-right' : 'text-left'}`}>
            <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-2">LOVABELLA</p>
            <h1 className="text-3xl sm:text-5xl font-serif font-light uppercase tracking-wide">
              {language === 'ar' ? 'برنامج متاجر التجزئة الفاخرة' : 'Luxury Store Franchise Program'}
            </h1>
          </div>
        </div>

        <div className={`max-w-3xl space-y-5 ${isRtl ? 'text-right' : 'text-left'}`}>
          <p className="text-neutral-300 leading-relaxed">
            {language === 'ar'
              ? 'افتح متجر LOVABELLA بتصميم متكامل، هوية بصرية موحدة، تدريب تشغيلي، وتوريد منتجات مستمر من مصانع أصلان.'
              : 'Launch a LOVABELLA boutique with complete layout support, unified brand identity, operational training, and continuous product supply from ASLAN factories.'}
          </p>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>• 3D store concept & visual merchandising</li>
            <li>• Initial inventory planning</li>
            <li>• Staff training & launch marketing</li>
            <li>• Ongoing supply & brand guidelines</li>
          </ul>
          <button
            type="button"
            onClick={onStartStore}
            className="border border-amber-400 text-amber-400 px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-amber-400 hover:text-black transition-colors"
          >
            {language === 'ar' ? 'ابدأ طلب المتجر' : 'Start Store Application'}
          </button>
        </div>
      </div>
    </section>
  );
}

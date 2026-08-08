import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface LovabellaBrandPageProps {
  language: Language;
  onBack: () => void;
  onOpenStoreProgram: () => void;
}

export default function LovabellaBrandPage({
  language,
  onBack,
  onOpenStoreProgram,
}: LovabellaBrandPageProps) {
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

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className={isRtl ? 'text-right md:order-2' : 'text-left'}>
            <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-3">SIGNATURE BRAND</p>
            <h1 className="text-4xl sm:text-5xl font-serif font-light uppercase tracking-wide mb-5">
              LOVABELLA
            </h1>
            <p className="text-neutral-300 leading-relaxed mb-6">
              {language === 'ar'
                ? 'العلامة الرائدة لمجموعة أصلان في عالم العناية والتجميل الفاخر — حيث تلتقي الجودة العلمية بالجمال الراقي.'
                : 'ASLAN’s leading beauty brand — where scientific quality meets refined luxury skincare and cosmetics.'}
            </p>
            <button
              type="button"
              onClick={onOpenStoreProgram}
              className="border border-amber-400 text-amber-400 px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-amber-400 hover:text-black transition-colors"
            >
              {language === 'ar' ? 'برنامج المتاجر' : 'Store Program'}
            </button>
          </div>
          <div className="relative min-h-[360px] overflow-hidden border border-white/10">
            <img
              src="/LovabellaLuxuryBeautyStore.png"
              alt="LOVABELLA"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {['/lovabella-partner.png', '/start-your-brand.png', '/factory.png'].map((src) => (
            <img key={src} src={src} alt="" className="w-full h-44 object-cover border border-white/10" />
          ))}
        </div>
      </div>
    </section>
  );
}

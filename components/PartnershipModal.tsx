import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Language, TRANSLATIONS } from '../types';

interface PartnershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onOpenLovabellaStore: () => void;
  onApplyDistributor: () => void;
  onApplyStrategic: () => void;
}

export default function PartnershipModal({
  isOpen,
  onClose,
  language,
  onOpenLovabellaStore,
  onApplyDistributor,
  onApplyStrategic,
}: PartnershipModalProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const models = [
    {
      title: { en: 'Exclusive Distribution', ar: 'التوزيع الحصري', tr: 'Özel Distribütörlük', it: 'Distribuzione Esclusiva' },
      desc: {
        en: 'Represent ASLAN brands in your territory with dedicated commercial support.',
        ar: 'مثّل علامات أصلان في منطقتك مع دعم تجاري مخصص.',
        tr: 'Bölgenizde ASLAN markalarını temsil edin.',
        it: 'Rappresenta i marchi ASLAN nel tuo territorio.',
      },
      action: onApplyDistributor,
      cta: { en: 'Apply as Distributor', ar: 'قدّم كموزع', tr: 'Distribütör Başvurusu', it: 'Candidati come Distributore' },
    },
    {
      title: { en: 'LOVABELLA Store', ar: 'متجر LOVABELLA', tr: 'LOVABELLA Mağaza', it: 'Negozio LOVABELLA' },
      desc: {
        en: 'Open a luxury retail concept with turnkey design, training, and supply.',
        ar: 'افتح مفهوم تجزئة فاخر مع تصميم وتدريب وتوريد متكامل.',
        tr: 'Anahtar teslim tasarım ve tedarik ile lüks perakende konsepti açın.',
        it: 'Apri un concept retail di lusso con design e fornitura chiavi in mano.',
      },
      action: onOpenLovabellaStore,
      cta: { en: 'Explore Store Program', ar: 'استكشف برنامج المتجر', tr: 'Mağaza Programını Keşfet', it: 'Esplora il Programma Store' },
    },
    {
      title: { en: 'Strategic Partnership', ar: 'شراكة استراتيجية', tr: 'Stratejik Ortaklık', it: 'Partnership Strategica' },
      desc: {
        en: 'Co-invest and build long-term manufacturing or market expansion alliances.',
        ar: 'استثمر معنا وابنِ تحالفات تصنيع أو توسع سوقي طويلة الأمد.',
        tr: 'Uzun vadeli üretim veya pazar genişleme ittifakları kurun.',
        it: 'Costruisci alleanze di produzione o espansione di mercato a lungo termine.',
      },
      action: onApplyStrategic,
      cta: { en: 'Start Strategic Talk', ar: 'ابدأ حواراً استراتيجياً', tr: 'Stratejik Görüşme Başlat', it: 'Avvia Colloquio Strategico' },
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/90 overflow-y-auto"
        >
          <div className="min-h-screen max-w-5xl mx-auto px-6 py-16">
            <div className={`flex items-start justify-between gap-4 mb-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className={isRtl ? 'text-right' : 'text-left'}>
                <p className="text-amber-400 text-xs tracking-[0.35em] uppercase mb-2">
                  {t.strategicPartnerships}
                </p>
                <h2 className="text-3xl sm:text-4xl font-serif font-light uppercase tracking-wide">
                  {language === 'ar' ? 'انضم كشريك مع أصلان' : 'Partner With ASLAN'}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 border border-white/20 hover:border-amber-400 hover:text-amber-400 transition-colors"
                aria-label={t.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative mb-8 overflow-hidden border border-white/10">
              <img src="/lovabella-partner.png" alt="" className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {models.map((model) => (
                <div
                  key={model.title.en}
                  className={`border border-white/10 p-6 bg-white/[0.02] flex flex-col ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}
                >
                  <h3 className="text-xl font-serif mb-3">{model.title[language] || model.title.en}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed flex-1 mb-6">
                    {model.desc[language] || model.desc.en}
                  </p>
                  <button
                    type="button"
                    onClick={model.action}
                    className="border border-amber-400/50 text-amber-400 py-2 text-[10px] tracking-[0.2em] uppercase hover:bg-amber-400 hover:text-black transition-colors"
                  >
                    {model.cta[language] || model.cta.en}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

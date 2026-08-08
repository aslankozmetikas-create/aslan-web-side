import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface SectorPageProps {
  sectorId: string;
  language: Language;
  onBack: () => void;
  onContactClick: () => void;
}

const SECTOR_CONTENT: Record<
  string,
  {
    image: string;
    title: Record<Language, string>;
    body: Record<Language, string>;
  }
> = {
  'companies-cosmetics': {
    image: '/factory.png',
    title: {
      en: 'Cosmetics Manufacturing',
      ar: 'تصنيع مستحضرات التجميل',
      tr: 'Kozmetik Üretimi',
      it: 'Produzione Cosmetica',
    },
    body: {
      en: 'ASLAN cosmetics facilities deliver GMP-aligned manufacturing, advanced mixing technology, and confidential OEM/ODM partnerships for premium beauty brands.',
      ar: 'تقدم منشآت أصلان للتجميل تصنيعاً وفق معايير GMP وتقنيات مزج متقدمة وشراكات OEM/ODM سرية لعلامات التجميل الفاخرة.',
      tr: 'ASLAN kozmetik tesisleri, premium güzellik markaları için GMP uyumlu üretim ve gizli OEM/ODM ortaklıkları sunar.',
      it: 'Gli impianti cosmetici ASLAN offrono produzione conforme GMP e partnership OEM/ODM riservate per marchi premium.',
    },
  },
  food: {
    image: '/start-your-brand.png',
    title: {
      en: 'Healthy Food Industries',
      ar: 'صناعات الغذاء الصحي',
      tr: 'Sağlıklı Gıda Endüstrisi',
      it: 'Industrie Alimentari Sane',
    },
    body: {
      en: 'From slow-cooked bone broth to natural wellness products, our food division focuses on purity, safety certifications, and high nutritional integrity.',
      ar: 'من مرقة العظام المطهوة ببطء إلى منتجات العافية الطبيعية، يركز قطاع الغذاء على النقاء وشهادات السلامة.',
      tr: 'Yavaş pişirilmiş kemik suyundan doğal wellness ürünlerine kadar saflık ve gıda güvenliği odaklı üretim.',
      it: 'Dal brodo di ossa a cottura lenta ai prodotti wellness naturali, con focus su purezza e sicurezza alimentare.',
    },
  },
  'private-label': {
    image: '/lovabella-partner.png',
    title: {
      en: 'Private Label Solutions',
      ar: 'حلول العلامة الخاصة',
      tr: 'Private Label Çözümleri',
      it: 'Soluzioni Private Label',
    },
    body: {
      en: 'We help partners launch complete product lines — formulation, packaging, branding, and scalable production under your identity.',
      ar: 'نساعد الشركاء على إطلاق خطوط منتجات كاملة — التركيبة والتعبئة والهوية والإنتاج القابل للتوسع تحت علامتكم.',
      tr: 'Formül, ambalaj, markalaşma ve ölçeklenebilir üretim ile tam ürün hatları sunuyoruz.',
      it: 'Aiutiamo i partner a lanciare linee complete: formula, packaging, branding e produzione scalabile.',
    },
  },
  'global-trade': {
    image: '/earth.png',
    title: {
      en: 'Global Trade',
      ar: 'التجارة العالمية',
      tr: 'Küresel Ticaret',
      it: 'Commercio Globale',
    },
    body: {
      en: 'Cross-border distribution networks connecting ASLAN products and partner brands to markets across the Middle East, Europe, and beyond.',
      ar: 'شبكات توزيع عابرة للحدود تصل منتجات أصلان وعلامات الشركاء بأسواق الشرق الأوسط وأوروبا وما بعدها.',
      tr: 'ASLAN ürünlerini Orta Doğu, Avrupa ve ötesindeki pazarlara bağlayan dağıtım ağları.',
      it: 'Reti di distribuzione che collegano i prodotti ASLAN a mercati in Medio Oriente, Europa e oltre.',
    },
  },
  software: {
    image: '/AI.png',
    title: {
      en: 'Software & Digital',
      ar: 'البرمجيات والرقمنة',
      tr: 'Yazılım ve Dijital',
      it: 'Software e Digitale',
    },
    body: {
      en: 'Digital systems supporting operations, brand experiences, and intelligent manufacturing workflows across the group.',
      ar: 'أنظمة رقمية تدعم العمليات وتجارب العلامة وسير عمل التصنيع الذكي عبر المجموعة.',
      tr: 'Grup genelinde operasyonları ve akıllı üretim iş akışlarını destekleyen dijital sistemler.',
      it: 'Sistemi digitali a supporto di operazioni ed esperienze di brand nel gruppo.',
    },
  },
};

export default function SectorPage({ sectorId, language, onBack, onContactClick }: SectorPageProps) {
  const isRtl = language === 'ar';
  const content = SECTOR_CONTENT[sectorId] || SECTOR_CONTENT['companies-cosmetics'];
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

        <div className="relative h-[42vh] min-h-[280px] overflow-hidden mb-10">
          <img src={content.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>

        <div className={isRtl ? 'text-right' : 'text-left'}>
          <h1 className="text-3xl sm:text-5xl font-serif font-light uppercase tracking-wide mb-6">
            {content.title[language] || content.title.en}
          </h1>
          <p className="text-neutral-300 leading-relaxed max-w-3xl mb-8">
            {content.body[language] || content.body.en}
          </p>
          <button
            type="button"
            onClick={onContactClick}
            className="border border-amber-400 text-amber-400 px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-amber-400 hover:text-black transition-colors"
          >
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </button>
        </div>
      </div>
    </section>
  );
}

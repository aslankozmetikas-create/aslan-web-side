import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface SectorsSectionsProps {
  language: Language;
  onContactClick: () => void;
  onSectorSelect: (id: string) => void;
}

const SECTORS = [
  {
    id: 'companies-cosmetics',
    image: '/factory.png',
    title: { en: 'Cosmetics Manufacturing', ar: 'تصنيع مستحضرات التجميل', tr: 'Kozmetik Üretimi', it: 'Produzione Cosmetica' },
    desc: {
      en: 'OEM/ODM labs, formulation, and full-scale production for global beauty brands.',
      ar: 'مختبرات OEM/ODM وتطوير التركيبات والإنتاج الكامل لعلامات التجميل العالمية.',
      tr: 'Küresel güzellik markaları için OEM/ODM laboratuvarları ve tam ölçekli üretim.',
      it: 'Laboratori OEM/ODM e produzione su larga scala per marchi di bellezza globali.',
    },
  },
  {
    id: 'food',
    image: '/start-your-brand.png',
    title: { en: 'Healthy Food', ar: 'الغذاء الصحي', tr: 'Sağlıklı Gıda', it: 'Cibi Sani' },
    desc: {
      en: 'Natural foods, bone broth, and wellness products crafted with purity standards.',
      ar: 'أغذية طبيعية ومرقة عظام ومنتجات عافية وفق أعلى معايير النقاء.',
      tr: 'Saflık standartlarıyla hazırlanan doğal gıdalar ve wellness ürünleri.',
      it: 'Alimenti naturali e prodotti wellness realizzati con standard di purezza.',
    },
  },
  {
    id: 'private-label',
    image: '/lovabella-partner.png',
    title: { en: 'Private Label', ar: 'العلامة الخاصة', tr: 'Private Label', it: 'Private Label' },
    desc: {
      en: 'End-to-end brand building from formula to packaging and market-ready identity.',
      ar: 'بناء العلامة من التركيبة إلى التعبئة والهوية الجاهزة للسوق.',
      tr: 'Formülden ambalaja kadar uçtan uca marka geliştirme.',
      it: 'Sviluppo del brand dalla formula al packaging pronto per il mercato.',
    },
  },
  {
    id: 'brands',
    image: '/LovabellaLuxuryBeautyStore.png',
    title: { en: 'Owned Brands', ar: 'علاماتنا التجارية', tr: 'Kendi Markalarımız', it: 'I Nostri Marchi' },
    desc: {
      en: 'Explore LOVABELLA and the ASLAN brand universe in an immersive showcase.',
      ar: 'استكشف LOVABELLA وعالم علامات أصلان في عرض تفاعلي.',
      tr: 'LOVABELLA ve ASLAN marka evrenini keşfedin.',
      it: 'Esplora LOVABELLA e l’universo dei marchi ASLAN.',
    },
  },
];

export default function SectorsSections({ language, onContactClick, onSectorSelect }: SectorsSectionsProps) {
  const isRtl = language === 'ar';

  return (
    <section id="sectors" className="py-24 sm:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-14 ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-bold block mb-3">
            SECTORS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light uppercase tracking-wider">
            {language === 'ar' ? 'قطاعات أعمالنا' : 'Our Business Pillars'}
          </h2>
          <div className="w-16 h-[1.5px] bg-amber-400 mt-6" />
        </div>

        <div className="space-y-8">
          {SECTORS.map((sector, index) => (
            <motion.article
              key={sector.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`grid md:grid-cols-2 gap-0 border border-white/10 overflow-hidden ${
                index % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="relative min-h-[260px]">
                <img src={sector.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className={`p-8 sm:p-10 flex flex-col justify-center bg-black/40 ${isRtl ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-serif uppercase tracking-wide mb-3">
                  {sector.title[language] || sector.title.en}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {sector.desc[language] || sector.desc.en}
                </p>
                <div className={`flex flex-wrap gap-3 ${isRtl ? 'justify-end' : ''}`}>
                  <button
                    type="button"
                    onClick={() => onSectorSelect(sector.id)}
                    className="border border-amber-400/50 text-amber-400 px-5 py-2 text-[10px] tracking-[0.25em] uppercase hover:bg-amber-400 hover:text-black transition-colors"
                  >
                    {language === 'ar' ? 'استكشف' : 'Explore'}
                  </button>
                  <button
                    type="button"
                    onClick={onContactClick}
                    className="border border-white/20 text-white/80 px-5 py-2 text-[10px] tracking-[0.25em] uppercase hover:border-white hover:text-white transition-colors"
                  >
                    {language === 'ar' ? 'تواصل' : 'Contact'}
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

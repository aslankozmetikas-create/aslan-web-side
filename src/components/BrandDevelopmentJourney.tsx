import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Lightbulb,
  Sparkles,
  FlaskConical,
  CheckCircle2,
  Box,
  Palette,
  Factory,
  ShieldCheck,
  PackageCheck,
  Rocket,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Sparkle
} from 'lucide-react';
import { Language, getTranslation } from '../types';

interface BrandDevelopmentJourneyProps {
  language: Language;
  onOpenProjectModal: () => void;
  onOpenConsultation: () => void;
}

interface JourneyStageData {
  step: string;
  icon: React.ReactNode;
  title: { ar: string; en: string; tr: string; it: string };
  desc: { ar: string; en: string; tr: string; it: string };
}

const JOURNEY_STAGES: JourneyStageData[] = [
  {
    step: '01',
    icon: <Lightbulb className="w-3.5 h-3.5 text-amber-400" />,
    title: {
      ar: 'الفكرة والاستشارة',
      en: 'IDEA & CONSULTATION',
      tr: 'FİKİR VE DANIŞMANLIK',
      it: 'IDEA E CONSULENZA'
    },
    desc: {
      ar: 'نفهم رؤيتك، والسوق المستهدف، وأنواع المنتجات، والكميات المتوقعة، والمكانة التي تريدها لعلامتك.',
      en: 'Understanding your vision, target market, product categories, quantities, and brand positioning.',
      tr: 'Vizyonunuzu, hedef pazarınızı, ürün kategorilerinizi, miktarlarınızı ve marka konumlandırmanızı anlıyoruz.',
      it: 'Comprendiamo la tua visione, il mercato target, le categorie di prodotti, le quantità e il posizionamento del marchio.'
    }
  },
  {
    step: '02',
    icon: <Sparkles className="w-3.5 h-3.5 text-amber-400" />,
    title: {
      ar: 'تطوير مفهوم المنتج',
      en: 'PRODUCT CONCEPT',
      tr: 'ÜRÜN KONSEPTİ GELİŞTİRME',
      it: 'CONCETTO DI PRODOTTO'
    },
    desc: {
      ar: 'نحدد نوع المنتج وخصائصه وقوامه وألوانه وأدائه وشكله النهائي في السوق.',
      en: 'Defining the product type, characteristics, texture, colors, performance, and final market positioning.',
      tr: 'Ürün türünü, özelliklerini, dokusunu, renklerini, performansını ve pazardaki nihai konumunu belirliyoruz.',
      it: 'Definiamo il tipo di prodotto, le caratteristiche, la texture, i colori, le prestazioni e il posizionamento sul mercato.'
    }
  },
  {
    step: '03',
    icon: <FlaskConical className="w-3.5 h-3.5 text-amber-400" />,
    title: {
      ar: 'تطوير التركيبة',
      en: 'FORMULA DEVELOPMENT',
      tr: 'FORMÜL GELİŞTİRME',
      it: 'SVILUPPO DELLA FORMULA'
    },
    desc: {
      ar: 'نطوّر تركيبة تجميلية تتناسب مع متطلبات علامتك وااحتياجات جمهورك المستهدف.',
      en: 'Developing a cosmetic formula tailored to your brand requirements and target customers.',
      tr: 'Markanızın gereksinimlerine ve hedef müşterilerinizin ihtiyaçlarına özel kozmetik formülü geliştiriyoruz.',
      it: 'Sviluppiamo una formula cosmetica su misura per i requisiti del tuo marchio e i clienti target.'
    }
  },
  {
    step: '04',
    icon: <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />,
    title: {
      ar: 'العينات والاختبارات',
      en: 'SAMPLING & TESTING',
      tr: 'NUMUNE ALMA VE TEST',
      it: 'CAMPIONAMENTO E TEST'
    },
    desc: {
      ar: 'نجهز العينات ونختبر اللون والقوام والرائحة والاستخدام والتوافق والأداء والثبات.',
      en: 'Preparing and evaluating samples for color, texture, scent, application, compatibility, performance, and stability.',
      tr: 'Numuneleri hazırlıyor; renk, doku, koku, uygulama, uyumluluk, performans ve stabilite açısından değerlendiriyoruz.',
      it: 'Prepariamo e valutiamo i campioni per colore, texture, profumo, applicazione, compatibilità, prestazioni e stabilità.'
    }
  },
  {
    step: '05',
    icon: <Box className="w-3.5 h-3.5 text-amber-400" />,
    title: {
      ar: 'اختيار العبوة',
      en: 'PACKAGING SELECTION',
      tr: 'AMBALAJ SEÇİMİ',
      it: 'SELEZIONE DEL PACKAGING'
    },
    desc: {
      ar: 'نساعدك على اختيار العبوة والغطاء والمضخة وأداة الاستخدام والخامات والتشطيبات المناسبة.',
      en: 'Selecting the container, cap, pump, applicator, materials, finishes, and packaging components.',
      tr: 'Uygun kabı, kapağı, pompayı, aplikatörü, malzemeleri, kaplamaları ve ambalaj bileşenlerini seçiyoruz.',
      it: 'Selezioniamo il contenitore, il tappo, la pompa, l’applicatore, i materiali, le finiture e i componenti del packaging.'
    }
  },
  {
    step: '06',
    icon: <Palette className="w-3.5 h-3.5 text-amber-400" />,
    title: {
      ar: 'التصميم والاعتماد',
      en: 'DESIGN & APPROVAL',
      tr: 'TASARIM VE ONAY',
      it: 'DESIGN E APPROVAZIONE'
    },
    desc: {
      ar: 'نجهز تصميم العبوة والألوان والطباعة والملصقات والتفاصيل البصرية لاعتمادها قبل الإنتاج.',
      en: 'Preparing and approving the packaging design, colors, printing, labels, and visual details.',
      tr: 'Üretim öncesinde ambalaj tasarımını, renkleri, baskıyı, etiketleri ve görsel detayları hazırlayıp onaylıyoruz.',
      it: 'Prepariamo e approviamo il design del packaging, i colori, la stampa, le etichette e i dettagli visivi prima della produzione.'
    }
  },
  {
    step: '07',
    icon: <Factory className="w-3.5 h-3.5 text-amber-400" />,
    title: {
      ar: 'الإنتاج والتعبئة',
      en: 'MANUFACTURING & FILLING',
      tr: 'ÜRETİM VE DOLUM',
      it: 'PRODUZIONE E RIEMPIMENTO'
    },
    desc: {
      ar: 'نبدأ الإنتاج والتعبئة وفق التركيبة والمواصفات والعبوات والكميات المعتمدة.',
      en: 'Manufacturing and filling according to the approved formula, specifications, packaging, and quantities.',
      tr: 'Onaylanan formül, spesifikasyonlar, ambalaj ve miktarlara göre üretim ve doluma başlıyoruz.',
      it: 'Avviamo la produzione e il riempimento secondo la formula, le specifiche, il packaging e le quantità approvate.'
    }
  },
  {
    step: '08',
    icon: <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />,
    title: {
      ar: 'مراقبة الجودة',
      en: 'QUALITY CONTROL',
      tr: 'KALİTE KONTROLÜ',
      it: 'CONTROLLO QUALITÀ'
    },
    desc: {
      ar: 'نفحص التركيبة والعبوات والتعبئة والمظهر النهائي ونتأكد من مطابقة الدفعة للمواصفات.',
      en: 'Inspecting the formula, packaging, filling, appearance, and finished production batch.',
      tr: 'Formülü, ambalajı, dolumu, nihai görünümü denetliyor ve partinin spesifikasyonlara uygunluğunu doğruluyoruz.',
      it: 'Ispezioniamo la formula, il packaging, il riempimento, l’aspetto finale e verifichiamo la conformità del lotto.'
    }
  },
  {
    step: '09',
    icon: <PackageCheck className="w-3.5 h-3.5 text-amber-400" />,
    title: {
      ar: 'التغليف النهائي',
      en: 'FINAL PACKAGING',
      tr: 'NİHAİ AMBALAJLAMA',
      it: 'CONFEZIONAMENTO FINALE'
    },
    desc: {
      ar: 'يتم تجميع المنتجات وترميزها ووضع الملصقات وتغليفها وتجهيزها للعرض والتوزيع والشحن.',
      en: 'Assembling, coding, labeling, and preparing the products for display, distribution, and shipment.',
      tr: 'Ürünleri topluyor, kodluyor, etiketliyor, ambalajlıyor ve teşhir, dağıtım ile sevkiyata hazır hale getiriyoruz.',
      it: 'Assembliamo, codifichiamo, etichettiamo e prepariamo i prodotti per l’esposizione, la distribuzione e la spedizione.'
    }
  },
  {
    step: '10',
    icon: <Rocket className="w-3.5 h-3.5 text-amber-400" />,
    title: {
      ar: 'التسليم والانطلاق',
      en: 'DELIVERY & LAUNCH',
      tr: 'TESLİMAT VE LANSMAN',
      it: 'CONSEGNA E LANCIO'
    },
    desc: {
      ar: 'تصبح المنتجات جاهزة للتسليم والتوزيع والتصدير والانطلاق في الأسواق المستهدفة.',
      en: 'Preparing the finished products for delivery, distribution, export, and launch in the target markets.',
      tr: 'Nihai ürünler teslimat, dağıtım, ihracat ve hedef pazarlarda lansman için hazır hale gelir.',
      it: 'Prodotti finiti pronti per la consegna, distribuzione, esportazione e lancio nei mercati target.'
    }
  }
];

export default function BrandDevelopmentJourney({
  language,
  onOpenProjectModal,
  onOpenConsultation
}: BrandDevelopmentJourneyProps) {
  const isRtl = language === 'ar';
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'paged' | 'grid'>('paged');
  const [currentPage, setCurrentPage] = useState<number>(0);

  // 4 steps per page on paged view for desktop
  const stepsPerPage = 4;
  const totalPages = Math.ceil(JOURNEY_STAGES.length / stepsPerPage);

  const activeStage = JOURNEY_STAGES[activeStepIndex];

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNextStep = () => {
    setActiveStepIndex((prev) => {
      const next = (prev + 1) % JOURNEY_STAGES.length;
      setCurrentPage(Math.floor(next / stepsPerPage));
      return next;
    });
  };

  const handlePrevStep = () => {
    setActiveStepIndex((prev) => {
      const prevIdx = (prev - 1 + JOURNEY_STAGES.length) % JOURNEY_STAGES.length;
      setCurrentPage(Math.floor(prevIdx / stepsPerPage));
      return prevIdx;
    });
  };

  return (
    <div className="w-full bg-[#030303] text-white py-16 sm:py-24 relative overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isRtl ? 'dir-rtl' : 'dir-ltr'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-amber-400/30 bg-amber-400/5 mb-4">
            <Sparkle className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-400 text-xs font-sans tracking-[0.3em] uppercase font-bold">
              {isRtl ? 'مراحل تطوير العلامة التجارية' : 'BRAND DEVELOPMENT PROCESS'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white uppercase tracking-wider mb-6 leading-tight">
            {isRtl ? 'رحلة إنشاء علامتك التجارية' : 'YOUR BRAND DEVELOPMENT JOURNEY'}
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
            {isRtl
              ? 'من الفكرة الأولى وحتى المنتج النهائي الجاهز للسوق، تدير ASLAN INTERNATIONAL جميع مراحل تطوير علامتك التجميلية بدقة وسرية وتنفيذ احترافي متكامل.'
              : 'From the first idea to the final market-ready product, ASLAN INTERNATIONAL manages every stage of developing your cosmetic brand with precision, confidentiality, and integrated professional execution.'}
          </p>
        </div>

        {/* VIEW SELECTOR & CONTROLS (DESKTOP) */}
        <div className="hidden md:flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-sans uppercase tracking-widest font-bold">
            <span className="text-amber-400 font-serif text-lg">{JOURNEY_STAGES[activeStepIndex].step}</span>
            <span>/</span>
            <span>10</span>
            <span className="text-neutral-500 ml-2">
              {isRtl ? getTranslation(activeStage.title, language) : getTranslation(activeStage.title, language)}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode('paged')}
              className={`px-3 py-1.5 text-[11px] tracking-widest uppercase font-bold transition-all cursor-pointer ${
                viewMode === 'paged'
                  ? 'bg-amber-400 text-black'
                  : 'bg-zinc-900 text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              {isRtl ? 'عرض المراحل التفاعلي' : 'PAGED TIMELINE'}
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 text-[11px] tracking-widest uppercase font-bold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-amber-400 text-black'
                  : 'bg-zinc-900 text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              {isRtl ? 'عرض كافة المراحل (10)' : 'SHOW ALL 10 STAGES'}
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP TIMELINE DISPLAY (PAGED OR GRID)                       */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden md:block mb-12">
          {viewMode === 'paged' ? (
            <div>
              {/* Timeline Navigation Dots / Stage Bar */}
              <div className="flex items-center justify-between mb-8 relative">
                {/* Connecting Golden Line */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[1px] bg-gradient-to-r from-amber-400/10 via-amber-400/40 to-amber-400/10 z-0 pointer-events-none" />

                {JOURNEY_STAGES.map((stage, idx) => {
                  const isActive = idx === activeStepIndex;
                  return (
                    <button
                      key={stage.step}
                      onClick={() => setActiveStepIndex(idx)}
                      className={`relative z-10 flex flex-col items-center group cursor-pointer transition-all duration-300`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-xs font-bold transition-all duration-300 ${
                          isActive
                            ? 'bg-amber-400 text-black scale-110 shadow-[0_0_20px_rgba(251,191,36,0.6)] ring-4 ring-amber-400/20'
                            : 'bg-zinc-900 text-neutral-300 border border-amber-400/30 group-hover:border-amber-400 group-hover:scale-105'
                        }`}
                      >
                        {stage.step}
                      </div>
                      <span
                        className={`text-[10px] uppercase tracking-wider font-sans mt-2 transition-colors max-w-[80px] text-center line-clamp-1 ${
                          isActive ? 'text-amber-400 font-bold' : 'text-neutral-500 group-hover:text-neutral-300'
                        }`}
                      >
                        {getTranslation(stage.title, language)}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Paginated Cards Container with Side Navigation Arrows */}
              <div className="relative group/carousel">
                {/* Floating Left Arrow */}
                <button
                  onClick={isRtl ? handleNextPage : handlePrevPage}
                  className="absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-zinc-900/90 border border-amber-400/40 text-amber-400 hover:bg-amber-400 hover:text-black hover:scale-110 flex items-center justify-center transition-all shadow-xl cursor-pointer"
                  title={isRtl ? 'التالي' : 'Previous'}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Floating Right Arrow */}
                <button
                  onClick={isRtl ? handlePrevPage : handleNextPage}
                  className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-zinc-900/90 border border-amber-400/40 text-amber-400 hover:bg-amber-400 hover:text-black hover:scale-110 flex items-center justify-center transition-all shadow-xl cursor-pointer"
                  title={isRtl ? 'السابق' : 'Next'}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-4 gap-6 relative z-10 px-2">
                  {JOURNEY_STAGES.slice(
                    currentPage * stepsPerPage,
                    currentPage * stepsPerPage + stepsPerPage
                  ).map((stage, sliceIdx) => {
                    const actualIdx = currentPage * stepsPerPage + sliceIdx;
                    const isActive = actualIdx === activeStepIndex;

                    return (
                      <motion.div
                        key={stage.step}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: sliceIdx * 0.08 }}
                        onClick={() => setActiveStepIndex(actualIdx)}
                        className={`p-6 border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[260px] group rounded-[20px] bg-black ${
                          isActive
                            ? 'border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.15)] -translate-y-1'
                            : 'border-white/10 hover:border-amber-400/50 hover:bg-zinc-900/80 hover:-translate-y-1'
                        }`}
                      >
                        {/* Top Indicator */}
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span
                              className={`text-[30px] font-serif font-light transition-colors ${
                                isActive ? 'text-amber-400 font-normal' : 'text-neutral-500 group-hover:text-amber-300'
                              }`}
                            >
                              {stage.step}
                            </span>
                            <div className="p-1.5 border border-amber-400/30 bg-amber-400/10 rounded-sm flex items-center justify-center shrink-0">
                              {stage.icon}
                            </div>
                          </div>

                          <h3 className="text-[16px] sm:text-[17px] font-serif font-light text-white uppercase tracking-wider mb-3 leading-snug">
                            {getTranslation(stage.title, language)}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-neutral-300 font-light leading-relaxed mt-2 border-t border-white/5 pt-3">
                          {getTranslation(stage.desc, language)}
                        </p>

                        {/* Gold accent bar at bottom */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                            isActive ? 'bg-amber-400' : 'bg-transparent group-hover:bg-amber-400/40'
                          }`}
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Page Navigation Controls */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                  <button
                    onClick={handlePrevPage}
                    className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-amber-400 text-xs tracking-widest font-bold uppercase transition-colors text-neutral-300 hover:text-amber-400 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{isRtl ? 'المجموعة السابقة' : 'PREVIOUS STAGES'}</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }).map((_, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => setCurrentPage(pIdx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                          currentPage === pIdx ? 'bg-amber-400 w-6' : 'bg-neutral-700 hover:bg-neutral-500'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNextPage}
                    className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-amber-400 text-xs tracking-widest font-bold uppercase transition-colors text-neutral-300 hover:text-amber-400 cursor-pointer"
                  >
                    <span>{isRtl ? 'المجموعة التالية' : 'NEXT STAGES'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* ALL 10 STAGES GRID VIEW */
            <div className="grid grid-cols-5 gap-4">
              {JOURNEY_STAGES.map((stage, idx) => {
                const isActive = idx === activeStepIndex;
                return (
                  <motion.div
                    key={stage.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`p-5 border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[240px] group rounded-[20px] bg-black ${
                      isActive
                        ? 'border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.15)] -translate-y-1'
                        : 'border-white/10 hover:border-amber-400/50 hover:bg-zinc-900/80 hover:-translate-y-1'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[30px] font-serif text-amber-400">{stage.step}</span>
                        <div className="p-1.5 border border-amber-400/30 bg-amber-400/10 rounded-sm flex items-center justify-center shrink-0">{stage.icon}</div>
                      </div>
                      <h3 className="text-[16px] font-serif text-white uppercase tracking-wider mb-2 font-bold leading-snug">
                        {getTranslation(stage.title, language)}
                      </h3>
                    </div>

                    <p className="text-[11px] text-neutral-400 font-light leading-relaxed mt-2 border-t border-white/5 pt-2">
                      {getTranslation(stage.desc, language)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE VERTICAL TIMELINE DISPLAY                              */}
        {/* ------------------------------------------------------------- */}
        <div className="block md:hidden relative pl-6 pr-2 sm:pl-8 my-8">
          {/* Vertical Golden Connecting Line */}
          <div
            className={`absolute top-4 bottom-4 w-[2px] bg-gradient-to-b from-amber-400 via-amber-400/50 to-amber-400/10 ${
              isRtl ? 'right-3' : 'left-3'
            }`}
          />

          <div className="space-y-6">
            {JOURNEY_STAGES.map((stage, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    isRtl ? 'pr-6' : 'pl-6'
                  }`}
                >
                  {/* Step Node Circle on Vertical Line */}
                  <div
                    className={`absolute top-3 w-7 h-7 rounded-full flex items-center justify-center font-serif text-[11px] font-bold z-10 transition-all ${
                      isRtl ? '-right-3.5' : '-left-3.5'
                    } ${
                      isActive
                        ? 'bg-amber-400 text-black ring-4 ring-amber-400/30 scale-110'
                        : 'bg-zinc-900 text-amber-400 border border-amber-400/40'
                    }`}
                  >
                    {stage.step}
                  </div>

                  {/* Stage Card */}
                  <div
                    className={`p-5 border transition-all duration-300 rounded-[20px] bg-black ${
                      isActive
                        ? 'border-amber-400 shadow-lg'
                        : 'border-white/10 hover:border-amber-400/40'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-1.5 border border-amber-400/20 bg-amber-400/5">{stage.icon}</div>
                      <h3 className="text-[16px] font-serif font-light text-white uppercase tracking-wider font-bold">
                        {getTranslation(stage.title, language)}
                      </h3>
                    </div>

                    <p className="text-xs text-neutral-300 font-light leading-relaxed mt-2 border-t border-white/5 pt-2">
                      {getTranslation(stage.desc, language)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* ACTIVE STAGE HIGHLIGHT DETAIL BANNER                          */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-8 p-6 sm:p-8 border border-amber-400/30 bg-black relative overflow-hidden rounded-[20px]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-amber-400 text-black text-xs font-serif font-bold rounded-[6px]">
                  {isRtl ? `المرحلة ${activeStage.step}` : `STAGE ${activeStage.step}`}
                </span>
                <span className="text-[15px] text-amber-300 uppercase tracking-widest font-sans font-bold">
                  {getTranslation(activeStage.title, language)}
                </span>
              </div>
              <p className="text-sm text-neutral-200 font-light leading-relaxed">
                {getTranslation(activeStage.desc, language)}
              </p>
            </div>

            <div className="flex items-center gap-3 self-stretch md:self-auto justify-end border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
              <button
                onClick={onOpenProjectModal}
                className="px-6 py-3 bg-amber-400 text-black hover:bg-amber-300 font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap shadow-[0_0_15px_rgba(251,191,36,0.3)] rounded-[12px]"
              >
                <span>{isRtl ? 'ابدأ بهذه المرحلة' : 'START THIS STAGE'}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* BOTTOM ACTION BUTTONS                                         */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          
          {/* Primary Button */}
          <button
            id="start-brand-journey-cta"
            onClick={onOpenProjectModal}
            className="w-full sm:w-auto px-10 py-4 bg-amber-400 text-black hover:bg-amber-300 font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer shadow-[0_0_25px_rgba(251,191,36,0.35)] hover:shadow-[0_0_35px_rgba(251,191,36,0.5)] flex items-center justify-center gap-3 group rounded-[12px]"
          >
            <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
            <span>{isRtl ? 'ابدأ رحلة علامتك التجارية' : 'START YOUR BRAND JOURNEY'}</span>
            {isRtl ? (
              <ArrowLeft className="w-4 h-4 text-black transform group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="w-4 h-4 text-black transform group-hover:translate-x-1 transition-transform" />
            )}
          </button>

          {/* Secondary Button */}
          <button
            id="request-consultation-cta"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 border border-amber-400/40 bg-black text-amber-300 hover:bg-amber-400/10 hover:border-amber-400 font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 rounded-[12px]"
          >
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span>{isRtl ? 'اطلب استشارة' : 'REQUEST A CONSULTATION'}</span>
          </button>

        </div>

      </div>
    </div>
  );
}

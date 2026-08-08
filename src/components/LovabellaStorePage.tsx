import React from 'react';
import { motion } from 'motion/react';
import lovabellaLuxuryImg from '../assets/images/lovabella-luxury-beauty-store.png';
import { 
  X, ArrowLeft, ArrowRight, Globe, Building, Layout, Package, 
  Megaphone, Store, Sparkles, CheckCircle2, ShieldCheck, Star
} from 'lucide-react';
import { Language } from '../types';

interface LovabellaStorePageProps {
  language: Language;
  onBack: () => void;
  onStartStore: () => void;
}

export default function LovabellaStorePage({ language, onBack, onStartStore }: LovabellaStorePageProps) {
  const isRtl = language === 'ar';

  const STEPS = [
    {
      number: '01',
      icon: <Globe className="w-5 h-5 text-amber-400" />,
      title: {
        ar: 'اختر بلدك',
        en: 'Choose Your Country',
        tr: 'Ülkenizi Seçin',
        it: 'Scegli il tuo Paese'
      },
      description: {
        ar: 'اختر الدولة أو المدينة التي تريد افتتاح متجرك الفاخر فيها.',
        en: 'Select the country or key city where you wish to launch your store.',
        tr: 'Lüks mağazanızı açmak istediğiniz ülkeyi veya şehri seçin.',
        it: 'Seleziona il paese o la città chiave in cui desideri aprire il tuo negozio.'
      }
    },
    {
      number: '02',
      icon: <Building className="w-5 h-5 text-amber-400" />,
      title: {
        ar: 'مفهوم المتجر',
        en: 'Choose Store Type',
        tr: 'Mağaza Konsepti',
        it: 'Tipo di Negozio'
      },
      description: {
        ar: 'اختر النموذج المناسب لموقعك ورؤيتك الاستثمارية:',
        en: 'Select the layout concept that fits your business scale:',
        tr: 'Yatırım ölçeğinize uygun konsepti seçin:',
        it: 'Seleziona il modello adatto alla tua scala di investimento:'
      },
      bulletPoints: ['Boutique Store', 'Premium Store', 'Flagship Store']
    },
    {
      number: '03',
      icon: <Layout className="w-5 h-5 text-amber-400" />,
      title: {
        ar: 'التصميم والهوية',
        en: 'Store Design',
        tr: 'Tasarım & Kimlik',
        it: 'Design & Identità'
      },
      description: {
        ar: 'تقوم ASLAN بتصميم المتجر بالكامل بما في ذلك الديكور، الإضاءة، الأثاث، الهوية البصرية، وعرض المنتجات.',
        en: 'ASLAN designs the entire luxury space including 3D layout, lighting, custom furniture, and visual merchandising.',
        tr: 'ASLAN, 3D mimari, aydınlatma, özel mobilyalar ve görsel düzenleme dahil tüm mağazayı tasarlar.',
        it: 'ASLAN progetta l\'intero spazio di lusso compresi layout 3D, illuminazione, arredi personalizzati e merchandising visivo.'
      }
    },
    {
      number: '04',
      icon: <Package className="w-5 h-5 text-amber-400" />,
      title: {
        ar: 'توريد المنتجات',
        en: 'Product Supply',
        tr: 'Ürün Tedariği',
        it: 'Fornitura Prodotti'
      },
      description: {
        ar: 'نوفر لك تشكيلة LOVABELLA الكاملة، الإصدارات الجديدة، المواد الدعاية، العينات، والتغليف الفاخر.',
        en: 'Full supply of LOVABELLA skincare & cosmetics, new releases, POS displays, testers, and luxury packaging.',
        tr: 'Eksiksiz LOVABELLA ürün koleksiyonu, yeni seriler, teşhir stantları, numuneler ve lüks ambalajlar.',
        it: 'Fornitura completa di prodotti LOVABELLA, nuove collezioni, espositori, tester e packaging di lusso.'
      }
    },
    {
      number: '05',
      icon: <Megaphone className="w-5 h-5 text-amber-400" />,
      title: {
        ar: 'التدريب والتسويق',
        en: 'Training & Marketing',
        tr: 'Eğitim & Pazarlama',
        it: 'Formazione & Marketing'
      },
      description: {
        ar: 'تدريب الموظفين، دعم السوشيال ميديا، حملات تسويقية، استراتيجية إطلاق، واستشارات للأعمال.',
        en: 'Staff training, social media assets, marketing launch campaigns, and continuous business consulting.',
        tr: 'Personel eğitimi, sosyal medya içerikleri, lansman pazarlama kampanyaları ve sürekli danışmanlık.',
        it: 'Formazione del personale, supporto social media, campagne di lancio e consulenza aziendale continua.'
      }
    },
    {
      number: '06',
      icon: <Store className="w-5 h-5 text-amber-400" />,
      title: {
        ar: 'افتح متجرك',
        en: 'Open Your Store',
        tr: 'Mağazanızı Açın',
        it: 'Apri il Tuo Negozio'
      },
      description: {
        ar: 'نرافقك خطوة بخطوة حتى يوم الافتتاح الكبير وتشغيل متجرك بنجاح.',
        en: 'We guide you step-by-step through the grand opening and ongoing operational success.',
        tr: 'Görkemli açılış gününüze ve başarılı işletim sürecine kadar adım adım yanınızdayız.',
        it: 'Ti guidiamo passo dopo passo fino all\'inaugurazione e al successo operativo continuo.'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden select-none" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Background ambient glowing light */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-amber-400/5 blur-[180px] pointer-events-none" />

      {/* Navigation Top Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-12 relative z-20">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/80 border border-amber-400/30 hover:border-amber-400 text-neutral-300 hover:text-amber-400 text-xs font-sans tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg"
        >
          {isRtl ? <ArrowRight className="w-4 h-4 text-amber-400" /> : <ArrowLeft className="w-4 h-4 text-amber-400" />}
          <span>{isRtl ? 'العودة لخيارات الشراكة' : 'Back to Partnership Models'}</span>
        </button>

        <div className="flex items-center gap-2 text-amber-400 text-xs font-sans tracking-[0.25em] uppercase font-bold">
          <Sparkles className="w-4 h-4" />
          <span>LOVABELLA RETAIL PROGRAM</span>
        </div>
      </div>

      {/* Main Luxury Header Banner */}
      <div className="max-w-7xl mx-auto relative rounded-[32px] sm:rounded-[40px] overflow-hidden border border-amber-400/30 bg-[#080808] mb-16 shadow-[0_0_60px_rgba(212,175,55,0.15)]">
        
        {/* Background Store Interior Image */}
        <div className="relative w-full h-[320px] sm:h-[420px] overflow-hidden">
          <img
            src={lovabellaLuxuryImg}
            alt="LOVABELLA Beauty Store"
            className="w-full h-full object-cover opacity-45 filter brightness-90"
            onError={(e) => {
              const img = e.currentTarget;
              img.onerror = null;
              img.src = '/meeting-room.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent" />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                marginTop: '0px',
                paddingTop: '3px',
                marginBottom: '119px',
              }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-400 text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase font-bold mx-auto"
            >
              <Star className="w-3.5 h-3.5 text-amber-400" />
              <span>POWERED BY ASLAN INTERNATIONAL</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: '47px',
                paddingTop: '0px',
                marginBottom: '94px',
                textAlign: 'center',
                lineHeight: '61px',
                borderRadius: '0px',
                color: 'transparent',
                WebkitTextStroke: '1.2px rgba(255, 255, 255, 0.65)',
              }}
              className="font-serif font-light tracking-wider uppercase drop-shadow-sm"
            >
              LOVABELLA BEAUTY STORE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                paddingBottom: '0px',
                height: '29.25px',
              }}
              className="text-sm sm:text-lg text-amber-200/90 font-light max-w-2xl mx-auto leading-relaxed"
            >
              {isRtl
                ? 'ابنِ عملك التجاري الفاخر في عالم التجميل بقوة ودعم ASLAN.'
                : 'Build your own luxury beauty business powered by ASLAN.'}
            </motion.p>
          </div>
        </div>
      </div>

      {/* 6-STEP JOURNEY SECTION */}
      <div className="max-w-7xl mx-auto relative z-10 mb-20">
        
        <div className="text-center mb-14">
          <span className="text-amber-400 text-xs font-sans tracking-[0.35em] uppercase font-bold block mb-2">
            {isRtl ? 'رحلة افتتاح متجرك' : 'STORE OPENING ROADMAP'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-white uppercase tracking-wide">
            {isRtl ? 'خطوات الانضمام إلى شبكة LOVABELLA' : 'THE 6-STEP LOVABELLA PARTNERSHIP JOURNEY'}
          </h2>
          <div className="w-16 h-[1.5px] bg-amber-400 mx-auto mt-4" />
        </div>

        {/* Desktop/Tablet Connecting Golden Line */}
        <div className="hidden lg:block relative mb-12">
          <div className="absolute top-1/2 inset-x-12 h-[2px] bg-gradient-to-r from-amber-400/20 via-amber-400 to-amber-400/20 -translate-y-1/2 z-0" />
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#0b0b0b] border border-white/10 hover:border-amber-400/60 rounded-[24px] p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:-translate-y-1"
            >
              <div>
                {/* Step Header with Number Pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition-colors duration-300">
                    {step.icon}
                  </div>
                  <span className="text-xs font-sans font-black tracking-widest text-amber-400 group-hover:text-amber-300">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif font-light text-white uppercase tracking-wide mb-3 group-hover:text-amber-400 transition-colors">
                  {step.title[language] || step.title['en']}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-3">
                  {step.description[language] || step.description['en']}
                </p>

                {/* Optional Bullets */}
                {step.bulletPoints && (
                  <ul className="space-y-1 mt-2">
                    {step.bulletPoints.map((bp) => (
                      <li key={bp} className="text-[10px] text-amber-300/90 font-sans tracking-wide flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-amber-400" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-sans text-neutral-500 tracking-wider uppercase">
                <span>STEP {step.number}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/40 group-hover:text-amber-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Large Bottom CTA Action Bar */}
      <div className="max-w-4xl mx-auto text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="p-8 sm:p-12 rounded-[32px] bg-gradient-to-b from-[#120f0a] to-[#080808] border-2 border-amber-400/50 shadow-[0_0_50px_rgba(212,175,55,0.2)]"
        >
          <h3 className="text-2xl sm:text-3xl font-serif font-light text-white uppercase tracking-wider mb-3">
            {isRtl ? 'هل أنت مستعد لإطلاق متجرك الفاخر؟' : 'READY TO LAUNCH YOUR LUXURY STORE?'}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl mx-auto mb-8">
            {isRtl
              ? 'تواصل مع فريق تطوير الأعمال في ASLAN لمناقشة التفاصيل وتحديد الموقع الجغرافي الخاص بك.'
              : 'Contact ASLAN business development team to discuss location availability and franchising terms.'}
          </p>

          <button
            onClick={onStartStore}
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-sans font-black text-sm tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 mx-auto shadow-[0_10px_35px_rgba(212,175,55,0.4)] hover:scale-105 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-black" />
            <span>{isRtl ? 'ابدأ متجرك LOVABELLA الآن' : 'START YOUR LOVABELLA STORE'}</span>
            {isRtl ? <ArrowLeft className="w-5 h-5 text-black" /> : <ArrowRight className="w-5 h-5 text-black" />}
          </button>
        </motion.div>
      </div>

    </div>
  );
}

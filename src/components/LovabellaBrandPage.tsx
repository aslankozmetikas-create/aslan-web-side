import React from 'react';
import { motion } from 'motion/react';
import lovabellaLuxuryImg from '../assets/images/lovabella-luxury-beauty-store.png';
import { 
  ArrowLeft, ArrowRight, ExternalLink, Globe, ShieldCheck, 
  Sparkles, Award, Factory, CheckCircle2, PackageCheck, 
  Layers, ChevronRight, Store, Heart
} from 'lucide-react';
import { Language } from '../types';

interface LovabellaBrandPageProps {
  language: Language;
  onBack: () => void;
  onOpenStoreProgram?: () => void;
}

export default function LovabellaBrandPage({
  language,
  onBack,
  onOpenStoreProgram
}: LovabellaBrandPageProps) {
  const isRtl = language === 'ar';

  const t = {
    back: language === 'ar' ? 'رجوع' : language === 'tr' ? 'GERİ' : language === 'it' ? 'INDIETRO' : 'BACK',
    officialWebsite: language === 'ar' ? 'الموقع الرسمي' : language === 'tr' ? 'Resmî Web Sitesi' : language === 'it' ? 'Sito Ufficiale' : 'Official Website',
    heroTag: language === 'ar' ? 'ماركة التجميل الفاخرة' : language === 'tr' ? 'LÜKS KOZMETİK MARKASI' : language === 'it' ? 'BRAND DI COSMETICA DI LUSSO' : 'LUXURY COSMETICS BRAND',
    heroTitle: 'LOVABELLA MILANO',
    heroSubtitle: language === 'ar' 
      ? 'لمسة الجمال الفاخرة المبتكرة وفق أعلى معايير التجميل الإيطالية والأوروبية.'
      : language === 'tr'
      ? 'İtalyan ve Avrupa standartlarında üretilen zamansız lüks güzellik dokunuşu.'
      : language === 'it'
      ? 'Un tocco di bellezza di lusso senza tempo realizzato secondo standard italiani ed europei.'
      : 'Timeless luxury beauty touch crafted under highest Italian & European standards.',
    exploreWebsite: language === 'ar' ? 'زيارة موقع الماركة الرسمي' : language === 'tr' ? 'Marka Sitesini Ziyaret Et' : language === 'it' ? 'Visita il Sito del Brand' : 'Visit Official Brand Site',
    
    // Manufacturing details
    mfgBadge: language === 'ar' ? 'مكان وتكنولوجيا التصنيع' : language === 'tr' ? 'ÜRETİM VE TEKNOLOJİ' : language === 'it' ? 'PRODUZIONE E TECNOLOGIA' : 'MANUFACTURING & TECHNOLOGY',
    mfgTitle: language === 'ar' ? 'أين وكيف يتم تصنيع منتجات LOVABELLA؟' : language === 'tr' ? 'LOVABELLA Ürünleri Nerede Üretiliyor?' : language === 'it' ? 'Dove vengono prodotti i cosmetici LOVABELLA?' : 'Where & How LOVABELLA Products Are Crafted',
    mfgDesc: language === 'ar'
      ? 'تُصنّع كافة منتجات LOVABELLA في مجمعات تصنيع أسلان إنترناشونال (ASLAN International Holding) المتطورة في إسطنبول، وفق ترخيص ومعايير الجودة الأوروبية GMP ISO 22716. تعتمد التركيبات على مكونات أولية فاخرة مستوردة مباشرة من إيطاليا وفرنسا وسويسرا.'
      : language === 'tr'
      ? 'Tüm LOVABELLA ürünleri, ASLAN International Holding’in İstanbul’daki GMP ISO 22716 sertifikalı yüksek teknoloji tesislerinde üretilmektedir. Formüller İtalya, Fransa ve İsviçre’den ithal edilen birinci sınıf hammaddelerle geliştirilir.'
      : language === 'it'
      ? 'Tutti i prodotti LOVABELLA sono realizzati negli stabilimenti ad alta tecnologia di ASLAN International Holding a Istanbul, certificati GMP ISO 22716. Le formule sono sviluppate con materie prime di altissima qualità importate da Italia, Francia e Svizzera.'
      : 'All LOVABELLA products are manufactured at ASLAN International Holding’s high-tech GMP ISO 22716 certified facilities in Istanbul. Formulations incorporate premium raw ingredients imported directly from Italy, France, and Switzerland.',

    mfgPoints: [
      {
        title: language === 'ar' ? 'غرف معقمة بنسبة 100%' : language === 'tr' ? '%100 Steril Temiz Oda' : language === 'it' ? 'Cleanroom Sterile al 100%' : '100% ISO Cleanroom Manufacturing',
        desc: language === 'ar' ? 'أنظمة بيئية مغلقة لمنع التلوث وضمان النقاء التام للمستحضرات.' : language === 'tr' ? 'Kontaminasyonu önleyen tam otomatik üretim ortamı.' : language === 'it' ? 'Ambiente automatizzato per prevenire ogni contaminazione.' : 'Fully automated sterile environments preventing contamination.'
      },
      {
        title: language === 'ar' ? 'تركيبات إيطالية حصرية' : language === 'tr' ? 'Özel İtalyan Formülasyonları' : language === 'it' ? 'Formulazioni Italiane Esclusive' : 'Exclusive Italian Formulations',
        desc: language === 'ar' ? 'تطوير القوام والألوان في مختبرات التجميل المتقدمة لضمان الثبات والنعومة.' : language === 'tr' ? 'İtalyan uzmanlığıyla geliştirilen uzun süre kalıcı ve ipeksi dokular.' : language === 'it' ? 'Consistenze e colori a lunga durata sviluppati con maestria italiana.' : 'Long-lasting silky textures and shades engineered by expert cosmetic chemists.'
      },
      {
        title: language === 'ar' ? 'مفحوصة جلدياً وخالية من السُميات' : language === 'tr' ? 'Dermatolojik Olarak Test Edilmiş' : language === 'it' ? 'Testato Dermatologicamente' : 'Dermatologically Tested & Cruelty-Free',
        desc: language === 'ar' ? 'آمنة تماماً على البشرة الحساسة مع اختبارات السلامة الأوروبية الشاملة.' : language === 'tr' ? 'Hassas ciltler için %100 güvenli, Avrupa güvenlik testlerinden geçmiş.' : language === 'it' ? 'Sicuro al 100% per pelli sensibili, testato secondo standard europei.' : '100% safe for sensitive skin with comprehensive EU safety dossiers.'
      }
    ],

    // Global Registrations & Compliance
    regBadge: language === 'ar' ? 'التسجيلات والاعتمادات العالمية' : language === 'tr' ? 'KÜRESEL KAYITLAR VE BELGELER' : language === 'it' ? 'REGISTRAZIONI E COMPLIANCE GLOBALE' : 'GLOBAL REGISTRATIONS & COMPLIANCE',
    regTitle: language === 'ar' ? 'معتمدة ومسجلة في الموانئ والهيئات الدولية' : language === 'tr' ? 'Uluslararası Sağlık ve İhracat Portallarında Kayıtlı' : language === 'it' ? 'Registrato nei Portali Sanitari e di Export Internazionali' : 'Registered Across Global Health & Export Portals',
    regDesc: language === 'ar'
      ? 'منتجات LOVABELLA مسجلة رسمياً ومطابقة للمواصفات في أكثر من 30 دولة حول العالم، وتتضمن كافة ملفات السلامة القانونية (PIF).'
      : language === 'tr'
      ? 'LOVABELLA ürünleri dünya genelinde 30’dan fazla ülkede resmi olarak kayıtlı ve CPNP dâhil tüm güvenlik dosyalarına (PIF) sahiptir.'
      : language === 'it'
      ? 'I prodotti LOVABELLA sono registrati ufficialmente in oltre 30 paesi con dossier di sicurezza completi (PIF) tra cui il portale CPNP.'
      : 'LOVABELLA products hold official market registrations in over 30 countries with full Product Information Files (PIF) and safety dossiers.',

    registrations: [
      {
        code: 'CPNP',
        title: language === 'ar' ? 'بوابة إخطار مستحضرات التجميل الأوروبية (CPNP)' : language === 'tr' ? 'Avrupa Birliği Kozmetik Bildirim Portalı (CPNP)' : language === 'it' ? 'Portale Europeo CPNP (Unione Europea)' : 'EU Cosmetics Products Notification Portal (CPNP)',
        desc: language === 'ar' ? 'مصرّح بالبيع والتداول الحر داخل دول الاتحاد الأوروبي.' : language === 'tr' ? 'Tüm AB ülkelerinde serbest dolaşım ve satış onayı.' : language === 'it' ? 'Autorizzazione alla libera circolazione in tutti i paesi UE.' : 'Free circulation and sale approval across all European Union member states.'
      },
      {
        code: 'FDA',
        title: language === 'ar' ? 'تسجيل إدارة الغذاء والدواء الأمريكية (FDA)' : language === 'tr' ? 'ABD FDA Tesis ve Ürün Kaydı' : language === 'it' ? 'Registrazione FDA USA' : 'US FDA Facility & Product Registration',
        desc: language === 'ar' ? 'مسجلة ومطابقة للأنظمة والأكواد الأمريكية.' : language === 'tr' ? 'ABD pazarı standartlarına tam uygunluk.' : language === 'it' ? 'Piena conformità agli standard del mercato statunitense.' : 'Compliant with US market regulations and MoCRA guidelines.'
      },
      {
        code: 'MOH / UTS',
        title: language === 'ar' ? 'وزارة الصحة ونظام ÜTS' : language === 'tr' ? 'T.C. Sağlık Bakanlığı ÜTS Kaydı' : language === 'it' ? 'Ministero della Salute & ÜTS' : 'Ministry of Health & Product Tracking System (ÜTS)',
        desc: language === 'ar' ? 'مسجلة برقم باريو كود رسمي ومعتمدة صحياً.' : language === 'tr' ? 'Resmi barkodlu, onaylı ve izlenebilir ürün kaydı.' : language === 'it' ? 'Registrazione ufficiale con codice a barre tracciabile.' : 'Fully barcoded and verified under official health portals.'
      },
      {
        code: 'HALAL & ISO',
        title: language === 'ar' ? 'شهادات حلال و ISO 22716 / ISO 9001' : language === 'tr' ? 'Helal Sertifikası ve ISO 22716 GMP' : language === 'it' ? 'Certificazione Halal & ISO 22716' : 'Halal Certification & ISO 22716 GMP',
        desc: language === 'ar' ? 'خالية من المشتقات الخنزيرية وتتبع أعلى معايير الجودة.' : language === 'tr' ? 'Uluslararası kalite ve helal üretim standartları.' : language === 'it' ? 'Standard di produzione halal e qualità internazionale.' : 'Certified halal production and international quality management.'
      }
    ],

    // Collections preview
    collectionsBadge: language === 'ar' ? 'سلسلة المنتجات الفاخرة' : language === 'tr' ? 'ÖNE ÇIKAN KOLEKSİYONLAR' : language === 'it' ? 'COLLEZIONI IN EVIDENZA' : 'FEATURED COLLECTIONS',
    collectionsTitle: language === 'ar' ? 'تشكيلة LOVABELLA MILANO' : language === 'tr' ? 'LOVABELLA MILANO Ürün Serileri' : language === 'it' ? 'Serie di Prodotti LOVABELLA MILANO' : 'LOVABELLA MILANO Signature Series',
    seriesList: [
      {
        title: 'Drama & Moody Series',
        desc: language === 'ar' ? 'سلسلة المكياج والأساس الدراماتيكية بتغطية مخملية إنسيابية.' : language === 'tr' ? 'Yoğun pürüzsüz kapatıcılık ve mat/ışıltılı dokular sunan özel seri.' : language === 'it' ? 'Serie speciale con copertura vellutata e finiture opache o luminose.' : 'High-pigment velvet foundation and moody lipsticks for flawless coverage.',
        tag: 'TRENDING'
      },
      {
        title: 'Secret Touch Cosmetics',
        desc: language === 'ar' ? 'مستحضرات العناية واللمسة السرية المضيئة للبشرة.' : language === 'tr' ? 'Cilde doğal ışıltı ve pürüzsüzlük kazandıran gizli dokunuş koleksiyonu.' : language === 'it' ? 'Collezione secret touch per donare alla pelle una luminosità naturale.' : 'Illuminating powders, serums, and secret touch skin enhancers.',
        tag: 'BESTSELLER'
      },
      {
        title: 'Luxury Perfume & Elixirs',
        desc: language === 'ar' ? 'عطور نادرة بتركيز عالي وثبات إيطالي تدوم طويلاً.' : language === 'tr' ? 'Uzun süre kalıcı, özel esanslarla hazırlanan lüks parfüm serisi.' : language === 'it' ? 'Parfums de luxe a lunga durata formulati con essenze pregiate.' : 'Rare long-lasting eau de parfum formulations with Italian essential oils.',
        tag: 'EXCLUSIVE'
      }
    ],

    // CTA Bottom Box
    ctaTitle: language === 'ar' ? 'اكتشف المزيد على موقع LOVABELLA الرسمي' : language === 'tr' ? 'LOVABELLA Resmi İnternet Mağazasını Keşfedin' : language === 'it' ? 'Scopri di Più sul Sito Ufficiale LOVABELLA' : 'Discover More on Official LOVABELLA Online Store',
    ctaDesc: language === 'ar' ? 'تصفح قائمة المنتجات الكاملة، درجات الألوان، ومجموعات التجميل الفاخرة مباشرة على الموقع الرسمي.' : language === 'tr' ? 'Eksiksiz ürün kataloğunu, renk tonlarını ve koleksiyonları doğrudan resmi web sitesinde inceleyin.' : language === 'it' ? 'Sfoglia il catalogo completo, le tonalità e le collezioni direttamente sul sito ufficiale.' : 'Explore the complete product catalog, color swatches, and seasonal collections directly on the official website.',
    visitButton: language === 'ar' ? 'الانتقال إلى LOVABELLA.COM.TR' : language === 'tr' ? 'LOVABELLA.COM.TR\'ye Git' : language === 'it' ? 'Vai su LOVABELLA.COM.TR' : 'Go to LOVABELLA.COM.TR',
    storeProgramBtn: language === 'ar' ? 'برنامج افتتاح متجر LOVABELLA' : language === 'tr' ? 'LOVABELLA Mağaza Programı' : language === 'it' ? 'Programma Store LOVABELLA' : 'LOVABELLA Retail Store Franchise'
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden select-none" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Background ambient lighting accents */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-rose-900/10 via-amber-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-rose-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute top-2/3 left-0 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[160px] pointer-events-none" />

      {/* Top Navigation Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-10 relative z-20">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/80 border border-white/10 hover:border-amber-400 text-neutral-300 hover:text-amber-400 text-xs font-sans tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg"
        >
          {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{t.back}</span>
        </button>

        <a
          href="https://www.lovabella.com.tr/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-400/40 hover:border-amber-400 text-amber-300 hover:text-amber-200 text-xs font-sans tracking-widest uppercase font-bold transition-all duration-300 shadow-lg group"
        >
          <span>{t.officialWebsite}</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* HERO BANNER SHOWCASE */}
      <div className="max-w-7xl mx-auto relative z-10 mb-20">
        <div className="relative w-full rounded-3xl overflow-hidden border border-amber-400/20 bg-gradient-to-b from-zinc-900 to-black p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          {/* Background Image / Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={lovabellaLuxuryImg} 
              alt="LOVABELLA Milano Secret Touch" 
              className="w-full h-full object-cover opacity-30 filter brightness-90 scale-105"
              onError={(e) => {
                const img = e.currentTarget;
                img.onerror = null;
                img.src = '/meeting-room.png';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
          </div>

          <div className="relative z-10 max-w-2xl">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-300 text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase font-bold mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.heroTag}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-wider uppercase text-white mb-4"
              style={{
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.85)',
              }}
            >
              {t.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-amber-100/80 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-xl"
            >
              {t.heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="https://www.lovabella.com.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-sans font-bold text-xs tracking-[0.2em] uppercase hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer"
              >
                <span>{t.exploreWebsite}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {onOpenStoreProgram && (
                <button
                  onClick={onOpenStoreProgram}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 border border-amber-400/30 hover:border-amber-400 text-amber-300 text-xs font-sans tracking-widest uppercase transition-all duration-300 cursor-pointer"
                >
                  <Store className="w-4 h-4" />
                  <span>{t.storeProgramBtn}</span>
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* MANUFACTURING & TECHNOLOGY SECTION */}
      <div className="max-w-7xl mx-auto relative z-10 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-400 text-xs font-sans tracking-[0.3em] uppercase font-bold block mb-3">
            {t.mfgBadge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-light uppercase tracking-wider text-white mb-4">
            {t.mfgTitle}
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
            {t.mfgDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.mfgPoints.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-amber-400/10 border border-amber-400/20 w-fit rounded-xl mb-5">
                  {idx === 0 && <Factory className="w-6 h-6 text-amber-400" />}
                  {idx === 1 && <Sparkles className="w-6 h-6 text-amber-400" />}
                  {idx === 2 && <ShieldCheck className="w-6 h-6 text-amber-400" />}
                </div>
                <h3 className="text-lg font-serif font-light text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GLOBAL REGISTRATIONS & COMPLIANCE */}
      <div className="max-w-7xl mx-auto relative z-10 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-black border border-amber-400/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-3xl mb-12">
            <span className="text-amber-400 text-xs font-sans tracking-[0.3em] uppercase font-bold block mb-3">
              {t.regBadge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light uppercase tracking-wider text-white mb-4">
              {t.regTitle}
            </h2>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              {t.regDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.registrations.map((reg, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/80 border border-white/5 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-[10px] font-mono tracking-widest font-bold uppercase inline-block mb-4">
                    {reg.code}
                  </span>
                  <h4 className="text-sm font-serif text-white font-medium mb-2 leading-snug">
                    {reg.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {reg.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-emerald-400 text-[11px] font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified & Approved</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED COLLECTIONS PREVIEW */}
      <div className="max-w-7xl mx-auto relative z-10 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-rose-400 text-xs font-sans tracking-[0.3em] uppercase font-bold block mb-3">
            {t.collectionsBadge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-light uppercase tracking-wider text-white">
            {t.collectionsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.seriesList.map((series, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900 to-black border border-white/10 hover:border-rose-400/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-300 text-[9px] font-sans tracking-widest uppercase font-bold">
                    {series.tag}
                  </span>
                  <Heart className="w-4 h-4 text-neutral-600 group-hover:text-rose-400 transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-light text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {series.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {series.desc}
                </p>
              </div>

              <a
                href="https://www.lovabella.com.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans text-amber-400 group-hover:text-amber-300 font-bold uppercase tracking-wider transition-colors"
              >
                <span>{language === 'ar' ? 'عرض على الموقع' : 'View on Store'}</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM DIRECT LINK CTA BOX */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-r from-amber-950/40 via-black to-rose-950/40 border border-amber-400/30 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-white uppercase tracking-wider mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-neutral-300 text-sm font-light leading-relaxed mb-8">
              {t.ctaDesc}
            </p>

            <a
              href="https://www.lovabella.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-black font-sans font-bold text-xs tracking-[0.25em] uppercase hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/20 cursor-pointer"
            >
              <span>{t.visitButton}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

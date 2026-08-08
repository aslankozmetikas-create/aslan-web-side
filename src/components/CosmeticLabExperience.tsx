import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  RefreshCw, Play, Shield, FlaskConical, Droplet, Layers, HelpCircle, 
  Settings, Loader2, ChevronLeft, ChevronRight, Lock, Printer, Package, Clock,
  Calendar, Wrench
} from 'lucide-react';
import { Language } from '../types';

interface ProductInfo {
  id: string;
  type: string;
  names: {
    en: string;
    ar: string;
    tr: string;
    it: string;
  };
  imageUrl: string;
  glowColor: string;
  glowHex: string;
  isSvg?: boolean;
}

interface CosmeticLabExperienceProps {
  language: Language;
}

// Complete 4-language translations for high-end localization
const LOCAL_TRANSLATIONS = {
  en: {
    weManufacture: 'WE MANUFACTURE',
    beautyBeyond: 'BEAUTY BEYOND EXPECTATIONS',
    desc: 'Advanced cosmetic manufacturing solutions with premium quality and private label expertise.',
    cta: 'DISCOVER OUR CAPABILITIES →',
    productionCycle: 'PRODUCTION RUNTIME',
    live: 'LIVE',
    manufacturingProcess: 'MANUFACTURING PROCESS',
    inProduction: 'IN PRODUCTION',
    activeLine: 'ACTIVE ASSEMBLY',
    formulation: 'FORMULATION',
    mixing: 'MIXING',
    filling: 'FILLING',
    capping: 'CAPPING',
    printing: 'PRINTING',
    packaging: 'PACKAGING',
    dailyProductionCount: 'DAILY PRODUCTION YIELD',
    systemChronograph: 'CURRENT FACTORY TIME',
    realtimeTelemetry: 'REAL-TIME TELEMETRY',
    unitsLabel: 'UNITS',
    sterileMix: 'STERILE FORMULA TEMP',
    nozzlePressure: 'INJECTION PRESSURE',
    airPurity: 'AIR CLEANLINESS INDEX',
    raw_prep: 'Raw Material Prep',
    homogenization: 'Vacuum Homogenization',
    quality_inspection: 'Quality Inspection',
    finished_goods: 'Finished Goods',
    todayRuns: 'TODAY\'S PRODUCTION RUNS',
    tomorrowQueue: 'TOMORROW\'S QUEUE',
    running: 'RUNNING',
    scheduled: 'SCHEDULED',
    completed: 'COMPLETED',
    sundayStatus: 'Factory Status: Closed (Sunday)',
    maintenanceDay: 'Weekly Maintenance / Non-Production Day',
    noProductionScheduled: 'No Production Scheduled Today',
    nextShiftInfo: 'Next shift scheduled for Monday at 09:00 AM',
    factoryIdle: 'FACTORY STANDBY',
  },
  ar: {
    weManufacture: 'نحن نصنع',
    beautyBeyond: 'جمال يفوق التوقعات',
    desc: 'حلول تصنيع مستحضرات تجميل متطورة بجودة استثنائية وخبرة متكاملة للعلامات التجارية الخاصة.',
    cta: 'اكتشف قدراتنا التصنيعية ←',
    productionCycle: 'مدة تشغيل الإنتاج الحالي',
    live: 'مباشر',
    manufacturingProcess: 'عمليات التصنيع',
    inProduction: 'قيد الإنتاج المباشر',
    activeLine: 'خط الإنتاج النشط',
    formulation: 'صياغة التركيبة',
    mixing: 'خلط ومجانسة',
    filling: 'التعبئة الآلية',
    capping: 'تركيب الأغطية',
    printing: 'الطباعة والترميز',
    packaging: 'التغليف النهائي',
    dailyProductionCount: 'معدل الإنتاج اليومي الفعلي',
    systemChronograph: 'توقيت المصنع الحالي',
    realtimeTelemetry: 'المؤشرات التشغيلية للمصنع',
    unitsLabel: 'وحدة جاهزة',
    sterileMix: 'حرارة الخلط والدمج',
    nozzlePressure: 'ضغط الحقن والتعبئة',
    airPurity: 'نقاء هواء بيئة التصنيع',
    raw_prep: 'تحضير المواد الأولية',
    homogenization: 'التجنيس تحت تفريغ الهواء',
    quality_inspection: 'فحص الجودة والمطابقة',
    finished_goods: 'المنتجات الجاهزة للشحن',
    todayRuns: 'جدول الإنتاج اليومي المباشر',
    tomorrowQueue: 'قائمة انتظار الغد المجدولة',
    running: 'قيد التشغيل',
    scheduled: 'مجدول',
    completed: 'مكتمل',
    sundayStatus: 'حالة المصنع: مغلق (الأحد)',
    maintenanceDay: 'أعمال الصيانة الأسبوعية / يوم غير إنتاجي',
    noProductionScheduled: 'لا يوجد إنتاج مجدول اليوم',
    nextShiftInfo: 'تبدأ مناوبة العمل القادمة يوم الإثنين في تمام الساعة 09:00 صباحاً',
    factoryIdle: 'المصنع في وضع الاستعداد',
  },
  tr: {
    weManufacture: 'ÜRETİYORUZ',
    beautyBeyond: 'BEKLENTİLERİN ÖTESİNDE GÜZELLİK',
    desc: 'Üstün kalite ve özel marka uzmanlığı ile gelişmiş kozmetik üretim çözümleri.',
    cta: 'YETENEKLERİMİZİ KEŞFEDİN →',
    productionCycle: 'ÜRETİM SÜRESİ',
    live: 'CANLI',
    manufacturingProcess: 'ÜRETİM SÜRECİ',
    inProduction: 'ÜRETİMDE',
    activeLine: 'AKTİF HAT',
    formulation: 'FORMÜLASYON',
    mixing: 'KARIŞTIRMA',
    filling: 'DOLUM',
    capping: 'KAPAKLAMA',
    printing: 'YAZDIRMA',
    packaging: 'PAKETLEME',
    dailyProductionCount: 'GÜNLÜK ÜRETİM MİKTARI',
    systemChronograph: 'GÜNCEL FABRİKA SAATİ',
    realtimeTelemetry: 'ANLIK TELEMETRİ VERİLERİ',
    unitsLabel: 'ADET',
    sterileMix: 'STERİL FORMÜL SICAKLIĞI',
    nozzlePressure: 'ENJEKSİYON BASINCI',
    airPurity: 'HAVA TEMİZLİK ENDEKSİ',
    raw_prep: 'Hammadde Hazırlık',
    homogenization: 'Vakum Homojenizasyonu',
    quality_inspection: 'Kalite Kontrol',
    finished_goods: 'Sevkiyat Hazırlığı',
    todayRuns: 'BUGÜNKÜ ÜRETİM PLANI',
    tomorrowQueue: 'YARINKİ SIRALAMA',
    running: 'AKTİF',
    scheduled: 'PLANLANDI',
    completed: 'TAMAMLANDI',
    sundayStatus: 'Fabrika Durumu: Kapalı (Pazar)',
    maintenanceDay: 'Haftalık Bakım / Üretim Dışı Gün',
    noProductionScheduled: 'Bugün Üretim Planlanmadı',
    nextShiftInfo: 'Bir sonraki vardiya Pazartesi saat 09:00\'da başlayacaktır',
    factoryIdle: 'FABRİKA BEKLEMEDE',
  },
  it: {
    weManufacture: 'PRODUCIAMO',
    beautyBeyond: 'BELLEZZA OLTRE LE ASPETTATIVE',
    desc: 'Soluzioni avanzate di produzione cosmetica con qualità premium ed esperienza nel marchio privato.',
    cta: 'SCOPRI LE NOSTRE CAPACITÀ →',
    productionCycle: 'TEMPO DI PRODUZIONE',
    live: 'LIVE',
    manufacturingProcess: 'PROCESSO DI PRODUZIONE',
    inProduction: 'IN PRODUZIONE',
    activeLine: 'LINEA ATTIVA',
    formulation: 'FORMULAZIONE',
    mixing: 'MISCELAZIONE',
    filling: 'RIEMPIMENTO',
    capping: 'TAPPATURA',
    printing: 'STAMPA',
    packaging: 'CONFEZIONAMENTO',
    dailyProductionCount: 'RESA DI PRODUZIONE GIORNALIERA',
    systemChronograph: 'ORA CORRENTE FABBRICA',
    realtimeTelemetry: 'TELEMETRIA IN TEMPO REALE',
    unitsLabel: 'UNITÀ',
    sterileMix: 'TEMP. FORMULA STERILE',
    nozzlePressure: 'PRESSIONE DI INIEZIONE',
    airPurity: 'INDICE DI PUREZZA ARIA',
    raw_prep: 'Prep. Materie Prime',
    homogenization: 'Omogeneizzazione Vuoto',
    quality_inspection: 'Controllo Qualità',
    finished_goods: 'Prodotti Finiti',
    todayRuns: 'PIANO DI PRODUZIONE ODIERNO',
    tomorrowQueue: 'CODA DI DOMANI',
    running: 'IN CORSO',
    scheduled: 'PROGRAMMATO',
    completed: 'COMPLETATO',
    sundayStatus: 'Stato Fabbrica: Chiuso (Domenica)',
    maintenanceDay: 'Manutenzione Settimanale / Giorno di Non-Produzione',
    noProductionScheduled: 'Nessuna Produzione Programmata Oggi',
    nextShiftInfo: 'Il prossimo turno è programmato per Lunedì alle 09:00',
    factoryIdle: 'FABBRICA IN STANDBY',
  }
};

// 2. High-fidelity Luxury SVG Cosmetic Renderers for pristine background transparency
const renderProductSvg = (id: string, color: string) => {
  switch (id) {
    case 'lip-gloss-nude':
      return (
        <svg viewBox="0 0 100 160" className="w-20 h-36 drop-shadow-2xl overflow-visible">
          {/* Black Cap */}
          <rect x="35" y="10" width="30" height="35" rx="3" fill="#0d0d0d" stroke="#262626" strokeWidth="0.5" />
          <rect x="37" y="10" width="8" height="35" fill="rgba(255,255,255,0.15)" />
          {/* Gold Metallic Band */}
          <rect x="33" y="45" width="34" height="10" fill="url(#luxuryGoldGrad)" />
          {/* Clear Acrylic Outer Body */}
          <rect x="30" y="55" width="40" height="95" rx="10" fill="url(#mirrorGlassGrad)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
          {/* Inner Nude Pink Fluid Column */}
          <rect x="35" y="60" width="30" height="85" rx="6" fill="#f59e0b" opacity="0.85" />
          <rect x="35" y="60" width="30" height="85" rx="6" fill="url(#powderBeigeGrad)" opacity="0.9" />
          {/* Specular Highlight */}
          <rect x="33" y="58" width="5" height="88" rx="2" fill="rgba(255,255,255,0.4)" />
          <text x="50" y="105" fill="#111" fontSize="4.5" fontWeight="bold" textAnchor="middle" letterSpacing="0.1em" fontFamily="sans-serif">ASLAN</text>
        </svg>
      );
    case 'lip-gloss-shimmer':
      return (
        <svg viewBox="0 0 120 160" className="w-24 h-36 drop-shadow-2xl overflow-visible">
          {/* Left: Square Bottle */}
          <rect x="20" y="45" width="40" height="32" rx="2" fill="#0d0d0d" />
          <rect x="20" y="77" width="40" height="8" fill="url(#luxuryGoldGrad)" />
          <rect x="18" y="85" width="44" height="65" rx="6" fill="url(#mirrorGlassGrad)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
          <rect x="22" y="89" width="36" height="57" rx="4" fill="url(#crimsonLipstickGrad)" opacity="0.85" />
          {/* Sparkles */}
          <circle cx="35" cy="110" r="1.5" fill="#fff" opacity="0.8" />
          <circle cx="45" cy="125" r="1.2" fill="#fef08a" opacity="0.9" />
          <circle cx="28" cy="130" r="1.5" fill="#fff" opacity="0.7" />
          <rect x="20" y="87" width="4" height="61" fill="rgba(255,255,255,0.3)" />
          {/* Right: Applicator Wand Standing beside it */}
          <rect x="75" y="20" width="22" height="30" rx="2" fill="#0d0d0d" />
          <rect x="75" y="50" width="22" height="6" fill="url(#luxuryGoldGrad)" />
          <rect x="83" y="56" width="6" height="65" fill="url(#luxuryGoldGrad)" />
          {/* Shimmer Tip */}
          <path d="M 80,121 C 80,118 92,118 92,121 C 92,128 86,133 86,133 C 86,133 80,128 80,121 Z" fill="#f43f5e" />
          <circle cx="86" cy="124" r="1" fill="#fff" />
        </svg>
      );
    case 'compact-powder-open':
      return (
        <svg viewBox="0 0 120 150" className="w-24 h-36 drop-shadow-2xl overflow-visible">
          {/* Opened Top Mirror Lid tilted */}
          <ellipse cx="60" cy="40" rx="45" ry="25" fill="#0f0f0f" stroke="url(#luxuryGoldGrad)" strokeWidth="2" />
          <ellipse cx="60" cy="40" rx="38" ry="20" fill="url(#mirrorGlassGrad)" opacity="0.8" />
          <ellipse cx="60" cy="40" rx="32" ry="16" fill="url(#powderBeigeGrad)" opacity="0.3" />
          {/* Hinge */}
          <rect x="54" y="62" width="12" height="6" fill="url(#luxuryGoldGrad)" rx="1" />
          {/* Base Pan Case */}
          <ellipse cx="60" cy="95" rx="48" ry="28" fill="#0f0f0f" stroke="url(#luxuryGoldGrad)" strokeWidth="2.5" />
          <ellipse cx="60" cy="95" rx="42" ry="22" fill="url(#powderBeigeGrad)" />
          <ellipse cx="60" cy="95" rx="32" ry="16" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 3" />
          <text x="60" y="97" fill="rgba(0,0,0,0.35)" fontSize="6" fontWeight="bold" textAnchor="middle" letterSpacing="0.15em" fontFamily="sans-serif">ASLAN</text>
        </svg>
      );
    case 'foundation-glass':
      return (
        <svg viewBox="0 0 100 160" className="w-20 h-36 drop-shadow-2xl overflow-visible">
          <rect x="35" y="10" width="30" height="32" rx="4" fill="#111" stroke="#333" strokeWidth="0.5" />
          <rect x="33" y="42" width="34" height="8" fill="url(#luxuryGoldGrad)" />
          <rect x="25" y="50" width="50" height="98" rx="12" fill="url(#mirrorGlassGrad)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <rect x="28" y="56" width="44" height="86" rx="8" fill="url(#foundationGrad)" />
          <rect x="32" y="75" width="36" height="38" fill="rgba(0,0,0,0.75)" rx="2" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <text x="50" y="89" fill="#fff" fontSize="5" fontWeight="bold" textAnchor="middle" letterSpacing="0.1em" fontFamily="sans-serif">ASLAN</text>
          <text x="50" y="97" fill="#fbbf24" fontSize="3.8" textAnchor="middle" letterSpacing="0.05em" fontFamily="sans-serif">FOUNDATION</text>
          <rect x="28" y="52" width="6" height="94" rx="3" fill="rgba(255,255,255,0.25)" />
        </svg>
      );
    case 'lipstick-gold-red':
      return (
        <svg viewBox="0 0 80 160" className="w-16 h-32 drop-shadow-2xl overflow-visible">
          <rect x="25" y="85" width="30" height="65" rx="2" fill="url(#luxuryGoldGrad)" stroke="#b45309" strokeWidth="0.5" />
          <rect x="25" y="85" width="6" height="65" fill="rgba(255,255,255,0.3)" />
          <rect x="23" y="60" width="34" height="25" fill="url(#luxuryGoldGrad)" />
          <rect x="23" y="60" width="6" height="25" fill="rgba(255,255,255,0.35)" />
          <path d="M 28,60 L 28,30 C 28,20 40,10 50,17 L 52,27 L 52,60 Z" fill="url(#crimsonLipstickGrad)" />
          <path d="M 32,55 L 32,33 C 32,27 36,21 42,21" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'lipstick-black-gold':
      return (
        <svg viewBox="0 0 80 160" className="w-16 h-32 drop-shadow-2xl overflow-visible">
          <rect x="25" y="85" width="30" height="65" rx="3" fill="#0f0f0f" stroke="#262626" strokeWidth="0.5" />
          <rect x="25" y="85" width="6" height="65" fill="rgba(255,255,255,0.12)" />
          <rect x="23" y="60" width="34" height="25" fill="url(#luxuryGoldGrad)" />
          <path d="M 28,60 L 28,30 C 28,20 40,10 50,17 L 52,27 L 52,60 Z" fill="#dc2626" />
          <path d="M 28,60 L 28,30 C 28,20 40,10 50,17 L 52,27 L 52,60 Z" fill="url(#crimsonLipstickGrad)" opacity="0.7" />
          <path d="M 32,55 L 32,33 C 32,27 36,21 42,21" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'lipstick-square-black':
      return (
        <svg viewBox="0 0 80 160" className="w-16 h-32 drop-shadow-2xl overflow-visible">
          <rect x="22" y="85" width="36" height="65" rx="1" fill="#09090b" stroke="#18181b" strokeWidth="0.5" />
          <polygon points="22,85 28,85 28,150 22,150" fill="rgba(255,255,255,0.15)" />
          <rect x="24" y="60" width="32" height="25" fill="url(#luxuryGoldGrad)" />
          <path d="M 28,60 L 28,32 C 28,22 40,12 50,19 L 52,29 L 52,60 Z" fill="url(#crimsonLipstickGrad)" />
          <path d="M 32,55 L 32,33 C 32,27 36,21 42,21" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'serum-gold-dropper':
      return (
        <svg viewBox="0 0 100 160" className="w-20 h-32 drop-shadow-2xl overflow-visible">
          <path d="M 40,25 C 40,10 60,10 60,25 Z" fill="#171717" />
          <rect x="32" y="25" width="36" height="15" fill="url(#luxuryGoldGrad)" rx="1" />
          <rect x="25" y="40" width="50" height="110" rx="16" fill="url(#mirrorGlassGrad)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
          <rect x="28" y="48" width="44" height="96" rx="12" fill="url(#luxuryGoldGrad)" opacity="0.85" />
          <rect x="47" y="32" width="6" height="100" fill="rgba(255,255,255,0.4)" rx="2" />
          <circle cx="50" cy="144" r="3.5" fill="#f59e0b" />
          <circle cx="38" cy="70" r="1.5" fill="#fff" opacity="0.6" />
          <circle cx="58" cy="95" r="2" fill="#fff" opacity="0.7" />
          <rect x="28" y="42" width="6" height="106" rx="3" fill="rgba(255,255,255,0.3)" />
        </svg>
      );
    case 'foundation-luxury-silk':
      return (
        <svg viewBox="0 0 100 160" className="w-20 h-36 drop-shadow-2xl overflow-visible">
          <rect x="32" y="10" width="36" height="38" rx="2" fill="#0a0a0a" stroke="#222" strokeWidth="0.5" />
          <rect x="32" y="48" width="36" height="6" fill="url(#luxuryGoldGrad)" />
          <rect x="26" y="54" width="48" height="95" rx="6" fill="url(#mirrorGlassGrad)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <rect x="29" y="58" width="42" height="87" rx="4" fill="url(#foundationGrad)" opacity="0.9" />
          <rect x="27" y="56" width="5" height="91" fill="rgba(255,255,255,0.25)" />
        </svg>
      );
    case 'highlighter-gold-sunburst':
      return (
        <svg viewBox="0 0 120 140" className="w-24 h-32 drop-shadow-2xl overflow-visible">
          <ellipse cx="60" cy="70" rx="52" ry="32" fill="#0f0f0f" stroke="url(#luxuryGoldGrad)" strokeWidth="2.5" />
          <ellipse cx="60" cy="70" rx="44" ry="25" fill="url(#powderBeigeGrad)" />
          {/* Sunburst Rays */}
          <path d="M 60,70 L 60,48 M 60,70 L 80,52 M 60,70 L 98,70 M 60,70 L 80,88 M 60,70 L 60,92 M 60,70 L 40,88 M 60,70 L 22,70 M 60,70 L 40,52" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <ellipse cx="60" cy="70" rx="44" ry="25" fill="url(#mirrorGlassGrad)" opacity="0.15" />
        </svg>
      );
    case 'eye-cream-luxury-jar':
      return (
        <svg viewBox="0 0 130 140" className="w-26 h-32 drop-shadow-2xl overflow-visible">
          {/* Main Jar */}
          <rect x="25" y="50" width="60" height="60" rx="8" fill="#0d0d0d" stroke="url(#luxuryGoldGrad)" strokeWidth="2" />
          <rect x="28" y="53" width="54" height="54" rx="6" fill="url(#mirrorGlassGrad)" opacity="0.3" />
          <rect x="30" y="55" width="50" height="20" rx="2" fill="url(#creamIvoryGrad)" />
          <text x="55" y="90" fill="url(#luxuryGoldGrad)" fontSize="5" fontWeight="bold" textAnchor="middle" letterSpacing="0.1em">EYE CREAM</text>
          {/* Open Cap beside jar */}
          <rect x="90" y="60" width="30" height="30" rx="4" transform="rotate(15 105 75)" fill="#0d0d0d" stroke="url(#luxuryGoldGrad)" strokeWidth="1.5" />
          {/* Gold Spoon */}
          <path d="M 10,105 Q 20,95 30,110 T 40,115" fill="none" stroke="url(#luxuryGoldGrad)" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="12" cy="103" rx="4" ry="2" fill="url(#luxuryGoldGrad)" />
        </svg>
      );
    case 'bb-cream-gold-pump':
      return (
        <svg viewBox="0 0 100 160" className="w-20 h-36 drop-shadow-2xl overflow-visible">
          {/* Gold Pump Head */}
          <rect x="42" y="10" width="16" height="8" rx="2" fill="url(#luxuryGoldGrad)" />
          <rect x="46" y="18" width="8" height="12" fill="url(#luxuryGoldGrad)" />
          <path d="M 46,14 L 38,16 L 38,20 L 46,18 Z" fill="url(#luxuryGoldGrad)" />
          <rect x="38" y="30" width="24" height="20" fill="url(#luxuryGoldGrad)" rx="2" />
          {/* Main Golden Tube Body */}
          <rect x="25" y="50" width="50" height="98" rx="14" fill="url(#luxuryGoldGrad)" stroke="#b45309" strokeWidth="0.5" />
          <rect x="25" y="50" width="8" height="98" rx="4" fill="rgba(255,255,255,0.35)" />
          <text x="50" y="85" fill="#111" fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em" fontFamily="sans-serif">BB</text>
          <text x="50" y="97" fill="#333" fontSize="5.5" fontWeight="bold" textAnchor="middle" letterSpacing="0.1em" fontFamily="sans-serif">CREAM</text>
          <text x="50" y="112" fill="#555" fontSize="3.5" textAnchor="middle" fontFamily="sans-serif">BEMITY BALM</text>
        </svg>
      );
    case 'brow-gel-luxury-jar':
      return (
        <svg viewBox="0 0 130 140" className="w-26 h-32 drop-shadow-2xl overflow-visible">
          {/* Glass Square Jar */}
          <rect x="20" y="50" width="65" height="55" rx="6" fill="url(#mirrorGlassGrad)" stroke="url(#luxuryGoldGrad)" strokeWidth="1.5" />
          <rect x="24" y="54" width="57" height="47" rx="4" fill="#fef3c7" opacity="0.4" />
          {/* Open Metallic Lid */}
          <rect x="15" y="25" width="75" height="20" rx="3" fill="#0d0d0d" stroke="url(#luxuryGoldGrad)" strokeWidth="1.5" />
          <rect x="15" y="40" width="75" height="5" fill="url(#luxuryGoldGrad)" />
          {/* Dual-ended Styling Brush beside it */}
          <line x1="10" y1="120" x2="115" y2="120" stroke="url(#luxuryGoldGrad)" strokeWidth="4" strokeLinecap="round" />
          <rect x="10" y="116" width="15" height="8" rx="1" fill="#171717" />
          <rect x="100" y="115" width="15" height="10" fill="#333" />
        </svg>
      );
    default:
      return null;
  }
};

const formatFactoryTime = (date: Date, lang: Language) => {
  const weekdays = {
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    ar: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    tr: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    it: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']
  };
  
  const months = {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    tr: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    it: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic']
  };

  const l = weekdays[lang] ? lang : 'en';
  const weekday = weekdays[l][date.getDay()];
  const day = String(date.getDate()).padStart(2, '0');
  const month = months[l][date.getMonth()];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  if (lang === 'ar') {
    return `${weekday}، ${day} ${month} ${year} – ${hours}:${minutes}:${seconds}`;
  }
  return `${weekday}, ${day} ${month} ${year} – ${hours}:${minutes}:${seconds}`;
};

export default function CosmeticLabExperience({ language }: CosmeticLabExperienceProps) {
  const isRtl = language === 'ar';
  const t = LOCAL_TRANSLATIONS[language] || LOCAL_TRANSLATIONS['en'];

  // 1. Precise time-synchronization of the factory shift (09:00 AM - 06:00 PM)
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Compute shift states based on current local time
  const isSunday = currentTime.getDay() === 0;

  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();
  const secondsSinceMidnight = currentHours * 3600 + currentMinutes * 60 + currentSeconds;
  
  const shiftStartSeconds = 9 * 3600;  // 09:00:00 = 32400 seconds
  const shiftEndSeconds = 18 * 3600;  // 18:00:00 = 64800 seconds
  
  let shiftState: 'before' | 'during' | 'after' | 'closed' = 'during';
  let elapsedSeconds = 0;
  
  if (isSunday) {
    shiftState = 'closed';
    elapsedSeconds = 0;
  } else if (secondsSinceMidnight < shiftStartSeconds) {
    shiftState = 'before';
    elapsedSeconds = 0;
  } else if (secondsSinceMidnight >= shiftEndSeconds) {
    shiftState = 'after';
    elapsedSeconds = 32400; // Completed full 9 hours
  } else {
    shiftState = 'during';
    elapsedSeconds = secondsSinceMidnight - shiftStartSeconds;
  }

  const formatChronograph = (totalSeconds: number) => {
    if (shiftState === 'before' || shiftState === 'closed') {
      return '00:00:00';
    }
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  // 2. High-fidelity Luxury Products matching exact user-uploaded photos
  const [productList, setProductList] = useState<ProductInfo[]>([
    {
      id: 'eye-cream-luxury-jar',
      type: 'Eye Cream',
      names: {
        en: 'Luxury Anti-Aging Eye Cream',
        ar: 'كريم العيون الفاخر لمقاومة التجاعيد',
        tr: 'Lüks Göz Çevresi Kremi',
        it: 'Crema Contorno Occhi Lusso'
      },
      imageUrl: '/products/eye-cream.png',
      glowColor: 'rgba(234,179,8,0.4)',
      glowHex: '#eab308',
      isSvg: false
    },
    {
      id: 'bb-cream-gold-pump',
      type: 'BB Cream',
      names: {
        en: 'Gold BB Cream Bemity Balm',
        ar: 'بي بي كريم بلسم الذهبي الفاخر',
        tr: 'Altın BB Krem Bemity Balm',
        it: 'BB Cream Balm Dorata'
      },
      imageUrl: '/products/bb-cream.png',
      glowColor: 'rgba(245,158,11,0.4)',
      glowHex: '#f59e0b',
      isSvg: false
    },
    {
      id: 'highlighter-gold-sunburst',
      type: 'Highlighter',
      names: {
        en: 'Sunburst Golden Highlighter',
        ar: 'هايلايتر الأشعة الذهبية الفاخر',
        tr: 'Güneş Işıltısı Aydınlatıcı Pudra',
        it: 'Illuminante Solare Dorato'
      },
      imageUrl: '/products/Highlighter.png',
      glowColor: 'rgba(250,204,21,0.4)',
      glowHex: '#facc15',
      isSvg: false
    },
    {
      id: 'foundation-luxury-silk',
      type: 'Foundation',
      names: {
        en: 'Silk Finish Matte Foundation',
        ar: 'كريم أساس مات بلمسة حريرية فاخرة',
        tr: 'İpek Dokulu Mat Lüks Fondöten',
        it: 'Fondotinta Finitura Seta'
      },
      imageUrl: '/products/matt-fondation.png',
      glowColor: 'rgba(217,119,6,0.4)',
      glowHex: '#d97706',
      isSvg: false
    },
    {
      id: 'brow-gel-luxury-jar',
      type: 'Brow Wax',
      names: {
        en: 'Brow Styling Wax & Gel Jar',
        ar: 'جل وشمع تصفيف الحواجب الفاخر',
        tr: 'Şekillendirici Kaş Wax & Jel Jar',
        it: 'Gel e Cera Modellante Sopracciglia'
      },
      imageUrl: '/products/eyebrpw.png',
      glowColor: 'rgba(234,179,8,0.4)',
      glowHex: '#eab308',
      isSvg: false
    },
    {
      id: 'lip-gloss-nude',
      type: 'Lip Gloss',
      names: {
        en: 'Nude Lip Gloss',
        ar: 'ملمع شفاه نود طبيعي',
        tr: 'Nude Likit Ruj & Gloss',
        it: 'Lucidalabbra Nude'
      },
      imageUrl: '/products/a-lipgloss.png',
      glowColor: 'rgba(245,158,11,0.4)',
      glowHex: '#f59e0b',
      isSvg: false
    },
    {
      id: 'lip-gloss-shimmer',
      type: 'Lip Gloss',
      names: {
        en: 'Shimmer Rose Lip Gloss',
        ar: 'ملمع شفاه وردي براق مع أداة التطبيق',
        tr: 'Işıltılı Gül Ruj & Gloss',
        it: 'Lucidalabbra Rosa Brillante'
      },
      imageUrl: '/products/s-lipgloss.png',
      glowColor: 'rgba(244,63,94,0.4)',
      glowHex: '#f43f5e',
      isSvg: false
    },
    {
      id: 'compact-powder-open',
      type: 'Compact Powder',
      names: {
        en: 'Compact Face Powder with Mirror',
        ar: 'بودرة وجه مضغوطة مع مرآة فاخرة',
        tr: 'Aynalı Sıkıştırılmış Yüz Pudrası',
        it: 'Cipria Compatta con Specchio'
      },
      imageUrl: '/products/face-powder.png',
      glowColor: 'rgba(234,179,8,0.4)',
      glowHex: '#eab308',
      isSvg: false
    },
    {
      id: 'foundation-glass',
      type: 'Foundation',
      names: {
        en: 'Satin HD Liquid Glass Foundation',
        ar: 'كريم أساس HD بقارورة زجاجية',
        tr: 'Saten HD Likit Cam Fondöten',
        it: 'Fondotinta Fluido HD Satinato'
      },
      imageUrl: '/products/hd-foundation.png',
      glowColor: 'rgba(217,119,6,0.4)',
      glowHex: '#d97706',
      isSvg: false
    },
    {
      id: 'lipstick-gold-red',
      type: 'Lipstick',
      names: {
        en: 'Classic All-Gold Red Lipstick',
        ar: 'أحمر شفاه كلاسيكي بعلبة ذهبية كاملة',
        tr: 'Klasik Altın Kırmızı Ruj',
        it: 'Rossetto Dorato Classico Rosso'
      },
      imageUrl: '/products/lipstick_transparant.png',
      glowColor: 'rgba(239,68,68,0.4)',
      glowHex: '#ef4444',
      isSvg: false
    },
    {
      id: 'lipstick-black-gold',
      type: 'Lipstick',
      names: {
        en: 'Velvet HD Black & Gold Lipstick',
        ar: 'أحمر شفاه HD أسود وذهبي فاخر',
        tr: 'Siyah & Altın HD Lüks Ruj',
        it: 'Rossetto Nero & Oro Elegante'
      },
      imageUrl: '/products/hd-lipstick.png',
      glowColor: 'rgba(220,38,38,0.4)',
      glowHex: '#dc2626',
      isSvg: false
    },
    {
      id: 'serum-gold-dropper',
      type: 'Serum',
      names: {
        en: 'Golden Elixir Face Serum',
        ar: 'سيروم الإكسير الذهبي بالقطارة للوجه',
        tr: 'Altın Eliksir Damlalıklı Yüz Serumu',
        it: 'Siero Elisir Dorato Nutriente'
      },
      imageUrl: '/products/face-serum.png',
      glowColor: 'rgba(34,211,238,0.45)',
      glowHex: '#22d3ee',
      isSvg: false
    }
  ]);

  // Active product index offset for interactive browsing
  const [activeOffset, setActiveOffset] = useState<number>(0);

  const handleNextProduct = () => {
    setActiveOffset(prev => (prev + 2) % productList.length);
  };

  const handlePrevProduct = () => {
    setActiveOffset(prev => (prev - 2 + productList.length) % productList.length);
  };

  // Handle dynamic custom product uploads with automatic browser-side Canvas Background Remover
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Sample corner pixels to find background color
        const corners = [
          [0, 0],
          [canvas.width - 1, 0],
          [0, canvas.height - 1],
          [canvas.width - 1, canvas.height - 1]
        ];
        let rSum = 0, gSum = 0, bSum = 0;
        corners.forEach(([x, y]) => {
          const idx = (y * canvas.width + x) * 4;
          rSum += data[idx];
          gSum += data[idx+1];
          bSum += data[idx+2];
        });
        const bgR = rSum / 4;
        const bgG = gSum / 4;
        const bgB = bSum / 4;

        // Clean removal threshold
        const threshold = 45;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i+1];
          const b = data[i+2];

          const dist = Math.sqrt(
            Math.pow(r - bgR, 2) + 
            Math.pow(g - bgG, 2) + 
            Math.pow(b - bgB, 2)
          );

          if (dist < threshold) {
            data[i+3] = 0;
          } else if (dist < threshold + 15) {
            const factor = (dist - threshold) / 15;
            data[i+3] = Math.round(data[i+3] * factor);
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const transparentDataUrl = canvas.toDataURL('image/png');

        const pName = prompt(language === 'ar' ? 'أدخل اسم المنتج الجديد (مثال: lipgloss):' : 'Enter product name (e.g. lipgloss):') || 'Custom Product';
        
        const newProduct: ProductInfo = {
          id: `uploaded-${Date.now()}`,
          type: pName,
          names: {
            en: pName,
            ar: pName,
            tr: pName,
            it: pName
          },
          imageUrl: transparentDataUrl,
          glowColor: 'rgba(234,179,8,0.4)',
          glowHex: '#fbbf24'
        };

        setProductList(prev => {
          return [newProduct, ...prev];
        });
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // 2. Deterministic Daily Scheduling based on Day of Year
  const getDayOfShift = () => {
    const d = currentTime;
    return d.getFullYear() * 365 + d.getMonth() * 31 + d.getDate();
  };
  const dayIndex = getDayOfShift();

  const PRODUCT_TARGETS: Record<string, number> = {
    'foundation': 10000,
    'compact-powder': 6000,
    'lipstick': 8000,
    'serum': 5000,
  };

  const uploadedProduct = productList.find(p => p.id.startsWith('uploaded-'));
  
  // Today's running product list (supports active offset navigation):
  const baseIdx = (dayIndex + activeOffset) % productList.length;
  const productA = uploadedProduct || productList[baseIdx];
  const productB = productList[(baseIdx + 1) % productList.length] === productA 
    ? productList[(baseIdx + 2) % productList.length] 
    : productList[(baseIdx + 1) % productList.length];

  // Tomorrow's upcoming product list:
  const productC = productList[(dayIndex + 2) % productList.length] === productA || productList[(dayIndex + 2) % productList.length] === productB
    ? productList[(dayIndex + 4) % productList.length]
    : productList[(dayIndex + 2) % productList.length];
  const productD = productList[(dayIndex + 3) % productList.length] === productA || productList[(dayIndex + 3) % productList.length] === productB || productList[(dayIndex + 3) % productList.length] === productC
    ? productList[(dayIndex + 5) % productList.length]
    : productList[(dayIndex + 3) % productList.length];

  const leftProduct = productA;
  const rightProduct = productB;

  const targetA = PRODUCT_TARGETS[productA.id] || 7500;
  const targetB = PRODUCT_TARGETS[productB.id] || 5500;

  // Integrated, continuous production units calculation
  const getCumulativeUnits = (target: number, t: number) => {
    if (isSunday || t <= 0) return 0;
    if (t >= 32400) return target;
    const rate = target / 32400;
    // Fluctuations: 3-min (180s) and 15-min (900s) cycles
    const term1 = 180 * 0.12 * (1 - Math.cos(t / 180));
    const term2 = 900 * 0.08 * Math.sin(t / 900);
    return rate * (t + term1 + term2);
  };

  const currentUnitsA = Math.floor(getCumulativeUnits(targetA, elapsedSeconds));
  const currentUnitsB = Math.floor(getCumulativeUnits(targetB, elapsedSeconds));
  const dailyYield = currentUnitsA + currentUnitsB;

  // Floating increment bubble controller
  const [lastYield, setLastYield] = useState<number>(dailyYield);
  const [lastIncrementAmount, setLastIncrementAmount] = useState<number>(0);
  const [showIncrementBubble, setShowIncrementBubble] = useState<boolean>(false);

  useEffect(() => {
    if (dailyYield > lastYield) {
      const increment = dailyYield - lastYield;
      setLastIncrementAmount(increment);
      setShowIncrementBubble(true);
      
      const timer = setTimeout(() => {
        setShowIncrementBubble(false);
      }, 1800);
      setLastYield(dailyYield);
      return () => clearTimeout(timer);
    } else if (dailyYield < lastYield) {
      setLastYield(dailyYield);
    }
  }, [dailyYield, lastYield]);

  // Telemetry Micro-fluctuations
  const getInitialTemp = () => {
    const seed = new Date().getMinutes() * 60 + new Date().getSeconds();
    const val = 36.8 + (Math.sin(seed / 100) * 0.15 + 0.15); // ranges between 36.8 and 37.1
    return Number(val.toFixed(1));
  };

  const getInitialPressure = () => {
    const seed = new Date().getMinutes() * 60 + new Date().getSeconds();
    const val = 2.43 + (Math.cos(seed / 80) * 0.01 + 0.01); // ranges between 2.43 and 2.45
    return Number(val.toFixed(2));
  };

  const getInitialPurity = () => {
    const seed = new Date().getMinutes() * 60 + new Date().getSeconds();
    const val = 99.96 + (Math.sin(seed / 150) * 0.015 + 0.015); // ranges between 99.96% and 99.99%
    return Number(val.toFixed(2));
  };

  const [formulaTemp, setFormulaTemp] = useState<number>(getInitialTemp);
  const [nozzlePressureVal, setNozzlePressureVal] = useState<number>(getInitialPressure);
  const [airPurityVal, setAirPurityVal] = useState<number>(getInitialPurity);

  useEffect(() => {
    // 1. Temperature: every 15 seconds
    const tempInterval = setInterval(() => {
      setFormulaTemp(prev => {
        const change = (Math.random() - 0.5) * 0.06;
        const next = prev + change;
        return Number(Math.max(36.8, Math.min(37.1, next)).toFixed(1));
      });
    }, 15000);

    // 2. Pressure: every 10 seconds
    const pressureInterval = setInterval(() => {
      setNozzlePressureVal(prev => {
        const change = (Math.random() - 0.5) * 0.006;
        const next = prev + change;
        return Number(Math.max(2.43, Math.min(2.45, next)).toFixed(2));
      });
    }, 10000);

    // 3. Air Purity: every 20 seconds
    const purityInterval = setInterval(() => {
      setAirPurityVal(prev => {
        const change = (Math.random() - 0.5) * 0.006;
        const next = prev + change;
        return Number(Math.max(99.96, Math.min(99.99, next)).toFixed(2));
      });
    }, 20000);

    return () => {
      clearInterval(tempInterval);
      clearInterval(pressureInterval);
      clearInterval(purityInterval);
    };
  }, []);

  // 9 real cosmetic manufacturing stages with duration summing to exactly 9 hours (32400s)
  const FACTORY_STAGES = [
    { id: 'raw_prep', key: 'raw_prep', duration: 1800 },         // 30 min (0 to 1800)
    { id: 'mixing', key: 'mixing', duration: 3600 },             // 60 min (1800 to 5400)
    { id: 'homogenization', key: 'homogenization', duration: 3600 }, // 60 min (5400 to 9000)
    { id: 'quality_inspection', key: 'quality_inspection', duration: 1800 }, // 30 min (9000 to 10800)
    { id: 'filling', key: 'filling', duration: 7200 },           // 120 min (10800 to 18000)
    { id: 'capping', key: 'capping', duration: 5400 },           // 90 min (18000 to 23400)
    { id: 'printing', key: 'printing', duration: 3600 },         // 60 min (23400 to 27000)
    { id: 'packaging', key: 'packaging', duration: 3600 },       // 60 min (27000 to 30600)
    { id: 'finished_goods', key: 'finished_goods', duration: 1800 } // 30 min (30600 to 32400)
  ];

  const stages = FACTORY_STAGES;

  const getStageAndProgress = (t: number) => {
    let accumulated = 0;
    for (let i = 0; i < FACTORY_STAGES.length; i++) {
      const stage = FACTORY_STAGES[i];
      if (t >= accumulated && t < accumulated + stage.duration) {
        const progress = ((t - accumulated) / stage.duration) * 100;
        return { index: i, progress };
      }
      accumulated += stage.duration;
    }
    return { index: FACTORY_STAGES.length - 1, progress: 100 };
  };

  const { index: activeStageIdx, progress: stageProgress } = getStageAndProgress(elapsedSeconds);

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto bg-[#030303] border border-white/10 p-4 sm:p-10 rounded-[32px] overflow-hidden shadow-2xl"
    >
      
      {/* 1. Global Custom Gradient Definitions for Premium Realistic Cosmetics */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="luxuryGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#fbbf24" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>
          <linearGradient id="metallicDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="50%" stopColor="#09090b" />
            <stop offset="100%" stopColor="#18181b" />
          </linearGradient>
          <linearGradient id="foundationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="crimsonLipstickGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="40%" stopColor="#dc2626" />
            <stop offset="85%" stopColor="#991b1b" />
            <stop offset="100%" stopColor="#450a0a" />
          </linearGradient>
          <linearGradient id="mirrorGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34,211,238,0.55)" />
            <stop offset="50%" stopColor="rgba(15,23,42,0.6)" />
            <stop offset="100%" stopColor="rgba(8,145,178,0.2)" />
          </linearGradient>
          <linearGradient id="powderBeigeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffedd5" />
            <stop offset="60%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          <linearGradient id="cyanSerumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="creamIvoryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#fefaf0" />
            <stop offset="80%" stopColor="#fdf4e3" />
            <stop offset="100%" stopColor="#fed7aa" />
          </linearGradient>
        </defs>
      </svg>

      {/* Atmospheric Background & Science-to-Manufacturing Theme Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/factory.png" 
          alt="Automated production facility" 
          referrerPolicy="no-referrer"
          onError={(e) => {
            const img = e.currentTarget;
            img.onerror = null;
            img.src = '/meeting-room.png';
          }}
          className="w-full h-full object-cover opacity-20 filter blur-sm"
        />
        {/* Soft, rich cyan vignette to encapsulate luxury holographic feelings */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#030303] via-[#030303]/90 to-cyan-950/30" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.015)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Floating particles mimicking fine active mist or cleanroom filtration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 8 }).map((_, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full bg-cyan-400/20"
            style={{
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, -80],
              x: [0, (Math.random() - 0.5) * 20],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* 2. Cybernetic Control Panel & Real-time Factory Yield HUD */}
      <div className="relative z-10 w-full mb-8 border border-white/10 bg-black/70 backdrop-blur-md rounded-2xl p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center overflow-hidden">
        {/* Decorative laser top light */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        
        {/* Column 1: SYSTEM CHRONOMETER / CLOCK */}
        <div className="flex items-center gap-4 border-b lg:border-b-0 ltr:lg:border-r rtl:lg:border-l border-white/5 pb-4 lg:pb-0 ltr:lg:pr-6 rtl:lg:pl-6 justify-center lg:justify-start">
          <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/25 relative flex-shrink-0">
            <Clock className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 block uppercase truncate">
              {t.systemChronograph}
            </span>
            <div className="flex flex-wrap items-center gap-2 mt-1.5">
              <span className="text-xs sm:text-sm font-mono font-bold text-white tracking-tight filter drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                {formatFactoryTime(currentTime, language)}
              </span>
              <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-500/20 px-1.5 py-0.5 rounded uppercase flex-shrink-0">
                {t.live}
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: REAL-TIME FACTORY TELEMETRY */}
        <div className="flex flex-col gap-2 border-b lg:border-b-0 ltr:lg:border-r rtl:lg:border-l border-white/5 pb-4 lg:pb-0 ltr:lg:pr-6 rtl:lg:pl-6 justify-center">
          <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 text-center uppercase">
            {t.realtimeTelemetry}
          </span>
          <div className="grid grid-cols-3 gap-2 text-center mt-1">
            <div className="bg-white/5 border border-white/5 rounded-lg p-1.5">
              <span className="text-[8px] font-mono text-neutral-400 block truncate uppercase">
                {t.sterileMix}
              </span>
              <span className="text-xs font-mono font-bold text-cyan-400">
                {formulaTemp}°C
              </span>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-lg p-1.5">
              <span className="text-[8px] font-mono text-neutral-400 block truncate uppercase">
                {t.nozzlePressure}
              </span>
              <span className="text-xs font-mono font-bold text-amber-400">
                {nozzlePressureVal} bar
              </span>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-lg p-1.5">
              <span className="text-[8px] font-mono text-neutral-400 block truncate uppercase">
                {t.airPurity}
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                {airPurityVal}%
              </span>
            </div>
          </div>
        </div>

        {/* Column 3: REALISTIC DAILY PRODUCTION YIELD */}
        <div className="flex items-center gap-4 justify-center lg:justify-end relative">
          <div className={`text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'}`}>
            <span className="text-[10px] font-sans tracking-[0.2em] text-neutral-400 block uppercase">
              {t.dailyProductionCount}
            </span>
            <div className="flex items-center gap-3 mt-1 justify-center lg:justify-end relative">
              
              {/* Dynamic Increment Floating Bubble - triggers live +1 or +2 updates */}
              <AnimatePresence>
                {showIncrementBubble && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.6 }}
                    animate={{ opacity: 1, y: -22, scale: 1 }}
                    exit={{ opacity: 0, y: -35, scale: 0.8 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="absolute -top-3 left-1/2 ltr:lg:left-auto rtl:lg:right-auto ltr:lg:right-8 rtl:lg:left-8 transform -translate-x-1/2 ltr:lg:translate-x-0 rtl:lg:translate-x-0 z-20 pointer-events-none"
                  >
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/90 border border-emerald-500/40 px-2 py-0.5 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.4)]">
                      +{lastIncrementAmount} {t.unitsLabel.split(' ')[0]}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <span className="text-2xl md:text-3xl font-mono font-bold text-amber-400 tracking-wider filter drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                {dailyYield.toLocaleString('de-DE')}
              </span>
              <span className="text-[9px] font-mono font-bold text-amber-400/80 bg-amber-950/40 border border-amber-500/15 px-2 py-1 rounded uppercase">
                {t.unitsLabel}
              </span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/25 hidden lg:block">
            <Package className="w-5 h-5 text-amber-400 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Interactive Main Frame Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* ================= LEFT COLUMN: LUXURY BRANDING & TEXT ================= */}
        <div className={`lg:col-span-4 flex flex-col justify-center ${isRtl ? 'text-right' : 'text-left'}`}>
          <span 
            className="text-amber-400 text-xs font-sans tracking-[0.4em] uppercase font-bold block mb-3"
            style={{
              marginBottom: '0px',
              marginRight: '0px',
              paddingLeft: '1px',
              paddingTop: '1px',
              paddingBottom: '0px',
              borderRadius: '0px'
            }}
          >
            {t.weManufacture}
          </span>
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-white leading-tight uppercase tracking-wider mb-6"
            style={{
              paddingTop: '2px',
              fontSize: '24px'
            }}
          >
            {t.beautyBeyond}
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed font-light mb-8 max-w-sm">
            {t.desc}
          </p>
          <div>
            <button className="group relative inline-flex items-center gap-3 px-6 py-3 border border-amber-400/30 hover:border-amber-400 text-amber-400 font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded-none bg-black/40">
              <span>{t.cta}</span>
            </button>
          </div>

          {/* Real MES Live Production Schedule */}
          <div className="mt-8 border border-white/5 bg-white/[0.02] p-4 rounded-xl w-full max-w-sm">
            <h4 className="text-[10px] font-sans tracking-[0.25em] uppercase text-neutral-400 font-bold mb-4 flex items-center justify-between">
              <span>{t.todayRuns}</span>
              <span className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded uppercase ${
                shiftState === 'during' ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/25' :
                shiftState === 'after' ? 'bg-amber-950/40 text-amber-400 border border-amber-500/25' :
                'bg-neutral-900 text-neutral-500 border border-neutral-800'
              }`}>
                {shiftState === 'during' ? t.running : shiftState === 'after' ? t.completed : t.scheduled}
              </span>
            </h4>
            
            <div className="flex flex-col gap-4">
              {/* Product A */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ 
                        backgroundColor: productA.glowHex,
                        boxShadow: `0 0 6px ${productA.glowHex}`
                      }}
                    />
                    <span className="font-sans font-medium text-white truncate max-w-[150px]">
                      {productA.names[language] || productA.names['en']}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-neutral-400">
                    {currentUnitsA.toLocaleString()} / {targetA.toLocaleString()}
                  </span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full"
                    style={{ 
                      backgroundColor: productA.glowHex,
                      width: `${(currentUnitsA / targetA) * 100}%` 
                    }}
                  />
                </div>
              </div>

              {/* Product B */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ 
                        backgroundColor: productB.glowHex,
                        boxShadow: `0 0 6px ${productB.glowHex}`
                      }}
                    />
                    <span className="font-sans font-medium text-white truncate max-w-[150px]">
                      {productB.names[language] || productB.names['en']}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-neutral-400">
                    {currentUnitsB.toLocaleString()} / {targetB.toLocaleString()}
                  </span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full"
                    style={{ 
                      backgroundColor: productB.glowHex,
                      width: `${(currentUnitsB / targetB) * 100}%` 
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Tomorrow's Queue */}
            <div className="mt-4 pt-3 border-t border-white/5">
              <span className="text-[8px] font-sans tracking-[0.15em] uppercase text-neutral-500 font-bold block mb-2">
                {t.tomorrowQueue}
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-sans font-medium text-neutral-400 bg-white/[0.03] px-2 py-1 rounded border border-white/5 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-neutral-600" />
                  {productC.names[language] || productC.names['en']}
                </span>
                <span className="text-[10px] font-sans font-medium text-neutral-400 bg-white/[0.03] px-2 py-1 rounded border border-white/5 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-neutral-600" />
                  {productD.names[language] || productD.names['en']}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CENTER COLUMN: THE CORE HOLOGRAPHIC PRODUCTION SANDBOX ================= */}
        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[460px]">
          
          {/* Floating Futuristic HUD Clock - Placed at the top of the sandbox container, completely visible and clear of overlaps */}
          <div className="absolute top-2 z-30 flex items-center gap-3 px-4 py-2 bg-black/85 border border-cyan-500/35 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.25)] backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isSunday ? 'bg-amber-400/80' : 'bg-emerald-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isSunday ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
            </span>
            <span className="text-[10px] font-sans font-extrabold tracking-widest text-neutral-400 uppercase">
              {isSunday ? t.factoryIdle : t.productionCycle}
            </span>
            <div className="h-3 w-[1px] bg-white/10" />
            <span className="text-sm sm:text-base font-mono font-bold text-white tracking-widest filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
              {formatChronograph(elapsedSeconds)}
            </span>
          </div>

          {isSunday ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 w-full max-w-[360px] border border-amber-500/20 bg-gradient-to-b from-amber-950/20 to-neutral-950/90 rounded-[24px] p-6 text-center shadow-[0_10px_35px_rgba(0,0,0,0.85)] backdrop-blur-md flex flex-col items-center gap-6"
            >
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
              
              {/* Pulsing maintenance beacon */}
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-amber-950/40 border border-amber-500/30">
                <Wrench className="w-6 h-6 text-amber-400 animate-pulse" />
                <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-sans tracking-[0.25em] text-amber-400 font-extrabold uppercase">
                  {t.sundayStatus}
                </span>
                <h3 className="text-base sm:text-lg font-sans font-bold text-white tracking-tight leading-snug">
                  {t.maintenanceDay}
                </h3>
                <p className="text-[11px] font-sans text-neutral-400 max-w-[280px] mx-auto mt-1">
                  {t.noProductionScheduled}
                </p>
              </div>

              {/* Decorative divider */}
              <div className="w-full h-[1px] bg-white/5" />

              <div className="flex items-center gap-3 bg-neutral-950/80 border border-white/5 rounded-xl px-4 py-3 w-full justify-center">
                <Calendar className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <span className="text-[10px] font-sans text-neutral-300 font-medium tracking-wide">
                  {t.nextShiftInfo}
                </span>
              </div>
            </motion.div>
          ) : (
            <>
              {/* A. Large Holographic Circular Interface (Spins slowly behind products) */}
              <div 
                className="absolute w-[280px] xs:w-[320px] sm:w-[360px] md:w-[400px] flex items-center justify-center"
                style={{ height: '200px' }}
              >
                {/* Outermost dotted rotation ring */}
                <motion.div
                  className="absolute w-full h-full rounded-full border border-dashed border-cyan-400/15"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                />
                {/* Mid solid/dashed combination cyan ring */}
                <motion.div
                  className="absolute w-[85%] h-[85%] rounded-full border-2 border-dashed border-cyan-500/10 border-t-cyan-400/40"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                />
                {/* Center solid diagnostic hub - Abstract futuristic node to avoid overlapping text */}
                <div className="absolute w-[45%] h-[45%] rounded-full border border-white/5 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center">
                  <motion.div 
                    className="w-16 h-16 rounded-full border border-dashed border-cyan-400/30 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                  >
                    <div className="w-10 h-10 rounded-full border-2 border-double border-amber-400/25 animate-pulse flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-cyan-400/15 border border-cyan-400 animate-ping" />
                    </div>
                  </motion.div>
                  <span className="text-[7px] font-mono text-cyan-400/60 mt-2 tracking-[0.25em] uppercase">
                    DIAG.SYS // OK
                  </span>
                </div>
              </div>

              {/* B. Two Side-by-Side Cosmetic Products - Aligned transparently with no base pods */}
              <div className="w-full flex items-center justify-between gap-6 relative z-10 px-2 sm:px-6">
                
                {/* Interactive Navigation Chevrons */}
                <button 
                  onClick={handlePrevProduct}
                  aria-label="Previous Products"
                  title="Previous Products"
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 text-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-950/60 border border-cyan-500/30 rounded-full transition-all duration-200 cursor-pointer shadow-lg active:scale-95 group backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button 
                  onClick={handleNextProduct}
                  aria-label="Next Products"
                  title="Next Products"
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 text-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-950/60 border border-cyan-500/30 rounded-full transition-all duration-200 cursor-pointer shadow-lg active:scale-95 group backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Left Product Platform */}
                <div className="flex flex-col items-center w-1/2">
                  <div className="relative w-36 h-52 flex items-center justify-center">
                    
                    {/* Micro rotating production indicators - dynamic colored */}
                    <motion.div
                      className="absolute w-24 h-24 rounded-full border border-dashed opacity-25"
                      style={{ borderColor: `${leftProduct.glowHex}33` }}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                    />

                    {/* Sweeping Scanning Laser */}
                    <motion.div
                      className="absolute left-2 right-2 h-0.5 z-20"
                      style={{ 
                        backgroundColor: leftProduct.glowHex,
                        boxShadow: `0 0 10px ${leftProduct.glowHex}` 
                      }}
                      animate={{ y: [15, 125] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                    />

                    {/* Product asset - elegant entry transition, sitting cleanly and transparently in space */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={leftProduct.id}
                        initial={{ opacity: 0, y: 15, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.9 }}
                        transition={{ duration: 0.8 }}
                        className="z-10 flex items-center justify-center w-28 h-40 md:w-32 md:h-44 relative"
                      >
                        {/* Background Soft Glow Aura */}
                        <div 
                          className="absolute w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none"
                          style={{ backgroundColor: leftProduct.glowHex }}
                        />
                        
                        {leftProduct.isSvg ? (
                          <div className="w-full h-full flex items-center justify-center">
                            {renderProductSvg(leftProduct.id, leftProduct.glowHex)}
                          </div>
                        ) : (
                          <img 
                            src={leftProduct.imageUrl.startsWith('/') ? leftProduct.imageUrl : `/${leftProduct.imageUrl}`} 
                            alt={leftProduct.type} 
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const img = e.currentTarget as HTMLImageElement;
                              img.onerror = null;
                              img.src = '/meeting-room.png';
                            }}
                            className="max-w-full max-h-full object-contain select-none pointer-events-none filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300"
                            style={{
                              filter: `drop-shadow(0 15px 25px ${leftProduct.glowHex}30)`
                            }}
                          />
                        )}
                      </motion.div>
                    </AnimatePresence>

                  </div>

                  {/* Status plate below platform - displays product name and live status */}
                  <div className="mt-4 text-center">
                    <h5 className="text-[12px] font-sans font-bold text-neutral-100 tracking-wider mb-2 uppercase min-h-[18px]">
                      {leftProduct.names[language] || leftProduct.names['en']}
                    </h5>
                    <span 
                      className="text-[9px] font-mono font-bold tracking-widest px-3 py-1 bg-black/50 border rounded-full uppercase"
                      style={{ 
                        color: leftProduct.glowHex,
                        borderColor: `${leftProduct.glowHex}40`
                      }}
                    >
                      {t.inProduction}
                    </span>
                  </div>
                </div>

                {/* Right Product Platform */}
                <div className="flex flex-col items-center w-1/2">
                  <div className="relative w-36 h-52 flex items-center justify-center">
                    
                    {/* Micro rotating production indicators - dynamic colored */}
                    <motion.div
                      className="absolute w-24 h-24 rounded-full border border-dashed opacity-25"
                      style={{ borderColor: `${rightProduct.glowHex}33` }}
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                    />

                    {/* Sweeping Scanning Laser */}
                    <motion.div
                      className="absolute left-2 right-2 h-0.5 z-20"
                      style={{ 
                        backgroundColor: rightProduct.glowHex,
                        boxShadow: `0 0 10px ${rightProduct.glowHex}` 
                      }}
                      animate={{ y: [125, 15] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                    />

                    {/* Product asset - elegant entry transition, sitting cleanly and transparently in space */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={rightProduct.id}
                        initial={{ opacity: 0, y: 15, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.9 }}
                        transition={{ duration: 0.8 }}
                        className="z-10 flex items-center justify-center w-28 h-40 md:w-32 md:h-44 relative"
                      >
                        {/* Background Soft Glow Aura */}
                        <div 
                          className="absolute w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none"
                          style={{ backgroundColor: rightProduct.glowHex }}
                        />
                        
                        {rightProduct.isSvg ? (
                          <div className="w-full h-full flex items-center justify-center">
                            {renderProductSvg(rightProduct.id, rightProduct.glowHex)}
                          </div>
                        ) : (
                          <img 
                            src={rightProduct.imageUrl.startsWith('/') ? rightProduct.imageUrl : `/${rightProduct.imageUrl}`} 
                            alt={rightProduct.type} 
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const img = e.currentTarget as HTMLImageElement;
                              img.onerror = null;
                              img.src = '/meeting-room.png';
                            }}
                            className="max-w-full max-h-full object-contain select-none pointer-events-none filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300"
                            style={{
                              filter: `drop-shadow(0 15px 25px ${rightProduct.glowHex}30)`
                            }}
                          />
                        )}
                      </motion.div>
                    </AnimatePresence>

                  </div>

                  {/* Status plate below platform - displays product name and live status */}
                  <div className="mt-4 text-center">
                    <h5 className="text-[12px] font-sans font-bold text-neutral-100 tracking-wider mb-2 uppercase min-h-[18px]">
                      {rightProduct.names[language] || rightProduct.names['en']}
                    </h5>
                    <span 
                      className="text-[9px] font-mono font-bold tracking-widest px-3 py-1 bg-black/50 border rounded-full uppercase"
                      style={{ 
                        color: rightProduct.glowHex,
                        borderColor: `${rightProduct.glowHex}40`
                      }}
                    >
                      {t.inProduction}
                    </span>
                  </div>
                </div>

              </div>

            </>
          )}

        </div>

        {/* ================= RIGHT COLUMN: STEADY MANUFACTURING STAGES ================= */}
        <div className="lg:col-span-3 flex flex-col justify-center w-full">
          <div 
            className="border border-white/10 bg-black/60 backdrop-blur-md p-4 sm:p-5 rounded-[24px] shadow-lg relative overflow-hidden w-full max-w-sm sm:max-w-md mx-auto"
            style={{
              minHeight: '380px',
              paddingTop: '23px',
              paddingBottom: '23px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '-3px',
              marginTop: '-1px'
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            
            <h4 className={`text-xs font-sans tracking-wider font-bold text-neutral-300 uppercase mb-6 pb-3 border-b border-white/5 ${
              isRtl ? 'text-right' : 'text-left'
            }`}>
              {t.manufacturingProcess}
            </h4>

            {/* Vertical Stepper with Glowing Connective Line */}
            <div className={`relative flex flex-col gap-3.5 ${
              isRtl ? 'pr-6 text-right' : 'pl-6 text-left'
            }`}>
              
              {/* Connective Laser Line */}
              <div className={`absolute top-1.5 bottom-1.5 w-0.5 bg-neutral-800 ${
                isRtl ? 'right-[7.5px]' : 'left-[7.5px]'
              }`} />
              <div className={`absolute top-1.5 bottom-1.5 w-0.5 bg-gradient-to-b from-cyan-400/20 via-cyan-400 to-transparent ${
                isRtl ? 'right-[7.5px]' : 'left-[7.5px]'
              }`} />

              {stages.map((stg, index) => {
                const isActive = !isSunday && index === activeStageIdx;
                const isPassed = !isSunday && index < activeStageIdx;

                return (
                  <div key={stg.id} className={`relative flex gap-4 group ${
                    isRtl ? 'flex-row-reverse items-start' : 'flex-row items-start'
                  }`}>
                    
                    {/* Circle Indicator */}
                    <div className="relative z-10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      {isActive ? (
                        <span className="relative flex h-4 w-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60"></span>
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#030303] border-2 border-cyan-400 items-center justify-center">
                            <span className="w-1 h-1 rounded-full bg-cyan-400" />
                          </span>
                        </span>
                      ) : isPassed ? (
                        <div className="w-4 h-4 rounded-full bg-cyan-500/20 border border-cyan-400/60 flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-cyan-400" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center" />
                      )}
                    </div>

                    {/* Stage Details */}
                    <div className={`flex flex-col gap-0.5 ${
                      isRtl ? 'items-end' : 'items-start'
                    }`}>
                      <span className={`text-[11px] font-sans tracking-wide uppercase transition-colors duration-300 font-bold ${
                        isActive ? 'text-cyan-400' : isPassed ? 'text-neutral-300' : 'text-neutral-600'
                      }`}>
                        {t[stg.key]}
                      </span>

                      {/* Display slow simulated progress to honor realistic industrial speed */}
                      {isActive && (
                        <div className={`flex items-center gap-1.5 mt-1 ${
                          isRtl ? 'flex-row-reverse' : 'flex-row'
                        }`}>
                          <div className="w-16 h-1 bg-neutral-800 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-cyan-400"
                              style={{ width: `${stageProgress}%` }}
                            />
                          </div>
                          <span className="text-[8px] font-mono text-cyan-400/80">
                            {stageProgress}%
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

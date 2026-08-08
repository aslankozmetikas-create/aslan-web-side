import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FlaskConical, Coffee, Package, Globe, ShieldCheck, 
  Cpu, Volume2, VolumeX, Database, TrendingUp, Layers, Zap,
  Play, ArrowRight, ArrowLeft, RefreshCw, Star, Info, Shield
} from 'lucide-react';
import { Language } from '../types';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface Brands3DShowcaseProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onClose: () => void;
  onContactClick: () => void;
}

type SceneMode = 'intro' | 'showcase';

export default function Brands3DShowcase({
  language,
  onLanguageChange,
  onClose,
  onContactClick
}: Brands3DShowcaseProps) {
  const isRtl = language === 'ar';
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // State control
  const [sceneMode, setSceneMode] = useState<SceneMode>('intro');
  const [introCountdown, setIntroCountdown] = useState(3);
  const [activeBrandId, setActiveBrandId] = useState<string | null>(null);
  const [hoveredBrandId, setHoveredBrandId] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  
  // Real-time telemetry monitoring for futuristic sci-fi aesthetic
  const [telemetry, setTelemetry] = useState({
    fps: 60,
    drawCalls: 18,
    polygons: 14200,
    orbitAngle: 0,
    laserIntensity: 1.0,
    quantumStability: 99.8
  });

  const [spotlightPos, setSpotlightPos] = useState<Record<string, { x: number; y: number }>>({});

  // Scanned cosmetics product item on the 3D globe for the telemetry HUD panel
  const [activeCosmeticName, setActiveCosmeticName] = useState({ ar: 'روج / أحمر شفاه', en: 'Lipstick' });
  const lastScannedIndexRef = useRef(-1);

  // Localized texts in 4 languages
  const TEXTS = {
    ar: {
      tagline: 'الأبعاد الرقمية الثلاثية',
      title: 'علاماتنا الفاخرة المستقلة',
      subtitle: 'نظام بيئي متصل يتخطى حدود الهندسة والتغذية والجمال الفاخر',
      backBtn: 'العودة للموقع الرئيسي ✕',
      exploreBtn: 'استكشف الماركة',
      soundOn: 'تشغيل المؤثرات الصوتية',
      soundOff: 'كتم الصوت',
      viewSpecs: 'المواصفات المستقبلية',
      telemetry: 'البث اللحظي للشبكة ثلاثية الأبعاد',
      metrics: 'مؤشرات الأداء ثلاثية الأبعاد',
      features: 'المزايا الريادية',
      getInTouch: 'بدء شراكة فورية &larr;',
      scrollPrompt: 'حرك الماوس لتوجيه الكاميرا والتحليق في الفضاء الرقمي',
      stats: 'الإحصائيات الحيوية',
      clickToFocus: 'اضغط على أي جزيرة ثلاثية الأبعاد للتركيز التام وتوجيه الكاميرا',
      systemActive: 'محرك الكوانتوم نشط',
      loadingHQ: 'يتم الآن الاتصال بمقر الإدارة الرئيسي...',
      enterExperience: 'الدخول للمقر الافتراضي ✦',
      skipIntro: 'تخطي المشهد الافتتاحي ⚡',
      foundingYear: 'تأسست ٢٠٢٦',
      brandEcosystem: 'منظومة أصلان العالمية',
      hologramActive: 'البث المجسم ثلاثي الأبعاد فعال',
      islandCosmetics: 'منصة بيوتكنولوجي التجميل',
      islandFood: 'منصة الغذاء العضوي الدسم',
      islandPackaging: 'منصة هندسة القوالب والعبوات',
      islandTrade: 'منصة الإمداد المبرد الذكي',
    },
    en: {
      tagline: 'IMMERSIVE 3D DIMENSION',
      title: 'Our Independent Luxury Brands',
      subtitle: 'A fully interconnected corporate ecosystem spanning molecular biotech, premium organic nutrition, precision packaging, and global logistics.',
      backBtn: 'Back to Main Website ✕',
      exploreBtn: 'Explore Ecosystem',
      soundOn: 'Sound Enabled',
      soundOff: 'Mute Audio',
      viewSpecs: 'Futuristic Specifications',
      telemetry: 'Live 3D Brand Telemetry',
      metrics: '3D Performance Indices',
      features: 'Pioneer Features',
      getInTouch: 'Initiate Partnership Now &larr;',
      scrollPrompt: 'Move your cursor to orbit camera & bend volumetric space',
      stats: 'Biometric Statistics',
      clickToFocus: 'Click any 3D island to focus the cinematic viewport camera',
      systemActive: 'QUANTUM ENGINE ACTIVE',
      loadingHQ: 'ESTABLISHING SECURE CONNECTION TO HQ...',
      enterExperience: 'ENTER HQ SHOWROOM ✦',
      skipIntro: 'Skip Cinematic Intro ⚡',
      foundingYear: 'ESTABLISHED 2026',
      brandEcosystem: 'ASLAN GLOBAL ECOSYSTEM',
      hologramActive: 'HOLOGRAM ACTIVE',
      islandCosmetics: 'Biotech Cosmetics Platform',
      islandFood: 'Therapeutic Food Platform',
      islandPackaging: 'Mold & Injection Platform',
      islandTrade: 'Cold-Chain Aerospace Trade',
    },
    tr: {
      tagline: 'DİJİTAL 3D BOYUT',
      title: 'Bağımsız Lüks Markalarımız',
      subtitle: 'Biyoteknoloji, premium organik beslenme, akıllı ambalaj ve küresel lojistiği kapsayan birbirine bağlı kurumsal ekosistem.',
      backBtn: 'Ana Web Sitesine Dön ✕',
      exploreBtn: 'Ekosistemi Keşfet',
      soundOn: 'Ses Açık',
      soundOff: 'Sesi Kapat',
      viewSpecs: 'Fütüristik Özellikler',
      telemetry: 'Canlı 3D Marka Telemetrisi',
      metrics: '3D Performans Endeksleri',
      features: 'Öncü Özellikler',
      getInTouch: 'Şimdi Ortaklık Başlat &larr;',
      scrollPrompt: 'Kamerayı döndürmek ve alanı bükmek için imlecinizi hareket ettirin',
      stats: 'Biyometrik İstatistikler',
      clickToFocus: '3D kamerayı odaklamak için herhangi bir adaya tıklayın',
      systemActive: 'KUANTUM MOTORU AKTİF',
      loadingHQ: 'GENEL MERKEZE GÜVENLİ BAĞLANTI KURULUYOR...',
      enterExperience: 'SHOWROOM\'A GİRİŞ YAPIN ✦',
      skipIntro: 'Sinematik Girişi Geç ⚡',
      foundingYear: 'KURULUŞ 2026',
      brandEcosystem: 'ASLAN KÜRESEL EKOSİSTEMİ',
      hologramActive: 'HOLOGRAM AKTİF',
      islandCosmetics: 'Biyoteknoloji Kozmetik Platformu',
      islandFood: 'Terapötik Gıda Platformu',
      islandPackaging: 'Kalıp ve Enjeksiyon Platformu',
      islandTrade: 'Soğuk Zincir Havacılık ve Ticaret',
    },
    it: {
      tagline: 'DIMENSIONE DIGITALE 3D',
      title: 'I Nostri Marchi Indipendenti di Lusso',
      subtitle: 'Un ecosistema aziendale interconnesso che spazia tra biotecnologia, nutrizione biologica premium, packaging intelligente e logistica globale.',
      backBtn: 'Torna al Sito Principale ✕',
      exploreBtn: 'Esplora l\'Ecosistema',
      soundOn: 'Audio Abilitato',
      soundOff: 'Silenzia Audio',
      viewSpecs: 'Specifiche Futuristiche',
      telemetry: 'Telemetria 3D in Tempo Reale',
      metrics: 'Indici di Performance 3D',
      features: 'Caratteristiche All\'avanguardia',
      getInTouch: 'Inizia una Partnership Ora &larr;',
      scrollPrompt: 'Muovi il cursore per orbitare la camera tridimensionale',
      stats: 'Statistiche Biometriche',
      clickToFocus: 'Clicca su una piattaforma 3D per orientare la camera',
      systemActive: 'MOTORE QUANTISTICO ATTIVO',
      loadingHQ: 'CONNESSIONE IN CORSO CON LA SEDE CENTRALE...',
      enterExperience: 'ENTRA NELLO SHOWROOM ✦',
      skipIntro: 'Salta Intro Cinematica ⚡',
      foundingYear: 'FONDATA NEL 2026',
      brandEcosystem: 'ECOSISTEMA GLOBALE ASLAN',
      hologramActive: 'HOLOGRAM ACTIVE',
      islandCosmetics: 'Piattaforma Cosmesi Biotecnologica',
      islandFood: 'Piattaforma Nutrizione Terapeutica',
      islandPackaging: 'Piattaforma Stampaggio e Packaging',
      islandTrade: 'Logistica Aerospaziale Fredda',
    }
  }[language];

  // Ribbon brands definitions for infinite scrolling marquee ticker
  const RIBBON_BRANDS = [
    { nameAr: "دوف", nameEn: "Dove", icon: "✨" },
    { nameAr: "اكس", nameEn: "Axe", icon: "⚡" },
    { nameAr: "يونيليفر", nameEn: "Unilever", icon: "🌟" },
    { nameAr: "نيشان", nameEn: "Nishane", icon: "⚜️" },
    { nameAr: "لوفابيلا", nameEn: "Luvabella", icon: "🌸" },
    { nameAr: "اصيل", nameEn: "Asil", icon: "🏆" },
    { nameAr: "متفاك", nameEn: "Metvac", icon: "🔥" }
  ];

  const triplyRibbonBrands = [...RIBBON_BRANDS, ...RIBBON_BRANDS, ...RIBBON_BRANDS];

  // Independent brand items definitions with direct persistent URL mapping for aii.jpg
  const BRANDS_DATA = [
    {
      id: 'cosmetics',
      name: { ar: 'أسلان بيوتي وإليت', en: 'ASLAN BEAUTY & L\'ÉLITE', tr: 'ASLAN BEAUTY & L\'ÉLITE', it: 'ASLAN BEAUTY & L\'ÉLITE' },
      tagline: { ar: 'تكنولوجيا الخلايا الجذعية النباتية', en: 'Molecular Biotech Skincare', tr: 'Moleküler Biyoteknolojik Cilt Bakımı', it: 'Cosmesi Molecolare e Biotecnologica' },
      desc: {
        ar: 'صياغة سريرية فاخرة تدمج الببتيدات النشطة حيوياً والمستخلصات العضوية في غرف معقمة Class-555 لنتائج فورية مذهلة.',
        en: 'High-potency clinical compounds utilizing organic bio-actives and proprietary peptide chains synthesized in sterile Class-555 labs.',
        tr: 'Sınıf-555 steril laboratuvarlarda sentezlenen tescilli peptit zincirleri ve organik biyo-aktifleri kullanan yüksek etkili klinik bileşikler.',
        it: 'Formulazioni cliniche ad alta efficacia basate su peptidi brevettati e fito-estratti biologici in camere sterili Classe-555.'
      },
      image: '/aii.jpg',
      color: '#d4af37',
      icon: <FlaskConical className="w-6 h-6 text-amber-400" />,
      platformText: TEXTS.islandCosmetics,
      metrics: [
        { label: { ar: 'معدل تجديد الخلايا', en: 'Cell Regeneration Rate', tr: 'Hücre Yenilenme Oranı', it: 'Tasso Rigenerazione Cellulare' }, value: '+142%' },
        { label: { ar: 'مكونات نشطة عضوياً', en: 'Bio-Active Purity', tr: 'Biyo-Aktif Saflık', it: 'Purezza Bio-Attiva' }, value: '99.8%' },
        { label: { ar: 'براءات الاختراع المسجلة', en: 'Registered Patents', tr: 'Kayıtlı Patentler', it: 'Brevetti Registrati' }, value: '18' }
      ],
      specs: [
        { key: { ar: 'الرقم الهيدروجيني للتركيبة', en: 'Formula pH Level', tr: 'Formül pH Seviyesi', it: 'Livello pH della Formula' }, val: '5.5' },
        { key: { ar: 'غرفة التعقيم', en: 'Cleanroom Class', tr: 'Temiz Oda Sınıfı', it: 'Classe Camera Bianca' }, val: 'ISO 5' },
        { key: { ar: 'الحفظ الذاتي', en: 'Preservation System', tr: 'Koruyucu Sistemi', it: 'Sistema di Conservazione' }, val: 'Organic Self-Preserving' }
      ],
      features: {
        ar: ['مقاومة شيخوخة فائقة المفعول', 'ببتيدات مستخلصة بالذكاء الاصطناعي', 'عناية بالبشرة آمنة على العيون'],
        en: ['Hyper-potent Anti-aging Catalyst', 'AI-modeled Oligopeptides', 'Ophthalmologist Approved Formulas'],
        tr: ['Yüksek Etkili Yaşlanma Karşıtı Katalizör', 'Yapay Zeka Modellemesi Oligopeptitler', 'Oftalmolog Onaylı Formüller'],
        it: ['Catalizzatore Anti-età ad Alta Efficacia', 'Oligopeptidi Modellati con IA', 'Formule Approvate da Oftalmologi']
      }
    },
    {
      id: 'food',
      name: { ar: 'أصلان بيو-أورجانيكس', en: 'ASLAN BIO-ORGANICS', tr: 'ASLAN BIO-ORGANİKS', it: 'ASLAN BIO-ORGANICS' },
      tagline: { ar: 'التغذية العلاجية الفاخرة', en: 'Luxury Therapeutic Nutrition', tr: 'Lüks Terapötik Beslenme', it: 'Nutrizione Terapeutica di Lusso' },
      desc: {
        ar: 'مرقة عظام البقر والغنم الدسمة المطهوة ببطء لأكثر من 24 ساعة لاستخلاص الكولاجين، بجانب القهوة الفاخرة منزوعة الكافيين ومكملات الغذاء الطبيعية 100%.',
        en: 'Premium slow-cooked bone broth simmered for 24+ hours to isolate pure collagen and minerals, plus ultra-premium natural decaffeinated coffee.',
        tr: 'Saf kolajen ve mineralleri izole etmek için 24 saatten fazla kaynatılmış birinci sınıf kemik suyu ve ultra lüks doğal kafeinsiz kahve.',
        it: 'Brodo di ossa premium cotto lentamente per oltre 24 ore per estrarre collagene purissimo, affiancato da caffè biologico decaffeinato di alta gamma.'
      },
      image: '/aslan88.png',
      color: '#10b981',
      icon: <Coffee className="w-6 h-6 text-emerald-400" />,
      platformText: TEXTS.islandFood,
      metrics: [
        { label: { ar: 'تركيز الكولاجين الطبيعي', en: 'Collagen Density (g/100ml)', tr: 'Kolajen Yoğunluğu', it: 'Densità di Collagene (g/100ml)' }, value: '18.4g' },
        { label: { ar: 'مكونات طبيعية خالية من الأسمدة', en: '100% Organic Purity', tr: 'Organik Saflık', it: 'Purezza Biologica' }, value: '100%' },
        { label: { ar: 'ساعات الطهي الهادئ', en: 'Slow Cooking Duration', tr: 'Yavaş Pişirme Süresi', it: 'Durata della Cottura Lenta' }, value: '24h+' }
      ],
      specs: [
        { key: { ar: 'التحلية والإضافات', en: 'Sweeteners / Additives', tr: 'Tatlandırıcılar / Katkı Maddeleri', it: 'Dolcificanti / Additivi' }, val: 'Zero' },
        { key: { ar: 'التصفية الفائقة', en: 'Filtration Level', tr: 'Filtrasyon Seviyesi', it: 'Livello di Filtrazione' }, val: 'Micro-Mesh' },
        { key: { ar: 'طريقة نزع الكافيين', en: 'Decaffeination Method', tr: 'Kafeinsizleştirme Yöntemi', it: 'Metodo di Decaffeinizzazione' }, val: 'Swiss Water Process' }
      ],
      features: {
        ar: ['غني بالكولاجين الحيوي الدسم', 'خالٍ من الجلوتين واللاكتوز والمواد الحافظة', 'وصفات تقليدية مطورة علمياً'],
        en: ['Rich Bio-Available Beef & Lamb Collagen', 'Non-GMO, Gluten-Free, Preservative-Free', 'Scientifically Refined Traditional Recipes'],
        tr: ['Zengin Biyo-yararlı Sığır & Kuzu Kolajeni', 'GDO\'suz, Glutensiz, Koruyucusuz', 'Bilimsel Olarak Geliştirilmiş Geleneksel Tarifler'],
        it: ['Collagene Altamente Biodisponibile', 'Senza OGM, Senza Glutine e Senza Conservanti', 'Ricette Tradizionali Perfezionate Scientificamente']
      }
    },
    {
      id: 'packaging',
      name: { ar: 'أصلان فوتشر-مولد للعبوات', en: 'ASLAN FUTURE-MOLD', tr: 'ASLAN FUTURE-MOLD AMBALAJ', it: 'ASLAN FUTURE-MOLD PACKAGING' },
      tagline: { ar: 'تصنيع قوالب البلاستيك والعبوات', en: 'Precision Packaging Engineering', tr: 'Hassas Ambalaj Mühendisliği', it: 'Ingegneria di Packaging di Precisione' },
      desc: {
        ar: 'حقن وقوالب دقيقة لتصنيع عبوات مستحضرات التجميل الراقية باستخدام مواد قابلة للتحلل الحيوي (Biodegradable Eco-PET) ومواد PMMA فائقة الفخامة.',
        en: 'Pioneering structural cosmetic and medical containers utilizing biodegradable Eco-PET and luxury optical PMMA acrylics with zero-waste design.',
        tr: 'Sıfır atık tasarımıyla biyolojik olarak parçalanabilir Eco-PET ve lüks PMMA akrilikleri kullanan kozmetik ve medikal kaplar.',
        it: 'Progettazione e stampaggio a iniezione di contenitori cosmetici e medicali in Eco-PET biodegradabile e acrilico PMMA di lusso.'
      },
      image: '/meeting-room.png',
      color: '#00bfff',
      icon: <Package className="w-6 h-6 text-blue-400" />,
      platformText: TEXTS.islandPackaging,
      metrics: [
        { label: { ar: 'دقة قوالب النفخ والصب', en: 'Micrometric Tolerance', tr: 'Mikrometrik Tolerans', it: 'Tolleranza Micrometrica' }, value: '±0.01mm' },
        { label: { ar: 'تقليل الفاقد البيئي للمصنع', en: 'Factory Waste Recycled', tr: 'Geri Dönüştürülen Atık Oranı', it: 'Rifiuti di Fabbrica Riciclati' }, value: '100%' },
        { label: { ar: 'الطاقة الإنتاجية السنوية', en: 'Annual Component Output', tr: 'Yıllık Parça Üretimi', it: 'Produzione Annua di Componenti' }, value: '120M+' }
      ],
      specs: [
        { key: { ar: 'التكنولوجيا المستخدمة', en: 'Core Technology', tr: 'Ana Teknoloji', it: 'Tecnologia Principale' }, val: 'Dual Hot Runner ISBM' },
        { key: { ar: 'المواد الصديقة للكوكب', en: 'Eco Material', tr: 'Eko Malzeme', it: 'Materiale Ecologico' }, val: 'Biodegradable Eco-PET' },
        { key: { ar: 'فحص جودة العدسات والتشكيل', en: 'Optical Scanning', tr: 'Optik Tarama', it: 'Scansione Ottica' }, val: '3D AI Real-time' }
      ],
      features: {
        ar: ['تشكيل هندسي مجهري فائق الدقة', 'تدوير كامل للفاقد الصناعي بمصنعنا', 'زجاج أكريليكي فاخر مقاوم للخدوش'],
        en: ['Precision Micro-Injection Molding', 'Closed-loop 100% Zero Waste System', 'Scratch-resistant High-Brilliance PMMA'],
        tr: ['Hassas Mikro Enjeksiyon Kalıplama', 'Kapalı Devre %100 Sıfır Atık Sistemi', 'Çizilmeye Karşı Dayanıklı Parlak PMMA'],
        it: ['Stampaggio a Micro-Iniezione di Precisione', 'Sistema a Circuito Chiuso 100% Zero Rifiuti', 'Acrilico PMMA ad Alta Trasparenza Antigraffio']
      }
    },
    {
      id: 'trade',
      name: { ar: 'أصلان لوجستكس آند أيروتريد', en: 'ASLAN AEROTRADE & LOGISTICS', tr: 'ASLAN AEROTRADE & LOJİSTİK', it: 'ASLAN AEROTRADE & LOGISTICS' },
      tagline: { ar: 'قنوات الإمداد المبرد الذكي', en: 'Smart Intercontinental Logistics', tr: 'Akıllı Kıtalararası Lojistik', it: 'Logistica Intercontinentale Intelligente' },
      desc: {
        ar: 'ربط مصانعنا المتقدمة بأسواق أوروبا وأمريكا الشمالية عبر أسطول نقل مبرد ذكي مزود بمستشعرات إنترنت الأشياء (IoT) لتأمين ثبات المكونات.',
        en: 'Deploying state-of-the-art cold chain transcontinental logistics monitored via live IoT telemetry, securing peptide and organic cargo stability.',
        tr: 'Peptit ve organik yük stabilitesini güvence altına alan, canlı IoT telemetrisi ile izlenen kıtalararası soğuk zincir lojistiği.',
        it: 'Operazioni logistiche intercontinentali a catena del freddo con tracciamento IoT satellitare in tempo reale per preservare principi attivi.'
      },
      image: '/meeting-room.png',
      color: '#a78bfa',
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      platformText: TEXTS.islandTrade,
      metrics: [
        { label: { ar: 'معدل التلف الحراري للشحنات', en: 'Cargo Degradation Loss', tr: 'Kargo Bozulma Kaybı', it: 'Deterioramento delle Merci' }, value: '0.0%' },
        { label: { ar: 'الموانئ والمطارات المتصلة', en: 'Global Hub Connections', tr: 'Küresel Merkez Bağlantıları', it: 'Connessioni Globali Hub' }, value: '45+' },
        { label: { ar: 'المراقبة اللحظية بالإنترنت', en: 'Real-time IoT Sentry Tracking', tr: 'Gerçek Zamanlı IoT Takibi', it: 'Tracciamento IoT in Tempo Reale' }, value: '24/7' }
      ],
      specs: [
        { key: { ar: 'معايرة الحرارة للحاويات', en: 'Optimal Cargo Temp', tr: 'En Uygun Kargo Sıcaklığı', it: 'Temp. Ottimale Container' }, val: '4.0°C ±0.5°C' },
        { key: { ar: 'التتبع الفضائي للحمولات', en: 'Satelite Telemetry', tr: 'Uydu Telemetrisi', it: 'Telemetria Satellitare' }, val: 'Dual GPS Transponders' },
        { key: { ar: 'الشهادات اللوجستية', en: 'Compliance', tr: 'Uyum', it: 'Conformità' }, val: 'GDP Certified Cold-Chain' }
      ],
      features: {
        ar: ['تأمين مناخي كامل للحاويات', 'مسارات جغرافية احتياطية بالذكاء الاصطناعي', 'تخليص جمركي ذو أولوية فائقة'],
        en: ['Active Nitrogen & Thermal Stabilizers', 'AI route risk analytics & path redundancy', 'Priority Port Green-Channel Access'],
        tr: ['Aktif Azot ve Termal Stabilizatörler', 'Yapay Zeka rota risk analitiği ve yol yedekliliği', 'Öncelikli Liman Yeşil Hat Erişimi'],
        it: ['Stabilizzatori Termici e Azoto Attivo', 'Analisi dei rischi di rotta con IA', 'Accesso Doganale Prioritario Canale Verde']
      }
    }
  ];

  // Synthesize ultra-clean premium audio frequencies for tactile interaction feedback
  const playSfx = (type: 'hover' | 'click' | 'close' | 'warp' | 'sonar') => {
    if (!soundEnabled) return;
    try {
      const frequencies = { hover: 380, click: 580, close: 240, warp: 880, sonar: 180 };
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = frequencies[type];
      
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + (type === 'click' || type === 'warp' ? 0.45 : 0.12));
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + (type === 'click' || type === 'warp' ? 0.45 : 0.12));
    } catch (e) {
      // Browser autoplay restriction guard
    }
  };

  const handleSkipIntro = () => {
    playSfx('warp');
    setSceneMode('showcase');
  };

  useEffect(() => {
    if (sceneMode === 'intro') {
      const interval = setInterval(() => {
        setIntroCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setSceneMode('showcase');
            playSfx('warp');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [sceneMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parentWidth = canvas.parentElement?.clientWidth || window.innerWidth;
    const parentHeight = canvas.parentElement?.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060403, 0.04);

    const camera = new THREE.PerspectiveCamera(45, parentWidth / parentHeight, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(parentWidth, parentHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const goldMonolithMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xd4af37,
      metalness: 0.95,
      roughness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      reflectivity: 1.0
    });

    const translucentGlassMaterial = (colorHex: number) => {
      return new THREE.MeshPhysicalMaterial({
        color: colorHex,
        metalness: 0.1,
        roughness: 0.2,
        transparent: true,
        opacity: 0.65,
        transmission: 0.6,
        thickness: 0.8,
        ior: 1.45,
        clearcoat: 1.0
      });
    };

    const neonRingMaterial = (colorHex: number) => {
      return new THREE.MeshBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: 0.8,
        wireframe: true
      });
    };

    const introGroup = new THREE.Group();
    const centralStar = new THREE.Mesh(new THREE.IcosahedronGeometry(1.6, 1), goldMonolithMaterial);
    const orbitRing1 = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.04, 8, 100), new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.4 }));
    orbitRing1.rotation.x = Math.PI / 4;
    const orbitRing2 = new THREE.Mesh(new THREE.TorusGeometry(2.5, 0.02, 8, 100), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 }));
    orbitRing2.rotation.y = Math.PI / 3;

    introGroup.add(centralStar);
    introGroup.add(orbitRing1);
    introGroup.add(orbitRing2);
    scene.add(introGroup);

    const mainShowcaseGroup = new THREE.Group();
    const cosmeticsGlobeGroup = new THREE.Group();
    
    const luxuryGoldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xd4af37,
      metalness: 0.95,
      roughness: 0.15,
      clearcoat: 1.0
    });

    const ringY = new THREE.Mesh(new THREE.TorusGeometry(3.6, 0.04, 16, 120), luxuryGoldMaterial);
    ringY.rotation.x = Math.PI / 2;
    cosmeticsGlobeGroup.add(ringY);

    const ringX = new THREE.Mesh(new THREE.TorusGeometry(3.6, 0.03, 16, 120), luxuryGoldMaterial);
    cosmeticsGlobeGroup.add(ringX);

    const ringZ = new THREE.Mesh(new THREE.TorusGeometry(3.6, 0.03, 16, 120), luxuryGoldMaterial);
    ringZ.rotation.y = Math.PI / 2;
    cosmeticsGlobeGroup.add(ringZ);

    const nodeGeom = new THREE.SphereGeometry(0.12, 16, 16);
    const nodeMat = new THREE.MeshPhysicalMaterial({
      color: 0xffe89a,
      emissive: 0xd4af37,
      emissiveIntensity: 0.5,
      metalness: 0.9,
      roughness: 0.1
    });

    const poleN = new THREE.Mesh(nodeGeom, nodeMat);
    poleN.position.set(0, 3.6, 0);
    cosmeticsGlobeGroup.add(poleN);

    const poleS = new THREE.Mesh(nodeGeom, nodeMat);
    poleS.position.set(0, -3.6, 0);
    cosmeticsGlobeGroup.add(poleS);

    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 2) {
      const eqNode = new THREE.Mesh(nodeGeom, nodeMat);
      eqNode.position.set(3.6 * Math.cos(angle), 0, 3.6 * Math.sin(angle));
      cosmeticsGlobeGroup.add(eqNode);
    }

    const COSMETIC_ITEMS = [
      { nameAr: "روج / أحمر شفاه", nameEn: "Lipstick", type: "cylinder_angled", color: 0xff1493 },
      { nameAr: "كريم أساس / فونديشن", nameEn: "Foundation", type: "pump_bottle", color: 0xe6b89c },
      { nameAr: "كريم مرطب / كريم وجه", nameEn: "Moisture Cream", type: "cream_jar", color: 0xffffff },
      { nameAr: "عطر فاخر", nameEn: "Luxury Perfume", type: "perfume_bottle", color: 0xffd700 },
      { nameAr: "ماسكارا رموش دقيقة", nameEn: "Mascara", type: "sleek_wand", color: 0x111111 },
      { nameAr: "كحل عيون أسود", nameEn: "Eyeliner Pencil", type: "thin_cone", color: 0x000000 },
      { nameAr: "بلاشر خدود وردي", nameEn: "Blush Powder", type: "flat_tray", color: 0xff69b4 },
      { nameAr: "طلاء أظافر / مناكير", nameEn: "Nail Polish", type: "polish_bottle", color: 0xd30000 },
      { nameAr: "سيروم النضارة العضوي", nameEn: "Bio Serum", type: "dropper_bottle", color: 0xcc7722 },
      { nameAr: "ملمع شفاه لامع", nameEn: "Lip Gloss", type: "gloss_tube", color: 0xff85a2 },
      { nameAr: "بودرة مضغوطة مخملية", nameEn: "Face Powder", type: "flat_disc", color: 0xf5deb3 },
      { nameAr: "ظلال العيون الملونة", nameEn: "Eyeshadow Palette", type: "flat_grid", color: 0x8a2be2 },
      { nameAr: "خافي عيوب / كونسيلر", nameEn: "Concealer", type: "wand_tube", color: 0xf3e5ab },
      { nameAr: "هايلايتر مضيء ومشع", nameEn: "Highlighter", type: "glowing_crystal", color: 0x00ffff },
      { nameAr: "حليب منظف ومنقي للبشرة", nameEn: "Cleansing Milk", type: "white_bottle", color: 0xf5f5f5 },
      { nameAr: "تونر منشط ومغذي", nameEn: "Skin Toner", type: "teal_bottle", color: 0x20b2aa },
      { nameAr: "ماسك ورقي طبيعي", nameEn: "Sheet Mask", type: "oval_capsule", color: 0xe0ffff },
      { nameAr: "واقي شمس فيزيائي", nameEn: "Sunblock SPF50", type: "squeeze_tube", color: 0xffeb3b },
      { nameAr: "ماء ميسيلار منظف", nameEn: "Micellar Water", type: "blue_cap_cylinder", color: 0x87cefa },
      { nameAr: "جل حواجب مثبت", nameEn: "Eyebrow Gel", type: "mini_jar", color: 0x4a3b32 }
    ];

    COSMETIC_ITEMS.forEach((item, index) => {
      const itemGroup = new THREE.Group();
      const goldMetalMat = new THREE.MeshPhysicalMaterial({ color: 0xd4af37, metalness: 0.95, roughness: 0.1, clearcoat: 1.0 });
      const itemColorMat = new THREE.MeshPhysicalMaterial({ color: item.color, metalness: 0.2, roughness: 0.3, transparent: true, opacity: 0.9 });
      const glassMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 0.1, roughness: 0.05, transmission: 0.95, thickness: 0.4, transparent: true, opacity: 0.5 });

      const pedestalGeom = new THREE.CylinderGeometry(0.24, 0.24, 0.02, 16);
      const pedestal = new THREE.Mesh(pedestalGeom, goldMetalMat);
      pedestal.position.y = -0.06;
      itemGroup.add(pedestal);

      const pedestalRingGeom = new THREE.TorusGeometry(0.24, 0.012, 8, 24);
      const pedestalRingMat = new THREE.MeshBasicMaterial({ color: item.color, transparent: true, opacity: 0.85 });
      const pedestalRing = new THREE.Mesh(pedestalRingGeom, pedestalRingMat);
      pedestalRing.rotation.x = Math.PI / 2;
      pedestalRing.position.y = -0.05;
      itemGroup.add(pedestalRing);

      if (item.type === "cylinder_angled") {
        const base = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.28, 16), goldMetalMat);
        const bullet = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.24, 16), itemColorMat);
        bullet.position.y = 0.22;
        bullet.rotation.x = 0.15;
        itemGroup.add(base);
        itemGroup.add(bullet);
      } else if (item.type === "pump_bottle" || item.type === "white_bottle" || item.type === "teal_bottle" || item.type === "blue_cap_cylinder") {
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.42, 16), itemColorMat);
        const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.08, 16), goldMetalMat);
        cap.position.y = 0.23;
        const nozzle = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.03, 0.1), goldMetalMat);
        nozzle.position.set(0, 0.28, 0.04);
        itemGroup.add(body);
        itemGroup.add(cap);
        itemGroup.add(nozzle);
      } else if (item.type === "cream_jar" || item.type === "mini_jar") {
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.22, 16), glassMat);
        const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.05, 16), goldMetalMat);
        lid.position.y = 0.12;
        const creamInside = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.16, 16), itemColorMat);
        creamInside.position.y = -0.01;
        itemGroup.add(body);
        itemGroup.add(lid);
        itemGroup.add(creamInside);
      } else if (item.type === "perfume_bottle") {
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.32, 0.16), glassMat);
        const perfumeLiquid = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.26, 0.12), itemColorMat);
        perfumeLiquid.position.y = -0.02;
        const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.06, 16), goldMetalMat);
        neck.position.y = 0.18;
        const cap = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), goldMetalMat);
        cap.position.y = 0.25;
        itemGroup.add(body);
        itemGroup.add(perfumeLiquid);
        itemGroup.add(neck);
        itemGroup.add(cap);
      } else if (item.type === "sleek_wand" || item.type === "thin_cone" || item.type === "wand_tube") {
        const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.42, 16), itemColorMat);
        const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.03, 16), goldMetalMat);
        collar.position.y = 0.2;
        const longCap = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.32, 16), goldMetalMat);
        longCap.position.y = 0.35;
        itemGroup.add(tube);
        itemGroup.add(collar);
        itemGroup.add(longCap);
      } else if (item.type === "flat_tray" || item.type === "flat_disc") {
        const tray = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.05, 24), goldMetalMat);
        const powder = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.02, 24), itemColorMat);
        powder.position.y = 0.025;
        itemGroup.add(tray);
        itemGroup.add(powder);
      } else if (item.type === "polish_bottle" || item.type === "dropper_bottle") {
        const bottleBase = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.22, 0.18), glassMat);
        const liquid = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.16, 0.15), itemColorMat);
        liquid.position.y = -0.02;
        const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.22, 12), goldMetalMat);
        handle.position.y = 0.2;
        itemGroup.add(bottleBase);
        itemGroup.add(liquid);
        itemGroup.add(handle);
      } else if (item.type === "gloss_tube" || item.type === "squeeze_tube") {
        const tubeGeom = new THREE.CylinderGeometry(0.11, 0.04, 0.42, 16);
        const tubeMesh = new THREE.Mesh(tubeGeom, itemColorMat);
        const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.07, 12), goldMetalMat);
        cap.position.y = -0.23;
        itemGroup.add(tubeMesh);
        itemGroup.add(cap);
        itemGroup.rotation.z = Math.PI;
      } else if (item.type === "flat_grid") {
        const caseMesh = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.04, 0.24), goldMetalMat);
        const shadow1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.01, 0.08), new THREE.MeshPhysicalMaterial({ color: 0xff00ff }));
        shadow1.position.set(-0.08, 0.021, -0.05);
        const shadow2 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.01, 0.08), new THREE.MeshPhysicalMaterial({ color: 0x00ffff }));
        shadow2.position.set(0.08, 0.021, -0.05);
        const shadow3 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.01, 0.08), new THREE.MeshPhysicalMaterial({ color: 0xffa500 }));
        shadow3.position.set(-0.08, 0.021, 0.05);
        const shadow4 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.01, 0.08), new THREE.MeshPhysicalMaterial({ color: 0x00ff00 }));
        shadow4.position.set(0.08, 0.021, 0.05);
        itemGroup.add(caseMesh);
        itemGroup.add(shadow1);
        itemGroup.add(shadow2);
        itemGroup.add(shadow3);
        itemGroup.add(shadow4);
      } else if (item.type === "glowing_crystal") {
        const geom = new THREE.OctahedronGeometry(0.18, 1);
        const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });
        const crystal = new THREE.Mesh(geom, mat);
        const glow = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.2, wireframe: true }));
        itemGroup.add(crystal);
        itemGroup.add(glow);
      } else {
        const capsule = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.22, 8, 16), itemColorMat);
        itemGroup.add(capsule);
      }

      const phi = Math.acos(-1 + (2 * index) / 20);
      const theta = Math.sqrt(20 * Math.PI) * phi;
      const radius = 3.6;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      itemGroup.position.set(x, y, z);

      const vectorToCenter = new THREE.Vector3(x, y, z).normalize();
      const upVector = new THREE.Vector3(0, 1, 0);
      const quaternion = new THREE.Quaternion().setFromUnitVectors(upVector, vectorToCenter);
      itemGroup.quaternion.copy(quaternion);

      cosmeticsGlobeGroup.add(itemGroup);
    });

    mainShowcaseGroup.add(cosmeticsGlobeGroup);
    scene.add(mainShowcaseGroup);

    const islands: Record<string, THREE.Group> = {};

    const cosmeticsIsland = new THREE.Group();
    cosmeticsIsland.position.set(-2.8, 1.4, 0);
    const platformCosmetics = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.08, 32), translucentGlassMaterial(0xd4af37));
    const ringCosmetics = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.03, 8, 64), neonRingMaterial(0xd4af37));
    ringCosmetics.rotation.x = Math.PI / 2;
    const crystalCosmetics = new THREE.Mesh(new THREE.OctahedronGeometry(0.55, 1), goldMonolithMaterial);
    crystalCosmetics.position.y = 0.55;
    cosmeticsIsland.add(platformCosmetics);
    cosmeticsIsland.add(ringCosmetics);
    cosmeticsIsland.add(crystalCosmetics);
    mainShowcaseGroup.add(cosmeticsIsland);
    islands['cosmetics'] = cosmeticsIsland;

    const foodIsland = new THREE.Group();
    foodIsland.position.set(-1.4, -1.8, -1.2);
    const platformFood = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.08, 32), translucentGlassMaterial(0x10b981));
    const ringFood = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.03, 8, 64), neonRingMaterial(0x10b981));
    ringFood.rotation.x = Math.PI / 2;
    const torusFood = new THREE.Mesh(new THREE.TorusKnotGeometry(0.38, 0.12, 100, 16), translucentGlassMaterial(0x10b981));
    torusFood.position.y = 0.55;
    foodIsland.add(platformFood);
    foodIsland.add(ringFood);
    foodIsland.add(torusFood);
    mainShowcaseGroup.add(foodIsland);
    islands['food'] = foodIsland;

    const packagingIsland = new THREE.Group();
    packagingIsland.position.set(1.4, 1.6, -1.2);
    const platformPackaging = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.08, 32), translucentGlassMaterial(0x00bfff));
    const ringPackaging = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.03, 8, 64), neonRingMaterial(0x00bfff));
    ringPackaging.rotation.x = Math.PI / 2;
    const cylinderPackaging = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.75, 32), translucentGlassMaterial(0x00bfff));
    cylinderPackaging.position.y = 0.55;
    packagingIsland.add(platformPackaging);
    packagingIsland.add(ringPackaging);
    packagingIsland.add(cylinderPackaging);
    mainShowcaseGroup.add(packagingIsland);
    islands['packaging'] = packagingIsland;

    const tradeIsland = new THREE.Group();
    tradeIsland.position.set(2.8, -1.4, 0);
    const platformTrade = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.08, 32), translucentGlassMaterial(0xa78bfa));
    const ringTrade = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.03, 8, 64), neonRingMaterial(0xa78bfa));
    ringTrade.rotation.x = Math.PI / 2;
    const globeTrade = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), new THREE.MeshBasicMaterial({ color: 0xa78bfa, wireframe: true }));
    globeTrade.position.y = 0.55;
    const shuttleTrade = new THREE.Mesh(new THREE.IcosahedronGeometry(0.08, 0), goldMonolithMaterial);
    shuttleTrade.position.set(0.6, 0.55, 0);
    tradeIsland.add(platformTrade);
    tradeIsland.add(ringTrade);
    tradeIsland.add(globeTrade);
    tradeIsland.add(shuttleTrade);
    mainShowcaseGroup.add(tradeIsland);
    islands['trade'] = tradeIsland;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.12);
    scene.add(ambientLight);

    const warmGoldSpotlight = new THREE.SpotLight(0xd4af37, 2.5);
    warmGoldSpotlight.position.set(4, 8, 4);
    warmGoldSpotlight.angle = Math.PI / 6;
    warmGoldSpotlight.penumbra = 0.8;
    scene.add(warmGoldSpotlight);

    const coolCyanSpotlight = new THREE.SpotLight(0xffdbca, 2.5);
    coolCyanSpotlight.position.set(-6, 8, -4);
    coolCyanSpotlight.angle = Math.PI / 6;
    coolCyanSpotlight.penumbra = 0.8;
    scene.add(coolCyanSpotlight);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 600;
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 16;
      positions[i + 2] = (Math.random() - 0.5) * 16;

      const rand = Math.random();
      if (rand > 0.6) {
        particleColors[i] = 0.95;
        particleColors[i + 1] = 0.78;
        particleColors[i + 2] = 0.45;
      } else if (rand > 0.3) {
        particleColors[i] = 0.98;
        particleColors[i + 1] = 0.65;
        particleColors[i + 2] = 0.55;
      } else {
        particleColors[i] = 0.95;
        particleColors[i + 1] = 0.92;
        particleColors[i + 2] = 0.88;
      }
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      const w = canvas.parentElement.clientWidth;
      const h = canvas.parentElement.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMoveGlobal = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 0.8;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 0.8;
    };
    window.addEventListener('mousemove', handleMouseMoveGlobal);

    let lookTarget = new THREE.Vector3(0, 0, 0);

    const animateCameraTransition = () => {
      let targetCameraPos = { x: 0, y: 0, z: 9.0 };
      let targetLookAt = { x: 0, y: 0, z: 0 };

      if (sceneMode === 'intro') {
        targetCameraPos = { x: 0, y: 0, z: 6.5 };
        targetLookAt = { x: 0, y: 0, z: 0 };
      } else if (sceneMode === 'showcase') {
        if (activeBrandId === 'cosmetics') {
          targetCameraPos = { x: -2.8, y: 1.4, z: 2.6 };
          targetLookAt = { x: -2.8, y: 1.4, z: 0 };
        } else if (activeBrandId === 'food') {
          targetCameraPos = { x: -1.4, y: -1.8, z: 2.4 };
          targetLookAt = { x: -1.4, y: -1.8, z: -1.2 };
        } else if (activeBrandId === 'packaging') {
          targetCameraPos = { x: 1.4, y: 1.6, z: 2.4 };
          targetLookAt = { x: 1.4, y: 1.6, z: -1.2 };
        } else if (activeBrandId === 'trade') {
          targetCameraPos = { x: 2.8, y: -1.4, z: 2.6 };
          targetLookAt = { x: 2.8, y: -1.4, z: 0 };
        } else {
          targetCameraPos = { x: 0, y: 0, z: 8.8 };
          targetLookAt = { x: 0, y: 0, z: 0 };
        }
      }

      gsap.to(camera.position, {
        x: targetCameraPos.x,
        y: targetCameraPos.y,
        z: targetCameraPos.z,
        duration: 2.2,
        ease: 'power3.inOut'
      });

      gsap.to(lookTarget, {
        x: targetLookAt.x,
        y: targetLookAt.y,
        z: targetLookAt.z,
        duration: 2.2,
        ease: 'power3.inOut'
      });
    };

    animateCameraTransition();

    let frames = 0;
    let lastTime = performance.now();
    let computedFps = 60;
    const clock = new THREE.Clock();

    let reqAnimationId: number;

    const tick = () => {
      reqAnimationId = requestAnimationFrame(tick);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      camera.position.x += currentMouseX * delta * 4;
      camera.position.y -= currentMouseY * delta * 4;
      camera.lookAt(lookTarget);

      if (sceneMode === 'intro') {
        introGroup.visible = true;
        mainShowcaseGroup.visible = false;

        centralStar.rotation.y += delta * 0.45;
        centralStar.rotation.x += delta * 0.15;
        orbitRing1.rotation.z += delta * 0.25;
        orbitRing2.rotation.z -= delta * 0.18;
      } else {
        introGroup.visible = false;
        mainShowcaseGroup.visible = true;

        cosmeticsGlobeGroup.rotation.y = elapsed * 0.08;
        cosmeticsGlobeGroup.rotation.x = Math.sin(elapsed * 0.04) * 0.08;

        ringY.rotation.z = elapsed * 0.25;
        ringX.rotation.y = -elapsed * 0.15;
        ringZ.rotation.x = elapsed * 0.18;

        cosmeticsGlobeGroup.children.forEach((child, i) => {
          if (child instanceof THREE.Group) {
            child.rotation.y += delta * 0.8;
            const scalePulse = 1.0 + Math.sin(elapsed * 1.8 + i) * 0.08;
            child.scale.set(scalePulse, scalePulse, scalePulse);
          }
        });

        const cycleIndex = Math.floor(elapsed / 1.5) % 20;
        if (lastScannedIndexRef.current !== cycleIndex) {
          lastScannedIndexRef.current = cycleIndex;
          setActiveCosmeticName({
            ar: COSMETIC_ITEMS[cycleIndex].nameAr,
            en: COSMETIC_ITEMS[cycleIndex].nameEn
          });
        }

        const isCosmeticsSelected = activeBrandId === 'cosmetics';
        const isCosmeticsHovered = hoveredBrandId === 'cosmetics';
        cosmeticsIsland.position.y = 1.4 + Math.sin(elapsed * 1.5) * 0.08;
        crystalCosmetics.rotation.y += delta * (isCosmeticsSelected ? 2.5 : isCosmeticsHovered ? 1.6 : 0.4);
        ringCosmetics.rotation.z += delta * 0.4;

        const isFoodSelected = activeBrandId === 'food';
        const isFoodHovered = hoveredBrandId === 'food';
        foodIsland.position.y = -1.8 + Math.sin(elapsed * 1.2 + 1.0) * 0.08;
        torusFood.rotation.y += delta * (isFoodSelected ? 2.5 : isFoodHovered ? 1.6 : 0.4);
        torusFood.rotation.x += delta * 0.15;
        ringFood.rotation.z -= delta * 0.4;

        const isPackagingSelected = activeBrandId === 'packaging';
        const isPackagingHovered = hoveredBrandId === 'packaging';
        packagingIsland.position.y = 1.6 + Math.sin(elapsed * 1.3 + 2.0) * 0.08;
        cylinderPackaging.rotation.y += delta * (isPackagingSelected ? 2.8 : isPackagingHovered ? 1.8 : 0.4);
        ringPackaging.rotation.z += delta * 0.4;

        const isTradeSelected = activeBrandId === 'trade';
        const isTradeHovered = hoveredBrandId === 'trade';
        tradeIsland.position.y = -1.4 + Math.sin(elapsed * 1.4 + 3.0) * 0.08;
        globeTrade.rotation.y += delta * (isTradeSelected ? 2.5 : isTradeHovered ? 1.6 : 0.4);
        shuttleTrade.position.x = Math.cos(elapsed * 2.2) * 0.7;
        shuttleTrade.position.z = Math.sin(elapsed * 2.2) * 0.7;
        ringTrade.rotation.z -= delta * 0.4;
      }

      particleSystem.rotation.y = elapsed * 0.012;
      particleSystem.rotation.x = elapsed * 0.006;

      renderer.render(scene, camera);

      frames++;
      const timeNow = performance.now();
      if (timeNow - lastTime >= 1000) {
        computedFps = Math.round((frames * 1000) / (timeNow - lastTime));
        frames = 0;
        lastTime = timeNow;

        setTelemetry({
          fps: computedFps,
          drawCalls: renderer.info.render.calls,
          polygons: renderer.info.render.triangles,
          orbitAngle: Math.round(elapsed * 8) % 360,
          laserIntensity: parseFloat((1.0 + Math.sin(elapsed * 5) * 0.25).toFixed(2)),
          quantumStability: parseFloat((99.6 + Math.random() * 0.3).toFixed(2))
        });
      }
    };

    tick();

    return () => {
      cancelAnimationFrame(reqAnimationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMoveGlobal);
      renderer.dispose();
    };
  }, [sceneMode, activeBrandId, hoveredBrandId]);

  const handleCardMouseMove = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotlightPos((prev) => ({
      ...prev,
      [id]: { x, y }
    }));
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-[radial-gradient(circle_at_center,_#120d09_0%,_#060403_60%,_#010101_100%)] text-white select-none scrollbar-thin scrollbar-thumb-amber-400/20"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.85)_100%)] pointer-events-none" />

      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between px-6 py-8 max-w-7xl mx-auto">
        <header className="flex items-center justify-between border-b border-white/5 pb-6 backdrop-blur-md bg-black/10">
          <div className="flex items-center gap-4">
            <span className="font-serif text-2xl tracking-[0.3em] font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-300 to-amber-400">
              ASLAN
            </span>
            <span className="text-[9px] font-sans font-bold tracking-[0.25em] text-amber-400/80 px-2.5 py-0.5 border border-amber-400/20 uppercase rounded bg-amber-400/5">
              {TEXTS.tagline}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button 
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                if(!soundEnabled) setTimeout(() => playSfx('sonar'), 100);
              }}
              className="text-[10px] font-sans font-bold tracking-wider uppercase text-neutral-400 hover:text-amber-400 transition-colors flex items-center gap-2 cursor-pointer border border-white/5 hover:border-amber-400/20 px-3 py-1.5 rounded-full bg-black/40"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">{TEXTS.soundOn}</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-neutral-500" />
                  <span className="hidden sm:inline">{TEXTS.soundOff}</span>
                </>
              )}
            </button>

            <div className="flex items-center border border-white/5 rounded-full p-0.5 bg-black/40 backdrop-blur-md">
              {(['ar', 'en', 'tr', 'it'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    onLanguageChange(lang);
                    playSfx('hover');
                  }}
                  className={`text-[9px] font-bold px-2.5 py-1 rounded-full uppercase cursor-pointer transition-all duration-300 ${
                    language === lang 
                      ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/10' 
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button 
              onClick={() => {
                playSfx('close');
                onClose();
              }}
              className="text-[10px] font-sans tracking-widest uppercase font-bold text-amber-400 hover:text-black hover:bg-amber-400 bg-black/40 border border-amber-400/30 hover:border-amber-400 px-4 py-2 rounded transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              {TEXTS.backBtn}
            </button>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {sceneMode === 'intro' ? (
            <motion.div
              key="intro-panel"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="my-auto text-center space-y-12 relative z-10"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  className="inline-flex items-center gap-3 border border-amber-400/30 px-4 py-1.5 rounded-full bg-amber-400/5 text-amber-400 uppercase tracking-[0.3em] text-[10px] font-sans"
                >
                  <Shield className="w-3 h-3 text-amber-400" />
                  <span>{TEXTS.foundingYear}</span>
                </motion.div>

                <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-extralight tracking-[0.18em] uppercase text-white">
                  A S L A N
                </h1>

                <p className="text-neutral-400 tracking-widest uppercase text-xs sm:text-sm font-light font-sans max-w-lg mx-auto">
                  {TEXTS.loadingHQ}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleSkipIntro}
                  className="px-8 py-4 bg-amber-400 hover:bg-white text-black font-sans font-extrabold tracking-widest text-xs uppercase rounded shadow-2xl shadow-amber-400/10 hover:shadow-white/10 transition-all duration-300 cursor-pointer flex items-center gap-2 group"
                >
                  <span>{TEXTS.enterExperience}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleSkipIntro}
                  className="px-6 py-4 border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white font-sans font-bold tracking-widest text-[10px] uppercase rounded transition-all duration-300 cursor-pointer"
                >
                  {TEXTS.skipIntro}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="showcase-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col gap-10 my-8 relative z-10"
            >
              <div className="w-full overflow-hidden py-5 border-y border-white/5 bg-black/40 backdrop-blur-md relative rounded-lg" dir="ltr">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 pointer-events-none" />
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020202] via-[#020202]/45 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020202] via-[#020202]/45 to-transparent z-10 pointer-events-none" />
                
                <motion.div
                  className="flex whitespace-nowrap gap-8 select-none"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ ease: "linear", duration: 64, repeat: Infinity }}
                  style={{ width: "max-content" }}
                >
                  <div className="flex shrink-0 items-center gap-8">
                    {triplyRibbonBrands.map((brand, idx) => (
                      <div key={`copy1-${idx}`} className="flex items-center gap-3.5 group cursor-pointer border border-white/5 hover:border-amber-400/30 px-5 py-2 rounded-lg bg-white/5 hover:bg-black/60 transition-all duration-300 shadow-lg">
                        <span className="text-amber-400 text-base group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">{brand.icon}</span>
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-serif font-light text-white group-hover:text-amber-400 transition-colors duration-300">{brand.nameAr}</span>
                          <span className="text-[8px] font-mono tracking-widest text-neutral-500 font-bold group-hover:text-amber-400/70 transition-colors duration-300">{brand.nameEn}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex shrink-0 items-center gap-8">
                    {triplyRibbonBrands.map((brand, idx) => (
                      <div key={`copy2-${idx}`} className="flex items-center gap-3.5 group cursor-pointer border border-white/5 hover:border-amber-400/30 px-5 py-2 rounded-lg bg-white/5 hover:bg-black/60 transition-all duration-300 shadow-lg">
                        <span className="text-amber-400 text-base group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">{brand.icon}</span>
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-serif font-light text-white group-hover:text-amber-400 transition-colors duration-300">{brand.nameAr}</span>
                          <span className="text-[8px] font-mono tracking-widest text-neutral-500 font-bold group-hover:text-amber-400/70 transition-colors duration-300">{brand.nameEn}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 flex flex-col justify-between min-h-[160px] lg:min-h-[480px] order-2 lg:order-1 relative">
                  <div className="space-y-4 max-w-xs p-6 border border-white/10 bg-black/60 backdrop-blur-xl rounded-xl font-mono text-[10px] text-neutral-400 select-none shadow-2xl">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2 text-amber-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                        <span className="font-bold uppercase tracking-wider">{TEXTS.telemetry}</span>
                      </div>
                      <span className="text-[8px] px-1.5 py-0.5 rounded bg-amber-400/10 font-bold border border-amber-400/20">{TEXTS.systemActive}</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between"><span>RENDER SYSTEM:</span><span className="text-white font-bold">WEBGL (THREE)</span></div>
                      <div className="flex justify-between"><span>FRAME RATE:</span><span className="font-bold text-emerald-400">{telemetry.fps} FPS</span></div>
                      <div className="flex justify-between"><span>GEOMETRY LOAD:</span><span className="text-white">{telemetry.polygons} POLYGONS</span></div>
                      <div className="flex justify-between"><span>QUANTUM STABILITY:</span><span className="text-emerald-400 font-bold font-mono">{telemetry.quantumStability}%</span></div>
                      <div className="flex justify-between"><span>FOCUS COORDINATE:</span><span className="text-amber-400 font-bold uppercase">{activeBrandId || 'AMBIENT_ORBIT'}</span></div>
                      <div className="flex justify-between"><span>GLOBE SCANNER:</span><span className="text-emerald-400 font-bold uppercase animate-pulse">{isRtl ? activeCosmeticName.ar : activeCosmeticName.en}</span></div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
                  <div className="space-y-4">
                    <span className="text-amber-400 text-xs font-sans tracking-[0.4em] uppercase font-extrabold block">{TEXTS.tagline}</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extralight text-white leading-tight tracking-wider uppercase">{TEXTS.title}</h2>
                    <p className="text-neutral-400 text-sm font-light max-w-xl leading-relaxed">{TEXTS.subtitle}</p>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-amber-400 to-transparent" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                    {BRANDS_DATA.map((brand) => {
                      const spotlight = spotlightPos[brand.id] || { x: 0, y: 0 };
                      const isHovered = hoveredBrandId === brand.id;
                      const isActive = activeBrandId === brand.id;

                      return (
                        <div
                          key={brand.id}
                          onMouseMove={(e) => handleCardMouseMove(brand.id, e)}
                          onMouseEnter={() => { setHoveredBrandId(brand.id); playSfx('hover'); }}
                          onMouseLeave={() => setHoveredBrandId(null)}
                          onClick={() => { playSfx('click'); setActiveBrandId(isActive ? null : brand.id); }}
                          className={`relative p-6 bg-black/45 border transition-all duration-500 rounded-xl cursor-pointer group overflow-hidden ${isActive ? 'border-amber-400 bg-black/85 shadow-2xl shadow-amber-400/15 scale-[1.02]' : isHovered ? 'border-white/20 bg-black/55' : 'border-white/5'}`}
                        >
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: `radial-gradient(350px circle at ${spotlight.x}px ${spotlight.y}px, ${brand.color}15, transparent 80%)` }} />
                        <div className="relative z-10 space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">{brand.icon}</div>
                            <span className={`text-[9px] font-mono tracking-widest uppercase font-bold px-2.5 py-1 rounded ${isActive ? 'bg-amber-400 text-black' : 'bg-white/5 text-neutral-400'}`}>{isActive ? 'CLOSE VIEW ✕' : 'FOCUS 3D →'}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-serif font-light text-white uppercase">{brand.name[language]}</h3>
                            <p className="text-[10px] text-amber-400/80 font-sans tracking-widest uppercase font-extrabold mt-1">{brand.tagline[language]}</p>
                          </div>
                          <p className="text-xs text-neutral-400 font-light leading-relaxed">{brand.desc[language]}</p>
                        <span className="text-[10px] text-amber-400 tracking-wider uppercase font-bold flex items-center gap-1.5 pt-2">{TEXTS.exploreBtn} &rarr;</span>
                      </div>
                    </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {sceneMode === 'showcase' && activeBrandId && (() => {
            const selectedBrand = BRANDS_DATA.find(b => b.id === activeBrandId);
            if (!selectedBrand) return null;

            return (
              <motion.div
                initial={{ opacity: 0, y: 70, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="my-12 p-8 border border-white/10 bg-black/85 backdrop-blur-3xl rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 relative overflow-hidden shadow-2xl"
              >
                <div className="lg:col-span-4 space-y-4">
                  <div className="inline-flex items-center gap-2 text-amber-400 uppercase font-sans tracking-[0.25em] text-xs font-bold bg-amber-400/5 px-3 py-1 border border-amber-400/10 rounded-full">
                    {selectedBrand.icon}
                    <span>{selectedBrand.name[language]}</span>
                  </div>
                  <h4 className="text-3xl font-serif font-light text-white leading-tight uppercase">{selectedBrand.tagline[language]}</h4>
                  <div className="w-16 h-[2px] bg-amber-400" />
                  
                  {/* Image Frame with direct persistent URL */}
                  <div className="relative aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-neutral-950 shadow-lg">
                    <img
                      src={selectedBrand.image}
                      alt={selectedBrand.name[language]}
                      onError={(e) => {
                        const img = e.currentTarget;
                        img.onerror = null;
                        img.src = '/meeting-room.png';
                      }}
                      className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-6">
                  <h5 className="text-[10px] font-sans tracking-[0.3em] uppercase font-bold text-amber-400 flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{TEXTS.metrics}</span>
                  </h5>
                  <div className="space-y-4">
                    {selectedBrand.metrics.map((metric, idx) => (
                      <div key={idx} className="p-4 border border-white/5 bg-black/50 rounded-xl flex items-center justify-between">
                        <span className="text-xs text-neutral-400 font-light">{metric.label[language]}</span>
                        <span className="text-2xl font-mono text-white font-extralight tracking-widest">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={onContactClick}
                    className="w-full p-4 border border-amber-400/40 hover:border-amber-400 text-amber-400 hover:text-black hover:bg-amber-400 font-sans tracking-[0.2em] text-xs uppercase font-extrabold transition-all duration-300 rounded-xl cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{TEXTS.getInTouch}</span>
                  </button>
                </div>

                <div className="lg:col-span-4 space-y-6">
                  <h5 className="text-[10px] font-sans tracking-[0.3em] uppercase font-bold text-amber-400 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{TEXTS.viewSpecs}</span>
                  </h5>
                  <div className="space-y-3">
                    {selectedBrand.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between border-b border-white/5 pb-2 text-xs">
                        <span className="text-neutral-400 font-light">{spec.key[language]}</span>
                        <span className="text-white font-mono font-bold">{spec.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        <footer className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 space-y-4 sm:space-y-0">
          <div className="flex items-center gap-1.5 font-mono">
            <Cpu className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '5s' }} />
            <span className="tracking-widest">ACTIVE MODULE: 3D GRAPHICS RENDERER (60FPS CONSTANT)</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px]">
            <span>© {new Date().getFullYear()} ASLAN INTERNATIONAL HOLDING INC.</span>
            <span>SECURE SYSTEM LAYER</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
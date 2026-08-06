export interface CompanyDetails {
  id: string;
  name: { ar: string; en: string; tr?: string; it?: string };
  title: { ar: string; en: string; tr?: string; it?: string };
  tagline: { ar: string; en: string; tr?: string; it?: string };
  sector: { ar: string; en: string; tr?: string; it?: string };
  image: string;
  description: { ar: string; en: string; tr?: string; it?: string };
  fullStory: { ar: string; en: string; tr?: string; it?: string };
  stats: {
    label: { ar: string; en: string; tr?: string; it?: string };
    value: string;
  }[];
  specifications: {
    key: { ar: string; en: string; tr?: string; it?: string };
    value: { ar: string; en: string; tr?: string; it?: string };
  }[];
  gallery: string[];
}

export interface MetricData {
  id: string;
  number: string;
  suffix: string;
  label: { ar: string; en: string; tr?: string; it?: string };
  description: { ar: string; en: string; tr?: string; it?: string };
}

export interface HeroSlide {
  id: string;
  title: { ar: string; en: string; tr?: string; it?: string };
  subtitle: { ar: string; en: string; tr?: string; it?: string };
  ctaText: { ar: string; en: string; tr?: string; it?: string };
  image: string;
  logoText: string;
  video?: string;
}

export type Language = 'ar' | 'en' | 'tr' | 'it';

export const TRANSLATIONS = {
  ar: {
    menu: 'القائمة',
    close: 'إغلاق',
    discoverNow: 'اكتشف الآن',
    findDealer: 'تواصل معنا',
    exploreFurther: 'استكشف المزيد',
    continueJourney: 'تابع رحلتك الاستكشافية',
    commissionTitle: 'ابدأ شراكتك معنا',
    commissionSubtitle: 'صمم مواصفات الإنتاج الخاصة بك واحصل على استشارة فورية من خبرائنا.',
    contactUs: 'تواصل معنا',
    requestQuote: 'طلب عروض أسعار / توريد',
    fullName: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    companyName: 'اسم الشركة',
    sectorSelect: 'اختر القطاع المهتم به',
    selectSectorPlaceholder: '--- اختر القطاع ---',
    message: 'تفاصيل الطلب ومواصفات المنتج',
    submit: 'إرسال طلب الشراكة',
    successMessage: 'تم إرسال طلبك بنجاح. سيتواصل معك أحد مستشارينا خلال 24 ساعة.',
    exploreBtn: 'استكشف التفاصيل',
    specificationsLabel: 'المواصفات الفنية والمقاييس',
    statsLabel: 'مؤشرات الأداء السنوية',
    viewFactories: 'عرض جولة افتراضية للمصنع',
    allRightsReserved: 'جميع الحقوق محفوظة لمجموعة أصلان القابضة © 2026',
    preOwned: 'علاقات المستثمرين',
    cookies: 'ملفات تعريف الارتباط',
    pressclub: 'المركز الإعلامي',
    legal: 'الشروط القانونية',
    complaints: 'ملاحظات وشكاوى',
    language: 'اللغة',
    careers: 'الوظائف والمهن',
    siteMap: 'خريطة الموقع',
    faqs: 'الأسئلة الشائعة',
    whispers: 'مجلة أصلان',
    contact: 'اتصال مباشر',
    sustainability: 'الاستدامة والبيئة',
    telemetryActive: 'البث المباشر للمصنع متصل',
    liveStatus: 'حالة خط الإنتاج',
    operational: 'يعمل بكفاءة',
    currentSpeed: 'سرعة الإنتاج الحالية',
    tempC: 'درجة حرارة المفاعل الأساسي',
    unitsToday: 'الوحدات المصنعة اليوم',
    towardsExcellence: 'رحلتك نحو التميز',
    precisionEngineering: 'رؤية تكاملية تجمع الابتكار بالفخامة الحقيقية',
    qualityExcellence: 'ثقافة الجودة والتميز',
    qualityExcellenceDesc: 'نبني الثقة من خلال الجودة، ونصنع التميز في كل تفصيل.',
    globalCertifications: 'الشهادات العالمية',
    globalCertificationsDesc: 'أعلى المعايير العالمية - شهادات واعتمادات معترف دولية .',
    viewDocuments: 'استعراض المستندات',
    strategicPartnerships: 'الشراكات الاستراتيجية',
    strategicPartnershipsDesc: 'نبني شراكات طويلة الأمد تقوم على الثقة والنمو والنجاح المشترك.',
  },
  en: {
    menu: 'MENU',
    close: 'CLOSE',
    discoverNow: 'DISCOVER NOW',
    findDealer: 'CONTACT US',
    exploreFurther: 'EXPLORE FURTHER',
    continueJourney: 'CONTINUE YOUR JOURNEY',
    commissionTitle: 'COMMISSION YOUR PARTNERSHIP',
    commissionSubtitle: 'Design your custom manufacturing specifications and consult our industrial specialists.',
    contactUs: 'Contact Us',
    requestQuote: 'Request Quote / Supply Chain Inquiry',
    fullName: 'Full Name',
    email: 'Email Address',
    companyName: 'Company Name',
    sectorSelect: 'Select Sector of Interest',
    selectSectorPlaceholder: '--- Select Sector ---',
    message: 'Inquiry Details & Product Specifications',
    submit: 'Submit Partnership Request',
    successMessage: 'Your inquiry has been submitted successfully. Our specialists will contact you within 24 hours.',
    exploreBtn: 'Explore Details',
    specificationsLabel: 'Technical Specifications & Standards',
    statsLabel: 'Annual Key Performance Indicators',
    viewFactories: 'View Interactive Factory Tour',
    allRightsReserved: 'All Rights Reserved. Aslan Holding Group © 2026',
    preOwned: 'Investor Relations',
    cookies: 'Cookie Policy',
    pressclub: 'Press Club',
    legal: 'Legal Terms',
    complaints: 'Complaints & Feedback',
    language: 'Language',
    careers: 'Careers',
    siteMap: 'Site Map',
    faqs: 'FAQs',
    whispers: 'Aslan Chronicle',
    contact: 'Contact',
    sustainability: 'Sustainability',
    telemetryActive: 'Live Factory Telemetry Active',
    liveStatus: 'Assembly Line Status',
    operational: 'Fully Operational',
    currentSpeed: 'Current Production Speed',
    tempC: 'Reactor Temperature',
    unitsToday: 'Units Manufactured Today',
    towardsExcellence: 'Towards Excellence',
    precisionEngineering: 'WHERE PRECISION ENGINEERING INTEGRATES WITH ARTISTRY',
    qualityExcellence: 'QUALITY & EXCELLENCE',
    qualityExcellenceDesc: 'Building Trust Through Quality, Creating Excellence in Every Detail.',
    globalCertifications: 'GLOBAL CERTIFICATIONS',
    globalCertificationsDesc: 'Highest International Standards & Globally Recognized Certifications.',
    viewDocuments: 'VIEW DOCUMENTS',
    strategicPartnerships: 'STRATEGIC PARTNERSHIPS',
    strategicPartnershipsDesc: 'Building Long-Term Partnerships Based on Trust, Growth, and Shared Success.',
  },
  tr: {
    menu: 'MENÜ',
    close: 'KAPAT',
    discoverNow: 'ŞİMDİ KEŞFEDİN',
    findDealer: 'BİZİMLE İLETİŞİME GEÇİN',
    exploreFurther: 'DAHA FAZLA KEŞFEDİN',
    continueJourney: 'YOLCULUĞUNUZA DEVAM EDİN',
    commissionTitle: 'ORTAKLIĞINIZI BAŞLATIN',
    commissionSubtitle: 'Özel üretim özelliklerinizi tasarlayın ve endüstriyel uzmanlarımıza danışın.',
    contactUs: 'Bizimle İletişime Geçin',
    requestQuote: 'Teklif Talebi / Tedarik Zinciri Sorgusu',
    fullName: 'Ad Soyad',
    email: 'E-posta Adresi',
    companyName: 'Şirket Adı',
    sectorSelect: 'İlgi Alanı Olan Sektörü Seçin',
    selectSectorPlaceholder: '--- Sektör Seçiniz ---',
    message: 'Talep Detayları ve Ürün Özellikleri',
    submit: 'Ortaklık Talebini Gönder',
    successMessage: 'Talebiniz başarıyla gönderildi. Uzmanlarımız 24 saat içinde sizinle iletişime geçecektir.',
    exploreBtn: 'Detayları Keşfedin',
    specificationsLabel: 'Teknik Özellikler ve Standartlar',
    statsLabel: 'Yıllık Anahtar Performans Göstergeleri',
    viewFactories: 'Etkileşimli Fabrika Turunu Görüntüle',
    allRightsReserved: 'Tüm Hakları Saklıdır. Aslan Holding Grubu © 2026',
    preOwned: 'Yatırımcı İlişkileri',
    cookies: 'Çerez Politikası',
    pressclub: 'Basın Kulübü',
    legal: 'Yasal Koşullar',
    complaints: 'Şikayet ve Geri Bildirim',
    language: 'Dil',
    careers: 'Kariyer',
    siteMap: 'Site Haritası',
    faqs: 'SSS (Sıkça Sorulan Sorular)',
    whispers: 'Aslan Günlüğü',
    contact: 'İletişim',
    sustainability: 'Sürdürülebilirlik',
    telemetryActive: 'Canlı Fabrika Telemetrisi Aktif',
    liveStatus: 'Montaj Hattı Durumu',
    operational: 'Tamamen Operasyonel',
    currentSpeed: 'Mevcut Üretim Hızı',
    tempC: 'Reaktör Sıcaklığı',
    unitsToday: 'Bugün Üretilen Birimler',
    towardsExcellence: 'Mükemmelliğe Doğru',
    precisionEngineering: 'HASSAS MÜHENDİSLİĞİN SANATLA BULUŞTUĞU YER',
    qualityExcellence: 'KALİTE VE MÜKEMMELLİK',
    qualityExcellenceDesc: 'Kaliteyle Güven İnşa Ediyor, Her Detayda Mükemmellik Yaratıyoruz.',
    globalCertifications: 'KÜRESEL SERTİFİKALAR',
    globalCertificationsDesc: 'En Yüksek Uluslararası Standartlar ve Küresel Düzeyde Tanınan Sertifikalar.',
    viewDocuments: 'BELGELERİ GÖRÜNTÜLE',
    strategicPartnerships: 'STRATEJİK ORTAKLIKLAR',
    strategicPartnershipsDesc: 'Güven, Büyüme ve Ortak Başarıya Dayalı Uzun Vadeli Ortaklıklar Kuruyoruz.',
  },
  it: {
    menu: 'MENU',
    close: 'CHIUDI',
    discoverNow: 'SCOPRI ORA',
    findDealer: 'CONTATTACI',
    exploreFurther: 'SCOPRI DI PIÙ',
    continueJourney: 'CONTINUA IL TUO VIAGGIO',
    commissionTitle: 'AVVIA LA TUA COLLABORAZIONE',
    commissionSubtitle: 'Progetta le tue specifiche di produzione personalizzate e consulta i nostri specialisti industriali.',
    contactUs: 'Contattaci',
    requestQuote: 'Richiesta di Preventivo / Fornitura',
    fullName: 'Nome Completo',
    email: 'Indirizzo E-mail',
    companyName: 'Nome dell\'Azienda',
    sectorSelect: 'Seleziona il Settore di Interesse',
    selectSectorPlaceholder: '--- Seleziona Settore ---',
    message: 'Dettagli della Richiesta e Specifiche del Prodotto',
    submit: 'Invia Richiesta di Collaborazione',
    successMessage: 'La tua richiesta è stata inviata con successo. I nostri specialisti ti contatteranno entro 24 ore.',
    exploreBtn: 'Esplora i Dettagli',
    specificationsLabel: 'Specifiche Tecniche e Standard',
    statsLabel: 'Indicatori Chiave di Prestazione Annuali',
    viewFactories: 'Visualizza il Tour Interattivo della Fabbrica',
    allRightsReserved: 'Tutti i diritti riservati. Aslan Holding Group © 2026',
    preOwned: 'Relazioni con gli Investitori',
    cookies: 'Politica sui Cookie',
    pressclub: 'Press Club',
    legal: 'Termini Legali',
    complaints: 'Reclami e Feedback',
    language: 'Lingua',
    careers: 'Opportunità di Lavoro',
    siteMap: 'Mappa del Sito',
    faqs: 'FAQ',
    whispers: 'Cronaca di Aslan',
    contact: 'Contatto',
    sustainability: 'Sostenibilità',
    telemetryActive: 'Telemetria Fabbrica in Tempo Reale Attiva',
    liveStatus: 'Stato della Linea di Assemblaggio',
    operational: 'Completamente Operativo',
    currentSpeed: 'Velocità di Produzione Attuale',
    tempC: 'Temperatura del Reattore',
    unitsToday: 'Unità Prodotte Oggi',
    towardsExcellence: 'Verso l\'Eccellenza',
    precisionEngineering: 'DOVE L\'INGEGNERIA DI PRECISIONE SI INTEGRA CON L\'ARTE',
    qualityExcellence: 'QUALITÀ E ECCELLENZA',
    qualityExcellenceDesc: 'Costruire la fiducia attraverso la qualità, creando l\'eccellenza in ogni dettaglio.',
    globalCertifications: 'CERTIFICAZIONI GLOBALI',
    globalCertificationsDesc: 'I più alti standard internazionali e certificazioni riconosciute a livello globale.',
    viewDocuments: 'VISUALIZZA DOCUMENTI',
    strategicPartnerships: 'PARTNERSHIP STRATEGICHE',
    strategicPartnershipsDesc: 'Costruire partnership a lungo termine basate su fiducia, crescita e successo condiviso.',
  },
};

export function getTranslation(obj: { ar: string; en: string; tr?: string; it?: string } | undefined, lang: Language): string {
  if (!obj) return '';
  return obj[lang] || obj['en'];
}

export const COMPANIES_DATA: CompanyDetails[] = [
  {
    id: 'cosmetics',
    name: {
      ar: 'أصلان لمستحضرات التجميل',
      en: 'Aslan Cosmetics & Skincare',
      tr: 'Aslan Kozmetik & Cilt Bakımı',
      it: 'Aslan Cosmetica & Cura della Pelle'
    },
    title: {
      ar: 'مصنع أصلان لمستحضرات التجميل والعناية الشخصية',
      en: 'Aslan Cosmetics & Personal Care Factory',
      tr: 'Aslan Kozmetik & Kişisel Bakım Fabrikası',
      it: 'Fabbrica di Cosmetici & Cura della Persona Aslan'
    },
    tagline: {
      ar: 'حيث تلتقي الفخامة مع الابتكار العلمي الدقيق',
      en: 'Where Luxury Meets Precise Scientific Innovation',
      tr: 'Lüksün Hassas Bilimsel İnovasyonla Buluştuğu Yer',
      it: "Dove il lusso incontra l'innovazione scientifica di precisione"
    },
    sector: {
      ar: 'مستحضرات التجميل والعناية الراقية',
      en: 'Premium Skincare & Cosmetics',
      tr: 'Seçkin Cilt Bakımı & Kozmetik',
      it: 'Cosmesi & Cura della Pelle Premium'
    },
    image: '/factory.png',
    description: {
      ar: 'من تطوير العلامات التجارية إلى التصنيع والإنتاج الكامل، نقدم حلولاً احترافية للشركات والعلامات التجارية حول العالم.',
      en: 'From brand development to full-scale manufacturing, we provide professional cosmetic solutions for brands and businesses worldwide.',
      tr: 'Marka geliştirmeden tam kapsamlı üretime kadar, dünya çapındaki markalar ve işletmeler için profesyonel kozmetik çözümleri sunuyoruz.',
      it: 'Dallo sviluppo del marchio alla produzione su larga scala, forniamo soluzioni cosmetiche professionali per marchi e aziende in tutto il mondo.'
    },
    fullStory: {
      ar: `على مدار سنوات من الخبرة، نجحت ASLAN INTERNATIONAL في تطوير وإطلاق العديد من العلامات التجارية، وتُعد LOVABELLA العلامة الرائدة للشركة، والتي تجسد التزامنا بالجودة والابتكار والمعايير العالمية.

وبالإضافة إلى علاماتنا التجارية، نقدم خدمات OEM/ODM و Private Label لتطوير وتصنيع مستحضرات التجميل، والعناية بالبشرة، والعناية الشخصية، بدءاً من تطوير التركيبات وتصميم العبوات وحتى الإنتاج النهائي.

كما حظيت الشركة بثقة العديد من العلامات التجارية والمؤثرين لتطوير وإنتاج منتجات تحمل علاماتهم الخاصة، مع الالتزام الكامل بسرية جميع المشاريع وحماية هوية عملائنا.

ورغم تقديمنا حلول تصنيع متكاملة لشركائنا، تبقى الأولوية دائماً لتطوير وتعزيز علاماتنا التجارية الخاصة، وفي مقدمتها LOVABELLA، بما يعكس رؤيتنا في تقديم منتجات تنافس في الأسواق المحلية والعالمية.`,
      en: `Over years of experience, ASLAN INTERNATIONAL has successfully developed and launched several brands. LOVABELLA stands as the company's leading brand, embodying our commitment to quality, innovation, and international standards.

In addition to our own brands, we offer OEM/ODM and Private Label services for the development and manufacturing of cosmetics, skincare, and personal care products—from formulation development and packaging design to final production.

The company has also earned the trust of numerous public brands, public figures, and influencers to develop and produce products under their private labels, with absolute commitment to confidentiality and protecting our clients' identities.

While we provide comprehensive manufacturing solutions to our partners, our primary focus remains on developing and strengthening our own proprietary brands, led by LOVABELLA, reflecting our vision to offer products that compete in both local and global markets.`,
      tr: `Yılların deneyimiyle, ASLAN INTERNATIONAL birçok markayı başarıyla geliştirip pazara sunmuştur. Şirketin öncü markası olan LOVABELLA, kaliteye, inovasyona ve uluslararası standartlara olan bağlılığımızı temsil etmektedir.

Kendi markalarımızın yanı sıra, kozmetik, cilt bakımı ve kişisel bakım ürünlerinin formül geliştirmeden ambalaj tasarımına ve nihai üretime kadar OEM/ODM ve Private Label (Özel Marka) hizmetlerini sunuyoruz.

Şirketimiz ayrıca, projelerin gizliliğine ve müşteri kimliğinin korunmasına tam bağlılık göstererek, kendi özel markaları altında ürünler geliştirmek ve üretmek isteyen birçok tanınmış marka ve fenomenin güvenini kazanmıştır.

Ortaklarımıza uçtan uca üretim çözümleri sunarken, birincil önceliğimiz her zaman LOVABELLA başta olmak üzere kendi tescilli markalarimizi geliştirmek ve güçlendirmektir. Bu, hem yerel hem de küresel pazarlarda rekabet edebilecek ürünler sunma vizyonumuzu yansıtmaktadır.`,
      it: `Con anni di esperienza, ASLAN INTERNATIONAL ha sviluppato e lanciato con successo diversi marchi. LOVABELLA rappresenta il marchio leader dell'azienda, incarnando il nostro impegno per la qualità, l'innovazione e gli standard internazionali.

Oltre ai nostri marchi, offriamo servizi OEM/ODM e Private Label per lo sviluppo e la produzione di cosmetici, cura della pelle e prodotti per la cura personale, dallo sviluppo delle formule e del design del packaging fino alla produzione finale.

L'azienda ha inoltre guadagnato la fiducia di numerosi marchi, personaggi pubblici e influencer per sviluppare e produrre prodotti con i loro marchi privati, con un impegno assoluto alla riservatezza e alla protezione dell'identità dei nostri clienti.

Pur fornendo soluzioni di produzione complete ai nostri partner, il nostro focus primario rimane lo sviluppo e il rafforzamento dei nostri marchi proprietari, guidati da LOVABELLA, riflettendo la nostra visione di offrire prodotti competitivi sia nei mercati locali che globali.`
    },
    stats: [
      { label: { ar: 'الطاقة الإنتاجية السنوية', en: 'Annual Production Capacity', tr: 'Yıllık Üretim Kapasitesi', it: 'Capacità di Produzione Annuale' }, value: '50,000,000+' },
      { label: { ar: 'خبراء الكيمياء والبحوث', en: 'R&D Chemists & Researchers', tr: 'Ar-Ge Kimyagerleri & Araştırmacılar', it: 'Chimici di Ricerca & Sviluppo' }, value: '45+' },
      { label: { ar: 'بلدان التصدير العالمية', en: 'Global Export Countries', tr: 'Küresel İhracat Ülkeleri', it: 'Paesi di Esportazione Globale' }, value: '24' },
      { label: { ar: 'خطوط الإنتاج المؤتمتة بالكامل', en: 'Fully Automated Lines', tr: 'Tam Otomatik Hatlar', it: 'Linee Completamente Automatizzate' }, value: '12' },
    ],
    specifications: [
      { key: { ar: 'المعايير والشهادات الدولية', en: 'International Standards', tr: 'Uluslararası Standartlar', it: 'Standard Internazionali' }, value: { ar: 'ISO 22716 (GMP), ISO 9001, HALAL, Cruelty-Free', en: 'ISO 22716 (GMP), ISO 9001, HALAL, Cruelty-Free', tr: 'ISO 22716 (GMP), ISO 9001, HELAL, Hayvanlar Üzerinde Denenmeyen', it: 'ISO 22716 (GMP), ISO 9001, HALAL, Cruelty-Free' } },
      { key: { ar: '🔬 تكنولوجيا التعبئة والمزج', en: '🔬 Mixing & Filling Technology', tr: '🔬 Karıştırma ve Dolum Teknolojisi', it: '🔬 Tecnologia di Miscelazione e Riempimento' }, value: { ar: 'خلاطات تفريغ الهواء السويسرية، معقمة بالكامل بموجات فوق صوتية', en: 'Swiss vacuum mixers, fully sterilized with ultrasonic waves', tr: 'Ultrasonik dalgalarla tamamen sterilize edilmiş İsviçre vakum mikserleri', it: 'Miscelatori sottovuoto svizzeri, completamente sterilizzati con onde ultrasoniche' } },
      { key: { ar: '🤝 التخصيص والحلول المتكاملة', en: '🤝 Customization & Integrated Solutions', tr: '🤝 Özelleştirme ve Entegre Çözümler', it: '🤝 Personalizzazione e Soluzioni Integrate' }, value: { ar: 'دعم كامل للتصنيع التعاقدي للمغيرين (ODM/OEM) وتصميم العبوات', en: 'Full support for contract manufacturing (ODM/OEM) and packaging design', tr: 'Sözleşmeli üretim (ODM/OEM) ve ambalaj tasarımı için tam destek', it: 'Supporto completo per la produzione a contratto (ODM/OEM) e il design del packaging' } },
      { key: { ar: '🌿 المواد الفعالة المستخدمة', en: '🌿 Active Ingredients Used', tr: '🌿 Kullanılan Aktif Bileşenler', it: '🌿 Ingredienti Attivi Utilizzati' }, value: { ar: 'خلاصات عضوية طبيعية 100٪ مدعومة بالببتيدات وحمض الهيالورونيك السريري', en: '100% natural organic extracts backed by peptides and clinical hyaluronic acid', tr: 'Peptitler ve klinik hyaluronik asit ile desteklenmiş %100 doğal organik özler', it: 'Estratti organici naturali al 100% supportati da peptidi e acido ialuronico clinico' } },
    ],
    gallery: [
      '/aslan-88.png',
      '/factory.png',
      '/aslan-88.png'
    ]
  },
  {
    id: 'advanced-industries',
    name: {
      ar: 'أصلان للغذاء الصحي',
      en: 'Aslan Healthy Food',
      tr: 'Aslan Sağlıklı Gıda',
      it: 'Aslan Cibi Sani'
    },
    title: {
      ar: 'مصانع أصلان للغذاء الصحي',
      en: 'Aslan Healthy Food Industries',
      tr: 'Aslan Sağlıklı Gıda Endüstrisi',
      it: 'Industrie Alimentari Sane Aslan'
    },
    tagline: {
      ar: 'نغذي جسدك وعافيتك بأرقى الأغذية الطبيعية 100%',
      en: 'Nourishing your body and wellness with premium 100% natural foods',
      tr: '%100 doğal birinci sınıf gıdalarla vücudunuzu ve sağlığınızı besleyin',
      it: 'Nutri il tuo corpo e il tuo benessere con alimenti premium 100% naturali'
    },
    sector: {
      ar: 'خلاصة الطبيعة لأسلوب حياة صحي',
      en: 'The essence of nature for a healthy lifestyle',
      tr: 'Sağlıklı bir yaşam tarzı için doğanın özü',
      it: "L'essenza della natura per uno stile di vita sano"
    },
    image: '/start-your-brand.png',
    description: {
      ar: 'نختص بإنتاج أغذية صحية تدعم عافيتك من قلب الطبيعة. نقدم لك مرقة العظام الدسمة المحضرة بالطهي البطيء لاستخلاص أقصى الفوائد، بالإضافة إلى القهوة الخالية من الكافيين. نجمع بين الوصفات الأصيلة والمكونات الطبيعية 100% لتستمتع بكل وجبة براحة بال.',
      en: 'We specialize in producing healthy foods that support your wellness from the heart of nature. We offer rich, slow-cooked bone broth prepared to extract maximum benefits, alongside premium decaffeinated coffee. We blend authentic recipes with 100% natural ingredients so you can enjoy every meal with peace of mind.',
      tr: 'Doğanın kalbinden gelen ve sağlığınızı destekleyen sağlıklı gıdalar üretme konusunda uzmanlaştık. En yüksek faydayı elde etmek için yavaş pişirme yöntemiyle hazırlanan zengin kemik suyumuzun yanı sıra kafeinsiz özel kahve seçenekleri sunuyoruz. Her öğünün tadını gönül rahatlığıyla çıkarabilmeniz için geleneksel tarifleri %100 doğal malzemelerle birleştiriyoruz.',
      it: 'Siamo specializzati nella produzione di alimenti sani che supportano il tuo benessere direttamente dal cuore della natura. Offriamo un ricco brodo di ossa preparato con cottura lenta per estrarre i massimi benefici, insieme a caffè decaffeinato di alta qualità. Uniamo ricette autentiche e ingredienti naturali al 100% per farti gustare ogni pasto in totale tranquillità.'
    },
    fullStory: {
      ar: 'في أصلان للغذاء الصحي، نؤمن بأن الغذاء هو أساس العافية. نلتزم بأعلى معايير النقاء والجودة لنقدم لك منتجات مبتكرة تدعم صحتك وحيويتك اليومية. من مرقة عظام البقر والغنم الدسمة والمطهوة ببطء لأكثر من 24 ساعة لاستخلاص الكولاجين والمعادن الثمينة، إلى خيارات القهوة الفاخرة منزوعة الكافيين ومكملات الغذاء الطبيعية بالكامل، كل منتج في مصانعنا يمر بمراحل فحص ورقابة صارمة لضمان خلوه التام من المواد الحافظة والمكونات الاصطناعية. مصانعنا مجهزة بأحدث تقنيات التعقيم والتعبئة اللمسية لحفظ القيمة الغذائية الكاملة وإيصالها لك بأعلى درجات النقاء.',
      en: 'At Aslan Healthy Food, we believe that food is the foundation of true wellness. We are committed to the highest standards of purity and quality to provide you with innovative products that support your health and daily vitality. From our rich beef and lamb bone broth, slow-cooked for over 24 hours to extract premium collagen and essential minerals, to our premium decaffeinated coffee blends and all-natural food supplements, every product in our facility undergoes strict inspection to guarantee it is entirely free from preservatives and artificial ingredients. Our state-of-the-art sterile and contactless packaging technologies preserve complete nutritional value and deliver it to you with the highest degree of purity.',
      tr: 'Aslan Sağlıklı Gıda olarak, gıdanın gerçek sağlığın temeli olduğuna inanıyoruz. Sağlığınızı ve günlük zindeliğinizi destekleyen yenilikçi ürünler sunmak için en yüksek saflık ve kalite standartlarına bağlıyız. Değerli kolajen ve temel mineralleri elde etmek için 24 saatten fazla yavaş pişirilen zengin sığır ve kuzu kemik sularımızdan, birinci sınıf kafeinsiz kahve karışımlarımıza ve tamamen doğal gıda takviyelerimize kadar tesisimizdeki her ürün, koruyucu ve yapay maddelerden tamamen arındırılmış olduğunu garanti etmek için sıkı denetimlerden geçer. En son teknoloji ürünü steril ve temassız paketleme teknolojilerimiz besin değerini tam olarak korur ve size en yüksek saflıkta ulaştırır.',
      it: 'In Aslan Healthy Food crediamo che il cibo sia la base del vero benessere. Ci impegniamo a rispettare i più alti standard di purezza e qualità per fornirti prodotti innovativi che supportano la tua salute e la tua vitalità quotidiana.'
    },
    stats: [
      { label: { ar: 'وحدة إنتاج سنوياً', en: 'Annual Food Packages Output', tr: 'Yıllık Gıda Paketi Üretimi', it: 'Produzione Annua di Confezioni' }, value: '25,000,000+' },
      { label: { ar: 'مكونات طبيعية معتمدة', en: 'Organic Natural Ingredients', tr: 'Organik Doğal Malzemeler', it: 'Ingredienti Naturali Biologici' }, value: '100%' },
      { label: { ar: 'ساعات الطهي البطيء', en: 'Continuous Slow Cooking', tr: 'Kesintisiz Yavaş Pişirme', it: 'Cottura Lenta Continua' }, value: '24h' },
      { label: { ar: 'مراقبة جودة الغذاء', en: 'Food Quality Control', tr: 'Gıda Kalite Kontrolü', it: 'Controllo Qualità Alimentare' }, value: 'HACCP' },
    ],
    specifications: [
      { key: { ar: 'نوعية المكونات ونقاؤها', en: 'Ingredient Quality & Purity', tr: 'Malzeme Kalitesi ve Saflığı', it: 'Qualità e Purezza degli Ingredienti' }, value: { ar: 'طبيعية 100%، خالية من المواد الحافظة والمكونات المعدلة وراثياً', en: '100% natural, free of preservatives and non-GMO ingredients', tr: '%100 doğal, koruyucu içermez ve GDO\'suz malzemeler', it: '100% naturali, privi di conservanti e OGM-free' } },
      { key: { ar: 'تقنية الطهي والتحضير', en: 'Cooking & Preparation Tech', tr: 'Pişirme ve Hazırlama Teknolojisi', it: 'Tecnologia di Cottura e Preparazione' }, value: { ar: 'طهي بطيء متواصل لـ 24 ساعة لمرقة العظام، مع تصفية فائقة لضمان النقاء', en: '24-hour continuous slow cooking for bone broth with ultra-filtration', tr: 'Ultra filtrasyon ile kemik suyu için 24 saat kesintisiz yavaş pişirme', it: 'Cottura lenta continua per 24 ore per brodo di ossa con ultra-filtrazione' } },
      { key: { ar: 'معايير السلامة والتعقيم', en: 'Safety & Sterilization', tr: 'Güvenlik ve Sterilizasyon', it: 'Sicurezza e Sterilizzazione' }, value: { ar: 'تعبئة معقمة وم محمية بضغط الغاز الخامل لحفظ الفائدة الغذائية بشكل طبيعي', en: 'Sterile packaging protected by inert gas pressure to preserve nutritional value naturally', tr: 'Besin değerini doğal olarak korumak için inert gaz basıncıyla korunan steril paketleme', it: 'Confezionamento sterile protetto da pressione di gas inerte per preservare i valori nutrizionali naturalmente' } },
      { key: { ar: 'شهادات جودة الغذاء', en: 'Food Quality Certifications', tr: 'Gıda Kalite Sertifikaları', it: 'Certificazioni di Qualità Alimentare' }, value: { ar: 'شهادات الآيزو ISO 22000 لسلامة الغذاء، وشهادة الحلال الدولية الكاملة', en: 'ISO 22000 Food Safety Standards and Full International Halal Certification', tr: 'ISO 22000 Gıda Güvenliği Standartları ve Tam Uluslararası Helal Sertifikası', it: 'Standard di sicurezza alimentare ISO 22000 e certificazione Halal internazionale completa' } },
    ],
    gallery: [
      '/start-your-brand.png',
      '/aslan-88.png',
      '/meeting-room.png'
    ]
  },
  {
    id: 'global-partnership',
    name: {
      ar: 'انضم كشريك مع أصلان',
      en: 'PARTNER WITH ASLAN',
      tr: 'ASLAN İLE ORTAK OLUN',
      it: 'DIVENTA PARTNER ASLAN'
    },
    title: {
      ar: 'فرص الشراكة والأنشطة العالمية - ASLAN INTERNATIONAL',
      en: 'GLOBAL PARTNERSHIP OPPORTUNITIES - ASLAN INTERNATIONAL',
      tr: 'KÜRESEL ORTAKLIK FIRSATLARI - ASLAN INTERNATIONAL',
      it: 'OPPORTUNITÀ DI PARTNERSHIP GLOBALE - ASLAN INTERNATIONAL'
    },
    tagline: {
      ar: 'وسّع أعمالك مع أصلان عبر توزيع حصري ومفاهيم تجزئة فاخرة',
      en: 'Expand your business with ASLAN through exclusive distribution and luxury retail',
      tr: 'Özel distribütörlük ve lüks perakende ile işinizi ASLAN ile büyütün',
      it: 'Espandi la tua attività con ASLAN attraverso la distribuzione esclusiva'
    },
    sector: {
      ar: 'فرص الشراكة العالمية',
      en: 'GLOBAL PARTNERSHIP OPPORTUNITIES',
      tr: 'KÜRESEL ORTAKLIK FIRSATLARI',
      it: 'OPPORTUNITÀ DI PARTNERSHIP GLOBALE'
    },
    image: '/lovabella-partner.png',
    description: {
      ar: 'وسّع أعمالك مع أصلان من خلال الوكالة الحصرية، ومفاهيم التجزئة الفاخرة، والشراكات الاستراتيجية طويلة الأمد.',
      en: 'Expand your business with ASLAN through exclusive distribution, premium retail concepts, and long-term strategic partnerships.',
      tr: 'ASLAN ile özel distribütörlük, seçkin perakende konseptleri ve uzun vadeli stratejik ortaklıklar aracılığıyla işinizi büyütün.',
      it: 'Espandi la tua attività con ASLAN attraverso la distribuzione esclusiva, concetti di vendita al dettaglio premium e partnership strategiche a lungo termine.'
    },
    fullStory: {
      ar: 'تقدم مجموعة أصلان الدولية نموذجاً استثنائياً للشراكات والتوسع العالمي عبر برامج توزيع حصري، متاجر تجزئة متكاملة، واستثمارات مشتركة.',
      en: 'ASLAN INTERNATIONAL provides an elite model for global expansion and luxury retail partnerships including exclusive agency and franchise store models.',
      tr: 'ASLAN INTERNATIONAL, özel distribütörlük ve franchise mağaza modelleri dahil olmak üzere küresel genişleme için üst düzey bir ortaklık modeli sunmaktadır.',
      it: "ASLAN INTERNATIONAL fornisce un modello d'élite per l'espansione globale e le partnership di vendita al dettaglio di lusso."
    },
    stats: [
      { label: { ar: 'خيارات نماذج الشراكة', en: 'Partnership Models', tr: 'Ortaklık Modelleri', it: 'Modelli di Partnership' }, value: '3 Key Models' },
      { label: { ar: 'دعم التصميم والتسويق', en: '3D Design & Marketing Support', tr: 'Tasarım ve Pazarlama Desteği', it: 'Supporto Design e Marketing' }, value: '100%' },
      { label: { ar: 'أسواق التغطية المستهدفة', en: 'Global Target Markets', tr: 'Küresel Hedef Pazarlar', it: 'Mercati Target Globali' }, value: 'Global' }
    ],
    specifications: [
      { key: { ar: 'الوكالة والتوزيع الحصري', en: 'Exclusive Distribution', tr: 'Özel Distribütörlük', it: 'Distribuzione Esclusiva' }, value: { ar: 'تمثيل حصري لعلامات أصلان في بلدك أو منطقتك الحيوية', en: 'Exclusive territorial representation of ASLAN brands in your target market', tr: 'Hedef pazarınızda ASLAN markalarının özel bölgesel temsili', it: 'Rappresentanza territoriale esclusiva dei marchi ASLAN nel tuo mercato target' } },
      { key: { ar: 'برنامج متاجر LOVABELLA', en: 'LOVABELLA Store Franchise', tr: 'LOVABELLA Mağaza Programı', it: 'Franchise LOVABELLA' }, value: { ar: 'افتتاح متجر فاخر بتصميم هويتي وهندسي وتوريد كامل من أصلان', en: 'Turnkey luxury retail concept with complete 3D layout, inventory, and training', tr: 'Tam 3D konsept, envanter ve eğitim içeren anahtar teslim lüks perakende mağazası', it: 'Concept di vendita al dettaglio di lusso chiavi in mano con supporto completo' } }
    ],
    gallery: [
      '/LovabellaLuxuryBeautyStore.png',
      '/lovabella-partner.png',
      '/start-your-brand.png'
    ]
  }
];


export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'corporate',
    title: {
      ar: ' ASLAN INTERNATIONAL INC ',
      en: 'ASLAN INTERNATIONAL INC',
      tr: 'ASLAN INTERNATIONAL A.Ş.',
      it: 'ASLAN INTERNATIONAL S.p.A.'
    },
    subtitle: {
      ar: ' Crafting New Standards of Industrial Excellence & Premium Sustainability',
      en: 'Crafting New Standards of Industrial Excellence & Premium Sustainability',
      tr: 'Endüstriyel Mükemmellik ve Üstün Sürdürülebilirlikte Yeni Standartlar Şekillendiriyoruz',
      it: 'Creiamo nuovi standard di eccellenza industriale e sostenibilità premium'
    },
    ctaText: {
      ar: 'اكتشف  مجالات خبرتنا',
      en: 'EXPLORE OUR EXPERTISE',
      tr: 'UZMANLIK ALANLARIMIZI KEŞFEDİN',
      it: 'ESPLORA LE NOSTRE COMPETENZE'
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920',
    logoText: 'ASLAN'
  },
  {
    id: 'cosmetics-slide',
    title: {
      ar: 'مصانع أصلان لمستحضرات التجميل',
      en: 'ASLAN COSMETICS',
      tr: 'ASLAN KOZMETİK',
      it: 'ASLAN COSMETICA'
    },
    subtitle: {
      ar: 'حيث تلتقي الفخامة مع الابتكار العلمي ومقاييس الجودة المطلقة',
      en: 'Where Luxury Meets Scientific Innovation and Ultimate Quality Standards',
      tr: 'Lüksün Bilimsel İnovasyon ve En Üst Kalite Standartlarıyla Buluştuğu Yer',
      it: "Dove il lusso incontra l'innovazione scientifica e gli standard di qualità assoluti"
    },
    ctaText: {
      ar: 'استكشف مصانع التجميل',
      en: 'EXPLORE THE COSMETIC LABS',
      tr: 'KOZMETİK LABORATUVARLARINI KEŞFEDİN',
      it: 'ESPLORA I LABORATORI COSMETICI'
    },
    image: '/aslan-88.png',
    video: '/video-aslan-2.mp4',
    logoText: 'ASLAN'
  },
  {
    id: 'industrial-slide',
    title: {
      ar: 'أصلان للصناعات المتطورة',
      en: 'ASLAN INDUSTRIES',
      tr: 'ASLAN ENDÜSTRİ',
      it: 'ASLAN INDUSTRIE'
    },
    subtitle: {
      ar: 'تكنولوجيا حقن البلاستيك الدقيق وهندسة التعبئة والتغليف الذكي',
      en: 'Precision Plastic Injection & Advanced Smart Packaging Engineering',
      tr: 'Hassas Plastik Enjeksiyon ve Gelişmiş Akıllı Ambalaj Mühendisliği',
      it: "Iniezione plastica di precisione e ingegneria del packaging intelligente avanzato"
    },
    ctaText: {
      ar: 'استكشف مجمعنا الصناعي',
      en: 'EXPLORE THE INDUSTRIAL COMPLEX',
      tr: 'ENDÜSTRİYEL TESİSİMİZİ KEŞFEDİN',
      it: 'ESPLORA IL COMPLESSO INDUSTRIALE'
    },
    image: '/meeting-room.png',
    logoText: 'ASLAN'
  }
];

export const METRICS_DATA: MetricData[] = [
  {
    id: 'factories',
    number: '4',
    suffix: '',
    label: { ar: 'مجمعات صناعية عملاقة', en: 'Mega Industrial Plants' },
    description: { ar: 'مرافق مجهزة بالكامل بالروبوتات وحاصلة على اعتمادات الآيزو للتصنيع الطبي والتجميلي.', en: 'Fully robotic and sterile facilities certified to the highest global ISO and medical-grade manufacturing terms.' }
  },
  {
    id: 'production',
    number: '170',
    suffix: 'M',
    label: { ar: 'وحدة إنتاج سنوية', en: 'Annual Manufactured Units' },
    description: { ar: 'مجموع الطاقة الإنتاجية عبر مصانع مستحضرات التجميل والعبوات والقطع الهندسية بالمجموعة.', en: 'Total aggregate manufacturing output spanning cosmetics, high-end packaging, and mechanical components.' }
  },
  {
    id: 'exports',
    number: '32',
    suffix: '',
    label: { ar: 'دولة حول العالم', en: 'Export Markets Globally' },
    description: { ar: 'سلسلة إمداد ممتدة تغذي أسواق الشرق الأوسط، دول الخليج العربي، وأوروبا والولايات المتحدة.', en: 'Expansive export networks supplying premium brands in Europe, GCC, and the United States.' }
  },
  {
    id: 'experts',
    number: '850',
    suffix: '+',
    label: { ar: 'خبير ومهندس وموظف', en: 'Dedicated Scientists & Experts' },
    description: { ar: 'أطباء كيمياء، مهندسو أتمتة صناعية، ومحترفو سلاسل إمداد يقودون المجموعة يومياً.', en: 'A stellar workforce of formulation chemists, robotics automation engineers, and logistics specialists.' }
  }
];

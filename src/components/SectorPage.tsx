import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, FlaskConical, Sparkles, Layers, Globe, Globe2, Award, Cpu, ShieldCheck
} from 'lucide-react';
import { Language, getTranslation } from '../types';
import aslan88Img from '../assets/images/aslan-88.png';
import whoWeWorkImg from '../assets/images/who-we-work.png';
import lovabellaPartnerImg from '../assets/images/lovabella-partner.png';
import aiSoftwareImg from '../assets/images/ai-software.png';
import earthImg from '../assets/images/earth.png';

interface SectorPageProps {
  sectorId: string;
  language: Language;
  onBack: () => void;
  onContactClick: () => void;
}

interface PageData {
  title: { ar: string; en: string; tr: string; it: string };
  subtitle: { ar: string; en: string; tr: string; it: string };
  heroImage: string;
  intro: { ar: string; en: string; tr: string; it: string };
  vision?: { ar: string; en: string; tr: string; it: string };
  philosophySection?: {
    title: { ar: string; en: string; tr: string; it: string };
    paragraphs: { ar: string; en: string; tr: string; it: string }[];
  };
  servicesList?: { ar: string; en: string; tr: string; it: string }[];
  executionStages?: {
    step: string;
    title: { ar: string; en: string; tr: string; it: string };
  }[];
  productsScope?: { ar: string; en: string; tr: string; it: string }[];
  confidentialitySection?: {
    title: { ar: string; en: string; tr: string; it: string };
    desc: { ar: string; en: string; tr: string; it: string };
  };
  galleryImages?: { url: string; caption: { ar: string; en: string; tr: string; it: string } }[];
  finalCta?: {
    title: { ar: string; en: string; tr: string; it: string };
    desc: { ar: string; en: string; tr: string; it: string };
  };
  whyList?: { ar: string; en: string; tr: string; it: string }[];
  conclusion?: { ar: string; en: string; tr: string; it: string };
  accentColor: string;
  icon: React.ReactNode;
  specsSectionTitle?: { ar: string; en: string; tr: string; it: string };
  specs: {
    label: { ar: string; en: string; tr: string; it: string };
    value: { ar: string; en: string; tr: string; it: string };
    desc: { ar: string; en: string; tr: string; it: string };
  }[];
  processSectionTitle?: { ar: string; en: string; tr: string; it: string };
  processSteps: {
    step: string;
    title: { ar: string; en: string; tr: string; it: string };
    desc: { ar: string; en: string; tr: string; it: string };
  }[];
  caseStudy: {
    title: { ar: string; en: string; tr: string; it: string };
    metric: string | { ar: string; en: string; tr: string; it: string };
    metricLabel: { ar: string; en: string; tr: string; it: string };
    desc: { ar: string; en: string; tr: string; it: string };
  };
}

const PAGES_CONTENT: Record<string, PageData> = {
  'companies-cosmetics': {
    title: {
      ar: 'المختبر والبحوث',
      en: 'LABORATORY & RESEARCH',
      tr: 'LABORATUVAR VE ARAŞTIRMA',
      it: 'LABORATORIO E RICERCA'
    },
    subtitle: {
      ar: 'مختبر أسلان للبحوث والتطوير',
      en: 'ASLAN RESEARCH & DEVELOPMENT LABORATORY',
      tr: 'ASLAN ARAŞTIRMA VE GELİŞTİRME LABORATUVARI',
      it: 'LABORATORIO DI RICERCA E SVILUPPO ASLAN'
    },
    heroImage: aslan88Img,
    intro: {
      ar: 'في أسلان، يبدأ الابتكار من مختبر البحوث والتطوير الخاص بنا. يجمع علماؤنا وخبراء التركيبات لدينا بين التقنيات المتطورة وسنوات الخبرة الصناعية لتطوير منتجات تجميل وعناية بالبشرة فاخرة تلبي الاحتياجات المتطورة للأسواق العالمية. يتم تصميم كل تركيبة واختبارها وتحسينها بعناية فائقة قبل الوصول إلى الإنتاج.',
      en: 'At ASLAN, innovation begins in our Research & Development Laboratory. Our scientists and formulation experts combine advanced technology with years of industry experience to develop premium cosmetic and skincare products that meet the evolving needs of global markets. Every formula is carefully designed, tested, and optimized before reaching production.',
      tr: 'ASLAN\'da yenilik, Araştırma ve Geliştirme Laboratuvarımızda başlar. Bilim insanlarımız ve formülasyon uzmanlarımız, küresel pazarların gelişen ihtiyaçlarını karşılayan premium kozmetik ve cilt bakımı ürünleri geliştirmek için gelişmiş teknolojiyi yılların sektör deneyimiyle birleştirir. Her formül üretime ulaşmadan önce dikkatlice tasarlanır, test edilir ve optimize edilir.',
      it: 'In ASLAN, l\'innovazione inizia nel nostro Laboratorio di Ricerca e Sviluppo. I nostri scienziati ed esperti di formulazione combinano tecnologie avanzate con anni di esperienza nel settore per sviluppare cosmetici e trattamenti per la pelle di altissimo livello che soddisfano le esigenze in evoluzione dei mercati globali. Ogni formula viene accuratamente progettata, testata e ottimizzata prima della produzione.'
    },
    vision: {
      ar: 'أن نصبح مركز ابتكار رائد في تصنيع مستحضرات التجميل والعناية بالبشرة من خلال تقديم منتجات متقدمة علمياً وآمنة وعالية الأداء تتجاوز المعايير الدولية للجودة.',
      en: 'To become a leading innovation center in cosmetic and skincare manufacturing by delivering scientifically advanced, safe, and high-performance products that exceed international quality standards.',
      tr: 'Uluslararası kalite standartlarını aşan bilimsel olarak gelişmiş, güvenli ve yüksek performanslı ürünler sunarak kozmetik ve cilt bakımı üretiminde öncü bir yenilik merkezi olmak.',
      it: 'Diventare un centro di innovazione leader nella produzione di cosmetici e prodotti per la cura della pelle, offrendo formulazioni scientificamente avanzate, sicure e ad alte prestazioni che superano gli standard di qualità internazionali.'
    },
    servicesList: [
      { ar: 'البحوث والتطوير', en: 'Research & Development', tr: 'Araştırma ve Geliştirme', it: 'Ricerca e Sviluppo' },
      { ar: 'إنشاء التركيبات المخصصة', en: 'Custom Formula Creation', tr: 'Özel Formül Oluşturma', it: 'Creazione di Formule Personalizzate' },
      { ar: 'إعادة صياغة وتحسين المنتجات', en: 'Product Reformulation', tr: 'Ürün Yeniden Formüle Etme', it: 'Riformulazione del Prodotto' },
      { ar: 'اختبارات الاستقرار والتوافق', en: 'Stability & Compatibility Testing', tr: 'Stabilite ve Uyumluluk Testleri', it: 'Test di Stabilità e Compatibilità' },
      { ar: 'تحليلات ضبط الجودة', en: 'Quality Control Analysis', tr: 'Kalite Kontrol Analizi', it: 'Analisi e Controllo Qualità' },
      { ar: 'تصنيع الدفعات التجريبية', en: 'Pilot Batch Manufacturing', tr: 'Pilot Parti Üretimi', it: 'Produzione di Lotti Pilota' },
      { ar: 'تطوير منتجات العلامات التجارية الخاصة', en: 'Private Label Product Development', tr: 'Özel Marka Ürün Geliştirme', it: 'Sviluppo Prodotti per Marchio Privato' }
    ],
    whyList: [
      { ar: 'معدات وتقنيات مختبرية متطورة', en: 'Advanced Laboratory Equipment', tr: 'Gelişmiş Laboratuvar Ekipmanları', it: 'Attrezzature di Laboratorio Avanzate' },
      { ar: 'فريق بحوث ذو خبرة عالية', en: 'Experienced Research Team', tr: 'Deneyimli Araştırma Ekibi', it: 'Team di Ricerca di Grande Esperienza' },
      { ar: 'معايير جودة دولية معتمدة', en: 'International Quality Standards', tr: 'Uluslararası Kalite Standartları', it: 'Standard di Qualità Internazionali' },
      { ar: 'تطوير منتجات مبتكرة', en: 'Innovative Product Development', tr: 'Yenilikçi Ürün Geliştirme', it: 'Sviluppo di Prodotti Innovativi' },
      { ar: 'حلول مخصصة لكل عميل', en: 'Customized Solutions for Every Client', tr: 'Her Müşteri İçin Özelleştirilmiş Çözümler', it: 'Soluzioni Personalizzate per Ogni Cliente' },
      { ar: 'مراقبة صارمة للسلامة والجودة', en: 'Strict Safety & Quality Control', tr: 'Sıkı Güvenlik ve Kalite Kontrolü', it: 'Rigoroso Controllo di Sicurezza e Qualità' }
    ],
    conclusion: {
      ar: 'يلتزم مختبرنا بتحويل الأفكار المبتكرة إلى منتجات تجميل فاخرة من خلال البحث العلمي والفحوصات المتقدمة والتطوير المستمر للمنتجات، مما يضمن التميز من الفكرة وحتى الإنتاج.',
      en: 'Our laboratory is committed to transforming innovative ideas into premium cosmetic products through scientific research, advanced testing, and continuous product development, ensuring excellence from concept to production.',
      tr: 'Laboratuvarımız, bilimsel araştırma, gelişmiş testler ve sürekli ürün geliştirme yoluyla yenilikçi fikirleri premium kozmetik ürünlerine dönüştürmeye ve konseptten üretime kadar mükemmelliği sağlamaya kararlıdır.',
      it: 'Il nostro laboratorio si impegna a trasformare idee innovative in cosmetici di prestigio attraverso la ricerca scientifica, test avanzati e lo sviluppo continuo dei prodotti, garantendo l\'eccellenza dal concept alla produzione.'
    },
    accentColor: 'from-amber-400 to-yellow-600',
    icon: <FlaskConical className="w-8 h-8 text-amber-400" />,
    specs: [
      {
        label: { ar: 'ضمان الجودة', en: 'QUALITY ASSURANCE', tr: 'KALİTE GÜVENCESİ', it: 'GARANZIA DI QUALITÀ' },
        value: { ar: 'فحص الجودة والسلامة', en: 'Safety & Quality Testing', tr: 'Güvenlik ve Kalite Testleri', it: 'Test di Sicurezza e Qualità' },
        desc: { ar: 'فحص المواد الخام • التحليل الميكروبيولوجي • اختبار الاستقرارية • تقييم سلامة المنتجات', en: 'Raw Material Testing • Microbiological Analysis • Stability Testing • Product Safety Evaluation', tr: 'Hammadde Testi • Mikrobiyolojik Analiz • Stabilite Testi • Ürün Güvenliği Değerlendirmesi', it: 'Test delle Materie Prime • Analisi Microbiologica • Test di Stabilità • Valutazione della Sicurezza del Prodotto' }
      },
      {
        label: { ar: 'البحوث والتطوير', en: 'RESEARCH & DEVELOPMENT', tr: 'ARAŞTIRMA VE GELİŞTİRME', it: 'RICERCA E SVILUPPO' },
        value: { ar: 'التركيبات والتصنيع', en: 'Formulation & Prototyping', tr: 'Formülasyon ve Prototipleme', it: 'Formulazione e Prototipazione' },
        desc: { ar: 'تطوير التركيبات المبتكرة • صياغة المنتجات المخصصة • إنتاج الدفعات التجريبية • التحسين المستمر للمنتجات', en: 'Innovative Formula Development • Custom Product Formulation • Pilot Batch Production • Continuous Product Improvement', tr: 'Yenilikçi Formül Geliştirme • Özel Ürün Formülasyonu • Pilot Parti Üretimi • Sürekli Ürün İyileştirme', it: 'Sviluppo di Formule Innovative • Formulazione di Prodotti Personalizzati • Produzione di Lotti Pilota • Miglioramento Continuo del Prodotto' }
      },
      {
        label: { ar: 'المعايير الدولية', en: 'INTERNATIONAL STANDARDS', tr: 'ULUSLARARASI STANDARTLAR', it: 'STANDARD INTERNAZIONALI' },
        value: { ar: 'جودة عالمية معتمدة', en: 'Global Compliance', tr: 'Küresel Uyumluluk', it: 'Conformità Globale' },
        desc: { ar: 'منتجات آمنة وفعالة تتوافق مع أعلى المعايير الدولية.', en: 'Safe, effective, and high-quality formulations meeting international standards.', tr: 'Uluslararası standartları karşılayan güvenli ve etkili formülasyonlar.', it: 'Formulazioni sicure ed efficaci in linea con gli standard internazionali.' }
      }
    ],
    processSteps: [
      { step: '01', title: { ar: 'البحوث والتطوير', en: 'Research & Development', tr: 'Araştırma ve Geliştirme', it: 'Ricerca e Sviluppo' }, desc: { ar: 'تطوير وابتكار تركيبات متطورة تلبي احتياجات الأسواق العالمية.', en: 'Designing and testing innovative cosmetic formulations for global markets.', tr: 'Küresel pazarlar için yenilikçi kozmetik formüller tasarlama.', it: 'Progettazione e test di formule cosmetiche innovative.' } },
      { step: '02', title: { ar: 'الفحوصات والاختبارات', en: 'Testing & Optimization', tr: 'Test ve Optimizasyon', it: 'Test e Ottimizzazione' }, desc: { ar: 'اختبارات الاستقرار والسلامة والتحليل الميكروبيولوجي بصرامة.', en: 'Rigorous quality, stability, and safety evaluations for every batch.', tr: 'Her parti için titiz kalite, stabilite ve güvenlik değerlendirmeleri.', it: 'Valutazioni rigorose di qualità, stabilità e sicurezza per ogni lotto.' } },
      { step: '03', title: { ar: 'الإنتاج والتحسين', en: 'Production & Refinement', tr: 'Üretim ve İyileştirme', it: 'Produzione e Perfezionamento' }, desc: { ar: 'تصنيع الدفعات التجريبية والتحسين المستمر للمنتجات قبل إطلاقها.', en: 'Pilot batch manufacturing and continuous refinement before launch.', tr: 'Lansman öncesi pilot parti üretimi ve sürekli iyileştirme.', it: 'Produzione di lotti pilota e perfezionamento continuo.' } }
    ],
    caseStudy: {
      title: { ar: 'مختبر أسلان للبحوث والتطوير', en: 'ASLAN RESEARCH & DEVELOPMENT LABORATORY', tr: 'ASLAN ARAŞTIRMA VE GELİŞTİRME LABORATUVARI', it: 'LABORATORIO DI RICERCA E SVILUPPO ASLAN' },
      metric: 'R&D',
      metricLabel: { ar: 'مركز الابتكار', en: 'INNOVATION CENTER', tr: 'İNOVASYON MERKEZİ', it: 'CENTRO INNOVAZIONE' },
      desc: { ar: 'يلتزم مختبرنا بتحويل الأفكار المبتكرة إلى منتجات تجميل فاخرة من خلال البحث العلمي والفحوصات المتقدمة والتطوير المستمر للمنتجات، مما يضمن التميز من الفكرة وحتى الإنتاج.', en: 'Our laboratory is committed to transforming innovative ideas into premium cosmetic products through scientific research, advanced testing, and continuous product development, ensuring excellence from concept to production.', tr: 'Laboratuvarımız, bilimsel araştırma, gelişmiş testler ve sürekli ürün تطوير yoluyla yenilikçi fikirleri premium kozmetik ürünlerine dönüştürmeye ve konseptten üretime kadar mükemmelliği sağlamaya kararlıdır.', it: 'Il nostro laboratorio si impegna a trasformare idee innovative in cosmetici di prestigio attraverso la ricerca scientifica, test avanzati e lo sviluppo continuo dei prodotti, garantendo l\'eccellenza dal concept alla produzione.' }
    }
  },
  food: {
    title: {
      ar: 'تصنيع مستحضرات التجميل والعلامات الخاصة',
      en: 'COSMETICS MANUFACTURING & PRIVATE LABEL',
      tr: 'KOZMETİK ÜRETİMİ VE ÖZEL MARKA',
      it: 'PRODUZIONE COSMETICA E MARCHIO PRIVATO'
    },
    subtitle: {
      ar: 'من الفكرة إلى منتج تجميلي متكامل',
      en: 'FROM CONCEPT TO COMPLETE COSMETIC PRODUCT',
      tr: 'KONSEPTTEN EKSİKSİZ KOZMETİK ÜRÜNÜNE',
      it: 'DAL CONCETTO AL PRODOTTO COSMETICO COMPLETO'
    },
    heroImage: whoWeWorkImg,
    intro: {
      ar: 'تقدم أسلان الدولية حلولاً متكاملة لتطوير وتصنيع مستحضرات التجميل، بدءًا من الفكرة الأولى والتركيبة المختبرية وحتى التغليف والإنتاج ومراقبة الجودة والتسليم الجاهز للسوق.',
      en: 'ASLAN INTERNATIONAL provides complete cosmetic development and manufacturing solutions, from the first product concept and laboratory formulation to packaging, production, quality control, and market-ready delivery.',
      tr: 'ASLAN INTERNATIONAL, ilk ürün konsepti ve laboratuvar formülasyonundan ambalaj, üretim, kalite kontrol ve pazara hazır teslimata kadar eksiksiz kozmetik geliştirme ve üretim çözümleri sunar.',
      it: 'ASLAN INTERNATIONAL offre soluzioni complete di sviluppo e produzione cosmetica, dal primo concetto di prodotto e formulazione di laboratorio al confezionamento, produzione, controllo qualità e consegna pronta per il mercato.'
    },
    philosophySection: {
      title: {
        ar: 'فلسفة التصنيع والتميز',
        en: 'MANUFACTURING PHILOSOPHY & EXCELLENCE',
        tr: 'ÜRETİM FELSEFESİ VE MÜKEMMELLİK',
        it: 'FILOSOFIA DI PRODUZIONE ED ECCELLENZA'
      },
      paragraphs: [
        {
          ar: 'على مدار سنوات من الخبرة، نجحت ASLAN INTERNATIONAL في تطوير وإطلاق العديد من العلامات التجارية، وتُعد LOVABELLA العلامة الرائدة للشركة، والتي تجسد التزامنا بالجودة والابتكار والمعايير العالمية.',
          en: 'Over years of experience, ASLAN INTERNATIONAL has successfully developed and launched numerous brands, with LOVABELLA standing as the company\'s flagship brand that embodies our commitment to quality, innovation, and global standards.',
          tr: 'Yıllara dayanan deneyimiyle ASLAN INTERNATIONAL, kalite, yenilik ve küresel standartlara olan bağlılığımızı simgeleyen amiral gemisi markamız LOVABELLA başta olmak üzere çok sayıda markayı başarıyla geliştirmiş ve piyasaya sürmüştür.',
          it: 'Nel corso degli anni, ASLAN INTERNATIONAL ha sviluppato e lanciato con successo numerosi marchi, tra cui LOVABELLA, il marchio principale dell\'azienda che incarna il nostro impegno per la qualità, l\'innovazione e gli standard internazionali.'
        },
        {
          ar: 'وبالإضافة إلى علاماتنا التجارية، نقدم خدمات OEM/ODM وPrivate Label لتطوير وتصنيع مستحضرات التجميل والعناية بالبشرة والعناية الشخصية، بدءًا من تطوير التركيبات وتصميم العبوات وحتى الإنتاج النهائي.',
          en: 'In addition to our proprietary brands, we offer OEM/ODM and Private Label services to develop and manufacture cosmetics, skincare, and personal care products, from formulation development and packaging design to final production.',
          tr: 'Kendi markalarımıza ek olarak, formül geliştirmeden ambalaj tasarımına ve nihai üretime kadar kozmetik, cilt bakımı ve kişisel bakım ürünlerini geliştirmek ve üretmek için OEM/ODM ve Özel Marka (Private Label) hizmetleri sunuyoruz.',
          it: 'Oltre ai nostri marchi di proprietà, offriamo servizi OEM/ODM e Private Label per sviluppare e produrre cosmetici, prodotti per la cura della pelle e la cura personale, dalla formulazione e design del packaging fino alla produzione finale.'
        },
        {
          ar: 'كما حظيت الشركة بثقة العديد من العلامات التجارية والمؤثرين لتطوير وإنتاج منتجات تحمل علاماتهم الخاصة، مع الالتزام الكامل بسرية جميع المشاريع وحماية هوية عملائنا.',
          en: 'Furthermore, the company has earned the trust of numerous brands and influencers to develop and manufacture products under their private labels, with complete commitment to project confidentiality and protecting client identities.',
          tr: 'Ayrıca şirketimiz, tüm projelerin gizliliğine tam bağlılık ve müşteri kimliklerinin korunması ilkesiyle, kendi özel markaları altında ürünler geliştirmek ve üretmek üzere çok sayıda marka ve influencer\'ın güvenini kazanmıştır.',
          it: 'Inoltre, l\'azienda ha conquistato la fiducia di numerosi marchi ed influencer per sviluppare e produrre prodotti a marchio privato, con il massimo impegno per la riservatezza dei progetti e la protezione delle identità dei clienti.'
        },
        {
          ar: 'ورغم تقديمنا حلول تصنيع متكاملة لشركائنا، تبقى الأولوية دائمًا لتطوير وتعزيز علاماتنا التجارية الخاصة، وفي مقدمتها LOVABELLA، بما يعكس رؤيتنا في تقديم منتجات تنافس في الأسواق المحلية والعالمية.',
          en: 'While providing comprehensive manufacturing solutions to our partners, our top priority remains developing and strengthening our proprietary brands, led by LOVABELLA, reflecting our vision to deliver products that compete in local and global markets.',
          tr: 'Ortaklarımıza kapsamlı üretim çözümleri sunarken, en büyük önceliğimiz, yerel ve küresel pazarlarda rekabet eden ürünler sunma vizyonumuzu yansıtan LOVABELLA liderliğindeki kendi markalarımızı geliştirmek ve güçlendirmektir.',
          it: 'Pur offrendo soluzioni di produzione integrate ai nostri partner, la priorità assoluta rimane lo sviluppo e il rafforzamento dei nostri marchi proprietari, guidati da LOVABELLA, a testimonianza della nostra visione di offrire prodotti competitivi sia a livello locale che globale.'
        }
      ]
    },
    servicesList: [
      { ar: 'تطوير تركيبات مستحضرات التجميل', en: 'Cosmetic Formulation Development', tr: 'Kozmetik Formülasyon Geliştirme', it: 'Sviluppo Formulazioni Cosmetiche' },
      { ar: 'تطوير منتجات العناية بالبشرة', en: 'Skincare Product Development', tr: 'Cilt Bakım Ürünleri Geliştirme', it: 'Sviluppo Prodotti Skincare' },
      { ar: 'تطوير منتجات المكياج والتجميل', en: 'Makeup Product Development', tr: 'Makyaj Ürünleri Geliştirme', it: 'Sviluppo Prodotti Makeup' },
      { ar: 'تصنيع منتجات العناية الشخصية', en: 'Personal Care Manufacturing', tr: 'Kişisel Bakım Üretimi', it: 'Produzione Cura Personale' },
      { ar: 'تصميم وتطوير العبوات والتغليف', en: 'Packaging Design & Development', tr: 'Ambalaj Tasarımı ve Geliştirme', it: 'Design e Sviluppo Packaging' },
      { ar: 'تصنيع العلامات الخاصة Private Label', en: 'Private Label Manufacturing', tr: 'Özel Marka Üretimi (Private Label)', it: 'Produzione Marchio Privato' },
      { ar: 'حلول التصنيع المخصص OEM / ODM', en: 'OEM / ODM Solutions', tr: 'OEM / ODM Çözümleri', it: 'Soluzioni OEM / ODM' },
      { ar: 'التعبئة والتغليف المحترف', en: 'Filling & Packaging', tr: 'Dolum ve Ambalajlama', it: 'Riempimento e Confezionamento' },
      { ar: 'مراقبة وضبط الجودة الشامل', en: 'Quality Control', tr: 'Kalite Kontrolü', it: 'Controllo Qualità' },
      { ar: 'الإنتاج الجاهز للتصدير الدولي', en: 'Export-Ready Production', tr: 'İhracata Hazır Üretim', it: 'Produzione Pronta per l\'Esportazione' }
    ],
    executionStages: [
      { step: '01', title: { ar: 'استشارة العلامة التجارية', en: 'Brand Consultation', tr: 'Marka Danışmanlığı', it: 'Consulenza del Marchio' } },
      { step: '02', title: { ar: 'فكرة المفهوم والمنتج', en: 'Product Concept', tr: 'Ürün Konsepti', it: 'Concetto di Prodotto' } },
      { step: '03', title: { ar: 'تطوير التركيبة المختبرية', en: 'Formula Development', tr: 'Formül Geliştirme', it: 'Sviluppo della Formula' } },
      { step: '04', title: { ar: 'أخذ العينات والاختبار الحيوية', en: 'Sampling & Testing', tr: 'Numune Alma ve Test', it: 'Campionamento e Test' } },
      { step: '05', title: { ar: 'اختيار العبوات والتغليف', en: 'Packaging Selection', tr: 'Ambalaj Seçimi', it: 'Selezione del Packaging' } },
      { step: '06', title: { ar: 'اعتماد التصميم النهائي', en: 'Design Approval', tr: 'Tasarım Onayı', it: 'Approvazione del Design' } },
      { step: '07', title: { ar: 'التصنيع والإنتاج الكثيف', en: 'Manufacturing', tr: 'Üretim', it: 'Produzione' } },
      { step: '08', title: { ar: 'التعبئة والتجميع الآلي', en: 'Filling & Assembly', tr: 'Dolum ve Montaj', it: 'Riempimento e Assemblaggio' } },
      { step: '09', title: { ar: 'ضبط ومراقبة الجودة', en: 'Quality Control', tr: 'Kalite Kontrolü', it: 'Controllo Qualità' } },
      { step: '10', title: { ar: 'التغليف النهائي والترميز', en: 'Final Packaging', tr: 'Nihai Ambalajlama', it: 'Confezionamento Finale' } },
      { step: '11', title: { ar: 'جاهزية التسليم والتصدير', en: 'Ready for Delivery', tr: 'Teslimata Hazır', it: 'Pronto per la Consegna' } }
    ],
    productsScope: [
      { ar: 'السيرومات الفاخرة', en: 'Serums', tr: 'Serumlar', it: 'Sieri' },
      { ar: 'كريمات الوجه والعناية', en: 'Face Creams', tr: 'Yüz Kremleri', it: 'Creme Viso' },
      { ar: 'منتجات العناية بالبشرة', en: 'Skincare Products', tr: 'Cilt Bakım Ürünleri', it: 'Prodotti Skincare' },
      { ar: 'كريم الأساس (الفاونديشن)', en: 'Foundation', tr: 'Fondöten', it: 'Fondotinta' },
      { ar: 'أحمر الشفاه', en: 'Lipstick', tr: 'Ruj', it: 'Rossetto' },
      { ar: 'ملمع الشفاه', en: 'Lip Gloss', tr: 'Dudak Parlatıcısı', it: 'Lucidalabbra' },
      { ar: 'الماسكارا المكثفة', en: 'Mascara', tr: 'Maskara', it: 'Mascara' },
      { ar: 'الآيلاينر ومكياج العيون', en: 'Eyeliner', tr: 'Eyeliner', it: 'Eyeliner' },
      { ar: 'البودرة المضغوطة', en: 'Pressed Powder', tr: 'Sıkıştırılmış Toz Pudra', it: 'Cipria Compatta' },
      { ar: 'أحمر الخدود (البلاشر)', en: 'Blush', tr: 'Allık', it: 'Fard' },
      { ar: 'الإضاءة (الهايلايتر)', en: 'Highlighter', tr: 'Aydınlatıcı', it: 'Illuminante' },
      { ar: 'لوحات ظلال العيون', en: 'Eyeshadow', tr: 'Göz Farı', it: 'Ombretto' },
      { ar: 'منتجات العناية الشخصية', en: 'Personal Care Products', tr: 'Kişisel Bakım Ürünleri', it: 'Prodotti per la Cura Personale' }
    ],
    confidentialitySection: {
      title: {
        ar: 'السرية وحماية العلامات التجارية',
        en: 'CONFIDENTIALITY & BRAND PROTECTION',
        tr: 'GİZLİLİK VE MARKA KORUMASI',
        it: 'RISERVATEZZA E PROTEZIONE DEL MARCHIO'
      },
      desc: {
        ar: 'تُعالج جميع تركيبات العملاء ومفاهيم التغليف وتصاميم المنتجات ومشاريع التصنيع بسرية تامة. تحمي أسلان الدولية الهوية والملكية الفكرية والمعلومات التجارية لكل شريك.',
        en: 'All client formulations, packaging concepts, product designs, and manufacturing projects are handled with strict confidentiality. ASLAN INTERNATIONAL protects the identity, intellectual property, and commercial information of every partner.',
        tr: 'Tüm müşteri formülasyonları, ambalaj konseptleri, ürün tasarımları ve üretim projeleri son derece gizlilikle ele alınır. ASLAN INTERNATIONAL her ortağının kimliğini, fikri mülkiyetini ve ticari bilgilerini korur.',
        it: 'Tutte le formulazioni, i concetti di confezionamento, i design dei prodotti e i progetti di produzione dei clienti sono gestiti con la massima riservatezza. ASLAN INTERNATIONAL protegge l\'identità, la proprietà intellettuale e le informazioni commerciali di ogni partner.'
      }
    },
    galleryImages: [
      {
        url: '/aslan-88.png',
        caption: { ar: 'تطوير تركيبات تجميل مخصصة وعينات ألوان فاخرة', en: 'Custom Cosmetic Formulation & Color Palette Development', tr: 'Özel Kozmetik Formülasyonu ve Renk Paleti Geliştirme', it: 'Sviluppo Formulazioni Cosmetiche e Tavolozza Colori' }
      },
      {
        url: '/factory.png',
        caption: { ar: 'منشأة تصنيع متطورة وغرف نظيفة فائقة التعقيم', en: 'High-Tech Cleanroom Cosmetics Manufacturing Facility', tr: 'Yüksek Teknolojili Temiz Oda Kozmetik Üretim Tesisleri', it: 'Struttura di Produzione Cosmetica in Camera Bianca' }
      },
      {
        url: '/aslan-88.png',
        caption: { ar: 'مختبر البحوث والتطوير واختبارات الاستقرار والسلامة', en: 'ASLAN Research & Development Lab - Safety & Stability Testing', tr: 'ASLAN Ar-Ge Laboratuvarı - Güvenlik ve Stabilite Testleri', it: 'Laboratorio di R&S ASLAN - Test di Sicurezza e Stabilità' }
      },
      {
        url: '/lovabella-partner.png',
        caption: { ar: 'منتجات LOVABELLA الفاخرة - النموذج الرائد لعلاماتنا', en: 'LOVABELLA Premium Skincare - Flagship Brand Excellence', tr: 'LOVABELLA Premium Cilt Bakımı - Amiral Gemisi Markamız', it: 'LOVABELLA Skincare - Eccellenza del Marchio Guida' }
      },
      {
        url: '/who-we-work.png',
        caption: { ar: 'اختبار وانتقاء أنقى المكونات العضوية والزيوت والمستخلصات', en: 'Botanical Extract Testing & Pure Organic Raw Materials', tr: 'Bitkisel Öz Testleri ve Saf Organik Hammaddeler', it: 'Test di Estratti Botanici e Materie Prime Biologiche' }
      },
      {
        url: '/start-your-brand.png',
        caption: { ar: 'خطوط التعبئة الآلية والتغليف النهائي الجاهز للتصدير', en: 'Automated Filling, Capping & Export-Ready Final Packaging', tr: 'Otomatik Dolum, Kapaklama ve İhracata Hazır Nihai Ambalaj', it: 'Riempimento Automatico e Confezionamento per Esportazione' }
      }
    ],
    finalCta: {
      title: {
        ar: 'هل أنت جاهز لإنشاء علاماتك التجارية لمستحضرات التجميل؟',
        en: 'READY TO CREATE YOUR COSMETIC BRAND?',
        tr: 'KOZMETİK MARKANIZI OLUŞTURMAYA HAZIR MISINIZ?',
        it: 'PRONTO A CREARE IL TUO MARCHIO COSMETICO?'
      },
      desc: {
        ar: 'اشترك مع أسلان الدولية لتطوير وتصنيع وإطلاق منتجات تجميل فاخرة مصممة خصيصاً حول رؤية علامتك التجارية.',
        en: 'Partner with ASLAN INTERNATIONAL to develop, manufacture, and launch premium cosmetic products created around your brand vision.',
        tr: 'Marka vizyonunuz etrafında oluşturulmuş premium kozmetik ürünlerini geliştirmek, üretmek ve piyasaya sürmek için ASLAN INTERNATIONAL ile ortaklık kurun.',
        it: 'Collabora con ASLAN INTERNATIONAL per sviluppare, produrre e lanciare prodotti cosmetici di lusso creati attorno alla visione del tuo marchio.'
      }
    },
    accentColor: 'from-amber-400 to-yellow-600',
    icon: <Sparkles className="w-8 h-8 text-amber-400" />,
    specs: [
      {
        label: { ar: 'حلول التصنيع', en: 'CONTRACT MANUFACTURING', tr: 'FASON ÜRETİM', it: 'PRODUZIONE CONTO TERZI' },
        value: { ar: 'Private Label & OEM/ODM', en: 'Private Label & OEM/ODM Solutions', tr: 'Özel Marka ve OEM/ODM Çözümleri', it: 'Soluzioni Marchio Privato e OEM/ODM' },
        desc: { ar: 'تطوير حصرى شامل من التركيبة والعبوة حتى المنتج النهائي.', en: 'End-to-end bespoke product development from lab formula to store shelf.', tr: 'Laboratuvar formülünden rafa kadar uçtan uca özel ürün geliştirme.', it: 'Sviluppo di prodotti su misura dal laboratorio allo scaffale.' }
      },
      {
        label: { ar: 'ضمان السرية', en: 'BRAND PROTECTION', tr: 'MARKA KORUMASI', it: 'PROTEZIONE MARCHIO' },
        value: { ar: 'سرية تامة 100%', en: '100% Confidentiality Guaranteed', tr: '%100 Gizlilik Garantisi', it: 'Riservatezza Garantita al 100%' },
        desc: { ar: 'اتفاقيات عدم إفشاء رسمية لحماية الممتلكات الفكرية والابتكارات.', en: 'Strict Non-Disclosure Agreements (NDA) protecting formula IP & concepts.', tr: 'Formül ve konsept haklarını koruyan sıkı Gizlilik Sözleşmeleri (NDA).', it: 'Accordi di Riservatezza (NDA) a tutela della proprietà intellettuale.' }
      },
      {
        label: { ar: 'الجودة والتصدير', en: 'GLOBAL COMPLIANCE', tr: 'KÜRESEL UYUMLULUK', it: 'CONFORMITÀ GLOBALE' },
        value: { ar: 'معايير جودة دولية GMP', en: 'ISO & GMP Certified Standards', tr: 'ISO ve GMP Sertifikalı Standartlar', it: 'Standard Certificati ISO e GMP' },
        desc: { ar: 'منتجات متوافقة مع لوائح سلامة التجميل الأوروبية والأمريكية والخليجية.', en: 'Full compliance with EU, FDA, and GCC cosmetic safety regulations.', tr: 'AB, FDA ve Körfez kozmetik güvenlik düzenlemeleriyle tam uyum.', it: 'Piena conformità con le normative cosmetiche UE, FDA e GCC.' }
      }
    ],
    processSteps: [
      { step: '01', title: { ar: 'الاستشارة والتركيبة', en: 'Consultation & Formulation', tr: 'Danışmanlık ve Formülasyon', it: 'Consulenza e Formulazione' }, desc: { ar: 'تحديد متطلبات العلامة وتطوير تركيبات مخصصة في مختبراتنا.', en: 'Defining brand requirements and engineering custom lab formulas.', tr: 'Marka gereksinimlerini belirleme ve özel laboratuvar formülleri geliştirme.', it: 'Definizione dei requisiti del marchio e sviluppo di formule personalizzate.' } },
      { step: '02', title: { ar: 'التغليف والتصنيع', en: 'Packaging & Production', tr: 'Ambalaj ve Üretim', it: 'Confezionamento e Produzione' }, desc: { ar: 'اختيار العبوات وتصنيع الدفعات بضبط دقيق للجودة.', en: 'Selecting luxury containers and scaling batch production seamlessly.', tr: 'Lüks ambalaj seçimi ve hassas kalite kontrolü ile seri üretim.', it: 'Selezione di flaconi di lusso e produzione di lotti di altissima qualità.' } },
      { step: '03', title: { ar: 'التعبئة والتسليم', en: 'Filling & Global Delivery', tr: 'Dolum ve Küresel Teslimat', it: 'Riempimento e Spedizione' }, desc: { ar: 'تعبئة معقمة وتغليف حامي جاهز للتوزيع والشحن العالمي.', en: 'Aseptic automated filling and export-ready global shipping.', tr: 'Steril otomatik dolum ve ihracata hazır küresel sevkiyat.', it: 'Riempimento automatico asettico e spedizione globale pronta per l\'esportazione.' } }
    ],
    caseStudy: {
      title: { ar: 'شراكات ناجحة مع مؤثري وعلامات التجميل', en: 'SUCCESSFUL BRAND LAUNCHES', tr: 'BAŞARILI MARKA LANSMANLARI', it: 'LANCE DI MARCHI DI SUCCESSO' },
      metric: '100+',
      metricLabel: { ar: 'منتج تجميل جاهز للسوق تم تطويره', en: 'MARKET-READY PRODUCTS DEVELOPED', tr: 'PAZARA HAZIR ÜRÜN GELİŞTİRİLDİ', it: 'PRODOTTI SVILUPPATI PRONTI PER IL MERCATO' },
      desc: { ar: 'نجحنا في مساعدة عشرات العلامات التجارية والمؤثرين في بناء وتصنيع خطوط منتجات تجميل خاصة بهم من الفكرة وحتى البيع.', en: 'We have empowered beauty influencers and emerging global cosmetics houses to bring custom skincare and makeup lines to market with absolute confidentiality and pristine quality.', tr: 'Güzellik influencer\'larının ve gelişmekte olan küresel kozmetik markalarının, tam gizlilik ve kusursuz kaliteyle özel cilt bakımı ve makyaj serilerini pazara sunmalarına yardımcı olduk.', it: 'Abbiamo guidato influencer e nuovi marchi cosmetici nello sviluppo e nel lancio di linee personalizzate di trattamenti per la pelle e trucco con totale riservatezza e qualità.' }
    }
  },
  'private-label': {
    title: {
      ar: 'تصنيع مستحضرات التجميل والعلامات الخاصة',
      en: 'COSMETICS MANUFACTURING & PRIVATE LABEL',
      tr: 'KOZMETİK ÜRETİMİ VE ÖZEL MARKA',
      it: 'PRODUZIONE COSMETICA E MARCHIO PRIVATO'
    },
    subtitle: {
      ar: 'من الفكرة إلى منتج تجميلي متكامل',
      en: 'FROM CONCEPT TO COMPLETE COSMETIC PRODUCT',
      tr: 'KONSEPTTEN EKSİKSİZ KOZMETİK ÜRÜNÜNE',
      it: 'DAL CONCETTO AL PRODOTTO COSMETICO COMPLETO'
    },
    heroImage: '/factory.png',
    intro: {
      ar: 'تقدم أسلان الدولية حلولاً متكاملة لتطوير وتصنيع مستحضرات التجميل، بدءًا من الفكرة الأولى والتركيبة المختبرية وحتى التغليف والإنتاج ومراقبة الجودة والتسليم الجاهز للسوق.',
      en: 'ASLAN INTERNATIONAL provides complete cosmetic development and manufacturing solutions, from the first product concept and laboratory formulation to packaging, production, quality control, and market-ready delivery.',
      tr: 'ASLAN INTERNATIONAL, ilk ürün konsepti ve laboratuvar formülasyonundan ambalaj, üretim, kalite kontrol ve pazara hazır teslimata kadar eksiksiz kozmetik geliştirme ve üretim çözümleri sunar.',
      it: 'ASLAN INTERNATIONAL offre soluzioni complete di sviluppo e produzione cosmetica, dal primo concetto di prodotto e formulazione di laboratorio al confezionamento, produzione, controllo qualità e consegna pronta per il mercato.'
    },
    philosophySection: {
      title: {
        ar: 'فلسفة التصنيع والتميز',
        en: 'MANUFACTURING PHILOSOPHY & EXCELLENCE',
        tr: 'ÜRETİM FELSEFESİ VE MÜKEMMELLİK',
        it: 'FILOSOFIA DI PRODUZIONE ED ECCELLENZA'
      },
      paragraphs: [
        {
          ar: 'على مدار سنوات من الخبرة، نجحت ASLAN INTERNATIONAL في تطوير وإطلاق العديد من العلامات التجارية، وتُعد LOVABELLA العلامة الرائدة للشركة، والتي تجسد التزامنا بالجودة والابتكار والمعايير العالمية.',
          en: 'Over years of experience, ASLAN INTERNATIONAL has successfully developed and launched numerous brands, with LOVABELLA standing as the company\'s flagship brand that embodies our commitment to quality, innovation, and global standards.',
          tr: 'Yıllara dayanan deneyimiyle ASLAN INTERNATIONAL, kalite, yenilik ve küresel standartlara olan bağlılığımızı simgeleyen amiral gemisi markamız LOVABELLA başta olmak üzere çok sayıda markayı başarıyla geliştirmiş ve piyasaya sürmüştür.',
          it: 'Nel corso degli anni, ASLAN INTERNATIONAL ha sviluppato e lanciato con successo numerosi marchi, tra cui LOVABELLA, il marchio principale dell\'azienda che incarna il nostro impegno per la qualità, l\'innovazione e gli standard internazionali.'
        },
        {
          ar: 'وبالإضافة إلى علاماتنا التجارية، نقدم خدمات OEM/ODM وPrivate Label لتطوير وتصنيع مستحضرات التجميل والعناية بالبشرة والعناية الشخصية، بدءًا من تطوير التركيبات وتصميم العبوات وحتى الإنتاج النهائي.',
          en: 'In addition to our proprietary brands, we offer OEM/ODM and Private Label services to develop and manufacture cosmetics, skincare, and personal care products, from formulation development and packaging design to final production.',
          tr: 'Kendi markalarımıza ek olarak, formülพัฒmadan ambalaj tasarımına ve nihai üretime kadar kozmetik, cilt bakımı ve kişisel bakım ürünlerini geliştirmek ve üretmek için OEM/ODM ve Özel Marka (Private Label) hizmetleri sunuyoruz.',
          it: 'Oltre ai nostri marchi di proprietà, offriamo servizi OEM/ODM e Private Label per sviluppare e produrre cosmetici, prodotti per la cura della pelle e la cura personale, dalla formulazione e design del packaging fino alla produzione finale.'
        },
        {
          ar: 'كما حظيت الشركة بثقة العديد من العلامات التجارية والمؤثرين لتطوير وإنتاج منتجات تحمل علاماتهم الخاصة، مع الالتزام الكامل بسرية جميع المشاريع وحماية هوية عملائنا.',
          en: 'Furthermore, the company has earned the trust of numerous brands and influencers to develop and manufacture products under their private labels, with complete commitment to project confidentiality and protecting client identities.',
          tr: 'Ayrıca şirketimiz, tüm projelerin gizliliğine tam bağlılık ve müşteri kimliklerinin korunması ilkesiyle, kendi özel markaları altında ürünler geliştirmek ve üretmek üzere çok sayıda marka ve influencer\'ın güvenini kazanmıştır.',
          it: 'Inoltre, l\'azienda ha conquistato la fiducia di numerosi marchi ed influencer per sviluppare e produrre prodotti a marchio privato, con il massimo impegno per la riservatezza dei progetti e la protezione delle identità dei clienti.'
        },
        {
          ar: 'ورغم تقديمنا حلول تصنيع متكاملة لشركائنا، تبقى الأولوية دائمًا لتطوير وتعزيز علاماتنا التجارية الخاصة، وفي مقدمتها LOVABELLA، بما يعكس رؤيتنا في تقديم منتجات تنافس في الأسواق المحلية والعالمية.',
          en: 'While providing comprehensive manufacturing solutions to our partners, our top priority remains developing and strengthening our proprietary brands, led by LOVABELLA, reflecting our vision to deliver products that compete in local and global markets.',
          tr: 'Ortaklarımıza kapsamlı üretim çözümleri sunarken, en büyük önceliğimiz, yerel ve küresel pazarlarda rekabet eden ürünler sunma vizyonumuzu yansıtan LOVABELLA liderliğindeki kendi markalarımızı geliştirmek ve güçlendirmektir.',
          it: 'Pur offrendo soluzioni di produzione integrate ai nostri partner, la priorità assoluta rimane lo sviluppo e il rafforzamento dei nostri marchi proprietari, guidati da LOVABELLA, a testimonianza della nostra visione di offrire prodotti competitivi sia a livello locale che globale.'
        }
      ]
    },
    servicesList: [
      { ar: 'تطوير تركيبات مستحضرات التجميل', en: 'Cosmetic Formulation Development', tr: 'Kozmetik Formülasyon Geliştirme', it: 'Sviluppo Formulazioni Cosmetiche' },
      { ar: 'تطوير منتجات العناية بالبشرة', en: 'Skincare Product Development', tr: 'Cilt Bakım Ürünleri Geliştirme', it: 'Sviluppo Prodotti Skincare' },
      { ar: 'تطوير منتجات المكياج والتجميل', en: 'Makeup Product Development', tr: 'Makyaj Ürünleri Geliştirme', it: 'Sviluppo Prodotti Makeup' },
      { ar: 'تصنيع منتجات العناية الشخصية', en: 'Personal Care Manufacturing', tr: 'Kişisel Bakım Üretimi', it: 'Produzione Cura Personale' },
      { ar: 'تصميم وتطوير العبوات والتغليف', en: 'Packaging Design & Development', tr: 'Ambalaj Tasarımı ve Geliştirme', it: 'Design e Sviluppo Packaging' },
      { ar: 'تصنيع العلامات الخاصة Private Label', en: 'Private Label Manufacturing', tr: 'Özel Marka Üretimi (Private Label)', it: 'Produzione Marchio Privato' },
      { ar: 'حلول التصنيع المخصص OEM / ODM', en: 'OEM / ODM Solutions', tr: 'OEM / ODM Çözümleri', it: 'Soluzioni OEM / ODM' },
      { ar: 'التعبئة والتغليف المحترف', en: 'Filling & Packaging', tr: 'Dolum ve Ambalajlama', it: 'Riempimento e Confezionamento' },
      { ar: 'مراقبة وضبط الجودة الشامل', en: 'Quality Control', tr: 'Kalite Kontrolü', it: 'Controllo Qualità' },
      { ar: 'الإنتاج الجاهز للتصدير الدولي', en: 'Export-Ready Production', tr: 'İhracata Hazır Üretim', it: 'Produzione Pronta per l\'Esportazione' }
    ],
    executionStages: [
      { step: '01', title: { ar: 'استشارة العلامة التجارية', en: 'Brand Consultation', tr: 'Marka Danışmanlığı', it: 'Consulenza del Marchio' } },
      { step: '02', title: { ar: 'فكرة المفهوم والمنتج', en: 'Product Concept', tr: 'Ürün Konsepti', it: 'Concetto di Prodotto' } },
      { step: '03', title: { ar: 'تطوير التركيبة المختبرية', en: 'Formula Development', tr: 'Formül Geliştirme', it: 'Sviluppo della Formula' } },
      { step: '04', title: { ar: 'أخذ العينات والاختبار الحيوية', en: 'Sampling & Testing', tr: 'Numune Alma ve Test', it: 'Campionamento e Test' } },
      { step: '05', title: { ar: 'اختيار العبوات والتغليف', en: 'Packaging Selection', tr: 'Ambalaj Seçimi', it: 'Selezione del Packaging' } },
      { step: '06', title: { ar: 'اعتماد التصميم النهائي', en: 'Design Approval', tr: 'Tasarım Onayı', it: 'Approvazione del Design' } },
      { step: '07', title: { ar: 'التصنيع والإنتاج الكثيف', en: 'Manufacturing', tr: 'Üretim', it: 'Produzione' } },
      { step: '08', title: { ar: 'التعبئة والتجميع الآلي', en: 'Filling & Assembly', tr: 'Dolum ve Montaj', it: 'Riempimento e Assemblaggio' } },
      { step: '09', title: { ar: 'ضبط ومراقبة الجودة', en: 'Quality Control', tr: 'Kalite Kontrolü', it: 'Controllo Qualità' } },
      { step: '10', title: { ar: 'التغليف النهائي والترميز', en: 'Final Packaging', tr: 'Nihai Ambalajlama', it: 'Confezionamento Finale' } },
      { step: '11', title: { ar: 'جاهزية التسليم والتصدير', en: 'Ready for Delivery', tr: 'Teslimata Hazır', it: 'Pronto per la Consegna' } }
    ],
    productsScope: [
      { ar: 'السيرومات الفاخرة', en: 'Serums', tr: 'Serumlar', it: 'Sieri' },
      { ar: 'كريمات الوجه والعناية', en: 'Face Creams', tr: 'Yüz Kremleri', it: 'Creme Viso' },
      { ar: 'منتجات العناية بالبشرة', en: 'Skincare Products', tr: 'Cilt Bakım Ürünleri', it: 'Prodotti Skincare' },
      { ar: 'كريم الأساس (الفاونديشن)', en: 'Foundation', tr: 'Fondöten', it: 'Fondotinta' },
      { ar: 'أحمر الشفاه', en: 'Lipstick', tr: 'Ruj', it: 'Rossetto' },
      { ar: 'ملمع الشفاه', en: 'Lip Gloss', tr: 'Dudak Parlatıcısı', it: 'Lucidalabbra' },
      { ar: 'الماسكارا المكثفة', en: 'Mascara', tr: 'Maskara', it: 'Mascara' },
      { ar: 'الآيلاينر ومكياج العيون', en: 'Eyeliner', tr: 'Eyeliner', it: 'Eyeliner' },
      { ar: 'البودرة المضغوطة', en: 'Pressed Powder', tr: 'Sıkıştırılmış Toz Pudra', it: 'Cipria Compatta' },
      { ar: 'أحمر الخدود (البلاشر)', en: 'Blush', tr: 'Allık', it: 'Fard' },
      { ar: 'الإضاءة (الهايلايتر)', en: 'Highlighter', tr: 'Aydınlatıcı', it: 'Illuminante' },
      { ar: 'لوحات ظلال العيون', en: 'Eyeshadow', tr: 'Göz Farı', it: 'Ombretto' },
      { ar: 'منتجات العناية الشخصية', en: 'Personal Care Products', tr: 'Kişisel Bakım Ürünleri', it: 'Prodotti per la Cura Personale' }
    ],
    confidentialitySection: {
      title: {
        ar: 'السرية وحماية العلامات التجارية',
        en: 'CONFIDENTIALITY & BRAND PROTECTION',
        tr: 'GİZLİLİK VE MARKA KORUMASI',
        it: 'RISERVATEZZA E PROTEZIONE DEL MARCHIO'
      },
      desc: {
        ar: 'تُعالج جميع تركيبات العملاء ومفاهيم التغليف وتصاميم المنتجات ومشاريع التصنيع بسرية تامة. تحمي أسلان الدولية الهوية والملكية الفكرية والمعلومات التجارية لكل شريك.',
        en: 'All client formulations, packaging concepts, product designs, and manufacturing projects are handled with strict confidentiality. ASLAN INTERNATIONAL protects the identity, intellectual property, and commercial information of every partner.',
        tr: 'Tüm müşteri formülasyonları, ambalaj konseptleri, ürün tasarımları ve üretim projeleri son derece gizlilikle ele alınır. ASLAN INTERNATIONAL her ortağının kimliğini, fikri mülkiyetini ve ticari bilgilerini korur.',
        it: 'Tutte le formulazioni, i concetti di confezionamento, i design dei prodotti e i progetti di produzione dei clienti sono gestiti con la massima riservatezza. ASLAN INTERNATIONAL protegge l\'identità, la proprietà intellettuale e le informazioni commerciali di ogni partner.'
      }
    },
    galleryImages: [
      {
        url: '/aslan-88.png',
        caption: { ar: 'تطوير تركيبات تجميل مخصصة وعينات ألوان فاخرة', en: 'Custom Cosmetic Formulation & Color Palette Development', tr: 'Özel Kozmetik Formülasyonu ve Renk Paleti Geliştirme', it: 'Sviluppo Formulazioni Cosmetiche e Tavolozza Colori' }
      },
      {
        url: '/factory.png',
        caption: { ar: 'منشأة تصنيع متطورة وغرف نظيفة فائقة التعقيم', en: 'High-Tech Cleanroom Cosmetics Manufacturing Facility', tr: 'Yüksek Teknolojili Temiz Oda Kozmetik Üretim Tesisleri', it: 'Struttura di Produzione Cosmetica in Camera Bianca' }
      },
      {
        url: '/aslan-88.png',
        caption: { ar: 'مختبر البحوث والتطوير واختبارات الاستقرار والسلامة', en: 'ASLAN Research & Development Lab - Safety & Stability Testing', tr: 'ASLAN Ar-Ge Laboratuvarı - Güvenlik ve Stabilite Testleri', it: 'Laboratorio di R&S ASLAN - Test di Sicurezza e Stabilità' }
      },
      {
        url: '/lovabella-partner.png',
        caption: { ar: 'منتجات LOVABELLA الفاخرة - النموذج الرائد لعلاماتنا', en: 'LOVABELLA Premium Skincare - Flagship Brand Excellence', tr: 'LOVABELLA Premium Cilt Bakımı - Amiral Gemisi Markamız', it: 'LOVABELLA Skincare - Eccellenza del Marchio Guida' }
      },
      {
        url: '/who-we-work.png',
        caption: { ar: 'اختبار وانتقاء أنقى المكونات العضوية والزيوت والمستخلصات', en: 'Botanical Extract Testing & Pure Organic Raw Materials', tr: 'Bitkisel Öz Testleri ve Saf Organik Hammaddeler', it: 'Test di Estratti Botanici e Materie Prime Biologiche' }
      },
      {
        url: '/start-your-brand.png',
        caption: { ar: 'خطوط التعبئة الآلية والتغليف النهائي الجاهز للتصدير', en: 'Automated Filling, Capping & Export-Ready Final Packaging', tr: 'Otomatik Dolum, Kapaklama ve İhracata Hazır Nihai Ambalaj', it: 'Riempimento Automatico e Confezionamento per Esportazione' }
      }
    ],
    finalCta: {
      title: {
        ar: 'هل أنت جاهز لإنشاء علاماتك التجارية لمستحضرات التجميل؟',
        en: 'READY TO CREATE YOUR COSMETIC BRAND?',
        tr: 'KOZMETİK MARKANIZI OLUŞTURMAYA HAZIR MISINIZ?',
        it: 'PRONTO A CREARE IL TUO MARCHIO COSMETICO?'
      },
      desc: {
        ar: 'اشترك مع أسلان الدولية لتطوير وتصنيع وإطلاق منتجات تجميل فاخرة مصممة خصيصاً حول رؤية علامتك التجارية.',
        en: 'Partner with ASLAN INTERNATIONAL to develop, manufacture, and launch premium cosmetic products created around your brand vision.',
        tr: 'Marka vizyonunuz etrafında oluşturulmuş premium kozmetik ürünlerini geliştirmek, üretmek ve piyasaya sürmek için ASLAN INTERNATIONAL ile ortaklık kurun.',
        it: 'Collabora con ASLAN INTERNATIONAL per sviluppare, produrre e lanciare prodotti cosmetici di lusso creati attorno alla visione del tuo marchio.'
      }
    },
    accentColor: 'from-amber-400 to-yellow-600',
    icon: <Sparkles className="w-8 h-8 text-amber-400" />,
    specs: [
      {
        label: { ar: 'حلول التصنيع', en: 'CONTRACT MANUFACTURING', tr: 'FASON ÜRETİM', it: 'PRODUZIONE CONTO TERZI' },
        value: { ar: 'Private Label & OEM/ODM', en: 'Private Label & OEM/ODM Solutions', tr: 'Özel Marka ve OEM/ODM Çözümleri', it: 'Soluzioni Marchio Privato e OEM/ODM' },
        desc: { ar: 'تطوير حصرى شامل من التركيبة والعبوة حتى المنتج النهائي.', en: 'End-to-end bespoke product development from lab formula to store shelf.', tr: 'Laboratuvar formülünden rafa kadar uçtan uca özel ürün تطوير.', it: 'Sviluppo di prodotti su misura dal laboratorio allo scaffale.' }
      },
      {
        label: { ar: 'ضمان السرية', en: 'BRAND PROTECTION', tr: 'MARKA KORUMASI', it: 'PROTEZIONE MARCHIO' },
        value: { ar: 'سرية تامة 100%', en: '100% Confidentiality Guaranteed', tr: '%100 Gizlilik Garantisi', it: 'Riservatezza Garantita al 100%' },
        desc: { ar: 'اتفاقيات عدم إفشاء رسمية لحماية الممتلكات الفكرية والابتكارات.', en: 'Strict Non-Disclosure Agreements (NDA) protecting formula IP & concepts.', tr: 'Formül ve konsept haklarını koruyan sıkı Gizlilik Sözleşmeleri (NDA).', it: 'Accordi di Riservatezza (NDA) a tutela della proprietà intellettuale.' }
      },
      {
        label: { ar: 'الجودة والتصدير', en: 'GLOBAL COMPLIANCE', tr: 'KÜRESEL UYUMLULUK', it: 'CONFORMITÀ GLOBALE' },
        value: { ar: 'معايير جودة دولية GMP', en: 'ISO & GMP Certified Standards', tr: 'ISO ve GMP Sertifikalı Standartlar', it: 'Standard Certificati ISO e GMP' },
        desc: { ar: 'منتجات متوافقة مع لوائح سلامة التجميل الأوروبية والأمريكية والخليجية.', en: 'Full compliance with EU, FDA, and GCC cosmetic safety regulations.', tr: 'AB, FDA ve Körfez kozmetik güvenlik düzenlemeleriyle tam uyum.', it: 'Piena conformità con le normative cosmetiche UE, FDA e GCC.' }
      }
    ],
    processSteps: [
      { step: '01', title: { ar: 'الاستشارة والتركيبة', en: 'Consultation & Formulation', tr: 'Danışmanlık ve Formülasyon', it: 'Consulenza e Formulazione' }, desc: { ar: 'تحديد متطلبات العلامة وتطوير تركيبات مخصصة في مختبراتنا.', en: 'Defining brand requirements and engineering custom lab formulas.', tr: 'Marka gereksinimlerini belirleme ve özel laboratuvar formülleri geliştirme.', it: 'Definizione dei requisiti del marchio e sviluppo di formule personalizzate.' } },
      { step: '02', title: { ar: 'التغليف والتصنيع', en: 'Packaging & Production', tr: 'Ambalaj ve Üretim', it: 'Confezionamento e Produzione' }, desc: { ar: 'اختيار العبوات وتصنيع الدفعات بضبط دقيق للجودة.', en: 'Selecting luxury containers and scaling batch production seamlessly.', tr: 'Lüks ambalaj seçimi ve hassas kalite kontrolü ile seri üretim.', it: 'Selezione di flaconi di lusso e produzione di lotti di altissima qualità.' } },
      { step: '03', title: { ar: 'التعبئة والتسليم', en: 'Filling & Global Delivery', tr: 'Dolum ve Küresel Teslimat', it: 'Riempimento e Spedizione' }, desc: { ar: 'تعبئة معقمة وتغليف حامي جاهز للتوزيع والشحن العالمي.', en: 'Aseptic automated filling and export-ready global shipping.', tr: 'Steril otomatik dolum ve ihracata hazır küresel sevkiyat.', it: 'Riempimento automatico asettico e spedizione globale pronta per l\'esportazione.' } }
    ],
    caseStudy: {
      title: { ar: 'شراكات ناجحة مع مؤثري وعلامات التجميل', en: 'SUCCESSFUL BRAND LAUNCHES', tr: 'BAŞARILI MARKA LANSMANLARI', it: 'LANCE DI MARCHI DI SUCCESSO' },
      metric: '100+',
      metricLabel: { ar: 'منتج تجميل جاهز للسوق تم تطويره', en: 'MARKET-READY PRODUCTS DEVELOPED', tr: 'PAZARA HAZIR ÜRÜN GELİŞTİRİLDİ', it: 'PRODOTTI SVILUPPATI PRONTI PER IL MERCATO' },
      desc: { ar: 'نجحنا في مساعدة عشرات العلامات التجارية والمؤثرين في بناء وتصنيع خطوط منتجات تجميل خاصة بهم من الفكرة وحتى البيع.', en: 'We have empowered beauty influencers and emerging global cosmetics houses to bring custom skincare and makeup lines to market with absolute confidentiality and pristine quality.', tr: 'Güzellik influencer\'larının ve gelişmekte olan küresel kozmetik markalarının, tam gizlilik ve kusursuz kaliteyle özel cilt bakımı ve makyaj serilerini pazara sunmalarına yardımcı olduk.', it: 'Abbiamo guidato influencer e nuovi marchi cosmetici nello sviluppo e nel lancio di linee personalizzate di trattamenti per la pelle e trucco con totale riservatezza e qualità.' }
    }
  },
  'global-trade': {
    title: {
      ar: 'الخصوصية · الثقة · الحماية',
      en: 'PRIVACY · TRUST · PROTECTION',
      tr: 'GİZLİLİK · GÜVEN · KORUMA',
      it: 'RISERVATEZZA · FIDUCIA · PROTEZIONE'
    },
    subtitle: {
      ar: 'رؤيتك محفوظة بسرية كاملة',
      en: 'YOUR VISION. FULLY PROTECTED.',
      tr: 'VİZYONUNUZ. TAMAMEN KORUMA ALTINDA.',
      it: 'LA TUA VISIONE. COMPLETAMENTE PROTETTA.'
    },
    heroImage: earthImg,
    intro: {
      ar: 'نلتزم بحماية تركيبات العملاء، ومفاهيم العبوات، وتفاصيل المشاريع، وهوية الشركاء بسرية كاملة. ولا يتم الكشف عن أي مشروع أو منتج أو أعمال تطوير أو نشرها أو مشاركتها إلا بعد موافقة رسمية من العميل.',
      en: 'We are committed to protecting client formulations, packaging concepts, project details, and partner identity with complete confidentiality. No project, product, or development work is disclosed, published, or shared without formal approval from the client.',
      tr: 'Müşteri formülasyonlarını, ambalaj konseptlerini, proje detaylarını ve ortak kimliğini tam bir gizlilikle korumayı taahhüt ediyoruz. Müşteriden resmi onay alınmadan hiçbir proje, ürün veya geliştirme çalışması açıklanmaz, yayınlanmaz veya paylaşılmaz.',
      it: 'Ci impegniamo a proteggere le formulazioni dei clienti, i concetti di packaging, i dettagli del progetto e l\'identità dei partner con la massima riservatezza. Nessun progetto, prodotto o lavoro di sviluppo viene divulgato, pubblicato o condiviso senza formale approvazione del cliente.'
    },
    accentColor: 'from-amber-400 to-amber-600',
    icon: <ShieldCheck className="w-8 h-8 text-amber-400" />,
    specs: [
      {
        label: { ar: 'سرية التركيبات', en: 'FORMULA CONFIDENTIALITY', tr: 'FORMÜL GİZLİLİĞİ', it: 'RISERVATEZZA DELLE FORMULE' },
        value: { ar: 'يتم التعامل مع التركيبات ومفاهيم المنتجات بسرية داخلية صارمة.', en: 'Client formulas and product concepts are handled with strict internal confidentiality.', tr: 'Müşteri formülleri ve ürün konseptleri katı dahili gizlilik altında işlenir.', it: 'Le formule e i concetti di prodotto dei clienti sono gestiti con rigorosa riservatezza interna.' },
        desc: { ar: 'يتم التعامل مع التركيبات ومفاهيم المنتجات بسرية داخلية صارمة وحماية كاملة.', en: 'Client formulas and product concepts are handled with strict internal confidentiality and total protection.', tr: 'Müşteri formülleri ve ürün konseptleri katı dahili gizlilik ve tam koruma altında işlenir.', it: 'Le formule e i concetti di prodotto dei clienti sono gestiti con rigorosa riservatezza e totale protezione.' }
      },
      {
        label: { ar: 'حماية هوية العلامة', en: 'BRAND IDENTITY PROTECTION', tr: 'MARKA KİMLİĞİ KORUMASI', it: 'PROTEZIONE DELL\'IDENTITÀ DEL MARCHIO' },
        value: { ar: 'تتم حماية أسماء العلامات التجارية وهويتها البصرية وخطط إطلاقها طوال مراحل العمل.', en: 'Brand names, visual identity, and launch plans are protected throughout the entire process.', tr: 'Marka isimleri, görsel kimlik ve lansman planları tüm süreç boyunca korunur.', it: 'Nomi dei marchi, identità visiva e piani di lancio sono protetti durante tutto il processo.' },
        desc: { ar: 'تتم حماية أسماء العلامات التجارية وهويتها البصرية وخطط إطلاقها طوال مراحل العمل.', en: 'Brand names, visual identity, and launch plans are protected throughout the entire development lifecycle.', tr: 'Marka isimleri, görsel kimlik ve lansman planları tüm geliştirme yaşam döngüsü boyunca korunur.', it: 'Nomi dei marchi, identità visiva e piani di lancio sono protetti durante tutto il ciclo di sviluppo.' }
      }
    ],
    processSteps: [
      { step: '01', title: { ar: 'توقيع اتفاقية عدم الإفصاح (NDA)', en: 'Non-Disclosure Agreement (NDA)', tr: 'Gizlilik Sözleşmesi (NDA)', it: 'Accordo di Riservatezza (NDA)' }, desc: { ar: 'توقيع اتفاقية قانونية ملزمة قبل البدء بمشاركة أي تفاصيل أو تركيبات.', en: 'Signing a legally binding NDA before sharing any formula details or packaging specifications.', tr: 'Herhangi bir formül detayı veya ambalaj özelliğini paylaşmadan önce yasal olarak bağlayıcı bir NDA imzalanması.', it: 'Firma di un accordo legale vincolante prima di condividere dettagli su formule o packaging.' } },
      { step: '02', title: { ar: 'التطوير والتصنيع المشفر', en: 'Encrypted Formula Development', tr: 'Şifreli Formül Geliştirme', it: 'Sviluppo Formulazione Protetto' }, desc: { ar: 'ترميز التركيبات وحماية الملكية الفكرية طوال مراحل التطوير والاختبار والتصنيع.', en: 'Internal code-naming of formulations and IP safeguarding through all laboratory and production cycles.', tr: 'Formülasyonların dahili kodlanması ve tüm laboratuvar ve üretim döngülerinde IP koruması.', it: 'Codifica interna delle formulazioni e salvaguardia della proprietà intellettuale in laboratorio.' } },
      { step: '03', title: { ar: 'الإطلاق الحصري للعميل', en: 'Exclusive Client Launch', tr: 'Müşteriye Özel Lansman', it: 'Lancio Esclusivo per il Cliente' }, desc: { ar: 'تسليم المنتجات النهائية للعميل دون أي كشف عن بيانات المشروع لأطراف ثالثة.', en: 'Delivering final finished goods directly to client distribution without disclosing project details.', tr: 'Proje detaylarını üçüncü taraflara açıklamadan nihai bitmiş ürünlerin teslimatı.', it: 'Consegna dei prodotti finiti direttamente al cliente senza alcuna divulgazione a terzi.' } }
    ],
    caseStudy: {
      title: { ar: 'حماية كاملة للعلامات التجارية والمحتوى الحصري', en: '100% Confidential Brand Safeguard', tr: '%100 Gizli Marka Koruması', it: 'Protezione del Marchio 100% Riservata' },
      metric: '100%',
      metricLabel: { ar: 'نسبة الالتزام بالسرية وحماية الملكية الفكرية', en: 'CONFIDENTIALITY & IP PROTECTION RATE', tr: 'GİZLİLİK VE IP KORUMA ORANI', it: 'TASSO DI RISERVATEZZA E PROTEZIONE IP' },
      desc: { ar: 'نضمن حماية كاملة لجميع المنتجات والمشاريع والتركيبات. لا نقوم بنشر أي صورة أو عينة أو تفاصيل مشروع دون إذن خطي صريح من العميل.', en: 'We guarantee absolute confidentiality across all partner formulations and product launches. Zero project details or imagery are ever disclosed without written authorization.', tr: 'Tüm ortak formülasyonlarında ve ürün lansmanlarında mutlak gizliliği garanti ediyoruz. Yazılı izin olmadan hiçbir proje detayı açıklanmaz.', it: 'Garantiamo la massima riservatezza per tutte le formulazioni e i lanci di prodotto dei nostri partner. Nessun dettaglio viene mai divulgato senza autorizzazione.' }
    }
  },
  brands: {
    title: {
      ar: 'التجارة العالمية',
      en: 'GLOBAL TRADE',
      tr: 'KÜRESEL TİCARET',
      it: 'COMMERCIO GLOBALE'
    },
    subtitle: {
      ar: 'حلول التوريد والتجارة والتصدير',
      en: 'GLOBAL SOURCING, TRADE & EXPORT SOLUTIONS',
      tr: 'KÜRESEL TEDARİK, TİCARET VE İHRACAT ÇÖZÜMLERİ',
      it: 'SOLUZIONI DI APPROVVIGIONAMENTO, COMMERCIO ED ESPORTAZIONE GLOBALE'
    },
    heroImage: whoWeWorkImg,
    intro: {
      ar: 'تقدم ASLAN INTERNATIONAL حلولًا مرنة في التجارة العالمية، تشمل توريد المنتجات، والتنسيق مع الموردين، والشراء، وتجميع الطلبات، وتجهيز عمليات التصدير، ودعم الشحن الدولي. ونربط الموردين الموثوقين بشركاء الأعمال الذين يبحثون عن عمليات تجارية منظمة واحترافية.',
      en: 'ASLAN INTERNATIONAL provides flexible global trade solutions through product sourcing, supplier coordination, purchasing, order consolidation, export preparation, and international shipment support. We connect reliable suppliers with business partners seeking efficient and professionally managed trade operations.',
      tr: 'ASLAN INTERNATIONAL, ürün tedariği, tedarikçi koordinasyonu, satın alma, sipariş konsolidasyonu, ihracat hazırlığı ve uluslararası sevkiyat desteği aracılığıyla esnek küresel ticaret çözümleri sunar. Güvenilir tedarikçileri, verimli ve profesyonelce yönetilen ticaret operasyonları arayan iş ortaklarıyla buluşturuyoruz.',
      it: 'ASLAN INTERNATIONAL offre soluzioni flessibili per il commercio globale attraverso l\'approvvigionamento dei prodotti, il coordinamento dei fornitori, gli acquisti, il consolidamento degli ordini, la preparazione all\'esportazione e il supporto alle spedizioni internazionali. Colleghiamo fornitori affidabili con partner commerciali in cerca di operazioni gestite in modo efficiente e professionale.'
    },
    accentColor: 'from-amber-400 to-amber-600',
    icon: <Globe2 className="w-8 h-8 text-amber-400" />,
    specs: [
      {
        label: { ar: 'التوريد العالمي', en: 'GLOBAL SOURCING', tr: 'KÜRESEL TEDARİK', it: 'APPROVVIGIONAMENTO GLOBALE' },
        value: { ar: 'توريد المنتجات المناسبة والتنسيق مع المصانع والموردين الموثوقين وفق متطلبات العميل.', en: 'Sourcing suitable products and coordinating with reliable manufacturers and suppliers according to client requirements.', tr: 'Müşteri gereksinimlerine göre uygun ürünlerin tedarik edilmesi ve güvenilir üreticiler ile tedarikçilerle koordine edilmesi.', it: 'Approvvigionamento di prodotti idonei e coordinamento con produttori e fornitori affidabili in base alle esigenze del cliente.' },
        desc: { ar: 'تحديد واختيار أفضل الموردين المعتمدين والمصانع المباشرة لتلبية طلبات العميل باحترافية.', en: 'Identifying and coordinating directly with vetted global suppliers and plants tailored to client specifications.', tr: 'Müşteri özelliklerine göre uyarlanmış onaylı küresel tedarikçiler ve tesislerle doğrudan tanımlama ve koordinasyon.', it: 'Identificazione e coordinamento diretto con fornitori e impianti globali verificati.' }
      },
      {
        label: { ar: 'دعم التصدير والشحن', en: 'EXPORT & SHIPMENT SUPPORT', tr: 'İHRACAT VE SEVKİYAT DESTEĞİ', it: 'SUPPORTO ALL\'ESPORTAZIONE E SPEDIZIONE' },
        value: { ar: 'تجهيز الطلبات وتجميع الشحنات وتنسيق مستندات التصدير ودعم عمليات التسليم الدولي.', en: 'Preparing orders, consolidating shipments, coordinating export documents, and supporting international delivery.', tr: 'Siparişlerin hazırlanması, sevkiyatların birleştirilmesi, ihracat belgelerinin koordine edilmesi ve uluslararası teslimatın desteklenmesi.', it: 'Preparazione degli ordini, consolidamento delle spedizioni, coordinamento dei documenti di esportazione e supporto alla consegna internazionale.' },
        desc: { ar: 'إدارة كاملة للمستندات الجمركية وتجميع الحاوية لضمان وصول الشحنة بسلامة وسرعة.', en: 'Full export documentation management, order consolidation, and door-to-destination shipment monitoring.', tr: 'Tam ihracat belgeleme yönetimi, sipariş konsolidasyonu ve varış noktasına kadar sevkiyat izleme.', it: 'Gestione completa della documentazione di esportazione, consolidamento degli ordini e monitoraggio della spedizione.' }
      }
    ],
    processSteps: [
      { step: '01', title: { ar: 'التوريد والمطابقة', en: 'Product Sourcing & Verification', tr: 'Ürün Tedariği ve Doğrulama', it: 'Approvvigionamento e Verifica Prodotto' }, desc: { ar: 'دراسة متطلبات العميل وتحديد المصانع والموردين الموثوقين.', en: 'Analyzing client demands and connecting with vetted suppliers and certified manufacturers.', tr: 'Müşteri taleplerinin analizi ve onaylı tedarikçiler ile sertifikalı üreticilerle bağlantı kurulması.', it: 'Analisi delle richieste del cliente e contatto con fornitori verificati.' } },
      { step: '02', title: { ar: 'الشراء وتجميع الشحنات', en: 'Purchasing & Consolidation', tr: 'Satın Alma ve Konsolidasyon', it: 'Acquisti e Consolidamento' }, desc: { ar: 'إدارة عمليات الشراء وتجميع البضائع بالمستودعات وتعبئتها للتصدير.', en: 'Managing bulk procurement, cargo packaging, palletizing, and warehouse consolidation.', tr: 'Toplu satın alma yönetimi, kargo ambalajlama, paletleme ve depo konsolidasyonu.', it: 'Gestione degli acquisti, imballaggio cargo, palettizzazione e consolidamento in magazzino.' } },
      { step: '03', title: { ar: 'التجهيز للتصدير والشحن', en: 'Export Logistics & Delivery', tr: 'İhracat Lojistiği ve Teslimat', it: 'Logistica di Esportazione e Consegna' }, desc: { ar: 'استخراج الأوراق والمستندات الرسمية وتنسيق عمليات الشحن البحري والجوي.', en: 'Issuing export customs documentation and coordinating international shipment.', tr: 'İhracat gümrük belgelerinin düzenlenmesi ve uluslararası sevkiyatın koordine edilmesi.', it: 'Emissione della documentazione doganale di esportazione e coordinamento della spedizione.' } }
    ],
    caseStudy: {
      title: { ar: 'إدارة صفقات توريد وتصدير دولية متكاملة', en: 'Integrated Global Trade Operations', tr: 'Entegre Küresel Ticaret Operasyonları', it: 'Operazioni Commerciali Globali Integrate' },
      metric: '100% Reliable',
      metricLabel: { ar: 'دقة التنفيذ وتوثيق الشحنات الدولية', en: 'Export Document & Quality Compliance Rate', tr: 'İhracat Belgesi ve Kalite Uyum Oranı', it: 'Tasso di Conformità Documentale e Qualità' },
      desc: { ar: 'نجحت ASLAN INTERNATIONAL في إدارة وإنجاز مئات الصفقات الشاملة للتوريد والتصدير للشركاء عالمياً بخبرة موثوقة وعمليات شحن دقيقة.', en: 'ASLAN INTERNATIONAL successfully facilitates end-to-end purchasing, product sourcing, container consolidation, and export logistics for global partners.', tr: 'ASLAN INTERNATIONAL, küresel ortaklar için uçtan uca satın alma, ürün tedariği, konteyner konsolidasyonu ve ihracat lojistiğini başarıyla yönetmektedir.', it: 'ASLAN INTERNATIONAL gestisce con successo approvvigionamento, consolidamento container e logistica di esportazione per partner globali.' }
    }
  },
  software: {
    title: {
      ar: 'التطوير الرقمي الداخلي',
      en: 'INTERNAL DIGITAL DEVELOPMENT',
      tr: 'DAHİLİ DİJİTAL GELİŞTİRME',
      it: 'SVILUPPO DIGITALE INTERNO'
    },
    subtitle: {
      ar: 'برمجيات وذكاء اصطناعي لمنظومة أعمال أسلان',
      en: 'SOFTWARE & AI FOR ASLAN ECOSYSTEM',
      tr: 'ASLAN EKOSİSTEMİ İÇİN YAZILIM VE YAPAY ZEKA',
      it: 'SOFTWARE E AI PER L’ECOSISTEMA ASLAN'
    },
    heroImage: aiSoftwareImg,
    intro: {
      ar: 'تطوّر ASLAN برامج وأنظمة رقمية داخلية تخدم شركاتها وعلاماتها وفرقها ووكلاءها وعملاءها، وتشمل المحاسبة والمصاريف والمخزون والمبيعات والمواقع والمنصات وأدوات الذكاء الاصطناعي. هذه الأنظمة مخصصة لأعمالنا ولا نقدم خدمات برمجة خارجية.',
      en: 'ASLAN develops internal digital software and systems serving its companies, brands, teams, agents, and clients. This includes accounting, expenses, inventory, sales, websites, platforms, and AI tools. These systems are dedicated to our business and we do not offer external programming services.',
      tr: 'ASLAN, şirketlerine, markalarına, ekiplerine, acentelerine ve müşterilerine hizmet veren dahili dijital yazılımlar ve sistemler geliştirir.',
      it: 'ASLAN sviluppa software e sistemi digitali interni al servizio delle sue aziende, marchi, team, agenti e clienti.'
    },
    accentColor: 'from-amber-400 to-amber-600',
    icon: <Cpu className="w-8 h-8 text-amber-500" />,
    specsSectionTitle: {
      ar: 'أدوات رقمية لإدارة الأعمال اليومية',
      en: 'DIGITAL TOOLS FOR DAILY OPERATIONS',
      tr: 'GÜNLÜK OPERASYONLAR İÇİN DİJİTAL ARAÇLAR',
      it: 'STRUMENTI DIGITALI PER LE OPERAZIONI QUOTIDIANE'
    },
    specs: [
      {
        label: { ar: 'الأنظمة والحلول', en: 'Systems & Solutions', tr: 'Sistemler ve Çözümler', it: 'Sistemi e Soluzioni' },
        value: { ar: 'أنظمة المحاسبة والإدارة', en: 'Accounting & Management Systems', tr: 'Muhasebe ve Yönetim Sistemleri', it: 'Sistemi Contabili e Gestionali' },
        desc: { ar: 'أدوات للمحاسبة والمصاريف والمخزون والتقارير وإدارة العمليات اليومية.', en: 'Tools for accounting, expenses, inventory, reporting, and daily operations management.', tr: 'Muhasebe, giderler, envanter, raporlama ve günlük operasyon yönetimi için araçlar.', it: 'Strumenti per contabilità, spese, inventario, report e gestione delle operazioni quotidiane.' }
      },
      {
        label: { ar: 'المنصات الرقمية', en: 'Digital Platforms', tr: 'Dijital Platformlar', it: 'Piattaforme Digitali' },
        value: { ar: 'منصات المبيعات والعملاء', en: 'Sales & Client Platforms', tr: 'Satış ve Müşteri Platformları', it: 'Piattaforme di Vendita e Clienti' },
        desc: { ar: 'مواقع ومنصات تخدم المبيعات والوكلاء والعملاء والتواصل التجاري.', en: 'Websites and platforms serving sales, agents, clients, and commercial communication.', tr: 'Satış, acenteler, müşteriler ve ticari iletişime hizmet eden web siteleri ve platformlar.', it: 'Siti web e piattaforme al servizio di vendite, agenti, clienti e comunicazione commerciale.' }
      }
    ],
    processSectionTitle: {
      ar: 'من احتياج العمل إلى نظام جاهز للاستخدام',
      en: 'FROM BUSINESS NEED TO DEPLOYED SYSTEM',
      tr: 'İŞ İHTİYACINDAN KULLANIMA HAZIR SİSTEME',
      it: 'DALLA NECESSITÀ AZIENDALE AL SISTEMA PRONTO ALL\'USO'
    },
    processSteps: [
      { step: '01', title: { ar: 'تحليل الاحتياج', en: 'Needs Analysis', tr: 'İhtiyaç Analizi', it: 'Analisi dei Bisogni' }, desc: { ar: 'دراسة متطلبات العمل وتحديد الأهداف التقنية والواجهات المطلوبة.', en: 'Analyzing operational requirements and defining technical goals and interfaces.', tr: 'İş gereksinimlerinin incelenmesi ve teknik hedeflerin belirlenmesi.', it: 'Analisi dei requisiti operativi e definizione degli obiettivi tecnici.' } },
      { step: '02', title: { ar: 'التصميم والتطوير', en: 'Design & Development', tr: 'Tasarım ve Geliştirme', it: 'Progettazione e Sviluppo' }, desc: { ar: 'بناء وتطوير الواجهات والقواعد والأنظمة بأعلى معايير الأمان والسرعة.', en: 'Building interfaces, databases, and core software engines with high security.', tr: 'Arayüzlerin, veritabanlarının ve çekirdek yazılımların geliştirilmesi.', it: 'Sviluppo di interfacce, database e motori software con elevata sicurezza.' } },
      { step: '03', title: { ar: 'الربط والتحسين', en: 'Integration & Optimization', tr: 'Entegrasyon ve İyileştirme', it: 'Integrazione e Ottimizzazione' }, desc: { ar: 'ربط النظام بالعمليات اليومية ومتابعة الأداء والتحديثات المستمرة.', en: 'Connecting systems into daily workflows, monitoring performance and updates.', tr: 'Sistemlerin günlük iş akışlarına bağlanması ve sürekli performans takibi.', it: 'Connessione dei sistemi ai flussi di lavoro quotidiani e ottimizzazione.' } }
    ],
    caseStudy: {
      title: { ar: 'منظومة رقمية متكاملة بأسلان', en: 'Integrated Digital Ecosystem', tr: 'Entegre Dijital Ekosistem', it: 'Ecosistema Digitale Integrato' },
      metric: { ar: 'عمليات مترابطة', en: 'Connected Operations', tr: 'Entegre Operasyonlar', it: 'Operazioni Connesse' },
      metricLabel: { ar: 'كفاءة رقمية شاملة', en: 'Comprehensive Digital Efficiency', tr: 'Kapsamlı Dijital Verimlilik', it: 'Efficienza Digitale Integrata' },
      desc: { ar: 'برمجياتنا وأنظمتنا مطورة خصيصاً لإدارة منظومة العمل في مجموعة أسلان وشركاتها، مما يمنح فرقنا ووكلائنا أدوات سريعة آمنة ومترابطة.', en: 'Our software suites are developed specifically to serve ASLAN Group and its operations.', tr: 'Yazılımlarımız ASLAN Grubu ve operasyonlarına hizmet etmek üzere özel olarak geliştirilmiştir.', it: 'I nostri software sono sviluppati specificamente per servire il Gruppo ASLAN.' }
    }
  }
};

export default function SectorPage({ sectorId, language, onBack, onContactClick }: SectorPageProps) {
  const isRtl = language === 'ar';
  const data = PAGES_CONTENT[sectorId];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#030303] text-white">
        <p>Sector not found.</p>
        <button onClick={onBack} className="mt-4 px-6 py-2 border border-amber-400 text-amber-400">Back</button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-[#030303] text-white pt-24 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Button with clean typography & hover effect */}
        <button
          onClick={onBack}
          className={`group flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-neutral-400 hover:text-amber-400 transition-colors duration-300 mb-12 cursor-pointer ${
            isRtl ? 'flex-row-reverse self-end' : 'flex-row self-start'
          }`}
        >
          {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span className="font-bold">{isRtl ? 'العودة للرئيسية' : 'BACK TO HOME'}</span>
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7">
            <div className={`flex items-center gap-3 mb-6 ${isRtl ? 'justify-start text-right' : 'justify-start text-left'}`}>
              <div className={`p-2.5 bg-neutral-900 border border-white/10`}>
                {data.icon}
              </div>
              <span className="text-amber-400 text-xs font-sans tracking-[0.4em] uppercase font-bold">
                {getTranslation(data.title, language)}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-white leading-tight uppercase tracking-wider mb-8">
              {getTranslation(data.subtitle, language)}
            </h1>

            <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
              {getTranslation(data.intro, language)}
            </p>

            {/* Optional Vision Section */}
            {data.vision && (
              <div className="mb-8 p-6 border border-amber-400/20 bg-amber-400/5">
                <span className="text-[10px] text-amber-400 font-sans tracking-[0.3em] uppercase block mb-2 font-bold">
                  {isRtl ? 'رؤيتنا' : 'OUR VISION'}
                </span>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {getTranslation(data.vision, language)}
                </p>
              </div>
            )}

            <button
              onClick={onContactClick}
              className="px-8 py-4 border border-amber-400/40 hover:border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 text-xs tracking-widest font-bold uppercase cursor-pointer"
            >
              {sectorId === 'companies-cosmetics'
                ? (isRtl ? 'تواصل مع فريقنا' : language === 'tr' ? 'EKİBİMİZLE İLETİŞİME GEÇİN' : language === 'it' ? 'CONTATTA IL NOSTRO TEAM' : 'CONTACT OUR TEAM')
                : (isRtl ? 'طلب شراكة وتوريد ومعلومات' : 'REQUEST PARTNERSHIP & INQUIRIES')}
            </button>
          </div>

          {/* Hero Right Media */}
          <div className="lg:col-span-5 aspect-[4/3] lg:aspect-square overflow-hidden border border-white/10 relative">
            <img
              src={data.heroImage.startsWith('/') ? data.heroImage : `/${data.heroImage}`}
              alt={getTranslation(data.title, language)}
              referrerPolicy="no-referrer"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.onerror = null;
                img.src = '/meeting-room.png';
              }}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
          </div>

        </div>

        {/* Philosophy Section */}
        {data.philosophySection && (
          <div className="mb-24 p-8 sm:p-12 border border-amber-400/20 bg-zinc-950/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full filter blur-[100px] pointer-events-none" />
            <div className="border-b border-white/10 pb-6 mb-8">
              <span className="text-xs text-amber-400 font-sans tracking-[0.3em] uppercase block mb-2 font-bold">
                {isRtl ? 'فلسفة التصنيع والتميز' : 'MANUFACTURING PHILOSOPHY'}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-light uppercase tracking-wider text-white">
                {getTranslation(data.philosophySection.title, language)}
              </h2>
            </div>
            <div className="space-y-4">
              {data.philosophySection.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {getTranslation(para, language)}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Laboratory / Manufacturing Services Section */}
        {data.servicesList && (
          <div className="mb-24">
            <div className="border-b border-white/5 pb-6 mb-12">
              <span className="text-neutral-500 text-[10px] font-sans tracking-[0.3em] uppercase font-bold block mb-2">
                {isRtl ? 'الخدمات والتصنيع' : 'SERVICES & MANUFACTURING'}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-light uppercase tracking-wider text-white">
                {isRtl ? 'خدمات التصنيع والتطوير' : 'MANUFACTURING & DEVELOPMENT SERVICES'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.servicesList.map((service, sIdx) => (
                <div 
                  key={sIdx} 
                  className="border border-white/5 bg-zinc-950/20 p-6 hover:border-amber-400/30 transition-all duration-300 flex items-start gap-4"
                >
                  <span className="text-amber-400 text-xs font-serif font-bold tracking-widest pt-0.5">
                    {sIdx < 9 ? `0${sIdx + 1}` : sIdx + 1}
                  </span>
                  <span className="text-sm text-neutral-200 font-light leading-relaxed">
                    {getTranslation(service, language)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Execution Stages Section */}
        {data.executionStages && (
          <div className="mb-24">
            <div className="border-b border-white/5 pb-6 mb-12">
              <span className="text-neutral-500 text-[10px] font-sans tracking-[0.3em] uppercase font-bold block mb-2">
                {isRtl ? 'مراحل التنفيذ والتطوير' : 'EXECUTION & DEVELOPMENT STAGES'}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-light uppercase tracking-wider text-white">
                {isRtl ? 'مراحل عمل Private Label / OEM / ODM' : 'PRIVATE LABEL / OEM / ODM WORKFLOW'}
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {data.executionStages.map((stg, stgIdx) => (
                <div 
                  key={stgIdx} 
                  className="border border-white/10 bg-zinc-950/40 p-5 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <span className="text-2xl font-serif font-light text-amber-400/40 mb-3 block">
                    {stg.step}
                  </span>
                  <h4 className="text-xs font-sans tracking-wide text-white uppercase font-bold">
                    {getTranslation(stg.title, language)}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products Scope Section */}
        {data.productsScope && (
          <div className="mb-24">
            <div className="border-b border-white/5 pb-6 mb-12">
              <span className="text-neutral-500 text-[10px] font-sans tracking-[0.3em] uppercase font-bold block mb-2">
                {isRtl ? 'نطاق المنتجات' : 'PRODUCTS SCOPE'}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-light uppercase tracking-wider text-white">
                {isRtl ? 'المنتجات التي نقوم بتطويرها وتصنيعها' : 'PRODUCTS WE DEVELOP & MANUFACTURE'}
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {data.productsScope.map((prod, pIdx) => (
                <div 
                  key={pIdx} 
                  className="border border-white/5 bg-zinc-950/30 p-4 hover:border-amber-400/30 transition-all duration-300 flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-neutral-200 font-light">
                    {getTranslation(prod, language)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Images Section */}
        {data.galleryImages && (
          <div className="mb-24">
            <div className="border-b border-white/5 pb-6 mb-12">
              <span className="text-neutral-500 text-[10px] font-sans tracking-[0.3em] uppercase font-bold block mb-2">
                {isRtl ? 'معرض الصور والمنشآت' : 'FACILITIES & GALLERY'}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-light uppercase tracking-wider text-white">
                {isRtl ? 'معرض التميز والتصنيع' : 'MANUFACTURING & FACILITY GALLERY'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.galleryImages.map((img, gIdx) => (
                <div key={gIdx} className="group relative aspect-[4/3] overflow-hidden border border-white/10 bg-zinc-900">
                  <img
                    src={img.url.startsWith('/') ? img.url : `/${img.url}`}
                    alt={getTranslation(img.caption, language)}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      const currentSrc = el.src;
                      if (currentSrc.endsWith('.png')) {
                        el.src = currentSrc.replace(/\.png$/, '.jpg');
                      } else {
                        el.onerror = null;
                        el.src = '/ai-software.png';
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300 flex items-end p-5">
                    <p className="text-xs text-amber-200 font-light leading-snug">
                      {getTranslation(img.caption, language)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Why ASLAN? Section */}
        {data.whyList && (
          <div className="mb-24">
            <div className="border-b border-white/5 pb-6 mb-12">
              <span className="text-neutral-500 text-[10px] font-sans tracking-[0.3em] uppercase font-bold block mb-2">
                {isRtl ? 'الريادة والتميز' : 'WHY CHOOSE US'}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-light uppercase tracking-wider text-white">
                {isRtl ? 'لماذا أسلان؟' : 'WHY ASLAN?'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.whyList.map((item, wIdx) => (
                <div 
                  key={wIdx} 
                  className="border border-white/5 bg-zinc-950/20 p-6 hover:border-amber-400/30 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                  <span className="text-sm text-neutral-200 font-light leading-relaxed">
                    {getTranslation(item, language)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Conclusion Section */}
        {data.conclusion && (
          <div className="mb-24 p-8 sm:p-12 border border-amber-400/20 bg-zinc-950/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full filter blur-[100px] pointer-events-none" />
            <span className="text-xs text-amber-400 font-sans tracking-[0.3em] uppercase block mb-4 font-bold">
              {isRtl ? 'الخاتمة' : 'CONCLUSION'}
            </span>
            <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed max-w-4xl">
              {getTranslation(data.conclusion, language)}
            </p>
          </div>
        )}

        {/* Dynamic Key Technical Metrics Specifications */}
        <div className="mb-24">
          <div className="border-b border-white/5 pb-6 mb-12">
            <span className="text-neutral-500 text-[10px] font-sans tracking-[0.3em] uppercase font-bold block mb-2">
              {isRtl ? 'المواصفات التقنية والمقاييس' : 'TECHNICAL SPECIFICATIONS & METRICS'}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-light uppercase tracking-wider text-white">
              {data.specsSectionTitle ? getTranslation(data.specsSectionTitle, language) : (isRtl ? 'القدرات التشغيلية والريادة' : 'OPERATIONAL CAPABILITIES & LEADER STATUS')}
            </h2>
          </div>

          <div className={`grid grid-cols-1 ${data.specs.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-8`}>
            {data.specs.map((spec, specIdx) => (
              <div 
                key={specIdx} 
                className="border border-white/5 bg-zinc-950/20 p-8 hover:border-amber-400/20 transition-all duration-300"
              >
                <span className="text-[10px] text-amber-400/60 font-sans tracking-widest uppercase block mb-1">
                  {getTranslation(spec.label, language)}
                </span>
                <span className="text-xl sm:text-2xl font-serif font-light text-white block mb-3">
                  {getTranslation(spec.value, language)}
                </span>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {getTranslation(spec.desc, language)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industrial Workflow & Scientific Stages */}
        <div className="mb-24">
          <div className="border-b border-white/5 pb-6 mb-12">
            <span className="text-neutral-500 text-[10px] font-sans tracking-[0.3em] uppercase font-bold block mb-2">
              {isRtl ? 'مراحل ومسار العمل المتبع' : 'INDUSTRIAL WORKFLOW & SCIENTIFIC PATHWAY'}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-light uppercase tracking-wider text-white">
              {data.processSectionTitle ? getTranslation(data.processSectionTitle, language) : (isRtl ? 'من المفهوم المخبري حتى التصدير' : 'FROM CLINICAL CONCEPT TO PACKED TERMINALS')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {data.processSteps.map((step, stepIdx) => (
              <div key={stepIdx} className="relative group flex flex-col">
                <span className="text-5xl font-serif font-extralight text-amber-400/20 mb-4 group-hover:text-amber-400/40 transition-colors duration-300 block">
                  {step.step}
                </span>
                <h3 className="text-base font-sans tracking-widest text-neutral-200 uppercase font-bold mb-3">
                  {getTranslation(step.title, language)}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {getTranslation(step.desc, language)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Immersive Case Study Feature / Achievement Panel */}
        <div className="relative border border-white/5 bg-zinc-950/40 p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full filter blur-[100px] pointer-events-none" />
          
          <div className={`text-center ${isRtl ? 'md:text-right' : 'md:text-left'} flex-shrink-0`}>
            <span className="text-[10px] text-neutral-500 font-sans tracking-widest uppercase block mb-1">
              {getTranslation(data.caseStudy.metricLabel, language)}
            </span>
            <span className="text-3xl sm:text-5xl font-serif font-extralight text-amber-400 block">
              {typeof data.caseStudy.metric === 'string' ? data.caseStudy.metric : getTranslation(data.caseStudy.metric, language)}
            </span>
          </div>

          <div className="w-px h-16 bg-white/10 hidden md:block" />

          <div className="flex-grow">
            <span className="text-xs text-amber-400/60 font-sans tracking-[0.3em] uppercase block mb-1.5 font-bold">
              {isRtl ? 'قصة نجاح وإثبات كفاءة' : 'SUCCESS HIGHLIGHT'}
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-light text-white uppercase tracking-wider mb-3">
              {getTranslation(data.caseStudy.title, language)}
            </h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              {getTranslation(data.caseStudy.desc, language)}
            </p>
          </div>
        </div>

        {/* Final CTA Banner */}
        {data.finalCta && (
          <div className="mt-16 border border-amber-400/40 bg-gradient-to-r from-amber-950/40 via-zinc-950 to-amber-950/40 p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-amber-400/5 pointer-events-none" />
            <span className="text-xs text-amber-400 font-sans tracking-[0.3em] uppercase block mb-3 font-bold">
              {isRtl ? 'ابدأ مشروعاتك معنا' : 'START YOUR PROJECT'}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-light text-white uppercase tracking-wider mb-4 max-w-2xl mx-auto">
              {getTranslation(data.finalCta.title, language)}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto mb-8">
              {getTranslation(data.finalCta.desc, language)}
            </p>
            <button
              onClick={onContactClick}
              className="px-8 py-4 bg-amber-400 text-black hover:bg-amber-300 font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer"
            >
              {isRtl ? 'تواصل مع فريقنا الآن' : 'CONTACT OUR TEAM NOW'}
            </button>
          </div>
        )}

      </div>
    </motion.div>
  );
}

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FlaskConical, 
  Coffee, 
  Layers, 
  Globe, 
  Award, 
  Cpu, 
  ArrowRight, 
  ArrowLeft, 
  Eye, 
  Sparkles,
  Rocket,
  Boxes,
  Star,
  Store,
  Globe2,
  Crown,
  Users,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { Language, getTranslation } from '../types';
import BrandJourneyModal from './BrandJourneyModal';
import BrandProjectModal from './BrandProjectModal';
import TradeInquiryModal from './TradeInquiryModal';
import aslan88Img from '../assets/images/aslan-88.png';
import whoWeWorkImg from '../assets/images/who-we-work.png';
import aiSoftwareImg from '../assets/images/ai-software.png';
import earthImg from '../assets/images/earth.png';

interface SectorsSectionsProps {
  language: Language;
  onContactClick: () => void;
  onSectorSelect: (id: string) => void;
}

interface SectorSection {
  id: string;
  icon: React.ReactNode;
  image: string;
  title: { ar: string; en: string; tr: string; it: string };
  subtitle: { ar: string; en: string; tr: string; it: string };
  desc: { ar: string; en: string; tr: string; it: string };
  features: {
    title: { ar: string; en: string; tr: string; it: string };
    val: { ar: string; en: string; tr: string; it: string };
  }[];
}

interface PartnerCategory {
  id: string;
  number: string;
  icon: React.ReactNode;
  title: { ar: string; en: string; tr: string; it: string };
  desc: { ar: string; en: string; tr: string; it: string };
}

const PARTNERS_CONTENT = {
  subtitle: {
    ar: 'شركاء النجاح',
    en: 'PARTNERS WE EMPOWER',
    tr: 'BAŞARI ORTAKLARIMIZ',
    it: 'PARTNER DI SUCCESSO'
  },
  title: {
    ar: 'لمن نقدم خدماتنا؟',
    en: 'WHO WE WORK WITH',
    tr: 'KİMLERLE ÇALIŞIYORUZ?',
    it: 'CON CHI LAVORIAMO?'
  },
  desc: {
    ar: 'نقدم حلول تطوير وتصنيع مستحضرات التجميل للعلامات التجارية والشركات والموزعين والمؤثرين الذين يسعون إلى إطلاق منتجات فاخرة ومخصصة وفق هويتهم وااحتياجات أسواقهم المستهدفة.',
    en: 'We provide cosmetic development and manufacturing solutions for emerging brands, distributors, retailers, influencers, and established beauty businesses seeking premium products tailored to their identity and target markets.',
    tr: 'Kendi kimliklerine ve hedef pazarlarına özel premium ürünler arayan yeni kurulan markalar, distribütörler, perakendeciler, influencer\'lar ve yerleşik güzellik işletmeleri için kozmetik geliştirme ve üretim çözümleri sunuyoruz.',
    it: 'Forniamo soluzioni di sviluppo e produzione cosmetica per marchi emergenti, distributori, rivenditori, influencer e aziende affermate nel settore della bellezza che cercano prodotti premium personalizzati in base alla loro identità e ai mercati di riferimento.'
  }
};

const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    id: 'emerging-brands',
    number: '01',
    icon: <Rocket className="w-4 h-4 text-amber-400" />,
    title: {
      ar: 'العلامات التجارية الجديدة',
      en: 'EMERGING BEAUTY BRANDS',
      tr: 'YENİ GÜZELLİK MARKALARI',
      it: 'MARCHI DI BELLEZZA EMERGENTI'
    },
    desc: {
      ar: 'نساعد العلامات التجارية الجديدة على تحويل أفكارها إلى منتجات تجميل جاهزة للسوق، بدءًا من التطوير وحتى الإطلاق.',
      en: 'From the first idea to market-ready cosmetic products, we support new beauty brands throughout every stage of development and launch.',
      tr: 'İlk fikirden pazara hazır kozmetik ürünlerine kadar, yeni güzellik markalarını geliştirme ve lansmanın her aşamasında destekliyoruz.',
      it: 'Dalla prima idea ai prodotti cosmetici pronti per il mercato, supportiamo i nuovi marchi di bellezza in ogni fase di sviluppo e lancio.'
    }
  },
  {
    id: 'distributors',
    number: '02',
    icon: <Boxes className="w-4 h-4 text-amber-400" />,
    title: {
      ar: 'شركات التوزيع',
      en: 'DISTRIBUTORS',
      tr: 'DİSTRİBÜTÖRLER',
      it: 'DISTRIBUTORI'
    },
    desc: {
      ar: 'حلول تصنيع موثوقة وقابلة للتخصيص تساعد شركات التوزيع على توسيع محفظة منتجاتها ودخول أسواق جديدة.',
      en: 'Reliable and customizable cosmetic manufacturing solutions designed to help distributors expand their portfolios and enter new markets.',
      tr: 'Distribütörlerin portföylerini genişletmelerine ve yeni pazarlara girmelerine yardımcı olmak için tasarlanmış güvenilir ve özelleştirilebilir kozmetik üretim çözümleri.',
      it: 'Soluzioni di produzione cosmetica affidabili e personalizzabili progettate per aiutare i distributori ad ampliare il proprio portafoglio e accedere a nuovi mercati.'
    }
  },
  {
    id: 'influencers',
    number: '03',
    icon: <Star className="w-4 h-4 text-amber-400" />,
    title: {
      ar: 'المشاهير والمؤثرون',
      en: 'CELEBRITIES & INFLUENCERS',
      tr: 'ÜNLÜLER VE INFLUENCER\'LAR',
      it: 'CELEBRITÀ E INFLUENCER'
    },
    desc: {
      ar: 'نطوّر خطوط تجميل حصرية تعكس هوية كل شريك، مع الحفاظ الكامل على سرية المشروع في جميع مراحله.',
      en: 'Exclusive cosmetic lines developed around the personality and identity of each partner, with strict confidentiality throughout the project.',
      tr: 'Proje boyunca tam gizlilikle, her ortağın kişiliği ve kimliği etrafında geliştirilen özel kozmetik serileri.',
      it: 'Linee cosmetiche esclusive sviluppate attorno alla personalità e all\'identità di ciascun partner, con la massima riservatezza durante tutto il progetto.'
    }
  },
  {
    id: 'retail-chains',
    number: '04',
    icon: <Store className="w-4 h-4 text-amber-400" />,
    title: {
      ar: 'سلاسل المتاجر',
      en: 'RETAIL CHAINS',
      tr: 'PERAKENDE ZİNCİRLERİ',
      it: 'CATENE DI RETAIL'
    },
    desc: {
      ar: 'نقدم حلول علامة تجارية خاصة متكاملة لسلاسل المتاجر الراغبة في إطلاق منتجات تجميل تحمل هويتها الخاصة.',
      en: 'Integrated Private Label solutions for retailers seeking high-quality cosmetic products under their own brand identity.',
      tr: 'Kendi marka kimlikleri altında yüksek kaliteli kozmetik ürünleri sunmak isteyen perakendeciler için entegre Özel Marka çözümleri.',
      it: 'Soluzioni integrate di Marchio Privato per rivenditori che desiderano prodotti cosmetici di alta qualità con la propria identità aziendale.'
    }
  },
  {
    id: 'traders-importers',
    number: '05',
    icon: <Globe2 className="w-4 h-4 text-amber-400" />,
    title: {
      ar: 'تجار ومستوردو مستحضرات التجميل',
      en: 'COSMETIC TRADERS & IMPORTERS',
      tr: 'KOZMETİK TÜCCARLARI VE İTHALATÇILARI',
      it: 'COMMERCIANTI E IMPORTATORI DI COSMETICI'
    },
    desc: {
      ar: 'منتجات تجميل جاهزة للسوق وحلول تصنيع مخصصة للتوزيع المحلي والتوسع في الأسواق العالمية.',
      en: 'Market-ready cosmetic products and customized manufacturing solutions for local distribution and international expansion.',
      tr: 'Yerel dağıtım ve uluslararası genişleme için pazara hazır kozmetik ürünleri ve özel üretim çözümleri.',
      it: 'Prodotti cosmetici pronti per il mercato e soluzioni di produzione personalizzate per la distribuzione locale e l\'espansione internazionale.'
    }
  },
  {
    id: 'established-brands',
    number: '06',
    icon: <Crown className="w-4 h-4 text-amber-400" />,
    title: {
      ar: 'العلامات التجارية القائمة',
      en: 'ESTABLISHED BEAUTY BRANDS',
      tr: 'KÖKLÜ GÜZELLİK MARKALARI',
      it: 'MARCHI DI BELLEZZA AFFERMATI'
    },
    desc: {
      ar: 'نطوّر منتجات وخطوطًا جديدة للعلامات التجارية القائمة التي تسعى إلى الابتكار والتوسع في فئات جديدة.',
      en: 'Custom product development and portfolio expansion solutions for established brands seeking innovation and new product categories.',
      tr: 'Yenilik ve yeni ürün kategorileri arayan köklü markalar için özel ürün تطوير ve portföy genişletme çözümleri.',
      it: 'Sviluppo di prodotti personalizzati e soluzioni di espansione del portafoglio per marchi affermati in cerca di innovazione e nuove categorie.'
    }
  }
];

const SECTOR_SECTIONS: SectorSection[] = [
  {
    id: 'companies-cosmetics',
    icon: <FlaskConical className="w-5 h-5 text-amber-400" />,
    image: aslan88Img,
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
    desc: {
      ar: 'يمثل مختبر أسلان للبحوث والتطوير حجر الزاوية لابتكاراتنا في مجال مستحضرات التجميل والعناية بالبشرة. يتميز مختبرنا بتجهيزه بأحدث التقنيات والمعدات العلمية المتطورة لتطوير تركيبات آمنة وفعالة وعالية الجودة تتوافق مع المعايير الدولية. يقوم خبراؤنا بتقديم فحوصات صارمة للجودة والاستقرار والسلامة لضمان أداء استثنائي وموثوقية لكل منتج.',
      en: 'The ASLAN Research & Development Laboratory is the foundation of our innovation in cosmetics and skincare. Equipped with advanced technologies and modern scientific equipment, our laboratory develops safe, effective, and high-quality formulations that meet international standards. Our experienced specialists perform rigorous quality, stability, and safety testing to ensure every product delivers outstanding performance and reliability.',
      tr: 'ASLAN Araştırma ve Geliştirme Laboratuvarı, kozmetik ve cilt bakımındaki yeniliklerimizin temelidir. Gelişmiş teknolojiler ve modern bilimsel ekipmanlarla donatılmış laboratuvarımız, uluslararası standartları karşılayan güvenli, etkili ve yüksek kaliteli formülasyonlar geliştirir. Deneyimli uzmanlarımız, her ürünün olağanüstü performans sunmasını sağlamak için titiz kalite, stabilite ve güvenlik testleri gerçekleştirir.',
      it: 'Il Laboratorio di Ricerca e Sviluppo ASLAN è la fondazione della nostra innovazione nei cosmetici e nella cura della pelle. Dotato di tecnologie avanzate e attrezzature scientifiche moderne, il nostro laboratorio sviluppa formulazioni sicure, efficaci e di alta qualità che soddisfano gli standard internazionali.'
    },
    features: [
      {
        title: { ar: 'ضمان الجودة', en: 'QUALITY ASSURANCE', tr: 'KALİTE GÜVENCESİ', it: 'GARANZIA DI QUALITÀ' },
        val: { 
          ar: 'فحص المواد الخام • التحليل الميكروبيولوجي • اختبار الاستقرارية • تقييم سلامة المنتجات', 
          en: 'Raw Material Testing • Microbiological Analysis • Stability Testing • Product Safety Evaluation', 
          tr: 'Hammadde Testi • Mikrobiyolojik Analiz • Stabilite Testi • Ürün Güvenliği Değerlendirmesi', 
          it: 'Test delle Materie Prime • Analisi Microbiologica • Test di Stabilità • Valutazione della Sicurezza del Prodotto' 
        }
      },
      {
        title: { ar: 'البحوث والتطوير', en: 'RESEARCH & DEVELOPMENT', tr: 'ARAŞTIRMA VE GELİŞTİRME', it: 'RICERCA E SVILUPPO' },
        val: { 
          ar: 'تطوير التركيبات المبتكرة • صياغة المنتجات المخصصة • إنتاج الدفعات التجريبية • التحسين المستمر للمنتجات', 
          en: 'Innovative Formula Development • Custom Product Formulation • Pilot Batch Production • Continuous Product Improvement', 
          tr: 'Yenilikçi Formül Geliştirme • Özel Ürün Formülasyonu • Pilot Parti Üretimi • Sürekli Ürün İyileştirme', 
          it: 'Sviluppo di Formule Innovative • Formulazione di Prodotti Personalizzati • Produzione di Lotti Pilota • Miglioramento Continuo del Prodotto' 
        }
      }
    ]
  },
  {
    id: 'food',
    icon: <Sparkles className="w-5 h-5 text-amber-400" />,
    image: whoWeWorkImg,
    title: {
      ar: 'مراحل تطوير العلامة التجارية',
      en: 'BRAND DEVELOPMENT PROCESS',
      tr: 'MARKA GELİŞTİRME SÜRECİ',
      it: 'PROCESSO DI SVILUPPO DEL MARCHIO'
    },
    subtitle: {
      ar: 'رحلة إنشاء علامتك التجارية',
      en: 'YOUR BRAND DEVELOPMENT JOURNEY',
      tr: 'MARKANIZIN OLUŞTURULMA YOLCULUĞU',
      it: 'IL PERCORSO DI CREAZIONE DEL TUO MARCHIO'
    },
    desc: {
      ar: 'نحول مفاهيم مستحضرات التجميل إلى منتجات تجميل كاملة وجاهزة للسوق. من تطوير التركيبات المخصصة وتصميم التغليف إلى التصنيع والتعبئة وضبط الجودة والتسليم النهائي، تقدم أسلان الدولية حلولاً متكاملة للتصنيع لحساب الغير (Private Label & OEM/ODM) لعلامات التجميل حول العالم.',
      en: 'We transform cosmetic concepts into complete, market-ready beauty products. From custom formulation and packaging development to manufacturing, filling, quality control, and final delivery, ASLAN INTERNATIONAL provides integrated Private Label and OEM/ODM solutions for beauty brands worldwide.',
      tr: 'Kozmetik konseptlerini pazara hazır eksiksiz güzellik ürünlerine dönüştürüyoruz. Özel formülasyondan ambalaj geliştirmeye, üretimden dolum, kalite kontrol ve nihai teslimata kadar ASLAN INTERNATIONAL, dünya çapındaki güzellik markalarına entegre Özel Marka ve OEM/ODM çözümleri sunar.',
      it: 'Trasformiamo i concetti cosmetici in prodotti di bellezza completi e pronti per il mercato. Dalla formulazione personalizzata allo sviluppo del packaging, produzione, riempimento, controllo qualità e consegna finale, ASLAN INTERNATIONAL offre soluzioni integrate per Marchi Privati e OEM/ODM.'
    },
    features: [
      {
        title: { ar: 'تطوير المنتجات المخصصة', en: 'CUSTOM PRODUCT DEVELOPMENT', tr: 'ÖZEL ÜRÜN GELİŞTİRME', it: 'SVILUPPO PRODOTTI PERSONALIZZATI' },
        val: { ar: 'تركيبات وألوان وقوام وتغليف ومفاهيم منتجات مخصصة طُوّرت خصيصاً لكل علامة تجارية.', en: 'Tailored formulations, colors, textures, packaging, and product concepts developed specifically for each brand.', tr: 'Her marka için özel olarak geliştirilmiş formülasyonlar, renkler, dokular, ambalajlar ve ürün konseptleri.', it: 'Formulazioni, colori, texture, packaging e concetti di prodotto sviluppati su misura per ciascun marchio.' }
      },
      {
        title: { ar: 'تصنيع متكامل شامل', en: 'TURNKEY MANUFACTURING', tr: 'TURNKEY MANUFACTURING', it: 'PRODUZIONE CHIAVI IN MANO' },
        val: { ar: 'من التطوير المختبري والإنتاج إلى التعبئة والتغليف ومراقبة الجودة والتسليم العالمي.', en: 'From laboratory development and production to filling, packaging, quality control, and global delivery.', tr: 'Laboratuvar geliştirme ve üretimden dolum, ambalaj, kalite kontrol ve küresel teslimata kadar.', it: 'Dal laboratorio e produzione al riempimento, confezionamento, controllo qualità e consegna globale.' }
      }
    ]
  },
  {
    id: 'private-label',
    icon: <Layers className="w-5 h-5 text-amber-400" />,
    image: aslan88Img,
    title: {
      ar: 'العلامة التجارية الخاصة',
      en: 'PRIVATE LABEL',
      tr: 'ÖZEL MARKA',
      it: 'MARCHIO PRIVATO'
    },
    subtitle: {
      ar: 'تصنيع تعاقدي متكامل وحلول OEM/ODM مخصصة',
      en: 'End-to-End Contract Manufacturing for Prestige Brands',
      tr: 'Prestijli Markalar İçin Uçtan Uca Sözleşmeli Üretim',
      it: 'Produzione Conto Terzi End-to-End per Marchi di Prestigio'
    },
    desc: {
      ar: 'ندعم رواد الأعمال والعلامات التجارية العالمية عبر خدمات التصنيع المتكاملة. بدءاً من تطوير التركيبة الكيميائية الحصرية، مروراً بتصميم وتصنيع القوالب والعبوات المبتكرة بمصانعنا، وحتى تعبئة وشحن المنتج النهائي باسم هويتكم التجارية.',
      en: 'We empower global beauty house brands and distributors through comprehensive contract manufacturing. We handle everything from custom raw material compounding and precision mold injection to brand design compliance, shipping beautiful ready-to-sell products.',
      tr: 'Kapsamlı fason üretim hizmetlerimizle küresel güzellik markalarını ve distribütörlerini destekliyoruz. Özel hammadde bileşiminden hassas kalıp enjeksiyonuna ve marka tasarımı uyumluluğuna kadar her şeyi yönetiyor, satışa hazır ürünler teslim ediyoruz.',
      it: 'Sosteniamo i marchi internazionali e i distributori con un servizio completo di produzione conto terzi. Gestiamo ogni fase: dalla formulazione chimica personalizzata allo stampaggio a iniezione fino al confezionamento pronto per il mercato.'
    },
    features: [
      {
        title: { ar: 'التخصيص الكامل', en: 'Bespoke Customization', tr: 'Özel Özelleştirme', it: 'Personalizzazione Totale' },
        val: { ar: 'تطوير تركيبات وقوالب حصرية لعلامتكم', en: 'Tailored formulas and custom structural mold design', tr: 'Özel formüller ve tescilli yapısal kalıp tasarımı', it: 'Formule su misura e design di stampi strutturali esclusivi' }
      },
      {
        title: { ar: 'الحل الشامل المتكامل', en: 'Turnkey Solutions', tr: 'Anahtar Teslim Çözümler', it: 'Soluzioni Chiavi in Mano' },
        val: { ar: 'من الفكرة والمختبر حتى التسليم النهائي لمتجركم', en: 'From laboratory concept to retail-ready global shipping', tr: 'Laboratuvar konseptinden satışa hazır teslimata', it: 'Dal concetto di laboratorio alla spedizione globale pronta per lo scaffale' }
      }
    ]
  },
  {
    id: 'global-trade',
    icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    image: earthImg,
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
    desc: {
      ar: 'نلتزم بحماية تركيبات العملاء، ومفاهيم العبوات، وتفاصيل المشاريع، وهوية الشركاء بسرية كاملة. ولا يتم الكشف عن أي مشروع أو منتج أو أعمال تطوير أو نشرها أو مشاركتها إلا بعد موافقة رسمية من العميل.',
      en: 'We are committed to protecting client formulations, packaging concepts, project details, and partner identity with complete confidentiality. No project, product, or development work is disclosed, published, or shared without formal approval from the client.',
      tr: 'Müşteri formülasyonlarını, ambalaj konseptlerini, proje detaylarını ve ortak kimliğini tam bir gizlilikle korumayı taahhüt ediyoruz. Müşteriden resmi onay alınmadan hiçbir proje, ürün veya geliştirme çalışması açıklanmaz, yayınlanmaz veya paylaşılmaz.',
      it: 'Ci impegniamo a proteggere le formulazioni dei clienti, i concetti di packaging, i dettagli del progetto e l\'identità dei partner con la massima riservatezza. Nessun progetto, prodotto o lavoro di sviluppo viene divulgato, pubblicato o condiviso senza formale approvazione del cliente.'
    },
    features: [
      {
        title: { ar: 'سرية التركيبات', en: 'FORMULA CONFIDENTIALITY', tr: 'FORMÜL GİZLİLİĞİ', it: 'RISERVATEZZA DELLE FORMULE' },
        val: { ar: 'يتم التعامل مع التركيبات ومفاهيم المنتجات بسرية داخلية صارمة.', en: 'Client formulas and product concepts are handled with strict internal confidentiality.', tr: 'Müşteri formülleri ve ürün konseptleri katı dahili gizlilik altında işlenir.', it: 'Le formule e i concetti di prodotto dei clienti sono gestiti con rigorosa riservatezza interna.' }
      },
      {
        title: { ar: 'حماية هوية العلامة', en: 'BRAND IDENTITY PROTECTION', tr: 'MARKA KİMLİĞİ KORUMASI', it: 'PROTEZIONE DELL\'IDENTITÀ DEL MARCHIO' },
        val: { ar: 'تتم حماية أسماء العلامات التجارية وهويتها البصرية وخطط إطلاقها طوال مراحل العمل.', en: 'Brand names, visual identity, and launch plans are protected throughout the entire process.', tr: 'Marka isimleri, görsel kimlik ve lansman planları tüm süreç boyunca korunur.', it: 'Nomi dei marchi, identità visiva e piani di lancio sono protetti durante tutto il processo.' }
      }
    ]
  },
  {
    id: 'brands',
    icon: <Globe2 className="w-5 h-5 text-amber-400" />,
    image: whoWeWorkImg,
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
    desc: {
      ar: 'تقدم ASLAN INTERNATIONAL حلولًا مرنة في التجارة العالمية، تشمل توريد المنتجات، والتنسيق مع الموردين، والشراء، وتجميع الطلبات، وتجهيز عمليات التصدير، ودعم الشحن الدولي. ونربط الموردين الموثوقين بشركاء الأعمال الذين يبحثون عن عمليات تجارية منظمة واحترافية.',
      en: 'ASLAN INTERNATIONAL provides flexible global trade solutions through product sourcing, supplier coordination, purchasing, order consolidation, export preparation, and international shipment support. We connect reliable suppliers with business partners seeking efficient and professionally managed trade operations.',
      tr: 'ASLAN INTERNATIONAL, ürün tedariği, tedarikçi koordinasyonu, satın alma, sipariş konsolidasyonu, ihracat hazırlığı ve uluslararası sevkiyat desteği aracılığıyla esnek küresel ticaret çözümleri sunar. Güvenilir tedarikçileri, verimli ve profesyonelce yönetilen ticaret operasyonları arayan iş ortaklarıyla buluşturuyoruz.',
      it: 'ASLAN INTERNATIONAL offre soluzioni flessibili per il commercio globale attraverso l\'approvvigionamento dei prodotti, il coordinamento dei fornitori, gli acquisti, il consolidamento degli ordini, la preparazione all\'esportazione e il supporto alle spedizioni internazionali. Colleghiamo fornitori affidabili con partner commerciali in cerca di operazioni gestite in modo efficiente e professionale.'
    },
    features: [
      {
        title: { ar: 'التوريد العالمي', en: 'GLOBAL SOURCING', tr: 'KÜRESEL TEDARİK', it: 'APPROVVIGIONAMENTO GLOBALE' },
        val: { ar: 'توريد المنتجات المناسبة والتنسيق مع المصانع والموردين الموثوقين وفق متطلبات العميل.', en: 'Sourcing suitable products and coordinating with reliable manufacturers and suppliers according to client requirements.', tr: 'Müşteri gereksinimlerine göre uygun ürünlerin tedarik edilmesi ve güvenilir üreticiler ile tedarikçilerle koordine edilmesi.', it: 'Approvvigionamento di prodotti idonei e coordinamento con produttori e fornitori affidabili in base acquisition del cliente.' }
      },
      {
        title: { ar: 'دعم التصدير والشحن', en: 'EXPORT & SHIPMENT SUPPORT', tr: 'İHRACAT VE SEVKİYAT DESTEĞİ', it: 'SUPPORTO ALL\'ESPORTAZIONE E SPEDIZIONE' },
        val: { ar: 'تجهيز الطلبات وتجميع الشحنات وتنسيق مستندات التصدير ودعم عمليات التسليم الدولي.', en: 'Preparing orders, consolidating shipments, coordinating export documents, and supporting international delivery.', tr: 'Siparişlerin hazırlanması, sevkiyatların birleştirilmesi, ihracat belgelerinin koordine edilmesi ve uluslararası teslimatın desteklenmesi.', it: 'Preparazione degli ordini, consolidamento delle spedizioni, coordinamento dei documenti di esportazione e supporto alla consegna internazionale.' }
      }
    ]
  },
  {
    id: 'software',
    icon: <Cpu className="w-5 h-5 text-amber-400" />,
    image: aiSoftwareImg,
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
    desc: {
      ar: 'تطوّر ASLAN برامج وأنظمة رقمية داخلية تخدم شركاتها وعلاماتها وفرقها ووكلاءها وعملاءها، وتشمل المحاسبة والمصاريف والمخزون والمبيعات والمواقع والمنصات وأدوات الذكاء الاصطناعي. هذه الأنظمة مخصصة لأعمالنا ولا نقدم خدمات برمجة خارجية.',
      en: 'ASLAN develops internal digital software and systems serving its companies, brands, teams, agents, and clients. This includes accounting, expenses, inventory, sales, websites, platforms, and AI tools. These systems are dedicated to our business and we do not offer external programming services.',
      tr: 'ASLAN, şirketlerine, markalarına, ekiplerine, acentelerine ve müşterilerine hizmet veren dahili dijital yazılımlar ve sistemler geliştirir.',
      it: 'ASLAN sviluppa software e sistemi digitali interni al servizio delle sue aziende, marchi, team, agenti e clienti.'
    },
    features: [
      {
        title: { ar: 'أنظمة المحاسبة والإدارة', en: 'Accounting & Management Systems', tr: 'Muhasebe ve Yönetim Sistemleri', it: 'Sistemi Contabili e Gestionali' },
        val: { ar: 'أدوات للمحاسبة والمصاريف والمخزون والتقارير وإدارة العمليات اليومية.', en: 'Tools for accounting, expenses, inventory, reporting, and daily operations management.', tr: 'Muhasebe, giderler, envanter, raporlama ve günlük operasyon yönetimi için araçlar.', it: 'Strumenti per contabilità, spese, inventario, report e gestione delle operazioni quotidiane.' }
      },
      {
        title: { ar: 'منصات المبيعات والعملاء', en: 'Sales & Client Platforms', tr: 'Satış ve Müşteri Platformları', it: 'Piattaforme di Vendita e Clienti' },
        val: { ar: 'مواقع ومنصات تخدم المبيعات والوكلاء والعملاء والتواصل التجاري.', en: 'Websites and platforms serving sales, agents, clients, and commercial communication.', tr: 'Satış, acenteler, müşteriler ve ticari iletişime hizmet eden web siteleri ve platformlar.', it: 'Siti web e piattaforme al servizio di vendite, agenti, clienti e comunicazione commerciale.' }
      }
    ]
  }
];

export default function SectorsSections({ language, onContactClick, onSectorSelect }: SectorsSectionsProps) {
  const isRtl = language === 'ar';
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isJourneyModalOpen, setIsJourneyModalOpen] = useState(false);
  const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#030303]">
      <BrandProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        language={language}
      />

      <BrandJourneyModal
        isOpen={isJourneyModalOpen}
        onClose={() => setIsJourneyModalOpen(false)}
        language={language}
        onOpenProjectModal={() => setIsProjectModalOpen(true)}
      />

      <TradeInquiryModal
        isOpen={isTradeModalOpen}
        onClose={() => setIsTradeModalOpen(false)}
        language={language}
      />

      {SECTOR_SECTIONS.map((sector, index) => {
        const isEven = index % 2 === 0;
        const isRoundedCornerSection = sector.id === 'companies-cosmetics' || sector.id === 'food';

        if (sector.id === 'private-label') {
          return (
            <section
              key={sector.id}
              id={sector.id}
              className="relative w-full py-24 sm:py-32 overflow-hidden border-b border-white/5 bg-[#030303]"
            >
              {/* Visual background atmospheric lights */}
              <div className="absolute top-1/2 -translate-y-1/2 left-10 w-80 h-80 bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none" />

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isRtl ? 'dir-rtl' : 'dir-ltr'
                }`}>
                  
                  {/* Left Column: Image (5 cols) */}
                  <motion.div
                    initial={{ opacity: 0, x: isRtl ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-5 relative group aspect-[4/5] overflow-hidden border border-white/10 rounded-[20px] cursor-pointer"
                    onClick={() => onSectorSelect('private-label')}
                  >
                    <img
                      src={whoWeWorkImg}
                      alt={getTranslation(PARTNERS_CONTENT.title, language)}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        if (img.src.includes('who-we-work.png')) {
                          img.src = '/who-we-work.jpg';
                        } else if (img.src.includes('who-we-work.jpg')) {
                          img.src = '/whowework.jpg';
                        } else {
                          img.onerror = null;
                          img.src = '/ai-software.png';
                        }
                      }}
                      className="w-full h-full object-cover opacity-85 transition-transform duration-[1.2s] ease-out group-hover:scale-105 group-hover:opacity-100 rounded-[20px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                    
                    {/* Overlay Badge */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/85 backdrop-blur-md border border-amber-400/30 rounded-[12px]">
                      <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
                        <Users className="w-4 h-4" />
                        <span>{getTranslation(PARTNERS_CONTENT.subtitle, language)}</span>
                      </div>
                      <p className="text-xs text-neutral-300 font-light line-clamp-2">
                        {getTranslation(PARTNERS_CONTENT.desc, language)}
                      </p>
                    </div>
                  </motion.div>

                  {/* Right Column: Title, Intro & 6 Cards Grid (7 cols) */}
                  <motion.div
                    initial={{ opacity: 0, x: isRtl ? 40 : -40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-7 flex flex-col justify-center ${
                      isRtl ? 'text-right' : 'text-left'
                    }`}
                  >
                    {/* Small Gold Subtitle */}
                    <div className={`flex items-center gap-3 mb-4 ${isRtl ? 'justify-start' : 'justify-start'}`}>
                      <div className="p-2 border border-amber-400/20 bg-amber-400/5 rounded-md">
                        <Users className="w-4 h-4 text-amber-400" />
                      </div>
                      <span 
                        className="text-amber-400 text-[19px] leading-[19px] font-sans tracking-[0.3em] uppercase font-bold"
                        style={{ fontSize: '19px', lineHeight: '19px' }}
                      >
                        {getTranslation(PARTNERS_CONTENT.subtitle, language)}
                      </span>
                    </div>

                    {/* Main Title */}
                    <h3 className="text-2xl sm:text-3xl font-serif font-light text-white uppercase tracking-wider mb-4 leading-tight">
                      {getTranslation(PARTNERS_CONTENT.title, language)}
                    </h3>

                    {/* Intro Description */}
                    <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">
                      {getTranslation(PARTNERS_CONTENT.desc, language)}
                    </p>

                    {/* 6 Cards Grid (2 cols on desktop, 1 col on mobile) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
                      {PARTNER_CATEGORIES.map((cat) => {
                        const isExpanded = expandedCardId === cat.id;
                        return (
                          <motion.div
                            key={cat.id}
                            onClick={() => setExpandedCardId(isExpanded ? null : cat.id)}
                            className={`p-4 border transition-all duration-300 cursor-pointer relative overflow-hidden rounded-[14px] flex flex-col justify-between group ${
                              isExpanded
                                ? 'bg-zinc-900 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.15)] -translate-y-0.5'
                                : 'bg-black/90 border-amber-400/20 hover:border-amber-400/60 hover:bg-zinc-950 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(251,191,36,0.1)]'
                            }`}
                          >
                            <div>
                              {/* Top Header of Card: Number & Icon */}
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-amber-400 text-xs font-mono font-bold tracking-widest bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                                    {cat.number}
                                  </span>
                                  <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider group-hover:text-amber-300 transition-colors duration-300">
                                    {getTranslation(cat.title, language)}
                                  </h4>
                                </div>
                                <div className="p-1.5 border border-amber-400/20 bg-amber-400/10 rounded-md shrink-0">
                                  {cat.icon}
                                </div>
                              </div>

                              {/* Description */}
                              <p className={`text-xs font-light leading-relaxed transition-all duration-300 ${
                                isExpanded ? 'block mt-2 pt-2 border-t border-amber-400/20 text-neutral-200' : 'line-clamp-2 mt-1 text-neutral-400'
                              }`}>
                                {getTranslation(cat.desc, language)}
                              </p>
                            </div>

                            {/* Expand indicator hint */}
                            <div className="flex items-center justify-between text-[10px] text-amber-400/70 font-mono mt-2 pt-1 border-t border-white/5">
                              <span className="uppercase tracking-widest">
                                {isExpanded
                                  ? (isRtl ? 'إغلاق' : 'COLLAPSE')
                                  : (isRtl ? 'اضغط للتفاصيل' : 'CLICK TO EXPAND')}
                              </span>
                              {isExpanded ? <ChevronUp className="w-3 h-3 text-amber-400" /> : <ChevronDown className="w-3 h-3 text-amber-400" />}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Action Buttons at Bottom */}
                    <div className={`flex flex-wrap gap-4 items-center mb-6 ${
                      isRtl ? 'justify-start flex-row-reverse' : 'justify-start flex-row'
                    }`}>
                      {/* Secondary Button - START YOUR PROJECT */}
                      <button
                        id="start-project-cta"
                        onClick={() => setIsProjectModalOpen(true)}
                        className="px-6 py-3.5 border border-amber-400/40 bg-black text-amber-300 hover:bg-amber-400/10 hover:border-amber-400 font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 rounded-[12px]"
                      >
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>
                          {isRtl ? 'ابدأ مشروعك' : language === 'tr' ? 'PROJENİZİ BAŞLATIN' : language === 'it' ? 'INIZIA IL TUO PROGETTO' : 'START YOUR PROJECT'}
                        </span>
                      </button>
                    </div>

                    {/* Slow-Moving E-Commerce & Retail Partners Ticker Strip */}
                    <div className="w-full mt-4 pt-5 border-t border-amber-500/20 relative overflow-hidden bg-gradient-to-r from-black via-amber-950/20 to-black rounded-2xl py-3.5 backdrop-blur-md">
                      {/* Fade edges overlay */}
                      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
                      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

                      <motion.div
                        animate={{ x: isRtl ? ['0%', '50%'] : ['0%', '-50%'] }}
                        transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
                        className="flex items-center gap-8 whitespace-nowrap w-max"
                      >
                        {[
                          { id: 'amazon', logo: (
                            <div className="flex flex-col items-center justify-center px-3 py-1 bg-white rounded-lg text-black shadow-sm font-sans">
                              <span className="text-[13px] font-black tracking-tight leading-none text-black">amazon</span>
                              <svg className="w-10 h-2.5 text-[#FF9900]" viewBox="0 0 100 24" fill="currentColor">
                                <path d="M10,6 Q50,24 90,6 L85,2 Q48,18 13,2 Z M82,2 L96,8 L88,16 Z" />
                              </svg>
                            </div>
                          )},
                          { id: 'trendyol', logo: (
                            <div className="flex items-center px-3 py-1.5 bg-[#F27A1A] rounded-lg text-white font-sans shadow-sm">
                              <div className="bg-black text-white px-2 py-0.5 rounded font-black text-[11px] tracking-tight">
                                trendyol
                              </div>
                            </div>
                          )},
                          { id: 'shopify', logo: (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-black font-sans shadow-sm">
                              <svg className="w-4 h-4 text-[#95BF47]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.5 7.2L15 4.5l-3 1.8-3-1.8-4.5 2.7L3 18.5h18l-1.5-11.3zM12 7.8l2.2-1.3 1.5.9-3.7 2.2-3.7-2.2 1.5-.9L12 7.8z" />
                              </svg>
                              <span className="font-black italic text-black text-[12px] tracking-tight">shopify</span>
                            </div>
                          )},
                          { id: 'rossmann', logo: (
                            <div className="flex flex-col items-center px-3 py-0.5 bg-white rounded-lg text-[#CC002B] font-sans shadow-sm">
                              <div className="flex items-center gap-1">
                                <div className="w-3.5 h-3.5 rounded-full border border-[#CC002B] flex items-center justify-center font-bold text-[8px]">R</div>
                                <span className="font-black text-[11px] tracking-widest text-[#CC002B]">ROSSMANN</span>
                              </div>
                              <span className="text-[6px] tracking-tight text-neutral-600 font-semibold">Mein Drogeriemarkt</span>
                            </div>
                          )},
                          { id: 'salla', logo: (
                            <div className="flex items-center gap-1 px-3 py-1.5 bg-[#004D40] text-[#00F2C3] rounded-lg font-sans font-bold text-xs shadow-sm border border-[#00F2C3]/30">
                              <span className="font-mono text-xs font-bold tracking-tight">salla | سلة</span>
                            </div>
                          )},
                          { id: 'lovabella', logo: (
                            <div className="flex flex-col items-center px-3 py-0.5 bg-white rounded-lg text-[#D81B60] font-serif shadow-sm">
                              <span className="text-[11px] font-bold tracking-widest text-[#D81B60]">LOVABELLA</span>
                              <span className="text-[6px] font-mono tracking-widest text-[#D81B60]/80 uppercase">SECRET TOUCH</span>
                            </div>
                          )},
                          { id: 'noon', logo: (
                            <div className="flex items-center px-3 py-1.5 bg-[#FEEE00] text-black rounded-lg font-sans font-black text-xs shadow-sm">
                              noon | نون
                            </div>
                          )},
                          { id: 'etsy', logo: (
                            <div className="flex items-center px-3.5 py-1.5 bg-[#F1641E] rounded-lg text-white font-serif font-bold text-[12px] shadow-sm">
                              Etsy
                            </div>
                          )}
                        ].concat(
                          [
                            { id: 'amazon', logo: (
                              <div className="flex flex-col items-center justify-center px-3 py-1 bg-white rounded-lg text-black shadow-sm font-sans">
                                <span className="text-[13px] font-black tracking-tight leading-none text-black">amazon</span>
                                <svg className="w-10 h-2.5 text-[#FF9900]" viewBox="0 0 100 24" fill="currentColor">
                                  <path d="M10,6 Q50,24 90,6 L85,2 Q48,18 13,2 Z M82,2 L96,8 L88,16 Z" />
                                </svg>
                              </div>
                            )},
                            { id: 'trendyol', logo: (
                              <div className="flex items-center px-3 py-1.5 bg-[#F27A1A] rounded-lg text-white font-sans shadow-sm">
                                <div className="bg-black text-white px-2 py-0.5 rounded font-black text-[11px] tracking-tight">
                                  trendyol
                                </div>
                              </div>
                            )},
                            { id: 'shopify', logo: (
                              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-black font-sans shadow-sm">
                                <svg className="w-4 h-4 text-[#95BF47]" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M19.5 7.2L15 4.5l-3 1.8-3-1.8-4.5 2.7L3 18.5h18l-1.5-11.3zM12 7.8l2.2-1.3 1.5.9-3.7 2.2-3.7-2.2 1.5-.9L12 7.8z" />
                                </svg>
                                <span className="font-black italic text-black text-[12px] tracking-tight">shopify</span>
                              </div>
                            )},
                            { id: 'rossmann', logo: (
                              <div className="flex flex-col items-center px-3 py-0.5 bg-white rounded-lg text-[#CC002B] font-sans shadow-sm">
                                <div className="flex items-center gap-1">
                                  <div className="w-3.5 h-3.5 rounded-full border border-[#CC002B] flex items-center justify-center font-bold text-[8px]">R</div>
                                  <span className="font-black text-[11px] tracking-widest text-[#CC002B]">ROSSMANN</span>
                                </div>
                                <span className="text-[6px] tracking-tight text-neutral-600 font-semibold">Mein Drogeriemarkt</span>
                              </div>
                            )},
                            { id: 'salla', logo: (
                              <div className="flex items-center gap-1 px-3 py-1.5 bg-[#004D40] text-[#00F2C3] rounded-lg font-sans font-bold text-xs shadow-sm border border-[#00F2C3]/30">
                                <span className="font-mono text-xs font-bold tracking-tight">salla | سلة</span>
                              </div>
                            )},
                            { id: 'lovabella', logo: (
                              <div className="flex flex-col items-center px-3 py-0.5 bg-white rounded-lg text-[#D81B60] font-serif shadow-sm">
                                <span className="text-[11px] font-bold tracking-widest text-[#D81B60]">LOVABELLA</span>
                                <span className="text-[6px] font-mono tracking-widest text-[#D81B60]/80 uppercase">SECRET TOUCH</span>
                              </div>
                            )},
                            { id: 'noon', logo: (
                              <div className="flex items-center px-3 py-1.5 bg-[#FEEE00] text-black rounded-lg font-sans font-black text-xs shadow-sm">
                                noon | نون
                              </div>
                            )},
                            { id: 'etsy', logo: (
                              <div className="flex items-center px-3.5 py-1.5 bg-[#F1641E] rounded-lg text-white font-serif font-bold text-[12px] shadow-sm">
                                Etsy
                              </div>
                            )}
                          ]
                        ).concat(
                          [
                            { id: 'amazon', logo: (
                              <div className="flex flex-col items-center justify-center px-3 py-1 bg-white rounded-lg text-black shadow-sm font-sans">
                                <span className="text-[13px] font-black tracking-tight leading-none text-black">amazon</span>
                                <svg className="w-10 h-2.5 text-[#FF9900]" viewBox="0 0 100 24" fill="currentColor">
                                  <path d="M10,6 Q50,24 90,6 L85,2 Q48,18 13,2 Z M82,2 L96,8 L88,16 Z" />
                                </svg>
                              </div>
                            )},
                            { id: 'trendyol', logo: (
                              <div className="flex items-center px-3 py-1.5 bg-[#F27A1A] rounded-lg text-white font-sans shadow-sm">
                                <div className="bg-black text-white px-2 py-0.5 rounded font-black text-[11px] tracking-tight">
                                  trendyol
                                </div>
                              </div>
                            )},
                            { id: 'shopify', logo: (
                              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-black font-sans shadow-sm">
                                <svg className="w-4 h-4 text-[#95BF47]" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M19.5 7.2L15 4.5l-3 1.8-3-1.8-4.5 2.7L3 18.5h18l-1.5-11.3zM12 7.8l2.2-1.3 1.5.9-3.7 2.2-3.7-2.2 1.5-.9L12 7.8z" />
                                </svg>
                                <span className="font-black italic text-black text-[12px] tracking-tight">shopify</span>
                              </div>
                            )},
                            { id: 'rossmann', logo: (
                              <div className="flex flex-col items-center px-3 py-0.5 bg-white rounded-lg text-[#CC002B] font-sans shadow-sm">
                                <div className="flex items-center gap-1">
                                  <div className="w-3.5 h-3.5 rounded-full border border-[#CC002B] flex items-center justify-center font-bold text-[8px]">R</div>
                                  <span className="font-black text-[11px] tracking-widest text-[#CC002B]">ROSSMANN</span>
                                </div>
                                <span className="text-[6px] tracking-tight text-neutral-600 font-semibold">Mein Drogeriemarkt</span>
                              </div>
                            )},
                            { id: 'salla', logo: (
                              <div className="flex items-center gap-1 px-3 py-1.5 bg-[#004D40] text-[#00F2C3] rounded-lg font-sans font-bold text-xs shadow-sm border border-[#00F2C3]/30">
                                <span className="font-mono text-xs font-bold tracking-tight">salla | سلة</span>
                              </div>
                            )},
                            { id: 'lovabella', logo: (
                              <div className="flex flex-col items-center px-3 py-0.5 bg-white rounded-lg text-[#D81B60] font-serif shadow-sm">
                                <span className="text-[11px] font-bold tracking-widest text-[#D81B60]">LOVABELLA</span>
                                <span className="text-[6px] font-mono tracking-widest text-[#D81B60]/80 uppercase">SECRET TOUCH</span>
                              </div>
                            )},
                            { id: 'noon', logo: (
                              <div className="flex items-center px-3 py-1.5 bg-[#FEEE00] text-black rounded-lg font-sans font-black text-xs shadow-sm">
                                noon | نون
                              </div>
                            )},
                            { id: 'etsy', logo: (
                              <div className="flex items-center px-3.5 py-1.5 bg-[#F1641E] rounded-lg text-white font-serif font-bold text-[12px] shadow-sm">
                                Etsy
                              </div>
                            )}
                          ]
                        ).map((platform, idx) => (
                          <div
                            key={`${platform.id}-${idx}`}
                            className="flex items-center px-1.5 py-1 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/50 transition-all transform hover:scale-105 duration-300 backdrop-blur-sm group cursor-pointer"
                          >
                            <div className="opacity-90 group-hover:opacity-100 transition-opacity">
                              {platform.logo}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        }

        const handleExploreClick = () => {
          if (sector.id === 'food') {
            setIsJourneyModalOpen(true);
          } else {
            onSectorSelect(sector.id);
          }
        };

        return (
          <section
            key={sector.id}
            id={sector.id}
            className="relative w-full py-24 sm:py-32 overflow-hidden border-b border-white/5 bg-[#030303]"
          >
            {/* Visual background atmospheric lights */}
            <div className={`absolute top-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none ${
              isEven ? 'left-10' : 'right-10'
            }`} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                isRtl ? 'dir-rtl' : 'dir-ltr'
              }`}>
                
                {/* Visual Image container with subtle parallax fade-in (5 columns) */}
                <motion.div
                  initial={{ opacity: 0, x: isRtl ? (isEven ? -40 : 40) : (isEven ? -40 : 40), y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-5 relative group aspect-video lg:aspect-[4/5] overflow-hidden border border-white/10 cursor-pointer ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  } ${isRoundedCornerSection ? 'rounded-[40px]' : ''}`}
                  onClick={handleExploreClick}
                >
                  <img
                    src={sector.image.startsWith('/') ? sector.image : `/${sector.image}`}
                    alt={getTranslation(sector.title, language)}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.onerror = null;
                      img.src = '/meeting-room.png';
                    }}
                    className={`w-full h-full object-cover opacity-60 transition-transform duration-[1.2s] ease-out group-hover:scale-105 group-hover:opacity-75 ${
                      isRoundedCornerSection ? 'rounded-[40px]' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  {/* Subtle hover eye overlay to prompt exploration */}
                  <div className={`absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isRoundedCornerSection ? 'rounded-[40px]' : ''
                  }`}>
                    <div className="flex items-center gap-2 px-4 py-2 border border-amber-400 bg-black/80 text-amber-400 text-xs font-bold tracking-widest uppercase">
                      <Eye className="w-4 h-4" />
                      <span>
                        {sector.id === 'food'
                          ? (isRtl ? 'استكشف رحلة العلامة' : 'EXPLORE BRAND JOURNEY')
                          : (isRtl ? 'عرض الصفحة الكاملة' : 'VIEW FULL PAGE')}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Content details description (7 columns) */}
                <motion.div
                  initial={{ opacity: 0, x: isRtl ? (isEven ? 40 : -40) : (isEven ? 40 : -40), y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-7 flex flex-col justify-center ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  } ${isRtl ? 'text-right' : 'text-left'}`}
                >
                  {/* Icon Indicator */}
                  <div className={`flex items-center gap-3 mb-6 ${isRtl ? 'justify-start' : 'justify-start'}`}>
                    <div className="p-2.5 border border-amber-400/20 bg-amber-400/5 rounded-none">
                      {sector.icon}
                    </div>
                    <span 
                      className="text-amber-400 text-[19px] leading-[19px] font-sans tracking-[0.4em] uppercase font-bold"
                      style={{ fontSize: '19px', lineHeight: '19px' }}
                    >
                      {getTranslation(sector.title, language)}
                    </span>
                  </div>

                  {/* Sector Subtitle Display */}
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-white uppercase tracking-wider mb-6 leading-tight hover:text-amber-400 transition-colors duration-300 cursor-pointer" onClick={handleExploreClick}>
                    {getTranslation(sector.subtitle, language)}
                  </h3>

                  {/* Long Description */}
                  <p className="text-sm text-neutral-400 leading-relaxed font-light mb-8 max-w-xl">
                    {getTranslation(sector.desc, language)}
                  </p>

                  {/* Technical Specifications Grid inside Sector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-t border-white/5 mb-8">
                    {sector.features.map((f, fIdx) => (
                      <div key={fIdx} className="flex flex-col gap-1.5">
                        <span className="text-[10px] font-sans tracking-widest text-neutral-500 uppercase font-bold">
                          {getTranslation(f.title, language)}
                        </span>
                        <span className="text-xs text-neutral-300 font-light leading-relaxed">
                          {getTranslation(f.val, language)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Dual CTAs: Explore dedicated page vs Request partnership */}
                  <div className={`flex flex-wrap gap-6 items-center ${
                    isRtl ? 'justify-start flex-row-reverse' : 'justify-start flex-row'
                  }`}>
                    
                    {/* 1. VIEW DETAILED PAGE VIEW */}
                    <button
                      id={`explore-page-cta-${sector.id}`}
                      onClick={handleExploreClick}
                      className="flex items-center gap-3 text-xs tracking-widest font-bold text-white hover:text-amber-400 transition-colors duration-300 uppercase cursor-pointer group"
                    >
                      <span>
                        {sector.id === 'companies-cosmetics'
                          ? (isRtl ? 'استكشف مختبرنا' : language === 'tr' ? 'LABORATUVARIMIZI KEŞFEDİN' : language === 'it' ? 'ESPLORA IL NOSTRO LABORATORIO' : 'EXPLORE OUR LAB')
                          : sector.id === 'food'
                          ? (isRtl ? 'استكشف رحلة علامتك التجارية' : language === 'tr' ? 'MARKA YOLCULUĞUNU KEŞFEDİN' : language === 'it' ? 'ESPLORA IL PERCORSO DEL MARCHIO' : 'EXPLORE BRAND JOURNEY')
                          : sector.id === 'global-trade'
                          ? (isRtl ? 'اطلب استشارة بسرية تامة' : language === 'tr' ? 'GİZLİ DANIŞMANLIK İSTEYİN' : language === 'it' ? 'RICHIEDI UNA CONSULENZA RISERVATA' : 'REQUEST A CONFIDENTIAL CONSULTATION')
                          : sector.id === 'brands'
                          ? (isRtl ? 'اكتشف خدمات التجارة العالمية' : language === 'tr' ? 'KÜRESEL TİCARETİ KEŞFEDİN' : language === 'it' ? 'ESPLORA IL COMMERCIO GLOBALE' : 'EXPLORE GLOBAL TRADE')
                          : (isRtl ? 'عرض الصفحة المخصصة والبيانات' : 'VIEW FULL PAGE')}
                      </span>
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                        {isRtl ? (
                          <ArrowLeft className="w-4 h-4 text-amber-400" />
                        ) : (
                          <ArrowRight className="w-4 h-4 text-amber-400" />
                        )}
                      </span>
                    </button>

                    <div className="w-px h-4 bg-white/10 hidden sm:block" />

                    {/* 2. REQUEST PARTNERSHIP */}
                    <button
                      id={`contact-cta-${sector.id}`}
                      onClick={
                        sector.id === 'food'
                          ? () => setIsProjectModalOpen(true)
                          : sector.id === 'brands'
                          ? () => setIsTradeModalOpen(true)
                          : onContactClick
                      }
                      className="text-xs tracking-widest font-bold text-neutral-400 hover:text-white transition-colors duration-300 uppercase cursor-pointer"
                    >
                      {sector.id === 'brands'
                        ? (isRtl ? 'أرسل طلبًا تجاريًا' : language === 'tr' ? 'TİCARİ SORGULAMA TALEBİ' : language === 'it' ? 'RICHIEDI UN\'INCHIESTA COMMERCIALE' : 'REQUEST A BUSINESS INQUIRY')
                        : sector.id === 'companies-cosmetics' || sector.id === 'food' || sector.id === 'global-trade'
                        ? (isRtl ? 'تواصل مع فريقنا' : language === 'tr' ? 'EKİBİMİZLE İLETİŞİME GEÇİN' : language === 'it' ? 'CONTATTA IL NOSTRO TEAM' : 'CONTACT OUR TEAM')
                        : (isRtl ? 'طلب شراكة وتوريد' : 'REQUEST PARTNERSHIP')}
                    </button>

                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

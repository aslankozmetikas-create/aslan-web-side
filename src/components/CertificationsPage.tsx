import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, Award, ShieldCheck, CheckCircle2, 
  Download, Eye, ExternalLink, FileText, Check 
} from 'lucide-react';
import { Language, getTranslation } from '../types';

interface CertificationsPageProps {
  language: Language;
  onBack: () => void;
  onContactClick: () => void;
}

interface CertificateData {
  id: string;
  code: string;
  name: { ar: string; en: string; tr: string; it: string };
  authority: { ar: string; en: string; tr: string; it: string };
  issueDate: string;
  expiryDate: string;
  regNumber: string;
  description: { ar: string; en: string; tr: string; it: string };
  highlights: { ar: string[]; en: string[]; tr: string[]; it: string[] };
}

const CERTIFICATES: CertificateData[] = [
  {
    id: 'iso-9001',
    code: 'ISO 9001:2015',
    name: {
      ar: 'نظام إدارة الجودة العالمي',
      en: 'Quality Management System',
      tr: 'Kalite Yönetim Sistemi',
      it: 'Sistema di Gestione della Qualità'
    },
    authority: {
      ar: 'المعهد البريطاني للمعايير (BSI)',
      en: 'British Standards Institution (BSI)',
      tr: 'İngiliz Standartları Enstitüsü (BSI)',
      it: 'British Standards Institution (BSI)'
    },
    issueDate: '2024-03-12',
    expiryDate: '2027-03-11',
    regNumber: 'QMS-9001-849204',
    description: {
      ar: 'يضمن الكفاءة العالية والتحسين المستمر ومطابقة معايير التميز في كافة مراحل الإنتاج وتطوير التركيبات.',
      en: 'Ensures supreme operational efficiency, continuous product improvement, and strict adherence to global premium excellence standards across all cosmetic manufacturing phases.',
      tr: 'Tüm kozmetik üretim aşamalarında üstün operasyonel verimlilik, sürekli ürün iyileştirme ve küresel mükemmellik standartlarına sıkı uyum sağlar.',
      it: 'Garantisce la massima efficienza operativa, il miglioramento continuo del prodotto e la rigorosa conformità agli standard di eccellenza globali in tutte le fasi.'
    },
    highlights: {
      ar: ['رقابة جودة صارمة', 'تتبع كامل للمواد الخام', 'رضا العملاء المضمون'],
      en: ['Rigorous Quality Control', 'Full Traceability of Raw Materials', 'Guaranteed Customer Satisfaction'],
      tr: ['Sıkı Kalite Kontrolü', 'Ham Maddelerin Tam İzlenebilirliği', 'Garantili Müşteri Memnuniyeti'],
      it: ['Rigoroso Controllo Qualità', 'Tracciabilità Completa delle Materie Prime', 'Soddisfazione del Cliente Garantita']
    }
  },
  {
    id: 'gmp-cosmetics',
    code: 'GMP / ISO 22716',
    name: {
      ar: 'ممارسات التصنيع الجيد لمستحضرات التجميل',
      en: 'Good Manufacturing Practices (Cosmetics)',
      tr: 'Kozmetikte İyi Üretim Uygulamaları',
      it: 'Buone Pratiche di Fabbricazione (Cosmetici)'
    },
    authority: {
      ar: 'إدارة الغذاء والدواء العالمية (FDA - SGS Acc.)',
      en: 'Global Food & Drug Administration (SGS Accredited)',
      tr: 'Küresel Gıda ve İlaç İdaresi (SGS Akredite)',
      it: 'Global Food & Drug Administration (Accreditato SGS)'
    },
    issueDate: '2024-04-18',
    expiryDate: '2027-04-17',
    regNumber: 'GMP-22716-559102',
    description: {
      ar: 'يضمن خلو بيئة التصنيع من الملوثات والتعقيم الفائق للغرف النظيفة ومطابقة أعلى مستويات السلامة لمنتجات التجميل والعناية بالبشرة.',
      en: 'Guarantees state-of-the-art sterile cleanrooms, zero contamination risk, and absolute safety for premium clinical cosmetic and medical skincare formulations.',
      tr: 'En son teknolojiye sahip steril temiz odaları, sıfır kontaminasyon riskini ve birinci sınıf klinik kozmetik ve tıbbi cilt bakımı formülasyonları için mutlak güvenliği garanti eder.',
      it: 'Garantisce camere bianche sterili all\'avanguardia, rischio zero di contaminazione e sicurezza assoluta per formulazioni cosmetiche cliniche e trattamenti dermatologici.'
    },
    highlights: {
      ar: ['تعقيم غرف نظيفة Class-555', 'تصنيع معقم بالكامل', 'مطابقة معايير الأدوية'],
      en: ['Class-555 Cleanroom Sterility', 'Aseptic Formulations Processing', 'Medical-Grade Standards Compliance'],
      tr: ['Sınıf-555 Temiz Oda Sterilitesi', 'Aseptik Formülasyon İşleme', 'Medikal Sınıf Standartlarına Uyum'],
      it: ['Sterilità Camere Bianche Classe-555', 'Processo di Formulazione Asettico', 'Conformità agli Standard Medicali']
    }
  },
  {
    id: 'halal-cert',
    code: 'HALAL CERTIFIED',
    name: {
      ar: 'شهادة حلال المعتمدة دولياً',
      en: 'Halal Certified Production',
      tr: 'Helal Sertifikalı Üretim',
      it: 'Produzione Certificata Halal'
    },
    authority: {
      ar: 'الهيئة العالمية للحلال (IHA / JAKIM Standards)',
      en: 'International Halal Authority (IHA / JAKIM Standards)',
      tr: 'Uluslararası Helal Otoritesi (IHA / JAKIM Standartları)',
      it: 'Autorità Internazionale Halal (Standard IHA / JAKIM)'
    },
    issueDate: '2024-02-05',
    expiryDate: '2027-02-04',
    regNumber: 'HAL-IHA-774012',
    description: {
      ar: 'ترخيص واعتماد رسمي يثبت خلو كافة التركيبات والمكونات المستخدمة من أي مواد غير متوافقة مع الشريعة الإسلامية وصلاحيتها المطلقة للاستخدام.',
      en: 'Official validation proving that all cosmetic formulations, raw materials, and components conform 100% to Halal standards of cleanliness and ethical preparation.',
      tr: 'Tüm kozmetik formüllerinin, ham maddelerin ve bileşenlerin %100 temizlik ve etik hazırlama Helal standartlarına uygun olduğunu kanıtlayan resmi onay.',
      it: 'Validazione ufficiale che attesta che tutte le formulazioni cosmetiche, le materie prime e i componenti sono conformi al 100% agli standard Halal.'
    },
    highlights: {
      ar: ['مكونات طبيعية 100٪', 'خالٍ من المشتقات الحيوانية المحرمة', 'رقابة أخلاقية بيئية'],
      en: ['100% Pure & Clean Raw Materials', 'Zero Prohibited Animal Derivatives', 'Ethical & Eco-Friendly Process'],
      tr: ['%100 Saf ve Temiz Ham Maddeler', 'Sıfır Yasaklı Hayvansal Türev', 'Etik ve Çevre Dostu Süreç'],
      it: ['Materie Prime 100% Pure e Pulite', 'Zero Derivati Animali Proibiti', 'Processo Etico ed Ecologico']
    }
  },
  {
    id: 'haccp-hazard',
    code: 'HACCP SYSTEM',
    name: {
      ar: 'نظام تحليل المخاطر ونقاط التحكم الحرجة',
      en: 'Hazard Analysis Critical Control Point',
      tr: 'Tehlike Analizi Kritik Kontrol Noktası',
      it: 'Analisi dei Rischi e Controllo dei Punti Critici'
    },
    authority: {
      ar: 'مجلس الاعتماد الدولي (TÜV SÜD)',
      en: 'International Accreditation Council (TÜV SÜD)',
      tr: 'Uluslararası Akreditasyon Konseyi (TÜV SÜD)',
      it: 'Consiglio di Accreditamento Internazionale (TÜV SÜD)'
    },
    issueDate: '2024-05-10',
    expiryDate: '2027-05-09',
    regNumber: 'HAC-TUV-304918',
    description: {
      ar: 'يضمن الرقابة الاستباقية الصارمة على سلامة المكونات من المنشأ وحتى التغليف النهائي لمنع أي أخطار حيوية أو كيميائية.',
      en: 'Establishes rigorous proactive monitoring of material safety from biological, chemical, and physical hazards at all processing steps.',
      tr: 'Tüm işleme adımlarında biyolojik, kimyasal ve fiziksel tehlikelere karşı malzeme güvenliğinin sıkı bir şekilde izlenmesini sağlar.',
      it: 'Stabilisce un rigoroso monitoraggio proattivo della sicurezza dei materiali da rischi biologici, chimici e fisici in tutte le fasi di lavorazione.'
    },
    highlights: {
      ar: ['تحليل مخاطر شامل', 'نقاط تحكم حرجة مؤتمتة', 'منع التلوث التبادلي'],
      en: ['Comprehensive Hazard Analysis', 'Automated Critical Control Points', 'Cross-Contamination Prevention'],
      tr: ['Kapsamlı Tehlike Analizi', 'Otomatik Kritik Kontrol Noktaları', 'Çapraz Kontaminasyon Önleme'],
      it: ['Analisi dei Rischi Completa', 'Punti di Controllo Critici Automatizzati', 'Prevenzione della Contaminazione Crociata']
    }
  },
  {
    id: 'iso-14001',
    code: 'ISO 14001:2015',
    name: {
      ar: 'نظام إدارة البيئة المستدامة',
      en: 'Environmental Management System',
      tr: 'Çevre Yönetim Sistemi',
      it: 'Sistema di Gestione Ambientale'
    },
    authority: {
      ar: 'المنظمة الدولية للمعايير (EUROACCREDIA)',
      en: 'International Organization for Standardization (EUROACCREDIA)',
      tr: 'Uluslararası Standartlaştırma Örgütü (EUROACCREDIA)',
      it: 'Organizzazione Internazionale per la Standardizzazione (EUROACCREDIA)'
    },
    issueDate: '2024-01-15',
    expiryDate: '2027-01-14',
    regNumber: 'EMS-14001-209411',
    description: {
      ar: 'يؤكد التزام منشآتنا بصفر نفايات صناعية وتدوير متكامل للمياه واستخدام مصادر الطاقة المتجددة الصديقة للبيئة.',
      en: 'Confirms our high-tech facility commitment to zero waste, water circularity, ecological footprint reduction, and 100% solar self-generation.',
      tr: 'Yüksek teknolojili tesisimizin sıfır atık, su döngüsü, ekolojik ayak izi azaltımı ve %100 güneş enerjisi üretimine olan bağlılığını onaylar.',
      it: 'Conferma l\'impegno della nostra struttura ad alta tecnologia verso l\'obiettivo zero rifiuti, il riciclo dell\'acqua e l\'auto-generazione solare al 100%.'
    },
    highlights: {
      ar: ['استراتيجية صفر نفايات', 'إعادة تدوير المياه بالكامل', 'اعتماد طاقة شمسية 100٪'],
      en: ['Zero Waste Industrial Strategy', '100% Recycled Water Closed Loop', '100% Solar-Powered Plant'],
      tr: ['Sıfır Atık Endüstriyel Strateji', 'Yüzde Yüz Geri Dönüştürülmüş Su', '%100 Güneş Enerjili Tesis'],
      it: ['Strategia Industriale Zero Rifiuti', 'Ciclo dell\'Acqua Riciclata al 100%', 'Stabilimento Alimentato al 100% da Energia Solare']
    }
  },
  {
    id: 'iso-45001',
    code: 'ISO 45001 / ISO 3001',
    name: {
      ar: 'نظام إدارة الصحة والسلامة المهنية وإدارة المخاطر',
      en: 'Occupational Health & Safety & Risk Management',
      tr: 'İş Sağlığı, Güvenliği ve Risk Yönetimi',
      it: 'Gestione della Salute, Sicurezza sul Lavoro e dei Rischi'
    },
    authority: {
      ar: 'الاتحاد الأوروبي للاعتماد والمقاييس',
      en: 'European Accreditation and Metrology Union',
      tr: 'Avrupa Akreditasyon ve Metroloji Birliği',
      it: 'Unione Europea di Accreditamento e Metrologia'
    },
    issueDate: '2024-06-20',
    expiryDate: '2027-06-19',
    regNumber: 'OHS-45001-441092',
    description: {
      ar: 'يضمن توفير بيئة عمل آمنة وصحية بالكامل لكافة الموظفين والمهندسين وحمايتهم بأعلى معايير السلامة المهنية والوقاية من المخاطر.',
      en: 'Guarantees an ultra-secure, healthy, and risk-mitigated work environment for all laboratory technicians, formulators, and robotic line engineers.',
      tr: 'Tüm laboratuvar teknisyenleri, formülatörler ve robotik hat mühendisleri için son derece güvenli, sağlıklı ve riskleri en aza indirilmiş bir çalışma ortamı garanti eder.',
      it: 'Garantisce un ambiente di lavoro ultra-sicuro, sano e privo di rischi per tutti i tecnici di laboratorio, formulatori e ingegneri delle linee robotizzate.'
    },
    highlights: {
      ar: ['حماية قصوى لبيئة المختبرات', 'إدارة مخاطر استباقية', 'تدريب مستمر على السلامة'],
      en: ['Premium Laboratory Protection', 'Proactive Risk Assessment Protocols', 'Continuous Advanced Safety Auditing'],
      tr: ['Üstün Laboratuvar Koruması', 'Proaktif Risk Değerlendirme Protokolleri', 'Sürekli Gelişmiş Güvenlik Denetimi'],
      it: ['Protezione Avanzata dei Laboratori', 'Protocolli Proattivi di Valutazione dei Rischi', 'Audit di Sicurezza Continuo']
    }
  }
];

export default function CertificationsPage({ language, onBack, onContactClick }: CertificationsPageProps) {
  const isRtl = language === 'ar';
  const [selectedCert, setSelectedCert] = useState<CertificateData | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

  const handleDownload = (cert: CertificateData) => {
    setDownloadingId(cert.id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadSuccessId(cert.id);
      setTimeout(() => {
        setDownloadSuccessId(null);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen relative z-10">
      
      {/* Decorative Blur Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Back to Home Button */}
      <button
        onClick={onBack}
        className={`group flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-neutral-400 hover:text-amber-400 transition-colors duration-300 mb-12 cursor-pointer ${
          isRtl ? 'flex-row-reverse self-end' : 'flex-row self-start'
        }`}
      >
        {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
        <span className="font-bold">{isRtl ? 'العودة للرئيسية' : 'BACK TO HOME'}</span>
      </button>

      {/* Page Title & Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
        <div className="lg:col-span-7">
          <span className="text-amber-400 text-xs font-sans tracking-[0.4em] uppercase font-bold block mb-3">
            {isRtl ? 'شهادات الثقة المطلقة' : 'ACCREDITATIONS & TRUST'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight uppercase tracking-wider mb-6">
            {isRtl ? 'المعايير العالمية والاعتمادات الرسمية' : 'GLOBAL CERTIFICATIONS & QUALITY ASSURANCE'}
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            {isRtl
              ? 'تلتزم شركة أصلان بأعلى درجات الدقة والنزاهة العلمية في كافة منشآتها التصنيعية ومختبراتها البحثية. حزمة اعتماداتنا الدولية توثق عملياتنا المتقدمة بدءاً من سلامة المواد الأولية، مروراً بالتعقيم الكامل للغرف النظيفة Class-100، وانتهاءً بتأكيد ريادتنا البيئية المستدامة صفر نفايات.'
              : 'ASLAN complies with the absolute highest tiers of regulatory precision, hygiene, and environmental engineering. Our globally recognized legal accreditations provide transparent documentation of our pristine cleanroom procedures, premium material ethics, safety assurance, and circular green economy pledges.'}
          </p>
        </div>
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-zinc-950/40 border border-white/5 backdrop-blur-md rounded-none relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber-400/30" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber-400/30" />
          <Award className="w-16 h-16 text-amber-400/75 mb-4 animate-pulse" />
          <div className="text-center">
            <div className="text-3xl font-serif text-white font-light tracking-widest mb-1">100%</div>
            <div className="text-xs text-amber-400 font-sans tracking-widest uppercase font-bold">
              {isRtl ? 'معايير جودة مطابقة وموثقة' : 'COMPLIANT & ACCREDITED'}
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Interactive Certificate Framed Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group relative border border-white/5 bg-zinc-950/40 backdrop-blur-sm p-1.5 hover:border-amber-400/20 transition-all duration-500 flex flex-col justify-between h-[520px]"
          >
            {/* Double Fine Border Accent to mimic picture frame */}
            <div className="absolute inset-1.5 border border-white/5 group-hover:border-amber-400/10 pointer-events-none transition-colors duration-500" />
            
            {/* Framed Graphic Representation of the Certificate (Realistic White Paper Style) */}
            <div className="relative h-64 bg-[#fcfdfd] text-black m-1.5 border-[6px] border-[#1d2d50] flex flex-col items-center justify-between p-3 select-none overflow-hidden shadow-md">
              {/* Red Inner Thin Frame */}
              <div className="absolute inset-1 border border-[#8b1c14] pointer-events-none" />
              
              {/* Security Background Pattern / Fine Guilloche Lines simulation */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                backgroundImage: `radial-gradient(circle at 0.5px 0.5px, #1d2d50 0.5px, transparent 0)`,
                backgroundSize: '8px 8px'
              }} />

              {/* Watermark Logo in center background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none">
                  <path d="M44 32 C44 32, 60 27, 76 32 C76 54, 73 75, 60 85 C47 75, 44 54, 44 32 Z" fill="#1d2d50" />
                </svg>
              </div>

              {/* Top Crest & Header (Miniaturized) */}
              <div className="relative z-10 flex flex-col items-center mt-1">
                <svg className="w-10 h-10" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Blue Wings */}
                  <path d="M15 50 C32 22, 52 32, 60 48 C50 52, 32 48, 15 50 Z" fill="#1d2d50" />
                  <path d="M105 50 C88 22, 68 32, 60 48 C70 52, 88 48, 105 50 Z" fill="#1d2d50" />
                  <path d="M20 60 C35 36, 52 42, 60 55 C52 59, 35 55, 20 60 Z" fill="#1d2d50" opacity="0.85" />
                  <path d="M100 60 C85 36, 68 42, 60 55 C68 59, 85 55, 100 60 Z" fill="#1d2d50" opacity="0.85" />
                  
                  {/* Shield in the middle */}
                  <path d="M44 32 C44 32, 60 27, 76 32 C76 54, 73 75, 60 85 C47 75, 44 54, 44 32 Z" fill="#8b1c14" />
                  {/* Inner white shield detailing */}
                  <path d="M49 37 C49 37, 60 33, 71 37 C71 52, 68 69, 60 78 C52 69, 49 52, 49 37 Z" fill="white" />
                  {/* IQR Text on Shield */}
                  <text x="60" y="58" fill="#8b1c14" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="serif" letterSpacing="0.05em">IQR</text>
                  <polygon points="60,14 62,19 67,19 63,22 65,27 60,24 55,27 57,22 53,19 58,19" fill="#8b1c14" />
                </svg>
                <div className="text-[5px] font-bold text-[#1d2d50] tracking-widest uppercase mt-0.5 font-serif scale-90">
                  IQR INTERNATIONAL
                </div>
                <div className="text-[8px] font-serif text-[#1d2d50] tracking-[0.1em] font-light uppercase mt-1">
                  CERTIFICATE
                </div>
              </div>

              {/* Company & Standard Middle Block */}
              <div className="relative z-10 text-center px-1 my-0.5">
                <div className="text-[6px] font-serif font-extrabold text-[#8b1c14] tracking-wide uppercase leading-tight line-clamp-1 max-w-[210px]">
                  ASLAN INTERNATIONAL DIŞ TİCARET KOZMETİK A.Ş.
                </div>
                <div className="text-[10px] font-serif font-bold text-[#1d2d50] tracking-widest uppercase mt-1.5">
                  {cert.id === 'iso-14001' ? 'ISO 14001:2015' : 
                   cert.id === 'iso-9001' ? 'ISO 9001:2015' : 
                   cert.id === 'gmp-cosmetics' ? 'ISO 22716:2007' : 
                   cert.id === 'halal-cert' ? 'HALAL CERTIFIED' : 
                   cert.id === 'haccp-hazard' ? 'HACCP SYSTEM' : 
                   'ISO 45001:2018'}
                </div>
                <div className="text-[5px] text-[#8b1c14] font-sans font-semibold uppercase tracking-wider scale-95 mt-0.5 max-w-[200px] line-clamp-1 mx-auto">
                  {cert.id === 'iso-14001' ? 'Environmental Management System' :
                   cert.id === 'iso-9001' ? 'Quality Management System' :
                   cert.id === 'gmp-cosmetics' ? 'Good Manufacturing Practices' :
                   cert.id === 'halal-cert' ? 'Helal Kozmetik Yönetim Sistemi' :
                   cert.id === 'haccp-hazard' ? 'Hazard Analysis Critical Control Point' :
                   'İş Sağlığı ve Güvenliği Yönetimi'}
                </div>
              </div>

              {/* Bottom Row (Miniaturized signatures/seals) */}
              <div className="relative z-10 w-full grid grid-cols-3 items-end gap-1 px-1 border-t border-neutral-200/80 pt-1.5 mb-1 text-center">
                {/* Left signature */}
                <div className="flex flex-col items-center">
                  <svg className="w-10 h-3 text-blue-600 opacity-85 scale-90" viewBox="0 0 150 50">
                    <path d="M15,35 Q35,10 65,32 T115,18 T135,22 Q110,42 75,39 T25,35" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <div className="text-[4px] text-neutral-600 font-bold scale-90 leading-none">APPROVED</div>
                </div>

                {/* Center stamp */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border border-dashed border-neutral-300 flex items-center justify-center scale-90">
                    <div className="text-[3px] text-neutral-400 font-extrabold uppercase scale-75">IQR</div>
                  </div>
                </div>

                {/* Right accreditor badge */}
                <div className="flex items-center justify-center scale-75 transform -translate-y-0.5">
                  <div className="flex items-center border border-neutral-300 bg-white p-0.5 shadow-sm scale-95">
                    <div className="bg-[#1f4c2c] text-white font-extrabold text-[5px] px-1 leading-none select-none">
                      IAS
                    </div>
                    <div className="text-left leading-none ml-0.5 pl-0.5 border-l border-neutral-200">
                      <div className="text-[4px] font-extrabold text-neutral-800 scale-90">ACCREDITED</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlay with interactive buttons on hover */}
              <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center gap-3 p-4">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full max-w-[160px] py-2.5 bg-white text-black hover:bg-amber-400 transition-colors duration-300 text-[10px] tracking-widest font-bold uppercase flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  {isRtl ? 'عرض المستند' : 'VIEW DOCUMENT'}
                </button>
                <button
                  onClick={() => handleDownload(cert)}
                  className="w-full max-w-[160px] py-2.5 bg-zinc-900 border border-white/10 text-white hover:text-amber-400 hover:border-amber-400/50 transition-colors duration-300 text-[10px] tracking-widest font-bold uppercase flex items-center justify-center gap-2 cursor-pointer"
                >
                  {downloadingId === cert.id ? (
                    <div className="w-3.5 h-3.5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                  ) : downloadSuccessId === cert.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Download className="w-3.5 h-3.5" />
                  )}
                  {downloadingId === cert.id 
                    ? (isRtl ? 'جاري التحميل...' : 'DOWNLOADING...') 
                    : downloadSuccessId === cert.id 
                      ? (isRtl ? 'تم التحميل' : 'DOWNLOADED') 
                      : (isRtl ? 'تحميل الشهادة' : 'DOWNLOAD PDF')}
                </button>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 pt-3 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-amber-400/80 tracking-wide">
                    {cert.code}
                  </span>
                  <div className="flex items-center gap-1 bg-amber-400/10 px-2 py-0.5 rounded-none border border-amber-400/20">
                    <ShieldCheck className="w-3 h-3 text-amber-400" />
                    <span className="text-[9px] text-amber-400 font-sans tracking-widest uppercase font-bold">
                      {isRtl ? 'نشط' : 'ACTIVE'}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-serif font-light text-white uppercase tracking-wide mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {getTranslation(cert.name, language)}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed font-light line-clamp-3 mb-4">
                  {getTranslation(cert.description, language)}
                </p>
              </div>

              {/* Highlights tags */}
              <div className="border-t border-white/5 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {getTranslation({
                    ar: cert.highlights.ar.join(','),
                    en: cert.highlights.en.join(','),
                    tr: cert.highlights.tr.join(','),
                    it: cert.highlights.it.join(',')
                  }, language).split(',').map((highlight, index) => (
                    <span
                      key={index}
                      className="text-[9px] bg-white/[0.02] border border-white/5 text-neutral-400 px-2.5 py-1 tracking-wider uppercase font-light"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust & Guarantee bottom section */}
      <div className="mt-24 border border-white/5 bg-zinc-950/40 p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-lg sm:text-xl font-serif font-light text-white uppercase tracking-wider mb-3">
            {isRtl ? 'الالتزام بمعايير التدقيق الدوري والمستمر' : 'RIGOROUS STANDARDS & ROUTINE COMPLIANCE AUDITS'}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
            {isRtl
              ? 'تخضع كافة مختبراتنا وخطوط الإنتاج لتدقيق سنوي صارم مستقل من قبل أكبر منظمات المقاييس العالمية (TÜV SÜD & SGS). نضمن بقاء كافة الاعتمادات سارية ومحدثة لحماية مصداقيتنا وشراكتنا الاستراتيجية الطويلة الأمد.'
              : 'Our advanced facility and research centers undergo rigorous annual third-party audits by SGS & TÜV SÜD to maintain perfect standing. This continuous monitoring certifies that every premium formulation meets international regulatory, ethical, and clinical benchmarks.'}
          </p>
        </div>
        <button
          onClick={onContactClick}
          className="relative z-10 px-8 py-4 bg-amber-400 hover:bg-white text-black transition-all duration-300 text-xs tracking-[0.3em] uppercase font-bold flex items-center gap-2 group cursor-pointer whitespace-nowrap self-stretch md:self-auto justify-center"
        >
          {isRtl ? 'تواصل مع فريق الامتثال' : 'TALK TO COMPLIANCE'}
          {isRtl ? <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
        </button>
      </div>

      {/* FULL SCREEN MODAL VIEW OF CERTIFICATE DOCUMENT */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-neutral-900 border border-white/10 w-full max-w-4xl p-2 sm:p-4 relative shadow-2xl text-black my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button (Floating dark style above/beside card) */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors p-2 text-xs tracking-widest font-sans cursor-pointer uppercase flex items-center gap-1.5"
              >
                <span>{isRtl ? 'إغلاق ✕' : 'CLOSE ✕'}</span>
              </button>

              {/* The Realistic Certificate Paper Layout */}
              <div className="bg-[#fcfdfd] text-[#1a1a1a] p-4 sm:p-8 md:p-12 relative overflow-hidden select-text border-[14px] border-[#1d2d50]">
                {/* Red Inner Thin Frame */}
                <div className="absolute inset-4 border-2 border-[#8b1c14] pointer-events-none" />
                
                {/* Security Background Pattern / Fine Guilloche Lines simulation */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #1d2d50 1px, transparent 0)`,
                  backgroundSize: '16px 16px'
                }} />

                {/* Left decorative wing background watermark */}
                <div className="absolute left-6 bottom-12 w-48 h-96 opacity-[0.05] pointer-events-none">
                  <svg viewBox="0 0 100 200" fill="#1d2d50">
                    <path d="M0,0 C30,40 50,90 40,150 C30,190 10,200 0,200 C15,170 25,120 20,80 C15,40 5,15 0,0 Z" />
                  </svg>
                </div>

                {/* Main Certificate Sheet Content */}
                <div className="relative z-10 flex flex-col items-center">
                  
                  {/* Top Crest Logo (IQR Crest) */}
                  <div className="flex flex-col items-center mb-6">
                    <svg className="w-24 h-24" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Blue Wings */}
                      <path d="M15 50 C32 22, 52 32, 60 48 C50 52, 32 48, 15 50 Z" fill="#1d2d50" />
                      <path d="M105 50 C88 22, 68 32, 60 48 C70 52, 88 48, 105 50 Z" fill="#1d2d50" />
                      <path d="M20 60 C35 36, 52 42, 60 55 C52 59, 35 55, 20 60 Z" fill="#1d2d50" opacity="0.85" />
                      <path d="M100 60 C85 36, 68 42, 60 55 C68 59, 85 55, 100 60 Z" fill="#1d2d50" opacity="0.85" />
                      <path d="M25 70 C38 48, 54 52, 60 62 C54 66, 38 62, 25 70 Z" fill="#1d2d50" opacity="0.7" />
                      <path d="M95 70 C82 48, 66 52, 60 62 C66 66, 82 62, 95 70 Z" fill="#1d2d50" opacity="0.7" />
                      
                      {/* Shield in the middle */}
                      <path d="M44 32 C44 32, 60 27, 76 32 C76 54, 73 75, 60 85 C47 75, 44 54, 44 32 Z" fill="#8b1c14" />
                      
                      {/* Inner white shield detailing */}
                      <path d="M49 37 C49 37, 60 33, 71 37 C71 52, 68 69, 60 78 C52 69, 49 52, 49 37 Z" fill="white" />
                      
                      {/* IQR Text on Shield */}
                      <text x="60" y="60" fill="#8b1c14" fontSize="17" fontWeight="bold" textAnchor="middle" fontFamily="serif" letterSpacing="0.05em">IQR</text>
                      
                      {/* Tiny star on top of shield */}
                      <polygon points="60,14 62,19 67,19 63,22 65,27 60,24 55,27 57,22 53,19 58,19" fill="#8b1c14" />
                    </svg>
                    <div className="text-[11px] font-bold text-[#1d2d50] tracking-[0.25em] uppercase mt-2 font-serif">
                      IQR INTERNATIONAL
                    </div>
                  </div>

                  {/* CERTIFICATE Header */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1d2d50] tracking-[0.2em] font-light uppercase mb-6 text-center select-all">
                    CERTIFICATE
                  </h1>

                  {/* Certified Company Title */}
                  <div className="text-center max-w-2xl mb-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#8b1c14] tracking-wide uppercase leading-snug select-all">
                      ASLAN INTERNATIONAL DIŞ TİCARET GIDA KOZMETİK ANONİM ŞİRKETİ
                    </h2>
                    <p className="text-[10px] sm:text-xs text-neutral-600 font-sans tracking-wide mt-2 font-medium select-all">
                      MAHMUTBEY MAH. 2431. SOK. NO:81 BAĞCILAR / İSTANBUL / TÜRKİYE
                    </p>
                  </div>

                  {/* Assessment Compliance Statement */}
                  <div className="text-center max-w-xl my-4 border-t border-b border-neutral-200 py-3 text-[11px] sm:text-xs text-neutral-500 italic leading-relaxed">
                    <p>
                      Has been assessed and found to Comply with the Requirements of:
                    </p>
                    <p className="mt-0.5 font-medium text-neutral-600">
                      Denetlenmiş ve aşağıdaki standardın gerekliliklerine uygunluğu görülmüştür:
                    </p>
                  </div>

                  {/* Selected Certificate Code standard */}
                  <div className="text-center my-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1d2d50] tracking-widest uppercase select-all">
                      {selectedCert.id === 'iso-14001' ? 'ISO 14001:2015' : 
                       selectedCert.id === 'iso-9001' ? 'ISO 9001:2015' : 
                       selectedCert.id === 'gmp-cosmetics' ? 'ISO 22716:2007' : 
                       selectedCert.id === 'halal-cert' ? 'HALAL CERTIFICATE' : 
                       selectedCert.id === 'haccp-hazard' ? 'HACCP SYSTEM' : 
                       'ISO 45001:2018'}
                    </div>
                    
                    {/* Specific Subtitles depending on standard */}
                    <p className="text-[11px] sm:text-xs text-neutral-700 font-serif mt-2 font-semibold">
                      {selectedCert.id === 'iso-14001' ? 'The Environmental Management System is applicable to:' :
                       selectedCert.id === 'iso-9001' ? 'The Quality Management System is applicable to:' :
                       selectedCert.id === 'gmp-cosmetics' ? 'Good Manufacturing Practices (GMP) (Cosmetics) is applicable to:' :
                       selectedCert.id === 'halal-cert' ? 'The Halal Cosmetics Management System is applicable to:' :
                       selectedCert.id === 'haccp-hazard' ? 'The Hazard Analysis Critical Control Point System is applicable to:' :
                       'The Occupational Health & Safety Management System is applicable to:'}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-[#8b1c14] font-sans mt-0.5 italic font-medium">
                      {selectedCert.id === 'iso-14001' ? 'Çevre Yönetim Sistemi:' :
                       selectedCert.id === 'iso-9001' ? 'Kalite Yönetim Sistemi:' :
                       selectedCert.id === 'gmp-cosmetics' ? 'Kozmetikte İyi Üretim Uygulamaları:' :
                       selectedCert.id === 'halal-cert' ? 'Helal Kozmetik Yönetim Sistemi:' :
                       selectedCert.id === 'haccp-hazard' ? 'Tehlike Analizi Kritik Kontrol Noktaları:' :
                       'İş Sağlığı ve Güvenliği Yönetim Sistemi:'}
                    </p>
                  </div>

                  {/* True Registered Scope Statement */}
                  <div className="text-center max-w-2xl bg-neutral-50/80 border border-neutral-100 p-4 my-2">
                    <p className="text-xs font-serif font-bold text-neutral-800 tracking-wide leading-relaxed uppercase select-all">
                      MANUFACTURING, SALES AND MARKETING OF PERFUME AND COSMETIC PRODUCTS
                    </p>
                    <p className="text-[10px] sm:text-xs font-sans font-bold text-[#8b1c14] tracking-wide leading-relaxed mt-1.5 uppercase select-all">
                      PARFÜM VE KOZMETİK ÜRÜNLERİNİN İMALATI, SATIŞI VE PAZARLAMASI
                    </p>
                  </div>

                  {/* Registered Certificate Metadata Grid */}
                  <div className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-4 border border-neutral-200 bg-white p-4 my-6 text-center shadow-sm">
                    <div>
                      <div className="text-[8px] sm:text-[9px] text-neutral-500 font-bold tracking-wider uppercase">
                        Certificate Number
                      </div>
                      <div className="text-[8px] text-neutral-400 font-medium uppercase mt-0.5">
                        Belge Numarası
                      </div>
                      <div className="text-xs font-mono font-bold text-[#1d2d50] mt-1.5 select-all">
                        {selectedCert.id === 'iso-14001' ? 'EMS-13694' : 
                         selectedCert.id === 'iso-9001' ? 'QMS-13695' : 
                         selectedCert.id === 'gmp-cosmetics' ? 'GMP-13696' : 
                         selectedCert.id === 'halal-cert' ? 'HAL-13697' : 
                         selectedCert.id === 'haccp-hazard' ? 'HAC-13698' : 
                         'OHS-13699'}
                      </div>
                    </div>

                    <div>
                      <div className="text-[8px] sm:text-[9px] text-neutral-500 font-bold tracking-wider uppercase">
                        Initial Cert. Date
                      </div>
                      <div className="text-[8px] text-neutral-400 font-medium uppercase mt-0.5">
                        İlk Belge Tarihi
                      </div>
                      <div className="text-xs font-mono font-bold text-neutral-800 mt-1.5 select-all">
                        09.04.2021
                      </div>
                    </div>

                    <div>
                      <div className="text-[8px] sm:text-[9px] text-neutral-500 font-bold tracking-wider uppercase">
                        Cert. Period
                      </div>
                      <div className="text-[8px] text-neutral-400 font-medium uppercase mt-0.5">
                        Belge Periyodu
                      </div>
                      <div className="text-xs font-mono font-bold text-neutral-800 mt-1.5">
                        3 Years
                      </div>
                    </div>

                    <div>
                      <div className="text-[8px] sm:text-[9px] text-neutral-500 font-bold tracking-wider uppercase">
                        Validity Date
                      </div>
                      <div className="text-[8px] text-neutral-400 font-medium uppercase mt-0.5">
                        Geçerlilik Tarihi
                      </div>
                      <div className="text-xs font-mono font-bold text-[#8b1c14] mt-1.5 select-all">
                        08.04.2027
                      </div>
                    </div>
                  </div>

                  {/* Bottom Verification Section: Seals & Signatures */}
                  <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-8 items-center border-t border-neutral-200 pt-6 mt-2 text-center">
                    
                    {/* Left: Approved Blue Signature */}
                    <div className="flex flex-col items-center">
                      <div className="relative w-36 h-12 flex items-center justify-center">
                        {/* Realistic handwriting vector */}
                        <svg className="absolute w-full h-full text-blue-600 opacity-80" viewBox="0 0 150 50">
                          <path d="M15,35 Q35,10 65,32 T115,18 T135,22 Q110,42 75,39 T25,35" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M45,18 Q62,38 88,12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        {/* Circular stamp behind */}
                        <div className="absolute w-12 h-12 rounded-full border border-blue-500/25 flex items-center justify-center transform rotate-12">
                          <div className="text-[5px] text-blue-500/40 font-bold uppercase leading-none text-center">
                            APPROVED<br/>IQR<br/>ONAY
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-neutral-300 w-36 mt-1" />
                      <div className="text-[8px] text-neutral-800 font-bold mt-1 uppercase tracking-wider">
                        IQR Sertifikasyon Onayı
                      </div>
                      <div className="text-[7px] text-neutral-500 uppercase font-sans">
                        Authorized Signature
                      </div>
                    </div>

                    {/* Middle: Ornate security seal */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full border-2 border-neutral-300 flex items-center justify-center bg-transparent p-1 relative shadow-sm">
                        <div className="absolute inset-0.5 rounded-full border border-dashed border-neutral-400" />
                        <div className="text-[6px] text-neutral-500 text-center font-bold tracking-tighter uppercase leading-none">
                          IQR<br/>REGISTRAR<br/>STAMP
                        </div>
                      </div>
                      <div className="text-[7px] text-neutral-400 uppercase mt-1.5 font-sans">
                        Official Security Seal
                      </div>
                    </div>

                    {/* Right: IAS Accredited Block badge logo */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-center gap-1.5 border border-neutral-300 p-1.5 bg-white shadow-sm max-w-[165px]">
                        <div className="bg-[#1f4c2c] text-white font-extrabold text-sm px-2 py-1 tracking-wider leading-none select-none">
                          IAS
                        </div>
                        <div className="text-left leading-none">
                          <div className="text-[8px] font-extrabold text-neutral-800 tracking-wider">ACCREDITED</div>
                          <div className="text-[5px] text-neutral-500 font-sans mt-0.5 uppercase tracking-tighter">Management Systems</div>
                          <div className="text-[6px] font-bold text-neutral-700 font-mono mt-0.5">MSCB-135</div>
                        </div>
                      </div>
                      <div className="text-[7px] text-neutral-500 uppercase mt-1.5 font-sans">
                        Accreditation Body
                      </div>
                    </div>

                  </div>

                  {/* Bottom Registrar Office Footer */}
                  <div className="w-full max-w-2xl border-t border-neutral-100 pt-4 mt-6 text-center text-[7px] sm:text-[8px] text-neutral-400 leading-relaxed font-sans">
                    <div className="font-bold text-neutral-500">
                      IQR ULUSLARARASI BELGELENDİRME HİZMETLERİ LTD. ŞTİ.
                    </div>
                    <div>
                      Beşevler Mah. Kocayunus Sk. No:3 Arslan Han Plaza K:2 Nilüfer / BURSA
                    </div>
                    <div>
                      Tel: +90.224.266 00 16 Faks: +90.224.249 41 13 | www.iqrcert.com | info@iqrcert.com
                    </div>
                  </div>

                </div>
              </div>
              
              {/* Controls footer for download and exit */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center bg-neutral-900 p-4">
                <button
                  onClick={() => handleDownload(selectedCert)}
                  className="px-6 py-3 bg-amber-400 text-black hover:bg-white font-bold text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {downloadingId === selectedCert.id ? (
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : downloadSuccessId === selectedCert.id ? (
                    <Check className="w-4 h-4 text-emerald-800" />
                  ) : (
                    <Download className="w-4 h-4" />
                  )}
                  {downloadingId === selectedCert.id 
                    ? (isRtl ? 'جاري التحميل...' : 'DOWNLOADING PDF...') 
                    : downloadSuccessId === selectedCert.id 
                      ? (isRtl ? 'تم تحميل الملف بنجاح' : 'DOWNLOAD SUCCESSFUL') 
                      : (isRtl ? 'تحميل المستند الرسمي PDF' : 'DOWNLOAD SECURE PDF')}
                </button>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs tracking-widest uppercase transition-all border border-white/10 cursor-pointer"
                >
                  {isRtl ? 'العودة للشهادات' : 'BACK TO CERTIFICATES'}
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

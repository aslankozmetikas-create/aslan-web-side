import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Sparkles, Send, Building2, User, Globe2, Package, Mail, Phone, MessageSquare, Hash } from 'lucide-react';
import { Language } from '../types';

interface BrandProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export default function BrandProjectModal({ isOpen, onClose, language }: BrandProjectModalProps) {
  const isRtl = language === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    country: '',
    productTypes: [] as string[],
    expectedQuantity: '1000-5000',
    email: '',
    phone: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const productOptions = [
    { id: 'skincare', ar: 'العناية بالبشرة', en: 'Skincare', tr: 'Cilt Bakımı', it: 'Cura della Pelle' },
    { id: 'makeup', ar: 'المكياج ومستحضرات التجميل', en: 'Makeup & Cosmetics', tr: 'Makyaj ve Kozmetik', it: 'Trucco e Cosmetici' },
    { id: 'serums', ar: 'السيرومات والزيوت الفاخرة', en: 'Serums & Facial Oils', tr: 'Serumlar ve Yağlar', it: 'Sieri e Oli Viso' },
    { id: 'foundation', ar: 'كريم الأساس والبودرة', en: 'Foundation & Powder', tr: 'Fondöten ve Pudra', it: 'Fondotinta e Cipria' },
    { id: 'lipcare', ar: 'العناية بالشفاه وأحمر الشفاه', en: 'Lipstick & Lip Care', tr: 'Ruj ve Dudak Bakımı', it: 'Rossetto e Cura Labbra' },
    { id: 'personalcare', ar: 'العناية الشخصية والشعر', en: 'Personal & Hair Care', tr: 'Kişisel ve Saç Bakımı', it: 'Cura Personale e Capelli' }
  ];

  const handleProductToggle = (id: string) => {
    if (formData.productTypes.includes(id)) {
      setFormData({ ...formData, productTypes: formData.productTypes.filter(item => item !== id) });
    } else {
      setFormData({ ...formData, productTypes: [...formData.productTypes, id] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      companyName: '',
      country: '',
      productTypes: [],
      expectedQuantity: '1000-5000',
      email: '',
      phone: '',
      notes: ''
    });
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleCloseAll = () => onClose();
    window.addEventListener('close-all-modals', handleCloseAll);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('close-all-modals', handleCloseAll);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="fixed inset-0 z-[99999] flex items-start justify-center pt-28 pb-8 px-4 sm:px-6 overflow-y-auto bg-black/90 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`relative w-full max-w-3xl bg-zinc-950 border border-amber-400/30 p-6 sm:p-10 text-white shadow-2xl my-8 overflow-hidden rounded-none ${
            isRtl ? 'text-right dir-rtl' : 'text-left dir-ltr'
          }`}
        >
          {/* Subtle Ambient Golden Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full filter blur-[120px] pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 text-neutral-400 hover:text-amber-400 transition-colors z-10 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-white uppercase tracking-wider">
                {isRtl ? 'تم استلام طلبك بنجاح' : 'PROJECT REQUEST RECEIVED'}
              </h3>
              <p className="text-sm text-neutral-300 max-w-lg mx-auto font-light leading-relaxed">
                {isRtl
                  ? 'شكراً لتواصلك مع أسلان الدولية. سيتواصل معك مستشار العلامات التجارية الخاص بنا خلال 24 ساعة لبدء رحلة إنتاج علامتك.'
                  : 'Thank you for contacting ASLAN INTERNATIONAL. Our brand consultant will reach out to you within 24 hours to begin your journey.'}
              </p>
              <button
                onClick={handleReset}
                className="mt-6 px-8 py-3.5 bg-amber-400 text-black hover:bg-amber-300 font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer"
              >
                {isRtl ? 'إغلاق' : 'CLOSE'}
              </button>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="mb-8 border-b border-white/10 pb-6">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-sans tracking-[0.3em] uppercase mb-2 font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {isRtl ? 'طلب مشروع العلامة الخاصة' : 'PRIVATE LABEL PROJECT REQUEST'}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-light text-white uppercase tracking-wider">
                  {isRtl ? 'ابدأ رحلة إنشاء علامتك التجارية' : 'START YOUR BRAND JOURNEY'}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-light">
                  {isRtl
                    ? 'يرجى تعبئة التفاصيل أدناه وسيقوم فريقنا بدراسة متطلبات مشروعك وتقديم استشارة شاملة.'
                    : 'Please fill in the project details below and our team will prepare a comprehensive brand strategy consultation.'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-sans tracking-wider text-amber-300 uppercase font-bold flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span>{isRtl ? 'الاسم الكامل *' : 'FULL NAME *'}</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isRtl ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                      className="w-full bg-zinc-900/80 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Company/Brand Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-sans tracking-wider text-amber-300 uppercase font-bold flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{isRtl ? 'اسم الشركة أو العلامة التجارية *' : 'COMPANY / BRAND NAME *'}</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder={isRtl ? 'اسم علامتك أوالعلامة المقترحة' : 'Your brand or company name'}
                      className="w-full bg-zinc-900/80 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Country */}
                  <div className="space-y-2">
                    <label className="text-xs font-sans tracking-wider text-amber-300 uppercase font-bold flex items-center gap-1.5">
                      <Globe2 className="w-3.5 h-3.5" />
                      <span>{isRtl ? 'الدولة *' : 'COUNTRY *'}</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder={isRtl ? 'الدولة المستهدفة للبيع' : 'Country of operation / market'}
                      className="w-full bg-zinc-900/80 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Expected Quantity */}
                  <div className="space-y-2">
                    <label className="text-xs font-sans tracking-wider text-amber-300 uppercase font-bold flex items-center gap-1.5">
                      <Hash className="w-3.5 h-3.5" />
                      <span>{isRtl ? 'الكمية المتوقعة *' : 'EXPECTED QUANTITY *'}</span>
                    </label>
                    <select
                      value={formData.expectedQuantity}
                      onChange={(e) => setFormData({ ...formData, expectedQuantity: e.target.value })}
                      className="w-full bg-zinc-900/80 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="1000-5000">1,000 - 5,000 {isRtl ? 'قطع' : 'units'}</option>
                      <option value="5000-10000">5,000 - 10,000 {isRtl ? 'قطع' : 'units'}</option>
                      <option value="10000-50000">10,000 - 50,000 {isRtl ? 'قطع' : 'units'}</option>
                      <option value="50000+">50,000+ {isRtl ? 'قطع (إنتاج كثيف)' : 'units (High volume)'}</option>
                    </select>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-sans tracking-wider text-amber-300 uppercase font-bold flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" />
                      <span>{isRtl ? 'البريد الإلكتروني *' : 'EMAIL ADDRESS *'}</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-zinc-900/80 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-xs font-sans tracking-wider text-amber-300 uppercase font-bold flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{isRtl ? 'رقم الهاتف أو واتساب *' : 'PHONE / WHATSAPP *'}</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+90 555 000 0000"
                      className="w-full bg-zinc-900/80 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                </div>

                {/* Product Types Selection */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-sans tracking-wider text-amber-300 uppercase font-bold flex items-center gap-1.5 mb-2">
                    <Package className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'نوع المنتجات المطلوبة (اختر واحدًا أو أكثر)' : 'REQUIRED PRODUCT TYPES (SELECT ALL THAT APPLY)'}</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {productOptions.map((opt) => {
                      const selected = formData.productTypes.includes(opt.id);
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleProductToggle(opt.id)}
                          className={`px-3 py-2.5 text-xs text-right border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                            selected
                              ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-bold'
                              : 'bg-zinc-900/50 border-white/10 text-neutral-400 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          <span>{isRtl ? opt.ar : opt.en}</span>
                          {selected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Notes */}
                <div className="space-y-2">
                  <label className="text-xs font-sans tracking-wider text-amber-300 uppercase font-bold flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'ملاحظات وتفاصيل المشروع' : 'PROJECT NOTES & DETAILS'}</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={
                      isRtl
                        ? 'اذكر أية فكرة أو تركيبة خاصة أو مواصفات تغليف ترغب بها...'
                        : 'Mention any specific formulations, target launch date, or packaging ideas...'
                    }
                    className="w-full bg-zinc-900/80 border border-white/15 p-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-end gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-3.5 border border-white/15 text-neutral-400 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer"
                  >
                    {isRtl ? 'إلغاء' : 'CANCEL'}
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 text-black hover:bg-amber-300 font-bold text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                  >
                    {loading ? (
                      <span className="animate-pulse">{isRtl ? 'جاري الإرسال...' : 'SUBMITTING...'}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{isRtl ? 'إرسال طلب المشروع' : 'SUBMIT BRAND PROJECT'}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

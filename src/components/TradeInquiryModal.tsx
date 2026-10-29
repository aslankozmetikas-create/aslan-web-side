import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Sparkles, Send, Building2, User, Globe2, Package, Mail, Phone, MessageSquare, Truck, ShieldCheck, Layers } from 'lucide-react';
import { Language } from '../types';

interface TradeInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export default function TradeInquiryModal({ isOpen, onClose, language }: TradeInquiryModalProps) {
  const isRtl = language === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    requiredProduct: '',
    requiredQuantity: '',
    destinationCountry: '',
    shippingMethod: 'sea',
    contactInfo: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const shippingMethods = [
    {
      id: 'sea',
      title: { ar: 'شحن بحري (Sea Freight)', en: 'Sea Freight', tr: 'Deniz Taşımacılığı', it: 'Spedizione Marittima' },
      desc: { ar: 'للحمولات الكبيرة والشحنات الحاوية', en: 'Ideal for FCL & LCL bulk cargo', tr: 'Büyük ölçekli kargo konteynerleri', it: 'Ideale per carichi di grande volume' }
    },
    {
      id: 'air',
      title: { ar: 'شحن جوي (Air Freight)', en: 'Air Freight', tr: 'Hava Taşımacılığı', it: 'Spedizione Aerea' },
      desc: { ar: 'للشحنات السريعة والعاجلة', en: 'Fast & time-critical express cargo', tr: 'Hızlı ve acil ihracat sevkiyatları', it: 'Consigne veloci e urgenti' }
    },
    {
      id: 'land',
      title: { ar: 'شحن بري (Land Transport)', en: 'Land Freight', tr: 'Kara Taşımacılığı', it: 'Trasporto Terrestre' },
      desc: { ar: 'للربط الإقليمي والدول المجاورة', en: 'Regional overland door-to-door', tr: 'Bölgesel karayolu taşımacılığı', it: 'Trasporto regionale via strada' }
    }
  ];

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
      company: '',
      country: '',
      requiredProduct: '',
      requiredQuantity: '',
      destinationCountry: '',
      shippingMethod: 'sea',
      contactInfo: '',
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
        className="fixed inset-0 z-[99999] flex items-start justify-center pt-20 pb-8 px-4 sm:px-6 overflow-y-auto bg-black/90 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`relative w-full max-w-3xl bg-zinc-950 border border-amber-400/30 p-6 sm:p-10 text-white shadow-2xl my-8 overflow-hidden rounded-[20px] ${
            isRtl ? 'dir-rtl text-right' : 'dir-ltr text-left'
          }`}
        >
          {/* Header Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} z-10 w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-amber-400/50 transition-colors cursor-pointer`}
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <>
              {/* Modal Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">
                  <Globe2 className="w-4 h-4" />
                  <span>
                    {isRtl ? 'طلب تجاري والتوريد الدولي' : 'GLOBAL TRADE & BUSINESS INQUIRY'}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wider mb-2">
                  {isRtl ? 'طلب استفسار تجاري وشحن' : 'REQUEST A BUSINESS INQUIRY'}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 font-light">
                  {isRtl
                    ? 'يرجى تزويدنا بتفاصيل طلب الشراء والتوريد أو التصدير، وسيقوم فريق التجارة الدولية بالتواصل معكم مباشرة.'
                    : 'Please specify your trade, sourcing, or shipment requirements below. Our trade desk will respond promptly.'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isRtl ? 'الاسم' : 'Name'} *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isRtl ? 'الاسم الكامل' : 'Full Name'}
                      className="w-full bg-zinc-900/90 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isRtl ? 'الشركة' : 'Company'} *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={isRtl ? 'اسم الشركة أو المؤسسة' : 'Company Name'}
                      className="w-full bg-zinc-900/90 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                {/* 2. Country & Destination Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2 flex items-center gap-1.5">
                      <Globe2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isRtl ? 'الدولة' : 'Country'} *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder={isRtl ? 'دولة المقر الرئيسية' : 'Headquarters Country'}
                      className="w-full bg-zinc-900/90 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2 flex items-center gap-1.5">
                      <Globe2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isRtl ? 'بلد الوجهة / التصدير' : 'Destination Country'} *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.destinationCountry}
                      onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                      placeholder={isRtl ? 'الدولة المستهدفة للتسليم' : 'Target Destination Country'}
                      className="w-full bg-zinc-900/90 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                {/* 3. Required Product & Required Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2 flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isRtl ? 'المنتج المطلوب' : 'Required Product'} *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.requiredProduct}
                      onChange={(e) => setFormData({ ...formData, requiredProduct: e.target.value })}
                      placeholder={isRtl ? 'نوع المنتجات والمواصفات المطلوبة' : 'Product name or specifications'}
                      className="w-full bg-zinc-900/90 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isRtl ? 'الكمية المطلوبة' : 'Required Quantity'} *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.requiredQuantity}
                      onChange={(e) => setFormData({ ...formData, requiredQuantity: e.target.value })}
                      placeholder={isRtl ? 'مثال: 5000 وحدة / حاوية 20 قدم' : 'e.g., 5,000 units or 20ft container'}
                      className="w-full bg-zinc-900/90 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                {/* 4. Preferred Shipping Method */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isRtl ? 'طريقة الشحن المفضلة' : 'Preferred Shipping Method'}</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {shippingMethods.map((m) => {
                      const isSelected = formData.shippingMethod === m.id;
                      return (
                        <div
                          key={m.id}
                          onClick={() => setFormData({ ...formData, shippingMethod: m.id })}
                          className={`p-3.5 border rounded-lg cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-amber-400/10 border-amber-400 text-white'
                              : 'bg-zinc-900 border-white/10 text-neutral-400 hover:border-white/30'
                          }`}
                        >
                          <div className="text-xs font-bold text-amber-400 mb-1">
                            {isRtl ? m.title.ar : m.title.en}
                          </div>
                          <p className="text-[11px] text-neutral-400 font-light leading-tight">
                            {isRtl ? m.desc.ar : m.desc.en}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 5. Contact Information (Email or Phone) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isRtl ? 'بيانات التواصل (البريد أو الهاتف)' : 'Contact Information (Email / Phone)'} *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    placeholder={isRtl ? 'البريد الإلكتروني ورقم الهاتف مع المفتاح الدولي' : 'Email address & phone number with country code'}
                    className="w-full bg-zinc-900/90 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* 6. Additional Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isRtl ? 'ملاحظات إضافية' : 'Additional Notes'}</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={isRtl ? 'أي تفاصيل خاصة بتجميع الشحنات، الشهادات، أو التغليف' : 'Any special requirements regarding packaging, certificates, or delivery timeline'}
                    className="w-full bg-zinc-900/90 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 rounded-lg shadow-[0_0_20px_rgba(251,191,36,0.25)]"
                  >
                    {loading ? (
                      <span>{isRtl ? 'جاري إرسال الطلب...' : 'SENDING INQUIRY...'}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{isRtl ? 'إرسال الطلب التجاري' : 'SUBMIT BUSINESS INQUIRY'}</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </>
          ) : (
            /* Success State */
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/40 rounded-full flex items-center justify-center mx-auto text-amber-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-white uppercase tracking-wider">
                {isRtl ? 'تم استلام طلبك بنجاح' : 'INQUIRY RECEIVED SUCCESSFULLY'}
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                {isRtl
                  ? 'شكرًا لتواصلكم مع ASLAN INTERNATIONAL. سيتواصل معكم مسؤولو مكتب التجارة والتصدير الدولي خلال 24 ساعة بمقترح التوريد والشحن المناسب.'
                  : 'Thank you for reaching out to ASLAN INTERNATIONAL. Our global trade desk will review your requirements and respond within 24 hours.'}
              </p>
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-zinc-900 border border-amber-400/40 text-amber-300 hover:bg-amber-400/10 text-xs font-bold tracking-widest uppercase transition-colors rounded-lg cursor-pointer"
              >
                {isRtl ? 'إغلاق' : 'CLOSE'}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

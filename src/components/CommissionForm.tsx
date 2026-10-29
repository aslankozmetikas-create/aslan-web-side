import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Send, HelpCircle, FileText } from 'lucide-react';
import { Language, TRANSLATIONS } from '../types';

interface CommissionFormProps {
  language: Language;
}

export default function CommissionForm({ language }: CommissionFormProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    sector: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        sector: '',
        message: '',
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="commission" className="relative w-full bg-black py-24 sm:py-32 overflow-hidden border-t border-white/5">
      
      {/* Visual background framing lines */}
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-white/5 pointer-events-none" />
      <div className="absolute inset-y-0 right-1/4 w-[1px] bg-white/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs font-sans tracking-[0.4em] uppercase font-bold block mb-3">
            {isRtl ? 'صياغة الغد وشراكات المستقبل' : 'CUSTOM MANUFACTURING & COMMISSIONING'}
          </span>
          <h2 className="text-[41px] font-serif font-light text-white uppercase tracking-widest leading-tight" style={{ fontSize: '41px' }}>
            {t.commissionTitle}
          </h2>
          <p className="text-sm text-neutral-400 font-light mt-4 max-w-lg mx-auto leading-relaxed">
            {t.commissionSubtitle}
          </p>
          <div className="w-16 h-[1px] bg-amber-400 mx-auto mt-6" />
        </div>

        {/* Form Container */}
        <div className="bg-[#050505] border border-white/5 p-8 md:p-12 relative">
          
          {/* Subtle top visual line */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="partnership-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className={`flex flex-col gap-1.5 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <label className="text-[10px] text-neutral-500 font-sans tracking-widest uppercase font-semibold">
                      {t.fullName} <span className="text-amber-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={isRtl ? 'مثال: محمد أحمد' : 'e.g. John Doe'}
                      className={`bg-[#0d0d0d] border border-white/10 focus:border-amber-400 focus:outline-none px-4 py-3 text-sm text-white transition-all duration-300 rounded-none w-full ${
                        isRtl ? 'text-right' : 'text-left'
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div className={`flex flex-col gap-1.5 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <label className="text-[10px] text-neutral-500 font-sans tracking-widest uppercase font-semibold">
                      {t.email} <span className="text-amber-400">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className={`bg-[#0d0d0d] border border-white/10 focus:border-amber-400 focus:outline-none px-4 py-3 text-sm text-white transition-all duration-300 rounded-none w-full ${isRtl ? 'text-right' : 'text-left'}`}
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Company Name */}
                  <div className={`flex flex-col gap-1.5 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <label className="text-[10px] text-neutral-500 font-sans tracking-widest uppercase font-semibold">
                      {t.companyName} <span className="text-amber-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder={isRtl ? 'اسم شركتك أو علامتك التجارية' : 'Your brand or corporation'}
                      className={`bg-[#0d0d0d] border border-white/10 focus:border-amber-400 focus:outline-none px-4 py-3 text-sm text-white transition-all duration-300 rounded-none w-full ${
                        isRtl ? 'text-right' : 'text-left'
                      }`}
                    />
                  </div>

                  {/* Sector Selection */}
                  <div className={`flex flex-col gap-1.5 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <label className="text-[10px] text-neutral-500 font-sans tracking-widest uppercase font-semibold">
                      {t.sectorSelect} <span className="text-amber-400">*</span>
                    </label>
                    <select
                      required
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      className={`bg-[#0d0d0d] border border-white/10 focus:border-amber-400 focus:outline-none px-4 py-3 text-sm text-neutral-300 transition-all duration-300 rounded-none w-full appearance-none cursor-pointer ${
                        isRtl ? 'text-right' : 'text-left'
                      }`}
                    >
                      <option value="">{t.selectSectorPlaceholder}</option>
                      <option value="cosmetics">{isRtl ? 'مستحضرات التجميل والتركيبات الخاصة' : 'Cosmetics & Private Labeling'}</option>
                      <option value="industrial">{isRtl ? 'التعبئة والتغليف وحقن البلاستيك' : 'Plastic Molding & Smart Packaging'}</option>
                      <option value="logistics">{isRtl ? 'الخدمات اللوجستية وتأجير المستودعات' : 'Logistics, Shipping & Redundant Storage'}</option>
                    </select>
                  </div>

                </div>

                {/* Message Details */}
                <div className={`flex flex-col gap-1.5 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <label className="text-[10px] text-neutral-500 font-sans tracking-widest uppercase font-semibold">
                    {t.message} <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      isRtl
                        ? 'يرجى تقديم تفاصيل عن الكمية المستهدفة والمواصفات الفنية المبدئية ومجال الشراكة...'
                        : 'Describe your target quantities, technical requirements, or supply chain goals...'
                    }
                    className={`bg-[#0d0d0d] border border-white/10 focus:border-amber-400 focus:outline-none px-4 py-3 text-sm text-white transition-all duration-300 rounded-none w-full resize-none ${
                      isRtl ? 'text-right' : 'text-left'
                    }`}
                  />
                </div>

                {/* Submit button with loader */}
                <div className="pt-4">
                  <button
                    id="submit-commission-btn"
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-4 bg-white hover:bg-amber-400 text-black font-semibold tracking-widest text-xs uppercase transition-all duration-500 rounded-none shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>{t.submit}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="partnership-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 flex flex-col items-center gap-5"
              >
                <div className="w-16 h-16 bg-amber-400/10 border border-amber-400 rounded-none flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white uppercase tracking-widest">
                  {isRtl ? 'نشكرك على تواصلك الهادف' : 'COMMISSIONING SUCCESSFUL'}
                </h3>
                <p className="text-sm text-neutral-300 max-w-md leading-relaxed font-light">
                  {t.successMessage}
                </p>
                <button
                  id="reset-form-btn"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-8 py-2.5 border border-white/10 hover:border-amber-400 text-[10px] tracking-widest font-sans font-bold text-neutral-400 hover:text-amber-400 transition-all duration-300 cursor-pointer uppercase"
                >
                  {isRtl ? 'إرسال طلب آخر' : 'Submit Another Request'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

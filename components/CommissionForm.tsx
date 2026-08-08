import React, { useState } from 'react';
import { Language, TRANSLATIONS } from '../types';

interface CommissionFormProps {
  language: Language;
}

export default function CommissionForm({ language }: CommissionFormProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="commission" className="relative py-24 sm:py-32 bg-black border-t border-white/5">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img src="/earth.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className={`mb-10 ${isRtl ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl sm:text-4xl font-serif font-light uppercase tracking-wider">
            {t.commissionTitle}
          </h2>
          <p className="mt-4 text-neutral-400 text-sm leading-relaxed">{t.commissionSubtitle}</p>
          <div className="w-16 h-[1.5px] bg-amber-400 mt-6" />
        </div>

        {submitted ? (
          <div className="border border-amber-400/40 bg-amber-400/5 p-8 text-center">
            <p className="text-amber-400 text-sm tracking-wide">{t.successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={`space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
            <input
              required
              type="text"
              placeholder={t.fullName}
              className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-400/50"
            />
            <input
              required
              type="email"
              placeholder={t.email}
              className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-400/50"
            />
            <input
              type="text"
              placeholder={t.companyName}
              className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-400/50"
            />
            <select
              required
              defaultValue=""
              className="w-full bg-[#111] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400/50"
            >
              <option value="" disabled>
                {t.selectSectorPlaceholder}
              </option>
              <option value="cosmetics">Cosmetics / OEM</option>
              <option value="food">Healthy Food</option>
              <option value="private-label">Private Label</option>
              <option value="partnership">Partnership / Distribution</option>
              <option value="other">Other</option>
            </select>
            <textarea
              required
              rows={5}
              placeholder={t.message}
              className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-400/50 resize-y"
            />
            <button
              type="submit"
              className="w-full sm:w-auto border border-amber-400 bg-amber-400 text-black px-8 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-transparent hover:text-amber-400 transition-colors"
            >
              {t.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

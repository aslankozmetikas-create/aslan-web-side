import React from 'react';
import { motion } from 'motion/react';
import { METRICS_DATA, Language, getTranslation } from '../types';
import { Shield, Cpu, Compass, Users } from 'lucide-react';

interface MetricsProps {
  language: Language;
}

const METRIC_ICONS: Record<string, React.ReactNode> = {
  factories: <Shield className="w-5 h-5 text-amber-400" />,
  production: <Cpu className="w-5 h-5 text-amber-400" />,
  exports: <Compass className="w-5 h-5 text-amber-400" />,
  experts: <Users className="w-5 h-5 text-amber-400" />,
};

export default function Metrics({ language }: MetricsProps) {
  const isRtl = language === 'ar';

  return (
    <section id="metrics" className="relative w-full bg-[#050505] py-24 sm:py-32 border-t border-b border-white/5 overflow-hidden">
      
      {/* Visual background atmospheric elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className={`mb-16 md:mb-24 ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-amber-400 text-xs font-sans tracking-[0.4em] uppercase font-bold block mb-3">
            {isRtl ? 'حقائق وأرقام ومقاييس جودة' : 'METRICS & INDUSTRIAL PRESENCE'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight uppercase tracking-wider">
            {isRtl ? 'بناء الغد بسواعد التميز والابتكار' : 'SCALING THE HEIGHTS OF MODERN INDUSTRY'}
          </h2>
          <div className="w-24 h-[1px] bg-amber-400 mt-6" />
        </div>

        {/* 4-Column border-separated metrics grid - avoiding nested cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10 divide-y md:divide-y-0 lg:divide-x lg:divide-y-0 divide-white/10 bg-[#080808]">
          {METRICS_DATA.map((metric, idx) => {
            return (
              <motion.div
                id={`metric-${metric.id}`}
                key={metric.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`p-10 flex flex-col justify-between h-80 hover:bg-neutral-900/45 transition-colors duration-500 group ${
                  idx === 0 && isRtl ? 'lg:border-r-0' : ''
                }`}
              >
                {/* Icon indicator & tag */}
                <div className="flex items-center justify-between">
                  <div className="p-2 border border-white/5 bg-black/40 group-hover:border-amber-400/40 transition-colors duration-300">
                    {METRIC_ICONS[metric.id]}
                  </div>
                  <span className="text-[10px] font-sans font-bold text-neutral-500 tracking-widest group-hover:text-amber-400/80 transition-colors duration-300">
                    0{idx + 1}
                  </span>
                </div>

                {/* Major Metric Numbers */}
                <div className="my-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl sm:text-6xl font-serif font-extralight text-white tracking-tight group-hover:text-amber-400 transition-colors duration-500">
                      {metric.number}
                    </span>
                    {metric.suffix && (
                      <span className="text-2xl font-serif text-amber-400 font-light">
                        {metric.suffix}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-200 mt-3 tracking-wide">
                    {getTranslation(metric.label, language)}
                  </h3>
                </div>

                {/* Sub-explanation */}
                <p className="text-xs text-neutral-400 leading-relaxed font-light group-hover:text-neutral-300 transition-colors duration-300">
                  {getTranslation(metric.description, language)}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

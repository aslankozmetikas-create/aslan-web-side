import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Language } from '../types';
import BrandDevelopmentJourney from './BrandDevelopmentJourney';

interface BrandJourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onOpenProjectModal: () => void;
}

export default function BrandJourneyModal({
  isOpen,
  onClose,
  language,
  onOpenProjectModal
}: BrandJourneyModalProps) {
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

  const isRtl = language === 'ar';

  return (
    <AnimatePresence>
      <div 
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="fixed inset-0 z-[99999] flex items-start justify-center pt-28 pb-6 px-3 sm:px-6 overflow-y-auto bg-black/95 backdrop-blur-lg"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-6xl bg-[#030303] border border-amber-400/50 shadow-[0_0_60px_rgba(217,119,6,0.2)] overflow-hidden rounded-none text-white max-h-[calc(100vh-130px)] flex flex-col"
        >
          {/* Top Bar / Close Header */}
          <div className="sticky top-0 z-40 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-zinc-950 border-b border-amber-400/30">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-serif font-bold tracking-widest text-amber-300 uppercase">
                {isRtl ? 'رحلة تطوير العلامة التجارية (10 مراحل)' : 'BRAND DEVELOPMENT JOURNEY (10 STAGES)'}
              </span>
            </div>

            {/* High-visibility Close Button */}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-amber-400 text-black hover:bg-amber-300 transition-all cursor-pointer flex items-center gap-2 font-bold text-xs tracking-wider uppercase group shadow-lg border border-amber-300"
            >
              <span>{isRtl ? 'إغلاق' : 'CLOSE'}</span>
              <X className="w-4 h-4 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Body Content */}
          <div className="overflow-y-auto flex-1">
            <BrandDevelopmentJourney
              language={language}
              onOpenProjectModal={() => {
                onClose();
                onOpenProjectModal();
              }}
              onOpenConsultation={() => {
                onClose();
                onOpenProjectModal();
              }}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

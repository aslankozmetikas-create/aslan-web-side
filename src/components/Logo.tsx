import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const LOGO_SOURCES = [
  '/aslan-logo.png',
  '/aslan-logo-11.png',
  '/aslan-88.png'
];

export default function Logo({ className = "w-[180px] h-auto", showSubtitle = true, onClick, style }: LogoProps) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleImgError = () => {
    if (sourceIndex < LOGO_SOURCES.length - 1) {
      setSourceIndex(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };

  return (
    <div 
      id="aslan-logo-wrapper"
      onClick={onClick}
      style={style}
      className={`flex flex-col items-center justify-center select-none group ${onClick ? 'cursor-pointer hover:opacity-90 transition-all duration-300' : ''}`}
    >
      {!hasError ? (
        <img
          src={LOGO_SOURCES[sourceIndex]}
          onError={handleImgError}
          alt="ASLAN Group Logo 11"
          className={`${className} object-contain select-none pointer-events-none drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]`}
        />
      ) : (
        <div className={`flex flex-col items-center justify-center text-amber-400 ${className}`}>
          <span className="font-serif font-bold text-amber-400 tracking-[0.3em] text-2xl uppercase">ASLAN</span>
          {showSubtitle && <span className="font-sans text-[8px] tracking-[0.35em] text-amber-200/80 uppercase mt-0.5">GROUP INTERNATIONAL</span>}
        </div>
      )}
    </div>
  );
}







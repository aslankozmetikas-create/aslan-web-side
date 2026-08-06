import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Hero from './components/Hero';
import CompaniesGrid from './components/CompaniesGrid';
import CompanyModal from './components/CompanyModal';
import CommissionForm from './components/CommissionForm';
import SectorsSections from './components/SectorsSections';
import SectorPage from './components/SectorPage';
import CertificationsPage from './components/CertificationsPage';
import PartnershipModal from './components/PartnershipModal';
import LovabellaStorePage from './components/LovabellaStorePage';
import LovabellaBrandPage from './components/LovabellaBrandPage';
import Footer from './components/Footer';
import Brands3DShowcase from './components/Brands3DShowcase';
import { COMPANIES_DATA, CompanyDetails, Language, TRANSLATIONS } from './types';
import { motion } from 'motion/react';
import { Award, BadgeCheck, Handshake, Eye, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<CompanyDetails | null>(null);
  const [activeSectorId, setActiveSectorId] = useState<string | null>(null);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showBrands3D, setShowBrands3D] = useState(false);
  const [isPartnershipModalOpen, setIsPartnershipModalOpen] = useState(false);
  const [showLovabellaStorePage, setShowLovabellaStorePage] = useState(false);
  const [showLovabellaBrandPage, setShowLovabellaBrandPage] = useState(false);

  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  // Listen to browser popstate to ensure browser back button works naturally
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash === '#factory' || hash === '#cosmetics-factory') {
        const cosmeticsCompany = COMPANIES_DATA.find(c => c.id === 'cosmetics');
        if (cosmeticsCompany) {
          setSelectedCompany(cosmeticsCompany);
          setActiveSectorId(null);
          setShowCertifications(false);
          setShowBrands3D(false);
          setShowLovabellaStorePage(false);
          setShowLovabellaBrandPage(false);
          setIsPartnershipModalOpen(false);
          setIsMenuOpen(false);
          window.scrollTo(0, 0);
        }
      } else {
        setSelectedCompany(null);
        setActiveSectorId(null);
        setShowCertifications(false);
        setShowBrands3D(false);
        setShowLovabellaStorePage(false);
        setShowLovabellaBrandPage(false);
        setIsPartnershipModalOpen(false);
        setIsMenuOpen(false);
      }
    };

    if (window.location.hash === '#factory' || window.location.hash === '#cosmetics-factory') {
      const cosmeticsCompany = COMPANIES_DATA.find(c => c.id === 'cosmetics');
      if (cosmeticsCompany) {
        setSelectedCompany(cosmeticsCompany);
        window.scrollTo(0, 0);
      }
    }

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Apply body-level direction and font modifications based on language
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Add classy dark theme bg to root to prevent flash
    document.body.className = "bg-[#030303] text-white selection:bg-amber-400 selection:text-black overflow-x-hidden";
  }, [language, isRtl]);

  // Smooth scroll helper targeting elements safely
  const handleScrollToSection = (sectionId: string) => {
    // Hide certifications view when navigating to a section or sector page
    setShowCertifications(false);
    
    if (sectionId !== 'brands') {
      setShowBrands3D(false);
    }

    if (sectionId !== 'lovabella-brand' && sectionId !== 'lovabella') {
      setShowLovabellaBrandPage(false);
    }

    // Direct route navigation for LOVABELLA Brand page from side menu
    if (sectionId === 'lovabella-brand' || sectionId === 'lovabella') {
      setShowLovabellaBrandPage(true);
      setSelectedCompany(null);
      setActiveSectorId(null);
      setShowCertifications(false);
      setShowBrands3D(false);
      setShowLovabellaStorePage(false);
      setIsPartnershipModalOpen(false);
      setIsMenuOpen(false);
      window.scrollTo(0, 0);
      return;
    }

    // Direct route navigation for Cosmetics Factory page from side menu
    if (sectionId === 'cosmetics-factory' || sectionId === 'factory') {
      const cosmeticsCompany = COMPANIES_DATA.find(c => c.id === 'cosmetics');
      if (cosmeticsCompany) {
        setSelectedCompany(cosmeticsCompany);
        setActiveSectorId(null);
        setShowCertifications(false);
        setShowBrands3D(false);
        setShowLovabellaStorePage(false);
        setShowLovabellaBrandPage(false);
        setIsPartnershipModalOpen(false);
        setIsMenuOpen(false);

        if (window.location.hash !== '#factory') {
          window.history.pushState({ page: 'factory' }, '', '#factory');
        }

        window.scrollTo(0, 0);
        return;
      }
    }

    // If it's a sector page, navigate to that sector page immediately!
    const sectorIds = ['companies-cosmetics', 'food', 'private-label', 'global-trade', 'brands', 'software'];
    if (sectorIds.includes(sectionId)) {
      if (sectionId === 'brands') {
        setShowBrands3D(true);
        setIsMenuOpen(false);
        return;
      }
      setActiveSectorId(sectionId);
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Otherwise, close menu and go to home page first, then scroll!
    setActiveSectorId(null);
    setSelectedCompany(null);
    setIsMenuOpen(false);
    
    // Wait a tiny bit for the page transition to home, then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Offset slightly to account for the sticky header
        const yOffset = -90; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        // Fallback for form scrolling
        const formEl = document.getElementById('commission');
        if (formEl) {
          const yOffset = -90;
          const y = formEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 100);
  };

  const handleCloseCompanyModal = () => {
    setSelectedCompany(null);
    if (window.location.hash === '#factory' || window.location.hash === '#cosmetics-factory') {
      window.history.pushState('', '', window.location.pathname + window.location.search);
    }
  };

  const handleLogoClick = () => {
    setSelectedCompany(null);
    if (window.location.hash === '#factory' || window.location.hash === '#cosmetics-factory') {
      window.history.pushState('', '', window.location.pathname + window.location.search);
    }
    setActiveSectorId(null);
    setShowCertifications(false);
    setShowBrands3D(false);
    setShowLovabellaStorePage(false);
    setShowLovabellaBrandPage(false);
    setIsPartnershipModalOpen(false);
    setIsMenuOpen(false);
    window.dispatchEvent(new CustomEvent('close-all-modals'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-white overflow-x-hidden font-sans">
      
      {/* Immersive standalone 3D Brands showcase overlay */}
      {showBrands3D && (
        <Brands3DShowcase
          language={language}
          onLanguageChange={setLanguage}
          onClose={() => setShowBrands3D(false)}
          onContactClick={() => {
            setShowBrands3D(false);
            setTimeout(() => {
              handleScrollToSection('commission');
            }, 300);
          }}
        />
      )}

      {/* Clean dark canvas background */}

      {/* 1. Ultra-Premium Top Header Navigation */}
      <Header
        language={language}
        setLanguage={setLanguage}
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        onContactClick={() => handleScrollToSection('commission')}
        onLogoClick={handleLogoClick}
      />

      {/* 2. Interactive Split-Pane Side Menu Drawer */}
      <SideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        language={language}
        onNavigateToSection={handleScrollToSection}
        onLogoClick={handleLogoClick}
      />

      {/* The Cinematic Page Content Wrapper */}
      <motion.div
        animate={{
          scale: isMenuOpen ? 0.98 : 1,
          x: "0vw",
          borderRadius: "0px",
          boxShadow: "none",
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={() => {
          if (isMenuOpen) setIsMenuOpen(false);
        }}
        className={`relative z-20 w-full bg-[#030303] min-h-screen ${
          isMenuOpen ? 'cursor-pointer select-none overflow-hidden' : ''
        }`}
        style={{
          transformOrigin: "center center",
          height: isMenuOpen ? "100vh" : "auto", // lock height when open to prevent scrolling issues
          overflow: isMenuOpen ? "hidden" : "visible",
        }}
      >
        {showLovabellaBrandPage ? (
          <LovabellaBrandPage
            language={language}
            onBack={() => {
              setShowLovabellaBrandPage(false);
              window.scrollTo({ top: 0, behavior: 'auto' });
            }}
            onOpenStoreProgram={() => {
              setShowLovabellaBrandPage(false);
              setShowLovabellaStorePage(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : showLovabellaStorePage ? (
          <LovabellaStorePage
            language={language}
            onBack={() => {
              setShowLovabellaStorePage(false);
              setIsPartnershipModalOpen(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartStore={() => {
              setShowLovabellaStorePage(false);
              handleScrollToSection('commission');
            }}
          />
        ) : showCertifications ? (
          <CertificationsPage
            language={language}
            onBack={() => {
              setShowCertifications(false);
              window.scrollTo({ top: 0, behavior: 'auto' });
            }}
            onContactClick={() => {
              setShowCertifications(false);
              handleScrollToSection('commission');
            }}
          />
        ) : activeSectorId ? (
          <SectorPage
            sectorId={activeSectorId}
            language={language}
            onBack={() => {
              setActiveSectorId(null);
              window.scrollTo({ top: 0, behavior: 'auto' });
            }}
            onContactClick={() => {
              handleScrollToSection('commission');
            }}
          />
        ) : (
          <>
            {/* 3. Immersive Ken Burns Hero Carousel Slider */}
            <Hero
              language={language}
              onExploreClick={handleScrollToSection}
            />

            {/* 4. SCENIC JOURNEY SECTION (Parallax Backdrop & Value Cards - Inspired by Slide 7 & 8) */}
            <section id="scenic-values" className="relative w-full min-h-screen flex items-center justify-center py-24 sm:py-32 overflow-hidden bg-black">
              {/* Deep, highly atmospheric background showing scenic mountain coastal road at golden hour */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/privacy.png"
                  alt="Scenic Journey of Excellence"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.onerror = null;
                    img.src = '/privacy.png';
                  }}
                  className="w-full h-full object-cover opacity-35"
                />
                {/* Rich gradients to seamlessly blend the scene into black containers */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-[#050505]" />
              </div>

              <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                
                {/* Overarching Section Header */}
                <div className={`max-w-3xl mb-16 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <span className="text-amber-400 text-xs font-sans tracking-[0.4em] uppercase font-bold block mb-3">
                    {t.towardsExcellence}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight uppercase tracking-wider">
                    {t.precisionEngineering}
                  </h2>
                  <div className="w-16 h-[1.5px] bg-amber-400 mt-6" />
                </div>

                {/* 3-Column Values Grid with delicate borders (flat layout, no nested cards) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
                  
                  {/* Value 1: Formulation / Cosmetics */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`border border-white/5 bg-black/60 backdrop-blur-md p-8 hover:border-amber-400/40 transition-colors duration-500 flex flex-col justify-between min-h-[280px] h-auto rounded-[40px] w-full max-w-sm mx-auto ${
                      isRtl ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div className="p-3 border border-white/5 bg-black/40 w-fit rounded-xl">
                      <Award className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="mt-6">
                      <h3 
                        className="text-xl sm:text-2xl font-serif font-light text-white uppercase tracking-wide mb-2 min-h-[56px] flex items-end"
                      >
                        {t.qualityExcellence}
                      </h3>
                      <p className="text-xs text-neutral-400 leading-relaxed font-light">
                        {t.qualityExcellenceDesc}
                      </p>
                    </div>
                  </motion.div>

                  {/* Value 2: Robotics / Industry 4.0 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    onClick={() => {
                      setShowCertifications(true);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`border border-white/5 bg-black/60 backdrop-blur-md p-8 hover:border-amber-400/40 hover:bg-black/80 transition-all duration-500 flex flex-col justify-between min-h-[280px] h-auto cursor-pointer group/cert rounded-[40px] w-full max-w-sm mx-auto ${
                      isRtl ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="p-3 border border-white/5 bg-black/40 w-fit rounded-xl group-hover/cert:border-amber-400/30 transition-colors duration-500">
                        <BadgeCheck className="w-5 h-5 text-amber-400" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover/cert:text-amber-400 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-all duration-300" />
                    </div>
                    <div className="mt-6">
                      <h3 className="text-xl sm:text-2xl font-serif font-light text-white uppercase tracking-wide mb-2 min-h-[56px] flex items-end group-hover/cert:text-amber-400 transition-colors duration-300">
                        {t.globalCertifications}
                      </h3>
                      <p className="text-xs text-neutral-400 leading-relaxed font-light mb-1">
                        {t.globalCertificationsDesc}
                      </p>
                      <span className="text-[10px] text-amber-400/60 font-sans tracking-widest uppercase font-bold group-hover/cert:text-amber-400 transition-colors duration-300 inline-flex items-center gap-1 mt-2">
                        {t.viewDocuments} &rarr;
                      </span>
                    </div>
                  </motion.div>

                  {/* Value 3: Eco-Conscious Circular Economy */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={`border border-white/5 bg-black/60 backdrop-blur-md p-8 hover:border-amber-400/40 transition-colors duration-500 flex flex-col justify-between min-h-[280px] h-auto rounded-[40px] w-full max-w-sm mx-auto sm:col-span-2 lg:col-span-1 ${
                      isRtl ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div className="p-3 border border-white/5 bg-black/40 w-fit rounded-xl">
                      <Handshake className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="mt-6">
                      <h3 
                        className="text-xl sm:text-2xl font-serif font-light text-white uppercase tracking-wide mb-2 min-h-[56px] flex items-end"
                      >
                        {t.strategicPartnerships}
                      </h3>
                      <p className="text-xs text-neutral-400 leading-relaxed font-light">
                        {t.strategicPartnershipsDesc}
                      </p>
                    </div>
                  </motion.div>

                </div>

              </div>
            </section>

            {/* 6. Companies & Factories Interactive Card Grid (Slide 8 & 9 Layout) */}
            <CompaniesGrid
              language={language}
              onCompanySelect={(company) => {
                if (company.id === 'global-partnership') {
                  setIsPartnershipModalOpen(true);
                } else {
                  setSelectedCompany(company);
                }
              }}
            />

            {/* Detailed Business Pillars & Sectors Sections */}
            <SectorsSections
              language={language}
              onContactClick={() => handleScrollToSection('commission')}
              onSectorSelect={(id) => {
                if (id === 'brands') {
                  setShowBrands3D(true);
                  return;
                }
                setActiveSectorId(id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 8. Luxury B2B Commission & Partnership Request Form */}
            <CommissionForm language={language} />
          </>
        )}

        {/* 7. Advanced Company/Factory Full-Screen Detail Modal with Live Telemetry */}
        <CompanyModal
          company={selectedCompany}
          isOpen={selectedCompany !== null}
          onClose={handleCloseCompanyModal}
          language={language}
          onCtaClick={() => handleScrollToSection('commission')}
        />

        {/* Global Partnership Model Modal */}
        <PartnershipModal
          isOpen={isPartnershipModalOpen}
          onClose={() => setIsPartnershipModalOpen(false)}
          language={language}
          onOpenLovabellaStore={() => {
            setIsPartnershipModalOpen(false);
            setShowLovabellaStorePage(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onApplyDistributor={() => {
            setIsPartnershipModalOpen(false);
            handleScrollToSection('commission');
          }}
          onApplyStrategic={() => {
            setIsPartnershipModalOpen(false);
            handleScrollToSection('commission');
          }}
        />

        {/* 9. Elite Corporate Footer (Multi-column Center Monogram Alignment) */}
        <Footer
          language={language}
          onNavigateToSection={handleScrollToSection}
          onLogoClick={handleLogoClick}
        />
      </motion.div>

    </div>
  );
}

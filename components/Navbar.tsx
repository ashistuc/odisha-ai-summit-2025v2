import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { RegistrationModal } from './RegistrationModal';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Custom styles to clean up the Google Translate look
    const style = document.createElement('style');
    style.innerHTML = `
      .goog-te-gadget-simple {
        background-color: transparent !important;
        border: none !important;
        padding: 0 !important;
        font-size: 14px !important;
      }
      .goog-te-gadget-simple .goog-te-menu-value {
        color: #4a5568 !important; 
        display: flex !important;
        align-items: center !important;
        gap: 4px !important;
      }
      .goog-te-gadget-simple .goog-te-menu-value span {
        color: #4a5568 !important;
        font-weight: 500 !important;
      }
      /* Hide the default Google Translate widget off-screen */
      #google_translate_element {
        position: fixed !important;
        left: -10000px !important;
        top: -10000px !important;
        width: 1px !important;
        height: 1px !important;
        overflow: hidden !important;
      }
      .goog-te-banner-frame {
        display: none !important;
      }
      iframe.goog-te-banner-frame {
        display: none !important;
      }
      .goog-te-banner-frame.skiptranslate {
        display: none !important; 
      }
      body {
        top: 0px !important;
        position: static !important;
      }
    `;
    document.head.appendChild(style);

    const initGoogle = () => {
      const target = document.getElementById('google_translate_element');
      // Only initialize if not already populated
      if (target && target.childElementCount === 0 && (window as any).google && (window as any).google.translate) {
        console.log('Initializing Google Translate Widget...');
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,or',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.VERTICAL,
          autoDisplay: false,
          multilanguagePage: true,
        }, 'google_translate_element');
      }
    };

    // Define the global callback immediately
    (window as any).googleTranslateElementInit = initGoogle;

    // Check if script is already present or loaded
    if ((window as any).google && (window as any).google.translate) {
      initGoogle();
    } else {
      // Check if script tag exists but maybe not loaded yet
      if (!document.querySelector('script[src*="translate.google.com"]')) {
        const addScript = document.createElement('script');
        addScript.setAttribute('src', 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
      }
    }

    // Check for existing language cookie
    const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
    if (match && match[1]) {
      setCurrentLang(match[1]);
    }
  }, []);

  const toggleLanguage = (lang: string) => {
    setCurrentLang(lang);
    console.log(`Attempting to change language to: ${lang}`);

    // Set cookies to ensure persistence
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${lang}; path=/; domain=${domain}`;
    document.cookie = `googtrans=/en/${lang}; path=/;`;

    const changeLanguage = () => {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        console.log(`Found .goog-te-combo, setting value to ${lang}`);
        select.value = lang;
        select.dispatchEvent(new Event('change'));
      } else {
        console.log('Google Translate select element not found, retrying...');
      }
    };

    changeLanguage();
    // Retry a few times in case of rendering delay
    setTimeout(changeLanguage, 500);
    setTimeout(changeLanguage, 1000);
    setTimeout(changeLanguage, 2000);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Speakers', href: '#speakers' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-orange-200/30 py-3 shadow-lg shadow-orange-100/20' : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Three Organization Logos */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-2 shadow-[0_0_15px_rgba(255,107,53,0.1)] border border-orange-200/40"
            >
              <div className="h-8 sm:h-10 flex items-center">
                <img
                  src="/aisummit2025/assets/india_elc_it.png"
                  alt="Mission Logo"
                  className="h-full w-auto object-contain"
                />
              </div>

              <div className="h-6 sm:h-8 w-px bg-gradient-to-b from-transparent via-orange-300 to-transparent"></div>
              <div className="h-8 sm:h-10 flex items-center">
                <img
                  src="/aisummit2025/assets/Digital_India_logo.svg.png"
                  alt="OCAC Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="h-6 sm:h-8 w-px bg-gradient-to-b from-transparent via-orange-300 to-transparent"></div>
              <div className="h-8 sm:h-10 flex items-center">
                <img
                  src="/aisummit2025/assets/India_AI_logo.png"
                  alt="OCAC Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="h-6 sm:h-8 w-px bg-gradient-to-b from-transparent via-orange-300 to-transparent"></div>
              <div className="h-8 sm:h-10 flex items-center">
                <img
                  src="/aisummit2025/assets/1666094039681.jpg"
                  alt="OCAC Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="h-6 sm:h-8 w-px bg-gradient-to-b from-transparent via-orange-300 to-transparent"></div>
              <div className="h-8 sm:h-10 flex items-center">
                <img
                  src="/aisummit2025/assets/ocac-logo.png"
                  alt="OCAC Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </motion.div>




          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 uppercase tracking-wide relative group ${isScrolled ? 'text-gray-700 hover:text-neon-orange' : 'text-gray-700 hover:text-orange-800'
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            {/* Language Toggle & Hidden Google Translate Element 
            <div className="flex items-center bg-orange-50 rounded-full p-1 border border-orange-200 mr-4 shadow-inner">
              <button
                onClick={() => toggleLanguage('en')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1 ${currentLang === 'en'
                  ? 'bg-gradient-to-r from-neon-orange to-orange-600 text-white shadow-md transform scale-105'
                  : 'text-gray-500 hover:text-orange-600'
                  }`}
              >
                ENG
              </button>
              <button
                onClick={() => toggleLanguage('or')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1 ${currentLang === 'or'
                  ? 'bg-gradient-to-r from-neon-orange to-orange-600 text-white shadow-md transform scale-105'
                  : 'text-gray-500 hover:text-orange-600'
                  }`}
              >
                ODIA
              </button>
            </div>
            <div id="google_translate_element"></div>
*/}
            <Button
              variant="glow"
              className={`py-2 px-6 text-sm font-bold transition-all duration-300 ${isScrolled ? 'bg-neon-orange hover:bg-orange-600 shadow-[0_0_15px_rgba(255,107,53,0.4)]' : 'bg-neon-orange hover:bg-orange-600'
                }`}
              onClick={() => window.open('https://forms.gle/yjEjyL4bhSUW75mGA', '_blank')}
            >
              Register For Summit
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-neon-orange' : 'text-gray-700 hover:text-orange-800'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg border-b border-orange-200/40 p-6 md:hidden flex flex-col gap-6 animate-in slide-in-from-top-5 duration-300 shadow-2xl shadow-orange-100/30">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent mb-2"></div>
              {navLinks.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 300);
                  }}
                  className="text-gray-700 hover:text-neon-orange text-lg font-medium transition-all duration-300 hover:translate-x-2 border-l-2 border-transparent hover:border-orange-300 pl-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-orange-100">
                <Button
                  variant="glow"
                  className="w-full bg-neon-orange hover:bg-orange-600 shadow-[0_0_20px_rgba(255,107,53,0.4)]"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open('https://forms.gle/yjEjyL4bhSUW75mGA', '_blank');
                  }}
                >
                  Register For Summit
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

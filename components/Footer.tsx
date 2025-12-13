import React from 'react';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 md:pt-20 md:pb-10 border-t border-orange-200/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-neon-orange to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">

          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <img
                src="/odisha-ai-summit-2025v2/assets/Odisha_Ai_Summit.png"
                alt="Odisha AI Summit 2025"
                className="h-12 sm:h-16 md:h-20 object-contain"
              />
              <p className="text-gray-400 max-w-sm leading-relaxed text-sm sm:text-base">
                Empowering the state through ethical, inclusive, and scalable Artificial Intelligence. Organized by the Electronics & IT Department, Govt of Odisha.
              </p>
            </div>


            <div className="flex gap-4">
              {/* X (Twitter) */}
              <a href="x.com/EIT_Odisha" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-orange hover:border-neon-orange transition-all hover:shadow-[0_0_15px_rgba(255,107,53,0.5)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/EIT.Odisha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-orange hover:border-neon-orange transition-all hover:shadow-[0_0_15px_rgba(255,107,53,0.5)]">
                <Facebook size={18} />
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/eitodisha/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-orange hover:border-neon-orange transition-all hover:shadow-[0_0_15px_rgba(255,107,53,0.5)]">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold font-display tracking-wide mb-4 md:mb-6">Explore</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm sm:text-base">
              <li><a href="#about" className="hover:text-neon-blue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-neon-purple rounded-full"></span> About</a></li>
              <li><a href="#tracks" className="hover:text-neon-blue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-neon-purple rounded-full"></span> Tracks</a></li>
              <li><a href="#agenda" className="hover:text-neon-blue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-neon-purple rounded-full"></span> Agenda</a></li>
              <li><a href="#speakers" className="hover:text-neon-blue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-neon-purple rounded-full"></span> Speakers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold font-display tracking-wide mb-4 md:mb-6">Contact</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-neon-purple mt-1 flex-shrink-0" />
                <span>odishaaisummit2025@odisha.gov.in</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-neon-purple mt-1 flex-shrink-0" />
                <span className="text-sm">
                  OCAC Building, Plot No. N-1/7-D, Acharya Vihar, Bhubaneswar - 751013
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-600">
          <p className="text-center md:text-left">&copy; 2025 Electronics & IT Dept, Govt of Odisha.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
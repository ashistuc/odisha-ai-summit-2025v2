import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { motion } from 'framer-motion';

const speakers = [
  { name: "Narendra Modi", role: "Prime Minister of India", img: "/odisha-ai-summit-2025v2/assets/Pm_Modi.png" },
  { name: "Mohan Charan Majhi ", role: "Chief Minister of Odisha", img: "/odisha-ai-summit-2025v2/assets/Mohan_Charan_Majhi.jpg" },
];

export const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-16 md:py-24 bg-gradient-to-br from-white via-orange-50 to-orange-100 relative border-t border-orange-200/30">
       {/* Decorative gradient */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-orange to-transparent opacity-30"></div>

      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Distinguished Guests" title="Key Speakers" />
        
        <div className="grid md:grid-cols-2 gap-8 mt-8 md:mt-12 max-w-2xl mx-auto">
          {speakers.map((speaker, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group text-center"
            >
              <div className="relative mb-6 sm:mb-8 mx-auto w-44 h-44 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-br from-neon-orange via-orange-400 to-orange-500 shadow-2xl">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-orange to-orange-500 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Distinguished badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-orange rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-bold">★</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-neon-orange transition-colors duration-300">{speaker.name}</h3>
              <p className="text-sm sm:text-base text-gray-700 font-medium">{speaker.role}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-neon-orange to-orange-400 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
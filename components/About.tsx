import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Cpu, Globe, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 relative z-10 border-b border-orange-200/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mb-8 lg:mb-0"
          >
            <div className="absolute inset-0 bg-neon-purple/10 blur-[100px] rounded-full"></div>
            <img
              src="/odisha-ai-summit-2025v2/assets/12.jpg"
              alt="Digital Transformation & AI Innovation"
              className="relative z-10 rounded-2xl shadow-[0_0_30px_rgba(255,107,53,0.3)] border border-orange-200/30 w-full"
            />
            {/* Adjusted positioning for mobile to stay within bounds */}
            <div className="absolute -bottom-6 right-4 sm:-right-6 bg-odisha-secondary p-4 sm:p-6 rounded-xl border border-neon-blue/30 shadow-xl z-20">
              <div className="text-3xl sm:text-4xl font-display font-bold text-gray-800 mb-1">100+</div>
              <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Delegates</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading subtitle="About The Event" title="𝐒𝐡𝐨𝐰𝐜𝐚𝐬𝐞 𝐘𝐨𝐮𝐫 𝐀𝐈 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧𝐬 𝐚𝐭 𝐭𝐡𝐞 𝐎𝐝𝐢𝐬𝐡𝐚 𝐀𝐈 𝐒𝐮𝐦𝐦𝐢𝐭 𝟮𝟬𝟮𝟱!" align="left" />
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              OdishaAI Summit 2025 is a two-day pre-summit to the Global IndiaAI Impact Summit 2026. The event brings together leaders from government, academia, and industry to shape India’s AI future. Hosted in Bhubaneswar, it highlights Odisha’s growing role as a hub for innovation and focuses on research, governance, healthcare, language technology, and the state’s long-term AI vision. The summit sets the stage for collaboration and practical pathways that advance inclusive and responsible AI adoption.


            </p>



          </motion.div>
        </div>
      </div>
    </section>
  );
};
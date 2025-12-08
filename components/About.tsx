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
              src="assets/12.jpg"
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
              The We’re excited to invite AI-driven organizations and startups to join us at the <span className="text-neon-purple font-semibold"> Odisha AI Summit 2025 on 19th-20th December at the State Convention Centre, Bhubaneswar.</span> This summit, as a pre-event to the India AI Summit 2026, aims to unite policymakers, industry leaders, startups, and academia to explore AI’s transformative role.

            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
              One of the key components of the summit will be the Experience Zones, where selected innovators will showcase live solutions across but not limited to sectors like agriculture, healthcare, disaster management, mobility, governance, and more.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: <Globe className="text-neon-blue" />, text: "Global Perspective" },
                { icon: <Cpu className="text-neon-purple" />, text: "Deep Tech Focus" },
                { icon: <Lightbulb className="text-neon-gold" />, text: "Actionable Insights" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4 bg-orange-50/50 rounded-lg border border-orange-200/50 hover:bg-orange-100/50 transition-colors">
                  <div className="mb-2 p-2 bg-orange-100 rounded-full">{item.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
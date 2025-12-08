import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, HeartPulse, ShieldAlert, Bus, GraduationCap, Building2, Brain } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

const visionPoints = [
  {
    icon: <Sprout className="w-8 h-8" />,
    title: "Agriculture Automation",
    desc: "AI-driven crop monitoring, soil health analysis, and yield prediction for farmers.",
    color: "text-orange-600",
    bg: "bg-orange-100",
    border: "border-orange-200"
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Healthcare AI",
    desc: "Predictive diagnostics and AI-powered telemedicine access for rural Odisha.",
    color: "text-red-500",
    bg: "bg-red-100",
    border: "border-red-200"
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: "Disaster Resilience",
    desc: "Real-time cyclone tracking and flood management using predictive intelligence.",
    color: "text-orange-500",
    bg: "bg-orange-100",
    border: "border-orange-200"
  },
  {
    icon: <Bus className="w-8 h-8" />,
    title: "Mobility Intelligence",
    desc: "Smart traffic management and public transport optimization.",
    color: "text-blue-500",
    bg: "bg-blue-100",
    border: "border-blue-200"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Smart Education",
    desc: "Personalized AI tutors and vernacular literacy tools for students.",
    color: "text-yellow-500",
    bg: "bg-yellow-100",
    border: "border-yellow-200"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Smart Governance",
    desc: "Data-driven decision making for transparent and efficient public service.",
    color: "text-purple-500",
    bg: "bg-purple-100",
    border: "border-purple-200"
  }
];

export const VisionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-100 relative">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff6b3508_1px,transparent_1px),linear-gradient(to_bottom,#ff6b3508_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12 md:mb-16">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-neon-purple font-mono mb-4 text-sm sm:text-base"
            >
                <Brain size={18} />
                <span>FUTURE READY ODISHA</span>
            </motion.div>
            <SectionHeading subtitle="" title="Odisha AI Vision 2025–2030" />
            <p className="text-gray-600 max-w-2xl text-center mt-4 text-sm sm:text-base">
                Positioning Odisha as India’s most future-ready state by enabling AI-driven transformation across key sectors.
            </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visionPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass-card p-6 sm:p-8 rounded-2xl border ${item.border} hover:border-opacity-100 transition-all group relative overflow-hidden`}
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 ${item.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className={`mb-6 p-4 rounded-xl ${item.bg} ${item.color} w-fit`}>
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-display tracking-wide">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
              
              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-${item.color.split('-')[1]}-200/20`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
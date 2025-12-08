import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Scale, Users, Sprout, Briefcase, HeartPulse } from 'lucide-react';

const tracks = [
  {
    icon: <Scale size={24} />,
    title: "AI in Governance",
    desc: "Implementing AI for transparent, efficient, and data-driven public administration.",
    color: "from-blue-600 to-blue-400"
  },
  {
    icon: <Briefcase size={24} />,
    title: "Future of Work",
    desc: "Reskilling the workforce for the AI era and fostering a startup ecosystem.",
    color: "from-purple-600 to-purple-400"
  },
  {
    icon: <Sprout size={24} />,
    title: "Agri-Tech & Rural AI",
    desc: "Leveraging predictive models for crop yield, soil health, and market linkages.",
    color: "from-green-600 to-green-400"
  },
  {
    icon: <HeartPulse size={24} />,
    title: "Healthcare Innovation",
    desc: "AI diagnostics and telemedicine solutions for accessible last-mile healthcare.",
    color: "from-red-600 to-red-400"
  },
  {
    icon: <Users size={24} />,
    title: "Ethics & Inclusion",
    desc: "Ensuring responsible AI that is unbiased, safe, and accessible to all citizens.",
    color: "from-orange-600 to-orange-400"
  }
];

export const SummitTracks: React.FC = () => {
  return (
    <section id="tracks" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-orange-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ff6b35 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading subtitle="Focus Areas" title="Summit Tracks" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 to-transparent rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
              <div className="relative h-full bg-white/90 backdrop-blur-sm border border-orange-200/50 p-6 rounded-2xl hover:border-neon-orange/50 transition-colors flex flex-col items-center text-center shadow-lg">
                <div className="mb-6 p-4 bg-neon-orange/10 rounded-2xl text-neon-orange group-hover:scale-110 transition-transform duration-300">
                  {track.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 font-display">{track.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{track.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
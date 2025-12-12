import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Map, Lightbulb, GraduationCap, Languages, HeartPulse, Server, Building2 } from 'lucide-react';

const tracks = [
  {
    icon: <Map size={24} />,
    title: "AI Transformation Roadmaps for Indian States",
    desc: "A strategic discussion on how Indian states can build scalable, citizen-first AI ecosystems.",
    color: "from-blue-600 to-blue-400"
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Impact of AI Research and Innovation",
    desc: "Insights from leading researchers on breakthroughs shaping the next generation of AI solutions.",
    color: "from-purple-600 to-purple-400"
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Future of Education through AI",
    desc: "A look at how AI can personalise learning and expand access to high-quality education.",
    color: "from-green-600 to-green-400"
  },
  {
    icon: <Languages size={24} />,
    title: "Building AI for Odia",
    desc: "Transforming Odia from a low-resource language into one that thrives in the AI ecosystem.",
    color: "from-red-600 to-red-400"
  },
  {
    icon: <HeartPulse size={24} />,
    title: "AI for Healthcare",
    desc: "Driving conversations on AI that strengthens diagnostics, healthcare access, and patient outcomes.",
    color: "from-orange-600 to-orange-400"
  },
  {
    icon: <Server size={24} />,
    title: "Laying the Foundation for Data Centres in Odisha",
    desc: "A deep dive into Odisha's roadmap for infrastructure that powers AI and digital growth.",
    color: "from-orange-600 to-orange-400"
  },
  {
    icon: <Building2 size={24} />,
    title: "AI for Governance",
    desc: "Discussions on using AI to enhance efficiency, transparency, and service delivery in government.",
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
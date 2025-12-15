import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { NeuralBackground } from './ui/NeuralBackground';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] pt-24 pb-12 overflow-hidden bg-gradient-to-br from-white via-orange-50 to-orange-100 flex flex-col justify-center items-center">
      {/* Dynamic Background */}
      <NeuralBackground />
      <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-neon-purple/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-neon-orange/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>

      {/* Logos */}


      <div className="container mx-auto px-4 z-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-20 lg:mt-8">

        {/* Left: Text Content */}
        <div className="space-y-6 text-center lg:text-left relative order-2 lg:order-1">
          {/* Summit Logos */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-4 mb-4"
          >
            <img
              src="/aisummit2025/assets/Odisha_Ai_Summit.png"
              alt="Odisha AI Summit Logo"
              className="h-16 sm:h-20 md:h-24 object-contain"
            />
            <img
              src="/aisummit2025/assets/Ai_summit.jpeg"
              alt="Mission Logo"
              className="h-16 sm:h-20 md:h-24 object-contain"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-gray-800">
              ODISHA<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-orange-600 to-neon-orange text-glow">
                𝐀𝐈 𝐒𝐮𝐦𝐦𝐢𝐭 𝟮𝟬𝟮𝟱
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 my-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md"
            >
              <Calendar className="text-neon-purple w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-gray-700 text-sm sm:text-base font-display tracking-wider">19th-20th December, 2025</span>
            </motion.div>

            <div className="mt-4 sm:mt-6 mb-6 p-4 sm:p-6 rounded-2xl glass-card-strong border-l-4 border-l-neon-purple max-w-xl mx-auto lg:mx-0">
              <p className="text-orange-600 text-xs sm:text-sm uppercase tracking-widest mb-1">Pre-event to</p>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-display">IndiaAI Impact Summit 2026</h3>
            </div>

            <p className=" text-justify text-gray-600 text-base sm:text-md max-w-full mx-auto lg:mx-0 font-light leading-relaxed">
              Experience Odisha’s growing leadership in AI innovation, with the state emerging as a frontrunner in accelerating sector-wide AI adoption. This two-day pre-summit to the Global IndiaAI Impact Summit 2026 brings together brings together experts, policymakers, and industry leaders to demonstrate how AI is already improving outcomes across sectors and to align stakeholders around Odisha’s long-term AI vision, priorities, and partnerships for the future diverse group of experts and stakeholders.

              <br />

              The summit also seeks to build a shared vision for the State’s AI journey, align departments and partners on strategic priorities, and catalyse new collaborations, especially around talent, infrastructure, research, and scalable public-sector AI solutions.

            </p>
          </motion.div>

          <motion.div
            className=" w-full justify-center lg:justify-start pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >

            <a href="/aisummit2025/Latest_Summit_Agenda_19th_20th.pdf" download="Latest_Summit_Agenda_19th_20th.pdf" className="inline-block">
              <Button variant="outline" className="text-base sm:text-lg w-full sm:w-auto">
                Download Agenda
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Right: Map Visualization */}
        <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center z-10 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full animate-float flex items-center justify-center p-4"
          >
            <img
              src="/aisummit2025/assets/odisha-map.png"
              alt="Odisha Map"
              className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,107,53,0.4)]"
              style={{
                maxWidth: '95%',
                maxHeight: '95%',
                filter: 'sepia(1) hue-rotate(-10deg) saturate(3) brightness(1.1) contrast(1.2)'
              }}
            />

            {/* Deep Glow Pulse Behind Map */}
            <div className="absolute inset-0 bg-neon-orange/20 blur-3xl rounded-full animate-pulse-slow pointer-events-none"></div>

            {/* Tech Nodes/Circles Overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {/* Bhubaneswar Node */}
              <div className="absolute top-[46%] left-[68%]">
                <div className="w-4 h-4 bg-neon-orange rounded-full animate-ping absolute"></div>
                <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,107,53,1)] relative z-10"></div>
              </div>

              {/* Other Nodes */}
              <div className="absolute top-[30%] left-[40%] w-2 h-2 bg-neon-orange rounded-full animate-pulse opacity-60"></div>
              <div className="absolute bottom-[35%] left-[30%] w-2 h-2 bg-neon-orange rounded-full animate-pulse delay-75 opacity-60"></div>
            </motion.div>

            {/* Venue Card */}
            <motion.div
              className="absolute top-[35%] left-[69%] glass-card px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg flex items-center gap-2 sm:gap-3 border-l-2 border-l-neon-orange transform -translate-y-1/2 -translate-x-1/2 w-max max-w-[150px] sm:max-w-none shadow-lg"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <MapPin className="text-neon-orange w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
              <div className="text-left">
                <div className="text-[10px] sm:text-xs text-orange-600 uppercase font-semibold">Venue</div>
                <div className="text-xs sm:text-sm font-bold text-gray-800 leading-tight">
                  State Convention Centre,<br />Bhubaneswar
                </div>
                <a href="https://share.google/n9qG012XBRQNh7lwy" target="_blank" rel="noopener noreferrer" className="text-xs text-orange-600 sm:text-sm font-bold text-gray-800 leading-tight">Direction</a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* QR Code - Creative Floating Design - Fixed Position */}


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce hidden sm:block"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};
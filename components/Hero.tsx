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
      <div className="absolute top-20 sm:top-24 left-0 right-0 z-30 container mx-auto px-4 flex justify-between items-start pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg p-2 flex items-center gap-2 sm:gap-3 shadow-[0_0_20px_rgba(255,107,53,0.15)] border border-orange-200/50 pointer-events-auto max-w-[70%] sm:max-w-none"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <img src="assets/1666094039681.jpg" alt="Govt Logo" className="w-full h-full p-1 object-contain" />
          </div>
          <div className="text-gray-800 text-[9px] sm:text-[10px] leading-tight font-bold border-l border-orange-300 pl-2">
            Electronics & Information<br />
            <span className="text-neon-orange">Technology Department</span><br />
            Government of Odisha
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg p-2 shadow-[0_0_20px_rgba(255,107,53,0.15)] border border-orange-200/50 pointer-events-auto hidden sm:block"
        >
          <div className="flex items-center gap-2">
            <div className="text-gray-800 font-bold text-sm tracking-widest font-display">OCAC</div>
            <div className="text-[8px] text-gray-600 leading-tight border-l border-gray-300 pl-2">
              Odisha Computer<br />Application Centre
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 z-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-20 lg:mt-8">

        {/* Left: Text Content */}
        <div className="space-y-6 text-center lg:text-left relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-tight tracking-tight mb-2 text-gray-800">
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
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-display">India AI Impact Summit 2026</h3>
            </div>

            <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              We’re excited to invite AI-driven organizations and startups to join us at the Odisha AI Summit 2025 on 19th-20th December at the State Convention Centre, Bhubaneswar.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button variant="glow" onClick={() => document.getElementById('proposals')?.scrollIntoView({ behavior: 'smooth' })} className="text-base sm:text-lg px-8 w-full sm:w-auto">
              Call For Proposals
            </Button>
            <Button variant="outline" className="text-base sm:text-lg w-full sm:w-auto">
              Download Brochure
            </Button>
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
              src="assets/odisha-map.png"
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
              <div className="absolute top-[55%] left-[70%]">
                <div className="w-4 h-4 bg-neon-orange rounded-full animate-ping absolute"></div>
                <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,107,53,1)] relative z-10"></div>
              </div>

              {/* Other Nodes */}
              <div className="absolute top-[30%] left-[40%] w-2 h-2 bg-neon-orange rounded-full animate-pulse opacity-60"></div>
              <div className="absolute bottom-[35%] left-[30%] w-2 h-2 bg-neon-orange rounded-full animate-pulse delay-75 opacity-60"></div>
            </motion.div>

            {/* Venue Card */}
            <motion.div
              className="absolute top-[55%] left-[72%] glass-card px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg flex items-center gap-2 sm:gap-3 border-l-2 border-l-neon-orange transform -translate-y-1/2 -translate-x-1/2 w-max max-w-[150px] sm:max-w-none shadow-lg"
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
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* QR Code - Creative Floating Design - Fixed Position */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10, x: 50 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          x: 0,
          y: [0, -12, 0],
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
          x: {
            duration: 0.8,
            ease: "easeOut"
          },
          y: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
        whileHover={{
          scale: 1.08,
          rotate: 3,
          y: -5,
          transition: { duration: 0.3 }
        }}
        className="fixed bottom-6 sm:bottom-8 right-4 sm:right-6 z-[100] pointer-events-auto"
      >
        {/* Animated Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-neon-orange/15 to-transparent rounded-2xl blur-xl animate-pulse-slow"></div>

        {/* Main QR Card */}
        <div className="relative glass-card-strong p-4 sm:p-5 rounded-2xl border border-orange-200/50 backdrop-blur-xl shadow-[0_0_30px_rgba(255,107,53,0.3),0_0_60px_rgba(255,140,66,0.2)] overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-purple/50 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-neon-blue/30 rounded-full blur-2xl"></div>
          </div>

          {/* QR Code Image with Glow */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255,107,53,0.4)",
                  "0 0 30px rgba(255,140,66,0.4)",
                  "0 0 20px rgba(255,107,53,0.4)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 bg-white rounded-xl mb-2"
            >
              <img
                src="assets/Odisha_qr.png"
                alt="Scan QR Code"
                className="w-28 h-28 sm:w-36 sm:h-36 object-contain"
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-1 bg-neon-purple rounded-full animate-pulse"></div>
              <p className="text-gray-700 text-[11px] sm:text-xs text-center font-semibold tracking-wide">
                Scan for more info
              </p>
              <div className="w-1 h-1 bg-neon-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Animated Scan Line Effect */}
            <motion.div
              animate={{ y: [0, 144, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-70"
              style={{ maxHeight: '144px' }}
            ></motion.div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-neon-purple opacity-60"></div>
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-neon-purple opacity-60"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-neon-blue opacity-60"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-neon-blue opacity-60"></div>
        </div>

        {/* Floating Particles */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-2 -right-2 w-2 h-2 bg-neon-purple rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-neon-blue rounded-full blur-sm"
        ></motion.div>
      </motion.div>

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
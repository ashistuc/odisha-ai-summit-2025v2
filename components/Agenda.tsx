import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Clock, MapPin, CalendarDays } from 'lucide-react';

const schedule = {
  day1: [
    { time: "09:00 AM - 10:00 AM", title: "Registration & Networking", desc: "Badge collection and morning coffee with industry peers.", location: "Main Foyer", type: "General" },
    { time: "10:00 AM - 11:30 AM", title: "Inaugural Ceremony", desc: "Lighting of the lamp by Hon'ble CM & Keynote Address on 'Odisha's AI Vision'.", location: "Main Auditorium", type: "Keynote" },
    { time: "11:30 AM - 01:00 PM", title: "Plenary Session: AI for All", desc: "A high-level discussion on democratization of Artificial Intelligence in public sectors.", location: "Main Auditorium", type: "Panel" },
    { time: "01:00 PM - 02:00 PM", title: "Networking Lunch", desc: "Traditional Odia cuisine and networking.", location: "Dining Hall", type: "Break" },
    { time: "02:00 PM - 04:00 PM", title: "Sector Specific Tracks", desc: "Concurrent sessions: AI in Agriculture (Hall A), Health (Hall B), Education (Hall C).", location: "Convention Halls", type: "Track" },
    { time: "04:00 PM - 05:30 PM", title: "Startup Innovation Showcase", desc: "Live pitches and demos from top 20 selected AI startups.", location: "Experience Zone", type: "Showcase" }
  ],
  day2: [
    { time: "09:30 AM - 11:00 AM", title: "Workshops & Masterclasses", desc: "Hands-on session on Generative AI tools for governance.", location: "Workshop Rooms", type: "Workshop" },
    { time: "11:00 AM - 12:30 PM", title: "Panel: Ethics, Privacy & Policy", desc: "Framing the regulatory landscape for responsible AI adoption.", location: "Main Auditorium", type: "Panel" },
    { time: "12:30 PM - 01:30 PM", title: "Lunch Break", desc: "Networking lunch.", location: "Dining Hall", type: "Break" },
    { time: "01:30 PM - 03:30 PM", title: "Hackathon Finale", desc: "Presentations by finalists of the Odisha AI Hackathon.", location: "Main Auditorium", type: "Competition" },
    { time: "03:30 PM - 05:00 PM", title: "Valedictory Ceremony", desc: "Awards distribution and closing remarks by the IT Secretary.", location: "Main Auditorium", type: "Keynote" }
  ]
};

export const Agenda: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  return (
    <section id="agenda" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-100 relative overflow-hidden">
       {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-3 pointer-events-none"></div>
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading subtitle="Event Schedule" title="Summit Agenda" />

        {/* Day Toggle */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="bg-orange-100/50 p-1 rounded-full border border-orange-200/50 flex relative backdrop-blur-sm overflow-hidden sm:overflow-visible">
            {['day1', 'day2'].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day as 'day1' | 'day2')}
                className={`relative px-4 sm:px-10 py-2 sm:py-3 rounded-full text-xs sm:text-base font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeDay === day
                    ? 'bg-neon-orange text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <CalendarDays size={16} className="sm:w-[18px] sm:h-[18px]" />
                {day === 'day1' ? 'Day 1: Dec 19' : 'Day 2: Dec 20'}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-5xl mx-auto relative">
           {/* Center Vertical Line (Desktop) */}
           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-orange/40 to-transparent hidden md:block transform -translate-x-1/2"></div>

           {/* Left Vertical Line (Mobile) */}
           <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-200/50 to-transparent md:hidden"></div>

          <AnimatePresence mode='wait'>
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 sm:space-y-8"
            >
              {schedule[activeDay].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-4 sm:gap-8 relative ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Dot */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white border-2 border-neon-orange transform -translate-x-1/2 mt-5 sm:mt-6 z-10 shadow-[0_0_10px_#ff6b35] flex items-center justify-center">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-neon-orange rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`md:w-1/2 pl-10 sm:pl-12 ${index % 2 === 0 ? 'md:pl-12 md:pr-0' : 'md:pr-12 md:pl-0'}`}>
                    <div className={`p-5 sm:p-6 rounded-2xl border border-orange-200/50 bg-gradient-to-br from-orange-50/50 to-white/50 hover:bg-orange-100/50 hover:border-neon-orange/50 transition-all group ${
                        index % 2 !== 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      <div className={`flex items-center gap-2 text-neon-blue font-mono text-xs sm:text-sm mb-2 sm:mb-3 ${
                          index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <Clock size={14} />
                        {item.time}
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-neon-orange transition-colors font-display">{item.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">{item.desc}</p>
                      
                      <div className={`flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-gray-600 uppercase tracking-wider ${
                          index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                         <div className="flex items-center gap-1">
                            <MapPin size={12} />
                            {item.location}
                         </div>
                         <span className="w-1 h-1 rounded-full bg-orange-300 hidden sm:block"></span>
                         <span className={`px-2 py-0.5 rounded border ${
                            item.type === 'Break' ? 'text-gray-600 bg-orange-50 border-orange-200' : 'text-neon-orange bg-orange-100 border-neon-orange/30'
                         }`}>{item.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty space for the other side to maintain grid balance */}
                  <div className="md:w-1/2 hidden md:block"></div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
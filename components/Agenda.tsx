import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Clock, MapPin, CalendarDays } from 'lucide-react';

const schedule = {
  day1: [
    {
      time: "10:30 AM - 11:30 AM",
      title: "Opening Ceremony",
      desc: "Key Wins, Speeches from Dignitaries, MoU Signing",
      location: "Venue 1 (Main Hall)",
      type: "Keynote",
      speakers: [
        "Mr Vishal Dev (Principal Secretary, Odisha) - Welcome Remarks",
        "Mr Abhishek Singh (Additional Sec, MeitY)",
        "Mr Manoj Ahuja (Chief Secretary, Odisha)",
        "Mr S Krishnan (Secretary, MeitY)",
        "Ms Niyaruti Rai (CEO, Invest India)",
        "Dr Mukesh Mahaling (IT Minister, Odisha)",
        "Mr Omar Sultân Al Olama (Minister of State for AI, UAE)",
        "Mr Ashwini Vaishnaw (Cabinet Minister, MeitY)",
        "Shri Dharmendra Pradhan (Cabinet Minister)",
        "Mr Manas Panda - Vote of Thanks"
      ]
    },
    {
      time: "11:30 AM - 12:00 PM",
      title: "Break",
      desc: "",
      location: "Main Hall",
      type: "Break"
    },
    {
      time: "12:00 PM - 1:30 PM",
      title: "Breakout Session 1: Transformation Roadmaps for AI in Indian States",
      desc: "Moderator: Mr Gaurav Goel - CEO, Samagra. IT Secretaries of 7 states including Mr Vishal Dev (Odisha), Mr Sanjay Kumar (Telangana), Mr Anurag Yadav (Uttar Pradesh), Mr Virendra Singh (Maharashtra), Mr Neetu Kumari Prasad (Madhya Pradesh), Dr Manjula N (Karnataka), Mr K.S. Gopinath-Narayeen (Assam) - Director Equivalent Will Attend, Ms Debjani Ghosh (Chief Architect - NITI Frontier Tech Hub)",
      location: "Venue 1 (Main Hall)",
      type: "Panel"
    },
    {
      time: "1:30 PM - 2:30 PM",
      title: "Lunch",
      desc: "",
      location: "Dining Hall",
      type: "Break"
    },
    {
      time: "2:30 PM - 4:00 PM",
      title: "Breakout Session 2 & 3",
      desc: "Session 2: Impact of AI Research and Innovation (Venue 1) | Session 3: Path.AI - Unlocking the future of education through AI (Venue 2)",
      location: "Venue 1 & 2",
      type: "Panel",
      sessions: [
        {
          venue: "Venue 1 (Main Hall)",
          title: "Impact of AI Research and Innovation",
          moderator: "Prof. Mayank Vatsa - Microsoft",
          speakers: [
            "Mr R Bavindan (Head, Wadhwani School of Data Science and AI, IIT Madras)",
            "Mr Prasant Mohapatra (Provost, University of South Florida)",
            "Mr Venu Govindaraju (Senior Vice President for Research, Innovation & Economic Development, SUNY Buffalo University)",
            "Mr Manish Mahajan (Chief AI Officer, University of Utah)",
            "Mr Ashwini K Nanda (Center Director, MHRC, IIT-Bhubaneswar)",
            "Prof Lakshmidhar Behera (Director, IIT Mandi)"
          ]
        },
        {
          venue: "Venue 2 (Conference Hall)",
          title: "Path.AI - Unlocking the future of education through AI",
          moderator: "Simran Bagga, Program Coordinator, AI Powered Odisha",
          speakers: [
            "Dr Manish Gupta (Senior Director, Google DeepMind)",
            "Prof Chitta Baral (Arizona State University)",
            "Mr Ashish Ghosh (Director, IIIT Bhubaneswar)",
            "Ms Pragya Mitra (India Public Policy Lead, OpenAI)",
            "Ms. Ajaya K Mohanty",
            "Prof Sukamar Mishra (Director, ISM-Dhanbad)",
            "Mr Prathyush-Kumar (Co-Founder, Sarvaim)"
          ]
        }
      ]
    },
    {
      time: "4:00 PM - 5:00 PM",
      title: "Keynote Speaker Talk + Q&A",
      desc: "Mr Ravi Kumar S (CEO, Cognizant)",
      location: "Venue 1 (Main Hall)",
      type: "Keynote"
    },
    {
      time: "5:00 PM Onwards",
      title: "Cultural Event",
      desc: "",
      location: "Main Hall",
      type: "General"
    }
  ],
  day2: [
    {
      time: "10:30 AM - 12:00 PM",
      title: "Breakout Session 4 & 5",
      desc: "Session 4: Bhasha.AI - Building AI for Odia (Venue 1) | Session 5: Swasth.AI - AI for Healthcare (Venue 2)",
      location: "Venue 1 & 2",
      type: "Panel",
      sessions: [
        {
          venue: "Venue 1 (Main Hall)",
          title: "Bhasha.AI - Building AI for Odia",
          moderator: "Dipankar Rath, AI Consultant, OCAC",
          speakers: [
            "Dr. Bijay Ketan Upadhyaya, IAS (Secretary, Odisha Language Literature & Culture Department)",
            "Mr. Vivek Raghavan (Co-Founder, Sarvam)",
            "Mr Amitabh Nag (CEO, BHASHINI)",
            "Mr Ashwini K Nanda (Center Director, AHRC, IIT-Bhubaneswar)",
            "Mr Pradeep Rout (Head, Odia Virtual Academy)",
            "Prof Nalini Ratha (SUNY-Buffalo)"
          ]
        },
        {
          venue: "Venue 2 (Conference Hall)",
          title: "Swasth.AI - AI for Healthcare",
          moderator: "Prattusha Mukhopadhyay, Samagra Governance",
          speakers: [
            "Ms Aswathy S (Secretary, Department of H&FW, Odisha)",
            "Mr Priyadarshi Mohapatra (Founder & CEO, CureBay)",
            "Prof Tapan Gandhi (Professor, IIT Delhi)",
            "Dr. Debasis Dash (Director, Institute of Life Sciences, Bhubaneswar)",
            "Ms Poorva Malaviya (Head of Engineering, Noora Health)",
            "Dr. Chinmay Dwibedi (Group Leader, Umee)",
            "Dr Prachi Karkhanis (Expert - MEL & Gender, Wadhwani AI)"
          ]
        }
      ]
    },
    {
      time: "12:00 PM - 1:00 PM",
      title: "Keynote Speaker Talk + Q&A",
      desc: "Mr Aravind Srinivas (CEO, Perplexity AI)",
      location: "Venue 1 (Main Hall)",
      type: "Keynote"
    },
    {
      time: "1:00 PM - 2:00 PM",
      title: "Lunch",
      desc: "",
      location: "Dining Hall",
      type: "Break"
    },
    {
      time: "2:00 PM - 3:30 PM",
      title: "Breakout Session 7 & 8",
      desc: "Session 7: Laying the Foundation for Data Centres in Odisha (Venue 1) | Session 8: Sushasan.AI - AI for Governance (Venue 2)",
      location: "Venue 1 & 2",
      type: "Panel",
      sessions: [
        {
          venue: "Venue 1 (Main Hall)",
          title: "Laying the Foundation for Data Centres in Odisha",
          speakers: [
            "Mr Manas Panda (MD, OCAC)",
            "Mr Ramaly Kapoor (EVP Investments, Tillman Global Holdings)",
            "Mr Siddharth Reddy (VP Strategy, Yotta)",
            "Mr Rohan Sheth (Head Data Centres, Yotta)",
            "Mr Prakhar Sharma (Head Marketing, AdaniConnex)"
          ]
        },
        {
          venue: "Venue 2 (Conference Hall)",
          title: "Sushasan.AI - AI for Governance",
          moderator: "Vijeeth Srinivas, Program Lead, AI Powered Odisha",
          speakers: [
            "Dr Arabinda Kumar Padhee (Principal Secretary, Department of A&FE, Odisha)",
            "Mr Bodhisattwa (Bodhi) Sanghapriya (Founder & CEO, IG Drones)",
            "Mr Gaurav Achha (Co-Founder and Co-CEO, BonV Aero)",
            "Shri Surendra Kumar (Additional Chief Secretary, GA&PG)",
            "Mr Vineet Bhardwaj (Centre for Modernising Government Initiative)",
            "Mr Murthy Adivi (Faculty of Emerging Technology, Wadhwani Foundation)",
            "Dr Niladri Bihari Mohanty (It. Director(IT) & Head, AI & Innovation Cell, NIC, Odisha, GoI)",
            "Ms Maya Sherman (AI Expert, GPAI and Innovation Advisor, Israel Embassy)"
          ]
        }
      ]
    },
    {
      time: "3:30 PM - 4:00 PM",
      title: "Tea Break",
      desc: "",
      location: "",
      type: "Break"
    },
    {
      time: "4:00 PM - 6:00 PM",
      title: "Closing Ceremony",
      desc: "Dignitaries: Mr Vishal Dev (Principal Secretary, Department of E&IT, Odisha), Ms Anu Garg (Development Commissioner, Odisha), Mr Akhil Kumar (CEO, Digital India Corporation), Mr Nand Kumarum (CEO, NeGD)",
      location: "Venue 1 (Main Hall)",
      type: "Keynote"
    }
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
                className={`relative px-4 sm:px-10 py-2 sm:py-3 rounded-full text-xs sm:text-base font-bold transition-all duration-300 flex items-center gap-2 ${activeDay === day
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
                  className={`flex flex-col md:flex-row gap-4 sm:gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Center Dot */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white border-2 border-neon-orange transform -translate-x-1/2 mt-5 sm:mt-6 z-10 shadow-[0_0_10px_#ff6b35] flex items-center justify-center">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-neon-orange rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`md:w-1/2 pl-10 sm:pl-12 ${index % 2 === 0 ? 'md:pl-12 md:pr-0' : 'md:pr-12 md:pl-0'}`}>
                    <div className={`p-5 sm:p-6 rounded-2xl border border-orange-200/50 bg-gradient-to-br from-orange-50/50 to-white/50 hover:bg-orange-100/50 hover:border-neon-orange/50 transition-all group ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'
                      }`}>
                      <div className={`flex items-center gap-2 text-neon-blue font-mono text-xs sm:text-sm mb-2 sm:mb-3 ${index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'
                        }`}>
                        <Clock size={14} />
                        {item.time}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-neon-orange transition-colors font-display">{item.title}</h3>

                      {item.desc && (
                        <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">{item.desc}</p>
                      )}

                      {/* Speakers List */}
                      {item.speakers && item.speakers.length > 0 && (
                        <div className="mt-4 mb-4 text-left">
                          <h4 className="text-sm font-bold text-orange-600 mb-2">Speakers:</h4>
                          <ul className="space-y-1.5 text-xs text-gray-700">
                            {item.speakers.map((speaker: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-neon-orange mt-1">•</span>
                                <span>{speaker}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Nested Sessions (for parallel breakout sessions) */}
                      {item.sessions && item.sessions.length > 0 && (
                        <div className="mt-4 space-y-4 text-left">
                          {item.sessions.map((session: any, sessionIdx: number) => (
                            <div key={sessionIdx} className="border-l-2 border-orange-300 pl-4 py-2 bg-white/30 rounded">
                              <div className="text-xs font-semibold text-orange-500 mb-1">{session.venue}</div>
                              <h5 className="text-sm font-bold text-gray-800 mb-1">{session.title}</h5>
                              {session.moderator && (
                                <p className="text-xs text-gray-600 italic mb-2">Moderator: {session.moderator}</p>
                              )}
                              {session.speakers && session.speakers.length > 0 && (
                                <ul className="space-y-1 text-xs text-gray-700 mt-2">
                                  {session.speakers.map((speaker: string, speakerIdx: number) => (
                                    <li key={speakerIdx} className="flex items-start gap-2">
                                      <span className="text-orange-400 mt-0.5">▸</span>
                                      <span>{speaker}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      <div className={`flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-gray-600 uppercase tracking-wider mt-4 ${index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'
                        }`}>
                        {item.location && (
                          <>
                            <div className="flex items-center gap-1">
                              <MapPin size={12} />
                              {item.location}
                            </div>
                            <span className="w-1 h-1 rounded-full bg-orange-300 hidden sm:block"></span>
                          </>
                        )}
                        <span className={`px-2 py-0.5 rounded border ${item.type === 'Break' ? 'text-gray-600 bg-orange-50 border-orange-200' : 'text-neon-orange bg-orange-100 border-neon-orange/30'
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
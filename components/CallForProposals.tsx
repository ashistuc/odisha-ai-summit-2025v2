import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Rocket, Users, Globe, ArrowRight, AlertTriangle } from 'lucide-react';
import { Button } from './ui/Button';

const BenefitCard = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="glass-card p-6 rounded-2xl border-t border-t-neon-orange/50 bg-gradient-to-b from-orange-50/50 to-white/50 hover:bg-orange-100/50 transition-colors"
  >
    <div className="mb-4 p-3 bg-neon-orange/20 rounded-lg w-fit text-neon-orange">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-gray-800 mb-2 font-display">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const RequirementItem = ({ text, delay }: { text: string, delay: number }) => (
  <motion.li
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="flex items-start gap-3 text-gray-700 text-sm sm:text-base"
  >
    <CheckCircle2 className="w-5 h-5 text-neon-blue mt-0.5 flex-shrink-0" />
    <span>{text}</span>
  </motion.li>
);

export const CallForProposals: React.FC = () => {
  return (
    <section id="proposals" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-white via-orange-50/50 to-orange-100">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-neon-purple/3 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-neon-purple uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-2 block"
          >
            Innovation Showcase
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-neon-orange text-glow-gold mb-6 sm:mb-8 uppercase tracking-tight"
          >
            Call For Proposals
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-700 leading-relaxed"
          >
            We’re excited to invite AI-driven organizations and startups to join us at the <span className="text-neon-purple font-semibold">Odisha AI Summit 2025</span>.
            One of the key components of the summit will be the <span className="text-neon-orange font-semibold">Experience Zones</span>,
            where selected innovators will showcase live solutions across sectors like agriculture, healthcare, disaster management, mobility, governance, and more.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-16">

          {/* Left: Why Participate */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-1 h-6 sm:h-8 bg-neon-orange rounded-full"></span>
              Why Participate?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <BenefitCard
                icon={<Users size={24} />}
                title="Showcase Solutions"
                desc="Present your AI innovations directly to government officials, industry experts, and potential adopters."
                delay={0.1}
              />
              <BenefitCard
                icon={<Globe size={24} />}
                title="Real-world Impact"
                desc="Demonstrate the tangible impact of your innovations in real-world applications and scenarios."
                delay={0.2}
              />
              <BenefitCard
                icon={<Rocket size={24} />}
                title="Strategic Connections"
                desc="Connect with key stakeholders in governance and citizen services for future collaborations."
                delay={0.3}
              />
            </div>
          </div>

          {/* Right: Requirements */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card-strong p-6 sm:p-8 rounded-3xl border border-neon-blue/20 h-full relative overflow-hidden"
            >
              {/* Decorative circuit line */}
              <div className="absolute top-0 right-8 w-px h-24 bg-gradient-to-b from-neon-blue to-transparent hidden sm:block"></div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-800 mb-6">Proposal Requirements</h3>

              <ul className="space-y-4 mb-8">
                <RequirementItem text="A description of your AI solution and what problem it solves" delay={0.1} />
                <RequirementItem text="Current status of deployment (PoC, pilot, scale)" delay={0.2} />
                <RequirementItem text="Status of demo readiness" delay={0.3} />
              </ul>

              <div className="bg-neon-gold/10 border border-neon-gold/20 rounded-xl p-4 flex gap-3 items-start mb-8">
                <AlertTriangle className="text-neon-gold flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-neon-gold/90 font-medium">
                  Please note that all participants in the experience zone will be required to showcase <span className="underline">live demos</span> of their products.
                </p>
              </div>

            </motion.div>
          </div>
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[30px] p-1 bg-gradient-to-r from-neon-orange via-orange-200/30 to-orange-400 max-w-4xl mx-auto shadow-[0_0_50px_rgba(255,107,53,0.3)]"
        >
          <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-[28px] p-6 sm:p-8 md:p-12 text-center relative overflow-hidden border border-orange-200/50">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>

            {/* Floating decorative elements */}
            <div className="absolute top-6 right-6 w-3 h-3 bg-neon-orange rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-8 w-1 h-1 bg-neon-purple rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-orange to-orange-600 mb-2 relative z-10 drop-shadow-sm mb-[50px]">Register for the Ordisa AI summit 2025</h2>


            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 relative z-10">
              <a href="https://lnkd.in/gzE4qSxj" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="glow" className="w-full sm:w-auto px-10 py-4 text-lg font-bold">
                  Submit Proposal <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>

              {/* Separator Line: Top border on mobile, Left border on desktop */}
              <div className="flex flex-col items-center sm:items-start border-t-2 sm:border-t-0 sm:border-l-2 border-orange-200 pt-6 sm:pt-0 pl-0 sm:pl-8 w-full sm:w-auto">
                <span className="text-xs sm:text-sm text-orange-600 uppercase tracking-widest">Last Date to Apply</span>
                <span className="text-2xl sm:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-orange-600">05/12/2025</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
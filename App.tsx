import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SummitTracks } from './components/SummitTracks';
import { Agenda } from './components/Agenda';
import { Speakers } from './components/Speakers';
import { CallForProposals } from './components/CallForProposals';
import { VisionSection } from './components/VisionSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-odisha-dark text-gray-800 font-sans selection:bg-neon-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CallForProposals />
        <SummitTracks />
        <VisionSection />
        <Agenda />
        <Speakers />
      </main>
      <Footer />
    </div>
  );
};

export default App;

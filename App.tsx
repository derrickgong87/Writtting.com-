import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ComparisonDemo } from './components/ComparisonDemo';
import { TextHumanizer } from './components/TextHumanizer';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        {/* The requested visual change: Comparison Image Section First */}
        <ComparisonDemo />
        {/* The requested functional change: Moved Text Humanizer Here */}
        <TextHumanizer />
        <Features />
        {/* Pricing Section */}
        <Pricing />
        {/* New Testimonials Section */}
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
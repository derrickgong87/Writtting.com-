import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ComparisonDemo } from './components/ComparisonDemo';
import { TextHumanizer } from './components/TextHumanizer';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Dashboard } from './components/Dashboard';

const App: React.FC = () => {
  // Simple state-based routing to show either the Landing Page or the Dashboard
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');

  const handleStart = () => {
    setCurrentView('dashboard');
    window.scrollTo(0, 0);
  };

  if (currentView === 'dashboard') {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header onLogin={handleStart} />
      <main className="flex-grow">
        <Hero onStart={handleStart} />
        {/* Comparison Section */}
        <ComparisonDemo />
        {/* Landing Page Demo Tool */}
        <TextHumanizer />
        <Features />
        {/* Pricing Section */}
        <Pricing onStart={handleStart} />
        {/* Testimonials */}
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
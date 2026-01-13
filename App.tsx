import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ComparisonDemo } from './components/ComparisonDemo';
import { TextHumanizer } from './components/TextHumanizer';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Dashboard } from './components/Dashboard';
import { Blog } from './components/Blog';
import { AuthModal } from './components/AuthModal';

const App: React.FC = () => {
  // Routing state
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'blog'>('landing');
  
  // Auth State
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // When "Get Started" is clicked, go to Dashboard immediately.
  // We NO LONGER trigger auth here. Auth is triggered inside Dashboard actions.
  const handleStart = () => {
    setCurrentView('dashboard');
    window.scrollTo(0, 0);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsAuthOpen(false);
    // Stay on dashboard if already there, otherwise nav to it
    if (currentView !== 'dashboard') {
        setCurrentView('dashboard');
    }
  };

  const handleNav = (section: string) => {
    if (section === 'dashboard') {
      setCurrentView('dashboard');
      window.scrollTo(0, 0);
      return;
    }

    if (section === 'blog') {
      setCurrentView('blog');
      window.scrollTo(0, 0);
    } else if (section === 'home') {
      setCurrentView('landing');
      window.scrollTo(0, 0);
    } else {
      // If we are not on landing page, switch to it first
      if (currentView !== 'landing') {
        setCurrentView('landing');
        // Wait for render then scroll
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Already on landing, just scroll
        const element = document.getElementById(section);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Render Dashboard
  if (currentView === 'dashboard') {
    return (
      <>
        <Dashboard 
          isLoggedIn={isLoggedIn} 
          onShowAuth={() => setIsAuthOpen(true)}
        />
        <AuthModal 
          isOpen={isAuthOpen} 
          onClose={() => setIsAuthOpen(false)} 
          onSuccess={handleLoginSuccess} 
        />
      </>
    );
  }

  // Render Landing or Blog (both share Header/Footer)
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header 
        onLogin={() => setIsAuthOpen(true)} 
        onNavigate={handleNav} 
      />
      
      <main className="flex-grow">
        {currentView === 'blog' ? (
          <Blog />
        ) : (
          <>
            <Hero onStart={handleStart} />
            <ComparisonDemo />
            <TextHumanizer />
            <Features />
            <Pricing onStart={handleStart} />
            <Testimonials />
          </>
        )}
      </main>
      
      <Footer />
      
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onSuccess={handleLoginSuccess} 
      />
    </div>
  );
};

export default App;
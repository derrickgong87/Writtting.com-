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
import { HelpCenter } from './components/HelpCenter';
import { LegalPage } from './components/LegalDocs';
import { AuthModal } from './components/AuthModal';

const App: React.FC = () => {
  // Routing state
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'blog' | 'help' | 'terms' | 'privacy'>('landing');
  
  // Auth State
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // When "Get Started" is clicked, go to Dashboard immediately.
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
    // Top-level View Routing
    if (section === 'dashboard') {
      setCurrentView('dashboard');
      window.scrollTo(0, 0);
      return;
    }
    if (section === 'blog') {
      setCurrentView('blog');
      window.scrollTo(0, 0);
      return;
    }
    if (section === 'help') {
      setCurrentView('help');
      window.scrollTo(0, 0);
      return;
    }
    if (section === 'terms') {
      setCurrentView('terms');
      window.scrollTo(0, 0);
      return;
    }
    if (section === 'privacy') {
      setCurrentView('privacy');
      window.scrollTo(0, 0);
      return;
    }

    // Anchor Routing for Landing Page
    if (section === 'home') {
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

  // Render Other Views
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header 
        onLogin={() => setIsAuthOpen(true)} 
        onNavigate={handleNav} 
      />
      
      <main className="flex-grow">
        {currentView === 'blog' && <Blog />}
        {currentView === 'help' && <HelpCenter />}
        {currentView === 'terms' && <LegalPage type="terms" />}
        {currentView === 'privacy' && <LegalPage type="privacy" />}

        {currentView === 'landing' && (
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
      
      <Footer onNavigate={handleNav} />
      
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onSuccess={handleLoginSuccess} 
      />
    </div>
  );
};

export default App;
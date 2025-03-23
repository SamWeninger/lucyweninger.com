
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Highlights from '@/components/Highlights';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const Index = () => {
  // Track scroll position to adjust styles
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Implement smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      // Check if the link is an anchor link
      if (anchor.hash && anchor.hash.length > 1) {
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
        
        // Update URL but without scrolling
        window.history.pushState(null, '', anchor.hash);
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      {/* Pass scrollPosition to Navbar component for dynamic styling */}
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Achievements />
        <Highlights />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

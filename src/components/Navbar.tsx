
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Highlights', href: '#highlights' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style based on scroll position
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a nav link
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "py-2 bg-white/80 backdrop-blur-md shadow-sm" : "py-4 bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo/Name */}
        <a 
          href="#hero" 
          className="text-xl font-display font-bold text-primary transition-all duration-300 hover:opacity-80"
        >
          Lucy Weninger
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "nav-link",
                activeSection === link.href.substring(1) && "active"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-primary hover:bg-secondary transition-colors"
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden",
        isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 text-primary hover:text-primary/80 transition-colors"
              onClick={handleNavLinkClick}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Wifi, Shield, Smartphone, Camera } from 'lucide-react';

export const SpaceXNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services', icon: Wifi },
    { name: 'Gallery', href: '#gallery', icon: Camera },
    { name: 'Packages', href: '#packages', icon: Shield },
    { name: 'Solutions', href: '#solutions', icon: Smartphone },
    { name: 'Contact', href: '#contact', icon: Rocket },
  ];

  return (
    <nav className={`spacex-nav transition-all duration-500 ${
      scrolled ? 'py-2 bg-black/90' : 'py-4 bg-black/60'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center animate-pulse-glow">
                <Rocket className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white text-heading">
                TRACEROOT
              </h1>
              <p className="text-xs text-blue-300 text-mono">
                TECHNOLOGY SOLUTIONS
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10"
              >
                <item.icon className="h-4 w-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
                  {item.name}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              className="spacex-button-secondary"
              onClick={() => window.location.href = 'tel:09063412927'}
            >
              Get Quote
            </button>
            <button 
              className="spacex-button-primary"
              onClick={() => {
                const element = document.getElementById('packages');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Launch Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-black/95 backdrop-blur-xl border-t border-white/10 animate-slide-in-up">
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <item.icon className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
                    <span className="text-white font-medium group-hover:text-blue-300">
                      {item.name}
                    </span>
                  </a>
                ))}
                
                <div className="pt-4 space-y-3">
                  <button 
                    className="w-full spacex-button-secondary"
                    onClick={() => {
                      window.location.href = 'tel:09063412927';
                      setIsOpen(false);
                    }}
                  >
                    Get Quote
                  </button>
                  <button 
                    className="w-full spacex-button-primary"
                    onClick={() => {
                      const element = document.getElementById('packages');
                      element?.scrollIntoView({ behavior: 'smooth' });
                      setIsOpen(false);
                    }}
                  >
                    Launch Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

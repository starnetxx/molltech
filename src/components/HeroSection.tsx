import React, { useState, useEffect } from 'react';
import { Shield, Wifi, Settings, Smartphone, Rocket, Zap, Globe, Star } from "lucide-react";

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = Array.from({ length: 11 }, (_, i) => `/p${i + 1}.jpg`);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="spacex-hero flex items-center justify-center relative overflow-hidden pt-28">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-70' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-blue-300 rounded-full animate-float opacity-50" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-white rounded-full animate-float opacity-30" style={{animationDelay: '1s'}}></div>

      <div className="relative container mx-auto px-4 sm:px-6 text-center z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Main Hero Content */}
          <div className="space-y-8 animate-slide-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium backdrop-blur-sm">
                <Rocket className="h-4 w-4" />
                <span>Next-Generation Network Solutions</span>
              </div>
              
              <h1 className="text-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight break-words">
                <span className="block">ADVANCED</span>
                <span className="block">NETWORK</span>
                <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  INFRASTRUCTURE
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed px-4">
                Professional Mikrotik solutions engineered for the future. From enterprise-grade configurations 
                to cutting-edge mobile applications that redefine connectivity.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                className="spacex-button-primary text-lg px-10 py-5 hover-lift"
                onClick={() => {
                  const element = document.getElementById('packages');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Zap className="h-5 w-5 mr-2" />
                Explore Solutions
              </button>
              
              <button 
                className="spacex-button-secondary text-lg px-10 py-5 hover-lift"
                onClick={() => {
                  const element = document.getElementById('shop');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Globe className="h-5 w-5 mr-2" />
                Shop
              </button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16" style={{animationDelay: '0.3s'}}>
            {[
              { icon: Shield, title: "Mikrotik Security", desc: "Professional firewall setup", color: "blue" },
              { icon: Wifi, title: "Hotspot Solutions", desc: "Complete Wi-Fi management", color: "cyan" },
              { icon: Settings, title: "Router Configuration", desc: "Expert Mikrotik setup", color: "purple" },
              { icon: Smartphone, title: "Mobile Apps", desc: "Custom hotspot applications", color: "green" }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="spacex-glass hover-scale group cursor-pointer animate-slide-in-up"
                style={{animationDelay: `${0.5 + index * 0.1}s`}}
              >
                <div className={`p-4 bg-${feature.color}-500/20 rounded-xl mb-4 group-hover:bg-${feature.color}-500/30 transition-colors`}>
                  <feature.icon className={`h-8 w-8 text-${feature.color}-300 group-hover:text-${feature.color}-200 transition-colors`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-heading">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/60 font-light">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 animate-slide-in-up" style={{animationDelay: '0.8s'}}>
            {[
              { number: "15+", label: "Networks Deployed", icon: Globe },
              { number: "99.9%", label: "Uptime Guarantee", icon: Star },
              { number: "24/7", label: "Mission Support", icon: Rocket }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 animate-pulse-glow">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-white text-heading">
                  {stat.number}
                </div>
                <div className="text-lg text-white/60 font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
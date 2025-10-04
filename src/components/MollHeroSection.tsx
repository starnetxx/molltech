import { ArrowRight, Download, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const MollHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/starlink_bg.png",
      title: "Starlink",
      subtitle: "Internet",
      description: "Deployment",
      badge: "Connectivity",
      features: [
        "Starlink Internet",
        "Electronics Sales"
      ]
    },
    {
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
      title: "Technology",
      subtitle: "Solutions",
      description: "for Africa",
      badge: "Innovation",
      features: [
        "Internet Solutions",
        "Digital Services"
      ]
    },
    {
      image: "https://images.pexels.com/photos/1181330/pexels-photo-1181330.jpeg",
      title: "Security",
      subtitle: "& Energy",
      description: "Solutions",
      badge: "Modern Tech",
      features: [
        "CCTV Systems",
        "Solar Power"
      ]
    },
    {
      image: "https://images.pexels.com/photos/16560413/pexels-photo-16560413.png",
      title: "CCTV",
      subtitle: "Surveillance",
      description: "Systems",
      badge: "Security",
      features: [
        "24/7 Monitoring",
        "Smart Security"
      ]
    },
    {
      image: "https://images.pexels.com/photos/4009621/pexels-photo-4009621.jpeg",
      title: "Smart",
      subtitle: "Home",
      description: "Automation",
      badge: "Innovation",
      features: [
        "Home Automation",
        "Smart Devices"
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Features are now defined within each slide

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ marginTop: '-50px' }}>
      {/* Slider Container */}
      <div className="absolute inset-0">
        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            } ${
              index === 0 ? 'bg-left' : 'bg-center'
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundPosition: index === 0 ? 'left center' : 'center center',
            }}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-400' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-sky-500/20 text-sky-200 text-sm font-medium backdrop-blur-sm border border-sky-400/30">
                <CheckCircle className="h-4 w-4" />
                <span>{slides[currentSlide].badge}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="block transition-all duration-1000">{slides[currentSlide].title}</span>
                <span className="block bg-gradient-to-r from-sky-400 to-blue-300 bg-clip-text text-transparent transition-all duration-1000">
                  {slides[currentSlide].subtitle}
                </span>
                <span className="block text-sky-100 transition-all duration-1000">{slides[currentSlide].description}</span>
              </h1>
              
              <p className="text-lg text-sky-100 leading-relaxed max-w-xl">
                Empowering businesses through innovative technology solutions.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-2">
              {slides[currentSlide].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-sky-400 flex-shrink-0" />
                  <span className="text-white font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                onClick={() => scrollToSection("#services")}
                className="bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <a 
                href="/profile.pdf" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  Our Profile
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-sky-200 font-medium">Projects</div>
              </div>
              <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-sky-200 font-medium">Cities</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-400 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-slate-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MollHeroSection;

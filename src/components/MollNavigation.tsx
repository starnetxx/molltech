import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown, MessageCircle, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const MollNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { label: "Home", href: "#home", active: true, isRoute: false, dropdown: false },
    { label: "About", href: "#about", dropdown: false, isRoute: false },
    { label: "Service Portfolio", href: "/gallery", dropdown: false, isRoute: true },
    { label: "Project Showcase", href: "/videos", dropdown: false, isRoute: true },
    { label: "Shop", href: "#shop", dropdown: false, isRoute: false },
    { label: "Our Services", href: "#services", dropdown: false, isRoute: false },
    { label: "Solutions", href: "#mission-vision", dropdown: false, isRoute: false },
    { label: "Portfolio", href: "#why-choose-us", dropdown: false, isRoute: false },
    { label: "Contact", href: "#contact", dropdown: false, isRoute: false },
  ];

  const handleNavigation = (item: any) => {
    if (item.isRoute) {
      navigate(item.href);
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar - Hidden on Mobile */}
      <div className="hidden lg:block bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-row items-center justify-between text-xs">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3 text-blue-400" />
                <span>mollelectechnigltd@gmail.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3 text-blue-400" />
                <span>+234 702 555 4008</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3 text-blue-400" />
                <span>2, Martin Oti Street, Guzape, Kwali, Abuja, FCT</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <a href="https://instagram.com/moll_technologies" target="_blank" rel="noopener noreferrer" className="w-5 h-5 flex items-center justify-center hover:text-blue-400 transition-colors">
                <Instagram className="h-3 w-3" />
              </a>
              <a href="https://tiktok.com/@mgm_technologies" target="_blank" rel="noopener noreferrer" className="w-5 h-5 flex items-center justify-center hover:text-blue-400 transition-colors">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://twitter.com/Moll_technologies" target="_blank" rel="noopener noreferrer" className="w-5 h-5 flex items-center justify-center hover:text-blue-400 transition-colors">
                <Twitter className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-4 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">molltech</h1>
                <p className="text-xs text-blue-200">RC: 7262696</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item)}
                  className={`flex items-center space-x-1 font-medium text-sm transition-colors duration-200 relative group ${
                    item.active 
                      ? 'text-blue-300 border-b-2 border-blue-300 pb-1' 
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                  {!item.active && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-200 group-hover:w-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Right Side - Contact */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Have Any Questions?</p>
                  <a 
                    href="tel:+2347025554008"
                    className="text-white font-bold hover:text-blue-300 transition-colors"
                  >
                    +234 702 555 4008
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="mt-4 pb-4 border-t border-blue-700">
              <div className="pt-4 space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item)}
                    className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                      item.active 
                        ? 'bg-blue-700 text-blue-200' 
                        : 'text-white hover:bg-blue-700 hover:text-blue-200'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.dropdown && <ChevronDown className="h-4 w-4" />}
                  </button>
                ))}
                <div className="pt-4 space-y-3">
                  <div className="flex items-center space-x-3 px-4 py-3 bg-blue-700 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-green-400" />
                    <div>
                      <p className="text-sm text-blue-200">Have Any Questions?</p>
                      <a 
                        href="tel:+2347025554008"
                        className="text-white font-bold hover:text-blue-300 transition-colors"
                      >
                        +234 702 555 4008
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MollNavigation;

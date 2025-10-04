import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  Twitter,
  Instagram,
  ArrowUp
} from "lucide-react";

const MollFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Mission & Vision", href: "#mission-vision" },
        { label: "Why Choose Us", href: "#why-choose-us" },
        { label: "Target Market", href: "#target-market" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Starlink Deployment", href: "#services" },
        { label: "Electronics Sales", href: "#services" },
        { label: "Repairs & Maintenance", href: "#services" },
        { label: "Technical Consultancy", href: "#services" }
      ]
    },
    {
      title: "Contact",
      links: [
        { label: "Get in Touch", href: "#contact" },
        { label: "Phone: +234 702 555 4008", href: "tel:+2347025554008" },
        { label: "Email Us", href: "mailto:mollelectechnigltd@gmail.com" },
        { label: "Visit Our Office", href: "#contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/moll_technologies", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/Moll_technologies", label: "Twitter" },
    { 
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ), 
      href: "https://tiktok.com/@mgm_technologies", 
      label: "TikTok" 
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Moll Technologies</h3>
                <p className="text-sm text-blue-300 font-medium">RC: 7262696</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Formerly known as MOLL ELECTECH NIG LTD, we provide innovative technology 
              solutions that empower individuals, businesses, and communities across Africa 
              and beyond.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">2, Martin Oti Street, Guzape, Kwali, Abuja, FCT, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+234 702 555 4008</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">mollelectechnigltd@gmail.com</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => {
                        if (link.href.startsWith("#")) {
                          scrollToSection(link.href);
                        } else {
                          window.open(link.href);
                        }
                      }}
                      className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-2xl p-6 border border-blue-600/20">
            <h4 className="text-xl font-bold text-white mb-3">Our Mission</h4>
            <p className="text-gray-300 leading-relaxed">
              To deliver innovative, reliable, and user-friendly technology solutions that empower 
              individuals, businesses, and communities. We strive to bridge digital gaps through 
              cutting-edge connectivity, software development, and smart digital services.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Moll Technologies (RC: 7262696). All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Formerly MOLL ELECTECH NIG LTD | Empowering Africa through Technology
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 z-50 group"
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-200" />
      </button>
    </footer>
  );
};

export default MollFooter;

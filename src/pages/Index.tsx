import { SpaceXNavigation } from "@/components/SpaceXNavigation";
import { HeroSection } from "@/components/HeroSection";
import { ProjectGallery } from "@/components/ProjectGallery";
import { DeviceShop } from "@/components/DeviceShop";
import { FAQ } from "@/components/FAQ";
import { BackToTop } from "@/components/BackToTop";
import { PricingPackageCard } from "@/components/PricingPackageCard";
import { ProfessionalButton } from "@/components/ui/professional-button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Clock, Award, Rocket, Satellite, Zap, Shield, Globe, Star, ArrowRight, CheckCircle } from "lucide-react";

const pricingPackages = [
  {
    id: 1,
    name: "Basic Configuration",
    price: "100,000",
    description: "Setup and hardening of a Mikrotik router with Starlink/ISP integration, LAN basics, NAT, DHCP, and firewall.",
    idealFor: "Small offices, shops, homes needing a secure internet gateway",
    features: [
      "RouterOS setup & cleanup",
      "WAN config including Starlink",
      "LAN/DHCP/NAT configuration",
      "Firewall hardening",
      "Monitoring & logs setup"
    ],
    deliverables: [
      "Config backups",
      "Network summary documentation",
      "Admin guide"
    ],
    support: "7-day support",
    buttonVariant: "professional" as const
  },
  {
    id: 2,
    name: "Standard Configuration",
    price: "150,000",
    description: "Adds professional Access Point setup to the Basic package, plus Mikhmon setup, VLAN options, and channel optimization.",
    idealFor: "SMEs, hotels, schools needing wider Wi-Fi coverage",
    features: [
      "Includes Basic setup",
      "AP SSID/security, band steering",
      "Channel planning optimization", 
      "Optional VLANs configuration",
      "Traffic shaping basics",
      "Mikhmon setup and configuration"
    ],
    deliverables: [
      "AP profiles & SSID matrix",
      "Wi-Fi credential handover",
      "Configuration documentation"
    ],
    support: "14-day support",
    popular: true,
    buttonVariant: "corporate" as const
  },
  {
    id: 3,
    name: "Advanced Hotspot Suite",
    price: "200,000",
    description: "Adds captive portal with voucher management (Mikhmon), Wall Garden, trial users, and anti-sharing policies.",
    idealFor: "Cafés, hotels, campuses needing monetized hotspot",
    features: [
      "Includes Standard setup",
      "Mikhmon for voucher management",
      "Wall Garden for free sites",
      "Trial user access system",
      "Mangle rules to stop sharing",
      "Bandwidth fairness (PCQ)",
      "Branded captive portal"
    ],
    deliverables: [
      "Voucher templates",
      "Admin quick-guide",
      "Policy documentation",
      "Branded portal setup"
    ],
    support: "30-day support",
    buttonVariant: "corporate" as const
  },
  {
    id: 4,
    name: "Premium + Mobile App",
    price: "500,000",
    description: "Extends Advanced Suite with custom mobile app (like MyMTN) for wallet and plan management.",
    idealFor: "ISPs, hotels, estates needing branded app for plan purchase",
    features: [
      "Includes Advanced Hotspot Suite",
      "Mobile App (Android + PWA)",
      "Admin dashboard access",
      "Payment gateway integration",
      "Notifications & promo codes",
      "Basic analytics and reporting"
    ],
    deliverables: [
      "APK + PWA bundle",
      "Admin portal access",
      "Branded app & portal",
      "Training session",
      "Documentation package"
    ],
    support: "60-day support",
    buttonVariant: "premium" as const
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
      
      <div className="relative">
        <SpaceXNavigation />
        <HeroSection />
        
        {/* Mission Statement Section */}
        <section id="services" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-slide-in-up">
              <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium backdrop-blur-sm mb-6">
                <Satellite className="h-4 w-4" />
                <span>Mission-Critical Infrastructure</span>
              </div>
              <h2 className="text-heading text-4xl lg:text-5xl font-black text-white mb-6">
                MIKROTIK MASTERY
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  REDEFINED
                </span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                We don't just configure routers—we engineer complete network solutions from basic setups to advanced hotspot systems with custom mobile applications.
              </p>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Professional Security",
                  desc: "RouterOS hardening with advanced firewall rules, NAT configuration, and comprehensive security policies for business networks.",
                  features: ["Firewall configuration", "Security hardening", "Network monitoring"]
                },
                {
                  icon: Zap,
                  title: "Hotspot Excellence",
                  desc: "Complete captive portal solutions with Mikhmon integration, voucher management, and bandwidth control for commercial use.",
                  features: ["Captive portal setup", "Mikhmon integration", "Bandwidth management"]
                },
                {
                  icon: Globe,
                  title: "Starlink Integration",
                  desc: "Seamless WAN configuration with Starlink and traditional ISPs, including failover systems and load balancing for reliable connectivity.",
                  features: ["Multi-WAN setup", "Starlink configuration", "Failover systems"]
                }
              ].map((service, index) => (
                <div 
                  key={service.title}
                  className="spacex-glass hover-lift group animate-slide-in-up"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="p-6 bg-blue-500/10 rounded-2xl mb-6 group-hover:bg-blue-500/20 transition-all duration-500">
                    <service.icon className="h-12 w-12 text-blue-300 group-hover:text-blue-200 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-heading group-hover:text-blue-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3 text-sm text-white/60">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Project Gallery Section */}
        <ProjectGallery />
        
        {/* Device Shop Section */}
        <DeviceShop />
        
        {/* Main Pricing Section */}
        <section id="packages" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-slide-in-up">
              <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium backdrop-blur-sm mb-6">
                <Rocket className="h-4 w-4" />
                <span>Launch Packages</span>
              </div>
              <h2 className="text-heading text-4xl lg:text-5xl font-black text-white mb-6">
                MISSION-READY
                <span className="block bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                  SOLUTIONS
                </span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                From basic orbital configurations to full mission control systems. Choose your trajectory to digital transformation.
              </p>
            </div>
            
            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {pricingPackages.map((pkg, index) => (
                <div 
                  key={pkg.id} 
                  className="hover-lift animate-slide-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <PricingPackageCard package={pkg} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Solutions Section */}
        <section id="solutions" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-8 animate-slide-in-up">
                <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium backdrop-blur-sm">
                  <Star className="h-4 w-4" />
                  <span>Command Center</span>
                </div>
                <h2 className="text-heading text-4xl lg:text-5xl font-black text-white">
                  MISSION
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                    CONTROL
                  </span>
                </h2>
                <p className="text-xl text-white/70 font-light leading-relaxed">
                  Advanced network orchestration with real-time monitoring, predictive analytics, and autonomous optimization systems.
                </p>
                <button className="spacex-button-primary hover-lift">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Initiate Contact
                </button>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: Award, title: "Elite Engineering", desc: "Certified specialists with advanced Mikrotik credentials", color: "blue" },
                  { icon: Clock, title: "Rapid Deployment", desc: "48-hour turnaround with comprehensive documentation", color: "purple" },
                  { icon: MapPin, title: "Continental Reach", desc: "Remote configuration and on-site support across Africa", color: "green" },
                  { icon: Satellite, title: "24/7 Monitoring", desc: "Round-the-clock network surveillance and support", color: "cyan" }
                ].map((solution, index) => (
                  <div 
                    key={solution.title}
                    className="spacex-glass hover-scale group animate-slide-in-up"
                    style={{animationDelay: `${0.3 + index * 0.1}s`}}
                  >
                    <div className={`p-4 bg-${solution.color}-500/20 rounded-xl mb-4 group-hover:bg-${solution.color}-500/30 transition-colors`}>
                      <solution.icon className={`h-8 w-8 text-${solution.color}-300 group-hover:text-${solution.color}-200 transition-colors`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 text-heading">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-white/60 font-light">
                      {solution.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* CTA Section */}
        <section id="contact" className="py-24 relative">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto spacex-glass space-y-8 animate-slide-in-up">
              <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium backdrop-blur-sm">
                <Rocket className="h-4 w-4" />
                <span>Launch Sequence</span>
              </div>
              
              <h2 className="text-heading text-4xl lg:text-5xl font-black text-white">
                READY FOR
                <span className="block bg-gradient-to-r from-orange-400 to-red-300 bg-clip-text text-transparent">
                  LIFTOFF?
                </span>
              </h2>
              
              <p className="text-xl text-white/70 font-light leading-relaxed">
                Join the next generation of network infrastructure. Our mission control team is standing by to architect your digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
                <button className="spacex-button-primary text-lg px-12 py-6 hover-lift">
                  <Zap className="h-5 w-5 mr-2" />
                  Begin Mission
                </button>
                <button 
                  className="spacex-button-secondary text-lg px-12 py-6 hover-lift"
                  onClick={() => window.location.href = 'tel:09063412927'}
                >
                  <Globe className="h-5 w-5 mr-2" />
                  Direct Line: 09063412927
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 bg-black/60 backdrop-blur-xl border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/logo.png" 
                    alt="Traceroot Technology Solutions Logo" 
                    className="w-10 h-10 rounded-lg object-contain"
                    onError={(e) => {
                      // Fallback to gradient background if logo fails
                      e.currentTarget.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center';
                      fallback.innerHTML = '<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>';
                      e.currentTarget.parentNode?.appendChild(fallback);
                    }}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white text-heading">TRACEROOT</h3>
                    <p className="text-xs text-blue-300 text-mono">TECHNOLOGY SOLUTIONS</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm">
                  Engineering the future of network infrastructure with precision, innovation, and excellence.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white text-heading">Mission Control</h4>
                <div className="space-y-2 text-sm text-white/60">
                  <p>RC – 3260785</p>
                  <p>traceroot.io@gmail.com</p>
                  <p>+234 906 341 2927</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white text-heading">Launch Coordinates</h4>
                <div className="space-y-2 text-sm text-white/60">
                  <p>Nigeria & Beyond</p>
                  <p>24/7 Mission Support</p>
                  <p>Global Network Coverage</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} Traceroot Technology Solutions. All systems operational.
                <br className="sm:hidden" />
                <span className="sm:ml-4">Next-generation network infrastructure.</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default Index;
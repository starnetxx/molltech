import { CompanyHeader } from "@/components/CompanyHeader";
import { HeroSection } from "@/components/HeroSection";
import { PricingPackageCard } from "@/components/PricingPackageCard";
import { ProfessionalButton } from "@/components/ui/professional-button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Clock, Award } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      <CompanyHeader />
      <HeroSection />
      
      {/* Main Pricing Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From basic router setup to complete mobile app solutions. Each package builds upon the previous one with additional features and extended support.
            </p>
          </div>
          
          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {pricingPackages.map((pkg) => (
              <PricingPackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>
      
      <Separator className="my-8" />
      
      {/* Additional Information Section */}
      <section className="py-12 bg-stripe-pattern">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-heading text-xl font-semibold">Professional Service</h3>
              <p className="text-muted-foreground">
                Certified network engineers with years of Mikrotik experience
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-heading text-xl font-semibold">Quick Deployment</h3>
              <p className="text-muted-foreground">
                Fast turnaround times with comprehensive documentation
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-heading text-xl font-semibold">Nigeria-Wide</h3>
              <p className="text-muted-foreground">
                Remote configuration and on-site support across Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-stripe-pattern opacity-10"></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-heading text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Network?
            </h2>
            <p className="text-lg opacity-90">
              Contact our team today for a free consultation and let us help you choose the perfect package for your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <ProfessionalButton variant="premium" size="xl">
                Get Free Consultation
              </ProfessionalButton>
              <ProfessionalButton variant="professional" size="xl">
                Call: 09063412927
              </ProfessionalButton>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © 2024 Traceroot Technology Solutions (RC – 3260785). All rights reserved.
            <br className="sm:hidden" />
            <span className="sm:ml-4">Professional Network Configuration Services</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

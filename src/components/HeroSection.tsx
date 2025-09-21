import { ProfessionalButton } from "@/components/ui/professional-button";
import { Shield, Wifi, Settings, Smartphone } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="relative container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="mobile-glass space-y-4">
            <h1 className="text-heading text-4xl lg:text-6xl font-bold text-white">
              Network Configuration
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pricing Packages
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
              Professional Mikrotik router setup and hotspot solutions for businesses of all sizes. 
              From basic configurations to complete mobile app integrations.
            </p>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
            <div className="mobile-glass flex flex-col items-center space-y-2 p-4">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Shield className="h-6 w-6 text-blue-300" />
              </div>
              <span className="text-sm font-medium text-white">Secure Setup</span>
            </div>
            
            <div className="mobile-glass flex flex-col items-center space-y-2 p-4">
              <div className="p-3 bg-purple-500/20 rounded-full">
                <Wifi className="h-6 w-6 text-purple-300" />
              </div>
              <span className="text-sm font-medium text-white">Wi-Fi Coverage</span>
            </div>
            
            <div className="mobile-glass flex flex-col items-center space-y-2 p-4">
              <div className="p-3 bg-green-500/20 rounded-full">
                <Settings className="h-6 w-6 text-green-300" />
              </div>
              <span className="text-sm font-medium text-white">Configuration</span>
            </div>
            
            <div className="mobile-glass flex flex-col items-center space-y-2 p-4">
              <div className="p-3 bg-yellow-500/20 rounded-full">
                <Smartphone className="h-6 w-6 text-yellow-300" />
              </div>
              <span className="text-sm font-medium text-white">Mobile Apps</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <ProfessionalButton 
              variant="premium" 
              size="xl"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold"
            >
              View All Packages
            </ProfessionalButton>
            
            <ProfessionalButton 
              variant="professional" 
              size="xl"
              className="glass-morphism border-white/20 text-white hover:bg-white/20"
              onClick={() => window.location.href = 'tel:09063412927'}
            >
              Contact Us Today
            </ProfessionalButton>
          </div>
        </div>
      </div>
    </section>
  );
};
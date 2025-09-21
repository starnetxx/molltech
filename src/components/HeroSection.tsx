import { ProfessionalButton } from "@/components/ui/professional-button";
import { Shield, Wifi, Settings, Smartphone } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
      <div className="absolute inset-0 bg-stripe-pattern opacity-5"></div>
      
      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-heading text-4xl lg:text-6xl font-bold text-foreground">
              Network Configuration
              <span className="block text-transparent bg-gradient-primary bg-clip-text">
                Pricing Packages
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional Mikrotik router setup and hotspot solutions for businesses of all sizes. 
              From basic configurations to complete mobile app integrations.
            </p>
          </div>
          
          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-8 py-6">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-primary/10 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Secure Setup</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-primary/10 rounded-full">
                <Wifi className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Wi-Fi Coverage</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-primary/10 rounded-full">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Configuration</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-primary/10 rounded-full">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Mobile Apps</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <ProfessionalButton variant="corporate" size="xl">
              View All Packages
            </ProfessionalButton>
            
            <ProfessionalButton variant="professional" size="xl">
              Contact Us Today
            </ProfessionalButton>
          </div>
        </div>
      </div>
    </section>
  );
};
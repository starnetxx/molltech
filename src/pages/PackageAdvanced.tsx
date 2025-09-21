import { useState } from "react";
import { CompanyHeader } from "@/components/CompanyHeader";
import { ContactModal } from "@/components/ContactModal";
import { ProfessionalButton } from "@/components/ui/professional-button";
import { ArrowLeft, Check, Wifi, Settings, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const PackageAdvanced = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const packageData = {
    name: "Advanced Hotspot Suite",
    price: "₦200,000",
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
    support: "30-day support"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative">
        <CompanyHeader />
        
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-6">
          <Link to="/">
            <ProfessionalButton variant="ghost" className="text-white hover:bg-white/10 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Packages
            </ProfessionalButton>
          </Link>
        </div>

        {/* Package Hero */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mobile-glass mb-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-indigo-500/20 rounded-full">
                  <Shield className="h-12 w-12 text-indigo-300" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {packageData.name}
              </h1>
              
              <div className="text-6xl md:text-7xl font-bold text-indigo-300 mb-4">
                {packageData.price}
              </div>
              
              <p className="text-xl text-white/80 mb-6">
                {packageData.idealFor}
              </p>
              
              <ProfessionalButton 
                onClick={() => setIsContactModalOpen(true)}
                variant="premium" 
                size="xl"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold px-12 py-4 rounded-2xl shadow-2xl"
              >
                Choose This Package
              </ProfessionalButton>
            </div>

            {/* Package Details */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Features */}
              <div className="mobile-glass">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Wifi className="h-6 w-6 mr-3 text-indigo-300" />
                  What You Get
                </h3>
                <ul className="space-y-4">
                  {packageData.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="mobile-glass">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Settings className="h-6 w-6 mr-3 text-indigo-300" />
                  Deliverables
                </h3>
                <ul className="space-y-4">
                  {packageData.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-indigo-400 rounded-full mt-3 shrink-0"></div>
                      <span className="text-white/90">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Support Info */}
            <div className="mobile-glass mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Support Included</h3>
              <p className="text-xl text-indigo-300 font-semibold">{packageData.support}</p>
              <p className="text-white/80 mt-2">Comprehensive support with setup assistance and training</p>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <ProfessionalButton 
                onClick={() => setIsContactModalOpen(true)}
                variant="premium" 
                size="xl"
                className="bg-gradient-to-r from-green-500 to-indigo-600 hover:from-green-600 hover:to-indigo-700 text-white font-bold px-16 py-6 rounded-2xl shadow-2xl text-lg"
              >
                Get Started Today
              </ProfessionalButton>
            </div>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        packageName={packageData.name}
      />
    </div>
  );
};

export default PackageAdvanced;
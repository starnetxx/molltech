import { useState } from "react";
import { CompanyHeader } from "@/components/CompanyHeader";
import { ContactModal } from "@/components/ContactModal";
import { ProfessionalButton } from "@/components/ui/professional-button";
import { ArrowLeft, Check, Smartphone, Settings, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const PackagePremium = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const packageData = {
    name: "Premium + Mobile App",
    price: "₦500,000",
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
    support: "60-day support"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 relative">
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
                <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                  <Crown className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {packageData.name}
              </h1>
              
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
                {packageData.price}
              </div>
              
              <p className="text-xl text-white/80 mb-6">
                {packageData.idealFor}
              </p>
              
              <ProfessionalButton 
                onClick={() => setIsContactModalOpen(true)}
                variant="premium" 
                size="xl"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold px-12 py-4 rounded-2xl shadow-2xl"
              >
                Choose This Package
              </ProfessionalButton>
            </div>

            {/* Package Details */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Features */}
              <div className="mobile-glass">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Smartphone className="h-6 w-6 mr-3 text-yellow-300" />
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
                  <Settings className="h-6 w-6 mr-3 text-yellow-300" />
                  Deliverables
                </h3>
                <ul className="space-y-4">
                  {packageData.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-yellow-400 rounded-full mt-3 shrink-0"></div>
                      <span className="text-white/90">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Support Info */}
            <div className="mobile-glass mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Premium Support Included</h3>
              <p className="text-xl text-yellow-300 font-semibold">{packageData.support}</p>
              <p className="text-white/80 mt-2">Premium support with dedicated account manager and training</p>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <ProfessionalButton 
                onClick={() => setIsContactModalOpen(true)}
                variant="premium" 
                size="xl"
                className="bg-gradient-to-r from-green-500 to-yellow-600 hover:from-green-600 hover:to-yellow-700 text-white font-bold px-16 py-6 rounded-2xl shadow-2xl text-lg"
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

export default PackagePremium;
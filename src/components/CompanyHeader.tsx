import { Phone, Mail, Globe } from "lucide-react";
import { ProfessionalButton } from "@/components/ui/professional-button";

export const CompanyHeader = () => {
  return (
    <header className="bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-stripe-pattern opacity-10"></div>
      
      <div className="relative container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          {/* Company Info */}
          <div className="text-center lg:text-left">
            <h1 className="text-heading text-2xl lg:text-3xl font-bold mb-2">
              Traceroot Technology Solutions
            </h1>
            <p className="text-primary-foreground/90 text-sm">
              RC – 3260785 | Professional Network Configuration Services
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <div className="text-sm">
                <span>09063412927</span>
                <span className="mx-1">•</span>
                <span>08060933939</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">traceroot.io@gmail.com</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span className="text-sm">traceroot.com.ng</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
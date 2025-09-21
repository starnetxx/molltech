import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProfessionalButton } from "@/components/ui/professional-button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingPackage {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  idealFor: string;
  features: string[];
  deliverables: string[];
  support: string;
  popular?: boolean;
  buttonVariant?: "default" | "corporate" | "premium" | "professional";
}

interface PricingPackageCardProps {
  package: PricingPackage;
}

const getPackageRoute = (id: number) => {
  const routes = {
    1: "/package/basic",
    2: "/package/standard", 
    3: "/package/advanced",
    4: "/package/premium"
  };
  return routes[id as keyof typeof routes] || "/";
};

export const PricingPackageCard = ({ package: pkg }: PricingPackageCardProps) => {
  return (
    <Card className={`relative mobile-glass hover:shadow-glass-hover ${pkg.popular ? 'ring-2 ring-blue-400/50' : ''} h-full transition-all duration-300`}>
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 font-bold shadow-lg">
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="space-y-2">
          <CardTitle className="text-heading text-xl text-white">{pkg.name}</CardTitle>
          <CardDescription className="text-white/70 font-medium">
            {pkg.idealFor}
          </CardDescription>
        </div>
        
        <div className="flex items-baseline space-x-2 pt-2">
          <span className="text-3xl font-bold text-blue-300">₦{pkg.price}</span>
          {pkg.originalPrice && (
            <span className="text-lg text-white/50 line-through">₦{pkg.originalPrice}</span>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-white/90 font-medium">{pkg.description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-white mb-2">What You Get:</h4>
            <ul className="space-y-2">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-2">Deliverables:</h4>
            <ul className="space-y-1">
              {pkg.deliverables.map((deliverable, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-sm text-white/70">{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glass-morphism rounded-lg p-3 border-white/10">
          <p className="text-sm font-medium text-white">
            <span className="text-blue-300">Support:</span> {pkg.support}
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <Link to={getPackageRoute(pkg.id)} className="w-full">
          <ProfessionalButton 
            variant={pkg.buttonVariant || "corporate"} 
            size="lg" 
            className="w-full"
          >
            View Package Details
          </ProfessionalButton>
        </Link>
      </CardFooter>
    </Card>
  );
};
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProfessionalButton } from "@/components/ui/professional-button";
import { Check } from "lucide-react";

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

export const PricingPackageCard = ({ package: pkg }: PricingPackageCardProps) => {
  return (
    <Card className={`relative card-professional hover-lift ${pkg.popular ? 'ring-2 ring-accent shadow-card-hover' : ''} h-full`}>
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-accent to-accent-hover text-accent-foreground px-4 py-1">
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="space-y-2">
          <CardTitle className="text-heading text-xl">{pkg.name}</CardTitle>
          <CardDescription className="text-muted-foreground font-medium">
            {pkg.idealFor}
          </CardDescription>
        </div>
        
        <div className="flex items-baseline space-x-2 pt-2">
          <span className="text-3xl font-bold text-primary">₦{pkg.price}</span>
          {pkg.originalPrice && (
            <span className="text-lg text-muted-foreground line-through">₦{pkg.originalPrice}</span>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-foreground font-medium">{pkg.description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">What You Get:</h4>
            <ul className="space-y-2">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-2">Deliverables:</h4>
            <ul className="space-y-1">
              {pkg.deliverables.map((deliverable, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 shrink-0"></div>
                  <span className="text-sm text-muted-foreground">{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-stripe-accent rounded-lg p-3">
          <p className="text-sm font-medium text-foreground">
            <span className="text-accent">Support:</span> {pkg.support}
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <ProfessionalButton 
          variant={pkg.buttonVariant || "corporate"} 
          size="lg" 
          className="w-full"
        >
          Choose This Package
        </ProfessionalButton>
      </CardFooter>
    </Card>
  );
};
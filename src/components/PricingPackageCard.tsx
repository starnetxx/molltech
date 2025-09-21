import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Check, Rocket, Zap, Star, ArrowRight } from "lucide-react";
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

const getPackageIcon = (id: number) => {
  const icons = {
    1: Rocket,
    2: Zap,
    3: Star,
    4: Rocket
  };
  return icons[id as keyof typeof icons] || Rocket;
};

const getPackageGradient = (id: number) => {
  const gradients = {
    1: "from-blue-500/20 to-cyan-500/20",
    2: "from-purple-500/20 to-pink-500/20",
    3: "from-green-500/20 to-emerald-500/20",
    4: "from-orange-500/20 to-red-500/20"
  };
  return gradients[id as keyof typeof gradients] || "from-blue-500/20 to-cyan-500/20";
};

const getAccentColor = (id: number) => {
  const colors = {
    1: "blue",
    2: "purple",
    3: "green",
    4: "orange"
  };
  return colors[id as keyof typeof colors] || "blue";
};

export const PricingPackageCard = ({ package: pkg }: PricingPackageCardProps) => {
  const Icon = getPackageIcon(pkg.id);
  const gradient = getPackageGradient(pkg.id);
  const accentColor = getAccentColor(pkg.id);

  return (
    <div className={`relative spacex-card h-full group overflow-hidden ${
      pkg.popular ? 'ring-2 ring-blue-400/50 shadow-glow' : ''
    }`}>
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`}></div>
      
      {/* Popular Badge */}
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-primary px-6 py-2 rounded-full text-white text-sm font-bold shadow-glow animate-pulse-glow">
            <Star className="h-4 w-4 inline mr-2" />
            MISSION CRITICAL
          </div>
        </div>
      )}
      
      {/* Header */}
      <div className="relative p-8 pb-6">
        <div className="flex items-start justify-between mb-6">
          <div className={`p-4 bg-${accentColor}-500/20 rounded-xl group-hover:bg-${accentColor}-500/30 transition-colors`}>
            <Icon className={`h-8 w-8 text-${accentColor}-300 group-hover:text-${accentColor}-200 transition-colors`} />
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-white text-heading">
              ₦{pkg.price}
            </div>
            {pkg.originalPrice && (
              <div className="text-lg text-white/50 line-through font-light">
                ₦{pkg.originalPrice}
              </div>
            )}
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-2xl font-black text-white text-heading group-hover:text-blue-200 transition-colors">
            {pkg.name.toUpperCase()}
          </h3>
          <p className={`text-${accentColor}-300 font-medium text-sm uppercase tracking-wide`}>
            {pkg.idealFor}
          </p>
          <p className="text-white/70 font-light leading-relaxed">
            {pkg.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative px-8 pb-8 space-y-6">
        {/* Features */}
        <div className="space-y-4">
          <h4 className="font-bold text-white text-heading text-sm uppercase tracking-wide">
            MISSION SPECS:
          </h4>
          <ul className="space-y-3">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3 group/item">
                <Check className="h-4 w-4 text-green-400 shrink-0 mt-0.5 group-hover/item:text-green-300 transition-colors" />
                <span className="text-sm text-white/80 font-light group-hover/item:text-white transition-colors">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Deliverables */}
        <div className="space-y-4">
          <h4 className="font-bold text-white text-heading text-sm uppercase tracking-wide">
            PAYLOAD DELIVERY:
          </h4>
          <ul className="space-y-2">
            {pkg.deliverables.map((deliverable, index) => (
              <li key={index} className="flex items-start space-x-3 group/item">
                <div className={`h-2 w-2 bg-${accentColor}-400 rounded-full mt-2 shrink-0 group-hover/item:bg-${accentColor}-300 transition-colors`}></div>
                <span className="text-sm text-white/70 font-light group-hover/item:text-white/80 transition-colors">
                  {deliverable}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 bg-${accentColor}-400 rounded-full animate-pulse`}></div>
            <span className="text-sm font-bold text-white text-heading uppercase tracking-wide">
              MISSION SUPPORT:
            </span>
          </div>
          <p className="text-sm text-white/80 font-light mt-1">
            {pkg.support}
          </p>
        </div>

        {/* CTA Button */}
        <Link to={getPackageRoute(pkg.id)} className="block">
          <button className={`w-full spacex-button-primary bg-gradient-to-r from-${accentColor}-500 to-${accentColor}-600 hover:from-${accentColor}-600 hover:to-${accentColor}-700 group-hover:shadow-glow-hover transition-all duration-500`}>
            <span className="flex items-center justify-center space-x-2">
              <span className="font-bold">LAUNCH MISSION</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </Link>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};
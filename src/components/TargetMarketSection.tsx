import { 
  Building2, 
  Users, 
  GraduationCap, 
  Home, 
  Globe, 
  Briefcase,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Heart
} from "lucide-react";

const TargetMarketSection = () => {
  const targetMarkets = [
    {
      icon: Globe,
      title: "Development Agencies & NGOs",
      description: "Supporting humanitarian and development organizations with reliable connectivity and technology solutions for their programs.",
      services: [
        "Rural connectivity solutions",
        "Program monitoring systems",
        "Communication infrastructure",
        "Training and capacity building"
      ],
      color: "blue",
      stats: "50+ Organizations"
    },
    {
      icon: Building2,
      title: "Government Institutions",
      description: "Providing secure and reliable technology infrastructure for government operations and citizen services.",
      services: [
        "Secure network infrastructure",
        "Digital government solutions",
        "Citizen service platforms",
        "Administrative automation"
      ],
      color: "green",
      stats: "30+ Government Bodies"
    },
    {
      icon: Briefcase,
      title: "Corporate Organizations",
      description: "Enabling large enterprises with comprehensive technology solutions for enhanced productivity and efficiency.",
      services: [
        "Enterprise connectivity",
        "Office automation",
        "IT infrastructure management",
        "Business continuity solutions"
      ],
      color: "purple",
      stats: "100+ Corporations"
    },
    {
      icon: TrendingUp,
      title: "Small & Medium Enterprises (SMEs)",
      description: "Empowering SMEs with cost-effective technology solutions that drive growth and competitiveness.",
      services: [
        "Affordable internet solutions",
        "Business automation tools",
        "Customer management systems",
        "Growth-oriented technology"
      ],
      color: "orange",
      stats: "300+ SMEs"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Supporting schools, colleges, and universities with educational technology and connectivity solutions.",
      services: [
        "Campus-wide connectivity",
        "Digital learning platforms",
        "Student management systems",
        "Research infrastructure"
      ],
      color: "cyan",
      stats: "75+ Institutions"
    },
    {
      icon: Home,
      title: "Households & Individuals",
      description: "Providing reliable and affordable technology solutions for personal and family use.",
      services: [
        "Home internet connectivity",
        "Consumer electronics",
        "Smart home solutions",
        "Personal device support"
      ],
      color: "pink",
      stats: "1000+ Households"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        icon: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:bg-blue-100",
        accent: "bg-blue-100"
      },
      green: {
        bg: "bg-green-50",
        icon: "bg-green-600",
        text: "text-green-600",
        border: "border-green-200",
        hover: "hover:bg-green-100",
        accent: "bg-green-100"
      },
      purple: {
        bg: "bg-purple-50",
        icon: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:bg-purple-100",
        accent: "bg-purple-100"
      },
      orange: {
        bg: "bg-orange-50",
        icon: "bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:bg-orange-100",
        accent: "bg-orange-100"
      },
      cyan: {
        bg: "bg-cyan-50",
        icon: "bg-cyan-600",
        text: "text-cyan-600",
        border: "border-cyan-200",
        hover: "hover:bg-cyan-100",
        accent: "bg-cyan-100"
      },
      pink: {
        bg: "bg-pink-50",
        icon: "bg-pink-600",
        text: "text-pink-600",
        border: "border-pink-200",
        hover: "hover:bg-pink-100",
        accent: "bg-pink-100"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };


  return (
    <section id="target-market" className="py-20 bg-white pt-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            <span>Target Market</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Serving Diverse Markets
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Across All Sectors
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide technology solutions tailored to the unique needs of different 
            market segments, from large corporations to individual households, ensuring 
            everyone benefits from digital transformation.
          </p>
        </div>

        {/* Target Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {targetMarkets.map((market, index) => {
            const colors = getColorClasses(market.color);
            return (
              <div 
                key={market.title}
                className={`group p-8 rounded-3xl bg-white border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                {/* Market Icon */}
                <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <market.icon className="h-8 w-8 text-white" />
                </div>

                {/* Market Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-2xl font-bold ${colors.text} group-hover:text-gray-900 transition-colors duration-300`}>
                      {market.title}
                    </h3>
                    <div className={`px-3 py-1 ${colors.accent} rounded-full text-xs font-semibold ${colors.text}`}>
                      {market.stats}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {market.description}
                  </p>
                  
                  {/* Services List */}
                  <div className="space-y-2 pt-4">
                    {market.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`h-4 w-4 ${colors.text} flex-shrink-0`} />
                        <span className="text-sm text-gray-600">{service}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <div className="pt-6">
                    <button className={`inline-flex items-center space-x-2 ${colors.text} hover:${colors.text}/80 font-semibold transition-colors duration-200 group`}>
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


        {/* Sector Statistics */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Market Reach & Impact</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive market coverage and proven track record across all sectors 
              demonstrate our commitment to inclusive technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium">Development Agencies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">30+</div>
              <div className="text-sm text-gray-600 font-medium">Government Bodies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-sm text-gray-600 font-medium">Corporations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">300+</div>
              <div className="text-sm text-gray-600 font-medium">SMEs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">75+</div>
              <div className="text-sm text-gray-600 font-medium">Educational Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600 font-medium">Households</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Growing Network?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're a large corporation, small business, educational institution, 
              or individual, we have the right technology solution for your needs.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Your Custom Solution
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetMarketSection;

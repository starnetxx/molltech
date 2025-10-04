import { 
  Satellite, 
  ShoppingCart, 
  Wrench, 
  Package, 
  Lightbulb, 
  ArrowRight,
  CheckCircle,
  Wifi,
  Smartphone,
  Home,
  Building,
  Shield
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Satellite,
      title: "Starlink Satellite Internet Deployment",
      description: "Installation & setup for enterprises, communities, NGOs, and rural areas. Fostering digital inclusion and economic growth.",
      features: [
        "Enterprise-grade installations",
        "Community connectivity solutions",
        "NGO and rural area coverage",
        "Digital inclusion programs",
        "Economic growth initiatives"
      ],
      color: "blue"
    },
    {
      icon: ShoppingCart,
      title: "Sales of Electronic Appliances",
      description: "Smart TVs, audio systems, refrigerators, freezers, office electronics, kitchen appliances, and more from trusted manufacturers.",
      features: [
        "Smart TVs & Audio Systems",
        "Refrigerators & Freezers",
        "Office Electronics",
        "Kitchen Appliances",
        "Genuine Products Guaranteed"
      ],
      color: "green"
    },
    {
      icon: Shield,
      title: "CCTV & Security Systems",
      description: "Complete security solutions including CCTV cameras, surveillance systems, access control, and monitoring services.",
      features: [
        "HD CCTV Cameras",
        "Remote Monitoring Systems",
        "Access Control Solutions",
        "24/7 Surveillance",
        "Professional Installation"
      ],
      color: "red"
    },
    {
      icon: Lightbulb,
      title: "Solar Energy Solutions",
      description: "Renewable energy systems including solar panels, inverters, batteries, and complete solar power installations.",
      features: [
        "Solar Panel Installation",
        "Inverter Systems",
        "Battery Storage Solutions",
        "Grid-Tie Systems",
        "Maintenance & Support"
      ],
      color: "yellow"
    },
    {
      icon: Wrench,
      title: "Repairs & Maintenance",
      description: "Skilled technicians for diagnostic, repair, and maintenance of electronic gadgets with professional service guarantee.",
      features: [
        "Expert Diagnostic Services",
        "Professional Repair Solutions",
        "Preventive Maintenance",
        "Warranty Coverage",
        "Fast Turnaround Times"
      ],
      color: "orange"
    },
    {
      icon: Lightbulb,
      title: "Technical Consultancy",
      description: "Smart office/home automation, IT and communication infrastructure design, and energy-efficient electronic solutions.",
      features: [
        "Smart Home Automation",
        "Office Automation Solutions",
        "IT Infrastructure Design",
        "Communication Systems",
        "Energy-Efficient Solutions"
      ],
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        icon: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:bg-blue-100"
      },
      green: {
        bg: "bg-green-50",
        icon: "bg-green-600",
        text: "text-green-600",
        border: "border-green-200",
        hover: "hover:bg-green-100"
      },
      orange: {
        bg: "bg-orange-50",
        icon: "bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:bg-orange-100"
      },
      purple: {
        bg: "bg-purple-50",
        icon: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:bg-purple-100"
      },
      cyan: {
        bg: "bg-cyan-50",
        icon: "bg-cyan-600",
        text: "text-cyan-600",
        border: "border-cyan-200",
        hover: "hover:bg-cyan-100"
      },
      red: {
        bg: "bg-red-50",
        icon: "bg-red-600",
        text: "text-red-600",
        border: "border-red-200",
        hover: "hover:bg-red-100"
      },
      yellow: {
        bg: "bg-yellow-50",
        icon: "bg-yellow-600",
        text: "text-yellow-600",
        border: "border-yellow-200",
        hover: "hover:bg-yellow-100"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="services" className="py-20 bg-gray-50 pt-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Wifi className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Technology
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Solutions & Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From cutting-edge internet connectivity to comprehensive electronic solutions, 
            we provide end-to-end technology services that drive digital transformation 
            and business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div 
                key={service.title}
                className={`group p-8 rounded-3xl bg-white border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                {/* Service Icon */}
                <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className={`text-2xl font-bold ${colors.text} group-hover:text-gray-900 transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 pt-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`h-4 w-4 ${colors.text} flex-shrink-0`} />
                        <span className="text-sm text-gray-600">{feature}</span>
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

        {/* Service Categories Overview */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Service Categories</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our services are organized into six main categories to serve diverse 
              technology needs across different sectors and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Satellite className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Connectivity</h4>
              <p className="text-gray-600 text-sm">
                Internet deployment and connectivity solutions for all environments
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Electronics</h4>
              <p className="text-gray-600 text-sm">
                Sales and supply of consumer electronics and appliances
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Security</h4>
              <p className="text-gray-600 text-sm">
                CCTV cameras and comprehensive security systems
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Solar Energy</h4>
              <p className="text-gray-600 text-sm">
                Renewable energy solutions and solar power systems
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Maintenance</h4>
              <p className="text-gray-600 text-sm">
                Professional repair and maintenance services for all devices
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Consultancy</h4>
              <p className="text-gray-600 text-sm">
                Technical advisory and automation solutions for businesses
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

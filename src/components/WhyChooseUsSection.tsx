import { 
  Shield, 
  Award, 
  Zap, 
  Globe, 
  Users, 
  CheckCircle,
  Star,
  TrendingUp,
  Headphones,
  MapPin
} from "lucide-react";

const WhyChooseUsSection = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "Years of technical experience with certified professionals and proven track record in delivering quality solutions.",
      features: [
        "Certified Technical Team",
        "Proven Track Record",
        "Quality Assurance",
        "Industry Expertise"
      ],
      color: "blue"
    },
    {
      icon: Zap,
      title: "Innovation-Driven",
      description: "Cutting-edge technologies including Starlink deployment and next-generation solutions for modern challenges.",
      features: [
        "Latest Technologies",
        "Starlink Expertise",
        "Future-Ready Solutions",
        "Continuous Innovation"
      ],
      color: "yellow"
    },
    {
      icon: Users,
      title: "Tailored Solutions",
      description: "Customized approaches that meet specific client needs, ensuring optimal results for every project.",
      features: [
        "Custom Solutions",
        "Client-Specific Approach",
        "Flexible Implementation",
        "Personalized Service"
      ],
      color: "green"
    },
    {
      icon: Award,
      title: "Certified Quality",
      description: "Reliable products from trusted manufacturers with comprehensive warranty and quality guarantees.",
      features: [
        "Genuine Products",
        "Manufacturer Warranty",
        "Quality Standards",
        "Reliability Guarantee"
      ],
      color: "purple"
    },
    {
      icon: Globe,
      title: "Nationwide Reach",
      description: "Comprehensive coverage across Nigeria with local support and service availability.",
      features: [
        "National Coverage",
        "Local Support Teams",
        "Remote & On-site Service",
        "Accessible Everywhere"
      ],
      color: "cyan"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and customer service to ensure uninterrupted operations.",
      features: [
        "24/7 Availability",
        "Technical Support",
        "Rapid Response",
        "Customer Care"
      ],
      color: "orange"
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
      yellow: {
        bg: "bg-yellow-50",
        icon: "bg-yellow-600",
        text: "text-yellow-600",
        border: "border-yellow-200",
        hover: "hover:bg-yellow-100"
      },
      green: {
        bg: "bg-green-50",
        icon: "bg-green-600",
        text: "text-green-600",
        border: "border-green-200",
        hover: "hover:bg-green-100"
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
      orange: {
        bg: "bg-orange-50",
        icon: "bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:bg-orange-100"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const stats = [
    { icon: Star, value: "500+", label: "Projects Completed", color: "text-yellow-500" },
    { icon: Users, value: "1000+", label: "Satisfied Clients", color: "text-blue-500" },
    { icon: MapPin, value: "50+", label: "Cities Covered", color: "text-green-500" },
    { icon: TrendingUp, value: "99%", label: "Success Rate", color: "text-purple-500" }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 pt-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Partner with
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Moll Technologies?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise, innovative solutions, and unwavering commitment 
            to deliver exceptional results that drive your success and growth.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const colors = getColorClasses(advantage.color);
            return (
              <div 
                key={advantage.title}
                className={`group p-8 rounded-3xl bg-white border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                {/* Advantage Icon */}
                <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <advantage.icon className="h-8 w-8 text-white" />
                </div>

                {/* Advantage Content */}
                <div className="space-y-4">
                  <h3 className={`text-2xl font-bold ${colors.text} group-hover:text-gray-900 transition-colors duration-300`}>
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 pt-4">
                    {advantage.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`h-4 w-4 ${colors.text} flex-shrink-0`} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonial Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say 
              about working with Moll Technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Moll Technologies delivered exceptional Starlink installation for our rural 
                community. The internet connectivity has transformed our educational programs."
              </p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-600">Community Development Manager</div>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Their technical consultancy helped us automate our office systems. 
                The efficiency gains have been remarkable for our business operations."
              </p>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-sm text-gray-600">Business Owner</div>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Professional service from start to finish. Their repair and maintenance 
                services kept our electronics running smoothly throughout the year."
              </p>
              <div className="font-semibold text-gray-900">Amina Hassan</div>
              <div className="text-sm text-gray-600">School Administrator</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their technology 
              infrastructure with Moll Technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => window.open("tel:+2347025554008")}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Call Now: +234 702 555 4008
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

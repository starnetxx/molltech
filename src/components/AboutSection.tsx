import { Building2, Target, Users, Award, Zap, Shield, Heart } from "lucide-react";

const AboutSection = () => {
  const coreValues = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in all our technology solutions and services."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Embracing cutting-edge technologies to deliver forward-thinking solutions."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Building trust through transparent, honest, and reliable business practices."
    },
    {
      icon: Users,
      title: "Customer-Centricity",
      description: "Putting our clients at the heart of everything we do, ensuring their success."
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Committed to environmentally responsible and sustainable technology practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white pt-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Building2 className="h-4 w-4" />
            <span>About Moll Technologies</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empowering the Future Through
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Technology Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Moll Technologies is a forward-looking enterprise company that provides 
            technology-driven solutions across multiple sectors, combining innovation 
            with enterprise solutions to help businesses and individuals stay connected, 
            efficient, and competitive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Company Overview */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Who We Are</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Formerly known as <strong>MOLL ELECTECH NIG LTD</strong>, we have evolved into 
                <strong> Moll Technologies</strong> (RC: 7262696), a comprehensive technology 
                solutions provider serving Africa and beyond.
              </p>
              <p>
                We specialize in delivering innovative, reliable, and user-friendly technology 
                solutions that empower individuals, businesses, and communities. Our expertise 
                spans across internet connectivity, consumer electronics, and digital consultancy.
              </p>
              <p>
                Our mission is to bridge digital gaps through cutting-edge connectivity, 
                software development, and smart digital services, ensuring efficiency, trust, 
                and growth in a rapidly evolving world.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Company Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">Moll Technologies</h4>
                    <p className="text-white/80 text-sm">RC: 7262696</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white text-sm">Technology Solutions Provider</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white text-sm">Serving Africa & Beyond</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white text-sm">Innovation-Driven Approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white text-sm">Customer-Centric Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our 
              commitment to excellence in technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={value.title}
                className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-blue-50 hover:to-blue-100 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200"
              >
                <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-blue-600 group-hover:text-blue-700" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What We Specialize In</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across multiple technology domains, providing 
              comprehensive solutions for diverse needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Internet Connectivity</h4>
              <p className="text-gray-600 text-sm">
                Starlink deployment for enterprises, communities, and development programs, 
                fostering digital inclusion and economic growth.
              </p>
            </div>

            <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Consumer Electronics</h4>
              <p className="text-gray-600 text-sm">
                Sales, repairs, and maintenance of electronic appliances with skilled 
                technicians and genuine products from trusted manufacturers.
              </p>
            </div>

            <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Technical Consultancy</h4>
              <p className="text-gray-600 text-sm">
                Smart office/home automation, IT infrastructure design, and energy-efficient 
                electronic solutions for modern businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

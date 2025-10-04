import { Target, Eye, ArrowRight, Globe, Users, Zap } from "lucide-react";

const MissionVisionSection = () => {
  return (
    <section id="mission-vision" className="py-20 bg-white pt-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Target className="h-4 w-4" />
            <span>Mission & Vision</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Purpose & Aspiration
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Driving Digital Transformation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission and vision statements reflect our commitment to empowering 
            communities and businesses through innovative technology solutions that 
            bridge digital gaps and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Mission Statement */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
              {/* Mission Icon */}
              <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-8">
                <Target className="h-10 w-10 text-white" />
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Mission
              </h3>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  At Moll Technologies, our mission is to deliver <strong>innovative, 
                  reliable, and user-friendly</strong> technology solutions that empower 
                  individuals, businesses, and communities.
                </p>
                <p>
                  We strive to bridge digital gaps through cutting-edge connectivity, 
                  software development, and smart digital services, ensuring 
                  <strong> efficiency, trust, and growth</strong> in a rapidly evolving world.
                </p>
              </div>

              {/* Mission Highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white/90 text-sm">Innovation-Driven</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white/90 text-sm">Reliable Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white/90 text-sm">User-Friendly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white/90 text-sm">Community Focused</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-300/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Vision Statement */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
              {/* Vision Icon */}
              <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-8">
                <Eye className="h-10 w-10 text-white" />
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Vision
              </h3>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Our vision is to become a <strong>leading technology solutions provider 
                  in Africa and beyond</strong> — pioneering advancements in digital 
                  transformation, connectivity, and innovation.
                </p>
                <p>
                  We are committed to shaping a future where technology drives 
                  <strong> sustainable development and inclusive progress</strong>, 
                  ensuring that no community is left behind in the digital revolution.
                </p>
              </div>

              {/* Vision Highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-white/90 text-sm">African Leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-white/90 text-sm">Global Reach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-white/90 text-sm">Sustainable Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-white/90 text-sm">Inclusive Progress</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-300/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        {/* Values & Impact */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Impact & Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide our mission and vision, ensuring we deliver 
              technology solutions that make a meaningful difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Digital Inclusion</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bridging digital gaps and ensuring technology access for all communities, 
                regardless of location or economic status.
              </p>
            </div>

            <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Community Empowerment</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Empowering individuals, businesses, and communities through accessible 
                and reliable technology solutions.
              </p>
            </div>

            <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation Excellence</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pioneering cutting-edge solutions that drive sustainable development 
                and inclusive progress across Africa and beyond.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 cursor-pointer group">
              <span className="font-semibold">Join Our Mission</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;

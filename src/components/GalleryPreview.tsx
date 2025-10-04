import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const GalleryPreview = () => {
  const navigate = useNavigate();
  
  // Show only first 3 images as preview
  const previewImages = Array.from({ length: 3 }, (_, i) => i + 1);
  
  // Show remaining count
  const totalImages = 16;
  const remainingCount = totalImages - previewImages.length;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Eye className="h-4 w-4" />
            <span>Service Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Service
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of technology solutions through our detailed service portfolio
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewImages.map((imageNum) => (
            <div 
              key={imageNum}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={`/img/${imageNum}.jpg`}
                alt={`Service Flyer ${imageNum}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/gallery')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            View All Flyers
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            <span className="ml-2 text-blue-200">({remainingCount} more)</span>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-sm text-gray-600 font-medium">Service Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm text-gray-600 font-medium">Quality Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600 font-medium">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-sm text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;

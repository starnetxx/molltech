import { useState } from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // All images from 1.jpg to 16.jpg
  const allImages = Array.from({ length: 16 }, (_, i) => i + 1);

  const openLightbox = (imageNum: number) => {
    setSelectedImage(imageNum);
    setCurrentImageIndex(imageNum - 1);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    setSelectedImage(allImages[currentImageIndex + 1] || allImages[0]);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    setSelectedImage(allImages[currentImageIndex - 1] || allImages[allImages.length - 1]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Our Service Portfolio</h1>
                <p className="text-gray-600">Browse our comprehensive service flyers and brochures</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{allImages.length}</div>
              <div className="text-sm text-gray-600">Service Flyers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allImages.map((imageNum) => (
            <div 
              key={imageNum}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => openLightbox(imageNum)}
            >
              <img
                src={`/img/${imageNum}.jpg`}
                alt={`Service Flyer ${imageNum}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-gray-800 font-semibold text-sm">{imageNum}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <h3 className="text-white font-semibold">Service Flyer #{imageNum}</h3>
                <p className="text-white/80 text-sm">Click to view full size</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-full">
            <img
              src={`/img/${selectedImage}.jpg`}
              alt={`Service Flyer ${selectedImage}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-white font-medium">
              {currentImageIndex + 1} / {allImages.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

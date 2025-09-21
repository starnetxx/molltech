import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Eye } from 'lucide-react';

export const ProjectGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = Array.from({ length: 11 }, (_, i) => ({
    src: `/p${i + 1}.jpg`,
    title: `Network Project ${i + 1}`,
    description: `Professional Mikrotik configuration and network setup - Project ${i + 1}`
  }));

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="gallery" className="py-24 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium backdrop-blur-sm mb-6">
            <Camera className="h-4 w-4" />
            <span>Project Showcase</span>
          </div>
          <h2 className="text-heading text-4xl lg:text-5xl font-black text-white mb-6">
            OUR NETWORK
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              DEPLOYMENTS
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            Explore our portfolio of successfully deployed Mikrotik networks, from basic configurations to advanced enterprise solutions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative spacex-glass hover-lift cursor-pointer animate-slide-in-up overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => openModal(index)}
            >
              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Eye className="h-8 w-8 text-white mx-auto" />
                    <p className="text-white font-semibold text-sm">View Project</p>
                  </div>
                </div>
              </div>
              
              {/* Info */}
              <div className="p-4">
                <h3 className="text-white font-bold text-sm mb-1 text-heading">
                  {image.title}
                </h3>
                <p className="text-white/60 text-xs font-light">
                  Professional Network Setup
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-in-up" style={{animationDelay: '1.2s'}}>
          <div className="spacex-glass inline-block p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 text-heading">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/70 mb-6 max-w-md">
              Join our growing list of satisfied clients with professional network solutions.
            </p>
            <button 
              className="spacex-button-primary hover-lift"
              onClick={() => window.location.href = 'tel:09063412927'}
            >
              <Camera className="h-5 w-5 mr-2" />
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-60 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={closeModal}
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl max-h-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
            
            {/* Image Info */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white mb-2 text-heading">
                {images[selectedImage].title}
              </h3>
              <p className="text-white/70">
                {images[selectedImage].description}
              </p>
              <div className="mt-2 text-sm text-white/50">
                {selectedImage + 1} of {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

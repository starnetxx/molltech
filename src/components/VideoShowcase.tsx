import { useState } from "react";
import { Play, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const VideoShowcase = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Get all video files from the videos folder
  const videoFiles = [
    "1.mp4",
    "2.mp4", 
    "3.mp4",
    "4.mp4",
    "5.mp4",
    "6.mp4",
    "7.mp4",
    "8.mp4"
  ];

  // Show only first 3 videos as preview
  const previewVideos = videoFiles.slice(0, 3);
  const remainingCount = videoFiles.length - previewVideos.length;

  const openVideo = (videoFile: string) => {
    setSelectedVideo(videoFile);
    setCurrentVideoIndex(videoFiles.indexOf(videoFile));
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const nextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % videoFiles.length;
    setCurrentVideoIndex(nextIndex);
    setSelectedVideo(videoFiles[nextIndex]);
  };

  const prevVideo = () => {
    const prevIndex = (currentVideoIndex - 1 + videoFiles.length) % videoFiles.length;
    setCurrentVideoIndex(prevIndex);
    setSelectedVideo(videoFiles[prevIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeVideo();
    if (e.key === 'ArrowRight') nextVideo();
    if (e.key === 'ArrowLeft') prevVideo();
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Play className="h-4 w-4" />
            <span>Project Showcase</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch our project showcase videos to see our technology solutions in action, 
            from Starlink installations to security systems and solar energy projects.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewVideos.map((videoFile, index) => (
            <div 
              key={videoFile}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => openVideo(videoFile)}
            >
              {/* Video Thumbnail */}
              <div className="relative w-full h-64 bg-gray-900 rounded-2xl overflow-hidden">
                <video
                  src={`/videos/${videoFile}`}
                  className="w-full h-full object-cover"
                  preload="metadata"
                  muted
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Project #{index + 1}
                  </div>
                </div>
              </div>
              
              {/* Video Info */}
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">Project Showcase #{index + 1}</h3>
                <p className="text-gray-600 text-sm">Click to watch project video</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/videos')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            <span className="ml-2 text-blue-200">({remainingCount} more)</span>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{videoFiles.length}</div>
            <div className="text-sm text-gray-600 font-medium">Project Videos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm text-gray-600 font-medium">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-sm text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          {/* Close Button */}
          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevVideo}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextVideo}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Video Player */}
          <div className="max-w-4xl max-h-full">
            <video
              src={`/videos/${selectedVideo}`}
              controls
              autoPlay
              className="max-w-full max-h-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-white font-medium">
              {currentVideoIndex + 1} / {videoFiles.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoShowcase;

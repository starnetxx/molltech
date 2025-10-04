import { useState } from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Videos = () => {
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
                <h1 className="text-3xl font-bold text-gray-900">Project Showcase</h1>
                <p className="text-gray-600">Watch our project showcase videos</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{videoFiles.length}</div>
              <div className="text-sm text-gray-600">Videos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videoFiles.map((videoFile, index) => (
            <div 
              key={videoFile}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => openVideo(videoFile)}
            >
              {/* Video Thumbnail */}
              <div className="relative w-full h-64 bg-gray-900 rounded-xl overflow-hidden">
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
              <div className="p-4 bg-white rounded-b-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Project Showcase #{index + 1}</h3>
                <p className="text-gray-600 text-sm">Click to watch project video</p>
              </div>
            </div>
          ))}
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
    </div>
  );
};

export default Videos;

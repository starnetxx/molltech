import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const phoneNumber = '2347025554008'; // WhatsApp number without + or spaces
  const message = encodeURIComponent(
    'Hello Moll Technologies! I would like to inquire about your services.'
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main WhatsApp Button */}
      <div className="relative">
        <div className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
          <MessageCircle className="h-7 w-7 text-white" fill="white" />
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-xs font-bold">1</span>
          </div>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        </div>
        
        {/* Tooltip */}
        <div 
          className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
            <span className="text-sm font-medium">Chat with us on WhatsApp</span>
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900"></div>
          </div>
        </div>
      </div>
      
      {/* Floating Messages */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </a>
  );
};

export default WhatsAppButton;

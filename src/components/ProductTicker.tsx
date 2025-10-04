import React from 'react';
import { 
  TrendingUp, 
  TrendingDown,
  Satellite,
  Router,
  Wifi,
  Cable,
  Sun,
  Shield
} from 'lucide-react';

interface TickerProduct {
  id: string;
  name: string;
  change: number;
  changeType: 'up' | 'down' | 'neutral';
}

export const ProductTicker = () => {
  const tickerProducts: TickerProduct[] = [
    {
      id: 'starlink-standard',
      name: 'Starlink V4 Standard Kit',
      change: 2.4,
      changeType: 'up'
    },
    {
      id: 'starlink-business',
      name: 'Starlink Business Kit',
      change: 1.8,
      changeType: 'up'
    },
    {
      id: 'mikrotik-hap-ax2',
      name: 'MikroTik hAP ax²',
      change: 0.6,
      changeType: 'up'
    },
    {
      id: 'mikrotik-hap-ax3',
      name: 'MikroTik hAP ax³',
      change: 1.2,
      changeType: 'up'
    },
    {
      id: 'wifi-6-ap',
      name: 'Wi-Fi 6 Access Point',
      change: 0.3,
      changeType: 'up'
    },
    {
      id: 'cat6-cable',
      name: 'CAT6 Ethernet Cable',
      change: 0,
      changeType: 'neutral'
    },
    {
      id: 'solar-100w',
      name: '100W Solar Power Kit',
      change: 3.2,
      changeType: 'up'
    },
    {
      id: 'cctv-kit',
      name: 'CCTV Security Kit',
      change: 1.5,
      changeType: 'up'
    },
    {
      id: 'outdoor-ap',
      name: 'Outdoor Access Point',
      change: 0.8,
      changeType: 'up'
    },
    {
      id: 'fiber-cable',
      name: 'Fiber Optic Cable',
      change: 0.4,
      changeType: 'up'
    },
    {
      id: 'solar-300w',
      name: '300W Solar Power System',
      change: 2.1,
      changeType: 'up'
    },
    {
      id: 'mikrotik-mini',
      name: 'MikroTik hAP mini',
      change: 0.9,
      changeType: 'up'
    }
  ];

  // Duplicate products for seamless scrolling
  const duplicatedProducts = [...tickerProducts, ...tickerProducts];

  return (
    <div className="bg-transparent text-white py-2 relative z-40 overflow-hidden" style={{ marginTop: '120px' }}>
      <div className="relative">
        {/* Label */}
        <div className="absolute left-0 top-0 bottom-0 flex items-center px-3 z-10">
          <span className="text-[10px] font-medium text-white uppercase tracking-wider">
            Products
          </span>
        </div>

        {/* Scrolling ticker */}
        <div className="ml-20 overflow-hidden">
          <div 
            className="flex whitespace-nowrap"
            style={{
              animation: 'scroll 60s linear infinite'
            }}
          >
            {duplicatedProducts.map((product, index) => (
              <div 
                key={`${product.id}-${index}`}
                className="flex-shrink-0 px-3 border-r border-slate-600 last:border-r-0"
              >
                <div className="text-center">
                  {/* Product Name */}
                  <div className="text-[10px] font-medium text-white mb-0.5">
                    {product.name}
                  </div>
                  
                  {/* Change */}
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-[9px] text-white">
                      {product.change === 0 ? '0.0' : product.change.toFixed(1)}
                    </span>
                    <span className="text-[9px] text-white">
                      {product.change === 0 ? '0.0%' : `${product.change.toFixed(1)}%`}
                    </span>
                    <div className="flex items-center">
                      {product.changeType === 'up' && (
                        <TrendingUp className="h-2.5 w-2.5 text-sky-400" />
                      )}
                      {product.changeType === 'down' && (
                        <TrendingDown className="h-2.5 w-2.5 text-red-400" />
                      )}
                      {product.changeType === 'neutral' && (
                        <div className="w-2.5 h-2.5 flex items-center justify-center">
                          <div className="w-1.5 h-0.5 bg-slate-400"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ProductTicker;

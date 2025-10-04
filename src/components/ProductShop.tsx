import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail,
  Satellite,
  Router,
  Wifi,
  Cable,
  Sun,
  Shield,
  Signal,
  Eye,
  Heart,
  X
} from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  specs: string[];
  image: string;
  popular?: boolean;
  price?: string;
}

export const ProductShop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', name: 'All Products', icon: ShoppingCart, count: 12 },
    { id: 'starlink', name: 'Starlink Internet', icon: Satellite, count: 2 },
    { id: 'routers', name: 'Mikrotik Routers', icon: Router, count: 3 },
    { id: 'access-points', name: 'Access Points', icon: Wifi, count: 2 },
    { id: 'cables', name: 'Cables & Accessories', icon: Cable, count: 2 },
    { id: 'solar', name: 'Solar Power', icon: Sun, count: 2 },
    { id: 'security', name: 'Security Systems', icon: Shield, count: 1 }
  ];

  const products: Product[] = [
    // Starlink Products
    {
      id: 'starlink-standard',
      name: 'Starlink V4 Standard Kit',
      category: 'starlink',
      description: 'High-speed, low-latency internet for residential and business use',
      features: [
        'Download speeds: 200-500 Mbps',
        'Low latency: 25-35ms',
        'Weather resistant design',
        'Easy self-installation'
      ],
      specs: [
        'Coverage: Global',
        'Power: 100-150W',
        'Temperature: -30°C to +50°C',
        'Dimensions: 59.5cm x 38.5cm'
      ],
      image: '/v4.jpg',
      popular: true,
      price: 'Contact for Quote'
    },
    {
      id: 'starlink-business',
      name: 'Starlink Business Kit',
      category: 'starlink',
      description: 'Enterprise-grade satellite internet with priority support',
      features: [
        'Priority network access',
        'Higher upload speeds',
        'Business-grade support',
        'Service Level Agreement'
      ],
      specs: [
        'Download: 500+ Mbps',
        'Upload: 50-80 Mbps',
        'Priority data allocation',
        '24/7 customer support'
      ],
      image: '/high_performance.jpg',
      price: 'Contact for Quote'
    },

    // Mikrotik Routers
    {
      id: 'mikrotik-hap-ax2',
      name: 'MikroTik hAP ax²',
      category: 'routers',
      description: 'Dual-band Wi-Fi 6 router with advanced features',
      features: [
        'Wi-Fi 6 (802.11ax) support',
        'Dual-band operation',
        'RouterOS operating system',
        'Advanced security features'
      ],
      specs: [
        '2.4GHz: 574 Mbps',
        '5GHz: 2402 Mbps',
        'Gigabit Ethernet ports',
        'USB 3.0 port'
      ],
      image: '/ax2.jpg',
      popular: true,
      price: 'Contact for Quote'
    },
    {
      id: 'mikrotik-hap-ax3',
      name: 'MikroTik hAP ax³',
      category: 'routers',
      description: 'Tri-band Wi-Fi 6E router for high-performance networking',
      features: [
        'Tri-band Wi-Fi 6E',
        'High-speed connectivity',
        'Advanced routing features',
        'Professional management'
      ],
      specs: [
        '2.4GHz: 574 Mbps',
        '5GHz: 2402 Mbps',
        '6GHz: 2402 Mbps',
        'Multi-Gigabit ports'
      ],
      image: '/ax3.jpg',
      price: 'Contact for Quote'
    },
    {
      id: 'mikrotik-hap-mini',
      name: 'MikroTik hAP mini',
      category: 'routers',
      description: 'Compact router perfect for small offices and homes',
      features: [
        'Compact design',
        'Dual-band Wi-Fi',
        'RouterOS features',
        'Affordable solution'
      ],
      specs: [
        '2.4GHz: 300 Mbps',
        '5GHz: 866 Mbps',
        '4 Ethernet ports',
        'Compact size'
      ],
      image: '/mini.jpg',
      price: 'Contact for Quote'
    },

    // Access Points
    {
      id: 'wifi-6-ap',
      name: 'Wi-Fi 6 Access Point',
      category: 'access-points',
      description: 'High-performance access point for enterprise networks',
      features: [
        'Wi-Fi 6 technology',
        'High-density support',
        'Centralized management',
        'PoE+ powered'
      ],
      specs: [
        '2.4GHz: 574 Mbps',
        '5GHz: 2402 Mbps',
        '802.3at PoE+',
        'Cloud management'
      ],
      image: '/placeholder.svg',
      price: 'Contact for Quote'
    },
    {
      id: 'outdoor-ap',
      name: 'Outdoor Access Point',
      category: 'access-points',
      description: 'Weather-resistant outdoor access point',
      features: [
        'IP67 weather rating',
        'Long-range coverage',
        'Outdoor mounting kit',
        'PoE powered'
      ],
      specs: [
        '2.4GHz: 300 Mbps',
        '5GHz: 867 Mbps',
        'Weather resistant',
        'Outdoor rated'
      ],
      image: '/placeholder.svg',
      price: 'Contact for Quote'
    },

    // Cables & Accessories
    {
      id: 'cat6-cable',
      name: 'CAT6 Ethernet Cable',
      category: 'cables',
      description: 'High-quality CAT6 cable for reliable network connections',
      features: [
        'Gigabit speed support',
        'High-quality construction',
        'Various lengths available',
        'Durable design'
      ],
      specs: [
        'Category 6 standard',
        '10 Gigabit support',
        'UTP construction',
        'Multiple lengths'
      ],
      image: '/placeholder.svg',
      price: 'Contact for Quote'
    },
    {
      id: 'fiber-cable',
      name: 'Fiber Optic Cable',
      category: 'cables',
      description: 'Single-mode fiber optic cable for long-distance connections',
      features: [
        'Single-mode fiber',
        'Long-distance support',
        'High bandwidth',
        'Low attenuation'
      ],
      specs: [
        'Single-mode OS2',
        'Up to 40km range',
        'High bandwidth',
        'Professional grade'
      ],
      image: '/placeholder.svg',
      price: 'Contact for Quote'
    },

    // Solar Power
    {
      id: 'solar-100w',
      name: '100W Solar Power Kit',
      category: 'solar',
      description: 'Complete solar power solution for remote installations',
      features: [
        'Monocrystalline panels',
        'MPPT charge controller',
        'Deep cycle battery',
        'Complete wiring kit'
      ],
      specs: [
        'Panel: 100W monocrystalline',
        'Controller: 30A MPPT',
        'Battery: 100Ah AGM',
        'Runtime: 24-48 hours'
      ],
      image: '/placeholder.svg',
      popular: true,
      price: 'Contact for Quote'
    },
    {
      id: 'solar-300w',
      name: '300W Solar Power System',
      category: 'solar',
      description: 'High-capacity solar system for enterprise installations',
      features: [
        'Multiple panel array',
        'Hybrid inverter',
        'Lithium battery bank',
        'Remote monitoring'
      ],
      specs: [
        'Panels: 3x 100W',
        'Inverter: 1000W hybrid',
        'Battery: 300Ah LiFePO4',
        'Runtime: 3-5 days'
      ],
      image: '/placeholder.svg',
      price: 'Contact for Quote'
    },

    // Security Systems
    {
      id: 'cctv-kit',
      name: 'CCTV Security Kit',
      category: 'security',
      description: 'Complete CCTV surveillance system for security monitoring',
      features: [
        'HD cameras',
        'NVR recording system',
        'Remote monitoring',
        'Mobile app access'
      ],
      specs: [
        '4MP HD cameras',
        '1TB storage',
        'Night vision',
        'Motion detection'
      ],
      image: '/placeholder.svg',
      price: 'Contact for Quote'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const displayedProducts = showAllProducts ? filteredProducts : filteredProducts.slice(0, 4);

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return products.length;
    return products.filter(product => product.category === categoryId).length;
  };

  return (
    <section id="shop" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <ShoppingCart className="h-4 w-4" />
            <span>Product Catalog</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technology
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Products & Equipment
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse our comprehensive range of technology products and equipment for all your connectivity, 
            security, and power needs
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const count = getCategoryCount(category.id);
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {displayedProducts.map((product) => {
            const categoryIcon = categories.find(cat => cat.id === product.category)?.icon || ShoppingCart;
            const Icon = categoryIcon;
            
            return (
              <div 
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.popular && (
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center space-x-1 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Popular</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon className="h-4 w-4 text-blue-600" />
                    <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                      {categories.find(cat => cat.id === product.category)?.name}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-blue-600">
                      {product.price}
                    </span>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      <Eye className="h-4 w-4" />
                      <span>View Details</span>
                    </button>
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.open('tel:+2347025554008')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Get Quote
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {filteredProducts.length > 4 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAllProducts(!showAllProducts)}
              variant="outline"
              className="px-8 py-3 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              {showAllProducts ? 'Show Less' : `Show All ${filteredProducts.length} Products`}
              <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                showAllProducts ? 'rotate-180' : ''
              }`} />
            </Button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{products.length}</div>
            <div className="text-sm text-gray-600 font-medium">Total Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{categories.length - 1}</div>
            <div className="text-sm text-gray-600 font-medium">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600 font-medium">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-sm text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {selectedProduct.features.map((feature, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-center">
                            <Star className="h-3 w-3 text-blue-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technical Specifications</h4>
                      <ul className="space-y-1">
                        {selectedProduct.specs.map((spec, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-center">
                            <Star className="h-3 w-3 text-blue-600 mr-2" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('tel:+2347025554008')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call for Quote
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.open('mailto:mollelectechnigltd@gmail.com')}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Inquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductShop;

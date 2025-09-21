import React, { useState } from 'react';
import { 
  Wifi, 
  Router, 
  Satellite, 
  Cable, 
  Sun, 
  Zap, 
  Shield, 
  Signal,
  Phone,
  Mail,
  X,
  ShoppingCart,
  Star,
  ArrowRight
} from 'lucide-react';

interface Device {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  specs: string[];
  image: string;
  popular?: boolean;
}

export const DeviceShop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [quoteDevice, setQuoteDevice] = useState<Device | null>(null);
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const categories = [
    { id: 'all', name: 'All Products', icon: ShoppingCart },
    { id: 'starlink', name: 'Starlink', icon: Satellite },
    { id: 'routers', name: 'Mikrotik Routers', icon: Router },
    { id: 'access-points', name: 'Access Points', icon: Wifi },
    { id: 'cables', name: 'Cables & Accessories', icon: Cable },
    { id: 'solar', name: 'Solar Power', icon: Sun },
    { id: 'ptp', name: 'Point-to-Point', icon: Signal }
  ];

  const devices: Device[] = [
    // Starlink Devices
    {
      id: 'starlink-standard',
      name: 'Starlink V4 Standard Kit',
      category: 'starlink',
      description: 'High-speed, low-latency internet for residential and business use',
      features: [
        'Download speeds: 200-500 Mbps',
        'Low latency: 25-35ms',
        'Weather resistant',
        'Easy self-installation'
      ],
      specs: [
        'Coverage: Global',
        'Power consumption: 100-150W',
        'Temperature range: -30°C to +50°C',
        'Dimensions: 59.5cm x 38.5cm'
      ],
      image: '/v4.jpg',
      popular: true
    },
    {
      id: 'starlink-business',
      name: 'Starlink Business High Performance Kit',
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
      image: '/high_performance.jpg'
    },
    {
      id: 'starlink-mini',
      name: 'Starlink Mini',
      category: 'starlink',
      description: 'Compact and portable satellite internet for mobile use',
      features: [
        'Ultra-portable design',
        'Battery powered option',
        'Quick setup anywhere',
        'Perfect for travel'
      ],
      specs: [
        'Download: 50-100 Mbps',
        'Upload: 5-15 Mbps',
        'Power consumption: 20-40W',
        'Weight: 2.5kg'
      ],
      image: '/placeholder.svg'
    },

    // Mikrotik Routers
    {
      id: 'mikrotik-hap-ax2',
      name: 'MikroTik hAP ax²',
      category: 'routers',
      description: 'Dual-band Wi-Fi 6 router with advanced features',
      features: [
        'Wi-Fi 6 (802.11ax)',
        'Dual-band 2.4/5GHz',
        'MU-MIMO technology',
        'Advanced security features'
      ],
      specs: [
        '4x Gigabit Ethernet',
        '1x USB 2.0 port',
        '256MB RAM',
        'RouterOS Level 4 license'
      ],
      image: '/ax2.jpg'
    },
    {
      id: 'mikrotik-hap-ax3',
      name: 'MikroTik hAP ax³',
      category: 'routers',
      description: 'Advanced tri-band Wi-Fi 6 router with superior performance',
      features: [
        'Wi-Fi 6 tri-band technology',
        'Dual 5GHz + 2.4GHz bands',
        'High-gain external antennas',
        'Advanced QoS features'
      ],
      specs: [
        '5x Gigabit Ethernet ports',
        'USB 3.0 port',
        '1GB RAM',
        'RouterOS Level 4 license'
      ],
      image: '/ax3.jpg',
      popular: true
    },
    {
      id: 'mikrotik-rb5009',
      name: 'MikroTik RB5009UPr+S+IN',
      category: 'routers',
      description: 'Professional router with PoE and SFP+ connectivity',
      features: [
        'ARM64 quad-core 1.4GHz',
        'PoE-out on all ports',
        'SFP+ 10Gbps port',
        'Rackmount ready'
      ],
      specs: [
        '7x Gigabit Ethernet',
        '1x SFP+ port',
        '1x USB 3.0',
        '1GB RAM'
      ],
      image: '/placeholder.svg'
    },

    // Access Points
    {
      id: 'ubiquiti-u6-pro',
      name: 'Ubiquiti UniFi U6 Pro',
      category: 'access-points',
      description: 'Wi-Fi 6 access point with advanced features',
      features: [
        'Wi-Fi 6 technology',
        'Tri-band operation',
        'Advanced security',
        'Seamless roaming'
      ],
      specs: [
        '4x4 MU-MIMO',
        'Up to 5.3 Gbps',
        'PoE+ powered',
        'UniFi Network management'
      ],
      image: '/placeholder.svg'
    },
    {
      id: 'mikrotik-cap-ax',
      name: 'MikroTik cAP ax',
      category: 'access-points',
      description: 'Ceiling-mounted Wi-Fi 6 access point',
      features: [
        'Wi-Fi 6 dual-band',
        'Ceiling mount design',
        'PoE powered',
        'CAPsMAN support'
      ],
      specs: [
        '2x2 MIMO',
        '1x Gigabit Ethernet',
        'PoE 802.3af',
        'Integrated antennas'
      ],
      image: '/placeholder.svg',
      popular: true
    },
    {
      id: 'cudy-ax1800',
      name: 'Cudy AX1800 Wi-Fi 6 Access Point',
      category: 'access-points',
      description: 'Affordable Wi-Fi 6 access point for small to medium businesses',
      features: [
        'Wi-Fi 6 dual-band',
        'MU-MIMO technology',
        'Easy mesh setup',
        'PoE+ support'
      ],
      specs: [
        'AX1800 speeds',
        '1x Gigabit Ethernet',
        'PoE+ powered',
        'Wall/ceiling mount'
      ],
      image: '/placeholder.svg',
    },
    {
      id: 'ruijie-rg-ap820',
      name: 'Ruijie RG-AP820-L Wi-Fi 6 AP',
      category: 'access-points',
      description: 'Enterprise-grade access point with cloud management',
      features: [
        'Wi-Fi 6 technology',
        'Cloud management',
        'High-density support',
        'Advanced security'
      ],
      specs: [
        'AX3000 speeds',
        '2.5G Ethernet port',
        'PoE+ powered',
        'Indoor/outdoor rated'
      ],
      image: '/placeholder.svg',
    },
    {
      id: 'wavlink-ax1800',
      name: 'Wavlink AX1800 Ceiling AP',
      category: 'access-points',
      description: 'Ceiling-mounted access point with seamless roaming',
      features: [
        'Wi-Fi 6 dual-band',
        'Seamless roaming',
        'Centralized management',
        'Easy installation'
      ],
      specs: [
        'AX1800 speeds',
        '1x Gigabit Ethernet',
        'PoE powered',
        'Ceiling mount design'
      ],
      image: '/placeholder.svg',
    },
    {
      id: 'tenda-w15e',
      name: 'Tenda W15E Wi-Fi 6 Access Point',
      category: 'access-points',
      description: 'Cost-effective Wi-Fi 6 solution for business networks',
      features: [
        'Wi-Fi 6 technology',
        'Dual-band operation',
        'Mesh networking',
        'Easy configuration'
      ],
      specs: [
        'AX1500 speeds',
        '1x Gigabit Ethernet',
        'PoE powered',
        'Wall/ceiling mount'
      ],
      image: '/placeholder.svg',
    },
    {
      id: 'tplink-eap670',
      name: 'TP-Link EAP670 Wi-Fi 6 AP',
      category: 'access-points',
      description: 'Professional Wi-Fi 6 access point with Omada SDN',
      features: [
        'Wi-Fi 6 technology',
        'Omada SDN platform',
        'High-performance antennas',
        'Band steering'
      ],
      specs: [
        'AX5400 speeds',
        '2.5G + 1G Ethernet',
        'PoE+ powered',
        'Ceiling mount'
      ],
      image: '/placeholder.svg',
      popular: true
    },
    {
      id: 'grandstream-gwn7664',
      name: 'Grandstream GWN7664 Wi-Fi 6 AP',
      category: 'access-points',
      description: 'Enterprise Wi-Fi 6 access point with advanced security',
      features: [
        'Wi-Fi 6 tri-band',
        'Enterprise security',
        'GWN.Cloud management',
        'High-density support'
      ],
      specs: [
        'AX6000 speeds',
        '2.5G + 1G Ethernet',
        'PoE++ powered',
        'Indoor/outdoor rated'
      ],
      image: '/placeholder.svg',
    },

    // Point-to-Point
    {
      id: 'ubiquiti-airfiber-60',
      name: 'Ubiquiti AirFiber 60 XG',
      category: 'ptp',
      description: 'High-capacity 60GHz point-to-point radio',
      features: [
        '60GHz frequency',
        'Up to 10+ Gbps',
        'Long-range capability',
        'Weather resistant'
      ],
      specs: [
        'Distance: Up to 12km',
        'Throughput: 10+ Gbps',
        'Latency: <1ms',
        'Integrated antenna'
      ],
      image: '/placeholder.svg'
    },
    {
      id: 'mikrotik-wireless-wire',
      name: 'MikroTik Wireless Wire',
      category: 'ptp',
      description: '60GHz point-to-point wireless system',
      features: [
        'Plug-and-play setup',
        'Gigabit speeds',
        'No licensing required',
        'Compact design'
      ],
      specs: [
        'Distance: Up to 1km',
        'Throughput: 1+ Gbps',
        'Frequency: 60GHz',
        'Auto-alignment'
      ],
      image: '/placeholder.svg'
    },

    // Cables & Accessories
    {
      id: 'cat6a-cable',
      name: 'CAT6A Ethernet Cable',
      category: 'cables',
      description: 'High-performance network cable for 10Gbps',
      features: [
        '10Gbps support',
        'Shielded design',
        'Various lengths',
        'Professional grade'
      ],
      specs: [
        'Category 6A',
        'Frequency: 500MHz',
        'Length: 1m-100m',
        'Copper conductors'
      ],
      image: '/placeholder.svg'
    },
    {
      id: 'fiber-cable',
      name: 'Single-Mode Fiber Cable',
      category: 'cables',
      description: 'Long-distance fiber optic cable',
      features: [
        'Single-mode fiber',
        'LC/SC connectors',
        'Low loss design',
        'Various lengths'
      ],
      specs: [
        'Wavelength: 1310/1550nm',
        'Core: 9/125μm',
        'Connector loss: <0.3dB',
        'Custom lengths available'
      ],
      image: '/placeholder.svg'
    },

    // Solar Power
    {
      id: 'solar-kit-100w',
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
      image: '/placeholder.svg'
    },
    {
      id: 'solar-kit-300w',
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
      popular: true
    }
  ];

  const filteredDevices = selectedCategory === 'all' 
    ? devices 
    : devices.filter(device => device.category === selectedCategory);

  // Show only first 4 devices initially, or all if showAllProducts is true
  const displayedDevices = showAllProducts ? filteredDevices : filteredDevices.slice(0, 4);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the quote request to your backend
    const subject = `Quote Request: ${quoteDevice?.name}`;
    const body = `Name: ${quoteForm.name}\nEmail: ${quoteForm.email}\nPhone: ${quoteForm.phone}\nCompany: ${quoteForm.company}\n\nProduct: ${quoteDevice?.name}\n\nMessage: ${quoteForm.message}`;
    
    window.location.href = `mailto:traceroot.io@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setQuoteDevice(null);
    setQuoteForm({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section id="shop" className="py-24 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium backdrop-blur-sm mb-6">
            <ShoppingCart className="h-4 w-4" />
            <span>Professional Equipment</span>
          </div>
          <h2 className="text-heading text-4xl lg:text-5xl font-black text-white mb-6">
            NETWORK DEVICE
            <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              MARKETPLACE
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            Professional-grade networking equipment from trusted brands. Get personalized quotes for all your network infrastructure needs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Device Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedDevices.map((device, index) => (
            <div
              key={device.id}
              className="spacex-card group hover-lift animate-slide-in-up relative overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Popular Badge */}
              {device.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-primary px-3 py-1 rounded-full text-white text-xs font-bold flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>POPULAR</span>
                  </div>
                </div>
              )}

              {/* Device Image */}
              <div className="aspect-square bg-white/5 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src={device.image}
                  alt={device.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </div>

              {/* Device Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 text-heading group-hover:text-blue-200 transition-colors">
                    {device.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {device.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {device.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-xs text-white/60 flex items-start space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    Specifications:
                  </h4>
                  <ul className="space-y-1">
                    {device.specs.slice(0, 2).map((spec, i) => (
                      <li key={i} className="text-xs text-white/60 flex items-start space-x-2">
                        <div className="w-1 h-1 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Get Quote Button */}
                <button
                  onClick={() => setQuoteDevice(device)}
                  className="w-full spacex-button-primary bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 group-hover:shadow-glow-hover transition-all duration-500 mt-6"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span className="font-bold">GET QUOTE</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        {!showAllProducts && filteredDevices.length > 4 && (
          <div className="text-center mt-12 animate-slide-in-up" style={{animationDelay: '0.5s'}}>
            <button
              onClick={() => setShowAllProducts(true)}
              className="spacex-button-primary bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-lg px-12 py-6 hover-lift"
            >
              <span className="flex items-center space-x-3">
                <ShoppingCart className="h-6 w-6" />
                <span className="font-bold">VIEW ALL PRODUCTS</span>
                <ArrowRight className="h-6 w-6" />
              </span>
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-in-up" style={{animationDelay: '1s'}}>
          <div className="spacex-glass inline-block p-8 rounded-2xl max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 text-heading">
              Need Custom Solutions?
            </h3>
            <p className="text-white/70 mb-6">
              Our experts can design custom network solutions tailored to your specific requirements. 
              Contact us for consultation and bulk pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="spacex-button-primary hover-lift"
                onClick={() => window.location.href = 'tel:09063412927'}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call: 09063412927
              </button>
              <button 
                className="spacex-button-secondary hover-lift"
                onClick={() => window.location.href = 'mailto:traceroot.io@gmail.com'}
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      {quoteDevice && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="spacex-glass max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white text-heading">
                Request Quote: {quoteDevice.name}
              </h3>
              <button
                onClick={() => setQuoteDevice(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={quoteForm.name}
                    onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={quoteForm.email}
                    onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    value={quoteForm.company}
                    onChange={(e) => setQuoteForm({...quoteForm, company: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Additional Requirements
                </label>
                <textarea
                  value={quoteForm.message}
                  onChange={(e) => setQuoteForm({...quoteForm, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project requirements, quantities needed, installation location, etc."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 spacex-button-primary hover-lift"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Quote Request
                </button>
                <button
                  type="button"
                  onClick={() => setQuoteDevice(null)}
                  className="flex-1 spacex-button-secondary hover-lift"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

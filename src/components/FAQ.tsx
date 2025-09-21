import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqItems: FAQItem[] = [
    {
      id: 'mikrotik-setup',
      question: 'How long does a Mikrotik router setup take?',
      answer: 'Basic configurations typically take 2-4 hours for remote setup. Advanced hotspot configurations with Mikhmon integration can take 6-8 hours. On-site installations may require additional time depending on network complexity and physical setup requirements.'
    },
    {
      id: 'starlink-integration',
      question: 'Can you integrate Starlink with existing network infrastructure?',
      answer: 'Yes! We specialize in seamlessly integrating Starlink with your existing Mikrotik routers. This includes WAN failover configuration, load balancing between Starlink and traditional ISPs, and optimizing routing for best performance.'
    },
    {
      id: 'mobile-app',
      question: 'What features are included in the custom mobile app?',
      answer: 'Our custom mobile apps include user wallet management, data plan purchases, usage monitoring, payment gateway integration, promotional codes, push notifications, and admin dashboard access. Similar to MyMTN app functionality but customized for your network.'
    },
    {
      id: 'support-coverage',
      question: 'Do you provide support across Nigeria?',
      answer: 'Yes, we provide remote configuration support nationwide. For complex installations or on-site requirements, we offer field support in major cities across Nigeria. Our team can handle both urban and rural deployments.'
    },
    {
      id: 'mikhmon-hotspot',
      question: 'What is Mikhmon and how does it work with hotspot systems?',
      answer: 'Mikhmon is a powerful hotspot management system that works with Mikrotik routers. It provides voucher generation, user management, bandwidth control, payment integration, and detailed reporting. Perfect for cafés, hotels, and commercial Wi-Fi services.'
    },
    {
      id: 'pricing-packages',
      question: 'Can I upgrade from Basic to Advanced package later?',
      answer: 'Absolutely! Our packages are designed to build upon each other. You can start with Basic Configuration and upgrade to Standard, Advanced, or Premium packages as your business grows. We\'ll credit your previous investment toward the upgrade.'
    },
    {
      id: 'equipment-supply',
      question: 'Do you supply the networking equipment or just configuration?',
      answer: 'We offer both services! You can purchase equipment through our shop section (Starlink kits, Mikrotik routers, access points, etc.) or we can configure your existing equipment. We provide personalized quotes for equipment and installation packages.'
    },
    {
      id: 'payment-terms',
      question: 'What are your payment terms and methods?',
      answer: 'We accept bank transfers, mobile money payments, and installment plans for larger projects. For equipment purchases, we require 100% payment upfront. For configuration services, we require 70% upfront with the balance due upon completion. Contact us for flexible payment arrangements.'
    },
    {
      id: 'warranty-guarantee',
      question: 'What warranty do you provide on configurations?',
      answer: 'All our configurations come with comprehensive documentation and support periods ranging from 7 days (Basic) to 60 days (Premium). We guarantee our configurations will work as specified and provide free troubleshooting during the support period.'
    },
    {
      id: 'remote-vs-onsite',
      question: 'What\'s the difference between remote and on-site configuration?',
      answer: 'Remote configuration is done via secure VPN or TeamViewer for software setup, ideal for most router configurations. On-site service includes physical installation, cable management, access point mounting, and hands-on training. We recommend on-site for complex multi-device setups.'
    }
  ];

  return (
    <section id="faq" className="py-24 relative bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-yellow-500/20 border border-yellow-400/30 text-yellow-300 text-sm font-medium backdrop-blur-sm mb-6">
            <HelpCircle className="h-4 w-4" />
            <span>Knowledge Base</span>
          </div>
          <h2 className="text-heading text-4xl lg:text-5xl font-black text-white mb-6">
            FREQUENTLY ASKED
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent">
              QUESTIONS
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            Everything you need to know about our Mikrotik configuration services, Starlink integration, and custom solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className="spacex-glass hover-glow transition-all duration-300 animate-slide-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left flex items-center justify-between group"
              >
                <h3 className="text-lg font-bold text-white text-heading group-hover:text-blue-200 transition-colors pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(item.id) ? (
                    <Minus className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  ) : (
                    <Plus className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  )}
                </div>
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-6 animate-slide-in-up">
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white/80 leading-relaxed font-light">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-slide-in-up" style={{animationDelay: '1s'}}>
          <div className="spacex-glass inline-block p-8 rounded-2xl max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 text-heading">
              Still Have Questions?
            </h3>
            <p className="text-white/70 mb-6">
              Our technical team is ready to discuss your specific requirements and provide detailed answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="spacex-button-primary hover-lift"
                onClick={() => window.location.href = 'tel:09063412927'}
              >
                <HelpCircle className="h-5 w-5 mr-2" />
                Call: 09063412927
              </button>
              <button 
                className="spacex-button-secondary hover-lift"
                onClick={() => window.location.href = 'mailto:traceroot.io@gmail.com'}
              >
                Email Technical Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

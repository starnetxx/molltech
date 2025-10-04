import MollNavigation from "@/components/MollNavigation";
import ProductTicker from "@/components/ProductTicker";
import MollHeroSection from "@/components/MollHeroSection";
import AboutSection from "@/components/AboutSection";
import GalleryPreview from "@/components/GalleryPreview";
import VideoShowcase from "@/components/VideoShowcase";
import ProductShop from "@/components/ProductShop";
import ServicesSection from "@/components/ServicesSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TargetMarketSection from "@/components/TargetMarketSection";
import ContactSection from "@/components/ContactSection";
import MollFooter from "@/components/MollFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

// Removed pricing packages - now using service-based approach

const Index = () => {
  return (
    <div className="min-h-screen">
      <MollNavigation />
      <ProductTicker />
      <MollHeroSection />
      <AboutSection />
      <GalleryPreview />
      <VideoShowcase />
      <ProductShop />
      <ServicesSection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <TargetMarketSection />
      <ContactSection />
      <MollFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
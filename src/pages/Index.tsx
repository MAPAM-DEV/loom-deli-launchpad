import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServeSection from "@/components/ServeSection";
import AtmosphereSection from "@/components/AtmosphereSection";
import MenuSection from "@/components/MenuSection";
import CateringSection from "@/components/CateringSection";
import SocialStrip from "@/components/SocialStrip";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServeSection />
      <AtmosphereSection />
      <MenuSection />
      <CateringSection />
      <SocialStrip />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;

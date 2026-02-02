import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AtmosphereSection from "@/components/AtmosphereSection";
import MenuSection from "@/components/MenuSection";
import CateringSection from "@/components/CateringSection";
import JoinSection from "@/components/JoinSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <LocationSection />
      <AtmosphereSection />
      <CateringSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;

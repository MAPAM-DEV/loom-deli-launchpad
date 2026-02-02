import atmosphereImg from "@/assets/atmosphere.png";
import storefrontImg from "@/assets/storefront.png";

const AtmosphereSection = () => {
  return (
    <section id="atmosphere" className="section-light py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label-small text-black/70 mb-4">About Us</p>
          <h2 className="heading-section text-black">
            A Pleasant Escape
          </h2>
          <p className="body-regular text-black/70 max-w-lg mx-auto mt-6">
            Industrial charm meets cozy comfort. Settle in with your favorite brew 
            and enjoy the carefully curated atmosphere.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="overflow-hidden border border-border">
            <img
              src={atmosphereImg}
              alt="Coffee and sandwich at Loom Deli"
              className="w-full h-64 md:h-80 object-cover img-industrial hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden border border-border">
            <img
              src={storefrontImg}
              alt="Loom Deli storefront"
              className="w-full h-64 md:h-80 object-cover img-industrial hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtmosphereSection;

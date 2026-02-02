import FloatingCoffees from "./FloatingCoffees";

const Hero = () => {
  const scrollToLocation = () => {
    const element = document.getElementById("location");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center section-dark px-6 pt-20 relative overflow-hidden"
    >
      <FloatingCoffees />
      <div className="text-center max-w-4xl mx-auto z-10">
        {/* Main Title */}
        <h1 className="heading-hero mb-8 animate-fade-in">LOOM DELI</h1>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <button onClick={scrollToLocation} className="btn-outline">
            Now Open — Visit Us
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-border" />
      </div>
    </section>
  );
};

export default Hero;

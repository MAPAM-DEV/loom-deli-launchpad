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
      className="min-h-screen flex flex-col items-center justify-center section-dark px-6 pt-20"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="heading-hero mb-6 animate-fade-in">LOOM DELI</h1>

        {/* Tagline */}
        <p
          className="body-large text-muted-foreground max-w-xl mx-auto mb-12 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Coffee, deli bites, and a calm industrial vibe.
          <br />
          <span className="text-foreground/80">Where craft meets comfort.</span>
        </p>

        {/* CTA Button */}
        <div
          className="animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
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

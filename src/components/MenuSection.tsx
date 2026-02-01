import menuDrinks from "@/assets/menu-drinks.png";
import menuFood from "@/assets/menu-food.png";

const MenuSection = () => {
  return (
    <section id="menu" className="section-dark py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label-small text-muted-foreground mb-4">Our Selection</p>
          <h2 className="heading-section">The Menu</h2>
        </div>

        {/* Menu Images Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="industrial-card">
            <img
              src={menuDrinks}
              alt="Loom Deli drinks menu - Hot drinks, iced drinks, and more"
              className="w-full h-auto"
            />
          </div>
          <div className="industrial-card">
            <img
              src={menuFood}
              alt="Loom Deli food menu - Signature sandwiches and melts"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-8 max-w-md mx-auto">
          Menu items may vary. Follow our socials for daily specials and seasonal updates.
        </p>
      </div>
    </section>
  );
};

export default MenuSection;

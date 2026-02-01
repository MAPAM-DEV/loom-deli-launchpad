import { Coffee, Croissant, Sandwich, Sparkles } from "lucide-react";

const menuItems = [
  { icon: Coffee, label: "Espresso / Pour-over / Iced" },
  { icon: Croissant, label: "Fresh Pastries" },
  { icon: Sandwich, label: "Deli Sandwiches" },
  { icon: Sparkles, label: "Seasonal Specials" },
];

const ServeSection = () => {
  return (
    <section id="serve" className="section-light py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label-small text-muted-foreground mb-4">The Offering</p>
          <h2 className="heading-section text-surface-light-foreground">
            What We Serve
          </h2>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="mb-4 flex justify-center">
                <item.icon
                  className="w-8 h-8 text-surface-light-foreground/70 group-hover:text-surface-light-foreground transition-colors"
                  strokeWidth={1.5}
                />
              </div>
              <p className="text-sm md:text-base font-medium tracking-wide text-surface-light-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="max-w-xs mx-auto mt-16">
          <div className="h-px bg-border" />
        </div>
      </div>
    </section>
  );
};

export default ServeSection;

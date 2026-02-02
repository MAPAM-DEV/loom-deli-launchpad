import { useState } from "react";
import menuDrinks from "@/assets/menu-drinks.png";
import menuFood from "@/assets/menu-food.png";
import treats1 from "@/assets/treats-1.png";
import treats2 from "@/assets/treats-2.png";
import ImageLightbox from "./ImageLightbox";

const MenuSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: "", alt: "" });

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
    setLightboxOpen(true);
  };

  return (
    <section id="menu" className="section-light py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label-small text-black/70 mb-4">Our Selection</p>
          <h2 className="heading-section text-black">The Menu</h2>
        </div>

        {/* Menu Images Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <button
            onClick={() => openLightbox(menuDrinks, "Loom Deli drinks menu")}
            className="border-[3px] border-black bg-black/5 p-6 md:p-8 cursor-pointer hover:bg-black/10 transition-colors group"
          >
            <img
              src={menuDrinks}
              alt="Loom Deli drinks menu - Hot drinks, iced drinks, and more"
              className="w-full h-auto border-2 border-black/40 group-hover:opacity-90 transition-opacity"
            />
          </button>
          <button
            onClick={() => openLightbox(menuFood, "Loom Deli food menu")}
            className="border-[3px] border-black bg-black/5 p-6 md:p-8 cursor-pointer hover:bg-black/10 transition-colors group"
          >
            <img
              src={menuFood}
              alt="Loom Deli food menu - Signature sandwiches and melts"
              className="w-full h-auto border-2 border-black/40 group-hover:opacity-90 transition-opacity"
            />
          </button>
        </div>

        {/* Note */}
        <p className="text-center text-black/70 text-base md:text-lg mt-8 max-w-lg mx-auto">
          We also offer a variety of sweet treats to go along with your coffee — 
          whether that's to stay in, or to go! Menu items may vary. 
          Follow our socials for daily specials and seasonal updates.
        </p>

        {/* Sweet Treats Gallery */}
        <div className="flex justify-center gap-4 md:gap-6 mt-8 max-w-md mx-auto">
          <button
            onClick={() => openLightbox(treats1, "Loom Deli sweet treats selection")}
            className="w-32 h-32 md:w-40 md:h-40 overflow-hidden border-[3px] border-black cursor-pointer hover:bg-black/10 transition-colors group"
          >
            <img
              src={treats1}
              alt="Assorted pastries and treats"
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
            />
          </button>
          <button
            onClick={() => openLightbox(treats2, "Loom Deli cookies")}
            className="w-32 h-32 md:w-40 md:h-40 overflow-hidden border-[3px] border-black cursor-pointer hover:bg-black/10 transition-colors group"
          >
            <img
              src={treats2}
              alt="Freshly baked cookies"
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
            />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        src={lightboxImage.src}
        alt={lightboxImage.alt}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};

export default MenuSection;

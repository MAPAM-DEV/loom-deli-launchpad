import { Instagram, Facebook } from "lucide-react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-lg font-semibold tracking-[0.2em] hover:opacity-70 transition-opacity"
        >
          LOOM DELI
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("menu")}
            className="label-small link-hover"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection("location")}
            className="label-small link-hover"
          >
            Find Us
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/loomdeli/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="social-icon" />
          </a>
          <a
            href="https://www.facebook.com/people/Loom-Deli/61583794007733/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="social-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

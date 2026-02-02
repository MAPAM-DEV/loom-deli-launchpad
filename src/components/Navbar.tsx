import { Instagram, Facebook, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMoreOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        {/* Top row: Logo and Social Icons */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-semibold tracking-[0.2em] hover:opacity-70 transition-opacity"
          >
            LOOM DELI
          </button>

          {/* Desktop Navigation Links */}
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
            
            {/* More Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="label-small link-hover flex items-center gap-1"
              >
                More
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} 
                  strokeWidth={1.5} 
                />
              </button>
              
              {moreOpen && (
                <div className="absolute top-full right-0 mt-2 min-w-[160px] bg-background border border-border shadow-lg">
                  <button
                    onClick={() => scrollToSection("atmosphere")}
                    className="w-full text-left px-4 py-3 label-small hover:bg-muted transition-colors border-b border-border"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => scrollToSection("catering")}
                    className="w-full text-left px-4 py-3 label-small hover:bg-muted transition-colors border-b border-border"
                  >
                    Catering
                  </button>
                  <button
                    onClick={() => scrollToSection("join")}
                    className="w-full text-left px-4 py-3 label-small hover:bg-muted transition-colors"
                  >
                    Join the Team
                  </button>
                </div>
              )}
            </div>
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

        {/* Mobile Navigation Links - Second Row */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-3 pt-3 border-t border-border">
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
          
          {/* Mobile More Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="label-small link-hover flex items-center gap-1"
            >
              More
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} 
                strokeWidth={1.5} 
              />
            </button>
            
            {moreOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[160px] bg-background border border-border shadow-lg">
                <button
                  onClick={() => scrollToSection("atmosphere")}
                  className="w-full text-left px-4 py-3 label-small hover:bg-muted transition-colors border-b border-border"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("catering")}
                  className="w-full text-left px-4 py-3 label-small hover:bg-muted transition-colors border-b border-border"
                >
                  Catering
                </button>
                <button
                  onClick={() => scrollToSection("join")}
                  className="w-full text-left px-4 py-3 label-small hover:bg-muted transition-colors"
                >
                  Join the Team
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <p className="text-lg font-semibold tracking-[0.2em] mb-6">LOOM DELI</p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mb-6">
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

          {/* Tagline */}
          <p className="text-sm text-muted-foreground">
            Follow for updates & today's specials.
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground mt-8">
            © {new Date().getFullYear()} Loom Deli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Instagram, Facebook } from "lucide-react";

const SocialStrip = () => {
  return (
    <section id="updates" className="section-light py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/loomdeli/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border hover:bg-background hover:text-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.facebook.com/people/Loom-Deli/61583794007733/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border hover:bg-background hover:text-foreground transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" strokeWidth={1.5} />
            </a>
          </div>

          {/* Copy */}
          <p className="label-small text-muted-foreground mb-4">Stay Connected</p>
          <p className="body-large text-surface-light-foreground">
            See what we're pouring this week
          </p>
          <p className="body-regular text-muted-foreground mt-2">
            Menus, specials, and behind-the-bar updates on our socials.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialStrip;

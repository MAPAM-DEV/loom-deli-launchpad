import cateringImg from "@/assets/catering.png";
import { Truck, Users, Instagram, Mail } from "lucide-react";

const CateringSection = () => {
  return (
    <section id="catering" className="section-dark py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="overflow-hidden border-2 border-foreground/40">
            <img
              src={cateringImg}
              alt="Loom Deli catering setup with sandwich platters"
              className="w-full h-auto img-industrial"
            />
          </div>

          {/* Content */}
          <div>
            <p className="label-small text-muted-foreground mb-4">Beyond the Counter</p>
            <h2 className="heading-section mb-6">Catering & Delivery</h2>
            <p className="body-regular text-muted-foreground mb-8">
              Hosting an event or need lunch for the office? We've got you covered with 
              our signature sandwich platters and fresh coffee setups. From intimate 
              gatherings to larger functions.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Users className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                <span className="text-sm">Corporate & Private Events</span>
              </div>
              <div className="flex items-center gap-4">
                <Truck className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                <span className="text-sm">Local Delivery Available</span>
              </div>
            </div>

            {/* CTA */}
            <p className="label-small text-muted-foreground mb-4">Enquire Via</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/loomdeli/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-3"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
                Instagram
              </a>
              <a
                href="mailto:loomdeli@mail.com"
                className="btn-outline inline-flex items-center gap-3"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;

import cateringImg from "@/assets/catering.png";
import { Truck, Users } from "lucide-react";

const CateringSection = () => {
  return (
    <section className="section-dark py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="overflow-hidden border border-border">
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
            <a
              href="https://www.instagram.com/loomdeli/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-block"
            >
              Enquire via Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;

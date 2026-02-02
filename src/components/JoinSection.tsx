import { Mail } from "lucide-react";

const JoinSection = () => {
  return (
    <section id="join" className="section-light py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <p className="label-small text-black/70 mb-4">Careers</p>
          <h2 className="heading-section text-black mb-6">
            Join the Team
          </h2>
          
          {/* Description */}
          <p className="body-regular text-black/70 mb-8">
            We're hiring! If you're passionate about coffee and looking for work, 
            we'd love to hear from you. Drop us an email at the address below.
          </p>

          {/* Email CTA */}
          <a
            href="mailto:loomdeli@mail.com"
            className="btn-outline inline-flex items-center gap-3 text-black border-black hover:bg-black hover:text-white"
          >
            <Mail className="w-4 h-4" strokeWidth={1.5} />
            loomdeli@mail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;

import { MapPin, ExternalLink, Instagram, Facebook } from "lucide-react";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon
const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const LOOM_LAT = 56.4617134;
const LOOM_LNG = -2.9798164;

const LocationSection = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [LOOM_LAT, LOOM_LNG],
      zoom: 16,
      scrollWheelZoom: false,
    });
    mapRef.current = map;

    // Grayscale-ish tiles (free; requires attribution)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      subdomains: "abcd",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 20,
    }).addTo(map);

    const marker = L.marker([LOOM_LAT, LOOM_LNG], { icon: customIcon }).addTo(map);
    marker.bindPopup(
      `
        <div style="text-align:center;padding:8px 10px;">
          <strong style="display:block;margin-bottom:4px;letter-spacing:0.06em;">LOOM DELI</strong>
          <span style="font-size:12px;opacity:0.85;">Coffee &amp; Deli</span>
        </div>
      `.trim(),
    );

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <section id="location" className="section-dark py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="label-small text-muted-foreground mb-4">Visit</p>
          <h2 className="heading-section">Find Us</h2>
        </div>

        {/* Address & Hours */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            <span className="body-regular font-medium">Loom Deli</span>
          </div>
          <p className="body-regular text-muted-foreground mb-3">
            Old Mill Complex, Brown St, Dundee DD1 5EF
          </p>
          <p className="text-sm text-muted-foreground">
            Mon–Sat: 8am–5pm &nbsp;·&nbsp; Sun: 10am–4pm
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="https://www.instagram.com/loomdeli/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-foreground/40 hover:bg-foreground hover:text-background transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a
            href="https://www.facebook.com/people/Loom-Deli/61583794007733/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-foreground/40 hover:bg-foreground hover:text-background transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>

        {/* Map Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://www.google.com/maps/place/Loom/@56.4617134,-2.9798164,17z/data=!3m1!4b1!4m6!3m5!1s0x48865d00671fa093:0x386339a903adba5b!8m2!3d56.4617134!4d-2.9798164!16s%2Fg%2F11mrds_yqb!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Open in Google Maps
          </a>
          <a
            href="https://maps.apple.com/?address=Dundee,%20Scotland&ll=56.4617134,-2.9798164&q=Loom%20Deli"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Open in Apple Maps
          </a>
        </div>

        {/* Map Container */}
        <div className="max-w-4xl mx-auto border-2 border-foreground/40">
          <div
            ref={mapContainerRef}
            className="h-[400px] md:h-[500px] w-full"
            aria-label="Map showing Loom Deli location"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

import { MapPin, ExternalLink } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
  return (
    <section id="location" className="section-dark py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="label-small text-muted-foreground mb-4">Visit</p>
          <h2 className="heading-section">Find Us</h2>
        </div>

        {/* Address */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <MapPin className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
          <span className="body-regular">Loom Deli, Dundee</span>
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
        <div className="max-w-4xl mx-auto border border-border">
          <MapContainer
            center={[LOOM_LAT, LOOM_LNG] as L.LatLngExpression}
            zoom={16}
            scrollWheelZoom={false}
            className="h-[400px] md:h-[500px] w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[LOOM_LAT, LOOM_LNG] as L.LatLngExpression} icon={customIcon}>
              <Popup>
                <div className="text-center p-2">
                  <strong className="block mb-1">LOOM DELI</strong>
                  <span className="text-sm">Coffee & Deli</span>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

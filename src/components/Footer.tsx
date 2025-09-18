import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-earth border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h3 className="font-serif font-bold text-lg text-primary">
                Balaji Residency
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Where Devotion Meets Comfort. Traditional hospitality just 50 meters
              from the sacred Saneeswaran Temple in Thirunallar.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>🏆</span>
              <span>5000+ Happy Guests</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/rooms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Our Rooms
              </Link>
              <Link to="/gallery" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Balaji+Residency+(Residency+%2F+Lodge+In+Thirunallar)/@10.9267874,79.7925233,411m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a5517123f74247d:0x4094ab9c8a9ba7ea!8m2!3d10.9267874!4d79.7934637!16s%2Fg%2F11fst1pkf2?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  No 01, Main Road, Near Saniswaran Temple (50 meters),
                  Thirunallar – 609607
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <div className="text-sm text-muted-foreground">
                  <a href="tel:9442422556" className="hover:text-primary transition-colors">
                    9442422556
                  </a>
                  {" / "}
                  <a href="tel:9942024595" className="hover:text-primary transition-colors">
                    9942024595
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Amenities */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ AC & Non-AC Rooms</li>
              <li>✓ Free Parking</li>
              <li>✓ 24/7 Hot Water</li>
              <li>✓ Wi-Fi Access</li>
              <li>✓ Power Backup</li>
              <li>✓ Temple View Rooms</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Balaji Residency. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link to="/contact" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <a
              href="https://balajiresidencytnr.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center space-x-1"
            >
              <span>More Info</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
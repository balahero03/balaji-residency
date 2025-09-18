import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink, Heart, Star, Award, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-earth border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-temple-gold rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-temple-gold rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-temple-gold rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 border border-temple-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Thank You Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur rounded-full px-6 py-3 mb-4">
            <Heart className="w-5 h-5 text-temple-gold animate-pulse" />
            <span className="text-temple-gold font-medium">Thank You for Choosing Balaji Residency</span>
            <Heart className="w-5 h-5 text-temple-gold animate-pulse" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We are deeply grateful for your trust in our hospitality. Your spiritual journey is our sacred responsibility,
            and we promise to make every moment of your stay memorable and peaceful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-temple rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-serif font-bold text-xl text-primary">
                Balaji Residency
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where Devotion Meets Comfort. Traditional hospitality just 50 meters
              from the sacred Saneeswaran Temple in Thirunallar.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-white/5 rounded-lg p-3">
              <Star className="w-4 h-4 text-temple-gold" />
              <span className="font-medium">5000+ Happy Guests</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground text-lg flex items-center space-x-2">
              <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
              <span>Quick Links</span>
            </h4>
            <nav className="space-y-3">
              <Link
                to="/about"
                className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:font-medium group"
              >
                <span className="group-hover:text-temple-gold">→</span> About Us
              </Link>
              <Link
                to="/services"
                className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:font-medium group"
              >
                <span className="group-hover:text-temple-gold">→</span> Services
              </Link>
              <Link
                to="/rooms"
                className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:font-medium group"
              >
                <span className="group-hover:text-temple-gold">→</span> Our Rooms
              </Link>
              <Link
                to="/gallery"
                className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:font-medium group"
              >
                <span className="group-hover:text-temple-gold">→</span> Gallery
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:font-medium group"
              >
                <span className="group-hover:text-temple-gold">→</span> Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground text-lg flex items-center space-x-2">
              <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
              <span>Contact Info</span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-temple rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-4 h-4 text-primary-foreground" />
                </div>
                <a
                  href="https://www.google.com/maps/place/Balaji+Residency+(Residency+%2F+Lodge+In+Thirunallar)/@10.9267874,79.7925233,411m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a5517123f74247d:0x4094ab9c8a9ba7ea!8m2!3d10.9267874!4d79.7934637!16s%2Fg%2F11fst1pkf2?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:underline"
                >
                  No 01, Main Road, Near Saniswaran Temple (50 meters),
                  Thirunallar – 609607
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-temple rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="text-sm text-muted-foreground">
                  <a href="tel:9442422556" className="hover:text-primary transition-all duration-300 hover:underline block">
                    9442422556
                  </a>
                  <a href="tel:9942024595" className="hover:text-primary transition-all duration-300 hover:underline block">
                    9942024595
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Amenities */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground text-lg flex items-center space-x-2">
              <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
              <span>Our Services</span>
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2 hover:text-primary transition-colors duration-300 group">
                <div className="w-1.5 h-1.5 bg-temple-gold rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span>AC & Non-AC Rooms</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-primary transition-colors duration-300 group">
                <div className="w-1.5 h-1.5 bg-temple-gold rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span>Free Parking</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-primary transition-colors duration-300 group">
                <div className="w-1.5 h-1.5 bg-temple-gold rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span>24/7 Hot Water</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-primary transition-colors duration-300 group">
                <div className="w-1.5 h-1.5 bg-temple-gold rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span>Wi-Fi Access</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-primary transition-colors duration-300 group">
                <div className="w-1.5 h-1.5 bg-temple-gold rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span>Power Backup</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-primary transition-colors duration-300 group">
                <div className="w-1.5 h-1.5 bg-temple-gold rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span>Temple View Rooms</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground flex items-center space-x-2">
              <Clock className="w-4 h-4 text-temple-gold" />
              <span>© 2024 Balaji Residency. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link
                to="/contact"
                className="hover:text-primary transition-all duration-300 hover:underline hover:scale-105"
              >
                Privacy Policy
              </Link>
              <div className="w-px h-4 bg-border"></div>
              <a
                href="https://balajiresidencytnr.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-all duration-300 hover:underline hover:scale-105 flex items-center space-x-1 group"
              >
                <span>More Info</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Web Agency Credit */}
          <div className="mt-6 pt-4 border-t border-border/30">
            <div className="flex justify-center">
              <div className="text-xs text-muted-foreground/60 flex items-center space-x-2 group">
                <span>Website crafted with</span>
                <Heart className="w-3 h-3 text-temple-gold group-hover:scale-125 transition-transform duration-300" />
                <span>by</span>
                <a
                  href="https://voidtheory.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-temple-gold hover:text-primary transition-colors duration-300 hover:underline font-medium"
                >
                  voidtheory.online
                </a>
                <ExternalLink className="w-3 h-3 text-temple-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
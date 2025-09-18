import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Rooms", href: "/rooms" },
    { name: "Gallery", href: "/gallery" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/90 border-b border-primary-foreground/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div>
              <h1 className="font-serif font-bold text-xl lg:text-2xl text-primary-foreground">
                Balaji Residency
              </h1>
              <p className="text-xs text-primary-foreground/80 hidden sm:block">
                Where Devotion Meets Comfort
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-temple-gold ${
                  isActive(item.href)
                    ? "text-temple-gold border-b-2 border-temple-gold"
                    : "text-primary-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Book Now Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="booking" size="sm" asChild className="hidden sm:flex">
              <a href="tel:9442422556">
                <Phone className="w-4 h-4" />
                Book Now
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-border bg-background">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-2 text-sm font-medium transition-colors hover:bg-muted rounded-md ${
                    isActive(item.href)
                      ? "text-primary bg-muted"
                      : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button variant="booking" size="sm" asChild className="w-full">
                  <a href="tel:9442422556">
                    <Phone className="w-4 h-4" />
                    Book Now
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Star, Users, Award, Clock } from "lucide-react";
import shopImage from "@/assets/shop.jpg";
import roomInterior from "@/assets/room-interior.jpg";
import logo from "@/assets/logo.jpg";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTop";

const Index = () => {
  // Scroll to top when component mounts
  useScrollToTopOnMount();

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "16", label: "Rooms in Residency" },
    { icon: <Users className="w-8 h-8" />, number: "5000+", label: "Happy Customers" },
    { icon: <Clock className="w-8 h-8" />, number: "10", label: "Years in Service" },
  ];

  const features = [
    { title: "Prime Location", description: "Just 50 meters from Saneeswaran Temple", icon: <MapPin className="w-6 h-6" /> },
    { title: "Traditional Comfort", description: "Heritage hospitality with modern amenities", icon: <Star className="w-6 h-6" /> },
    { title: "Affordable Rates", description: "Budget-friendly rooms for every pilgrim", icon: <Users className="w-6 h-6" /> },
    { title: "24/7 Service", description: "Round-the-clock assistance for pilgrims", icon: <Clock className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${shopImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className="mb-8">
            <img
              src={logo}
              alt="Balaji Residency Logo"
              className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full shadow-2xl border-4 border-white/30 object-cover mb-6"
            />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-kolam-pulse">
            Balaji Residency
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-temple-gold font-medium">
            Sacred Stay Near Saneeswaran Temple
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience divine comfort just 50 meters from the sacred Saneeswaran Temple.
            Balaji Residency offers peaceful accommodation for pilgrims seeking
            spiritual solace in the heart of Thirunallar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:9442422556">
                <Phone className="w-5 h-5" />
                Book Now
              </a>
            </Button>
            <Button variant="outline" size="xl" className="text-white border-white bg-white/20 backdrop-blur hover:bg-white/30 transition-all duration-300 shadow-lg" asChild>
              <a href="https://www.google.com/maps/place/Balaji+Residency+(Residency+%2F+Lodge+In+Thirunallar)/@10.9267874,79.7925233,411m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a5517123f74247d:0x4094ab9c8a9ba7ea!8m2!3d10.9267874!4d79.7934637!16s%2Fg%2F11fst1pkf2?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5" />
                View Location
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Where Devotion Meets Comfort
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Experience traditional South Indian hospitality in the sacred town of Thirunallar.
              Our family-run residency offers peaceful accommodation for devotees and travelers
              seeking comfort near the revered Saneeswaran Temple.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-warm bg-card/50 backdrop-blur">
                  <CardContent className="text-center p-6">
                    <div className="text-temple-gold mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Why Choose Balaji Residency?
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-temple p-3 rounded-full text-primary-foreground flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <img
                  src={roomInterior}
                  alt="Comfortable room interior"
                  className="rounded-lg shadow-temple object-cover h-96 w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Experience Divine Comfort Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay at Balaji Residency and be part of our tradition of
            welcoming devotees with warmth and reverence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <a href="tel:9442422556">
                Call: 9442422556
              </a>
            </Button>
            <Button variant="secondary" size="xl" asChild>
              <a href="tel:9942024595">
                Call: 9942024595
              </a>
            </Button>
          </div>
        </div>
      </section>

      <BookingCTA />
      <Footer />
    </div>
  );
};

export default Index;
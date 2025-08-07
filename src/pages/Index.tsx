import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Star, Users, Award, Clock } from "lucide-react";
import hotelFront from "@/assets/hotel-front.jpg";
import templeView from "@/assets/temple-view.jpg";
import roomInterior from "@/assets/room-interior.jpg";

const Index = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "16", label: "Rooms in Residency" },
    { icon: <Users className="w-8 h-8" />, number: "5000+", label: "Happy Customers" },
    { icon: <Clock className="w-8 h-8" />, number: "10", label: "Years in Service" },
    { icon: <Award className="w-8 h-8" />, number: "25", label: "Awards Won" },
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
          style={{ backgroundImage: `url(${hotelFront})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-kolam-pulse">
            Balaji Residency
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-temple-gold font-medium">
            One of the best lodging services in Thirunallar
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Just a stone's throw away from the divine Saneeswaran Temple, 
            Balaji Residency welcomes pilgrims and travelers to the heart of 
            Thirunallar with warmth, simplicity, and devotion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:9442422556">
                <Phone className="w-5 h-5" />
                Book Now
              </a>
            </Button>
            <Button variant="outline" size="xl" className="text-white border-white bg-white/20 backdrop-blur hover:bg-white/30 transition-all duration-300 shadow-lg">
              <MapPin className="w-5 h-5" />
              View Location
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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={templeView} 
                  alt="Temple view from Balaji Residency"
                  className="rounded-lg shadow-temple object-cover h-48 w-full"
                />
                <img 
                  src={roomInterior} 
                  alt="Comfortable room interior"
                  className="rounded-lg shadow-temple object-cover h-48 w-full"
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
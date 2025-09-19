import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTop";
import { 
  Home, 
  Bed, 
  Car, 
  Droplets, 
  Wifi, 
  Zap, 
  MapPin, 
  Snowflake,
  Phone,
  Users,
  Star,
  Clock
} from "lucide-react";
import roomInterior from "@/assets/room-interior.jpg";

const Services = () => {
  // Scroll to top when component mounts
  useScrollToTopOnMount();

  const mainServices = [
    {
      icon: <Home className="w-12 h-12" />,
      title: "Residency Service",
      description: "Comfortable lodging for individuals and families with temple view rooms. Experience traditional hospitality with modern comfort in our well-appointed accommodations.",
      features: ["Temple view rooms", "Family-friendly", "Traditional décor", "Peaceful environment"]
    },
    {
      icon: <Bed className="w-12 h-12" />,
      title: "Lodging Service", 
      description: "Rooms that balance budget with comfort and amenities. Perfect for pilgrims and travelers seeking affordable yet comfortable accommodation near the temple.",
      features: ["Budget-friendly", "Clean and comfortable", "Essential amenities", "Pilgrim-focused"]
    },
    {
      icon: <Snowflake className="w-12 h-12" />,
      title: "AC / Non-AC Rooms",
      description: "Options from Single, Double, Triple, Four, and Five Bed Rooms. Choose from our range of room configurations to suit your group size and comfort preferences.",
      features: ["Multiple configurations", "AC & Non-AC options", "Flexible booking", "Group accommodations"]
    }
  ];

  const amenities = [
    { icon: <Car className="w-6 h-6" />, name: "Free Parking", description: "Secure parking space for all guests" },
    { icon: <Droplets className="w-6 h-6" />, name: "24/7 Hot Water", description: "Round-the-clock hot water supply" },
    { icon: <Wifi className="w-6 h-6" />, name: "Wi-Fi Access", description: "Complimentary internet connectivity" },
    { icon: <Zap className="w-6 h-6" />, name: "Power Backup", description: "Uninterrupted power supply" },
    { icon: <MapPin className="w-6 h-6" />, name: "Near Temple", description: "Just 50 meters from Saneeswaran Temple" },
    { icon: <Clock className="w-6 h-6" />, name: "24/7 Service", description: "Round-the-clock guest assistance" }
  ];

  const additionalServices = [
    {
      title: "Temple Guidance",
      description: "Information about temple timings, rituals, and local customs"
    },
    {
      title: "Local Transport",
      description: "Assistance with local transportation and sightseeing"
    },
    {
      title: "Luggage Storage",
      description: "Safe storage for your belongings during temple visits"
    },
    {
      title: "Early Check-in/Late Check-out",
      description: "Flexible timings based on your travel schedule"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Our Top Notch Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Experience the perfect blend of traditional hospitality and modern amenities, 
              designed specifically for pilgrims and travelers visiting Thirunallar
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <Card key={index} className="border-none shadow-warm hover:shadow-temple transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="text-temple-gold mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <CardTitle className="font-serif text-xl text-primary">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2 text-sm text-foreground">
                          <Star className="w-4 h-4 text-temple-gold" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Premium Amenities Included
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-temple p-3 rounded-full text-primary-foreground flex-shrink-0">
                      {amenity.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {amenity.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="relative">
                <img 
                  src={roomInterior} 
                  alt="Room amenities at Balaji Residency"
                  className="rounded-lg shadow-temple object-cover w-full h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Additional Guest Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="border-none shadow-warm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Services */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Need Custom Services?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're here to make your pilgrimage comfortable and memorable. 
            Contact us for any special requirements or additional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <a href="tel:9442422556">
                <Phone className="w-5 h-5" />
                Call: 9442422556
              </a>
            </Button>
            <Button variant="secondary" size="xl" asChild>
              <a href="tel:9942024595">
                <Phone className="w-5 h-5" />
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

export default Services;
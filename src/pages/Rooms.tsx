import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTop";
import {
  Users,
  Snowflake,
  Fan,
  Bed,
  Bath,
  Wifi,
  Car,
  Phone,
  MapPin,
  Star,
  IndianRupee
} from "lucide-react";
import roomInterior from "@/assets/room-interior.jpg";
import roomOut from "@/assets/room-out.jpg";
import logo from "@/assets/logo.jpg";

const Rooms = () => {
  // Scroll to top when component mounts
  useScrollToTopOnMount();

  const roomTypes = [
    {
      title: "Single Non-AC Room",
      capacity: "1 Person",
      icon: <Fan className="w-8 h-8" />,
      features: [
        "Comfortable single bed",
        "Attached bathroom",
        "Fan cooling",
        "Free Wi-Fi",
        "24/7 hot water",
        "Temple view"
      ],
      popular: false
    },
    {
      title: "Double AC Room",
      capacity: "2 People",
      icon: <Snowflake className="w-8 h-8" />,
      features: [
        "Queen size bed",
        "Air conditioning",
        "Attached bathroom",
        "Free Wi-Fi",
        "24/7 hot water",
        "Temple view",
        "Minibar"
      ],
      popular: true
    },
    {
      title: "Triple Bed Room",
      capacity: "3 People",
      icon: <Bed className="w-8 h-8" />,
      features: [
        "Three comfortable beds",
        "AC/Non-AC options",
        "Spacious room",
        "Attached bathroom",
        "Free Wi-Fi",
        "24/7 hot water",
        "Temple view"
      ],
      popular: false
    },
    {
      title: "Family Suite (5 Beds)",
      capacity: "5 People",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Five comfortable beds",
        "Large family suite",
        "Air conditioning",
        "Two attached bathrooms",
        "Free Wi-Fi",
        "24/7 hot water",
        "Temple view",
        "Sitting area"
      ],
      popular: false
    }
  ];

  const commonAmenities = [
    { icon: <Car className="w-5 h-5" />, name: "Free Parking" },
    { icon: <Wifi className="w-5 h-5" />, name: "Complimentary Wi-Fi" },
    { icon: <Bath className="w-5 h-5" />, name: "24/7 Hot Water" },
    { icon: <MapPin className="w-5 h-5" />, name: "50m from Temple" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${roomOut})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src={logo}
                alt="Balaji Residency Logo"
                className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full shadow-lg border-2 border-primary/20 object-cover"
              />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Rooms
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Choose from our comfortable accommodations designed for pilgrims and travelers,
              with options for every group size
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {roomTypes.map((room, index) => (
                <Card key={index} className={`border-none shadow-warm hover:shadow-temple transition-all duration-300 relative ${room.popular ? 'ring-2 ring-temple-gold' : ''
                  }`}>
                  {room.popular && (
                    <Badge className="absolute -top-3 left-6 bg-gradient-temple text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-temple-gold">
                          {room.icon}
                        </div>
                        <div>
                          <CardTitle className="font-serif text-xl text-primary">
                            {room.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {room.capacity}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Button variant="booking" size="sm" asChild>
                          <a href="tel:9442422556">
                            Book Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-2">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-foreground">
                          <Star className="w-3 h-3 text-temple-gold flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="booking" size="lg" className="w-full" asChild>
                      <a
                        href={`https://wa.me/919442422556?text=${encodeURIComponent(`🏨 *ROOM BOOKING INQUIRY - BALAJI RESIDENCY* 🏨

🏠 *ROOM DETAILS:*
• Room Type: ${room.title}
• Capacity: ${room.capacity}
• Features: ${room.features.join(', ')}

📅 *STAY DETAILS:*
• Check-in Date: [Please specify]
• Check-out Date: [Please specify]
• Number of Guests: [Please specify]

💬 *MESSAGE:*
I would like to book the ${room.title} at Balaji Residency. Please share availability and rates for my preferred dates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *Balaji Residency, Thirunallar*
📞 Call: 9442422556 / 9942024595
🌐 Website: balajiresidency.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Phone className="w-4 h-4" />
                        Book This Room
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Amenities */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Included in All Rooms
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every room at Balaji Residency comes with essential amenities to ensure
                  your comfort during your pilgrimage. We believe in providing value
                  without compromising on quality.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {commonAmenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-temple-gold">
                        {amenity.icon}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {amenity.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={roomInterior}
                  alt="Room interior at Balaji Residency"
                  className="rounded-lg shadow-temple object-cover w-full h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-temple bg-gradient-earth">
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  Easy Booking Process
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    • Call us directly to check availability and make reservations
                  </p>
                  <p>
                    • We recommend advance booking during festival seasons
                  </p>
                  <p>
                    • Flexible check-in/check-out times for pilgrims
                  </p>
                  <p>
                    • Group discounts available for family bookings
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <h4 className="font-semibold text-lg text-foreground">
                    Call to Book Now
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="booking" size="lg" asChild>
                      <a href="tel:9442422556">
                        <Phone className="w-4 h-4" />
                        9442422556
                      </a>
                    </Button>
                    <Button variant="booking" size="lg" asChild>
                      <a href="tel:9942024595">
                        <Phone className="w-4 h-4" />
                        9942024595
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <BookingCTA />
      <Footer />
    </div>
  );
};

export default Rooms;
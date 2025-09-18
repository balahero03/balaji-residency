import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Download, Phone, Star, Quote } from "lucide-react";
import templeView from "@/assets/temple-view.jpg";
import roomInterior from "@/assets/room-interior.jpg";
import kolamPattern from "@/assets/kolam-pattern.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      src: templeView,
      title: "Saneeswaran Temple View",
      description: "Sacred temple just 50 meters away"
    },
    {
      src: roomInterior,
      title: "Room Interior Views",
      description: "Comfortable and clean accommodations"
    },
    {
      src: kolamPattern,
      title: "Kolam Welcome Art",
      description: "Traditional welcome patterns at entrance"
    }
  ];

  const testimonials = [
    {
      name: "Ramesh Iyer",
      location: "Chennai",
      rating: 5,
      quote: "Clean, peaceful, and very close to temple. Staff was kind."
    },
    {
      name: "Meena Subramani",
      location: "Thanjavur",
      rating: 5,
      quote: "Best lodging near Saneeswaran temple. Came with family."
    },
    {
      name: "Prakash Kumar",
      location: "Bangalore",
      rating: 5,
      quote: "Affordable rates, excellent service. Will definitely return."
    },
    {
      name: "Lakshmi Devi",
      location: "Kumbakonam",
      rating: 5,
      quote: "Perfect for devotees. Traditional feel with modern comfort."
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
              Our Gallery Photos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Take a visual journey through Balaji Residency and discover the beauty
              of traditional hospitality in Thirunallar
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {galleryImages.map((image, index) => (
                <Card key={index} className="group border-none shadow-warm hover:shadow-temple transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="secondary" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Full Size
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">
                      {image.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {image.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guest Testimonials with Photos */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Happy Guest Memories
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-none shadow-warm hover:shadow-temple transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">
                            {testimonial.name}
                          </h4>
                          <span className="text-sm text-muted-foreground">
                            from {testimonial.location}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-temple-gold text-temple-gold hover:scale-110 transition-transform duration-200" />
                          ))}
                        </div>
                      </div>

                      <div className="relative">
                        <Quote className="w-8 h-8 text-temple-gold opacity-30 absolute -top-2 -left-2" />
                        <blockquote className="text-muted-foreground italic pl-6 text-base leading-relaxed">
                          {testimonial.quote}
                        </blockquote>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-temple bg-gradient-hero text-primary-foreground">
              <CardContent className="p-12 text-center">
                <h3 className="font-serif text-3xl font-bold mb-6">
                  Experience Balaji Residency
                </h3>
                <p className="text-xl mb-8 opacity-90">
                  Visit us in person to experience the warmth of traditional
                  South Indian hospitality combined with modern comfort.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="xl" asChild>
                    <a href="tel:9442422556">
                      <Phone className="w-5 h-5" />
                      Book a Visit
                    </a>
                  </Button>
                  <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
                    <Download className="w-5 h-5" />
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Categories */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Explore More
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-warm hover:shadow-temple transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-temple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">
                    Room Interiors
                  </h3>
                  <p className="text-muted-foreground">
                    View our comfortable and clean room arrangements
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-warm hover:shadow-temple transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-temple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">
                    Temple Views
                  </h3>
                  <p className="text-muted-foreground">
                    See the beautiful Saneeswaran Temple nearby
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-warm hover:shadow-temple transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-temple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">
                    Facilities
                  </h3>
                  <p className="text-muted-foreground">
                    Explore our amenities and common areas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
      <Footer />
    </div>
  );
};

export default Gallery;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, Users, Award, Heart, Shield, Phone } from "lucide-react";

const Team = () => {
  const testimonials = [
    {
      name: "Ramesh Iyer",
      location: "Chennai",
      rating: 5,
      quote: "Clean, peaceful, and very close to temple. Staff was kind and helpful throughout our stay. The traditional decor made us feel at home.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Meena Subramani",
      location: "Thanjavur", 
      rating: 5,
      quote: "Best lodging near Saneeswaran temple. Came with family and everyone was comfortable. The rooms were spacious and clean.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b098?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Prakash Kumar",
      location: "Bangalore",
      rating: 5,
      quote: "Affordable rates, excellent service. Will definitely return for future visits. The location is perfect for temple visits.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lakshmi Devi",
      location: "Kumbakonam",
      rating: 5,
      quote: "Perfect for devotees. Traditional feel with modern comfort. The staff understands the needs of pilgrims very well.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Suresh Anand",
      location: "Madurai",
      rating: 5,
      quote: "Family-friendly environment with all necessary amenities. The proximity to the temple made our pilgrimage very convenient.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const teamValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Devotion to Service",
      description: "We serve every guest with the same devotion that brings pilgrims to this sacred land"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Reliability", 
      description: "Built over 10+ years of consistent service and unwavering commitment to guest satisfaction"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence in Hospitality",
      description: "Recognized 25+ times for our dedication to providing exceptional pilgrim accommodation"
    }
  ];

  const achievements = [
    { number: "5000+", label: "Satisfied Guests", description: "Pilgrims who found comfort and peace" },
    { number: "25+", label: "Awards Won", description: "Recognition for service excellence" },
    { number: "10+", label: "Years of Service", description: "Decade of traditional hospitality" },
    { number: "16", label: "Comfortable Rooms", description: "Accommodations for every need" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Our Team Achievements
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Dedicated to serving pilgrims with traditional hospitality and unwavering commitment 
              to excellence in the sacred town of Thirunallar
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
              Our Sacred Commitment
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Balaji Residency, our team is united by a singular mission: to provide every 
              pilgrim and traveler with an experience that honors both their spiritual journey 
              and their need for comfort. We believe that hospitality is not just a service, 
              but a sacred duty that we perform with devotion and pride.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our family-run approach ensures that every guest receives personal attention and 
              care, making Balaji Residency not just a place to stay, but a home away from home 
              in the spiritual heart of Thirunallar.
            </p>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Our Core Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamValues.map((value, index) => (
                <Card key={index} className="border-none shadow-warm hover:shadow-temple transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="text-temple-gold mb-6 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Milestones of Excellence
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-temple-gold" />
                  </div>
                  <div className="font-serif text-3xl md:text-4xl font-bold mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-medium mb-2 opacity-90">
                    {achievement.label}
                  </div>
                  <div className="text-sm opacity-75">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guest Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              What Our Guests Say
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-none shadow-warm hover:shadow-temple transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <span className="text-sm text-muted-foreground">
                            from {testimonial.location}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-temple-gold text-temple-gold" />
                          ))}
                        </div>
                        
                        <div className="relative">
                          <Quote className="w-6 h-6 text-temple-gold opacity-50 absolute -top-2 -left-2" />
                          <blockquote className="text-muted-foreground italic pl-4">
                            {testimonial.quote}
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Commitment */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-temple">
              <CardContent className="p-12 text-center">
                <h3 className="font-serif text-3xl font-bold text-primary mb-6">
                  Our Promise to You
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Every member of the Balaji Residency team is committed to making your stay 
                  memorable. From the moment you arrive until your departure, we ensure that 
                  your pilgrimage experience is enhanced by our warm hospitality and 
                  dedicated service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="booking" size="xl" asChild>
                    <a href="tel:9442422556">
                      <Phone className="w-5 h-5" />
                      Experience Our Service
                    </a>
                  </Button>
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

export default Team;
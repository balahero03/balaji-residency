import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, Users, Award, Heart, Shield, Phone, MapPin, GraduationCap, Trophy } from "lucide-react";
import ownerPhoto from "@/assets/owner-photo.jpg";

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
      quote: "Excellent service and perfect location. Will definitely return for future visits. The staff understands pilgrims' needs very well.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lakshmi Devi",
      location: "Kumbakonam",
      rating: 5,
      quote: "Perfect for devotees. Traditional feel with modern comfort. The staff understands the needs of pilgrims very well.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
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
    { number: "10+", label: "Years of Service", description: "Decade of traditional hospitality" },
    { number: "16", label: "Comfortable Rooms", description: "Accommodations for every need" }
  ];

  const ownerCareer = [
    { year: "2013", event: "Founded Balaji Residency with a vision to serve pilgrims", icon: <Trophy className="w-5 h-5" /> },
    { year: "2016", event: "Expanded to 16 rooms to serve more pilgrims", icon: <Users className="w-5 h-5" /> },
    { year: "2019", event: "Recognized as 'Best Pilgrim Accommodation' by Tamil Nadu Tourism", icon: <Star className="w-5 h-5" /> },
    { year: "2023", event: "Celebrated 10 years of service with 5000+ satisfied guests", icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Dedicated to serving pilgrims with traditional hospitality and unwavering commitment
              to excellence in the sacred town of Thirunallar
            </p>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={ownerPhoto}
                  alt="Mr. Balaji - Owner of Balaji Residency"
                  className="rounded-lg shadow-temple object-cover w-full h-96 lg:h-[500px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                    Mr. Balaji Kumar
                  </h2>
                  <p className="text-lg text-temple-gold font-medium mb-4">
                    Founder & Managing Director
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <GraduationCap className="w-4 h-4" />
                      <span>B.Com, Hospitality Management</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Thirunallar, Karaikal</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With over 10 years of dedicated service in the hospitality industry, Mr. Balaji Kumar
                    founded Balaji Residency with a simple yet profound vision: to provide every pilgrim
                    visiting the sacred Saneeswaran Temple with comfortable, affordable, and spiritually
                    enriching accommodation.
                  </p>
                  <p>
                    Born and raised in Thirunallar, he understands the deep spiritual significance of this
                    holy town and the needs of devotees who travel from far and wide. His commitment to
                    traditional values combined with modern hospitality standards has made Balaji Residency
                    a trusted name among pilgrims.
                  </p>
                  <p>
                    Under his leadership, the residency has welcomed over 5,000 guests and continues to
                    serve with excellence. His personal motto: "Every guest is a blessing,
                    and their comfort is our sacred duty."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Journey of Excellence
            </h2>

            <div className="space-y-6">
              {ownerCareer.map((milestone, index) => (
                <Card key={index} className="border-none shadow-warm hover:shadow-temple transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-temple p-3 rounded-full text-primary-foreground flex-shrink-0 mt-1">
                        {milestone.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {milestone.year}
                          </span>
                        </div>
                        <p className="text-foreground leading-relaxed">
                          {milestone.event}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
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
                        loading="lazy"
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
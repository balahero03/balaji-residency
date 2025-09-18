import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, Users, Award, Heart, Shield, Phone, MapPin, GraduationCap, Trophy, Building2, Crown, Medal, Briefcase } from "lucide-react";
import ownerPhoto from "@/assets/owner-photo.jpg";

const Team = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      quote: "மிகவும் சுத்தமான மற்றும் அமைதியான இடம். கோவிலுக்கு மிக அருகில் இருப்பதால் மிகவும் வசதியாக இருந்தது. ஸ்டாஃப் மிகவும் உதவியாக இருந்தனர்."
    },
    {
      name: "Meenakshi Sundaram",
      location: "Thanjavur, Tamil Nadu",
      rating: 5,
      quote: "சனீஸ்வரன் கோவிலுக்கு அருகில் உள்ள சிறந்த தங்குமிடம். குடும்பத்துடன் வந்தோம், எல்லோருக்கும் வசதியாக இருந்தது. அறைகள் விசாலமாகவும் சுத்தமாகவும் இருந்தன."
    },
    {
      name: "Prakash Iyer",
      location: "Bangalore, Karnataka",
      rating: 5,
      quote: "சிறந்த சேவை மற்றும் சரியான இடம். எதிர்கால பயணங்களுக்கு நிச்சயமாக மீண்டும் வருவோம். ஸ்டாஃப் பக்தர்களின் தேவைகளை நன்கு புரிந்துகொள்கிறார்கள்."
    },
    {
      name: "Lakshmi Narayanan",
      location: "Kumbakonam, Tamil Nadu",
      rating: 5,
      quote: "பக்தர்களுக்கு சரியான இடம். பாரம்பரிய உணர்வுடன் நவீன வசதிகள். ஸ்டாஃப் பக்தர்களின் தேவைகளை நன்கு புரிந்துகொள்கிறார்கள்."
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
    { number: "20+", label: "Years Leadership", description: "Chamber of Commerce Thirunallar" },
    { number: "5000+", label: "Satisfied Guests", description: "Pilgrims who found comfort and peace" },
    { number: "6", label: "Leadership Roles", description: "From Secretary to Honorary President" },
    { number: "16", label: "Comfortable Rooms", description: "Accommodations for every need" }
  ];

  const ownerCareer = [
    { year: "2005-2007", event: "Joint Secretary - Chamber of Commerce Thirunallar", icon: <Briefcase className="w-5 h-5" /> },
    { year: "2008-2009", event: "Secretary - Chamber of Commerce Thirunallar", icon: <Building2 className="w-5 h-5" /> },
    { year: "2010-2014", event: "Treasurer - Chamber of Commerce Thirunallar", icon: <Medal className="w-5 h-5" /> },
    { year: "2015-2022", event: "Head of Chamber of Commerce Thirunallar", icon: <Crown className="w-5 h-5" /> },
    { year: "2023-2024", event: "Honorary President - Chamber of Commerce Thirunallar", icon: <Trophy className="w-5 h-5" /> },
    { year: "2020+", event: "Joint Treasurer - Thirunallar Lodge Sangam", icon: <Award className="w-5 h-5" /> }
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
              <div className="relative flex justify-center lg:justify-start">
                <div className="relative w-full max-w-md lg:max-w-none">
                  <img
                    src={ownerPhoto}
                    alt="Mr. Sridhar - Owner of Balaji Residency"
                    className="rounded-lg shadow-temple object-top w-full h-96 lg:h-[500px] mx-auto"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur rounded-lg p-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <Crown className="w-4 h-4 text-temple-gold" />
                        <span className="font-semibold text-primary">Honorary President</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Chamber of Commerce Thirunallar</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                    Mr. Sridhar
                  </h2>
                  <p className="text-lg text-temple-gold font-medium mb-4">
                    Founder, Owner & Honorary President
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <Crown className="w-4 h-4" />
                      <span>Chamber of Commerce Leader</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Thirunallar, Karaikal</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Building2 className="w-4 h-4" />
                      <span>20+ Years Leadership</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Mr. Sridhar</strong> is not just the owner of Balaji Residency,
                    but a distinguished leader who has served Thirunallar's business community for over two decades.
                    His remarkable journey from Joint Secretary to Honorary President of the Chamber of Commerce
                    Thirunallar reflects his unwavering commitment to the development and prosperity of this sacred town.
                  </p>
                  <p>
                    As the <strong className="text-foreground">Head of Chamber of Commerce Thirunallar (2015-2022)</strong>
                    and current <strong className="text-foreground">Honorary President (2023-2024)</strong>, Mr. Sridhar
                    has been instrumental in promoting tourism, supporting local businesses, and enhancing the
                    infrastructure that serves thousands of pilgrims visiting the Saneeswaran Temple.
                  </p>
                  <p>
                    His leadership extends to the <strong className="text-foreground">Thirunallar Lodge Sangam</strong>,
                    where he serves as Joint Treasurer, ensuring that accommodation providers maintain the highest
                    standards of hospitality. This deep understanding of both business leadership and hospitality
                    excellence makes Balaji Residency a truly exceptional place for pilgrims to stay.
                  </p>
                  <p>
                    <em className="text-temple-gold">"Service to pilgrims is not just business—it's our sacred duty
                      and the foundation of Thirunallar's spiritual heritage."</em> - Mr. Sridhar
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
              Leadership Journey & Achievements
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
              Leadership Excellence & Service Milestones
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
                  Under the leadership of Mr. Sridhar, Honorary President of Chamber of Commerce Thirunallar,
                  every member of the Balaji Residency team is committed to making your stay memorable.
                  From the moment you arrive until your departure, we ensure that your pilgrimage experience
                  is enhanced by our warm hospitality, dedicated service, and the highest standards of
                  accommodation excellence.
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
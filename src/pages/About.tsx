import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Award, Star, Heart, Shield } from "lucide-react";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTop";

const About = () => {
  // Scroll to top when component mounts
  useScrollToTopOnMount();

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Devotion",
      description: "We serve with the same devotion that brings pilgrims to Thirunallar"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust",
      description: "Built over 10+ years of consistent service and guest satisfaction"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Excellence",
      description: "Awarded 25+ times for our commitment to quality hospitality"
    }
  ];

  const achievements = [
    { number: "16", label: "Rooms in Residency", icon: <Users className="w-6 h-6" /> },
    { number: "5000+", label: "Happy Customers", icon: <Star className="w-6 h-6" /> },
    { number: "10", label: "Years in Service", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              About Balaji Residency
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A family legacy of devotion, service, and traditional hospitality
              in the sacred town of Thirunallar
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Balaji Residency was born from a deep reverence for the sacred tradition
                    of hosting pilgrims and travelers in Thirunallar. For over a decade,
                    our family has dedicated itself to providing comfortable, affordable
                    accommodation just steps away from the revered Saneeswaran Temple.
                  </p>
                  <p>
                    We are a creative residency located in the spiritual town of Thirunallar,
                    where devotion meets comfort. Through our commitment to traditional
                    hospitality combined with modern amenities, we've won awards and earned
                    trust from over 5000 satisfied guests.
                  </p>
                  <p>
                    Our mission remains simple: to welcome every guest with the warmth and
                    respect that the sacred land of Thirunallar deserves, ensuring their
                    spiritual journey is complemented by peaceful rest and genuine care.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-temple rounded-lg shadow-temple w-full h-96 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Traditional Hospitality</h3>
                    <p className="text-sm opacity-90">Serving pilgrims with devotion since 2014</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-none shadow-warm hover:shadow-temple transition-all duration-300">
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

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">
              Our Team Achievements
            </h2>
            <p className="text-xl text-center mb-12 opacity-90">
              Recognized for our unwavering commitment to service excellence
            </p>

            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <div className="text-temple-gold">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="font-serif text-3xl md:text-4xl font-bold mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm opacity-90">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
              Our Vision & Commitment
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Balaji Residency, we envision being the preferred sanctuary for every
                devotee and traveler who seeks authentic South Indian hospitality in
                Thirunallar. Our commitment extends beyond providing accommodation –
                we aim to be a bridge between the spiritual journey and physical comfort.
              </p>
              <p>
                Every room, every service, and every interaction reflects our dedication
                to preserving the sacred tradition of 'Atithi Devo Bhava' – treating
                guests as divine. We continue to evolve while staying rooted in our
                core values of devotion, integrity, and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
      <Footer />
    </div>
  );
};

export default About;
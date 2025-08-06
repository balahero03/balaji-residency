import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Mail,
  MessageCircle,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      details: [
        "No 01, Main Road",
        "Near Saniswaran Temple (50 meters)",
        "Thirunallar – 609607",
        "Karaikal, Puducherry"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: [
        "Primary: 9442422556",
        "Secondary: 9942024595",
        "Available 24/7 for bookings",
        "WhatsApp enabled"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Service Hours",
      details: [
        "Check-in: Flexible timing",
        "Check-out: Flexible timing", 
        "Reception: 24/7 available",
        "Temple visits: Early morning recommended"
      ]
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Reach out to us for bookings, inquiries, or any assistance you need 
              for your pilgrimage to Thirunallar
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-warm hover:shadow-temple transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="text-temple-gold mb-6 flex justify-center">
                      {info.icon}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-4">
                      {info.title}
                    </h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-none shadow-temple">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your full name"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="Enter your email address"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="Enter your phone number"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us about your requirements, dates, number of guests, etc."
                      rows={4}
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <Button variant="booking" size="lg" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    For immediate booking, please call us directly at{" "}
                    <a href="tel:9442422556" className="text-primary hover:underline font-medium">
                      9442422556
                    </a>
                  </p>
                </CardContent>
              </Card>

              {/* Map & Directions */}
              <div className="space-y-6">
                <Card className="border-none shadow-warm">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-primary mb-4">
                      Location & Directions
                    </h3>
                    
                    {/* Embedded Map Placeholder */}
                    <div className="bg-muted rounded-lg h-64 flex items-center justify-center mb-6">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-temple-gold mx-auto mb-2" />
                        <p className="text-muted-foreground">
                          Interactive map will be embedded here
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Showing Balaji Residency location
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Navigation className="w-5 h-5 text-temple-gold mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-foreground">From Karaikal Bus Stand</h4>
                          <p className="text-sm text-muted-foreground">
                            Take auto/taxi towards Thirunallar (8 km). Get down at Saneeswaran Temple. 
                            Balaji Residency is just 50 meters from the temple.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Navigation className="w-5 h-5 text-temple-gold mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-foreground">From Nagapattinam</h4>
                          <p className="text-sm text-muted-foreground">
                            Take bus/car via Karaikal road (35 km). Follow signs to Thirunallar 
                            temple. Look for our signboard near the temple.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact Options */}
                <Card className="border-none shadow-warm">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-primary mb-4">
                      Quick Contact Options
                    </h3>
                    
                    <div className="space-y-3">
                      <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                        <a href="tel:9442422556">
                          <Phone className="w-4 h-4 mr-3" />
                          Call: 9442422556
                        </a>
                      </Button>
                      
                      <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                        <a 
                          href="https://wa.me/919442422556?text=Hi,%20I%20would%20like%20to%20book%20a%20room%20at%20Balaji%20Residency"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-4 h-4 mr-3" />
                          WhatsApp Booking
                        </a>
                      </Button>
                      
                      <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                        <a 
                          href="https://balajiresidencytnr.blogspot.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-3" />
                          Visit Our Blog
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-temple bg-gradient-hero text-primary-foreground">
              <CardContent className="p-12 text-center">
                <h3 className="font-serif text-3xl font-bold mb-6">
                  Need Immediate Assistance?
                </h3>
                <p className="text-xl mb-8 opacity-90">
                  We're available 24/7 for emergency bookings and guest assistance. 
                  Don't hesitate to reach out anytime during your pilgrimage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="xl" asChild>
                    <a href="tel:9442422556">
                      <Phone className="w-5 h-5" />
                      Emergency: 9442422556
                    </a>
                  </Button>
                  <Button variant="secondary" size="xl" asChild>
                    <a href="tel:9942024595">
                      <Phone className="w-5 h-5" />
                      Alternate: 9942024595
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

export default Contact;
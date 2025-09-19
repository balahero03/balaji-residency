import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useScrollToTopOnMount } from "@/hooks/useScrollToTop";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  MessageCircle,
  Send,
  Star,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  // Scroll to top when component mounts
  useScrollToTopOnMount();

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    roomType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const roomTypes = [
    { value: "", label: "Select Room Type" },
    { value: "single-non-ac", label: "Single Non-AC Room (1 Person)" },
    { value: "double-ac", label: "Double AC Room (2 People)" },
    { value: "triple-bed", label: "Triple Bed Room (3 People)" },
    { value: "family-suite", label: "Family Suite (5 Beds)" }
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      details: [
        "No 01, Main Road",
        "Near Saneeswaran Temple (50 meters)",
        "Thirunallar – 609607",
        "Karaikal District, Puducherry"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Contact Numbers",
      details: [
        "Primary: 9442422556",
        "Secondary: 9942024595",
        "24/7 Booking Available",
        "Tamil & English Support"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Check-in Hours",
      details: [
        "Check-in: 12:00 PM onwards",
        "Check-out: 11:00 AM",
        "Reception: 24/7 Available",
        "Early check-in: On request"
      ]
    },
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "Getting Here",
      details: [
        "50m from Saneeswaran Temple",
        "2km from Karaikal Bus Stand",
        "15km from Karaikal Railway Station",
        "Free parking available"
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Date validation logic
    if (name === 'checkIn') {
      setFormData({
        ...formData,
        [name]: value,
        // If check-out is before new check-in, clear check-out
        checkOut: formData.checkOut && value && formData.checkOut < value ? "" : formData.checkOut
      });
    } else if (name === 'checkOut') {
      setFormData({
        ...formData,
        [name]: value
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, phone number, and message.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Validate dates
    if (formData.checkIn && formData.checkOut && formData.checkIn >= formData.checkOut) {
      toast({
        title: "Invalid Dates",
        description: "Check-out date must be after check-in date.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Validate check-in date is not in the past
    if (formData.checkIn && formData.checkIn < today) {
      toast({
        title: "Invalid Check-in Date",
        description: "Check-in date cannot be in the past.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `🏨 *NEW BOOKING INQUIRY - BALAJI RESIDENCY* 🏨

👤 *GUEST DETAILS:*
• Name: ${formData.name}
• Phone: ${formData.phone}
${formData.email ? `• Email: ${formData.email}` : ''}

🏠 *ROOM PREFERENCES:*
${formData.roomType ? `• Room Type: ${formData.roomType}` : '• Room Type: Not specified'}

📅 *STAY DETAILS:*
${formData.checkIn ? `• Check-in Date: ${formData.checkIn}` : '• Check-in Date: Not specified'}
${formData.checkOut ? `• Check-out Date: ${formData.checkOut}` : '• Check-out Date: Not specified'}
${formData.guests ? `• Number of Guests: ${formData.guests}` : '• Number of Guests: Not specified'}

💬 *MESSAGE:*
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *Balaji Residency, Thirunallar*
📞 Call: 9442422556 / 9942024595
🌐 Website: balajiresidency.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    const whatsappUrl = `https://wa.me/919442422556?text=${encodeURIComponent(whatsappMessage)}`;

    try {
      // Open WhatsApp in new tab/app
      window.open(whatsappUrl, '_blank');

      // Show success message
      toast({
        title: "Message Prepared!",
        description: "WhatsApp is opening with your message. Please send it to complete your inquiry.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        roomType: ""
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue opening WhatsApp. Please call us directly at 9442422556.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickWhatsApp = () => {
    const quickMessage = `Hi! I would like to book a room at Balaji Residency, Thirunallar. Please share availability.`;
    const whatsappUrl = `https://wa.me/919442422556?text=${encodeURIComponent(quickMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

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
                  <CardTitle className="font-serif text-2xl text-primary flex items-center space-x-2">
                    <MessageCircle className="w-6 h-6 text-temple-gold" />
                    <span>Send us a Message</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll send your inquiry directly to our WhatsApp for instant response.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="checkIn">Check-in Date</Label>
                        <Input
                          id="checkIn"
                          name="checkIn"
                          type="date"
                          value={formData.checkIn}
                          onChange={handleInputChange}
                          min={today}
                        />
                        <p className="text-xs text-muted-foreground">Select today or future date</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="checkOut">Check-out Date</Label>
                        <Input
                          id="checkOut"
                          name="checkOut"
                          type="date"
                          value={formData.checkOut}
                          onChange={handleInputChange}
                          min={formData.checkIn || today}
                        />
                        <p className="text-xs text-muted-foreground">Must be after check-in date</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="guests">Number of Guests</Label>
                        <Input
                          id="guests"
                          name="guests"
                          type="number"
                          min="1"
                          max="10"
                          value={formData.guests}
                          onChange={handleInputChange}
                          placeholder="Number of guests"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="roomType">Preferred Room Type</Label>
                        <select
                          id="roomType"
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {roomTypes.map((room) => (
                            <option key={room.value} value={room.value}>
                              {room.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your visit plans, room preferences, or any special requirements..."
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        variant="booking"
                        size="lg"
                        disabled={isSubmitting}
                        className="flex-1"
                      >
                        <Send className="w-4 h-4" />
                        {isSubmitting ? "Preparing..." : "Send via WhatsApp"}
                      </Button>
                    </div>

                    <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <p>
                        Your message will be sent directly to our WhatsApp for immediate attention.
                        We typically respond within 30 minutes.
                      </p>
                    </div>
                  </form>
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

                    <Button variant="outline" size="lg" className="w-full mb-4" asChild>
                      <a
                        href="https://www.google.com/maps/place/Balaji+Residency+(Residency+%2F+Lodge+In+Thirunallar)/@10.9267874,79.7925233,411m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a5517123f74247d:0x4094ab9c8a9ba7ea!8m2!3d10.9267874!4d79.7934637!16s%2Fg%2F11fst1pkf2?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        View on Google Maps
                      </a>
                    </Button>

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

                      <Button variant="temple" size="lg" onClick={quickWhatsApp} className="w-full">
                        <MessageCircle className="w-5 h-5" />
                        Quick WhatsApp
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
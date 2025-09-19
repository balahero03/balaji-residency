import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { trackBooking } from "@/lib/analytics";

const BookingCTA = () => {
  const handleWhatsAppClick = () => {
    trackBooking('whatsapp', 'floating_button');
  };

  const handlePhoneClick = () => {
    trackBooking('phone', 'floating_button');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <Button
        variant="temple"
        size="icon"
        className="rounded-full w-14 h-14 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
        asChild
      >
        <a
          href="/contact"
          aria-label="Contact Form"
          onClick={handleWhatsAppClick}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <MessageCircle className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
        </a>
      </Button>

      {/* Call Button */}
      <Button
        variant="booking"
        size="icon"
        className="rounded-full w-14 h-14 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
        asChild
      >
        <a
          href="tel:9442422556"
          aria-label="Call for Booking"
          onClick={handlePhoneClick}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <Phone className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
        </a>
      </Button>
    </div>
  );
};

export default BookingCTA;
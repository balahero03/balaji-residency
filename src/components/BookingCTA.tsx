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
        className="rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform"
        asChild
      >
        <a
          href="https://wa.me/919442422556?text=Hi,%20I%20would%20like%20to%20book%20a%20room%20at%20Balaji%20Residency%20Thirunallar.%20Please%20share%20availability%20and%20rates."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Booking"
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>

      {/* Call Button */}
      <Button
        variant="booking"
        size="icon"
        className="rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform"
        asChild
      >
        <a
          href="tel:9442422556"
          aria-label="Call for Booking"
          onClick={handlePhoneClick}
        >
          <Phone className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default BookingCTA;
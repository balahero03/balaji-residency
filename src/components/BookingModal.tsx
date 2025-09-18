import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, MessageCircle, Phone } from 'lucide-react';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { trackBooking } from '@/lib/analytics';

interface BookingModalProps {
    children: React.ReactNode;
}

const BookingModal = ({ children }: BookingModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        checkIn: undefined as Date | undefined,
        checkOut: undefined as Date | undefined,
        guests: '',
        roomType: '',
        message: ''
    });
    const { toast } = useToast();

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate required fields
        if (!formData.name || !formData.phone || !formData.checkIn || !formData.checkOut) {
            toast({
                title: "Missing Information",
                description: "Please fill in all required fields.",
                variant: "destructive",
            });
            setIsSubmitting(false);
            return;
        }

        // Create WhatsApp message
        const whatsappMessage = `*Room Booking Request - Balaji Residency*

👤 *Guest Details:*
Name: ${formData.name}
Phone: ${formData.phone}
${formData.email ? `Email: ${formData.email}` : ''}

📅 *Stay Details:*
Check-in: ${format(formData.checkIn, 'dd/MM/yyyy')}
Check-out: ${format(formData.checkOut, 'dd/MM/yyyy')}
Guests: ${formData.guests}
Room Type: ${formData.roomType}

💬 *Message:*
${formData.message || 'No additional message'}

---
*Sent from balajiresidency.com booking form*`;

        const whatsappUrl = `https://wa.me/919442422556?text=${encodeURIComponent(whatsappMessage)}`;

        try {
            // Track booking attempt
            trackBooking('whatsapp', 'booking_modal');

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            toast({
                title: "Booking Request Sent!",
                description: "WhatsApp is opening with your booking details. Please send the message to confirm.",
            });

            // Reset form and close modal
            setFormData({
                name: '',
                phone: '',
                email: '',
                checkIn: undefined,
                checkOut: undefined,
                guests: '',
                roomType: '',
                message: ''
            });
            setIsOpen(false);

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

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-center">Book Your Stay</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="name">Name *</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="phone">Phone *</Label>
                            <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Check-in Date *</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {formData.checkIn ? format(formData.checkIn, 'dd/MM/yyyy') : 'Select date'}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={formData.checkIn}
                                        onSelect={(date) => handleInputChange('checkIn', date)}
                                        disabled={(date) => date < new Date()}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div>
                            <Label>Check-out Date *</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {formData.checkOut ? format(formData.checkOut, 'dd/MM/yyyy') : 'Select date'}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={formData.checkOut}
                                        onSelect={(date) => handleInputChange('checkOut', date)}
                                        disabled={(date) => date < (formData.checkIn || new Date())}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="guests">Number of Guests</Label>
                            <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select guests" />
                                </SelectTrigger>
                                <SelectContent>
                                    {[1, 2, 3, 4, 5, 6].map(num => (
                                        <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Guest' : 'Guests'}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="roomType">Room Type</Label>
                            <Select value={formData.roomType} onValueChange={(value) => handleInputChange('roomType', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select room type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ac">AC Room</SelectItem>
                                    <SelectItem value="non-ac">Non-AC Room</SelectItem>
                                    <SelectItem value="any">Any Available</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="message">Special Requests</Label>
                        <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            placeholder="Any special requirements or requests..."
                            rows={3}
                        />
                    </div>

                    <div className="flex gap-2 pt-4">
                        <Button type="submit" className="flex-1" disabled={isSubmitting}>
                            <MessageCircle className="w-4 h-4 mr-2" />
                            {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
                        </Button>
                        <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default BookingModal;

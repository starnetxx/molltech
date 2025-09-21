import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProfessionalButton } from "@/components/ui/professional-button";
import { Phone, Mail, MessageCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
}

export const ContactModal = ({ isOpen, onClose, packageName }: ContactModalProps) => {
  const phoneNumber = "09063412927";
  const email = "traceroot.io@gmail.com";
  const whatsappMessage = `Hi! I'm interested in the ${packageName} package. Can you please provide more information?`;

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Inquiry about ${packageName}`);
    const body = encodeURIComponent(`Hi,\n\nI'm interested in the ${packageName} package. Please provide more details about pricing and implementation.\n\nBest regards`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-morphism border-white/20 max-w-md mx-4">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-white mb-2">
            Contact Us
          </DialogTitle>
          <DialogDescription className="text-white/80">
            Ready to get started with {packageName}? Choose your preferred contact method:
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-6">
          <ProfessionalButton
            onClick={handleCall}
            variant="premium"
            size="lg"
            className="w-full justify-start space-x-3 glass-morphism border-white/20 hover:bg-white/20"
          >
            <Phone className="h-5 w-5" />
            <div className="text-left">
              <div className="font-semibold">Call Now</div>
              <div className="text-sm opacity-80">{phoneNumber}</div>
            </div>
          </ProfessionalButton>

          <ProfessionalButton
            onClick={handleWhatsApp}
            variant="premium"
            size="lg"
            className="w-full justify-start space-x-3 glass-morphism border-white/20 hover:bg-white/20"
          >
            <MessageCircle className="h-5 w-5" />
            <div className="text-left">
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm opacity-80">Quick chat with us</div>
            </div>
          </ProfessionalButton>

          <ProfessionalButton
            onClick={handleEmail}
            variant="premium"
            size="lg"
            className="w-full justify-start space-x-3 glass-morphism border-white/20 hover:bg-white/20"
          >
            <Mail className="h-5 w-5" />
            <div className="text-left">
              <div className="font-semibold">Email Us</div>
              <div className="text-sm opacity-80">{email}</div>
            </div>
          </ProfessionalButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};
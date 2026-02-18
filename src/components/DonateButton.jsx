import { MessageCircleHeart } from "lucide-react";

const DonateButton = () => {
  const phoneNumber = "919940338848"; // Added 91 for India code
  const message = encodeURIComponent("i am here for donation");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1 group"
    >
      <span className="font-bold text-lg">Donate</span>
      <MessageCircleHeart size={24} className="animate-pulse" />
    </a>
  );
};

export default DonateButton;

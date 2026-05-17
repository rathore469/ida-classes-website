import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col gap-4">
      <a
        href="https://wa.me/919667556598"
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition duration-300 hover:scale-110 hover:shadow-2xl"
      >
        <FaWhatsapp size={26} />
      </a>

      <a
        data-track="call"
        href="tel:9667556598"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition duration-300 hover:scale-110 hover:shadow-2xl"
      >
        <PhoneCall size={24} />
      </a>
    </div>
  );
}

"use client";

import { Phone, MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export default function FloatingButtons() {
  const phoneLink = `tel:${company.contact.phone}`;
  const whatsappLink = `https://wa.me/${company.contact.whatsapp.replace(/\+|\s/g, "")}?text=Hallo, ich benötige Hilfe bei einer Rohrverstopfung.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp Kontakt"
      >
        <MessageCircle className="w-6 h-6 text-white" />

        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp schreiben
        </span>
      </a>

      {/* Phone Button */}
      <a
        href={phoneLink}
        className="group relative flex items-center justify-center w-14 h-14 gradient-primary rounded-full shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-110 btn-shimmer"
        aria-label="Anrufen"
      >
        <Phone className="w-6 h-6 text-white animate-bounce-gentle" />

        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full gradient-primary animate-ping opacity-30" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Jetzt anrufen - 24/7
        </span>
      </a>
    </div>
  );
}

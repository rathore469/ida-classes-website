"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        <a
          data-track="call"
          href="tel:+919667556598"
          className="flex h-14 flex-1 items-center justify-center rounded-2xl bg-blue-600 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
        >
          <Phone className="mr-2 h-5 w-5" />
          Call Now
        </a>

        <a
          data-track="whatsapp"
          href="https://wa.me/919667556598"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 flex-1 items-center justify-center rounded-2xl bg-green-500 text-base font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-green-600"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

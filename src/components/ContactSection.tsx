import React from "react";
import { Instagram, Mail } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

const EMAIL_ADDRESS = "akremmaarfi@gmail.com";
const INSTAGRAM_URL = "https://instagram.com/akrem_maarfii";
const WHATSAPP_URL =
  "https://wa.me/21623827135?text=" +
  encodeURIComponent("Hi Akrem! I'd like a short-form edit for my channel.");

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="px-6 sm:px-10 md:px-16 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto bg-accent rounded-3xl px-6 sm:px-12 py-14 sm:py-20 text-center">
        <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
          Got a video that needs to perform?
        </h2>
        <p className="text-white/80 font-inter text-sm sm:text-base mb-10 max-w-md mx-auto">
          Send your footage — get the first cut back in 24 hours.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-11 px-10 py-4 rounded-xl bg-white text-accent-strong font-inter text-sm uppercase tracking-widest font-bold hover:bg-white/90 active:scale-95 transition-all"
        >
          Contact
        </a>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-11 px-4 rounded-xl bg-white/15 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/25 transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-11 px-4 rounded-xl bg-white/15 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/25 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp
          </a>

          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="inline-flex items-center gap-2 min-h-11 px-4 rounded-xl bg-white/15 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/25 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Instagram, Mail, MessageSquare, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'akrem.maarfi@gmail.com';
  const instagramHandle = '@akrem.maarfi';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hi Akrem! I'm interested in short-form video editing or video ads for my channel/brand. Let's talk!");
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 relative overflow-hidden bg-black border-t border-white/10">
      {/* Background Radial Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[150%] h-[400px] cinematic-glow opacity-30 -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/30 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Work With <span className="neon-accent italic">Akrem Maarfi</span>
          </h2>
          <p className="text-white/60 font-inter text-sm sm:text-base max-w-lg mx-auto">
            Ready to scale your views and conversions? Reach out directly via Instagram DM, Email, or WhatsApp.
          </p>
        </div>

        {/* 3 Contact Method Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Instagram Card */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="glass-card p-8 rounded-2xl border border-white/10 hover:border-[#E1306C] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-xl"
          >
            <div>
              <div className="p-3.5 rounded-2xl bg-[#E1306C]/10 border border-[#E1306C]/30 text-[#E1306C] w-fit mb-6 group-hover:scale-110 group-hover:bg-[#E1306C]/20 transition-all duration-300 shadow-md">
                <Instagram className="w-7 h-7 stroke-[2.25]" />
              </div>
              <span className="text-xs uppercase tracking-widest text-white/50 font-semibold block mb-1">
                Instagram DM
              </span>
              <h3 className="font-playfair text-xl font-bold text-white mb-2">
                {instagramHandle}
              </h3>
              <p className="text-white/60 text-xs leading-relaxed font-inter">
                Send us a DM with your video clips or portfolio references for instant feedback.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#E1306C] group-hover:text-white transition-colors">
              <span>Open Instagram</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform stroke-[2.25]" />
            </div>
          </a>

          {/* Email Card */}
          <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-[#FF6600] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-xl">
            <div>
              <div className="p-3.5 rounded-2xl bg-[#FF6600]/10 border border-[#FF6600]/30 text-[#FF6600] w-fit mb-6 group-hover:scale-110 group-hover:bg-[#FF6600]/20 transition-all duration-300 shadow-md">
                <Mail className="w-7 h-7 stroke-[2.25]" />
              </div>
              <span className="text-xs uppercase tracking-widest text-white/50 font-semibold block mb-1">
                Direct Email
              </span>
              <h3 className="font-playfair text-lg font-bold text-white mb-2 break-all">
                {emailAddress}
              </h3>
              <p className="text-white/60 text-xs leading-relaxed font-inter">
                Send footage links, project briefs, or custom retainer proposals directly to our inbox.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
              <a
                href={`mailto:${emailAddress}`}
                className="text-xs font-bold uppercase tracking-wider text-[#FF6600] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.25]" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/80 transition-colors text-xs flex items-center gap-1 border border-white/10"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#25D366] stroke-[2.25]" />
                    <span className="text-[10px] text-[#25D366]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 stroke-[2.25]" />
                    <span className="text-[10px]">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div
            onClick={handleWhatsAppChat}
            className="glass-card p-8 rounded-2xl border border-white/10 hover:border-[#25D366] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-xl cursor-pointer"
          >
            <div>
              <div className="p-3.5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] w-fit mb-6 group-hover:scale-110 group-hover:bg-[#25D366]/20 transition-all duration-300 shadow-md">
                <MessageSquare className="w-7 h-7 stroke-[2.25]" />
              </div>
              <span className="text-xs uppercase tracking-widest text-white/50 font-semibold block mb-1">
                WhatsApp Chat
              </span>
              <h3 className="font-playfair text-xl font-bold text-white mb-2">
                Instant Chat
              </h3>
              <p className="text-white/60 text-xs leading-relaxed font-inter">
                Chat 1-on-1 with our executive team. Fastest response for rush turnarounds.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#25D366] group-hover:text-white transition-colors">
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Twitter, Cpu } from "lucide-react";
import Logo1Zero from "./Logo1Zero";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[#050505] pt-20 pb-12 border-t border-neutral-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/[0.02] blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main interactive row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: BIG GREETING */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
              Let's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#ede9fe]">
                Connect
              </span>
            </h2>
            <p className="font-sans text-xs text-neutral-400 leading-relaxed max-w-sm">
              We look forward to translating your mission operations into pristine, indestructible, & lightning-fast system systems. Let's make digital history together.
            </p>
            
            {/* Social handles */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Twitter, href: "https://twitter.com", id: "twitter-link" },
                { icon: Linkedin, href: "https://linkedin.com", id: "linkedin-link" },
                { icon: Github, href: "https://github.com", id: "github-link" },
                { icon: MessageCircle, href: "https://whatsapp.com", id: "whatsapp-link" }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    id={social.id}
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="no-referrer"
                    className="h-9 w-9 rounded-xl border border-neutral-900 bg-[#0a0a0c] hover:bg-neutral-950 hover:border-emerald-500/30 hover:text-emerald-400 flex items-center justify-center text-neutral-400 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: DETAILED ADDRESS AND COMMUNICATIONS SUMMARY */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 font-sans">
            
            {/* Email & Contact */}
            <div className="space-y-4">
              <span className="block font-mono text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                Direct Inquiries
              </span>
              <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
                <a 
                  id="footer-email-link"
                  href="mailto:partner@1zero.biz" 
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors font-mono"
                >
                  <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>partner@1zero.biz</span>
                </a>
                <a 
                  id="footer-phone-link"
                  href="tel:+6231998522" 
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors font-mono"
                >
                  <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>+62-31-998-5221</span>
                </a>
              </div>

              {/* Quick links tag lines */}
              <div className="pt-4 border-t border-neutral-900 space-y-1 text-[11px] text-neutral-500">
                <span className="block">WIB working hours: 09:00 - 18:00 WIB</span>
                <span className="block">Engineers responsive via Slack/Teams logs.</span>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-4">
              <span className="block font-mono text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                Primary Laboratory
              </span>
              <div className="flex gap-2 text-xs text-neutral-300 leading-relaxed font-mono">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans text-xs">Pakuwon Tower Surabaya</strong>
                  <span>12th Floor, Corner Unit, Tunjungan Plaza 6</span>
                  <span className="block">Jl. Embong Malang No. 4</span>
                  <span className="block">Surabaya, Jawa Timur 60261</span>
                  <span className="block text-neutral-500">Indonesia</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 border-t border-neutral-900 text-xs font-mono text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo1Zero className="h-4 text-neutral-400 opacity-60 hover:opacity-100 transition-opacity" glow={false} />
            <span>© {currentYear} 1ZERO AGENCY. ALL ARCHITECTURAL PLANS SECURED.</span>
          </div>
          
          <div className="flex items-center gap-4 text-[10px] uppercase">
            <a href="#home" className="hover:text-emerald-400 hover:underline transition-colors">BACK TO TOP ↑</a>
            <span>•</span>
            <span className="text-[#a3e635]">MADE FOR DOUBLE IMPACT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

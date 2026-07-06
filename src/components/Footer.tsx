import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Twitter, Cpu, Instagram } from "lucide-react";
import Logo1Zero from "./Logo1Zero";
import { footerCopy } from "../copy";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-raisin-black-800/20 py-16 pb-12 border-t border-sea-salt/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brunswick-green-900/[0.02] blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Main interactive row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT COLUMN: BIG GREETING */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-sans text-3xl sm:text-5xl font-bold text-sea-salt">
              {footerCopy.connectTitle} <br />
              <span className="animate-gradient-text text-gradient-impact text-transparent bg-clip-text bg-gradient-to-r from-[var(--ivory)] to-[var(--green-900)]">
                {footerCopy.connectGradient}
              </span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-sea-salt  max-w-sm">
              {footerCopy.description}
            </p>

            {/* Social handles */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/1zero.biz/", id: "Instagram-link" },
                { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/1zero-biz/", id: "linkedin-link" },
                { name: "WhatsApp", icon: MessageCircle, href: "https://api.whatsapp.com/send/?phone=6285339396030&text&type=phone_number&app_absent=0", id: "whatsapp-link" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    id={social.id}
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="no-referrer"
                    className="group relative h-9 w-9 rounded-xl border border-brunswick-green-500 bg-raisin-black-800 hover:bg-brunswick-green-500/30 hover:border-brunswick-green-500/30 hover:text-brunswick-green-500 flex items-center justify-center text-brunswick-green-500 transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-raisin-black-800 border border-brunswick-green-500 text-sea-salt text-xs font-sans rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-10">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: DETAILED ADDRESS AND COMMUNICATIONS SUMMARY */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 font-sans">

            {/* Email & Contact */}
            <div className="space-y-6">
              <span className="block font-sans text-lg text-sea-salt/90 uppercase tracking-widest font-bold">
                {footerCopy.directInquiries}
              </span>
              <div className="space-y-3 text-lg  text-sea-salt">
                <a
                  id="footer-email-link"
                  href="mailto:mrosa@1zero.biz.biz"
                  className="flex items-center gap-2 hover:text-brunswick-green-500 transition-colors font-sans"
                >
                  <Mail className="h-4 w-4 text-brunswick-green-500 shrink-0" />
                  <span>mrosa@1zero.biz.biz</span>
                </a>
                <a
                  id="footer-phone-link"
                  href="tel:+6285339396030"
                  className="flex items-center gap-2 hover:text-brunswick-green-500 transition-colors font-sans"
                >
                  <Phone className="h-4 w-4 text-brunswick-green-500 shrink-0" />
                  <span>+62-853-3939-6030</span>
                </a>
              </div>

              {/* Quick links tag lines */}
              <div className="pt-4 border-t border-sea-salt/20 text-lg text-sea-salt/90 ">
                <span className="block text-lg">{footerCopy.workingHours} </span>
                {/* <span className="block">Engineers responsive via Slack/Teams logs.</span> */}
              </div>
            </div>

            {/* Address */}
            <div className="space-y-6">
              <span className="block font-sans text-lg text-sea-saltuppercase tracking-widest font-bold">
                {footerCopy.primaryLaboratory}
              </span>
              <div className="flex gap-2 text-lg text-sea-salt  font-sans">
                <MapPin className="h-4 w-4 text-brunswick-green-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sea-salt block font-sans text-lg">{footerCopy.officeTitle}</strong>
                  <span className="text-sea-salt/90">{footerCopy.officeAddress}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 border-t border-sea-salt/20 text-lg font-sans text-sea-salt flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-col items-start sm:flex-row">
            <Logo1Zero className="h-4 text-sea-salt opacity-60 hover:opacity-100 transition-opacity" glow={false} />
            <span>© {currentYear} {footerCopy.copyright}</span>
          </div>

          <div className="flex items-center gap-4 text-lg uppercase">
            <a href="#home" className="hover:text-brunswick-green-500 hover:underline transition-colors">{footerCopy.backToTop}</a>
            <span>•</span>
            <span className="text-brunswick-green-500">{footerCopy.madeForDoubleImpact}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

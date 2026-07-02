import { motion } from "motion/react";
import { Sparkles, Star, Users, PhoneCall, ArrowRight, Server, Shield, Database, Cpu } from "lucide-react";
import { clientLogos } from "../data";
import { heroCopy } from "../copy";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="relative  overflow-hidden">
      {/* Aurora glow effect right behind hero heading */}
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="aurora-layer aurora-1" />
        <div className="aurora-layer aurora-2" />
        <div className="aurora-layer aurora-3" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 pt-10 pb-10">
        {/* Upper Micro Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-800/80 bg-neutral-900/60 p-1 px-4 text-base backdrop-blur-sm shadow-md"
        >
          <span className="h-2 w-2 rounded-full bg-green-primary animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
          <span className="font-sans text-sm font-medium text-neutral-300">
            {heroCopy.performanceLabel}
          </span>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">

        {/* Master Copy */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            {heroCopy.simplifyTitle} <br />
            <span className="animate-gradient-text text-gradient ">
              {heroCopy.amplifyTitle}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto font-sans text-sea-salt text-sm sm:text-base leading-relaxed"
          >
            {heroCopy.tagline}
          </motion.p>
        </div>

        {/* Dynamic Multi-State Action CTA Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-5 items-stretch rounded-2xl border border-color-sea-salt bg-[#09090b]/80 p-1 backdrop-blur-md shadow-2xl"
        >
          {/* Rating box (Col-span 3) */}
          <div className="md:col-span-3 flex flex-col justify-center items-start text-left p-5 md:pl-6 space-y-2 border-b md:border-b-0  border-neutral-800/80">
            {/* <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-emerald-500 text-emerald-500" />
              ))}
              <span className="font-sans text-base text-white ml-1.5 font-bold">4.9★</span>
            </div> */}
            <p className="font-sans text-base leading-relaxed text-neutral-300">
              {heroCopy.ctaText}
            </p>
            {/* <div className="flex items-center gap-1.5 font-sans text-[9px] text-neutral-500 uppercase tracking-wider">
              <Users className="h-3 w-3 text-emerald-400" />
              <span>372+ Reviews from tech teams</span>
            </div> */}
          </div>

          {/* Direct CTA button card (Col-span 2) */}
          <button
            id="hero-book-call-card"
            onClick={onOpenBooking}
            className="md:col-span-2 group flex flex-col justify-center items-center gap-2 p-3 rounded-xl bg-brunswick-green-primary hover:bg-brunswick-green-700 hover:text-white text-sea-salt text-center transition-all cursor-pointer font-sans font-black text-sm relative overflow-hidden"
          >
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:bg-brunswick-green-700 transition-opacity" />
            <PhoneCall className="h-5 w-5 animate-bounce shrink-0" />
            <span className="tracking-wider uppercase">{heroCopy.ctaButtonText}</span>
            <span className="flex items-center gap-1 font-sans text-base  font-medium">
              {heroCopy.ctaButtonSubtext}
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>

        {/* Tagline separator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-6"
        >
          <span className="font-sans text-base uppercase tracking-[0.2em] text-sea-salt select-none">
            {heroCopy.deliveringLabel}
          </span>
        </motion.div>

        {/* Client Partner Tape Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-6 border-t border-neutral-900"
        >
          <p className="font-sans text-sm text-sea-salt  tracking-widest mb-6">
            {heroCopy.trustedBy}
          </p>

          {/* Infinite marquee carousel — duplicated for seamless loop */}
          <div className="relative overflow-hidden logo-tape-mask">
            <div className="flex animate-marquee gap-8 w-max">
              {/* First set */}
              {clientLogos.map((client) => (
                <div
                  key={`a-${client.name}`}
                  className="flex items-center justify-center px-6 py-3 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:border-emerald-500/30 transition-all group cursor-default shrink-0"
                >
                  <img
                    src={client.logoImg}
                    alt={client.name}
                    className="h-8 md:h-9 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((client) => (
                <div
                  key={`b-${client.name}`}
                  className="flex items-center justify-center px-6 py-3 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:border-emerald-500/30 transition-all group cursor-default shrink-0"
                  aria-hidden="true"
                >
                  <img
                    src={client.logoImg}
                    alt=""
                    className="h-8 md:h-9 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>



      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Sparkles, Star, Users, PhoneCall, ArrowRight, Server, Shield, Database, Cpu } from "lucide-react";
import { clientLogos } from "../data";
import { heroCopy } from "../copy";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="relative  overflow-hidden py-16 ">
      {/* Aurora glow effect right behind hero heading */}
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="aurora-layer aurora-1" />
        <div className="aurora-layer aurora-2" />
        <div className="aurora-layer aurora-3" />
      </div>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 pt-10 pb-10"> */}
      {/* Upper Micro Label */}
      {/* <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-sea-salt/80 bg-sea-salt/60 p-1 px-4 text-lg backdrop-blur-sm shadow-md"
        >
          <span className="h-2 w-2 rounded-full bg-brunswick-green-900 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
          <span className="font-sans text-lg font-medium uppercase tracking-widest text-sea-salt">
            {heroCopy.performanceLabel}
          </span>
        </motion.div> */}
      {/* </div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 border-b border-sea-salt/20">

        {/* Master Copy */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans text-5xl sm:text-6xl md:text-7xl font-extrabold text-sea-salt leading-[1.1]"
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
            className="max-w-2xl mx-auto font-sans text-sea-salt text-base sm:text-lg"
          >
            {heroCopy.tagline}
          </motion.p>
        </div>

        {/* Dynamic Multi-State Action CTA Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-5 items-stretch rounded-2xl border border-color-sea-salt bg-raisin-black-800 p-1 backdrop-blur-md shadow-2xl"
        >
          {/* Rating box (Col-span 3) */}
          <div className="md:col-span-3 flex flex-col justify-center items-start text-left p-5 md:pl-6 space-y-2   ">
            {/* <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-brunswick-green-500 text-brunswick-green-500" />
              ))}
              <span className="font-sans text-lg text-sea-salt ml-1.5 font-bold">4.9★</span>
            </div> */}
            <p className="font-sans text-base sm:text-lg  text-sea-salt">
              {heroCopy.ctaText}
            </p>
            {/* <div className="flex items-center gap-1.5 font-sans text-base text-sea-salt uppercase tracking-wider">
              <Users className="h-3 w-3 text-brunswick-green-500" />
              <span>372+ Reviews from tech teams</span>
            </div> */}
          </div>

          {/* Direct CTA button card (Col-span 2) */}
          <button
            id="hero-book-call-card"
            onClick={onOpenBooking}
            className="md:col-span-2 group flex flex-col justify-center items-center gap-2 p-3 rounded-xl bg-brunswick-green-900 hover:bg-brunswick-green-700 hover:text-sea-salt text-sea-salt text-center transition-all cursor-pointer font-sans font-black text-lg relative overflow-hidden"
          >
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sea-salt/10 to-transparent bg-brunswick-green-900 opacity-0 group-hover:bg-brunswick-green-700 transition-opacity" />
            <PhoneCall className="h-5 w-5 animate-bounce shrink-0" />
            <span className="tracking-wider uppercase">{heroCopy.ctaButtonText}</span>
            <span className="flex items-center gap-1 font-sans text-lg  font-medium">
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
          className=""
        >
          <span className="font-sans text-lg uppercase tracking-widest text-sea-salt select-none">
            {heroCopy.deliveringLabel}
          </span>
        </motion.div>

        {/* Client Partner Tape Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pb-10 space-y-6 "
        >
          {/* <p className="inline-block px-3.5 py-2 rounded-full border border-brunswick-500 text-lg font-sans uppercase tracking-widest text-brunswick-green-500  bg-raisin-black">
            {heroCopy.trustedBy}
          </p> */}
          <p className="text-sea-salt">
            {heroCopy.trustedBy}
          </p>

          {/* Infinite marquee carousel — duplicated for seamless loop */}
          <div className="relative overflow-hidden logo-tape-mask">
            <div className="flex animate-marquee gap-8 w-max">
              {/* First set */}
              {clientLogos.map((client) => (
                <div
                  key={`a-${client.name}`}
                  className="flex items-center justify-center px-6 py-3 rounded-xl border border-sea-salt/20 hover:border-brunswick-green-500/30 transition-all group cursor-default shrink-0"
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
                  className="flex items-center justify-center px-6 py-3 rounded-xl border border-sea-salt/20 hover:border-brunswick-green-500/30 transition-all group cursor-default shrink-0"
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

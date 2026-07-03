import { motion } from "motion/react";
import { PhoneCall, Calendar, HelpCircle, ArrowRight, ShieldAlert, Sparkles } from "lucide-react";
import BookingButton from "./BookingButton";
import { ctaCopy } from "../copy";

interface CTAProps {
  onOpenBooking: () => void;
}

export default function CTA({ onOpenBooking }: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-raisin-black-800/20 py-16 ">

      {/* Curved Emerald Backdrop container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#062114] to-[#010a05] border border-brunswick-green-500/20 py-16 px-6 sm:px-12 text-center shadow-2xl">

          {/* Top curve detail visual lines */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-72 w-[110%] rounded-b-full bg-brunswick-green-900/[0.04] blur-2xl" />

          {/* Glowing particle details */}
          <div className="absolute top-10 right-10 flex h-3 w-3 items-center justify-center text-brunswick-green-500">
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>
          <div className="absolute bottom-10 left-10 flex h-3 w-3 items-center justify-center text-brunswick-green-500">
            <Sparkles className="h-4 w-4 animate-bounce" />
          </div>

          <div className="max-w-3xl mx-auto space-y-10">
            {/* Header label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brunswick-green-500/20 bg-brunswick-green-600/20 px-4 py-1.5 text-lg text-brunswick-green-500 font-sans">
              <span className="h-1.5 w-1.5 rounded-full bg-brunswick-green-500 animate-ping" />

              <span className="overflow-hidden sea-saltspace-nowrap border-r border-brunswick-green-500 animate-typing">
                {ctaCopy.limitedWeekly}
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-sea-salt tracking-tight ">
                {ctaCopy.titleLine1}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brunswick-green-500 to-dun">
                  {ctaCopy.titleGradient}
                </span> <br />
                {ctaCopy.titleLine2}
              </h2>
              <p className="max-w-xl mx-auto font-sans text-lg sm:text-lg text-sea-salt/90">
                {ctaCopy.description}
              </p>
            </div>

            {/* Sand/Beige Colored Call Action Button */}
            <div className="flex flex-col items-center justify-center gap-6">
              <BookingButton onClick={onOpenBooking} />
            </div>

            {/* Telemetry checks under booking button */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-brunswick-green-500/10 text-left text-lg text-brunswick-green-500/60 font-sans max-w-2xl mx-auto">
              <div className="space-y-2">
                <span className="block font-bold text-sea-salt">{ctaCopy.benefit1Title}</span>
                <span className="block text-lg text-brunswick-green-500">{ctaCopy.benefit1Desc}</span>
              </div>
              <div className="space-y-2">
                <span className="block font-bold text-sea-salt">{ctaCopy.benefit2Title}</span>
                <span className="block text-lg text-brunswick-green-500">{ctaCopy.benefit2Desc}</span>
              </div>
              <div className="space-y-2">
                <span className="block font-bold text-sea-salt">{ctaCopy.benefit3Title}</span>
                <span className="block text-lg text-brunswick-green-500">{ctaCopy.benefit3Desc}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

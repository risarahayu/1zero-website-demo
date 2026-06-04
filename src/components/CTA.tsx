import { motion } from "motion/react";
import { PhoneCall, Calendar, HelpCircle, ArrowRight, ShieldAlert, Sparkles } from "lucide-react";
import BookingButton from "./BookingButton";

interface CTAProps {
  onOpenBooking: () => void;
}

export default function CTA({ onOpenBooking }: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-[#030303] pt-12 pb-24">

      {/* Curved Emerald Backdrop container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#062114] to-[#010a05] border border-emerald-500/20 py-20 px-6 sm:px-12 text-center shadow-2xl">

          {/* Top curve detail visual lines */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-72 w-[110%] rounded-b-full bg-green-primary/[0.04] blur-2xl" />

          {/* Glowing particle details */}
          <div className="absolute top-10 right-10 flex h-3 w-3 items-center justify-center text-emerald-400">
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>
          <div className="absolute bottom-10 left-10 flex h-3 w-3 items-center justify-center text-emerald-400">
            <Sparkles className="h-4 w-4 animate-bounce" />
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* Header label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-900/20 px-4 py-1.5 text-base text-emerald-300 font-sans">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />

              <span className="overflow-hidden whitespace-nowrap border-r border-emerald-400 animate-typing">
                LIMITED WEEKLY OPENINGS
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="font-sans text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
                This is your sign<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-[#dcd8cc]">
                  Book a Free 30-Minute
                </span> <br />
                Strategy Session
              </h2>
              <p className="max-w-xl mx-auto font-sans text-base sm:text-base text-sea-salt leading-relaxed pt-2">
                No strings attached. We'll map out your operational schemas, uncover query performance bottlenecks, and design a custom architectural blueprint for your project.
              </p>
            </div>

            {/* Sand/Beige Colored Call Action Button */}
            <div className="pt-4 flex flex-col items-center justify-center gap-3">
              <BookingButton onClick={onOpenBooking} />
            </div>

            {/* Telemetry checks under booking button */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-emerald-500/10 text-left text-base text-emerald-100/60 font-sans max-w-2xl mx-auto">
              <div className="space-y-1">
                <span className="block font-bold text-white">01. Dynamic Planning</span>
                <span className="block text-base text-brunswick-green-500">Custom infrastructure diagrams prepared before our call.</span>
              </div>
              <div className="space-y-1">
                <span className="block font-bold text-white">02. Direct Specialists</span>
                <span className="block text-base text-brunswick-green-500">Collaborate with principal architects, not sales managers.</span>
              </div>
              <div className="space-y-1">
                <span className="block font-bold text-white">03. Fixed Deliverables</span>
                <span className="block text-base text-brunswick-green-500">You receive a written architecture spec summary in PDF.</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

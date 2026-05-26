import { useState } from "react";
import { testimonials } from "../data";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 bg-neutral-950/20">
      {/* Soft auroral glow in corner */}
      <div className="absolute top-1/2 right-10 -z-10 h-72 w-72 rounded-full bg-green-primary/[0.03] blur-[110px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Title Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3 text-left">
            <span className="inline-block px-3.5 py-1 rounded-full border border-neutral-800 text-base font-sans uppercase tracking-widest text-brunswick-green-500 bg-[#a3e635]/5">
              Testimonials
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
              Our happy clients <br />say about us
            </h2>
          </div>

          {/* Slider Controllers on desktop */}
          <div className="hidden md:flex items-center gap-2">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="p-3.5 rounded-xl border border-neutral-800 bg-[#0c0c0e] text-neutral-400 hover:text-white hover:border-brunswick-green-500 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="p-3.5 rounded-xl border border-neutral-800 bg-[#0c0c0e] text-neutral-400 hover:text-white hover:border-brunswick-green-500 transition-colors"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Testimonials standard grid (responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {testimonials.map((t, index) => {
            const isActiveMobile = activeSlide === index;
            return (
              <div
                key={t.id}
                className={`group flex flex-col justify-between p-6 rounded-2xl border bg-neutral-950/40 p-6 transition-all duration-300 relative ${isActiveMobile
                  ? "border-brunswick-green-500 shadow-emerald-500/5 shadow-2xl scale-[1.01] block"
                  : "border-neutral-900 group-hover:border-neutral-800 md:block hidden"
                  }`}
              >
                {/* Quotation icon accent */}
                <div className="absolute top-6 right-6 text-neutral-800/80 group-hover:text-emerald-500/10 transition-colors">
                  <Quote className="h-8 w-8 transform rotate-180" />
                </div>

                <div className="space-y-4">
                  {/* Rating indicator */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-dun text-dun" />
                    ))}
                  </div>

                  {/* Absolute quote */}
                  <p className="font-sans text-base sm:text-sm text-neutral-300 italic leading-relaxed group-hover:text-white transition-colors">
                    "{t.quote}"
                  </p>
                </div>

                {/* Writer Portrait Avatar details */}
                <div className="flex items-center gap-3 pt-6 border-t border-neutral-900 mt-8">
                  <div className="h-10 w-10 rounded-full overflow-hidden border border-neutral-800 shrink-0">
                    <img
                      src={t.avatarUrl}
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="leading-tight">
                    <span className="block font-sans text-base font-bold text-white group-hover:text-brunswick-green-500 transition-colors">
                      {t.name}
                    </span>
                    <span className="block font-sans text-base text-neutral-500">
                      {t.role}, <strong className="text-neutral-400 font-normal">{t.company}</strong>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile controls */}
        <div className="flex justify-center items-center gap-3 pt-4 md:hidden">
          <button
            id="testimonial-prev-mobile"
            onClick={handlePrev}
            className="p-3 border border-neutral-800 bg-[#0c0c0e] rounded-xl text-neutral-400 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
          </button>
          <div className="flex items-center gap-1.5">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === idx ? "w-6 bg-green-primary" : "w-1.5 bg-neutral-800"}`}
              />
            ))}
          </div>
          <button
            id="testimonial-next-mobile"
            onClick={handleNext}
            className="p-3 border border-neutral-800 bg-[#0c0c0e] rounded-xl text-neutral-400 hover:text-white"
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

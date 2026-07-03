import { useState } from "react";
import { testimonials } from "../data";
import { testimonialsCopy } from "../copy";
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
    <section className="relative py-16 bg-raisin-black-800/20">
      {/* Soft auroral glow in corner */}
      <div className="absolute top-1/2 right-10 -z-10 h-72 w-72 rounded-full bg-brunswick-green-900/[0.03] blur-[110px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Title Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-10 text-left">
            <span className="inline-block px-3.5 py-1 rounded-full border border-sea-salt/20 text-lg font-sans uppercase tracking-widest text-brunswick-green-500 bg-brunswick-green-500/5">
              {testimonialsCopy.badge}
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-bold text-sea-salt">
              {testimonialsCopy.titleLine1} <br />{testimonialsCopy.titleLine2}
            </h2>
          </div>
          {/* Slider Controllers on desktop */}
          <div className="hidden md:flex items-center gap-2">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>

        {/* Testimonials standard grid (responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => {
            const isActiveMobile = activeSlide === index;
            return (
              <div
                key={t.id}
                className={`group flex flex-col justify-between p-6 rounded-2xl border border-sea-salt/20 p-6 transition-all duration-300 relative ${isActiveMobile
                  ? "border-brunswick-green-500 backdrop-blur bg-sea-salt/6 shadow-brunswick-green-500/5 shadow-2xl scale-[1.01] block"
                  : "border-sea-salt/20 group-hover:border-brunswick-green-500/30 md:block hidden"
                  }`}
              >
                {/* Quotation icon accent */}
                <div className="absolute top-6 right-6 text-sea-salt/80 group-hover:text-brunswick-green-500 transition-colors">
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
                  <p className="font-sans text-base sm:text-lg text-sea-salt/90 italic  group-hover:text-sea-salt transition-colors">
                    "{t.quote}"
                  </p>
                </div>

                {/* Writer Portrait Avatar details */}
                <div className="flex items-center gap-3 pt-6 border-t border-sea-salt/20 mt-8">
                  <div className="h-10 w-10 rounded-full overflow-hidden border border-sea-salt/20 shrink-0">
                    <img
                      src={t.avatarUrl}
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="leading-tight">
                    <span className="block font-sans text-lg font-bold text-sea-salt group-hover:text-brunswick-green-500 transition-colors">
                      {t.name}
                    </span>
                    <span className="block font-sans text-lg text-sea-salt/90">
                      {t.role}, <strong className="text-sea-salt font-normal">{t.company}</strong>
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
            className="p-3 border border-sea-salt/20 bg-raisin-black-900 rounded-xl text-sea-salt hover:text-dun"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
          </button>
          <div className="flex items-center gap-1.5">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === idx ? "w-6 bg-brunswick-green-900" : "w-1.5 bg-sea-salt"}`}
              />
            ))}
          </div>
          <button
            id="testimonial-next-mobile"
            onClick={handleNext}
            className="p-3 border border-sea-salt/20 bg-raisin-black-900 rounded-xl text-sea-salt hover:text-dun"
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

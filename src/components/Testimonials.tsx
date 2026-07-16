import { useState, useRef } from "react";
import { testimonials } from "../data";
import { testimonialsCopy } from "../copy";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

export default function Testimonials() {

  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);


  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <section className="relative py-16 ">
      {/* Soft auroral glow in corner */}
      <div className="absolute top-1/2 right-10 -z-10 h-72 w-72 rounded-full bg-brunswick-green-900/[0.03] blur-[110px]" />

      <div className="max-w-7xl justify-items-center mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Title Area */}
        <div className="flex flex-col gap-10 items-center text-center" >
          <div className="space-y-10 text-center" >
            <span className="inline-block px-3.5 py-1 rounded-full border border-sea-salt/20 text-lg font-sans uppercase tracking-widest text-brunswick-green-500 bg-brunswick-green-500/5">
              {testimonialsCopy.badge}
            </span>
            <h2 className="font-sans text-3xl leading-normal sm:text-5xl sm:leading-normal font-bold text-sea-salt">
              {testimonialsCopy.titleLine1} <br />{testimonialsCopy.titleLine2}
            </h2>
          </div>


        </div>

        {/* Testimonials standard grid (responsive) */}
        <Swiper
          className="w-full py-10"
          modules={[Autoplay]}
          loop={true}
          centeredSlides
          grabCursor
          speed={700}
          spaceBetween={24}
          slidesPerView={1.15}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.realIndex % testimonials.length);
          }}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((t, index) => {
            return (
              <SwiperSlide key={`${t.id}-${index}`} className="h-auto">
                {({ isActive }) => (
                  <div
                    className={`group
            relative
            h-full
            flex
            flex-col
            justify-between
            rounded-2xl
            border
            p-6
            transition-all
            duration-500

            ${isActive
                        ? "border-brunswick-green-500 bg-sea-salt/6 shadow-2xl shadow-brunswick-green-500/5 scale-100 opacity-100"
                        : "border-sea-salt/20 opacity-60 scale-[0.96] hover:opacity-80"
                      }
        `}
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
                        <span
                          className={`block font-sans text-lg font-bold transition-colors ${isActive
                            ? "text-brunswick-green-500"
                            : "text-sea-salt"
                            }`}
                        >
                          {t.name}
                        </span>
                        <span className="block font-sans text-lg text-sea-salt/90">
                          {t.role}, <strong className="text-sea-salt font-normal">{t.company}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Slider Controllers */}
        <div className="flex items-center gap-3  justify-center">
          <button
            onClick={handlePrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
          </button>
          <span className="font-sans text-lg text-sea-salt tracking-wider">
            {String(activeSlide + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
          <button
            onClick={handleNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </section >
  );
}

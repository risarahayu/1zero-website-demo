import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Monitor, Smile, Phone, Calendar, Star } from "lucide-react";
import { customProjects } from "../data";
import PortfolioCard from "./PortfolioCard";
import { portfolioCopy } from "../copy";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";


interface PortfolioProps {
  onOpenBooking: () => void;
}

export default function Portfolio({ onOpenBooking }: PortfolioProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isPaused, setIsPaused] = useState(false);


  useEffect(() => {
    if (!swiperRef.current?.autoplay) return;

    if (isPaused) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
  }, [isPaused]);



  // Tripled carousel sets for seamless infinite track wrapping
  const carouselItems = [
    ...customProjects.map((p) => ({ ...p, uniqueId: `${p.id}-set0` })),
    ...customProjects.map((p) => ({ ...p, uniqueId: `${p.id}-set1` })),
    ...customProjects.map((p) => ({ ...p, uniqueId: `${p.id}-set2` }))
  ];





  return (
    <section className="relative  bg-raisin-black-800/20 overflow-hidden py-16">
      {/* Background radial soft light blur */}
      <div className="absolute top-1/2 left-0 -translate-x-1/4 md:-translate-x-0 md:left-1/4 -translate-y-1/2 -z-10 h-[250px] w-[250px] md:h-[450px] md:w-[450px] rounded-full bg-brunswick-green-900/[0.05] md:bg-brunswick-green-900/[0.03] blur-[80px] md:blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT PANEL: Static Text / Header (Matches reference image) */}
          <div className="lg:col-span-4 space-y-10 sm:space-y-8">

            {/* Custom rounded capsule badge */}
            <div className="inline-flex">
              <span className="inline-block px-3.5 py-2 rounded-full border border-brunswick-500 text-lg font-sans uppercase tracking-widest text-brunswick-green-500  bg-raisin-black">
                {portfolioCopy.badge}
              </span>
            </div>

            <div className="space-y-6">
              {/* Elegant Main Title */}
              <h2 className="font-sans text-3xl leading-normal sm:text-5xl sm:leading-normal font-bold text-sea-salt">
                {portfolioCopy.titleLine1} <br />
                {portfolioCopy.titleLine2}
              </h2>

              {/* Description Text */}
              <p className="font-sans text-base sm:text-lg text-sea-salt/90 max-w-sm  ">
                {portfolioCopy.description}
              </p>
            </div>

            {/* Navigation slider buttons */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous portfolio"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <span className="font-sans text-lg text-sea-salt/80 tracking-widest uppercase font-semibold ml-2 select-none">
                {String(currentSlide + 1).padStart(2, "0")} / 05
              </span>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next portfolio"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
              >
                <ArrowRight className="h-4 w-4" />
              </button>

            </div>

            <a href={`${import.meta.env.BASE_URL}#portfolio`}>
              <p className="font-sans text-base sm:text-lg text-sea-salt/80 tracking-widest  font-semibold ml-2 select-none cursor-pointer hover:text-brunswick-green-500 hover:underline transition-all duration-300 transform active:scale-95">{portfolioCopy.seeAllText}</p>
            </a>
          </div>

          {/* RIGHT PANEL: Horizontal Carousel Track */}
          <div className="lg:col-span-8">

            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              speed={500}
              spaceBetween={12}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}

              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}

              onSlideChange={(swiper) => {
                setCurrentSlide(swiper.realIndex);
                setActiveIndex(swiper.realIndex);
              }}

              breakpoints={{

                0: {
                  slidesPerView: 1.05
                },

                640: {
                  slidesPerView: 1.15
                },

                768: {
                  slidesPerView: 1.3
                },

                1024: {
                  slidesPerView: 1.05
                },

                1280: {
                  slidesPerView: 1.15
                }

              }}

            >

              {customProjects.map((project, index) => (

                <SwiperSlide key={project.id}>

                  <PortfolioCard

                    project={project}

                    onReadMore={onOpenBooking}
                    isHighlighted={index === activeIndex}

                    className="w-full"
                    setIsPaused={setIsPaused}

                  />

                </SwiperSlide>

              ))}

            </Swiper>

          </div>

        </div>

        {/* Global CTA Banner under */}
        <div className="text-center pt-20 max-w-2xl mx-auto space-y-4">
          <p className="font-sans text-base sm:text-lg text-sea-salt uppercase tracking-widest">
            {portfolioCopy.ctaTopText}
          </p>
          <button
            id="portfolio-review-btn"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 p-8 px-12 rounded-full bg-brunswick-green-900 hover:bg-brunswick-green-700  text-sea-salt font-sans font-extrabold text-lg sm:text-xl transition-all uppercase tracking-wider cursor-pointer shadow-[0_4px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.3)] transform hover:scale-[1.01]"
          >
            {portfolioCopy.ctaButtonText}
          </button>
        </div>

      </div>
    </section >
  );
}


import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Monitor, Smile, Phone, Calendar, Star } from "lucide-react";
import { customProjects } from "../data";
import PortfolioCard from "./PortfolioCard";
import { portfolioCopy } from "../copy";

interface PortfolioProps {
  onOpenBooking: () => void;
}

export default function Portfolio({ onOpenBooking }: PortfolioProps) {
  const [virtualIndex, setVirtualIndex] = useState(5); // Start at original item 0 in Set B (5 items per set)
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const [isPaused, setIsPaused] = useState(false);

  // Resize listener for fluid carousel offsets
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  // Tripled carousel sets for seamless infinite track wrapping
  const carouselItems = [
    ...customProjects.map((p) => ({ ...p, uniqueId: `${p.id}-set0` })),
    ...customProjects.map((p) => ({ ...p, uniqueId: `${p.id}-set1` })),
    ...customProjects.map((p) => ({ ...p, uniqueId: `${p.id}-set2` }))
  ];

  const handleNext = () => {
    if (!isTransitionEnabled) return;
    setVirtualIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitionEnabled) return;
    setVirtualIndex((prev) => prev - 1);
  };

  // Autoplay Effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [virtualIndex, isPaused, isTransitionEnabled]);

  // Handle seamless position reset snaps on translation completion
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (virtualIndex >= 10) {
      // Reached Set C — snap back to Set B start (index 5)
      timeoutId = setTimeout(() => {
        setIsTransitionEnabled(false);
        setVirtualIndex(5);
        setTimeout(() => {
          setIsTransitionEnabled(true);
        }, 50);
      }, 500);
    } else if (virtualIndex <= 4) {
      // Reached Set A — snap forward to Set B end (index 9)
      timeoutId = setTimeout(() => {
        setIsTransitionEnabled(false);
        setVirtualIndex(9);
        setTimeout(() => {
          setIsTransitionEnabled(true);
        }, 50);
      }, 500);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [virtualIndex]);

  // Calculate dynamic card translation values based on responsive breakpoints
  const getTranslateX = (index: number) => {
    const gap = 24; // gap-6
    let cardWidth = 380; // Default md/lg
    if (windowWidth < 640) {
      cardWidth = 280; // Mobile
    } else if (windowWidth < 768) {
      cardWidth = 320; // Small tablets
    }
    return index * (cardWidth + gap);
  };

  // Safety compute current human-readable index (0 to 3)
  const currentDisplayIndex = (virtualIndex % customProjects.length + customProjects.length) % customProjects.length;

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
                onClick={handlePrev}
                aria-label="Previous portfolio"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next portfolio"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="font-sans text-lg text-sea-salt/80 tracking-widest uppercase font-semibold ml-2 select-none">
                {String(currentDisplayIndex + 1).padStart(2, '0')} / {String(customProjects.length).padStart(2, '0')}
              </span>


              <a href={`${import.meta.env.BASE_URL}#portfolio`}>
                <p className="font-sans text-base sm:text-lg text-sea-salt/80 tracking-widest  font-semibold ml-2 select-none cursor-pointer hover:text-brunswick-green-500 hover:underline transition-all duration-300 transform active:scale-95">{portfolioCopy.seeAllText}</p>
              </a>
            </div>
          </div>

          {/* RIGHT PANEL: Horizontal Carousel Track */}
          <div
            className="lg:col-span-8 overflow-hidden  -mx-4 px-4 sm:mx-0 sm:px-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={`flex gap-6 ${isTransitionEnabled ? "transition-transform duration-500 ease-out" : ""}`}
              style={{ transform: `translateX(-${getTranslateX(virtualIndex)}px)` }}
            >
              {carouselItems.map((project, index) => {
                const isActive = virtualIndex === index;

                return (
                  <PortfolioCard
                    key={project.uniqueId}
                    project={project}
                    onReadMore={onOpenBooking}
                    className="w-[280px] sm:w-[320px] md:w-[380px] shrink-0"
                  />
                );
              })}
            </div>
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
            className="inline-flex items-center gap-2 p-3.5 px-8 rounded-full bg-brunswick-green-900 hover:bg-brunswick-green-700  text-sea-salt font-sans font-extrabold text-lg transition-all uppercase tracking-wider cursor-pointer shadow-[0_4px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.3)] transform hover:scale-[1.01]"
          >
            {portfolioCopy.ctaButtonText}
          </button>
        </div>

      </div>
    </section>
  );
}


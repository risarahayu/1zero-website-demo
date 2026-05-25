import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Monitor, Smile, Phone, Calendar, Star } from "lucide-react";

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

  const customProjects = [
    {
      id: "impact",
      title: "Impact Portal",
      subtitle: "Enterprise Data Dashboard",
      description: "A curated selection of modern art pieces from various contemporary artists.",
      bgClass: "bg-[#112240] border-blue-500/10",
      mockupType: "impact",
      imageUrl: "/portofolio image/Desktop - 62 (2).png"
    },
    {
      id: "baliteak",
      title: "Baliteak Redesign Website",
      description: "A portfolio showcasing stunning custom teakwood designs and artisanal furniture catalog.",
      bgClass: "bg-[#45301F] border-amber-500/10",
      mockupType: "baliteak",
      imageUrl: "/portofolio image/kup (3).png"
    },
    {
      id: "TDD",
      title: "The Donor Dashboard Landing Page",
      description: "Healthcare portal integrating real-time translating, audio diagnosis, and clinical records.",
      bgClass: "bg-[#092218] border-emerald-500/10",
      mockupType: "tdd",
      imageUrl: "/portofolio image/kup (5).png"
    },
    {
      id: "nexus",
      title: "PT Phoenix Website",
      description: "Professional company website built for PT Phoenix, featuring a modern design system and seamless user experience.",
      bgClass: "bg-[#16122d] border-purple-500/10",
      mockupType: "nexus",
      imageUrl: "/portofolio image/kup (6).png"
    },
    {
      id: "blackstump",
      title: "Blackstump Technologies Website Replatform",
      description: "Full website replatform for Blackstump Technologies — modernizing architecture, design system, and digital presence from the ground up.",
      bgClass: "bg-[#0d1a0d] border-green-500/10",
      mockupType: "blackstump",
      imageUrl: "/portofolio image/kup (7).png"
    }
  ];

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
    <section id="portfolio" className="relative py-24 bg-[#0a0a0c] overflow-hidden">
      {/* Background radial soft light blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 h-[450px] w-[450px] rounded-full bg-emerald-500/[0.03] blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT PANEL: Static Text / Header (Matches reference image) */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">

            {/* Custom rounded capsule badge */}
            <div className="inline-flex">
              <div className="relative px-5 py-2.5 rounded-full border border-neutral-800/80 bg-neutral-950/60 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                {/* Visual outline and text */}
                <span className="font-display text-xs s:text-sm font-semibold text-white tracking-wide">
                  Our Portfolios
                </span>
              </div>
            </div>

            {/* Elegant Main Title */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              Where Ideas <br />
              Become Reality
            </h2>

            {/* Description Text */}
            <p className="font-sans text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              This portfolio showcases work from concept to execution.
            </p>

            {/* Navigation slider buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous portfolio"
                className="h-11 w-11 rounded-full border border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:text-[#a3e635] hover:border-[#a3e635] flex items-center justify-center transition-all duration-300 transform active:scale-95 cursor-pointer shadow-lg"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next portfolio"
                className="h-11 w-11 rounded-full border border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:text-[#a3e635] hover:border-[#a3e635] flex items-center justify-center transition-all duration-300 transform active:scale-95 cursor-pointer shadow-lg"
              >
                <ArrowRight className="h-4 w-4" />
              </button>

              <span className="font-mono text-[11px] text-neutral-600 tracking-wider font-semibold ml-2 select-none uppercase font-bold text-[#a3e635]">
                {String(currentDisplayIndex + 1).padStart(2, '0')} / {String(customProjects.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* RIGHT PANEL: Horizontal Carousel Track */}
          <div
            className="lg:col-span-8 overflow-hidden py-4 -mx-4 px-4 sm:mx-0 sm:px-0"
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
                  <div
                    key={project.uniqueId}
                    className="w-[280px] sm:w-[320px] md:w-[380px] shrink-0 group flex flex-col space-y-4"
                  >
                    {/* Visual Mockup Stage Box */}
                    <div className={`relative h-[240px] sm:h-[260px] md:h-[285px] w-full rounded-[24px] border ${project.bgClass} flex items-center justify-center overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]`}>

                      {/* Subtly animated ambient grid lines */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px]" />

                      {/* Real project screenshot */}
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                      />
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    </div>

                    {/* Left corner identifier and Content text */}
                    <div className="pt-3 space-y-2">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#a3e635] transition-colors">
                        {project.title}
                      </h3>

                      <p className="font-sans text-xs text-neutral-400 leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Read More button matches reference picture perfectly */}
                      <button
                        type="button"
                        onClick={onOpenBooking}
                        className="inline-flex items-center justify-center font-sans font-semibold text-neutral-300 hover:text-white bg-[#1a1a1c] hover:bg-[#252528] border border-neutral-800/80 px-4 py-1.5 rounded-full text-xs transition-colors cursor-pointer self-start"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Global CTA Banner under */}
        <div className="text-center pt-20 max-w-2xl mx-auto space-y-4">
          <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            Ready to review full modular system blueprints?
          </p>
          <button
            id="portfolio-review-btn"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 p-3.5 px-8 rounded-full bg-emerald-500 hover:bg-emerald-600 text-black font-display font-extrabold text-xs transition-all uppercase tracking-wider cursor-pointer shadow-[0_4px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.3)] transform hover:scale-[1.01]"
          >
            Schedule Architecture Session
          </button>
        </div>

      </div>
    </section>
  );
}


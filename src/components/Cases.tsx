import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { casesCopy } from "../copy";

const recentActivity = [
  {
    id: "activity-01",
    photo: `${import.meta.env.BASE_URL}Recent Activity/GSDC.jpg`,
    title: "AusTrade Landing Pads & GSDC 22-25 June 2026",
    desc: "A concise LinkedIn launch post spotlighting landing pad initiatives and global sustainability design challenge momentum.",
    linkPost: "https://www.linkedin.com/feed/update/urn:li:activity:7477617222861975553",
  },
  {
    id: "activity-02",
    photo: `${import.meta.env.BASE_URL}Recent Activity/Wisdom Shaping Sustainable Futures.png`,
    title: "EarthWise: Wisdom Shaping Sustainable Futures",
    desc: "A simple visual story about stewardship and sustainable futures in a changing world.",
    linkPost: "https://www.youtube.com/watch?v=peZPBfHptoo",
  },
  {
    id: "activity-03",
    photo: `${import.meta.env.BASE_URL}Recent Activity/Path to Sustainable Growth.jpg`,
    title: "Path to Sustainable Growth at Apurva Kempinski 24 June 2026",
    desc: "A short post highlighting sustainable hospitality strategy and the path to growth for a luxury resort brand.",
    linkPost: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7477951114466856962/?actorCompanyId=103705943",
  },
  {
    id: "activity-04",
    photo: `${import.meta.env.BASE_URL}Recent Activity/Visit PLN.jpg`,
    title: "Visit PLN",
    desc: "A short post highlighting sustainable hospitality strategy and the path to growth for a luxury resort brand.",
    linkPost: "LinkedIn post",
  },
];

// ─── Shared card renderer ────────────────────────────────────────────────────
function CaseCard({
  item,
  isCenter,
}: {
  item: (typeof recentActivity)[0];
  isCenter: boolean;
}) {
  return (
    <div
      onClick={() => window.open(item.linkPost, "_blank", "noopener,noreferrer")}
      className={`
        group relative h-full min-h-[420px] rounded-3xl bg-sea-salt/6 p-5
        flex flex-col justify-between cursor-pointer overflow-hidden
        transition-all duration-500 hover:scale-[1.01]
        ${isCenter ? "opacity-100 border border-brunswick-green-500" : "opacity-55 hover:opacity-75 border border-sea-salt/20"}
      `}
    >
      {/* Gradient image area */}
      <div className="flex h-full flex-col">
        <div className="space-y-4 flex-1">
          <div className="relative h-[180px] w-full overflow-hidden rounded-2xl bg-sea-salt/6 border border-sea-salt/60 flex items-end p-4">
            {item.photo ? (
              <img
                src={item.photo}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <>
                {/* Decorative grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:24px_24px]" />
              </>
            )}
          </div>

          <div className="space-y-2">
            <p className={`font-sans text-base sm:text-lg font-bold line-clamp-2 ${isCenter ? "text-brunswick-green-500" : "text-sea-salt"}`}>
              {item.title}
            </p>
            <p className="font-sans text-base sm:text-lg text-sea-salt line-clamp-2">
              {item.desc}
            </p>
          </div>
        </div>

        <div className="mt-auto pt-4">
          <a
            href={item.linkPost}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center font-sans font-semibold px-4 py-1.5 rounded-full text-lg cursor-pointer self-start transition-all border ${isCenter ? "text-sea-salt border-brunswick-green-500 bg-brunswick-900" : "text-sea-salt border-sea-salt/20 bg-raisin-black-800"} hover:bg-brunswick-green-900 hover:border-brunswick-green-500 hover:text-sea-salt`}
          >
            Read More
          </a>
        </div>
      </div>

    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function Cases() {
  const total = recentActivity.length;

  // ── Shared index state ──────────────────────────────────────────
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ── Mobile/tablet slider (like Portfolio) ───────────────────────
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  // Virtual index for infinite-loop mobile slider (tripled array, start at middle set)
  const [virtualIndex, setVirtualIndex] = useState(total); // index 'total' = first item in Set B
  const [containerWidth, setContainerWidth] = useState(0);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
      if (sliderContainerRef.current) {
        setContainerWidth(sliderContainerRef.current.clientWidth);
      }
    };
    window.addEventListener("resize", onResize);
    // Measure on mount
    if (sliderContainerRef.current) {
      setContainerWidth(sliderContainerRef.current.clientWidth);
    }
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isDesktop = windowWidth >= 1024;

  // Mobile card width = full container width (1 card per view)
  const mobileCardWidth = containerWidth > 0 ? containerWidth : windowWidth - 32;
  const mobileGap = 0;

  const mobileTranslateX = (idx: number) => idx * (mobileCardWidth + mobileGap);

  // Tripled array for infinite-loop mobile slider
  const tripled = [
    ...recentActivity.map((p, i) => ({ ...p, uniqueId: `${p.id}-set0-${i}` })),
    ...recentActivity.map((p, i) => ({ ...p, uniqueId: `${p.id}-set1-${i}` })),
    ...recentActivity.map((p, i) => ({ ...p, uniqueId: `${p.id}-set2-${i}` })),
  ];

  const handleMobileNext = () => {
    if (!isTransitionEnabled) return;
    setVirtualIndex((prev) => prev + 1);
  };

  const handleMobilePrev = () => {
    if (!isTransitionEnabled) return;
    setVirtualIndex((prev) => prev - 1);
  };

  // Reset snap for infinite loop on mobile
  useEffect(() => {
    if (isDesktop) return;
    let id: ReturnType<typeof setTimeout>;
    if (virtualIndex >= total * 2) {
      id = setTimeout(() => {
        setIsTransitionEnabled(false);
        setVirtualIndex(total);
        setTimeout(() => setIsTransitionEnabled(true), 50);
      }, 500);
    } else if (virtualIndex < total) {
      id = setTimeout(() => {
        setIsTransitionEnabled(false);
        setVirtualIndex(total * 2 - 1);
        setTimeout(() => setIsTransitionEnabled(true), 50);
      }, 500);
    }
    return () => clearTimeout(id);
  }, [virtualIndex, isDesktop]);

  // Display index for dots / counter
  const mobileDisplayIndex = ((virtualIndex % total) + total) % total;

  // ── Desktop visible indices (4 at once) ────────────────────────
  const getDesktopIndices = () => [
    (activeIndex - 1 + total) % total,
    activeIndex,
    (activeIndex + 1) % total,
    (activeIndex + 2) % total,
  ];

  const handleDesktopNext = () => setActiveIndex((prev) => (prev + 1) % total);
  const handleDesktopPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  // ── Autoplay ────────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused) return;
    if (isDesktop) {
      const id = setInterval(handleDesktopNext, 4000);
      return () => clearInterval(id);
    } else {
      if (!isTransitionEnabled) return;
      const id = setInterval(handleMobileNext, 4000);
      return () => clearInterval(id);
    }
  }, [isPaused, activeIndex, virtualIndex, isDesktop, isTransitionEnabled]);

  return (
    <section className="relative py-16 bg-raisin-black-800/20 overflow-hidden">
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-brunswick-green-900/[0.03] blur-[110px]" />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-500/[0.03] blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Header */}

        <div className="flex flex-col gap-10 items-center  pb-10 border-b border-sea-salt/20">
          <div className="lg:col-span-8 space-y-10 text-center [text-align-last:center]">
            <span className="inline-block px-3.5 py-2 rounded-full border border-brunswick-500 text-lg font-sans uppercase tracking-widest text-brunswick-green-500  bg-raisin-black">
              {casesCopy.badge}
            </span>
            <h2 className="font-sans text-3xl leading-normal sm:text-5xl sm:leading-normal font-bold text-sea-salt">
              {casesCopy.titleLine1} <br />{casesCopy.titleLine2}
            </h2>
          </div>
          {/* <div className="lg:col-span-4 flex flex-col gap-6 items-start lg:items-end"> */}
          {/* <p className="font-sans text-base sm:text-lg text-sea-salt/90  max-w-sm lg:text-right">
              {casesCopy.description}
            </p> */}

          {/* </div> */}
        </div>

        {/* ── DESKTOP Carousel (4 cards side-by-side) ────────────── */}
        {isDesktop && (
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex gap-5 transition-all duration-500">
              {getDesktopIndices().map((itemIndex, pos) => {
                const item = recentActivity[itemIndex];
                const isCenter = pos === 1;
                return (
                  <div
                    key={`${item.id}-${pos}`}
                    className={`${isCenter ? "flex-[1.4]" : "flex-1"}`}
                  >
                    <CaseCard item={item} isCenter={isCenter} />
                  </div>
                );
              })}
            </div>

            {/* Dot indicators */}
            {/* <div className="flex items-center justify-center gap-6 mt-10">
              {recentActivity.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`transition-all duration-300 rounded-full ${i === activeIndex
                    ? "w-6 h-1.5 bg-brunswick-green-500"
                    : "w-1.5 h-1.5 bg-sea-salt hover:bg-sea-salt"
                    }`}
                />
              ))}
            </div> */}
            {/* Navigation */}
            <div className="flex items-center gap-3 pt-10 justify-center">
              <button
                onClick={isDesktop ? handleDesktopPrev : handleMobilePrev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
              </button>
              <span className="font-sans text-lg text-sea-salt tracking-wider">
                {String((isDesktop ? activeIndex : mobileDisplayIndex) + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
              <button
                onClick={isDesktop ? handleDesktopNext : handleMobileNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ── MOBILE / TABLET Slider (like Portfolio.tsx) ─────────── */}
        {!isDesktop && (
          <div
            ref={sliderContainerRef}
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={`flex ${isTransitionEnabled ? "transition-transform duration-500 ease-out" : ""}`}
              style={{ transform: `translateX(-${mobileTranslateX(virtualIndex)}px)` }}
            >
              {tripled.map((item, index) => (
                <div
                  key={item.uniqueId}
                  style={{ width: mobileCardWidth, flexShrink: 0 }}
                >
                  <CaseCard
                    item={item}
                    isCenter={index === virtualIndex}
                  />
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            {/* <div className="flex items-center justify-center gap-2 mt-6">
              {recentActivity.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const diff = i - mobileDisplayIndex;
                    setVirtualIndex((prev) => prev + diff);
                  }}
                  className={`transition-all duration-300 rounded-full ${i === mobileDisplayIndex
                    ? "w-6 h-1.5 bg-brunswick-green-500"
                    : "w-1.5 h-1.5 bg-sea-salt hover:bg-sea-salt"
                    }`}
                />
              ))}
            </div> */}
            {/* Navigation */}
            <div className="flex items-center gap-3 pt-10 justify-content-center">
              <button
                onClick={isDesktop ? handleDesktopPrev : handleMobilePrev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
              </button>
              <span className="font-sans text-lg text-sea-salt tracking-wider">
                {String((isDesktop ? activeIndex : mobileDisplayIndex) + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
              <button
                onClick={isDesktop ? handleDesktopNext : handleMobileNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Call to action marquee */}
        {/* <div className="overflow-hidden rounded-3xl border border-sea-salt  p-4">
          <div className="animate-marquee-text flex whitespace-nowrap gap-16 text-3xl sm:text-4xl font-sans font-extrabold uppercase tracking-[0.18em] text-sea-salt">
            <span>{casesCopy.marqueeText}</span>
            <span>{casesCopy.marqueeText}</span>
            <span>{casesCopy.marqueeText}</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}

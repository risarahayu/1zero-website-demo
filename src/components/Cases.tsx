import { useEffect, useState, useRef } from "react";
import { ArrowUpRight, MessageSquare, Activity, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { casesCopy } from "../copy";

interface CasesProps {
  onOpenBooking: () => void;
}

const caseItems = [
  {
    id: "case-01",
    label: "30 Minutes With",
    title: "Sinar Agritech",
    desc: "How a regional agritech firm cut their data pipeline latency by 42% and launched a new operator dashboard in under 8 weeks.",
    tag: "System Architecture",
    gradient: "from-brunswick-green-600/80 via-sea-salt to-sea-salt",
    accentColor: "text-brunswick-green-500",
    borderColor: "border-brunswick-green-500/20",
    iconBg: "bg-brunswick-green-900/10",
  },
  {
    id: "case-02",
    label: "30 Minutes With",
    title: "EduVibe Asia",
    desc: "Rebuilding a legacy LMS into a cloud-native, multi-tenant platform serving 80,000 active learners with zero downtime migration.",
    tag: "Cloud Migration",
    gradient: "from-blue-900/80 via-sea-salt to-sea-salt",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    iconBg: "bg-blue-500/10",
  },
  {
    id: "case-03",
    label: "30 Minutes With",
    title: "BWT Logistics",
    desc: "Integrating real-time fleet telemetry and automated invoicing into a unified ops portal, reducing manual work by 70%.",
    tag: "Enterprise Integration",
    gradient: "from-amber-900/80 via-sea-salt to-sea-salt",
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    iconBg: "bg-amber-500/10",
  },
  {
    id: "case-04",
    label: "30 Minutes With",
    title: "MediCare Connect",
    desc: "Designing a HIPAA-aligned patient engagement platform with real-time appointment scheduling and secure document sharing.",
    tag: "Healthcare Tech",
    gradient: "from-purple-900/80 via-sea-salt to-sea-salt",
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/20",
    iconBg: "bg-purple-500/10",
  },
  {
    id: "case-05",
    label: "30 Minutes With",
    title: "RetailCore ID",
    desc: "End-to-end POS modernization for a 200-branch retail chain — from fragmented spreadsheets to a unified real-time inventory system.",
    tag: "Retail Systems",
    gradient: "from-rose-900/80 via-sea-salt to-sea-salt",
    accentColor: "text-rose-400",
    borderColor: "border-rose-500/20",
    iconBg: "bg-rose-500/10",
  },
];

// ─── Shared card renderer ────────────────────────────────────────────────────
function CaseCard({
  item,
  isCenter,
  onOpenBooking,
}: {
  item: (typeof caseItems)[0];
  isCenter: boolean;
  onOpenBooking: () => void;
}) {
  return (
    <div
      onClick={onOpenBooking}
      className={`
        group relative rounded-3xl border bg-sea-salt/6 p-5
        flex flex-col justify-between cursor-pointer overflow-hidden
        transition-all duration-500 hover:scale-[1.01]
        ${item.borderColor}
        ${isCenter ? "opacity-100 scale-100" : "opacity-55 scale-[0.97] hover:opacity-75"}
      `}
    >
      {/* Gradient image area */}
      <div className="space-y-4">
        <div
          className={`relative h-[180px] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} border border-sea-salt/60 flex items-end p-4`}
        >
          {/* Decorative grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Animated pulse dot */}
          <div className="absolute top-4 left-4 flex items-center gap-1.5">
            <span
              className={`h-1.5 w-1.5 rounded-full ${item.accentColor.replace("text-", "bg-")} animate-pulse`}
            />
            <span className="font-sans text-lg text-sea-salt uppercase tracking-widest">
              {casesCopy.liveCase}
            </span>
          </div>

          {/* Top-right icon */}
          <div
            className={`absolute top-4 right-4 h-8 w-8 rounded-full ${item.iconBg} border border-sea-salt/80 backdrop-blur-md flex items-center justify-center ${item.accentColor}`}
          >
            <Activity className="h-3.5 w-3.5 animate-pulse" />
          </div>

          {/* Tag chip */}
          <span
            className={`relative z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-lg font-sans uppercase tracking-wider border border-sea-salt/60 bg-sea-salt/70 ${item.accentColor}`}
          >
            <Clock className="h-2.5 w-2.5" />
            {item.tag}
          </span>
        </div>

        <div className="space-y-1 pb-2">
          <p className="font-sans text-lg uppercase tracking-widest text-sea-salt">
            {item.label}
          </p>
          <h3 className="font-sans text-2xl sm:text-3xl font-bold text-sea-salt">{item.title}</h3>
          <p className="font-sans text-lg text-sea-salt leading-relaxed line-clamp-2">
            {item.desc}
          </p>
        </div>
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between pt-4 border-t border-sea-salt text-lg font-sans">
        <div className="flex items-center gap-1.5 text-sea-salt">
          <MessageSquare className="h-3.5 w-3.5" />
          <span>{casesCopy.discussionCompleted}</span>
        </div>
        <span
          className={`font-sans text-lg ${item.accentColor} flex items-center gap-1 group-hover:opacity-80 transition-opacity`}
        >
          {casesCopy.discussStrategy}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function Cases({ onOpenBooking }: CasesProps) {
  const total = caseItems.length;

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
    ...caseItems.map((p, i) => ({ ...p, uniqueId: `${p.id}-set0-${i}` })),
    ...caseItems.map((p, i) => ({ ...p, uniqueId: `${p.id}-set1-${i}` })),
    ...caseItems.map((p, i) => ({ ...p, uniqueId: `${p.id}-set2-${i}` })),
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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 border-b border-sea-salt">
          <div className="lg:col-span-8 space-y-10">
            <span className="inline-block px-3.5 py-2 rounded-full border border-brunswick-500 text-lg font-sans uppercase tracking-widest text-brunswick-green-500  bg-raisin-black">
              {casesCopy.badge}
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-bold text-sea-salt">
              {casesCopy.titleLine1} <br />{casesCopy.titleLine2}
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6 items-start lg:items-end">
            <p className="font-sans text-lg sm:text-lg text-sea-salt/90 leading-relaxed max-w-sm lg:text-right">
              {casesCopy.description}
            </p>
            {/* Navigation */}
            <div className="flex items-center gap-3">
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
                const item = caseItems[itemIndex];
                const isCenter = pos === 1;
                return (
                  <div
                    key={`${item.id}-${pos}`}
                    className={`${isCenter ? "flex-[1.4]" : "flex-1"}`}
                  >
                    <CaseCard item={item} isCenter={isCenter} onOpenBooking={onOpenBooking} />
                  </div>
                );
              })}
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-4 mt-6">
              {caseItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`transition-all duration-300 rounded-full ${i === activeIndex
                    ? "w-6 h-1.5 bg-brunswick-green-500"
                    : "w-1.5 h-1.5 bg-sea-salt hover:bg-sea-salt"
                    }`}
                />
              ))}
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
                    onOpenBooking={onOpenBooking}
                  />
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {caseItems.map((_, i) => (
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
            </div>
          </div>
        )}

        {/* Call to action marquee */}
        <div className="overflow-hidden rounded-3xl border border-sea-salt  p-4">
          <div className="animate-marquee-text flex whitespace-nowrap gap-16 text-3xl sm:text-4xl font-sans font-extrabold uppercase tracking-[0.18em] text-sea-salt">
            <span>{casesCopy.marqueeText}</span>
            <span>{casesCopy.marqueeText}</span>
            <span>{casesCopy.marqueeText}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

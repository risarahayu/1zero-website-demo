import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, MessageSquare, Activity, Clock, ArrowLeft, ArrowRight } from "lucide-react";

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
    gradient: "from-emerald-900/80 via-neutral-950 to-neutral-950",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    iconBg: "bg-green-primary/10",
  },
  {
    id: "case-02",
    label: "30 Minutes With",
    title: "EduVibe Asia",
    desc: "Rebuilding a legacy LMS into a cloud-native, multi-tenant platform serving 80,000 active learners with zero downtime migration.",
    tag: "Cloud Migration",
    gradient: "from-blue-900/80 via-neutral-950 to-neutral-950",
    accentColor: ".text-blue-400",
    borderColor: "border-blue-500/20",
    iconBg: "bg-blue-500/10",
  },
  {
    id: "case-03",
    label: "30 Minutes With",
    title: "BWT Logistics",
    desc: "Integrating real-time fleet telemetry and automated invoicing into a unified ops portal, reducing manual work by 70%.",
    tag: "Enterprise Integration",
    gradient: "from-amber-900/80 via-neutral-950 to-neutral-950",
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
    gradient: "from-purple-900/80 via-neutral-950 to-neutral-950",
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
    gradient: "from-rose-900/80 via-neutral-950 to-neutral-950",
    accentColor: "text-rose-400",
    borderColor: "border-rose-500/20",
    iconBg: "bg-rose-500/10",
  },
];

export default function Cases({ onOpenBooking }: CasesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = caseItems.length;

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % total);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(handleNext, 4000);
    return () => clearInterval(id);
  }, [isPaused, activeIndex]);

  // Build visible cards: show 3 at a time (center + adjacent) on desktop
  const getVisibleIndices = () => {
    return [
      (activeIndex - 1 + total) % total,
      activeIndex,
      (activeIndex + 1) % total,
      (activeIndex + 2) % total,
    ];
  };

  return (
    <section className="relative py-20 bg-[#060606] overflow-hidden">
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-green-primary/[0.03] blur-[110px]" />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-500/[0.03] blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-8 border-b border-neutral-900">
          <div className="lg:col-span-8 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full border border-neutral-800 text-base font-sans uppercase tracking-widest text-brunswick-green-500 mb-[3rem] bg-[#a3e635]/5 shadow-[0_0_12px_rgba(163,230,53,0.1)]">
              Recent Conversations
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
              Others Already <br />Took the First Step
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4 items-start lg:items-end">
            <p className="font-sans text-base sm:text-sm text-neutral-400 leading-relaxed max-w-sm lg:text-right">
              Teams are already turning ideas into premium, resilient system software. What high-performance framework are we building next together?
            </p>
            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="h-9 w-9 rounded-full border border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:text-brunswick-green-500  hover:border-[#a3e635] flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
              </button>
              <span className="font-sans text-base text-neutral-500 tracking-wider">
                {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <button
                onClick={handleNext}
                className="h-9 w-9 rounded-full border border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:text-brunswick-green-500 hover:border-[#a3e635] flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>



        {/* Carousel Track */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-5 transition-all duration-500">
            {getVisibleIndices().map((itemIndex, pos) => {
              const item = caseItems[itemIndex];
              const isCenter = pos === 1;
              return (
                <div
                  key={`${item.id}-${pos}`}
                  onClick={onOpenBooking}
                  className={`
                    group relative rounded-3xl border bg-neutral-950/25 p-5
                    flex flex-col justify-between cursor-pointer overflow-hidden
                    transition-all duration-500
                    ${item.borderColor}
                    ${isCenter
                      ? "flex-[1.4] opacity-100 scale-100"
                      : "flex-1 opacity-50 scale-[0.97] hover:opacity-70"
                    }
                    hover:bg-neutral-950/80
                  `}
                >
                  {/* Gradient image area */}
                  <div className="space-y-4">
                    <div className={`relative h-[180px] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} border border-neutral-800/60 flex items-end p-4`}>
                      {/* Decorative grid */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:24px_24px]" />

                      {/* Animated pulse dot */}
                      <div className="absolute top-4 left-4 flex items-center gap-1.5">
                        <span className={`h-1.5 w-1.5 rounded-full ${item.accentColor.replace("text-", "bg-")} animate-pulse`} />
                        <span className="font-sans text-[9px] text-neutral-400 uppercase tracking-widest">Live Case</span>
                      </div>

                      {/* Top-right icon */}
                      <div className={`absolute top-4 right-4 h-8 w-8 rounded-full ${item.iconBg} border border-neutral-800/80 backdrop-blur-md flex items-center justify-center ${item.accentColor}`}>
                        <Activity className="h-3.5 w-3.5 animate-pulse" />
                      </div>

                      {/* Tag chip */}
                      <span className={`relative z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-sans uppercase tracking-wider border border-neutral-700/60 bg-neutral-950/70 ${item.accentColor}`}>
                        <Clock className="h-2.5 w-2.5" />
                        {item.tag}
                      </span>
                    </div>

                    <div className="space-y-1 pb-2">
                      <p className="font-sans text-[9px] uppercase tracking-widest text-neutral-500">{item.label}</p>
                      <h3 className={`font-sans text-lg font-bold text-white transition-colors ${isCenter ? "group-hover:" + item.accentColor.replace("text-", "group-hover:text-") : ""}`}>
                        {item.title}
                      </h3>
                      <p className="font-sans text-base text-neutral-400 leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-900 text-base font-sans">
                    <div className="flex items-center gap-1.5 text-neutral-500">
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>DISCUSSION COMPLETED</span>
                    </div>
                    <span className={`font-sans text-base ${item.accentColor} flex items-center gap-1 group-hover:opacity-80 transition-opacity`}>
                      Discuss Strategy
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {caseItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 rounded-full ${i === activeIndex
                  ? "w-6 h-1.5 bg-[#a3e635]"
                  : "w-1.5 h-1.5 bg-neutral-700 hover:bg-neutral-500"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Call to action marquee */}
        <div className="overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-950/30 p-4">
          <div className="animate-marquee-text flex whitespace-nowrap gap-16 text-3xl sm:text-4xl font-sans font-extrabold uppercase tracking-[0.18em] text-white">
            <span>Now is your turn</span>
            <span>Now is your turn</span>
            <span>Now is your turn</span>
          </div>
        </div>
      </div>
    </section>
  );
}

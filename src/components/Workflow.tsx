import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { workflowSteps } from "../data";
import { CheckCircle2, Search, Sliders, Rocket } from "lucide-react";

const N = workflowSteps.length;

// Separate component so hooks aren't called inside .map()
function ProgressDot({ index, scrollYProgress }: { index: number; scrollYProgress: MotionValue<number> }) {
  const seg = 1 / N;
  const mid = (index + 0.5) * seg;
  const lo = Math.max(0, mid - seg * 0.4);
  const hi = Math.min(1, mid + seg * 0.4);
  const dotOpacity = useTransform(scrollYProgress, [lo, mid, hi], [0.3, 1, 0.3]);
  const dotScale = useTransform(scrollYProgress, [lo, mid, hi], [0.7, 1.4, 0.7]);
  return <motion.div style={{ opacity: dotOpacity, scale: dotScale }} className="h-1.5 w-1.5 rounded-full bg-white" />;
}

function ScrollHint({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  return (
    <motion.div style={{ opacity }} className="absolute bottom-8 right-8 z-50 flex flex-col items-center gap-2 text-neutral-600">
      <span className="font-mono text-[9px] uppercase tracking-widest">Scroll</span>
      <div className="h-8 w-[1px] bg-gradient-to-b from-neutral-600 to-transparent" />
    </motion.div>
  );
}

// Global timeline line that sits on top of all stacked panels
function TimelineFill({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="absolute left-6 lg:left-10 top-0 bottom-0 z-50 flex flex-col items-center pointer-events-none" style={{ width: '2px' }}>
      {/* Track */}
      <div className="absolute inset-0 bg-white/5 rounded-full" />
      {/* Animated fill */}
      <motion.div
        className="absolute top-0 left-0 right-0 rounded-full origin-top"
        style={{
          scaleY,
          background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6, #10b981)',
          boxShadow: '0 0 8px rgba(139,92,246,0.5)',
          height: '100%',
        }}
      />
    </div>
  );
}

const PANEL_CONFIG = [
  { bg: "bg-[#03060f]", glow: "rgba(59,130,246,0.06)", accent: "#85DFC3", accentText: "text-green-500", border: "border-green-500" },
  { bg: "bg-[#06030f]", glow: "rgba(139,92,246,0.06)", accent: "#65BDA2", accentText: "text-green-600", border: "border-green-600" },
  { bg: "bg-[#030a04]", glow: "rgba(16,185,129,0.06)", accent: "#307962", accentText: "text-green-800", border: "border-green-800" },
];

function getIcon(number: string) {
  switch (number.toLowerCase()) {
    case "discovery": return <Search className="h-6 w-6" />;
    case "blueprint": return <Sliders className="h-6 w-6" />;
    case "build and enable": return <Rocket className="h-6 w-6" />;
    default: return <CheckCircle2 className="h-6 w-6" />;
  }
}

function Panel({
  step,
  index,
  scrollYProgress,
}: {
  step: (typeof workflowSteps)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const cfg = PANEL_CONFIG[index % PANEL_CONFIG.length];
  const seg = 1 / N;
  const start = index * seg;
  const end = (index + 1) * seg;
  const buf = seg * 0.45;
  const isLast = index === N - 1;

  // Rise from below on entry
  const yInputRange =
    index === 0
      ? [0, end - buf, end]
      : [Math.max(0, start - buf), start, end - buf, end];

  const yOutputRange =
    index === 0
      ? ["0%", "0%", "-3%"]
      : ["100%", "0%", "0%", "-3%"];

  const y = useTransform(scrollYProgress, yInputRange, yOutputRange);

  // Fade in/out
  const opInputRange =
    index === 0
      ? [0, end - buf, end]
      : [Math.max(0, start - buf * 0.6), start, end - buf, end];

  const opOutputRange =
    index === 0
      ? [1, 1, isLast ? 1 : 0]
      : [0, 1, 1, isLast ? 1 : 0];

  const opacity = useTransform(scrollYProgress, opInputRange, opOutputRange);

  // Subtle scale-back on exit
  const scale = useTransform(scrollYProgress, [end - buf, end], [1, 0.97]);

  // Inner content gentle parallax
  const contentY = useTransform(scrollYProgress, [start, end], [0, -24]);

  return (
    <motion.div
      style={{ y, scale, opacity: isLast ? undefined : opacity, zIndex: index + 1 }}
      className={`absolute inset-0 ${cfg.bg} overflow-hidden`}
    >
      {/* Radial ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 30% 50%, ${cfg.glow}, transparent 70%)`,
        }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* Giant decorative step number */}
      <div className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 select-none pointer-events-none" aria-hidden>
        <span className="font-display font-black leading-none text-white/[0.025]" style={{ fontSize: "clamp(8rem,22vw,18rem)" }}>
          0{index + 1}
        </span>
      </div>

      {/* ── Vertical timeline track (left edge) ── */}
      <div className="absolute left-6 lg:left-10 top-0 bottom-0 flex flex-col items-center z-20 pointer-events-none">
        {/* Track line */}
        <div className="flex-1 w-[2px] bg-white/5" />
        {/* Active bullet */}
        <div
          className="h-12 w-12 rounded-full flex items-center justify-center border-2 shrink-0 my-3"
          style={{
            background: `${cfg.accent}18`,
            borderColor: cfg.accent,
            boxShadow: `0 0 18px ${cfg.accent}60`,
          }}
        >
          <span className={cfg.accentText}>{getIcon(step.number)}</span>
        </div>
        {/* Track line */}
        <div className="flex-1 w-[2px] bg-white/5" />
      </div>

      {/* ── Step label beside bullet ── */}
      <div className="absolute left-[72px] lg:left-[88px] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <p className="font-mono text-base uppercase tracking-widest text-neutral-600">STG-0{index + 1}</p>
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: contentY }}
        className="relative h-full flex items-center max-w-7xl mx-auto px-20 lg:px-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full">

          {/* LEFT: step info */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Phase badge */}
            <div className="flex items-center gap-4">
              <div
                className={`h-14 w-14 rounded-2xl flex items-center justify-center border ${cfg.border}`}
                style={{ background: `${cfg.accent}12` }}
              >
                <span className={cfg.accentText}>{getIcon(step.number)}</span>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600">Phase</p>
                <p className={`font-mono text-base font-bold tracking-wider uppercase ${cfg.accentText}`}>
                  {step.number}
                </p>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-neutral-400 leading-relaxed max-w-md">
                {step.subtext}
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {[step.bullet1, step.bullet2].map((b, bi) => (
                <div key={bi} className="flex items-start gap-3">
                  <div
                    className="h-5 w-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${cfg.accent}20` }}
                  >
                    <CheckCircle2 className={`h-3 w-3 ${cfg.accentText}`} />
                  </div>
                  <span className="font-sans text-sm text-neutral-300">{b}</span>
                </div>
              ))}
            </div>

            {/* Step counter */}
            <p className="font-mono text-[11px] text-neutral-700 tracking-widest uppercase">
              {String(index + 1).padStart(2, "0")} of {String(N).padStart(2, "0")} phases
            </p>
          </div>

          {/* RIGHT: commit status card */}
          <div className="hidden lg:flex flex-col justify-center items-start">
            <div className={`w-full max-w-sm p-7 rounded-2xl border ${cfg.border} backdrop-blur-sm`}
              style={{ background: `${cfg.accent}08` }}>
              <p className={`font-mono text-[9px] uppercase tracking-widest font-bold mb-3 ${cfg.accentText}`}>
                COMMIT STATUS
              </p>
              <p className="font-sans text-sm text-neutral-400 leading-relaxed">
                Our engineering outputs for the{" "}
                <strong className="text-neutral-200 font-semibold">{step.number}</strong>{" "}
                phase pass multiple lint audits and container optimization runs automatically.
              </p>
              <div className="flex items-center gap-2 mt-5 pt-4 border-t border-white/5">
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ backgroundColor: cfg.accent, boxShadow: `0 0 8px ${cfg.accent}` }}
                />
                <span className="font-mono text-base text-neutral-500 uppercase tracking-widest">
                  Release Ready
                </span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-[#040404]">

      {/* Section header — normal flow above the sticky scroll */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-0 text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <span className="inline-block px-3.5 py-1 rounded-full border border-neutral-800 text-base font-mono mb-[3rem] tracking-widest text-green-500 bg-[#a3e635]/5">
            Our Timeline
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            A collaborative process that builds the right systems for your mission
          </h2>
          <p className="max-w-xl mx-auto font-sans text-base sm:text-sm text-neutral-400">
            Precision counts. We build customized software workflows step-by-step, ensuring structural safety and elite handoff readiness.
          </p>
        </motion.div>
      </div>

      {/* Sticky scroll container: (N+1)*100vh tall so each step = 100vh scroll */}
      <div
        ref={containerRef}
        style={{ height: `${(N + 1) * 100}vh` }}
        className="relative"
      >
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Global timeline fill line — renders above all panels */}
          <TimelineFill scrollYProgress={scrollYProgress} />

          {/* Stacked panels */}
          {workflowSteps.map((step, i) => (
            <React.Fragment key={step.number}>
              <Panel
                step={step}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            </React.Fragment>
          ))}

          {/* Dot progress indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
            {workflowSteps.map((step, i) => (
              <ProgressDot key={step.number} index={i} scrollYProgress={scrollYProgress} />
            ))}
          </div>

          {/* Scroll hint */}
          <ScrollHint scrollYProgress={scrollYProgress} />

        </div>
      </div>

      {/* Footer banner */}
      <motion.div
        className="max-w-3xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-5 rounded-2xl border border-neutral-900 bg-neutral-950/40 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-green-primary animate-pulse" />
          <span className="font-sans text-base text-neutral-400">
            Each phase produces a formal, version-controlled repository delivery. We build for handoff readiness.
          </span>
        </div>
      </motion.div>

    </section>
  );
}

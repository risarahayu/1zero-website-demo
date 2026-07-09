import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { workflowSteps } from "../data";
import { workflowCopy } from "../copy";
import { CheckCircle2 } from "lucide-react";
import { Icon } from "@iconify/react";

const N = workflowSteps.length;

const PANEL_CONFIG = [
  { bg: "bg-raisin-black-900", glow: "rgba(29, 87, 69, 0.19)", accent: "var(--green-600)", accentText: "text-brunswick-green-700", border: "border-brunswick-green-700" },
  { bg: "bg-raisin-black-900", glow: "rgba(29, 87, 69, 0.29)", accent: "var(--green-700)", accentText: "text-brunswick-green-800", border: "border-brunswick-green-800" },
  { bg: "bg-[#040404]", glow: "rgba(29, 87, 69, 0.51)", accent: "var(--green-800)", accentText: "text-brunswick-green-900", border: "border-brunswick-green-900" },
  { bg: "bg-[#040404]", glow: "rgba(29, 87, 69, 0.61)", accent: "var(--green-900)", accentText: "text-brunswick-green-900", border: "border-brunswick-green-900" },
];

// ── Top navigation bar (replaces the left sidebar) ─────────────────────────
function TopNav({
  activeIdx,
  onSelect,
}: {
  activeIdx: number;
  onSelect: (i: number) => void;
}) {
  // Hitung persentase progres (0% sampai 100%)
  const progressPercentage = (activeIdx / (N - 1)) * 100;

  return (
    /* Container utama harus memiliki lebar yang konsisten (misal: max-w-2xl atau w-full) */
    <div className="relative flex items-center justify-between w-full max-w-4xl mx-auto py-8 z-20">

      {/* 1. Track Garis Abu-abu (Garis Kosong) 
          Diberi inset-x-6 agar dimulai dari tengah lingkaran (lingkaran w-12 = 48px, tengahnya 24px/6rem) 
      */}
      <div className="absolute top-[50%] -translate-y-1/2 left-6 right-6 h-[2px] bg-white/10" />

      {/* 2. Track Garis Hijau (Garis Isi) 
          Garis ini akan memanjang sesuai dengan step yang aktif 
      */}
      <motion.div
        initial={false}
        animate={{ width: `calc(${progressPercentage}%)` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute top-[50%] -translate-y-1/2 left-6 h-[2px] z-0"
        style={{
          background: "linear-gradient(to right, var(--green-500), var(--green-900))",
          boxShadow: "0 0 10px rgba(29,87,69,0.8)",
          /* Kita gunakan transformOrigin agar animasi memanjang dari kiri ke kanan */
          transformOrigin: "left center",
        }}
      />

      {workflowSteps.map((step, i) => {
        const cfg = PANEL_CONFIG[i % PANEL_CONFIG.length];
        const isCurrent = i === activeIdx;
        const isPassed = i <= activeIdx; // Step ini atau sebelumnya sudah dilewati

        return (
          <div key={step.number} className="relative flex flex-col items-center">
            <motion.button
              onClick={() => onSelect(i)}
              animate={{
                scale: isCurrent ? 1.15 : 1,
                // Tambahkan sedikit efek glow saat aktif
                boxShadow: isCurrent ? `0 0 20px ${cfg.accent}80` : "none"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                // Jika sudah dilewati (isPassed), background terisi penuh
                background: isPassed ? cfg.accent : "var(--raisin-black-800)",
                borderColor: isPassed ? cfg.accent : "var(--green-500)",
              }}
              className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 cursor-pointer transition-colors duration-500`}
            >
              {/* Warna icon: Jika belum dilewati warna abu, jika sudah dilewati warna putih/kontras */}
              <span className={`${isPassed ? "text-sea-salt" : "text-brunswick-green-500"} transition-colors duration-500`}>
                {step.icon ? <Icon icon={step.icon} width={22} height={22} /> : step.number}
              </span>

              {/* Indicator Lingkaran Luar  (Ring) hanya untuk posisi saat ini */}
              {isCurrent && (
                <motion.div
                  layoutId="activeRing"
                  className="absolute -inset-1.5 border border-brunswick-green-500 rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>

            {/* Label Step di Bawah Lingkaran */}
            <motion.div
              animate={{
                opacity: isCurrent ? 1 : 0.4,
                y: isCurrent ? 10 : 8
              }}
              className="absolute top-12 whitespace-nowrap text-center"
            >
              <span className={`font-sans text-sm font-black tracking-widest uppercase ${isCurrent ? cfg.accentText : "text-sea-salt/90"}`}>
                {step.number}
              </span>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

// ── Single step panel ───────────────────────────────────────────────────────
function Panel({
  step,
  index,
  direction,
}: {
  step: (typeof workflowSteps)[0];
  index: number;
  direction: number; // +1 = going right, -1 = going left
}) {
  const cfg = PANEL_CONFIG[index % PANEL_CONFIG.length];

  return (
    <motion.div
      key={index}
      custom={direction}
      initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute inset-0 ${cfg.bg} overflow-hidden`}
    >
      {/* Radial ambient glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 20% 50%, ${cfg.glow}, transparent 80%)`,
        }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:36px_36px]" />

      {/* Giant decorative step number */}
      <div className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 select-none" aria-hidden>
        <span
          className="font-sans font-black text-sea-salt/[0.15]"
          style={{ fontSize: "clamp(8rem,22vw,18rem)" }}
        >
          0{index + 1}
        </span>
      </div>

      {/* Main content */}
      <div className="relative h-full flex items-center max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full">

          {/* LEFT: step info */}
          <div className="flex flex-col justify-center space-y-10">
            {/* Phase badge */}
            <div className="flex items-center gap-4">
              <div
                className={`h-14 w-14 rounded-2xl flex items-center justify-center border ${cfg.border}`}
                style={{ background: `${cfg.accent}12` }}
              >
                <span className={cfg.accentText}>
                  {step.icon ? <Icon icon={step.icon} width="24" /> : null}
                </span>
              </div>
              <div>
                <p className="font-sans text-base sm:text-lg uppercase tracking-[0.2em] text-sea-salt">
                  {workflowCopy.phaseLabel}
                </p>
                <p className={`font-sans text-base sm:text-lg font-bold tracking-wider uppercase ${cfg.accentText}`}>
                  {step.number}
                </p>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-6">
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-sea-salt leading-[1.1]">
                {step.title}
              </h3>
              <p className="font-sans text-base sm:text-lg text-sea-salt max-w-md">
                {step.subtext}
              </p>

              {/* Checklist */}
              <div className="space-y-4">
                {[step.bullet1, step.bullet2].map((b, bi) => (
                  <div key={bi} className="flex items-start gap-3">
                    <div
                      className="h-5 w-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${cfg.accent}20` }}
                    >
                      <CheckCircle2 className={`h-3 w-3 ${cfg.accentText}`} />
                    </div>
                    <span className="font-sans text-lg text-sea-salt">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step counter */}
            <p className="font-sans text-base sm:text-lg text-ivory tracking-widest uppercase">
              {String(index + 1).padStart(2, "0")} {workflowCopy.ofText} {String(N).padStart(2, "0")} {workflowCopy.phasesText}
            </p>
          </div>

          {/* RIGHT: commit status card */}
          <div className="hidden lg:flex flex-col justify-center items-start">
            <div
              className={`w-full max-w-sm p-7 rounded-2xl border ${cfg.border} backdrop-blur-sm`}
              style={{ background: `${cfg.accent}08` }}
            >
              <p className={`font-sans text-base sm:text-lg uppercase tracking-widest font-bold mb-3 ${cfg.accentText}`}>
                {workflowCopy.commitStatusLabel}
              </p>
              <p className="font-sans text-base sm:text-lg text-sea-salt">
                {workflowCopy.commitStatusDescStart}{" "}
                <strong className="text-sea-salt font-semibold">{step.number}</strong>{" "}
                {workflowCopy.commitStatusDescEnd}
              </p>
              <div className="flex items-center gap-2 mt-5 pt-4 border-t border-sea-salt/5">
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ backgroundColor: cfg.accent, boxShadow: `0 0 8px ${cfg.accent}` }}
                />
                <span className="font-sans text-lg text-sea-salt uppercase tracking-widest">
                  {workflowCopy.releaseReady}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

// ── Main export ─────────────────────────────────────────────────────────────
export default function WorkflowHorizontal() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleSelect = (i: number) => {
    setDirection(i > activeIdx ? 1 : -1);
    setActiveIdx(i);
  };

  const handlePrev = () => {
    if (activeIdx > 0) handleSelect(activeIdx - 1);
  };

  const handleNext = () => {
    if (activeIdx < N - 1) handleSelect(activeIdx + 1);
  };

  return (
    <section className="bg-raisin-black">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0 text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          <span className="inline-block px-3.5 py-2 rounded-full border border-brunswick-500 text-lg font-sans uppercase tracking-widest text-brunswick-green-500 bg-raisin-black">
            {workflowCopy.badge}
          </span>
          <div className="space-y-6">
            <h2 className="font-sans text-3xl leading-normal sm:text-5xl sm:leading-normal font-bold text-sea-salt">
              {workflowCopy.title}
            </h2>
            {/* <p className="max-w-xl mx-auto font-sans text-base sm:text-lg text-sea-salt/90">
              {workflowCopy.description}
            </p> */}
          </div>
        </motion.div>
      </div>

      {/* Horizontal workflow container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* Top navigation */}
        <div className="mb-4">
          <TopNav activeIdx={activeIdx} onSelect={handleSelect} />
        </div>

        {/* Panel area: fixed height, panels switch in/out */}
        <div className="relative rounded-2xl overflow-hidden border border-sea-salt/10" style={{ minHeight: "520px" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <Panel
              key={activeIdx}
              step={workflowSteps[activeIdx]}
              index={activeIdx}
              direction={direction}
            />
          </AnimatePresence>

          {/* Prev / Next arrows */}
          <button
            onClick={handlePrev}
            disabled={activeIdx === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-sea-salt/10 hover:bg-sea-salt/20 text-sea-salt flex items-center justify-center transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Previous step"
          >
            <Icon icon="mdi:chevron-left" width="22" />
          </button>

          <button
            onClick={handleNext}
            disabled={activeIdx === N - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-sea-salt/10 hover:bg-sea-salt/20 text-sea-salt flex items-center justify-center transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Next step"
          >
            <Icon icon="mdi:chevron-right" width="22" />
          </button>
        </div>

        {/* Bottom dot indicators */}
        {/* <div className="flex justify-center gap-2 mt-6">
          {workflowSteps.map((_, i) => {
            const cfg = PANEL_CONFIG[i % PANEL_CONFIG.length];
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                aria-label={`Go to step ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === activeIdx ? "2rem" : "0.5rem",
                  height: "0.5rem",
                  background: i === activeIdx ? cfg.accent : "rgba(255,255,255,0.2)",
                  // boxShadow: i === activeIdx ? `0 0 8px ${cfg.accent}` : "none",
                }}
              />
            );
          })}
        </div> */}

      </div>

    </section>
  );
}

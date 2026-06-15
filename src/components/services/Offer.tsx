import React, { useState } from "react";

import { products } from "../../data";
import "../../css/services.css";

export default function DiagnosisPanel() {
    // Menyimpan index yang sedang terbuka. Default 0 agar yang pertama terbuka.
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        // Jika item yang diklik sudah terbuka, tutup (set ke null). Jika tidak, buka yang baru.
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-20">

            {/* TITLE & HERO SECTION */}
            <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
                {/* 1. LAYER AURORA */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="aurora-layer aurora-1"></div>
                    <div className="aurora-layer aurora-2"></div>
                    <div className="aurora-layer aurora-3"></div>
                </div>

                {/* 2. LAYER PENUTUP GRADASI */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none z-10"></div>

                {/* 3. KONTEN UTAMA */}
                <div className="relative z-20 max-w-3xl mx-auto text-center px-6 py-20">
                    <h2 className="text-xl  md:text-4xl font-bold leading-snug text-white">
                        We know you didn’t come here without a problem.
                        <br />
                        Something in your system isn’t working — and you can feel it.
                    </h2>
                    <p className="text-white/50 mt-6">
                        This isn’t a form. It’s a diagnosis of your growth system.
                    </p>
                </div>
            </div>

            {/* ACCORDION HEADER */}
            <div className="mb-12 text-center max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-white">
                    Which area of your business is facing bottlenecks?
                </h3>
                <p className="text-white/60 mt-2">
                    Click to explore the diagnosis and solutions.
                </p>
            </div>

            {/* ACCORDION LIST */}
            <div className="max-w-4xl mx-auto space-y-6">
                {products.map((item, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <div
                            key={item.id}
                            className={`border transition-all duration-300 rounded-2xl ${isActive ? "border-white/20 bg-white/5 shadow-lg" : "border-white/5 bg-transparent hover:border-white/10"
                                }`}
                        >
                            {/* DROPDOWN HEADER (Tombol Klik) */}
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                            >
                                <div className="flex items-center gap-5">
                                    {/* DOT INDICATOR */}
                                    <div
                                        className={`flex-shrink-0 w-4 h-4 rounded-full transition-all duration-300 ${isActive
                                            ? "bg-green-400 scale-110 shadow-[0_0_12px_rgba(74,222,128,0.6)]"
                                            : "bg-white/20 group-hover:bg-white/40"
                                            }`}
                                    />
                                    <span className={`text-xl font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-white/60 group-hover:text-white"}`}>
                                        {item.problemTitle || "System Area"}
                                    </span>
                                </div>

                                {/* CHEVRON ICON */}
                                <div className={`text-white/40 transition-transform duration-300 ${isActive ? "rotate-180" : "rotate-0"}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </button>

                            {/* DROPDOWN BODY (Konten Detail) */}
                            <div
                                className={`grid transition-all duration-500 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 border-t border-white/5 mt-4">

                                        {/* KONTEN DARI SEBELAH KANAN SEBELUMNYA */}
                                        <div className="relative w-full">
                                            {/* AURORA BACKGROUND (Di dalam card) */}
                                            <div className="absolute -inset-12 blur-3xl opacity-60 pointer-events-none">
                                                <div
                                                    className="absolute top-0 left-10 w-72 h-72 rounded-full mix-blend-screen"
                                                    style={{ background: item.mood?.glow || 'rgba(16, 185, 129, 0.2)' }}
                                                />
                                                <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-screen" />
                                            </div>

                                            {/* MAIN CARD INNER */}
                                            <div className="relative z-10 p-8 rounded-2xl ">
                                                <div className="space-y-8">
                                                    <p className="text-sea-salt text-base font-semibold">If you’re experiencing this, or if this is happening in your system:</p>
                                                    {/* 1. PROBLEM FIRST */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                                        {item.symptoms?.map((symptom, i) => {
                                                            // Ambil komponen ikon dari data dan jadikan variabel dengan huruf besar
                                                            const Icon = symptom.icon;

                                                            return (
                                                                <div
                                                                    key={i}
                                                                    className="flex flex-col gap-4 p-5 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-colors duration-300"
                                                                >
                                                                    {/* Render ikon, ukurannya sedikit diperbesar menjadi w-6 h-6 agar proporsional di dalam kotak */}
                                                                    <Icon className="w-6 h-6 text-red-400 flex-shrink-0" />

                                                                    {/* Render teks */}
                                                                    <span className="text-white/80 text-sm md:text-base leading-relaxed">
                                                                        {symptom.text}
                                                                    </span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>

                                                    {/* ARROW DIVIDER */}
                                                    <div className="flex justify-center">
                                                        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
                                                    </div>

                                                    {/* 2. RECOMMENDED SERVICE */}
                                                    <div className="p-6 rounded-xl border border-white/10 bg-white/5 shadow-2xl">
                                                        <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-4">
                                                            Our Service
                                                        </p>
                                                        <div className="flex flex-col gap-4">
                                                            <div className="text-2xl md:text-5xl font-bold uppercase animate-gradient-text text-gradient">
                                                                {item.service}
                                                            </div>
                                                            <p className="text-white/70 text-base leading-relaxed">
                                                                {item.description}
                                                            </p>

                                                            <div className="mt-4">
                                                                <a href={item.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brunswick-green-900 text-white hover:bg-brunswick-green-700 transition-colors">
                                                                    Download PDF
                                                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5-5-5-5" /></svg>
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    {/* ARROW DIVIDER */}
                                                    <div className="flex justify-center">
                                                        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
                                                    </div>

                                                    {/* 3. FUTURE STATE */}
                                                    <div className="p-6 rounded-xl border border-green-500/20 bg-green-500/5">
                                                        <p className="text-brunswick-green-500 text-sm font-semibold uppercase tracking-wider mb-4">
                                                            After implementation
                                                        </p>
                                                        <ul className="space-y-3">
                                                            {item.futureState?.map((f, i) => (
                                                                <li key={i} className="text-white/80 text-base flex gap-3 items-start">
                                                                    <span className="text-brunswick-green-500 mt-0.5">✓</span>
                                                                    <span>{f}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
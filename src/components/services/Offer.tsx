import React, { useEffect, useRef, useState } from "react";
import { products } from "../../data";

export default function DiagnosisPanel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef([]);
    const lastClickTimeRef = useRef(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const now = Date.now();

                        // ❗ prevent observer override right after click
                        if (now - lastClickTimeRef.current < 600) return;

                        const index = Number(entry.target.dataset.index);
                        setActiveIndex(index);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0.2,
            }
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleClick = (index) => {
        lastClickTimeRef.current = Date.now();

        setActiveIndex(index); // ✅ instant sync kanan

        sectionRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    };

    const activeItem = products[activeIndex];

    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-20">

            {/* TITLE */}
            <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">

                {/* 1. LAYER AURORA (Paling Bawah) */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="aurora-layer aurora-1"></div>
                    <div className="aurora-layer aurora-2"></div>
                    <div className="aurora-layer aurora-3"></div>
                </div>

                {/* 2. LAYER PENUTUP GRADASI (Vignette) */}
                {/* Menimpa garis kasar di atas dengan warna background (#030303) yang memudar ke bawah */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none z-10"></div>

                {/* Menimpa garis kasar di bawah dengan warna background (#030303) yang memudar ke atas */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none z-10"></div>

                {/* 3. KONTEN UTAMA (Paling Atas) */}
                {/* z-20 agar teks berada di atas gradasi penutup */}
                <div className="relative z-20 max-w-3xl mx-auto text-center px-6 py-20">
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug text-white">
                        We know you didn’t come here without a problem.
                        <br />
                        Something in your system isn’t working — and you can feel it.
                    </h2>

                    <p className="text-white/50 mt-6">
                        This isn’t a form. It’s a diagnosis of your growth system.
                    </p>
                </div>

            </div>
            <div className="mb-12">
                <h3 className="text-3xl font-bold text-white">
                    Which area of your business is facing bottlenecks?
                </h3>
                <p className="text-white/60 mt-2">
                    Click or scroll to explore your system state.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                {/* LEFT NAV */}
                <div className="md:col-span-4 sticky top-24 h-fit">
                    {/* Dihapus: border-l pl-4 space-y-6, Diganti dengan flex-col biasa */}
                    <div className="flex flex-col">
                        {products.map((item, index) => {
                            const isActive = index === activeIndex;
                            const isLast = index === products.length - 1;

                            return (
                                <div
                                    key={item.id}
                                    onClick={() => handleClick(index)}
                                    // Tambahkan pb-8 untuk jarak antar elemen
                                    className="cursor-pointer flex items-start relative pb-8 group"
                                >
                                    {/* LINE CONNECTOR (Dihilangkan pada item terakhir) */}
                                    {!isLast && (
                                        <div className="absolute left-[7.5px] top-7 bottom-0 w-[1px] bg-white/10 transition-colors duration-300" />
                                    )}

                                    {/* DOT */}
                                    <div
                                        className={`relative z-10 flex-shrink-0 w-4 h-4 rounded-full transition-all duration-300 mt-1.5 ${isActive
                                            ? "bg-green-400 scale-110 shadow-[0_0_12px_rgba(74,222,128,0.6)]"
                                            : "bg-white/20 group-hover:bg-white/40"
                                            }`}
                                    />

                                    {/* TEXT */}
                                    {/* ml-6 menyesuaikan agar teks tidak menabrak titik */}
                                    <div className={`ml-6 transition-all duration-300 ${isActive ? "text-white" : "text-white/40 group-hover:text-white/70"}`}>
                                        <p className="text-sm font-medium">
                                            {item.problemTitle}
                                        </p>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT CONTENT (SINGLE ACTIVE CARD) */}
                <div className="md:col-span-8 flex items-center justify-center">

                    <div className="relative w-full">

                        {/* AURORA BACKGROUND */}
                        <div className="absolute -inset-12 blur-3xl opacity-60">
                            <div
                                className="absolute top-0 left-10 w-72 h-72 rounded-full mix-blend-screen"
                                style={{ background: activeItem?.mood?.glow }}
                            />
                            <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen" />
                        </div>

                        {/* MAIN CARD */}
                        <div className="relative z-10 p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">

                            {/* HEADER */}
                            <div className="mb-8">
                                <p className="text-white/40 text-xs uppercase tracking-widest">
                                    System Diagnosis
                                </p>

                                <h2 className="text-3xl font-bold text-white mt-2">
                                    {activeItem?.service}
                                </h2>

                                <p className="text-white/60 mt-3">
                                    {activeItem?.description}
                                </p>
                            </div>

                            {/* VERTICAL FLOW */}
                            <div className="space-y-10">

                                {/* 1. PROBLEM FIRST */}
                                <div className="p-5 rounded-xl border border-red-500/20 bg-red-500/5">
                                    <p className="text-red-400 text-xs uppercase tracking-wider mb-4">
                                        You are experiencing this problem
                                    </p>

                                    <ul className="space-y-2">
                                        {activeItem?.symptoms?.map((s, i) => (
                                            <li key={i} className="text-white/70 text-sm flex gap-2">
                                                <span className="text-red-400">•</span>
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* ARROW / DIVIDER */}
                                <div className="flex justify-center">
                                    <div className="w-px h-8 bg-white/10" />
                                </div>

                                {/* 2. SERVICE (GEO / fCTO) */}
                                <div className="p-5 rounded-xl border border-white/10 bg-white/5">
                                    <p className="text-white/40 text-xs uppercase tracking-wider mb-4">
                                        Recommended System
                                    </p>

                                    <div className="text-white text-lg font-semibold">
                                        {activeItem?.service}
                                    </div>

                                    <p className="text-white/60 text-sm mt-2">
                                        Strategic intervention layer designed to fix the root system failure.
                                    </p>
                                </div>

                                {/* ARROW */}
                                <div className="flex justify-center">
                                    <div className="w-px h-8 bg-white/10" />
                                </div>

                                {/* 3. FUTURE STATE */}
                                <div className="p-5 rounded-xl border border-green-500/20 bg-green-500/5">
                                    <p className="text-green-400 text-xs uppercase tracking-wider mb-4">
                                        After implementation
                                    </p>

                                    <ul className="space-y-2">
                                        {activeItem?.futureState?.map((f, i) => (
                                            <li key={i} className="text-white/70 text-sm flex gap-2">
                                                <span className="text-green-400">•</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
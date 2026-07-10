import React, { useEffect, useRef, useState } from "react";
import { benefits } from "../../data";
import { servicesCopy } from "../../copy";

export default function WhatYouGet() {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const indexRef = useRef(0);
    const [activeIndex, setActiveIndex] = useState(0);

    // AUTO SCROLL MOBILE
    useEffect(() => {
        const interval = setInterval(() => {
            const container = carouselRef.current;
            if (!container) return;

            const cards = container.querySelectorAll(".carousel-card");
            if (!cards.length) return;

            indexRef.current = (indexRef.current + 1) % cards.length;
            setActiveIndex(indexRef.current);

            cards[indexRef.current].scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const scrollToIndex = (newIndex: number) => {
        const container = carouselRef.current;
        if (!container) return;

        const cards = container.querySelectorAll(".carousel-card");
        if (!cards.length) return;

        const clamped = (newIndex + cards.length) % cards.length;

        indexRef.current = clamped;
        setActiveIndex(clamped);

        cards[clamped].scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
    };

    return (
        <section className="relative bg-raisin-black py-24 overflow-hidden">

            {/* glow background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-[500px] w-[500px] rounded-full bg-sea-salt/5 blur-[140px]" />
            </div>

            {/* HEADER */}
            <div className="relative z-10 text-center px-6 max-w-3xl mx-auto space-y-6">
                <span className="inline-block px-4 py-2 rounded-full border border-brunswick-green-500 text-lg font-sans uppercase tracking-widest text-brunswick-green-500">
                    {servicesCopy.workingWithBadge}
                </span>

                <h2 className="font-sans text-3xl leading-normal sm:text-5xl sm:leading-normal font-bold text-sea-salt">
                    {servicesCopy.whatYouGain}
                </h2>

                <p className="text-base sm:text-lg text-sea-salt/70">
                    {servicesCopy.description}
                </p>
            </div>

            {/* ================= MOBILE ================= */}
            <div className="relative mt-16 md:hidden">

                {/* arrows */}
                <button
                    onClick={() => scrollToIndex(activeIndex - 1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-sea-salt/10 backdrop-blur border border-white/10 text-sea-salt"
                >
                    ‹
                </button>

                <button
                    onClick={() => scrollToIndex(activeIndex + 1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-sea-salt/10 backdrop-blur border border-white/10 text-sea-salt"
                >
                    ›
                </button>

                {/* carousel */}
                <div
                    ref={carouselRef}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 scroll-smooth scrollbar-none"
                >
                    {benefits.map((item) => (
                        <div
                            key={item.title}
                            className="carousel-card snap-center shrink-0 w-[85vw] p-6 rounded-2xl bg-sea-salt/5 border border-white/10 backdrop-blur"
                        >
                            {item.icon && (
                                <div className="mb-4 text-brunswick-green-500">
                                    <item.icon className="w-6 h-6" />
                                </div>
                            )}

                            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-sea-salt mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sea-salt/60 text-base sm:text-lg ">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* dots */}
                <div className="flex justify-center gap-2 mt-5">
                    {benefits.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToIndex(i)}
                            className={`transition-all rounded-full ${i === activeIndex
                                    ? "w-6 h-1.5 bg-sea-salt"
                                    : "w-2 h-2 bg-sea-salt/30"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* ================= DESKTOP GRID ================= */}
            <div className="hidden md:grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] justify-center gap-8 mt-20 px-10 max-w-6xl mx-auto relative z-10 justify-items-center auto-rows-fr">

                {benefits.map((item) => (
                    <div
                        key={item.title}
                        className="w-full p-8 rounded-2xl bg-sea-salt/5 border border-white/10 backdrop-blur hover:bg-sea-salt/10 transition-all duration-300"
                    >
                        {item.icon && (
                            <div className="mb-6 text-brunswick-green-500">
                                <item.icon className="w-8 h-8" />
                            </div>
                        )}

                        <h3 className="font-sans text-2xl sm:text-3xl font-bold text-sea-salt mb-3">
                            {item.title}
                        </h3>

                        <p className="text-sea-salt/80 text-base sm:text-lg">
                            {item.description}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}
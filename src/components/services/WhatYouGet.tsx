import React, { useEffect, useRef, useState } from "react";
import { benefits } from "../../data";
import { servicesCopy } from "../../copy";

export default function WhatYouGet() {
    const carouselRef = useRef(null);
    const indexRef = useRef(0);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const container = carouselRef.current as HTMLElement | null;
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
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    const scrollToIndex = (newIndex) => {
        const container = carouselRef.current;
        if (!container) return;

        const cards = container.querySelectorAll(".carousel-card");
        if (!cards.length) return;

        const clampedIndex =
            (newIndex + cards.length) % cards.length;

        indexRef.current = clampedIndex;
        setActiveIndex(clampedIndex);

        cards[clampedIndex].scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
    };

    return (
        <section className="relative overflow-hidden bg-black py-20 md:min-h-screen">
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-[500px] w-[500px] rounded-full bg-sea-salt/5 blur-[140px]" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 md:absolute md:inset-0 md:justify-center">
                <p className="inline-block px-3.5 py-2 rounded-full border border-brunswick-500 text-lg font-sans uppercase tracking-widest text-brunswick-green-500  bg-raisin-black">
                    {servicesCopy.workingWithBadge}
                </p>

                <h2 className="text-3xl  sm:text-4xl font-bold text-sea-salt animate-gradient-text text-gradient">
                    {servicesCopy.whatYouGain}
                </h2>

                <p className="max-w-xl mt-6 text-lg md:text-lg text-raisin-black-900-400">
                    {servicesCopy.description}
                </p>
            </div>

            <div className="relative z-20 mt-14 md:hidden">

                {/* ARROWS */}
                <button
                    onClick={() => scrollToIndex(activeIndex - 1)}
                    className="
            absolute left-2 top-1/2 -translate-y-1/2
            z-30

            w-10 h-10
            rounded-full

            bg-sea-salt/10
            backdrop-blur-xl
            border border-sea-salt/10

            text-sea-salt
        "
                >
                    ‹
                </button>

                <button
                    onClick={() => scrollToIndex(activeIndex + 1)}
                    className="
            absolute right-2 top-1/2 -translate-y-1/2
            z-30

            w-10 h-10
            rounded-full

            bg-sea-salt/10
            backdrop-blur-xl
            border border-sea-salt/10

            text-sea-salt
        "
                >
                    ›
                </button>

                {/* CAROUSEL */}
                <div
                    ref={carouselRef}
                    className="
            flex
            gap-4
            overflow-x-auto
            snap-x snap-mandatory
            px-6 pb-4
            scroll-smooth
            scrollbar-none
        "
                >
                    {benefits.map((item, index) => (
                        <div
                            key={item.title}
                            className="
                    carousel-card

                    snap-center
                    shrink-0

                    w-[85vw]

                    p-6
                    rounded-3xl

                    bg-sea-salt/5
                    backdrop-blur-xl

                    border
                    border-raisin-black-900-700/50
                "
                        >
                            {item.icon && (
                                <div className="mb-4 text-brunswick-green-500">
                                    <item.icon className="w-6 h-6" />
                                </div>
                            )}
                            <h3 className="font-semibold text-sea-salt mb-3">
                                {item.title}
                            </h3>

                            <p className="text-lg text-raisin-black-900-400">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* DOT INDICATORS */}
                <div className="flex justify-center gap-2 mt-4">
                    {benefits.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToIndex(i)}
                            className={`
                    w-2 h-2 rounded-full transition-all
                    ${i === activeIndex
                                    ? "bg-sea-salt w-6"
                                    : "bg-sea-salt/30"
                                }
                `}
                        />
                    ))}
                </div>

                {/* fade edges */}
                <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 bottom-0 w-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            </div>

            {/* DESKTOP FLOATING */}
            {benefits.map((item, index) => (
                <div
                    key={item.title}
                    className="
                        hidden md:block

                        absolute
                        w-[260px]
                        p-5
                        rounded-2xl

                        bg-sea-salt/5
                        backdrop-blur-xl

                        border
                        border-raisin-black-900-700/50

                        shadow-lg

                        transition-all
                        duration-500

                        hover:bg-sea-salt/10
                        hover:border-raisin-black-900-500
                        hover:scale-105
                    "
                    style={{
                        ...item.style,
                        animation: `float ${5 + (index % 3)}s ease-in-out infinite`,
                    }}
                >
                    {item.icon && (
                        <div className="mb-4 text-brunswick-green-500">
                            <item.icon className="w-6 h-6" />
                        </div>
                    )}
                    <h3 className="font-semibold text-sea-salt mb-2">
                        {item.title}
                    </h3>

                    <p className="text-lg text-raisin-black-900-400 leading-relaxed">
                        {item.description}
                    </p>
                </div>
            ))}
        </section>
    );
}
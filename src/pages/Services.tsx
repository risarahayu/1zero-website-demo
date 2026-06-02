import React, { useEffect, useState } from "react";

const data = [
    {
        word: "accelerate",
        image: "/images/devpod.png",
        color: "text-green-400",
    },
    {
        word: "optimize",
        image: "/images/geo.png",
        color: "text-emerald-300",
    },
    {
        word: "scale",
        image: "/images/scale.png",
        color: "text-lime-300",
    },
    {
        word: "secure",
        image: "/images/secure.png",
        color: "text-teal-300",
    },
    {
        word: "ship",
        image: "/images/ship.png",
        color: "text-green-500",
    },
];

export default function ServicesHero() {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");

    const active = data[index % data.length];

    useEffect(() => {
        const word = active.word;
        let i = 0;
        setText("");

        const interval = setInterval(() => {
            setText(word.slice(0, i + 1));
            i++;

            if (i === word.length) {
                clearInterval(interval);

                setTimeout(() => {
                    setIndex((prev) => prev + 1);
                }, 1800);
            }
        }, 70);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <section className="max-w-6xl mx-auto px-6 pt-28 pb-20">

            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* ================= LEFT ================= */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
                        We help you{" "}
                        <br />
                        <span className={`font-bold ${active.color}`}>
                            {text}
                            <span className="animate-pulse">|</span>
                        </span>
                        <br />
                        modern digital systems.
                    </h1>

                    <p className="mt-6 text-neutral-400 max-w-md">
                        We design system-level infrastructure that connects development,
                        growth, and scale into one architecture.
                    </p>

                    <button className="mt-10 px-6 py-3 rounded-xl bg-green-600 text-black font-medium hover:bg-green-500 transition">
                        Start System Diagnosis
                    </button>

                    <p className="mt-4 text-xs text-neutral-600">
                        Dev systems • Growth infra • Architecture design
                    </p>
                </div>

                {/* ================= RIGHT ================= */}
                <div className="relative">

                    <div className="rounded-2xl overflow-hidden border border-neutral-900 bg-neutral-950/30 glow-card transition-all duration-500">

                        <img
                            src={active.image}
                            alt={active.word}
                            className="w-full h-[360px] object-cover transition-all duration-700"
                        />

                    </div>

                    {/* glow overlay */}
                    <div className="absolute inset-0 bg-green-500/5 blur-3xl rounded-2xl pointer-events-none" />
                </div>

            </div>
        </section>
    );
}
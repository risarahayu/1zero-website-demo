import React, { useEffect, useState } from "react";
import { servicesCopy } from "../../copy";

export default function ServicesHero() {
    const data = [
        {
            word: "accelerate",
            image: "./illustration/devpod.png",
            color: "text-brunswick-green-800",
        },
        {
            word: "optimize",
            image: "./illustration/geo.jpeg",
            color: "text-dun",
        },
        {
            word: "scale",
            image: "./illustration/nextGenReplatforming.jpeg",
            color: "text-brunswick-green-900",
        },
        {
            word: "ship",
            image: "./illustration/fCTO.jpeg",
            color: "text-brunswick-green-500",
        },
    ];

    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");

    const active = data[index % data.length];
    const next = data[(index + 1) % data.length];

    const [currentImage, setCurrentImage] = useState(active.image);
    const [fade, setFade] = useState(false);

    // TEXT ANIMATION
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

    // IMAGE TRANSITION
    useEffect(() => {
        setFade(true);

        const timeout = setTimeout(() => {
            setCurrentImage(active.image);
            setFade(false);
        }, 250);

        return () => clearTimeout(timeout);
    }, [active.image]);

    return (
        <section className="max-w-6xl mx-auto px-6 pt-28 pb-20">

            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-sea-salt">
                        {servicesCopy.heroTextPrefix}{" "}
                        <br />
                        <span className={`font-bold ${active.color}`}>
                            {text}
                            <span className="animate-pulse">|</span>
                        </span>
                        <br />
                        {servicesCopy.heroTextSuffix}
                    </h1>

                    <p className="mt-6 text-sea-salt max-w-2xl mx-auto">
                        {servicesCopy.heroTagline}
                    </p>
                </div>

                {/* RIGHT (SMOOTH IMAGE) */}
                <div className="relative">

                    <div className="relative rounded-2xl overflow-hidden border border-sea-salt bg-sea-salt/30 h-[360px]">

                        {/* IMAGE */}
                        <img
                            src={currentImage}
                            alt={active.word}
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${fade ? "opacity-0 scale-105" : "opacity-100 scale-100"
                                }`}
                        />
                    </div>

                    {/* glow */}
                    <div className="absolute inset-0 bg-green-500/5 blur-3xl rounded-2xl pointer-events-none" />
                </div>

            </div>
        </section>
    );
}
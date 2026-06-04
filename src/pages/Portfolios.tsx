import React, { useMemo, useState } from "react";
import { customProjects } from "../data";
import PortfolioCard from "../components/PortfolioCard";

export default function PortfolioPage() {
    const [activeTab, setActiveTab] = useState("All");

    // ambil semua service unik
    const services = useMemo(() => {
        const unique = customProjects.map((p) => p.service);
        return ["All", ...new Set(unique)];
    }, []);

    // filter project berdasarkan tab
    const filteredProjects = useMemo(() => {
        if (activeTab === "All") return customProjects;
        return customProjects.filter(
            (p) => p.service === activeTab
        );
    }, [activeTab]);

    return (
        <section className="relative min-h-screen bg-black text-white py-24 px-6">
            {/* glow background */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[600px] h-[600px] bg-white/5 blur-[160px] rounded-full" />
            </div>

            {/* HEADER */}
            <div className="relative z-10 text-center space-y-4">
                <span className="inline-block px-3.5 py-1 rounded-full border border-neutral-800 text-base font-sans  tracking-widest text-brunswick-green-500 mb-[3rem] bg-[#a3e635]/5 shadow-[0_0_12px_rgba(163,230,53,0.1)]">
                    Our Portfolios
                </span>
                <br />
                <h1 className="text-4xl md:text-6xl font-bold animate-gradient-text text-gradient">
                    Ideas Turned Into Products
                </h1>

                <p className="text-zinc-400 max-w-xl mx-auto">
                    Selected projects grouped by service category.
                </p>
            </div>

            {/* TABS */}
            <div className="relative z-10 flex flex-wrap justify-center gap-3 mt-10">
                {services.map((service) => (
                    <button
                        key={service}
                        onClick={() => setActiveTab(service)}
                        className={`
                            px-4 py-2 rounded-full text-sm border transition-all duration-300
                            ${activeTab === service
                                ? "bg-brunswick-green-900 text-sea-salt border-white/10"
                                : "bg-white/5 text-sea-salt border-white/10 hover:border-brunswick-green-500 hover:text-brunswick-green-500"
                            }
                        `}
                    >
                        {service}
                    </button>
                ))}
            </div>

            {/* PROJECT GRID */}
            <div className="relative z-10 mt-14 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filteredProjects.map((project) => (
                    <PortfolioCard
                        key={project.id}
                        project={project}
                        showService={true}
                    />
                ))}
            </div>
        </section>
    );
}
import React, { useMemo, useState } from "react";
import { customProjects } from "../data";
import PortfolioCard from "../components/PortfolioCard";
import { PhoneCall } from "lucide-react";
import { portfoliosPageCopy } from "../copy";

export default function PortfolioPage() {
    const [activeTab, setActiveTab] = useState("All");
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const onOpenBooking = () => {
        // Here you could open a modal or navigate to a booking page.
        // For now we simply toggle a boolean to demonstrate functionality.
        setIsBookingOpen(true);
    };

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
        <section className="relative min-h-screen bg-raisin-black text-sea-salt py-24 px-6">
            {/* glow background */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[600px] h-[600px] bg-sea-salt/5 blur-[160px] rounded-full" />
            </div>

            {/* HEADER */}
            <div className="relative z-10 text-center space-y-10">
                <span className="inline-block px-3.5 py-2 rounded-full border border-brunswick-500 text-lg font-sans uppercase tracking-widest text-brunswick-green-500  bg-raisin-black">
                    {portfoliosPageCopy.badge}
                </span>
                <div className="space-y-6">
                    <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-sea-salt leading-[1.1]">
                        {portfoliosPageCopy.title}
                    </h1>

                    <p className="text-raisin-black-900-400 max-w-xl mx-auto">
                        {portfoliosPageCopy.description}
                    </p>
                </div>
            </div>

            {/* TABS */}
            <div className="relative z-10 flex flex-wrap justify-center gap-4 mt-10">
                {services.map((service) => (
                    <button
                        key={service}
                        onClick={() => setActiveTab(service)}
                        className={`
                            px-4 py-2 rounded-full text-lg border transition-all duration-300
                            ${activeTab === service
                                ? "bg-brunswick-green-900 text-sea-salt border-sea-salt/10"
                                : "bg-sea-salt/5 text-sea-salt border-sea-salt/20 hover:bg-brunswick-green-900 hover:border-brunswick-green-500 hover:text-sea-salt"
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

            <div className="mt-32 mb-12 relative w-full max-w-7xl mx-auto rounded-[2.5rem] border border-brunswick-green-500/40 bg-brunswick-green-900/20 shadow-[0_0_50px_rgba(29,87,69,0.4)] backdrop-blur-xl overflow-hidden py-20 px-6 flex flex-col items-center justify-center group transition-all duration-700 hover:border-brunswick-green-500/60 hover:shadow-[0_0_80px_rgba(29,87,69,0.6)]">

                {/* Aurora / Glow effects */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-brunswick-green-500/30 rounded-full blur-[90px] -translate-y-1/2 -translate-x-1/2 mix-blend-screen animate-pulse" />
                    <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-brunswick-green-500/20 rounded-full blur-[90px] -translate-y-1/2 translate-x-1/2 mix-blend-screen animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                <div className="space-y-10 justify-center items-center flex flex-col">

                    <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-sea-salt tracking-tight z-10 drop-shadow-lg">
                        {portfoliosPageCopy.ctaTitle}
                    </p>
                    <img
                        src="Logo 1zero white.svg"
                        className="h-[4rem] sm:h-[5rem] md:h-[6rem] z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform duration-500 group-hover:scale-105"
                        alt="1zero"
                    />
                    <button
                        id="cta-booking-btn"
                        onClick={onOpenBooking}
                        className="group relative flex items-center justify-center gap-2
                px-10 py-5
                bg-[linear-gradient(120deg,var(--color-sea-salt),var(--color-ivory),var(--color-dun),var(--color-green-500))]
                bg-[length:300%_300%]
                animate-gradient
                text-seal-salt
                font-sans font-extrabold
                text-lg sm:text-lg
                rounded-2xl
                transition-all
                shadow-[0_10px_35px_rgba(223,217,198,0.25)]
                hover:shadow-[0_10px_45px_rgba(223,217,198,0.4)]
                cursor-pointer
                tracking-wide"
                    >
                        {portfoliosPageCopy.bookButton}
                        <PhoneCall className="h-4 w-4 text-sea-salt group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>
            {/* Booking Modal placeholder */}
            {isBookingOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-raisin-black-900/60 backdrop-blur-sm z-50">
                    <div className="bg-sea-salt dark:bg-gray-800 rounded-xl p-8 max-w-md w-full shadow-lg">
                        <h2 className="font-sans text-2xl sm:text-6xl font-bold tracking-tight text-sea-salt mb-4">{portfoliosPageCopy.modalTitle}</h2>
                        <p className="mb-6">{portfoliosPageCopy.modalDescription}</p>
                        <button
                            className="px-4 py-2 bg-brunswick-green-500 text-sea-salt rounded hover:bg-brunswick-green-600"
                            onClick={() => setIsBookingOpen(false)}
                        >
                            {portfoliosPageCopy.modalCloseBtn}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
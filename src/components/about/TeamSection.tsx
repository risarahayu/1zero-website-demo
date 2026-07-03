import React, { useState, useEffect } from 'react';

import TeamBubble from './TeamBubble'; // optional, kept for potential reuse
import { Icon } from "@iconify/react";
import { section } from 'motion/react-client';
import CtaBanner from './CTA Banner';
import { aboutCopy } from '../../copy'; // Injecting our new copy file

const basePath = import.meta.env.BASE_URL;

export interface TeamMember {
    name: string;
    role: string;

    // 🧠 STORY / PERSONAL BIO
    bio: string;

    // ⚙️ TECH / TOOLING PREFERENCE
    techStack: {
        name: string;
        logo?: string; // bisa pakai URL icon atau emoji fallback
    }[];

    // IMAGE
    images?: {
        imageDisplay: string;
        imageDisplayHover: string;
        ImageDetail1: string;
        ImageDetail2: string;
    };

    // Social Media

    socialMediaAccounts: {
        linkedin?: { name: string; url: string };
        github?: { name: string; url: string };
        dribble?: { name: string; url: string };
    };

    // 🌍 UN SDGs (SUSTAINABILITY ALIGNMENT)
    sdgs: {
        id: number;
        title: string;
    }[];

}

export const members: TeamMember[] = [
    {
        name: 'Molly Sanders',
        role: 'Founder and CEO',
        socialMediaAccounts: {
            linkedin: { name: "Molly Sanders", url: "" },
            github: { name: "", url: "" },
            dribble: { name: "", url: "" },
        },

        images:
        {
            imageDisplay: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Molly.png`,
            imageDisplayHover: `${import.meta.env.BASE_URL}Team Member Photo/sea-salt top/Molly.png`,
            ImageDetail1: `${import.meta.env.BASE_URL}Team Member Photo/Black top/png/Molly.png`,
            ImageDetail2: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Detail Photo 2/Molly.png`,
        },

        bio: "Passionate about crafting smooth and scalable UI experiences that feel human and intuitive.",

        techStack: [
            { name: 'React', logo: '⚛️' },
            { name: 'Next.js', logo: '▲' },
            { name: 'TailwindCSS', logo: '🎨' },
        ],

        sdgs: [
            { id: 9, title: 'Industry, Innovation and Infrastructure' },
            { id: 11, title: 'Sustainable Cities and Communities' },
        ],
    },

    {
        name: 'Mark Treleaven',
        role: 'Founder & CTO',
        socialMediaAccounts: {
            linkedin: { name: "Mark Treleaven", url: "https://www.linkedin.com/in/mark-treleaven" },
            github: { name: "", url: "" },
            dribble: { name: "", url: "" },
        },

        images:
        {
            imageDisplay: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Mark.webp`,
            imageDisplayHover: `${import.meta.env.BASE_URL}Team Member Photo/sea-salt top/Mark.webp`,
            ImageDetail1: `${import.meta.env.BASE_URL}Team Member Photo/Black top/png/Mark.webp`,
            ImageDetail2: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Detail Photo 2/Mark.webp`,
        },

        bio: "CTO with an eagle eye for detail, dedicated to flawless code, seamless architecture, and driving technical excellence.",

        techStack: [
            { name: 'Figma', logo: '🎨' },
            { name: 'Adobe XD', logo: '🟥' },
        ],

        sdgs: [
            { id: 5, title: 'Gender Equality' },
            { id: 10, title: 'Reduced Inequalities' },
        ],
    },

    {
        name: 'Chandra Kusuma',
        role: 'Operational Manager',
        socialMediaAccounts: {
            linkedin: { name: "Chandra Kusuma", url: "https://www.linkedin.com/in/chandra-kusuma83/" },
            github: { name: "", url: "" },
            dribble: { name: "", url: "" },
        },

        images:
        {
            imageDisplay: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Chandra Kusuma.webp`,
            imageDisplayHover: `${import.meta.env.BASE_URL}Team Member Photo/sea-salt top/Chandra Kusuma.webp`,
            ImageDetail1: `${import.meta.env.BASE_URL}Team Member Photo/Black top/png/Chandra Kusuma.webp`,
            ImageDetail2: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Detail Photo 2/Chandra Kusuma.webp`,
        },

        bio: "Chandra is the operational backbone of 1zero, ensuring smooth project execution, efficient resources, and compliant, well-optimized daily operations so the team can focus on innovation.",

        techStack: [
            { name: 'AWS', logo: '☁️' },
            { name: 'Docker', logo: '🐳' },
            { name: 'Kubernetes', logo: '⚙️' },
        ],

        sdgs: [
            { id: 13, title: 'Climate Action' },
            { id: 14, title: 'Life Below Water' },
        ],
    },

    {
        name: 'Dharma Putra',
        role: 'Solution Architect',

        images:
        {
            imageDisplay: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Dharma Putra.webp`,
            imageDisplayHover: `${import.meta.env.BASE_URL}Team Member Photo/sea-salt top/Dharma Putra.webp`,
            ImageDetail1: `${import.meta.env.BASE_URL}Team Member Photo/Black top/png/Dharma Putra.webp`,
            ImageDetail2: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Detail Photo 2/Dharma Putra.webp`,
        },
        socialMediaAccounts: {
            linkedin: { name: "Dharma Putra", url: "" },
            github: { name: "", url: "" },
            dribble: { name: "", url: "" },
        },

        bio: "Building healthy team culture where people grow, not just work.",

        techStack: [
            { name: 'Notion', logo: '📝' },
            { name: 'Slack', logo: '💬' },
        ],

        sdgs: [
            { id: 4, title: 'Quality Education' },
            { id: 13, title: 'Climate Action' },
        ],
    },

    {
        name: 'Mutia Rosa',
        role: 'Executive Assistant',

        images:
        {
            imageDisplay: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Mutia Rosa.webp`,
            imageDisplayHover: `${import.meta.env.BASE_URL}Team Member Photo/sea-salt top/Mutia Rosa.webp`,
            ImageDetail1: `${import.meta.env.BASE_URL}Team Member Photo/Black top/png/Mutia Rosa.webp`,
            ImageDetail2: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Detail Photo 2/Mutia Rosa.webp`,
        },

        socialMediaAccounts: {
            linkedin: { name: "Mutia Rosa", url: "https://www.linkedin.com/in/mutia-rosa-73552133" },
            github: { name: "", url: "" },
            dribble: { name: "", url: "" },
        },

        bio: "As an Executive Assistant to the CTO, I’m the go-to person for managing sales data and keeping client communication smooth",

        techStack: [
            { name: 'Node.js', logo: '🟢' },
            { name: 'PostgreSQL', logo: '🐘' },
            { name: 'Redis', logo: '🔴' },
        ],

        sdgs: [
            { id: 4, title: 'Quality Education' },
            { id: 12, title: 'Responsible Consumption and Production' },
        ],
    },

    {
        name: 'Risa Rahayu',
        role: 'UI/UX Developer',
        bio: 'UI/UX Developer who sees design as intention, not decoration',

        images:
        {
            imageDisplay: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Risa Rahayu.webp`,
            imageDisplayHover: `${import.meta.env.BASE_URL}Team Member Photo/sea-salt top/Risa Rahayu.webp`,
            ImageDetail1: `${import.meta.env.BASE_URL}Team Member Photo/Black top/png/Risa Rahayu.webp`,
            ImageDetail2: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Detail Photo 2/Risa Rahayu.webp`,
        },

        socialMediaAccounts: {
            linkedin: { name: "Risa Rahayu", url: "https://www.linkedin.com/in/risarahayu" },
            github: { name: "risarahayu", url: "https://github.com/risarahayu" },
            dribble: { name: "Risa Rahayu", url: "https://dribbble.com/risa2000" },
        },

        techStack: [
            { name: 'Jira', logo: '📊' },
            { name: 'Figma', logo: '🎨' },
        ],

        sdgs: [
            { id: 4, title: 'Quality Education' },
            { id: 13, title: 'Climate Action' },
        ],
    },

    {
        name: 'Krisna Suarendra',
        role: 'Junior Fullstack Developer',

        images:
        {
            imageDisplay: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Krisna.webp`,
            imageDisplayHover: `${import.meta.env.BASE_URL}Team Member Photo/sea-salt top/Krisna.webp`,
            ImageDetail1: `${import.meta.env.BASE_URL}Team Member Photo/Black top/png/Krisna.webp`,
            ImageDetail2: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Detail Photo 2/Krisna.webp`,
        },

        socialMediaAccounts: {
            linkedin: { name: "Krisna Suarendra", url: "http://www.linkedin.com/in/i-putu-krisna-suarendra-putra-548306270" },
            github: { name: "", url: "" },
            dribble: { name: "", url: "" },
        },

        bio: "Automating infrastructure so teams can focus on building, not fixing.",

        techStack: [
            { name: 'Docker', logo: '🐳' },
            { name: 'Terraform', logo: '🌐' },
            { name: 'CI/CD', logo: '⚡' },
        ],

        sdgs: [
            { id: 4, title: 'Quality Education' },
            { id: 9, title: 'Industry, Innovation and Infrastructure' },
        ],
    },

    {
        name: 'Kadek Gunawan',
        role: 'Operasional Management',
        bio: 'Managing daily cash flow and office maintenance to keep our operations running smoothly every day',

        images:
        {
            imageDisplay: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Kadek Gunawan.webp`,
            imageDisplayHover: `${import.meta.env.BASE_URL}Team Member Photo/sea-salt top/Kadek Gunawan.webp`,
            ImageDetail1: `${import.meta.env.BASE_URL}Team Member Photo/Black top/png/Kadek Gunawan.webp`,
            ImageDetail2: `${import.meta.env.BASE_URL}Team Member Photo/Black top/Detail Photo 2/Kadek Gunawan.webp`,
        },

        socialMediaAccounts: {
            linkedin: {
                name: 'Kadek Gunawan',
                url: "https://www.linkedin.com/in/gunawan-kadek-635353318",
            },
            github: { name: "", url: "" },
            dribble: { name: "", url: "" },
        },


        techStack: [
            { name: 'Google Ads', logo: '🔵' },
            { name: 'Meta Ads', logo: '📣' },
        ],

        sdgs: [
            { id: 2, title: 'Zero Hunger' },
            { id: 8, title: 'Decent Work and Economic Growth' },
        ],
    },
];

const TeamSection: React.FC = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

    const topRow = members.slice(0, 4);
    const bottomRow = members.slice(4, 8);
    const activeMember = members[activeIdx];

    const imageSlides = [
        activeMember.images?.ImageDetail1,
        activeMember.images?.ImageDetail2,
    ].filter(Boolean);

    // AUTO ROTATE (desktop only + no pause)
    useEffect(() => {
        if (selectedMember || isPaused) return;

        const interval = setInterval(() => {
            setActiveIdx((prev) => (prev + 1) % members.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [selectedMember, isPaused]);

    // MOBILE PAUSE RESET
    useEffect(() => {
        if (!isPaused) return;

        const timeout = setTimeout(() => {
            setIsPaused(false);
        }, 180000); // optional long pause

        return () => clearTimeout(timeout);
    }, [isPaused]);

    // DESKTOP CLICK LOCK (highlight stay beberapa detik)
    const handleDesktopClick = (idx: number, member: TeamMember) => {
        setActiveIdx(idx);
        setSelectedMember(member);

        // pause auto rotate sementara
        setIsPaused(true);

        setTimeout(() => {
            setIsPaused(false);
        }, 4000); // highlight stay 4 detik
    };

    return (
        <section className="py-16 text-slate-50 relative" id="about">
            <div className="w-[75%] mx-auto space-y-10 text-center">

                <h2 className="font-sans text-2xl sm:text-6xl font-bold tracking-tight text-sea-salt">
                    {/* Injecting the dynamic title here! */}
                    {aboutCopy.en.teamTitle}
                </h2>

                {/* DESKTOP GRID */}
                <div className="hidden lg:grid grid-cols-4 gap-6 pb-4">
                    {members.map((member, idx) => (
                        <div
                            key={idx}
                            className={`min-w-[200px] p-4 rounded-lg text-start cursor-pointer transition-all duration-300 ${idx === activeIdx
                                ? "bg-brunswick-green-900"
                                : "bg-sea-salt/6  backdrop-blur border-sea-salt/20"
                                }`}
                            onClick={() => {
                                if (!isDesktop) return;
                                handleDesktopClick(idx, member);
                            }}
                        >
                            <div className="relative w-full h-60 overflow-hidden rounded-md mb-3">
                                {/* BLACK TOP IMAGE (default) */}
                                <img
                                    src={member.images.imageDisplay}
                                    className="w-full h-full object-cover transition-opacity duration-300"
                                />

                                {/* sea-salt TOP IMAGE (hover/click) */}
                                {member.images.imageDisplayHover && (
                                    <img
                                        src={member.images.imageDisplayHover}
                                        className="absolute inset-0 w-full h-full object-cover bg-sea-salt transition-opacity duration-300 opacity-0 hover:opacity-100"
                                    />
                                )}
                            </div>
                            <h3 className="text-lg font-semibold text-sea-salt">
                                {member.name}
                            </h3>
                            <p className="text-lg text-gray-300">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>

                {/* MOBILE MARQUEE */}
                <div className="lg:hidden overflow-hidden space-y-4">

                    {/* ROW 1 */}
                    <div className={`flex gap-4 ${isPaused ? "" : "animate-marquee"}`}>
                        {[...topRow, ...topRow].map((member, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setActiveIdx(idx % topRow.length);
                                    setSelectedMember(member);
                                    setIsPaused(true);
                                }}
                                className={`shrink-0 w-36 p-3 rounded-lg transition-all duration-300 text-left
        ${idx % topRow.length === activeIdx
                                        ? "bg-brunswick-green-900"
                                        : "bg-sea-salt/6  backdrop-blur border-sea-salt/20"
                                    }`}
                            >
                                {/* Image */}
                                <img
                                    src={member.images?.imageDisplay}
                                    className="w-full h-32 object-cover rounded-md mb-2"
                                />

                                {/* Name */}
                                <h3 className="text-lg font-semibold text-sea-salt leading-tight">
                                    {member.name}
                                </h3>

                                {/* Role */}
                                <p className="text-base md:text-lg  text-gray-300">
                                    {member.role}
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* ROW 2 */}
                    <div className={`flex gap-4 ${isPaused ? "" : "animate-marquee-reverse"}`}>
                        {[...bottomRow, ...bottomRow].map((member, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setActiveIdx((idx % bottomRow.length) + 4);
                                    setSelectedMember(member);
                                    setIsPaused(true);
                                }}
                                className={`shrink-0 w-36 p-3 rounded-lg transition-all duration-300 text-left
        ${((idx % bottomRow.length) + 4) === activeIdx
                                        ? "bg-brunswick-green-900"
                                        : "bg-sea-salt/6  backdrop-blur border-sea-salt/20"
                                    }`}
                            >
                                {/* Image */}
                                <img
                                    src={member.images?.imageDisplay}
                                    className="w-full h-32 object-cover rounded-md mb-2"
                                />

                                {/* Name */}
                                <h3 className="text-lg font-semibold text-sea-salt leading-tight">
                                    {member.name}
                                </h3>

                                {/* Role */}
                                <p className="text-base md:text-lg  text-gray-300">
                                    {member.role}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>



                {/* DESKTOP PREVIEW */}
                <div className="relative mt-5 overflow-hidden border border-sea-salt/20 rounded-2xl hidden lg:block">

                    {/* AURORA BACKGROUND */}
                    <div className="aurora">
                        <div className="aurora-core" />
                    </div>

                    {/* CONTENT */}
                    <div className="grid lg:grid-cols-[280px_1fr_360px] relative z-10 pt-4">

                    {/* LEFT */}
                    <div className="p-8 flex flex-col justify-between">
                        <div className="space-y-10">
                            {/* <span className="text-base md:text-lg text-start uppercase tracking-[0.25em] text-brunswick-green-500">
                                Team Member
                            </span> */}
                            <div className="space-y-6">
                                <h3 className="text-2xl text-start font-bold text-sea-salt">
                                    {activeMember.name}
                                </h3>
                                <p className="text-base md:text-lg text-start text-sea-salt/90">
                                    {activeMember.role}
                                </p>
                            </div>
                        </div>

                        {/* SOCIAL */}
                        <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-sea-salt mb-4 text-start">
                            Social Media
                        </h4>

                        <div className="space-y-3">

                            {activeMember.socialMediaAccounts.linkedin.name && (
                            <a
                                href={activeMember.socialMediaAccounts.linkedin.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 text-sea-salt/80 hover:text-brunswick-green-500 transition-colors"
                            >
                                <Icon icon="mdi:linkedin" width="20" />
                                <span>LinkedIn</span>
                            </a>
                            )}

                            {activeMember.socialMediaAccounts.github?.name && (
                            <a
                                href={activeMember.socialMediaAccounts.github.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 text-sea-salt/80 hover:text-brunswick-green-500 transition-colors"
                            >
                                <Icon icon="mdi:github" width="20" />
                                <span>GitHub</span>
                            </a>
                            )}

                            {activeMember.socialMediaAccounts.dribble?.name && (
                            <a
                                href={activeMember.socialMediaAccounts.dribble.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 text-sea-salt/80 hover:text-brunswick-green-500 transition-colors"
                            >
                                <Icon icon="mdi:dribbble" width="20" />
                                <span>Dribbble</span>
                            </a>
                            )}

                        </div>
                        </div>

                    </div>

                    {/* CENTER IMAGE */}
                    <div className="relative flex items-end justify-center">
                        {activeMember.images?.ImageDetail1 && (
                        <img
                            src={activeMember.images.ImageDetail1}
                            alt={activeMember.name}
                            className="w-full h-[420px] object-contain object-bottom"
                        />
                        )}
                    </div>

                    {/* RIGHT */}
                    <div className="p-8 flex flex-col justify-between space-y-10">

                        {/* BIO */}
                        <div className="space-y-6 text-start">
                        <h4 className="text-lg font-semibold text-sea-salt">
                            About
                        </h4>

                        <p className="text-base md:text-lg text-start text-sea-salt/90 leading-relaxed">
                            {activeMember.bio}
                        </p>
                        </div>

                        {/* SDGs */}
                        <div className="space-y-6">

                        <h4 className="text-lg font-semibold text-sea-salt text-start">
                            Sustainable Development Goals
                        </h4>

                        <div className="flex flex-wrap gap-2">
                            {activeMember.sdgs.map((sdg) => (
                                <img
                                    key={sdg.id}
                                    src={`${import.meta.env.BASE_URL}E SDG Icons WEB/E-WEB-Goal-${String(sdg.id).padStart(2, "0")}.png`}
                                    alt={`SDG ${sdg.id}`}
                                    className="w-16 h-16 object-contain"
                                />
                            ))}
                        </div>

                        </div>

                    </div>

                    </div>
                </div>

                {/* MODAL ONLY MOBILE + TABLET */}
                {selectedMember && !isDesktop && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-raisin-black-900/80 backdrop-blur-sm p-6">

                        <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden border border-brunswick-green-900 bg-raisin-black-900-950 shadow-2xl">

                            {/* Close button */}
                            <button
                                onClick={() => {
                                    setSelectedMember(null);
                                    setIsPaused(false);
                                }}
                                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-raisin-black-900/60 hover:bg-raisin-black-900/60 text-sea-salt flex items-center justify-center transition"
                            >
                                ✕
                            </button>

                            {/* Layout */}
                            <div className="grid md:grid-cols-[240px_1fr]">

                                {/* Image */}
                                <div className="relative h-64 md:h-full">
                                    <img
                                        src={selectedMember.images?.imageDisplay}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col space-y-5">

                                    {/* Header */}
                                    <div className="space-y-10">
                                        <span className="float-left text-base md:text-lg text-start uppercase tracking-[0.25em] text-brunswick-green-500">
                                            Team Member
                                        </span>
                                        <div className="space-y-6">
                                            <h3 className="mt-3 text-2xl md:text-3xl font-bold text-sea-salt">
                                                {selectedMember.name}
                                            </h3>

                                            <p className="mt-1 text-base md:text-lg text-start text-raisin-black-900-400">
                                                {selectedMember.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bio */}
                                    <div className="text-lg text-sea-salt/90 leading-relaxed">
                                        <p>{selectedMember.bio}</p>
                                    </div>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-base md:text-lg  text-raisin-black-900-500 mr-1">Tech:</span>

                                        {selectedMember.techStack?.map((tech) => (
                                            <div
                                                key={tech.name}
                                                className="flex items-center gap-1 px-2 py-1 rounded-md bg-sea-salt/5 border border-sea-salt/10 text-base md:text-lg  text-sea-salt/90"
                                            >
                                                <span>{tech.logo}</span>
                                                <span>{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* SDGs */}
                                    <div className="flex flex-wrap gap-2">
                                        {selectedMember.sdgs?.map((sdg) => (
                                            <span
                                                key={sdg.id}
                                                className="px-3 py-1 text-[11px] rounded-full bg-brunswick-green-500/10 text-brunswick-green-500 border border-brunswick-green-500/20"
                                            >
                                                SDG {sdg.id} • {sdg.title}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                )}

                <CtaBanner />


            </div>
        </section>
    );
};

export default TeamSection;

interface TeamMember {
    image?: string;
}
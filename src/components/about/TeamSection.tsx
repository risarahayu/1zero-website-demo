import React, { useState, useEffect } from 'react';
import TeamBubble from './TeamBubble'; // optional, kept for potential reuse

interface TeamMember {
    name: string;
    role: string;
    image: string;

    // 🧠 STORY / PERSONAL BIO
    bio: string;

    // ⚙️ TECH / TOOLING PREFERENCE
    techStack: {
        name: string;
        logo?: string; // bisa pakai URL icon atau emoji fallback
    }[];

    // 🌍 UN SDGs (SUSTAINABILITY ALIGNMENT)
    sdgs: {
        id: number;
        title: string;
    }[];
}

const members: TeamMember[] = [
    {
        name: 'Aris Setiawan',
        role: 'Frontend Developer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400',

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
        name: 'Siti Sarah',
        role: 'UI/UX Designer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400',

        bio: "Designing meaningful digital experiences that connect emotion, usability, and clarity.",

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
        name: 'Budi Hartono',
        role: 'System Architect & Cloud Expert',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400',

        bio: "Building scalable distributed systems that stay reliable under millions of requests.",

        techStack: [
            { name: 'AWS', logo: '☁️' },
            { name: 'Docker', logo: '🐳' },
            { name: 'Kubernetes', logo: '⚙️' },
        ],

        sdgs: [
            { id: 9, title: 'Industry, Innovation and Infrastructure' },
            { id: 13, title: 'Climate Action' },
        ],
    },

    {
        name: 'Linda Wijaya',
        role: 'People & Culture Manager',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400',

        bio: "Building healthy team culture where people grow, not just work.",

        techStack: [
            { name: 'Notion', logo: '📝' },
            { name: 'Slack', logo: '💬' },
        ],

        sdgs: [
            { id: 3, title: 'Good Health and Well-being' },
            { id: 8, title: 'Decent Work and Economic Growth' },
        ],
    },

    {
        name: 'Rudi Kurnia',
        role: 'Backend Engineer',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400',

        bio: "Focused on building resilient APIs and backend systems that scale effortlessly.",

        techStack: [
            { name: 'Node.js', logo: '🟢' },
            { name: 'PostgreSQL', logo: '🐘' },
            { name: 'Redis', logo: '🔴' },
        ],

        sdgs: [
            { id: 9, title: 'Industry, Innovation and Infrastructure' },
        ],
    },

    {
        name: 'Dewi Lestari',
        role: 'Product Manager',
        image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=400',

        bio: "Turning ideas into impactful products that solve real human problems.",

        techStack: [
            { name: 'Jira', logo: '📊' },
            { name: 'Figma', logo: '🎨' },
        ],

        sdgs: [
            { id: 8, title: 'Decent Work and Economic Growth' },
            { id: 12, title: 'Responsible Consumption and Production' },
        ],
    },

    {
        name: 'Andi Pratama',
        role: 'DevOps Engineer',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400',

        bio: "Automating infrastructure so teams can focus on building, not fixing.",

        techStack: [
            { name: 'Docker', logo: '🐳' },
            { name: 'Terraform', logo: '🌐' },
            { name: 'CI/CD', logo: '⚡' },
        ],

        sdgs: [
            { id: 9, title: 'Industry, Innovation and Infrastructure' },
        ],
    },

    {
        name: 'Maya Sari',
        role: 'Marketing Lead',
        image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400',

        bio: "Connecting brand stories with people through meaningful digital narratives.",

        techStack: [
            { name: 'Google Ads', logo: '🔵' },
            { name: 'Meta Ads', logo: '📣' },
        ],

        sdgs: [
            { id: 4, title: 'Quality Education' },
            { id: 17, title: 'Partnerships for the Goals' },
        ],
    },
];

const TeamSection: React.FC = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);

    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

    const topRow = members.slice(0, 4);
    const bottomRow = members.slice(4, 8);
    const activeMember = members[activeIdx];

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
    const handleDesktopClick = (idx: number) => {
        setActiveIdx(idx);

        // pause auto rotate sementara
        setIsPaused(true);

        setTimeout(() => {
            setIsPaused(false);
        }, 4000); // highlight stay 4 detik
    };

    return (
        <section className="py-12 text-slate-50 relative">
            <div className="w-[75%] mx-auto">

                <h2 className="text-4xl font-bold text-center mb-8">
                    Our Team
                </h2>

                {/* DESKTOP GRID */}
                <div className="hidden lg:grid grid-cols-4 gap-4 px-4 pb-4">
                    {members.map((member, idx) => (
                        <div
                            key={idx}
                            className={`min-w-[200px] p-4 rounded-lg cursor-pointer transition-all duration-300 ${idx === activeIdx
                                ? "bg-brunswick-green-900"
                                : "bg-white/10"
                                }`}
                            onMouseEnter={() => setActiveIdx(idx)}
                            onClick={() => {
                                if (!isDesktop) return;
                                handleDesktopClick(idx);
                            }}
                        >
                            <img
                                src={member.image}
                                className="w-full h-60 object-cover rounded-md mb-3"
                            />
                            <h3 className="text-lg font-semibold text-white">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-300">
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
                                        : "bg-white/10"
                                    }`}
                            >
                                {/* Image */}
                                <img
                                    src={member.image}
                                    className="w-full h-32 object-cover rounded-md mb-2"
                                />

                                {/* Name */}
                                <h3 className="text-sm font-semibold text-white leading-tight">
                                    {member.name}
                                </h3>

                                {/* Role */}
                                <p className="text-xs text-gray-300">
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
                                        : "bg-white/10"
                                    }`}
                            >
                                {/* Image */}
                                <img
                                    src={member.image}
                                    className="w-full h-32 object-cover rounded-md mb-2"
                                />

                                {/* Name */}
                                <h3 className="text-sm font-semibold text-white leading-tight">
                                    {member.name}
                                </h3>

                                {/* Role */}
                                <p className="text-xs text-gray-300">
                                    {member.role}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* DESKTOP PREVIEW */}
                <div className="hidden lg:block">
                    {activeMember && (
                        <div className="mt-10 mx-auto">
                            <div className="group relative overflow-hidden rounded-[14px] border border-brunswick-green-900 bg-zinc-950">

                                <div className="absolute inset-0 bg-gradient-to-r from-brunswick-green-900 via-transparent to-transparent" />

                                <div className="grid md:grid-cols-[280px_1fr] relative">

                                    <div className="relative">
                                        <img
                                            src={activeMember.image}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="p-8 md:p-10 flex flex-col justify-center space-y-5">

                                        {/* Label */}
                                        <div>
                                            <span className="text-xs uppercase tracking-[0.25em] text-brunswick-green-500">
                                                Team Member
                                            </span>

                                            <h3 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                                                {activeMember.name}
                                            </h3>

                                            <p className="mt-2 text-zinc-400 text-sm md:text-base">
                                                {activeMember.role}
                                            </p>
                                        </div>

                                        {/* Story / Bio */}
                                        <div className="text-sm text-zinc-300 leading-relaxed">
                                            <p>
                                                {activeMember.bio}
                                            </p>
                                        </div>

                                        {/* Tech stack / logo */}
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs text-zinc-500">Tech:</span>

                                            {activeMember.techStack.map((tech) => (
                                                <div
                                                    key={tech.name}
                                                    className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-sm text-zinc-300"
                                                >
                                                    <span>{tech.logo}</span>
                                                    <span>{tech.name}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* SDG badges */}
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {activeMember.sdgs.map((sdg) => (
                                                <span
                                                    key={sdg.id}
                                                    className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
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
                </div>

                {/* MODAL ONLY MOBILE + TABLET */}
                {selectedMember && !isDesktop && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6">

                        <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden border border-brunswick-green-900 bg-zinc-950 shadow-2xl">

                            {/* Close button */}
                            <button
                                onClick={() => {
                                    setSelectedMember(null);
                                    setIsPaused(false);
                                }}
                                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition"
                            >
                                ✕
                            </button>

                            {/* Layout */}
                            <div className="grid md:grid-cols-[240px_1fr]">

                                {/* Image */}
                                <div className="relative h-64 md:h-full">
                                    <img
                                        src={selectedMember.image}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col space-y-5">

                                    {/* Header */}
                                    <div>
                                        <span className="text-xs uppercase tracking-[0.25em] text-brunswick-green-500">
                                            Team Member
                                        </span>

                                        <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">
                                            {selectedMember.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-zinc-400">
                                            {selectedMember.role}
                                        </p>
                                    </div>

                                    {/* Bio */}
                                    <div className="text-sm text-zinc-300 leading-relaxed">
                                        <p>{selectedMember.bio}</p>
                                    </div>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-xs text-zinc-500 mr-1">Tech:</span>

                                        {selectedMember.techStack?.map((tech) => (
                                            <div
                                                key={tech.name}
                                                className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-300"
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
                                                className="px-3 py-1 text-[11px] rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
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

            </div>
        </section>
    );
};

export default TeamSection;

interface TeamMember {
    name: string;
    role: string;
    image: string;
}
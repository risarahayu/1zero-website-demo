import React, { useState } from 'react';
import TeamBubble from './TeamBubble'; // optional, kept for potential reuse

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const members: TeamMember[] = [
    { name: 'Aris Setiawan', role: 'Frontend Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400' },
    { name: 'Siti Sarah', role: 'UI/UX Designer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400' },
    { name: 'Budi Hartono', role: 'System Architect & Cloud Expert', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400' },
    { name: 'Linda Wijaya', role: 'People & Culture Manager', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400' },
    { name: 'Rudi Kurnia', role: 'Backend Engineer', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400' },
    { name: 'Dewi Lestari', role: 'Product Manager', image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=400' },
    { name: 'Andi Pratama', role: 'DevOps Engineer', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400' },
    { name: 'Maya Sari', role: 'Marketing Lead', image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400' },
];

const TeamSection: React.FC = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const activeMember = members[activeIdx];

    return (
        <section className="py-12  text-slate-50 relative">
            <div className="w-[75%] mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">Our Team</h2>
                {/* Horizontal card list */}
                <div className="grid grid-cols-4 gap-4 px-4 pb-4">
                    {members.map((member, idx) => (
                        <div
                            key={idx}
                            className={`min-w-[200px] p-4 rounded-lg cursor-pointer transition-all duration-300 ${idx === activeIdx ? 'bg-indigo-600/30' : 'bg-white/10'}`}
                            onMouseEnter={() => setActiveIdx(idx)}
                        >
                            <img src={member.image} alt={member.name} className="w-full h-40 object-cover rounded-md mb-3" />
                            <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                            <p className="text-sm text-gray-300">{member.role}</p>
                        </div>
                    ))}
                </div>
                {/* Carousel preview for active member */}
                {activeMember && (
                    <div className="mt-8 h-[80vh] grid md:grid-cols-2 rounded-lg overflow-hidden shadow-lg bg-zinc-900">

                        {/* Left - Image */}
                        <div className="relative h-[40vh] md:h-full">
                            <img
                                src={activeMember.image}
                                alt={activeMember.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right - Info */}
                        <div className="flex flex-col justify-center p-8 md:p-12 text-white">
                            <p className="text-sm uppercase tracking-widest text-zinc-400">
                                Team Member
                            </p>

                            <h3 className="mt-2 text-4xl font-bold">
                                {activeMember.name}
                            </h3>

                            <p className="mt-3 text-xl text-zinc-300">
                                {activeMember.role}
                            </p>

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
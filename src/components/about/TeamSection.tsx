import React from 'react';
import TeamBubble from './TeamBubble'; // Pastikan file TeamBubble.tsx sejajar dengan file ini

interface TeamSectionProps {
    lang: 'id' | 'en';
}

const TeamSection: React.FC<TeamSectionProps> = ({ lang }) => {
    const title = lang === 'id' ? 'Anggota Tim Kami' : 'Our Visionaries';

    return (
        <section className="py-32 relative overflow-hidden min-h-[900px]">
            <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .bubble-member {
          animation: float 6s ease-in-out infinite;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .bubble-member:hover { z-index: 50; transform: scale(1.1); }
        
        .chat-overlay {
          opacity: 0; transform: translateY(10px) scale(0.9);
          transition: all 0.3s ease; pointer-events: none;
        }
        .bubble-member:hover .chat-overlay { opacity: 1; transform: translateY(0) scale(1); }
      `}</style>

            <div className="text-center mb-20 relative z-10">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="text-gray-500 mt-2">Tap/Hover for details</p>
            </div>

            <div className="max-w-6xl mx-auto relative h-[600px]">
                {/* Gambar Latar Tengah */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] opacity-20 pointer-events-none">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover rounded-full filter grayscale contrast-125" alt="Team Background" />
                </div>

                {/* Pemanggilan Komponen Tim */}
                <TeamBubble
                    name="Aris Setiawan"
                    role="Frontend Developer"
                    quote="Clean code is my religion."
                    image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
                    positionClass="top-[10%] left-[15%]"
                    borderColorClass="border-indigo-500/30"
                />

                <TeamBubble
                    name="Siti Sarah"
                    role="UI/UX Designer"
                    quote="Designing for inclusion."
                    image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300"
                    positionClass="bottom-[20%] left-[5%]"
                    delayClass="-1s"
                    borderColorClass="border-emerald-500/30"
                />

                <TeamBubble
                    name="Budi Hartono"
                    role="System Architect & Cloud expert"
                    quote="Building robust architectures."
                    image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300"
                    positionClass="top-[5%] right-[20%]"
                    delayClass="-3s"
                    borderColorClass="border-purple-500/30"
                    overlayPositionClass="right-full mr-4 top-1/2 -translate-y-1/2"
                />

                <TeamBubble
                    name="Linda Wijaya"
                    role="People & Culture Manager"
                    quote="Empowering our humans."
                    image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
                    positionClass="bottom-[15%] right-[10%]"
                    delayClass="-1.5s"
                    borderColorClass="border-pink-500/30"
                    overlayPositionClass="right-full mr-4 top-1/2 -translate-y-1/2"
                />

                <TeamBubble
                    name="Linda Wijaya"
                    role="People & Culture Manager"
                    quote="Empowering our humans."
                    image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
                    positionClass="bottom-[-20%] right-[20%]"
                    delayClass="-1.5s"
                    borderColorClass="border-pink-500/30"
                    overlayPositionClass="right-full mr-4 top-1/2 -translate-y-1/2"
                />



            </div>
        </section>
    );
};

export default TeamSection;
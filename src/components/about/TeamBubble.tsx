import React from 'react';

// determine props that will receive
// determine the types

interface TeamBubbleProps {
    name: string;
    role: string;
    quote?: string;
    image: string;
    positionClass: string;
    delayClass?: string;
    borderColorClass: string;
    overlayPositionClass?: string; // Prop opsional untuk mengatur posisi overlay secara dinamis
}

// make component
// tell react this is a component 
// FC is function component
const TeamBubble: React.FC<TeamBubbleProps> = ({
    // destructuring instead props.name
    name, role, quote, image, positionClass, delayClass = '', borderColorClass,
    overlayPositionClass = 'left-full ml-4 top-1/2 -translate-y-1/2' // Default: di sebelah kanan, sejajar tengah
}) => {
    return (
        <div className={`bubble-member absolute group ${positionClass}`} style={delayClass ? { animationDelay: delayClass } : {}}>
            {/*photo circle*/}
            <div className={`w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 ${borderColorClass} overflow-hidden shadow-2xl`}>
                <img src={image} className="w-full h-full object-cover" alt={name} />
            </div>
            {/* detail - Selalu muncul dari awal (tanpa class chat-overlay) dan diposisikan tepat di sebelah gambar */}
            <div className={`absolute ${overlayPositionClass} w-48 glass p-4 rounded-2xl rounded-bl-none shadow-2xl border border-sea-salt/20 z-20`}>
                <p className="font-bold text-sm mb-1">{name}</p>
                <p className="text-base sm:text-lg text-raisin-black-800 mb-2">{quote || role}</p>
                <button className="text-base bg-sea-salt text-black px-3 py-1 rounded-full font-bold hover:bg-indigo-400 hover:text-sea-salt transition">See Detail</button>
            </div>
        </div>
    );
};

export default TeamBubble;

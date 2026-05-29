import React, { useState } from 'react';
import HeroAbout from '../components/about/Hero';
import TeamSection from '../components/about/TeamSection';
import Header from "../components/Header";
import BookingModal from '../components/BookingModal';

const AboutUs: React.FC = () => {
    // State untuk bahasa (default 'id')
    const [lang, setLang] = useState<'id' | 'en'>('id');
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const handleOpenBooking = () => {
        setIsBookingOpen(true);
    };
    const handleCloseBooking = () => {
        setIsBookingOpen(false);
    };

    return (
        // Wrapper utama: Saya memasukkan warna background dan text dari tag <body> HTML kamu ke sini
        <div className="bg-[#020617] text-slate-50 min-h-screen overflow-x-hidden font-sans relative">

            {/* Memasukkan CSS kustom langsung di dalam komponen agar tidak repot pindah file */}
            <style>{`
        .aurora {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          z-index: 0; filter: blur(120px); opacity: 0.4; pointer-events: none;
        }
        .blob { position: absolute; border-radius: 50%; animation: move 20s infinite alternate; }
        .b1 { width: 600px; height: 600px; background: #4338ca; top: -10%; left: -10%; }
        .b2 { width: 500px; height: 500px; background: #7e22ce; bottom: -10%; right: -10%; }
        
        @keyframes move { from { transform: translate(0,0); } to { transform: translate(100px, 100px); } }
      `}</style>

            {/* Aurora Background */}
            <div className="aurora">
                <div className="blob b1"></div>
                <div className="blob b2"></div>
            </div>

            {/* Konten utama di-wrap agar ada di atas background aurora (z-10) */}
            <div className="relative z-10">

                {/* Navigation */}
                <Header onOpenBooking={handleOpenBooking} />


                {/* Hero Section */}
                <HeroAbout lang={lang} />

                {/* Team Section */}
                <TeamSection lang={lang} />

                <footer className="text-center py-20 border-t border-white/5 opacity-40 text-sm relative z-10">
                    &copy; 2024 AuroraStudio Indonesia. Made with passion.
                </footer>
            </div>

        </div>
    );
};

export default AboutUs;
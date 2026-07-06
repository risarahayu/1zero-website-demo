import React, { useState, useEffect } from 'react';
import HeroAbout from '../components/about/Hero';
import TeamSection from '../components/about/TeamSection';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingModal from '../components/BookingModal';
import '../css/about.css';

const AboutUs: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // State untuk bahasa (default 'id')
    const [lang, setLang] = useState<'id' | 'en'>('en');
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const handleOpenBooking = () => {
        setIsBookingOpen(true);
    };
    const handleCloseBooking = () => {
        setIsBookingOpen(false);
    };

    return (
        <div className="text-slate-50 min-h-screen overflow-x-hidden font-sans relative">

            {/* Aurora Background */}
            <div className="aurora">
                <div className="aurora-layer aurora-1"></div>
                <div className="aurora-layeraurora-2"></div>
            </div>

            <div className="relative z-10">

                {/* Navigation */}
                <Header onOpenBooking={handleOpenBooking} />


                {/* Hero Section */}
                <HeroAbout lang={lang} />

                {/* Team Section */}
                <TeamSection lang={lang} />

                <Footer />
            </div>

        </div>
    );
};

export default AboutUs;
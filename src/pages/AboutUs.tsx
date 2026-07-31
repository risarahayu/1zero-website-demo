import React, { useState, useEffect } from 'react';
import HeroAbout from '../components/about/Hero';
import TeamSection from '../components/about/TeamSection';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingModal from '../components/BookingModal';
import '../css/about.css';
import { ActivitySection } from '../components/activity/ActivitySection';
import CtaBanner from '../components/about/CTA Banner';

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
        <div className="text-slate-50 min-h-screen overflow-x-hidden font-sans relative w-[75%] mx-auto py-16">

            {/* Aurora Background */}
            <div className="aurora">
                <div className="aurora-layer aurora-1"></div>
                <div className="aurora-layeraurora-2"></div>
            </div>

            <div className="relative z-10">

                {/* Navigation */}


                {/* Hero Section */}
                <HeroAbout lang={lang} />

                {/* Team Section */}
                <TeamSection lang={lang} />

                <ActivitySection />
                <CtaBanner />

            </div>

        </div>
    );
};

export default AboutUs;
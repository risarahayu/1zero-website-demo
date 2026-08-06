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
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
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
        <div className="text-slate-50 min-h-screen overflow-x-hidden font-sans relative mx-auto px-6 py-16">

            {/* Aurora Background */}
            <div className="aurora">
                <div className="aurora-layer aurora-1"></div>
                <div className="aurora-layeraurora-2"></div>
            </div>

            <div className="relative">

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
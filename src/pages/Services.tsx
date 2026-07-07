import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ServicesHero from "../components/services/Hero";
import Offer from "../components/services/Offer";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import WhatYouGet from "../components/services/WhatYouGet";
import Testimonials from "../components/Testimonials";

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="text-raisin-black-800 min-h-screen overflow-x-hidden font-sans relative" id="services">
      {/* Aurora Background */}
      <div className="aurora">
        <div className="aurora-layer aurora-1"></div>
        <div className="aurora-layer aurora-2"></div>
      </div>

      <div className="relative z-10">
        {/* <Header onOpenBooking={handleOpenBooking} /> */}
        <ServicesHero />
        <Offer />
        <WhatYouGet />
        <Testimonials />
        {/* <Footer /> */}
        <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
      </div>
    </div>
  );
};

export default Services;

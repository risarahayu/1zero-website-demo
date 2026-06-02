import React, { useState, useEffect } from "react";
import Services from "./pages/Services";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Portfolio from "./components/Portfolio";
import WhyUs from "./components/WhyUs";
import Workflow from "./components/Workflow";
import Testimonials from "./components/Testimonials";
import Cases from "./components/Cases";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  // Listen to hash changes for navigation
  useEffect(() => {
    const updatePage = () => {
      const hash = window.location.hash.replace("#", "");
      setCurrentPage(hash || "home");
    };
    updatePage();
    window.addEventListener("hashchange", updatePage);
    return () => window.removeEventListener("hashchange", updatePage);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-green-primary selection:text-neutral-950">
      {/* Primary Header/Nav bar */}
      <Header onOpenBooking={handleOpenBooking} />

      <main>
        {/* Render Services page when hash is #services */}
        {currentPage === "services" ? (
          <Services onOpenBooking={handleOpenBooking} />
        ) : (
          <>
            {/* Hero Section */}
            <Hero onOpenBooking={handleOpenBooking} />

            {/* Core Solutions Bento Grid */}
            <Products onOpenBooking={handleOpenBooking} />

            {/* Portfolio Showcase Section */}
            <Portfolio onOpenBooking={handleOpenBooking} />

            {/* Team and values split Section */}
            <WhyUs onOpenBooking={handleOpenBooking} />

            {/* Connective Collaborative Process Section */}
            <Workflow />

            {/* User feedback Testimonials sliding Grid */}
            <Testimonials />

            {/* Case Studies grid */}
            <Cases onOpenBooking={handleOpenBooking} />

            {/* Deep Green Curved CTA scheduling Section */}
            <CTA onOpenBooking={handleOpenBooking} />
          </>
        )}
      </main>

      {/* Corporate footer details */}
      <Footer />

      {/* Interactive schedules callback drawer overlay */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

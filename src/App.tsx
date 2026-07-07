import React, { useState, useEffect } from "react";
import Services from "./pages/Services";
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
import Header from "./components/Header";
import ContactPage from "./pages/ContactUs";
import Portfolios from "./pages/Portfolios";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleOpenBooking = () => {
    window.open(
      "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3gWtjZcsb5BZb78RjU3eDJJcflGsC7oDWdx__RBcaDFHzZ1ivl2IZrigY4R9-r63sLfDdRjvmQ",
      "_blank",
      "noopener,noreferrer"
    );
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
    <div className="relative min-h-screen selection:bg-brunswick-green-900 selection:text-sea-salt">
      {/* Primary Header/Nav bar */}
      <Header onOpenBooking={handleOpenBooking} />

      <main>
        {/* Route handling based on hash */}
        {currentPage === "services" ? (
          <Services onOpenBooking={handleOpenBooking} />
        ) : currentPage === "contact" ? (
          <ContactPage />
        ) : currentPage === "portfolio" || currentPage === "portfolios" ? (
          <Portfolios />
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
            {/* <Testimonials /> */}

            {/* Case Studies grid */}
            <Cases />

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

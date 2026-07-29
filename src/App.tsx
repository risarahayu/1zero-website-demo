import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

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
import WorkflowHorizontal from "./components/WorkflowHorizontal";
import AboutUs from "./pages/AboutUs";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

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


  return (
    <div className="relative min-h-screen selection:bg-brunswick-green-900 selection:text-sea-salt">
      {/* Primary Header/Nav bar */}
      <Header onOpenBooking={handleOpenBooking} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero onOpenBooking={handleOpenBooking} />

                <Products onOpenBooking={handleOpenBooking} />

                <Portfolio onOpenBooking={handleOpenBooking} />

                <WhyUs onOpenBooking={handleOpenBooking} />

                <WorkflowHorizontal />

                <Testimonials />

                <Cases />

                <CTA onOpenBooking={handleOpenBooking} />
              </>
            }
          />

          <Route
            path="/about"
            element={<AboutUs />}
          />

          <Route
            path="/services"
            element={
              <Services />
            }
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

          <Route
            path="/portfolio"
            element={<Portfolios />}
          />

        </Routes>
      </main>

      {/* Corporate footer details */}
      <Footer />

      {/* Interactive schedules callback drawer overlay */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

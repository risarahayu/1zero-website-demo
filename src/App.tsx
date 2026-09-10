import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
import Header from "./components/Header";
import ContactPage from "./pages/ContactUs";
import Portfolios from "./pages/Portfolios";
import WorkflowHorizontal from "./components/WorkflowHorizontal";
import AboutUs from "./pages/AboutUs";
import BookingPage from "./pages/BookingPage";
import SEO from "./components/SEO";
import NotFound from "./pages/NotFound";

export default function App() {
  const navigate = useNavigate();

  const handleOpenBooking = () => {
    navigate("/book");
  };


  return (
    <div className="relative min-h-screen selection:bg-brunswick-green-900 selection:text-sea-salt">
      {/* Primary Header/Nav bar */}
      <SEO />
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

          <Route
            path="/book"
            element={<BookingPage />}
          />
          <Route path="*" element={<NotFound />} />


        </Routes>
      </main>

      {/* Corporate footer details */}
      <Footer />

    </div>
  );
}

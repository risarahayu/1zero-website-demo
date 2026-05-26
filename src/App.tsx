import { useState } from "react";
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

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="relative min-h-screen selection:bg-green-primary selection:text-neutral-950">
      {/* Background Decorative Mesh Grids */}
      <div className="absolute top-0 right-1/4 -z-20 h-[600px] w-[500px] rounded-full aurora-blur-1 blur-[130px] opacity-40 animate-slow-pan" />
      <div className="absolute bottom-1/3 left-1/4 -z-20 h-[600px] w-[500px] rounded-full aurora-blur-2 blur-[130px] opacity-20 animate-slow-pan" />

      {/* Primary Header/Nav bar */}
      <Header onOpenBooking={handleOpenBooking} />

      <main>
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
      </main>

      {/* Corporate footer details */}
      <Footer />

      {/* Interactive schedules callback drawer popup overlay */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

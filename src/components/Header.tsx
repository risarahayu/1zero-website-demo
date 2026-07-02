import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navLinks } from "../data";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import Logo1Zero from "./Logo1Zero";
import { headerCopy } from "../copy";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative w-full z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col items-center">


          {/* Navigation Pill Container */}
          <div
            className={`w-full max-w-3xl  mt-4 ${isScrolled
              ? "fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-xl px-2"
              : "relative"
              }`}
          >
            <div className={`flex items-center justify-between mx-auto bg-[#0a0a0aba]/90 border border-neutral-800/80 backdrop-blur-md rounded-full px-5 py-2.5 shadow-xl transition-all ${isScrolled ? "scale-95 shadow-emerald-500/5 shadow-2xl" : ""
              }`}>
              {/* Left empty block or indicator */}
              <div
                className={`sm:flex items-center gap-1.5 font-sans text-[9px] text-neutral-500 transition-all duration-300 ${isScrolled
                  ? "opacity-0 scale-90 w-0 overflow-hidden"
                  : "opacity-100 scale-100"
                  }`}
              >
                <Logo1Zero />
              </div>

              {/* Navigation Items */}
              <nav className="hidden sm:flex items-center gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-sans text-base font-semibold text-neutral-400 hover:text-white hover:underline transition-all tracking-wide"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Mobile trigger */}
              <button
                id="mobile-menu-trigger"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-1 px-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-full sm:hidden transition-all text-base ${isScrolled ? "mr-auto" : ""}`}
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>

              {/* CTA Booking Button inside Header Container */}
              <button
                id="header-booking-btn"
                onClick={onOpenBooking}
                className="flex items-center gap-1 p-1 px-3.5 bg-green-primary/10 hover:bg-brunswick-green-primary hover:text-sea-salt border border-brunswick-green-500 text-brunswick-green-500  hover:text-brunswick-green-800 font-sans font-semibold text-base rounded-full transition-all cursor-pointer shadow-sm hover:shadow-md hover:shadow-emerald-500/10"
              >
                {headerCopy.bookUsBtn}
                <ArrowUpRight className="h-3 w-3 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="sm:hidden fixed top-[90px] left-0 w-full bg-[#0a0a0c] border-b border-neutral-800 backdrop-blur-lg overflow-y-auto z-50 shadow-2xl"
          >
            <div className="p-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-base font-semibold text-neutral-300 hover:text-emerald-400 tracking-wide transition-colors py-2 border-b border-neutral-900/60"
                >
                  {link.label}
                </a>
              ))}
              {/* <div className="pt-3 flex flex-col gap-2">
                <button
                  id="mobile-drawer-book-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full text-center p-3 rounded-xl bg-green-primary text-black font-sans font-extrabold text-base tracking-wider uppercase transition-colors hover:bg-emerald-600 block cursor-pointer"
                >
                  Free Strategy Session
                </button>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

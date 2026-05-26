import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, Globe, User, Mail, Building, CheckCircle2, Sparkles, Video, ChevronRight, AlertCircle } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timezone, setTimezone] = useState("UTC+7 (Jakarta / Western Indonesia)");

  // User info form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  const [errorStatus, setErrorStatus] = useState("");

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:30 AM", "01:30 PM", "03:00 PM", "04:30 PM"
  ];

  const getUpcomingDays = () => {
    const days = [];
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Start showing days from tomorrow
    for (let i = 1; i <= 6; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);

      // Skip Sundays for business calls
      if (d.getDay() === 0) continue;

      days.push({
        rawDate: d.toISOString().split('T')[0],
        dayName: weekdays[d.getDay()],
        dayNum: d.getDate(),
        month: months[d.getMonth()]
      });
    }
    return days.slice(0, 5); // return 5 working days
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!selectedDate || !selectedTime) {
        setErrorStatus("Please select both a date and an available time slot.");
        return;
      }
      setErrorStatus("");
      setStep(2);
    }
  };

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorStatus("Full name and email address are required.");
      return;
    }
    setErrorStatus("");
    setStep(3); // Success step
  };

  const resetState = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setName("");
    setEmail("");
    setCompany("");
    setNotes("");
    setErrorStatus("");
  };

  const cleanClose = () => {
    resetState();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        id="booking-modal-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={(e) => {
          if (e.target instanceof HTMLElement && e.target.id === "booking-modal-overlay") {
            cleanClose();
          }
        }}
      >
        <motion.div
          id="booking-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-neutral-800 bg-[#0c0c0c] p-6 shadow-2xl md:p-8"
        >
          {/* Subtle green aurora inside modal */}
          <div className="absolute -top-32 -left-32 -z-10 h-64 w-64 rounded-full bg-green-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 -z-10 h-64 w-64 rounded-full bg-green-primary/5 blur-3xl" />

          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-primary/10 text-sea-salt">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-bold text-white">Strategy Session</h3>
                <p className="font-sans text-base uppercase tracking-wider text-neutral-400">30-Min Consultation</p>
              </div>
            </div>
            <button
              id="close-modal-btn"
              onClick={cleanClose}
              className="p-1 px-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Stepper Indicator */}
          {step < 3 && (
            <div className="flex items-center justify-center gap-2 py-4">
              <div className={`h-1.5 w-12 rounded-full transition-all duration-300 ${step >= 1 ? "bg-green-primary" : "bg-neutral-800"}`} />
              <div className={`h-1.5 w-12 rounded-full transition-all duration-300 ${step >= 2 ? "bg-green-primary" : "bg-neutral-800"}`} />
              <div className={`h-1.5 w-12 rounded-full transition-all duration-300 ${step >= 3 ? "bg-green-primary" : "bg-neutral-800"}`} />
            </div>
          )}

          {/* Error Banner */}
          {errorStatus && (
            <div className="flex items-center gap-2 rounded-lg bg-rose-500/10 p-3 text-base text-rose-400 border border-rose-500/20 mb-4 animate-shake">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorStatus}</span>
            </div>
          )}

          {/* STEP 1: DATE & TIME SELECTOR */}
          {step === 1 && (
            <div className="space-y-6 py-2">
              <div>
                <label className="block font-sans text-base font-semibold text-neutral-400 mb-3">1. Select a Date</label>
                <div className="grid grid-cols-5 gap-2">
                  {getUpcomingDays().map((day) => {
                    const isSelected = selectedDate === day.rawDate;
                    return (
                      <button
                        id={`date-slot-${day.rawDate}`}
                        key={day.rawDate}
                        type="button"
                        onClick={() => {
                          setSelectedDate(day.rawDate);
                          setErrorStatus("");
                        }}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${isSelected
                          ? "border-emerald-500 bg-green-primary/10 text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                          : "border-neutral-800 bg-[#111] hover:border-neutral-700 text-neutral-300 hover:text-white"
                          }`}
                      >
                        <span className="font-sans text-[11px] font-medium tracking-wide text-neutral-400">{day.dayName}</span>
                        <span className="font-sans text-lg font-bold mt-1">{day.dayNum}</span>
                        <span className="font-sans text-base text-neutral-500 mt-0.5">{day.month}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block font-sans text-base font-semibold text-neutral-400 mb-3">2. Available Slots</label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {timeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        id={`time-slot-${time.replace(/\s+/g, '')}`}
                        key={time}
                        type="button"
                        onClick={() => {
                          setSelectedTime(time);
                          setErrorStatus("");
                        }}
                        className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl border font-sans text-base transition-all ${isSelected
                          ? "border-emerald-500 bg-green-primary/10 text-white shadow-[0_0_15px_rgba(16,185,129,0.15)] font-semibold"
                          : "border-neutral-800 bg-[#111] hover:border-neutral-700 text-neutral-300 hover:text-white"
                          }`}
                      >
                        <Clock className="h-3 w-3 text-neutral-500" />
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timezone */}
              <div className="flex items-center gap-2 rounded-xl bg-neutral-900/60 p-3 border border-neutral-800/80">
                <Globe className="h-4 w-4 text-neutral-400" />
                <div className="flex-1">
                  <span className="block text-base text-neutral-500 font-sans">TIMEZONE</span>
                  <select
                    id="timezone-select"
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full bg-transparent text-base font-sans text-neutral-200 focus:outline-none cursor-pointer"
                  >
                    <option value="UTC+7 (Jakarta / Western Indonesia)" className="bg-[#111]">WIB - Jakarta (UTC+7)</option>
                    <option value="UTC+8 (Singapore / Bali)" className="bg-[#111]">WITA - Singapore, Bali (UTC+8)</option>
                    <option value="UTC+0 (GMT)" className="bg-[#111]">GMT/UTC (London) (UTC+0)</option>
                    <option value="UTC-5 (EST)" className="bg-[#111]">EST - New York (UTC-5)</option>
                    <option value="UTC+10 (AEST)" className="bg-[#111]">AEST - Sydney (UTC+10)</option>
                  </select>
                </div>
              </div>

              {/* Continue button */}
              <button
                id="modal-next-step-btn"
                type="button"
                onClick={handleNextStep}
                className="flex items-center justify-center gap-2 w-full p-3.5 rounded-xl bg-green-primary hover:bg-emerald-600 text-black font-sans font-bold text-sm tracking-wide transition-all shadow-[0_4px_20px_rgba(16,185,129,0.2)] cursor-pointer"
              >
                Continue Booking Details
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* STEP 2: USER DETAILS FORM */}
          {step === 2 && (
            <form onSubmit={handleBookSubmit} className="space-y-4 py-2">
              <div className="text-neutral-400 bg-neutral-900/60 p-3 rounded-xl border border-neutral border-neutral-800/80 text-base mb-2">
                <p className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Selected Date:</span>
                  <strong className="text-white font-medium">{selectedDate}</strong>
                  <span className="mx-1">•</span>
                  <Clock className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Time:</span>
                  <strong className="text-white font-medium">{selectedTime}</strong>
                </p>
                <p className="mt-1 text-[11px] text-neutral-500 font-sans">({timezone})</p>
              </div>

              <div className="space-y-1">
                <label className="block text-base font-semibold text-neutral-400">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                  <input
                    id="input-booking-name"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-sm focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/40 text-white font-sans transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-base font-semibold text-neutral-400">Business Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                  <input
                    id="input-booking-email"
                    type="email"
                    required
                    placeholder="e.g. john@yourcompany.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-sm focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/40 text-white font-sans transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-base font-semibold text-neutral-400">Company Name (Optional)</label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                  <input
                    id="input-booking-company"
                    type="text"
                    placeholder="e.g. Acme Corporation"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full pl-10 pr-4 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-sm focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/40 text-white font-sans transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-base font-semibold text-neutral-400">What are we building together? (Brief notes)</label>
                <textarea
                  id="input-booking-notes"
                  rows={2}
                  placeholder="e.g. Rebuilding our customer web-portal to handle massive growth spikes, need clean UX."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-base focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/40 text-white font-sans transition-all resize-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  id="modal-back-btn"
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 p-3 rounded-xl border border-neutral-800 bg-[#111] hover:bg-neutral-900 text-neutral-300 font-sans text-sm tracking-wide transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  id="modal-submit-btn"
                  type="submit"
                  className="flex-1 p-3 rounded-xl bg-green-primary hover:bg-emerald-600 text-black font-sans font-medium text-sm tracking-wide transition-all shadow-[0_4px_20px_rgba(16,185,129,0.2)] cursor-pointer"
                >
                  Schedule Free Consultation
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: SUCCESS CONFIRMATION STATE */}
          {step === 3 && (
            <div className="text-center py-6 space-y-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-primary/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <div className="space-y-2">
                <h4 className="font-sans text-xl font-bold text-white">Your session is secured!</h4>
                <p className="text-base text-neutral-400 max-w-md mx-auto">
                  A calendar invitation with the Google Meet link has been sent to <span className="text-white hover:underline">{email}</span>. We're excited to collaborate!
                </p>
              </div>

              <div className="max-w-md mx-auto rounded-xl bg-neutral-900/60 p-4 border border-emerald-500/10 space-y-3 divide-y divide-neutral-800 text-left">
                <div className="pb-3 text-base">
                  <p className="font-sans text-base text-emerald-400 tracking-wider">EVENT SUMMARY</p>
                  <p className="font-sans font-semibold text-sm text-white mt-1">1ZERO Systems Blueprint Call</p>
                  <p className="text-neutral-400 mt-0.5">30-Minute Architecture Strategy Review</p>
                </div>
                <div className="py-2.5 pt-3 flex items-center gap-3 text-base text-neutral-300">
                  <Calendar className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{selectedDate}</span>
                </div>
                <div className="py-2.5 flex items-center gap-3 text-base text-neutral-300">
                  <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{selectedTime} ({timezone})</span>
                </div>
                <div className="pt-3 flex items-center gap-3 text-base text-neutral-300">
                  <Video className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="font-sans text-[11px] text-emerald-300 select-all underline cursor-pointer">meet.google.com/ico-nics-blue</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="modal-finish-btn"
                  type="button"
                  onClick={cleanClose}
                  className="px-8 p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-sans text-sm tracking-wide transition-colors cursor-pointer border border-neutral-800"
                >
                  Back to Website
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

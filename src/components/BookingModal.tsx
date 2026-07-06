import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, Globe, User, Mail, Building, CheckCircle2, Sparkles, Video, ChevronRight, AlertCircle } from "lucide-react";
import { bookingModalCopy } from "../copy";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleBookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorStatus("Full name and email address are required.");
      return;
    }
    setErrorStatus("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/mrosa@1zero.biz", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          company: company,
          notes: notes,
          date: selectedDate,
          time: selectedTime,
          timezone: timezone,
          _subject: `New Strategy Session Booking from ${name}`
        })
      });

      if (response.ok) {
        setStep(3); // Success step
      } else {
        console.error("Booking submission failed.");
        setErrorStatus("Failed to schedule booking. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-raisin-black-900/80 backdrop-blur-md"
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
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-sea-salt bg-[#0c0c0c] p-6 shadow-2xl md:p-8"
        >
          {/* Subtle green aurora inside modal */}
          <div className="absolute -top-32 -left-32 -z-10 h-64 w-64 rounded-full bg-brunswick-green-900/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 -z-10 h-64 w-64 rounded-full bg-brunswick-green-900/5 blur-3xl" />

          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-sea-salt/80">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brunswick-green-900/10 text-sea-salt">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-sea-salt">{bookingModalCopy.modalTitle}</h3>
                <p className="font-sans text-base sm:text-lg uppercase tracking-wider text-sea-salt">{bookingModalCopy.modalSub}</p>
              </div>
            </div>
            <button
              id="close-modal-btn"
              onClick={cleanClose}
              className="p-1 px-2 text-sea-salt hover:text-sea-salt hover:bg-sea-salt rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Stepper Indicator */}
          {step < 3 && (
            <div className="flex items-center justify-center gap-2 py-4">
              <div className={`h-1.5 w-12 rounded-full transition-all duration-300 ${step >= 1 ? "bg-brunswick-green-900" : "bg-sea-salt"}`} />
              <div className={`h-1.5 w-12 rounded-full transition-all duration-300 ${step >= 2 ? "bg-brunswick-green-900" : "bg-sea-salt"}`} />
              <div className={`h-1.5 w-12 rounded-full transition-all duration-300 ${step >= 3 ? "bg-brunswick-green-900" : "bg-sea-salt"}`} />
            </div>
          )}

          {/* Error Banner */}
          {errorStatus && (
            <div className="flex items-center gap-2 rounded-lg bg-rose-500/10 p-3 text-lg text-rose-400 border border-rose-500/20 mb-4 animate-shake">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorStatus}</span>
            </div>
          )}

          {/* STEP 1: DATE & TIME SELECTOR */}
          {step === 1 && (
            <div className="space-y-6 py-2">
              <div>
                <label className="block font-sans text-lg font-semibold text-sea-salt mb-3">{bookingModalCopy.dateLabel}</label>
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
                          ? "border-brunswick-green-500 bg-brunswick-green-900/10 text-sea-salt shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                          : "border-sea-salt bg-[#111] hover:border-sea-salt text-sea-salt hover:text-sea-salt"
                          }`}
                      >
                        <span className="font-sans text-base font-medium tracking-wide text-sea-salt">{day.dayName}</span>
                        <span className="font-sans text-lg font-bold mt-1">{day.dayNum}</span>
                        <span className="font-sans text-lg text-sea-salt mt-0.5">{day.month}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block font-sans text-lg font-semibold text-sea-salt mb-3">{bookingModalCopy.slotsLabel}</label>
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
                        className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl border font-sans text-lg transition-all ${isSelected
                          ? "border-brunswick-green-500 bg-brunswick-green-900/10 text-sea-salt shadow-[0_0_15px_rgba(16,185,129,0.15)] font-semibold"
                          : "border-sea-salt bg-[#111] hover:border-sea-salt text-sea-salt hover:text-sea-salt"
                          }`}
                      >
                        <Clock className="h-3 w-3 text-sea-salt" />
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timezone */}
              <div className="flex items-center gap-2 rounded-xl bg-sea-salt/60 p-3 border border-sea-salt/80">
                <Globe className="h-4 w-4 text-sea-salt" />
                <div className="flex-1">
                  <span className="block text-lg text-sea-salt font-sans">{bookingModalCopy.timezoneLabel}</span>
                  <select
                    id="timezone-select"
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full bg-transparent text-lg font-sans text-sea-salt focus:outline-none cursor-pointer"
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
                className="flex items-center justify-center gap-2 w-full p-3.5 rounded-xl bg-brunswick-green-900 hover:bg-brunswick-green-600 text-black font-sans font-bold text-lg tracking-wide transition-all shadow-[0_4px_20px_rgba(16,185,129,0.2)] cursor-pointer"
              >
                {bookingModalCopy.continueBtn}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* STEP 2: USER DETAILS FORM */}
          {step === 2 && (
            <form onSubmit={handleBookSubmit} className="space-y-4 py-2">
              <div className="text-sea-salt bg-sea-salt/60 p-3 rounded-xl border border-sea-salt border-sea-salt/80 text-lg mb-2">
                <p className="text-base sm:text-lg flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-brunswick-green-500" />
                  <span>{bookingModalCopy.selectedDateLabel}</span>
                  <strong className="text-sea-salt font-medium">{selectedDate}</strong>
                  <span className="mx-1">•</span>
                  <Clock className="h-3.5 w-3.5 text-brunswick-green-500" />
                  <span>{bookingModalCopy.selectedTimeLabel}</span>
                  <strong className="text-sea-salt font-medium">{selectedTime}</strong>
                </p>
                <p className="mt-1 text-base sm:text-lg text-sea-salt font-sans">({timezone})</p>
              </div>

              <div className="space-y-1">
                <label className="block text-lg font-semibold text-sea-salt">{bookingModalCopy.fullNameLabel}</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-sea-salt" />
                  <input
                    id="input-booking-name"
                    type="text"
                    required
                    placeholder={bookingModalCopy.fullNamePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 p-3.5 rounded-xl bg-sea-salt/60 border border-sea-salt text-lg focus:outline-none focus:border-brunswick-green-500/80 focus:ring-1 focus:ring-brunswick-green-500/40 text-sea-salt font-sans transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-lg font-semibold text-sea-salt">{bookingModalCopy.emailLabel}</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-sea-salt" />
                  <input
                    id="input-booking-email"
                    type="email"
                    required
                    placeholder={bookingModalCopy.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 p-3.5 rounded-xl bg-sea-salt/60 border border-sea-salt text-lg focus:outline-none focus:border-brunswick-green-500/80 focus:ring-1 focus:ring-brunswick-green-500/40 text-sea-salt font-sans transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-lg font-semibold text-sea-salt">{bookingModalCopy.companyLabel}</label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-sea-salt" />
                  <input
                    id="input-booking-company"
                    type="text"
                    placeholder={bookingModalCopy.companyPlaceholder}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full pl-10 pr-4 p-3.5 rounded-xl bg-sea-salt/60 border border-sea-salt text-lg focus:outline-none focus:border-brunswick-green-500/80 focus:ring-1 focus:ring-brunswick-green-500/40 text-sea-salt font-sans transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-lg font-semibold text-sea-salt">{bookingModalCopy.notesLabel}</label>
                <textarea
                  id="input-booking-notes"
                  rows={2}
                  placeholder={bookingModalCopy.notesPlaceholder}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-sea-salt/60 border border-sea-salt text-lg focus:outline-none focus:border-brunswick-green-500/80 focus:ring-1 focus:ring-brunswick-green-500/40 text-sea-salt font-sans transition-all resize-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  id="modal-back-btn"
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 p-3 rounded-xl border border-sea-salt bg-[#111] hover:bg-sea-salt text-sea-salt font-sans text-lg tracking-wide transition-colors cursor-pointer"
                >
                  {bookingModalCopy.backBtn}
                </button>
                <button
                  id="modal-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 p-3 rounded-xl bg-brunswick-green-900 hover:bg-brunswick-green-600 text-black font-sans font-medium text-lg tracking-wide transition-all shadow-[0_4px_20px_rgba(16,185,129,0.2)] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  {isSubmitting ? bookingModalCopy.submitBtnSubmitting : bookingModalCopy.submitBtnDefault}
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: SUCCESS CONFIRMATION STATE */}
          {step === 3 && (
            <div className="text-center py-6 space-y-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brunswick-green-900/10 text-brunswick-green-500 border border-brunswick-green-500/20">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <div className="space-y-2">
                <h4 className="font-sans text-xl sm:text-2xl font-bold text-sea-salt">{bookingModalCopy.successTitle}</h4>
                <p className="text-base sm:text-lg text-sea-salt max-w-md mx-auto">
                  {bookingModalCopy.successDesc1} <span className="text-sea-salt hover:underline">{email}</span>{bookingModalCopy.successDesc2}
                </p>
              </div>

              <div className="max-w-md mx-auto rounded-xl bg-sea-salt/60 p-4 border border-brunswick-green-500/10 space-y-3 divide-y divide-sea-salt text-left">
                <div className="pb-3 text-lg">
                  <p className="font-sans text-base sm:text-lg text-brunswick-green-500 tracking-wider">{bookingModalCopy.eventSummary}</p>
                  <p className="font-sans font-semibold text-base sm:text-lg text-sea-salt mt-1">{bookingModalCopy.eventTitle}</p>
                  <p className="text-base sm:text-lg text-sea-salt mt-0.5">{bookingModalCopy.eventDesc}</p>
                </div>
                <div className="py-2.5 pt-3 flex items-center gap-3 text-lg text-sea-salt">
                  <Calendar className="h-4 w-4 text-brunswick-green-500 shrink-0" />
                  <span>{selectedDate}</span>
                </div>
                <div className="py-2.5 flex items-center gap-3 text-lg text-sea-salt">
                  <Clock className="h-4 w-4 text-brunswick-green-500 shrink-0" />
                  <span>{selectedTime} ({timezone})</span>
                </div>
                <div className="pt-3 flex items-center gap-3 text-lg text-sea-salt">
                  <Video className="h-4 w-4 text-brunswick-green-500 shrink-0" />
                  <span className="font-sans text-base text-brunswick-green-500 select-all underline cursor-pointer">meet.google.com/ico-nics-blue</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="modal-finish-btn"
                  type="button"
                  onClick={cleanClose}
                  className="px-8 p-3 rounded-xl bg-sea-salt hover:bg-sea-salt text-sea-salt font-sans text-lg tracking-wide transition-colors cursor-pointer border border-sea-salt"
                >
                  {bookingModalCopy.backToWebsiteBtn}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

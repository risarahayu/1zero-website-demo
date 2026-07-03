import React from "react";
import { PhoneCall } from "lucide-react";

interface BookingButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function BookingButton({ onClick, className = "" }: BookingButtonProps) {
  return (
    <a
      id="cta-booking-btn"
      href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3gWtjZcsb5BZb78RjU3eDJJcflGsC7oDWdx__RBcaDFHzZ1ivl2IZrigY4R9-r63sLfDdRjvmQ"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-center gap-2
        px-10 py-5
        bg-[linear-gradient(120deg,var(--color-sea-salt),var(--color-ivory),var(--color-dun),var(--color-green-500))]
        bg-[length:300%_300%]
        animate-gradient
        text-raisin-black-800  font-sans text-lg  leading-relaxed max-w-sm00
        font-sans font-extrabold
        text-lg sm:text-lg
        rounded-2xl
        transition-all
        shadow-[0_10px_35px_rgba(223,217,198,0.25)]
        hover:shadow-[0_10px_45px_rgba(223,217,198,0.4)]
        cursor-pointer
        tracking-wide ${className}`}
    >
      Book a Section
      <PhoneCall className="h-4 w-4 text-raisin-black-800 group-hover:scale-110 transition-transform" />
    </a>
  );
}

import React from "react";
import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { aboutCopy } from "../copy";

interface BookingButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function BookingButton({ onClick, className = "" }: BookingButtonProps) {
  return (
    <Link
      id="cta-booking-btn"
      to="/book"
      onClick={onClick}
      className={`group relative flex items-center justify-center gap-2
        px-10 py-5
        bg-[linear-gradient(120deg,var(--color-sea-salt),var(--color-ivory),var(--color-dun),var(--color-green-500))]
        bg-[length:300%_300%]
        animate-gradient
        text-raisin-black-800  font-sans text-lg   max-w-sm00
        font-sans font-extrabold
        text-lg sm:text-lg
        rounded-full
        transition-all
        shadow-[0_10px_35px_rgba(223,217,198,0.25)]
        hover:shadow-[0_10px_45px_rgba(223,217,198,0.4)]
        cursor-pointer
        tracking-wide ${className}`}
    >
      {aboutCopy.en.ctaTitle}

      <PhoneCall className="h-4 w-4 text-neutral-900 group-hover:scale-110 transition-transform" />
    </Link>
  );
}

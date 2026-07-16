import React from "react";

interface LogoProps {
  className?: string;
  glow?: boolean;
}

export default function Logo1zero({ className = "h-5", glow = true }: LogoProps) {
  return (
    <div className="relative inline-flex items-center group">
      {/* Decorative neon green glow behind the logo */}
      {glow && (
        <div className="absolute inset-0 -z-10 bg-brunswick-green-900/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
      )}

      <img
        src={`${import.meta.env.BASE_URL}Logo 1zero white.svg`}
        alt="1ZERO Logo"
        className={`${className} transition-all duration-300 transform group-hover:scale-[1.02] filter group-hover:drop-shadow-[0_0_8px_rgba(163,230,53,0.3)]`}
      />
    </div>
  );
}

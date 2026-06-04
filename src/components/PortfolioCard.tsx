import React from "react";
import { PortfolioCardProps, Project } from "../types";

const getServiceColorClass = (service: string) => {
  const s = service.toLowerCase();

  if (s.includes("devpod")) {
    return "border-ivory/20 bg-ivory/10 text-ivory";
  }
  if (s.includes("nextgen") || s.includes("next gen")) {
    return "border-dun/20 bg-dun/10 text-dun";
  }
  if (s.includes("geo") || s.includes("generative")) {
    return "border-brunswick-green-500/30 bg-brunswick-green-500/10 text-brunswick-green-500";
  }
  if (s.includes("fcto")) {
    return "border-sea-salt/20 bg-sea-salt/10 text-sea-salt";
  }

  // Default fallback
  return "border-white/10 bg-white/5 text-zinc-400";
};

export default function PortfolioCard({ project, onReadMore, className = "", showService = false }: PortfolioCardProps) {
  return (
    <div className={`group flex flex-col space-y-4 ${className}`}>
      {/* Visual Mockup Stage Box */}
      <div className={`relative h-[240px] sm:h-[260px] md:h-[285px] w-full rounded-[24px] border ${project.bgClass} flex items-center justify-center overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]`}>

        {/* Subtly animated ambient grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px]" />

        {/* Real project screenshot */}
        <img
          src={project.imageUrl}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      </div>

      {/* Left corner identifier and Content text */}
      <div className="pt-3 space-y-2">
        <h3
          className="font-sans text-lg sm:text-xl font-bold text-white tracking-tight transition-colors cursor-pointer hover:text-brunswick-green-500 group-hover:text-brunswick-green-600 "
          onClick={onReadMore}
        >
          {project.title}
        </h3>

        <p className="font-sans text-base text-neutral-400 leading-relaxed font-normal">
          {project.description}
        </p>

        {showService && (
          <div className="pt-2 flex flex-col space-y-2">
            <span className="text-[10px] sm:text-xs font-semibold text-zinc-500 uppercase tracking-widest">
              Service:
            </span>
            <div className="flex">
              <span className={`inline-block px-3 py-1 rounded-full border text-[10px] sm:text-xs uppercase tracking-widest font-medium ${getServiceColorClass(project.service)}`}>
                {project.service}
              </span>
            </div>
          </div>
        )}

        {/* Bagian Button yang sudah diperbarui borders-nya */}
        <button
          type="button"
          onClick={onReadMore}
          className="inline-flex items-center justify-center font-sans font-semibold text-neutral-300 group-hover:text-brunswick-green-500 bg-[#1a1a1c] hover:bg-[#252528] group-hover:bg-[#252528] border border-neutral-800/80 group-hover:border-brunswick-green-500 px-4 py-1.5 rounded-full text-base transition-colors cursor-pointer self-start mt-2 "
        >
          Read More
        </button>
      </div>
    </div>
  );
}
import React from "react";
import { PortfolioCardProps, Project } from "../types";

const getServiceColorClass = (service: string) => {
  const s = service.toLowerCase();

  if (s.includes("devpod")) {
    return "border-dun/20 bg-dun/10 text-dun";
  }
  if (s.includes("nextgen") || s.includes("next gen")) {
    return "border-dun/20 bg-dun/10 text-dun";
  }
  if (s.includes("geo") || s.includes("generative")) {
    return "border-dun/20 bg-dun/10 text-dun";
  }
  if (s.includes("fcto")) {
    return "border-dun/20 bg-dun/10 text-dun";
  }

  // Default fallback
  return "border-sea-salt/10 bg-sea-salt/5 text-raisin-black-900-400";
};

export default function PortfolioCard({ project, onReadMore, className = "", showService = false }: PortfolioCardProps) {
  const handleReadMore = () => {
    if (project.url) {
      window.open(project.url, "_blank", "noopener,noreferrer");
      return;
    }

    if (onReadMore) {
      onReadMore();
    }
  };

  return (
    <div className={`group flex flex-col space-y-4 ${className} bg-sea-salt/6 backdrop-blur border border-sea-salt/6 rounded-3xl p-6`}>
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

      {/* Content Container - Configured with flex-1 and flex-col to push the button down */}
      <div className="pt-3 space-y-2 flex-1 flex flex-col">
        <h3
          className="font-sans text-2xl sm:text-3xl font-bold text-sea-salt transition-colors cursor-pointer hover:text-brunswick-green-500 group-hover:text-brunswick-green-600"
          onClick={onReadMore}
        >
          {project.title}
        </h3>

        <p className="font-sans text-base sm:text-lg text-sea-salt/90 font-normal max-w-sm overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          {project.description}
        </p>

        {showService && (
          <div className="pt-2 flex flex-col space-y-2">
            <div className="flex">
              <span className={`inline-block px-2 py-1 rounded-full border text-sm tracking-widest font-medium ${getServiceColorClass(project.service)}`}>
                {project.service}
              </span>
            </div>
          </div>
        )}

        {/* Read More Button - Pushed to the bottom using mt-auto */}
        <button
          type="button"
          onClick={handleReadMore}
          className="inline-flex items-center justify-center font-sans font-semibold text-sea-salt group-hover:text-brunswick-green-500 bg-raisin-black-800 hover:bg-brunswick-green-900 group-hover:bg-raisin-black-900 border border-sea-salt/20 hover:bg-brunswick-green-900 hover:text-sea-salt transition-all px-4 py-1.5 rounded-full text-lg transition-colors cursor-pointer self-start mt-auto"
        >
          Read More
        </button>
      </div>
    </div>
  );
}
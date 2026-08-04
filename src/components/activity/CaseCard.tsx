import React, { useState } from "react";
import { Activity } from "../../types";
import { formatDateRange } from "../../ulitity/activityUtils";
import { ImageIcon } from "lucide-react";

export function CaseCard({
  item,
  index,
  isCenter,
  onOpenModal, // <-- add pop up modal handler
  setIsPaused,
  className = "",
}: {
  item: Activity;
  index: number;
  isCenter?: boolean;
  onOpenModal: (item: any, index: number) => void;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}) {
  // loading image
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div
      onClick={() => onOpenModal(item, index)} // <-- Pop up modal instead of window.open
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`
        group relative h-full h-[400px] rounded-3xl p-5 border
        flex flex-col justify-between cursor-pointer overflow-hidden
        transition-all duration-500 
        ${isCenter ? "opacity-100 border-brunswick-green-500  bg-sea-salt/10 shadow-2xl shadow-brunswick-green-500/5" : "opacity-60 hover:opacity-80 border-sea-salt scale-[0.96] bg-sea-salt/6"}
        ${className}
      `}
    >
      {/* Gradient image area */}
      <div className="flex h-full flex-col">
        <div className="space-y-4 flex-1 pointer-events-none">
          <div className="relative h-[180px] w-full overflow-hidden rounded-2xl bg-sea-salt/6 border border-sea-salt/60 flex items-end p-4">
            {item.photos ? (
              <>
                {imageLoading && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl bg-brunswick-green-900/10">
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-brunswick-green-800/20 via-brunswick-green-500/35 to-brunswick-green-800/20" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <ImageIcon className="h-10 w-10 text-sea-salt/30" />
                    </div>
                  </div>
                )}

                <img
                  src={item.photos[0]}
                  alt={item.title}
                  onLoad={() => setImageLoading(false)}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${imageLoading ? "opacity-0" : "opacity-100"
                    }`}
                />
              </>
            ) : (
              <>
                {/* Decorative grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:24px_24px]" />
              </>
            )}
          </div>

          <div className="space-y-2">
            <p className={`font-sans text-base sm:text-lg font-bold min-h-[3.5rem] content-center line-clamp-2 ${isCenter ? "text-brunswick-green-500" : "text-sea-salt"}`}>
              {item.title}
            </p>
            <p className="font-sans text-base sm:text-lg text-ivory/50 line-clamp-2">
              {formatDateRange(item.startDate, item.endDate)}
            </p>
            <p className="font-sans text-base sm:text-lg text-sea-salt line-clamp-2">
              {item.desc}
            </p>
            <span className="text-brunswick-green-500">read more</span>
          </div>
        </div>

        {/* <div className="mt-auto pt-4">
          <button // <-- Ubah tag <a> menjadi <button> agar card tidak lompat ke web lain saat di-klik
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(item);
            }}
            className={`inline-flex items-center justify-center font-sans font-semibold px-4 py-1.5 rounded-full text-lg cursor-pointer self-start transition-all border ${isCenter ? "text-sea-salt border-brunswick-green-500 bg-brunswick-900" : "text-sea-salt border-sea-salt/20 bg-raisin-black-800"} hover:bg-brunswick-green-900 hover:border-brunswick-green-500 hover:text-sea-salt`}
          >
            Read More
          </button>
        </div> */}
      </div>

    </div>
  );
}

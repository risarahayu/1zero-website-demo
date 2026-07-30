import { useEffect, useState, useRef } from "react";
// Tambahkan icon X untuk tombol tutup pop-up
import { casesCopy } from "../copy";
import { SeeAllCard } from "./activity/SeeAllCard";
import { CaseCard } from "./activity/CaseCard";
import { ourActivity } from "../data.ts"
import { handleOpenModal, getSortedActivities } from "../ulitity/activityUtils";
import { Activity } from "../types";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { ActivityModal } from "./activity/Modal";



// ─── Main Component ──────────────────────────────────────────────────────────
export default function Cases() {
  const swiperRef = useRef<SwiperType | null>(null);

  // ── Shared index state ──────────────────────────────────────────
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // sorted activity by date
  const sortedActivity = getSortedActivities(ourActivity);

  const displayedActivities = sortedActivity.slice(0, 3);
  const total = displayedActivities.length;


  // ── State Pop up Modal ────────────────────────────────────
  const [selectedItem, setSelectedItem] = useState<Activity | null>(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [showSeeAllSlide, setShowSeeAllSlide] = useState(false);

  //---------slider hilight from index 1 -> 2 -> 3
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="relative py-16 bg-raisin-black-800/20 overflow-hidden">
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-brunswick-green-900/[0.03] blur-[110px]" />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-500/[0.03] blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Header */}
        <div className="flex flex-col gap-10 items-center  pb-10 border-b border-sea-salt/20">
          <div className="lg:col-span-8 space-y-10 text-center [text-align-last:center]">
            <div className="flex inline-block px-3.5 py-2 rounded-full border border-brunswick-500 text-lg font-sans  tracking-widest text-brunswick-green-500 bg-raisin-black">
              <span>1zero </span>
              <span className="uppercase">
                {casesCopy.badge}
              </span>

            </div>
            <h2 className="font-sans text-3xl leading-normal sm:text-5xl sm:leading-normal font-bold text-sea-salt">
              {casesCopy.titleLine1} <br />{casesCopy.titleLine2}
            </h2>
          </div>
        </div>

        {/* ── UNIFIED SWIPER CAROUSEL ────────────── */}
        <div
          className="relative w-full"
        >
          <Swiper
            className="w-full py-10"
            modules={[Autoplay]}
            loop={false}
            // centeredSlides
            slidesPerView={3}
            grabCursor
            speed={700}
            spaceBetween={12}
            breakpoints={{
              0: { slidesPerView: 1.15 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}

          >
            {displayedActivities.map((item, index) => (
              <SwiperSlide key={item.id} className="h-auto">
                {({ isActive }) => (
                  <CaseCard
                    key={item.id}
                    item={item}
                    index={index}
                    isCenter={index === activeIndex}
                    onOpenModal={(item, idx) => handleOpenModal(item, idx, setSelectedItemIndex, setSelectedItem)}
                    setIsPaused={setIsPaused}
                  />
                )}
              </SwiperSlide>
            ))}

            {/* CTA Slide */}
            <SwiperSlide>
              {({ isActive }) => (
                <SeeAllCard isCenter={isActive} />
              )}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* ── POP UP MODAL ───────────────────────────────────────── */}
      {selectedItem && (
        <ActivityModal
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          selectedItemIndex={selectedItemIndex}
          setSelectedItemIndex={setSelectedItemIndex}
          displayedActivities={displayedActivities}
          total={total}
          showSeeAllSlide={showSeeAllSlide}
          setShowSeeAllSlide={setShowSeeAllSlide}
          showArrowButton={true}
        />
      )}

    </section >
  );
}

import { useEffect, useState, useRef } from "react";
// Tambahkan icon X untuk tombol tutup pop-up
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { casesCopy } from "../copy";
import { SeeAllCard } from "./activity/SeeAllCard";
import { CaseCard } from "./activity/CaseCard";
import CTA from "./CTA";
import { ourActivity } from "../data.ts"
import { formatDateRange, handleOpenModal, previousItem, nextItem, getSortedActivities } from "../ulitity/activityUtils";
import { Activity } from "../types";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

import { Icon } from "@iconify/react";

import "swiper/css";
import { button } from "motion/react-client";


const socialIcons = {
  Instagram: "mdi:instagram",
  Linkedin: "mdi:linkedin",
  Facebook: "mdi:facebook",
  Youtube: "mdi:youtube",
  X: "ri:twitter-x-fill",
  Tiktok: "ic:baseline-tiktok",
  Website: "mdi:web",
};




// ─── Main Component ──────────────────────────────────────────────────────────
export default function Cases() {
  const swiperRef = useRef<SwiperType | null>(null);
  // const total = ourActivity.length;


  // ── State  Pop up Modal ────────────────────────────────────
  const [selectedItem, setSelectedItem] = useState<Activity | null>(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);


  // ── Shared index state ──────────────────────────────────────────
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // sorted activity by date
  const sortedActivity = getSortedActivities(ourActivity);

  const displayedActivities = sortedActivity.slice(0, 3);
  const total = displayedActivities.length;

  // loading image
  const [imageLoading, setImageLoading] = useState(true);
  useEffect(() => {
    setImageLoading(true);
  }, [galleryIndex, selectedItem]);


  // ── Autoplay Control ─────────────────────────
  // useEffect(() => {
  //   if (swiperRef.current && swiperRef.current.autoplay) {
  //     if (isPaused || selectedItem !== null) {
  //       swiperRef.current.autoplay.stop();
  //     } else {
  //       swiperRef.current.autoplay.start();
  //     }
  //   }
  // }, [isPaused, selectedItem]);

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

          {/* Navigation */}
          <div className="flex flex-column justify-between items-center">
            <div className="flex items-center gap-3 pt-10 justify-center">
              {/* <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
              </button>
              <span className="font-sans text-lg text-sea-salt tracking-wider">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button> */}
            </div>
            {/* <a href="" className="justify-self-center">
              <p className="font-sans text-base sm:text-lg text-sea-salt/80 tracking-widest  font-semibold ml-2 select-none cursor-pointer hover:text-brunswick-green-500 hover:underline transition-all duration-300 transform active:scale-95">View All Activity</p>
            </a> */}
          </div>
        </div>
      </div>

      {/* ── POP UP MODAL ───────────────────────────────────────── */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)} // close modal when click overlay background
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-raisin-black-800 border border-sea-salt/20 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()} //prevent close modal when click modal background
          >

            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 sm:top-4 sm:right-4 z-10 flex h-10 w-10 items-center justify-center  text-sea-salt/80 transition-all hover:bg-red-500/80 hover:text-sea-salt hover:border-red-500"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Pop Up Content */}
            <div className="flex flex-col gap-6 mt-12 sm:mt-8">
              {/* {selectedItem.photo && (
                <div className="relative h-[250px] sm:h-[350px] w-full overflow-hidden rounded-2xl bg-sea-salt/6 border border-sea-salt/10">
                  <img
                    src={selectedItem.photo}
                    alt={selectedItem.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              )} */}
              {/* Modal Navigation */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full px-2 sm:px-4 z-10 flex justify-between items-center pointer-events-none">
                <button
                  onClick={() => previousItem(selectedItemIndex, displayedActivities, setSelectedItemIndex, setSelectedItem)}
                  disabled={selectedItemIndex === 0}
                  className="pointer-events-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-sea-salt/20 bg-black/40 text-sea-salt/80 transition-all hover:bg-brunswick-green-900 hover:text-sea-salt disabled:opacity-30 disabled:hover:bg-black/40 disabled:cursor-not-allowed backdrop-blur-sm shadow-lg"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => nextItem(selectedItemIndex, displayedActivities, setSelectedItemIndex, setSelectedItem)}
                  disabled={selectedItemIndex === total - 1}
                  className="pointer-events-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-sea-salt/20 bg-black/40 text-sea-salt/80 transition-all hover:bg-brunswick-green-900 hover:text-sea-salt disabled:opacity-30 disabled:hover:bg-black/40 disabled:cursor-not-allowed backdrop-blur-sm shadow-lg"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Photo Slider Gallery */}

              {selectedItem.photos && selectedItem.photos.length > 1 ? (
                <div className="w-full space-y-4">

                  {/* Image Slider */}
                  <div className="relative w-full h-[250px] sm:h-[350px] overflow-hidden rounded-2xl border border-sea-salt/10">
                    {imageLoading && (
                      <div className="absolute inset-0 animate-pulse bg-sea-salt/10" />
                    )}
                    <img
                      src={selectedItem.photos[galleryIndex]}
                      alt={`${selectedItem.title} - ${galleryIndex + 1}`}
                      onLoad={() => setImageLoading(false)}
                      className={`absolute inset-0 h-full w-full object-cover animate-in fade-in ${imageLoading ? "opacity-0" : "opacity-100"}`}
                    />
                  </div>
                  {/* Navigation Arrows */}
                  <div className="flex items-center justify-between place-self-center ">

                    <div className="flex items-center gap-2">
                      {selectedItem.photos!.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setGalleryIndex(index)}
                          className={`h-2 rounded-full transition-all duration-200 ${index === galleryIndex
                            ? "w-6 bg-brunswick-green-500"
                            : "w-2 bg-sea-salt/30 hover:bg-sea-salt/60"
                            }`}
                        />
                      ))}
                    </div>

                  </div>
                </div>
              ) : (
                <div className="w-full space-y-4">
                  <div className="relative w-full h-[250px] sm:h-[350px] overflow-hidden rounded-2xl border border-sea-salt/10">
                    {imageLoading && (
                      <div className="absolute inset-0 animate-pulse bg-sea-salt/10" />
                    )}
                    <img
                      src={selectedItem.photos[0]}
                      alt={selectedItem.title}
                      onLoad={() => setImageLoading(false)}
                      className={`absolute inset-0 h-full w-full object-cover animate-in fade-in  ${imageLoading ? "opacity-0" : "opacity-100"}`}
                    />
                  </div>
                </div>
              )
              }

              <div className="space-y-4">
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-brunswick-green-500">
                  {selectedItem.title}
                </h3>
                <p className="font-sans text-base sm:text-lg text-sea-salt/50">
                  {formatDateRange(selectedItem.startDate, selectedItem.endDate)}
                </p>
                <p className="font-sans text-base sm:text-lg text-sea-salt/90">
                  {selectedItem.desc}
                </p>
              </div>

              {selectedItem.linkPost && (
                <div className="pt-4 border-t border-sea-salt/10 flex items-center gap-2">
                  Discovery more :
                  <a
                    href={selectedItem.linkPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-sans font-semibold px-2 py-2 rounded-full text-lg cursor-pointer bg-brunswick-green-900 text-sea-salt hover:bg-brunswick-green-600 transition-all w-full sm:w-auto"
                  >

                    <Icon icon={socialIcons[selectedItem.CTA]} className="h-8 w-8" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

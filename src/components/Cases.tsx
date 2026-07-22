import { useEffect, useState, useRef } from "react";
// Tambahkan icon X untuk tombol tutup pop-up
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { casesCopy } from "../copy";
import CTA from "./CTA";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

import { Icon } from "@iconify/react";

import "swiper/css";
import { button } from "motion/react-client";

const activity01 = "activity-01";
const activity02 = "activity-02";
const activity03 = "activity-03";
const activity04 = "activity-04";
const activity05 = "activity-05";
const activity06 = "activity-06";
const activity07 = "activity-07";
const activity08 = "activity-08";
const activity09 = "activity-09";
const activity10 = "activity-10";
const activity11 = "activity-11";


const socialIcons = {
  Instagram: "mdi:instagram",
  Linkedin: "mdi:linkedin",
  Facebook: "mdi:facebook",
  Youtube: "mdi:youtube",
  X: "ri:twitter-x-fill",
  Tiktok: "ic:baseline-tiktok",
  Website: "mdi:web",
};


const ourActivity = [
  {
    id: activity01,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity01}/GSDC.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity01}/IMG_2760.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity01}/IMG_1215.webp`,
    ],
    title: "Global Sustainable Development Congress (GSDC) 2026",
    date: "24 June 2026",
    desc: "A concise LinkedIn launch post spotlighting landing pad initiatives and global sustainability design challenge momentum.",
    linkPost: "https://www.linkedin.com/feed/update/urn:li:activity:7477617222861975553",
    CTA: "Linkedin",
  },
  {
    id: activity02,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity02}/Wisdom Shaping Sustainable Futures.webp`,
    ],
    title: "EarthWise: Wisdom Shaping Sustainable Futures",
    date: "16 May 2025",
    desc: "A simple visual story about stewardship and sustainable futures in a changing world.",
    linkPost: "https://www.youtube.com/watch?v=peZPBfHptoo",
    CTA: "Youtube",
  },
  {
    id: activity03,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity03}/Path to Sustainable Growth.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity03}/20260624_165753.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity03}/PTSG 2026 - Press Release-21.webp`,
    ],
    title: "Path to Sustainable Growth at Apurva Kempinski",
    date: "24 June 2026",
    desc: "A short post highlighting sustainable hospitality strategy and the path to growth for a luxury resort brand.",
    linkPost: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7477951114466856962/?actorCompanyId=103705943",
    CTA: "Linkedin",
  },
  {
    id: activity04,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity04}/Visit PLN.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity04}/IMG_2566.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity04}/IMG_2616.webp`,
    ],
    title: "Visit PLTGU Muara Karang",
    date: "21 May 2026",
    desc: "A short post highlighting sustainable hospitality strategy and the path to growth for a luxury resort brand.",
    linkPost: "https://www.linkedin.com/posts/1zero-biz_pln-energytransition-jakarta-activity-7482249126974476289-kfFh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3NxVkBzab9RTwcZ8BHJt_XzKZdIfZYLds",
    CTA: "Linkedin",
  },
  {
    id: activity05,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity05}/Bali_Tech_Summit.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity05}/Bali_Tech_Summit_Detail1.webp`,

    ],
    title: "Bali Tech Summit",
    date: "11 October 2024",
    desc: "Proud to have our Solution Architect representing 1zero at the Bali Tech Summit by La French Tech Indonesia. Together with industry leaders, we explored The Future of Work 2.0—covering AI, employee wellbeing, climate action, and the innovations shaping tomorrow's workplace.",
    linkPost: "https://www.instagram.com/p/DA--yvKTt6o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    CTA: "Instagram",
  },
  {
    id: activity06,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity06}/AI Social Media Event.webp`,

    ],
    title: "AI + Social Media Event",
    date: "31 January 2025",
    desc: "Our two Wonder Women attended an awesome workshop at Nebulabali , Canggu! Led by a top influencer from the US, the session dived into how AI is changing the game in social media strategy.",
    linkPost: "https://www.instagram.com/p/DFpBylOSQ4d/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    CTA: "Instagram",
  },
  {
    id: activity07,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity07}/𝗖𝘆𝗯𝗲𝗿 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗠𝗲𝗲𝘁𝘂𝗽.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity07}/𝗖𝘆𝗯𝗲𝗿 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗠𝗲𝗲𝘁𝘂𝗽 Detail 1.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity07}/𝗖𝘆𝗯𝗲𝗿 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗠𝗲𝗲𝘁𝘂𝗽 Detail 2.webp`,
    ],
    title: "𝗖𝘆𝗯𝗲𝗿 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗠𝗲𝗲𝘁𝘂𝗽",
    date: "5 February 2025",
    desc: "1zero’s Solution Architect attended the 𝗖𝘆𝗯𝗲𝗿 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗠𝗲𝗲𝘁𝘂𝗽.  to dive deep into today’s biggest cybersecurity challenges. 🔥 Experts shared insights on how hackers execute attacks, the role of AI as both a threat and a defense, and why cybersecurity awareness is more important than ever.",
    linkPost: "https://www.instagram.com/p/DFtzqySShUS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    CTA: "Instagram",
  },
  {
    id: activity08,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity08}/Empowering Women Entrepreneurs.webp`,
    ],
    title: "Empowering Women Entrepreneurs",
    date: "16 January 2025",
    desc: "Our team member, Mutia Rosa, attended the LiftWomen Bali Chapter Launch at Livit, Sanur, joining an inspiring community of women entrepreneurs, founders, creators, mentors, and innovators committed to empowering one another.",
    linkPost: "https://www.linkedin.com/posts/liftwomen-femaleentrepreneurs-femalefounders-share-7287365666251186176-4Yml/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACaiIoYBEEy2963FCH3xa3bmKTp3gODlKeY",
    CTA: "Linkedin",
  },
  {
    id: activity09,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity09}/Together for Breast Cancer Awareness.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity09}/Together for Breast Cancer Awareness Detail 1.webp`,

    ],
    title: "International Day Against Breast Cancer",
    date: "October 2025",
    desc: " 1zero proudly joined the Steps of Hope Fun Walk in Sanur, supporting breast cancer awareness alongside more than 200 participants. The event also provided free health screenings, reinforcing the importance of early detection and community support.",
    // linkPost: "https://www.instagram.com/reel/DQYoA8NEx9m/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    linkPost: "",
    CTA: "Instagram",
  },
  {
    id: activity10,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity10}/Hackathon.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity10}/Hackathon Detail 1.webp`,

    ],
    title: "Brunei Hackathon 2023",
    date: "April 2023",
    desc: "At Brunei Hackathon 2023, Mark represented 1zero as a speaker, sharing insights on innovation, entrepreneurship, and how technology can solve real-world challenges while inspiring the next generation of innovators.",
    linkPost: "",
    CTA: "",
  },
  {
    id: activity11,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity11}/Coinfest.webp`,
    ],
    title: "Coinfest 2025",
    date: "21-22 August 2025",
    desc: "A great day at Coinfest! Always inspiring to meet passionate people, exchange ideas, and learn from the latest developments in the Web3 and blockchain ecosystem. Thank you to everyone we had the chance to connect with—we're excited to see what comes next.",
    linkPost: "",
    CTA: "",
  },

];

// ─── Shared card renderer ────────────────────────────────────────────────────
function CaseCard({
  item,
  index,
  isCenter,
  onOpenModal, // <-- add pop up modal handler
  setIsPaused,
}: {
  item: (typeof ourActivity)[0];
  index: number;
  isCenter: boolean;
  onOpenModal: (item: any, index: number) => void;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
}) {



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
      `}
    >
      {/* Gradient image area */}
      <div className="flex h-full flex-col">
        <div className="space-y-4 flex-1 pointer-events-none">
          <div className="relative h-[180px] w-full overflow-hidden rounded-2xl bg-sea-salt/6 border border-sea-salt/60 flex items-end p-4">
            {item.photos ? (
              <img
                src={item.photos[0]}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
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
              {item.date}
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

// ─── Main Component ──────────────────────────────────────────────────────────
export default function Cases() {
  const swiperRef = useRef<SwiperType | null>(null);
  const total = ourActivity.length;

  // ── State  Pop up Modal ────────────────────────────────────
  const [selectedItem, setSelectedItem] = useState<(typeof ourActivity)[0] | null>(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // ── Shared index state ──────────────────────────────────────────
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // loading image
  const [imageLoading, setImageLoading] = useState(true);
  useEffect(() => {
    setImageLoading(true);
  }, [galleryIndex, selectedItem]);

  const handleOpenModal = (item: any, index: number) => {
    setSelectedItemIndex(index);
    setSelectedItem(item);
  }

  function previousItem(selectedItemIndex: number) {
    if (selectedItemIndex !== null && selectedItemIndex > 0) {
      const newIndex = selectedItemIndex - 1;

      setSelectedItemIndex(newIndex);
      setSelectedItem(ourActivity[newIndex]);
    }
  }


  function nextItem(selectedItemIndex: number) {
    if (selectedItemIndex < ourActivity.length - 1) {
      const newIndex = selectedItemIndex + 1;

      setSelectedItemIndex(newIndex);
      setSelectedItem(ourActivity[newIndex]);
    }
  }

  // ── Autoplay Control ─────────────────────────
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      if (isPaused || selectedItem !== null) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
    }
  }, [isPaused, selectedItem]);

  return (
    <section className="relative py-16 bg-raisin-black-800/20 overflow-hidden">
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-brunswick-green-900/[0.03] blur-[110px]" />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-500/[0.03] blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Header */}
        <div className="flex flex-col gap-10 items-center  pb-10 border-b border-sea-salt/20">
          <div className="lg:col-span-8 space-y-10 text-center [text-align-last:center]">
            <span className="inline-block px-3.5 py-2 rounded-full border border-brunswick-500 text-lg font-sans uppercase tracking-widest text-brunswick-green-500 bg-raisin-black">
              {casesCopy.badge}
            </span>
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
            loop
            centeredSlides
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
            {ourActivity.map((item, index) => (
              <SwiperSlide key={item.id} className="h-auto">
                {({ isActive }) => (
                  <CaseCard
                    item={item}
                    index={index}
                    isCenter={isActive}
                    onOpenModal={handleOpenModal}
                    setIsPaused={setIsPaused}

                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="flex items-center gap-3 pt-10 justify-center">
            <button
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
            </button>
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
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-sea-salt/20 bg-black/40 text-sea-salt/80 transition-all hover:bg-red-500/80 hover:text-sea-salt hover:border-red-500"
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
                  onClick={() => previousItem(selectedItemIndex)}
                  disabled={selectedItemIndex === 0}
                  className="pointer-events-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-sea-salt/20 bg-black/40 text-sea-salt/80 transition-all hover:bg-brunswick-green-900 hover:text-sea-salt disabled:opacity-30 disabled:hover:bg-black/40 disabled:cursor-not-allowed backdrop-blur-sm shadow-lg"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => nextItem(selectedItemIndex)}
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
                  <div className="flex items-center justify-between">

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
                  {selectedItem.date}
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
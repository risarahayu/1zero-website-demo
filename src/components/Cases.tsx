import { useEffect, useState, useRef } from "react";
// Tambahkan icon X untuk tombol tutup pop-up
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { casesCopy } from "../copy";
import CTA from "./CTA";

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



const ourActivity = [
  {
    id: activity01,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity01}/GSDC.jpg`,
      `${import.meta.env.BASE_URL}Our Activity/${activity01}/IMG_2760.jpg`,
      `${import.meta.env.BASE_URL}Our Activity/${activity01}/IMG_1215.jpg`,
    ],
    title: "AusTrade Landing Pads & GSDC 22-25 June 2026",
    desc: "A concise LinkedIn launch post spotlighting landing pad initiatives and global sustainability design challenge momentum.",
    linkPost: "https://www.linkedin.com/feed/update/urn:li:activity:7477617222861975553",
    CTA: "See full in Linkedin",
  },
  {
    id: activity02,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity02}/Wisdom Shaping Sustainable Futures.png`,
    ],
    title: "EarthWise: Wisdom Shaping Sustainable Futures",
    desc: "A simple visual story about stewardship and sustainable futures in a changing world.",
    linkPost: "https://www.youtube.com/watch?v=peZPBfHptoo",
    CTA: "Watch on Youtube",
  },
  {
    id: activity03,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity03}/Path to Sustainable Growth.jpg`,
      `${import.meta.env.BASE_URL}Our Activity/${activity03}/20260624_165753.jpg`,
      `${import.meta.env.BASE_URL}Our Activity/${activity03}/PTSG 2026 - Press Release-21.jpg`,
    ],
    title: "Path to Sustainable Growth at Apurva Kempinski 24 June 2026",
    desc: "A short post highlighting sustainable hospitality strategy and the path to growth for a luxury resort brand.",
    linkPost: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7477951114466856962/?actorCompanyId=103705943",
    CTA: "See full in Linkedin",
  },
  {
    id: activity04,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity04}/Visit PLN.jpg`,
      `${import.meta.env.BASE_URL}Our Activity/${activity04}/IMG_2566.jpg`,
      `${import.meta.env.BASE_URL}Our Activity/${activity04}/IMG_2616.webp`,
    ],
    title: "Visit PLN",
    desc: "A short post highlighting sustainable hospitality strategy and the path to growth for a luxury resort brand.",
    linkPost: "https://www.linkedin.com/posts/1zero-biz_pln-energytransition-jakarta-activity-7482249126974476289-kfFh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3NxVkBzab9RTwcZ8BHJt_XzKZdIfZYLds",
    CTA: "See full in Linkedin",
  },
  {
    id: activity05,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity05}/Bali_Tech_Summit.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity05}/Bali_Tech_Summit_Detail1.webp`,

    ],
    title: "BALI TECH SUMMIT",
    desc: "𝗙𝗨𝗧𝗨𝗥𝗘 𝗢𝗙 𝗪𝗢𝗥𝗞 𝟮.𝟬: 𝗔𝗗𝗔𝗣𝗧𝗜𝗡𝗚 𝗧𝗢 𝗡𝗘𝗪 𝗥𝗘𝗔𝗟𝗜𝗧𝗜𝗘𝗦 𝘌𝘷𝘦𝘯𝘵 𝘣𝘺 𝘓𝘢 𝘍𝘳𝘦𝘯𝘤𝘩 𝘛𝘦𝘤𝘩 𝘐𝘯𝘥𝘰𝘯𝘦𝘴𝘪𝘢 🌟 Big News from 𝟭𝘇𝗲𝗿𝗼! 🌏🚀 We’re proud to announce that our solution architect @gungdp3 representing 𝟭𝘇𝗲𝗿𝗼 at the Bali Tech Summit today! 🎉 This year’s theme is “The Future of Work 2.0: Adapting to New Realities,” where industry leaders will discuss crucial topics like employee wellness, artificial intelligence, and climate change. 🌱🤖 Stay tuned for insights and highlights as we explore innovative solutions and collaborate on shaping the future of work! ",
    linkPost: "https://www.instagram.com/p/DA--yvKTt6o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    CTA: "See full in Instagram",
  },
  {
    id: activity06,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity06}/AI Social Media Event.webp`,

    ],
    title: "AI + Social Media Event",
    desc: "On January 31, our two Wonder Women attended an awesome workshop at @nebulabali , Canggu! Led by a top influencer from the US, the session dived into how AI is changing the game in social media strategy.",
    linkPost: "https://www.instagram.com/p/DFpBylOSQ4d/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    CTA: "See full in Instagram",
  },
  {
    id: activity07,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity07}/𝗖𝘆𝗯𝗲𝗿 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗠𝗲𝗲𝘁𝘂𝗽.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity07}/𝗖𝘆𝗯𝗲𝗿 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗠𝗲𝗲𝘁𝘂𝗽 Detail 1.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity07}/𝗖𝘆𝗯𝗲𝗿 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗠𝗲𝗲𝘁𝘂𝗽 Detail 2.webp`,
    ],
    title: "𝗖𝘆𝗯𝗲𝗿 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗠𝗲𝗲𝘁𝘂𝗽",
    desc: "1zero’s Solution Architect attended the 𝗖𝘆𝗯𝗲𝗿 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗠𝗲𝗲𝘁𝘂𝗽.  to dive deep into today’s biggest cybersecurity challenges. 🔥 Experts shared insights on how hackers execute attacks, the role of AI as both a threat and a defense, and why cybersecurity awareness is more important than ever.",
    linkPost: "https://www.instagram.com/p/DFtzqySShUS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    CTA: "See full in Instagram",
  },
  {
    id: activity08,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity08}/Empowering Women Entrepreneurs.webp`,
    ],
    title: "Empowering Women Entrepreneurs",
    desc: "One of our team member Mutia Rosa attended the LiftWomen Bali-Chapter Launch at Livit, Sanur, on Thursday, January 16th, 2025. The event focused on inspiring, supporting, and elevating female entrepreneurs in Bali and beyond. It was an incredible space where women founders, creators, innovators, mentors, and funders came together to connect, learn, and thrive.",
    linkPost: "https://www.linkedin.com/posts/liftwomen-femaleentrepreneurs-femalefounders-share-7287365666251186176-4Yml/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACaiIoYBEEy2963FCH3xa3bmKTp3gODlKeY",
    CTA: "See full in Linkedin",
  },
  {
    id: activity09,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity09}/Together for Breast Cancer Awareness.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity09}/Together for Breast Cancer Awareness Detail 1.webp`,

    ],
    title: "International Day Against Breast Cancer",
    desc: "October 2025, 1ZERO proudly joined the Steps of Hope Fun Walk, organised by Sudamala Resorts, Yayasan Sudamala Bumi Insani, and Bali Pink Ribbon Foundation at Sudamala Resort, Sanur. Bringing together more than 200 participants, the 3.5-kilometre walk was a meaningful reminder that every step can make a difference. Alongside the event, free breast cancer screenings were also provided for women in the Sanur area, encouraging early detection and greater awareness. At 1zero, we believe that creating positive impact starts with showing up, supporting one another, and taking action for the communities around us. Thank you to everyone who walked, contributed, and helped turn every step into a step of hope. 💗",
    linkPost: "https://www.instagram.com/reel/DQYoA8NEx9m/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    CTA: "See full in Instagram",
  },
  {
    id: activity10,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity10}/Hackathon.webp`,
      `${import.meta.env.BASE_URL}Our Activity/${activity10}/Hackathon Detail 1.webp`,

    ],
    title: "Brunei Hackathon",
    desc: "At Brunei Hackathon 2023, Mark represented 1zero as a speaker, sharing insights on innovation, entrepreneurship, and the role of technology in solving real-world challenges.  Bringing together developers, entrepreneurs, students, and technology enthusiasts, the hackathon provided a platform for collaboration, creativity, and knowledge exchange. Through Mark's session, 1zero contributed to inspiring the next generation of innovators by encouraging bold thinking, practical problem-solving, and the development of impactful digital solutions that drive meaningful change across the region.",
    linkPost: "",
    CTA: "",
  },
  {
    id: activity11,
    photos: [
      `${import.meta.env.BASE_URL}Our Activity/${activity11}/Coinfest.webp`,
    ],
    title: "Coinfest",
    desc: "A great day at Coinfest! Always inspiring to meet passionate people, exchange ideas, and learn from the latest developments in the Web3 and blockchain ecosystem. Thank you to everyone we had the chance to connect with—we're excited to see what comes next.",
    linkPost: "",
    CTA: "",
  },

];

// ─── Shared card renderer ────────────────────────────────────────────────────
function CaseCard({
  item,
  isCenter,
  onOpenModal, // <-- add pop up modal handler
}: {
  item: (typeof ourActivity)[0];
  isCenter: boolean;
  onOpenModal: (item: (typeof ourActivity)[0]) => void;
}) {
  return (
    <div
      onClick={() => onOpenModal(item)} // <-- Pop up modal instead of window.open
      className={`
        group relative h-full min-h-[350px] rounded-3xl bg-sea-salt/6 p-5
        flex flex-col justify-between cursor-pointer overflow-hidden
        transition-all duration-500 hover:scale-[1.01]
        ${isCenter ? "opacity-100 border border-brunswick-green-500" : "opacity-55 hover:opacity-75 border border-sea-salt/20"}
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
            <p className={`font-sans text-base sm:text-lg font-bold line-clamp-2 ${isCenter ? "text-brunswick-green-500" : "text-sea-salt"}`}>
              {item.title}
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
  const total = ourActivity.length;

  // ── State  Pop up Modal ────────────────────────────────────
  const [selectedItem, setSelectedItem] = useState<(typeof ourActivity)[0] | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // ── Shared index state ──────────────────────────────────────────
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ── Mobile/tablet slider (like Portfolio) ───────────────────────
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  // Virtual index for infinite-loop mobile slider (tripled array, start at middle set)
  const [virtualIndex, setVirtualIndex] = useState(total); // index 'total' = first item in Set B
  const [containerWidth, setContainerWidth] = useState(0);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
      if (sliderContainerRef.current) {
        setContainerWidth(sliderContainerRef.current.clientWidth);
      }
    };
    window.addEventListener("resize", onResize);
    // Measure on mount
    if (sliderContainerRef.current) {
      setContainerWidth(sliderContainerRef.current.clientWidth);
    }
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isDesktop = windowWidth >= 1024;

  // Mobile card width = full container width (1 card per view)
  const mobileCardWidth = containerWidth > 0 ? containerWidth : windowWidth - 32;
  const mobileGap = 0;

  const mobileTranslateX = (idx: number) => idx * (mobileCardWidth + mobileGap);

  // Tripled array for infinite-loop mobile slider
  const tripled = [
    ...ourActivity.map((p, i) => ({ ...p, uniqueId: `${p.id}-set0-${i}` })),
    ...ourActivity.map((p, i) => ({ ...p, uniqueId: `${p.id}-set1-${i}` })),
    ...ourActivity.map((p, i) => ({ ...p, uniqueId: `${p.id}-set2-${i}` })),
  ];

  const handleMobileNext = () => {
    if (!isTransitionEnabled) return;
    setVirtualIndex((prev) => prev + 1);
  };

  const handleMobilePrev = () => {
    if (!isTransitionEnabled) return;
    setVirtualIndex((prev) => prev - 1);
  };

  // Reset snap for infinite loop on mobile
  useEffect(() => {
    if (isDesktop) return;
    let id: ReturnType<typeof setTimeout>;
    if (virtualIndex >= total * 2) {
      id = setTimeout(() => {
        setIsTransitionEnabled(false);
        setVirtualIndex(total);
        setTimeout(() => setIsTransitionEnabled(true), 50);
      }, 500);
    } else if (virtualIndex < total) {
      id = setTimeout(() => {
        setIsTransitionEnabled(false);
        setVirtualIndex(total * 2 - 1);
        setTimeout(() => setIsTransitionEnabled(true), 50);
      }, 500);
    }
    return () => clearTimeout(id);
  }, [virtualIndex, isDesktop]);

  // Display index for dots / counter
  const mobileDisplayIndex = ((virtualIndex % total) + total) % total;

  // ── Desktop visible indices (4 at once) ────────────────────────
  const getDesktopIndices = () => [
    (activeIndex - 1 + total) % total,
    activeIndex,
    (activeIndex + 1) % total,
    (activeIndex + 2) % total,
  ];

  const handleDesktopNext = () => setActiveIndex((prev) => (prev + 1) % total);
  const handleDesktopPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  // ── Autoplay (Hentikan saat modal aktif) ─────────────────────────
  useEffect(() => {
    if (isPaused || selectedItem !== null) return; // <-- Tambah kondisi agar slider berhenti jika popup terbuka
    if (isDesktop) {
      const id = setInterval(handleDesktopNext, 4000);
      return () => clearInterval(id);
    } else {
      if (!isTransitionEnabled) return;
      const id = setInterval(handleMobileNext, 4000);
      return () => clearInterval(id);
    }
  }, [isPaused, activeIndex, virtualIndex, isDesktop, isTransitionEnabled, selectedItem]);

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

        {/* ── DESKTOP Carousel (4 cards side-by-side) ────────────── */}
        {isDesktop && (
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex gap-5 transition-all duration-500">
              {getDesktopIndices().map((itemIndex, pos) => {
                const item = ourActivity[itemIndex];
                const isCenter = pos === 1;
                return (
                  <div
                    key={`${item.id}-${pos}`}
                    className={`${isCenter ? "flex-[1.4]" : "flex-1"}`}
                  >
                    {/* Kirim setSelctedItem ke Card */}
                    <CaseCard item={item} isCenter={isCenter} onOpenModal={setSelectedItem} />
                  </div>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3 pt-10 justify-center">
              <button
                onClick={isDesktop ? handleDesktopPrev : handleMobilePrev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
              </button>
              <span className="font-sans text-lg text-sea-salt tracking-wider">
                {String((isDesktop ? activeIndex : mobileDisplayIndex) + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
              <button
                onClick={isDesktop ? handleDesktopNext : handleMobileNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ── MOBILE / TABLET Slider ─────────── */}
        {!isDesktop && (
          <div
            ref={sliderContainerRef}
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={`flex ${isTransitionEnabled ? "transition-transform duration-500 ease-out" : ""}`}
              style={{ transform: `translateX(-${mobileTranslateX(virtualIndex)}px)` }}
            >
              {tripled.map((item, index) => (
                <div
                  key={item.uniqueId}
                  style={{ width: mobileCardWidth, flexShrink: 0 }}
                >
                  <CaseCard
                    item={item}
                    isCenter={index === virtualIndex}
                    onOpenModal={setSelectedItem} // <-- Kirim handler
                  />
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3 pt-10 justify-center">
              <button
                onClick={isDesktop ? handleDesktopPrev : handleMobilePrev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
              </button>
              <span className="font-sans text-lg text-sea-salt tracking-wider">
                {String((isDesktop ? activeIndex : mobileDisplayIndex) + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
              <button
                onClick={isDesktop ? handleDesktopNext : handleMobileNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sea-salt/20 bg-sea-salt/20 text-sea-salt transition-all hover:bg-brunswick-green-900 hover:text-sea-salt"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}
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
              className="absolute top-4 right-4 text-sea-salt/60 hover:text-sea-salt transition-colors bg-black/20 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Pop Up Content */}
            <div className="flex flex-col gap-6 mt-4">
              {/* {selectedItem.photo && (
                <div className="relative h-[250px] sm:h-[350px] w-full overflow-hidden rounded-2xl bg-sea-salt/6 border border-sea-salt/10">
                  <img
                    src={selectedItem.photo}
                    alt={selectedItem.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              )} */}

              {/* Photo Slider Gallery */}

              {selectedItem.photos && selectedItem.photos.length > 1 ? (
                <div className="w-full space-y-4">

                  {/* Image Slider */}
                  <div className="relative w-full h-[250px] sm:h-[350px] overflow-hidden rounded-2xl border border-sea-salt/10">
                    <img
                      src={selectedItem.photos[galleryIndex]}
                      alt={`${selectedItem.title} - ${galleryIndex + 1}`}
                      className="absolute inset-0 h-full w-full object-cover animate-in fade-in"
                    />
                  </div>
                  {/* Navigation Arrows */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        setGalleryIndex((prevIndex) =>
                          prevIndex === 0 ? selectedItem.photos!.length - 1 : prevIndex - 1
                        );
                      }}
                      className="text-sea-salt/60 hover:text-sea-salt transition-colors bg-black/20 rounded-full p-2"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
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
                    <button
                      onClick={() => {
                        setGalleryIndex((prevIndex) =>
                          prevIndex === selectedItem.photos!.length - 1 ? 0 : prevIndex + 1
                        );
                      }}
                      className="text-sea-salt/60 hover:text-sea-salt transition-colors bg-black/20 rounded-full p-2"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="w-full space-y-4">
                  <div className="relative w-full h-[250px] sm:h-[350px] overflow-hidden rounded-2xl border border-sea-salt/10">
                    <img
                      src={selectedItem.photos[0]}
                      alt={selectedItem.title}
                      className="absolute inset-0 h-full w-full object-cover animate-in fade-in"
                    />
                  </div>
                </div>
              )
              }

              <div className="space-y-4">
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-brunswick-green-500">
                  {selectedItem.title}
                </h3>
                <p className="font-sans text-base sm:text-lg text-sea-salt/90">
                  {selectedItem.desc}
                </p>
              </div>

              {selectedItem.linkPost && (
                <div className="pt-4 border-t border-sea-salt/10">
                  <a
                    href={selectedItem.linkPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-sans font-semibold px-6 py-3 rounded-full text-lg cursor-pointer bg-brunswick-green-900 text-sea-salt hover:bg-brunswick-green-600 transition-all w-full sm:w-auto"
                  >
                    {selectedItem.CTA}
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
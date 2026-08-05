import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { aboutCopy } from '../../copy';

interface HeroAboutProps {
    lang: 'id' | 'en';
}

const HeroAbout: React.FC<HeroAboutProps> = ({ lang }) => {
    // ref just use in div, default null
    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const texts = aboutCopy;

    // carousel animation
    const t = texts[lang];

    // Mengubah active index berdasarkan posisi scroll manual/otomatis
    const handleScroll = () => {
        const carousel = carouselRef.current;

        if (!carousel) return;

        const cards = Array.from(carousel.children) as HTMLElement[];

        const center =
            carousel.scrollLeft + carousel.offsetWidth / 2;

        let nearest = 0;
        let minDistance = Infinity;

        cards.forEach((card, idx) => {
            const cardCenter =
                card.offsetLeft + card.offsetWidth / 2;

            const distance = Math.abs(center - cardCenter);

            if (distance < minDistance) {
                minDistance = distance;
                nearest = idx;
            }
        });

        setActiveIndex(nearest);
    };

    // Fungsi klik dot untuk scroll ke card tertentu
    const scrollToCard = (index: number) => {
        const carousel = carouselRef.current;

        if (!carousel) return;

        const card = carousel.children[index] as HTMLElement;

        card?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
    };

    // Logic untuk Auto-Scroll Carousel
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const interval = setInterval(() => {
            if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 10) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: 324, behavior: 'smooth' });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const swiperRef = useRef<SwiperType | null>(null);


    return (
        <>
            <header className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" >
                <div className="space-y-10 ">
                    <span className="inline-block px-3.5 py-2 rounded-full border border-brunswick-500 text-lg font-sans uppercase tracking-widest text-brunswick-green-500  bg-raisin-black">
                        {t.sub}
                    </span>
                    <div className="space-y-6">
                        <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-extrabold text-sea-salt leading-[1.1]">
                            {t.title}
                        </h1>
                        <p className="text-sea-salt/90 text-base sm:text-lg max-w-md">
                            {t.desc}
                        </p>
                    </div>
                </div>
                <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        `}</style>
                <div className="relative group">
                    <Swiper
                        className="w-full py-10 h-auto"
                        modules={[Autoplay, Pagination]}
                        pagination={{
                            clickable: true,
                            el: ".hero-pagination",
                        }}
                        loop={false}
                        // centeredSlides
                        grabCursor
                        speed={700}
                        spaceBetween={12}
                        slidesPerView="auto"
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
                        <SwiperSlide className="!w-[200px] md:!w-[350px] !h-auto">
                            {/* Value Card 1 */}
                            <div className="flex-shrink-0 h-full   snap-center text-start space-y-6 group relative flex flex-col  p-6 rounded-3xl border border-brunswick-green-500  hover:border-brunswick-green-900 transition-all duration-300 shadow-2xl overflow-hidden cursor-pointer backdrop-blur bg-sea-salt/6">
                                <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl"><i className="fas fa-globe-asia"></i></div>
                                <div className="w-12 h-12 rounded-xl bg-sea-salt/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xl  shadow-lg shadow-indigo-500/10">
                                    <i className="fas fa-globe-asia"></i>
                                </div>
                                <h3 className="font-sans text-2xl sm:text-3xl font-bold mb-4">{t.v1t}</h3>
                                <p className="text-sea-salt/90 text-base sm:text-lg ">{t.v1d}</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-[200px] md:!w-[350px] !h-auto">
                            {/* Value Card 2 */}
                            <div className="flex-shrink-0 h-full   snap-center text-start space-y-6 group relative flex flex-col  p-6 rounded-3xl border border-brunswick-green-500  hover:border-brunswick-green-900 transition-all duration-300 shadow-2xl overflow-hidden cursor-pointer backdrop-blur bg-sea-salt/6">
                                <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl"><i className="fas fa-wifi"></i></div>
                                <div className="w-12 h-12 rounded-xl bg-sea-salt/20 border border-brunswick-green-500/30 flex items-center justify-center text-brunswick-green-500 text-xl  shadow-lg shadow-brunswick-green-500/10">
                                    <i className="fas fa-wifi"></i>
                                </div>
                                <h3 className="font-sans text-2xl sm:text-3xl font-bold mb-4">{t.v2t}</h3>
                                <p className="text-sea-salt/90 text-base sm:text-lg ">{t.v2d}</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="!w-[200px] md:!w-[350px] !h-auto">
                            {/* Value Card 3 */}
                            <div className="flex-shrink-0 h-full   snap-center text-start space-y-6 group relative flex flex-col  p-6 rounded-3xl border border-brunswick-green-500  hover:border-brunswick-green-900 transition-all duration-300 shadow-2xl overflow-hidden cursor-pointer backdrop-blur bg-sea-salt/6">
                                <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl"><i className="fas fa-leaf"></i></div>
                                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 text-xl  shadow-lg shadow-pink-500/10">
                                    <i className="fas fa-leaf"></i>
                                </div>
                                <h3 className="font-sans text-2xl sm:text-3xl font-bold mb-4">{t.v3t}</h3>
                                <p className="text-sea-salt/90 text-base sm:text-lg ">{t.v3d}</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="hero-pagination"></div>
                </div>
            </header >
        </>
    );
};

export default HeroAbout;
import React, { useEffect, useRef, useState } from 'react'

interface HeroAboutProps {
    lang: 'id' | 'en';
}

const HeroAbout: React.FC<HeroAboutProps> = ({ lang }) => {
    // ref just use in div, default null
    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const texts = {
        id: {
            sub: 'Melampaui Konvensional',
            title: 'Membangun Masa Depan dengan Hati.',
            desc: 'Tim remote asal Indonesia yang mendobrak batas tradisional melalui teknologi dan empati.',
            v1t: 'Kultur Berbeda',
            v1d: 'Bukan budaya "Asal Bapak Senang". Kami menghargai kejujuran dan struktur yang flat.',
            v2t: '100% Remote',
            v2d: 'Bekerja dari pantai atau gunung. Kami percaya pada integritas tim kami.',
            v3t: 'Fokus SDG',
            v3d: 'Setiap baris kode kami berkontribusi untuk dunia yang lebih berkelanjutan.',
        },
        en: {
            sub: 'Beyond Conventional',
            title: 'Crafting Future with Heart.',
            desc: 'A remote team based in Indonesia, breaking traditional boundaries through technology and empathy.',
            v1t: 'Indonesian Pride',
            v1d: "No more 'Yes Men' culture. We value honesty and flat hierarchy.",
            v2t: 'Remote 2.0',
            v2d: 'Work from the beach or the mountains. We trust our people.',
            v3t: 'Sustainability',
            v3d: 'Every code we write contributes to a better sustainable world.',
        }
    };

    // carousel animation
    const t = texts[lang];

    // Mengubah active index berdasarkan posisi scroll manual/otomatis
    const handleScroll = () => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        const cardWidth = 300 + 24; // min-w-[300px] + gap-6 (24px)
        const index = Math.round(carousel.scrollLeft / cardWidth);
        setActiveIndex(Math.min(Math.max(index, 0), 2));
    };

    // Fungsi klik dot untuk scroll ke card tertentu
    const scrollToCard = (index: number) => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        const cardWidth = 300 + 24;
        carousel.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
        setActiveIndex(index);
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

    return (
        <>
            <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

            <header className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-indigo-400 font-semibold tracking-widest text-sm uppercase mb-4 block">
                        {t.sub}
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                        {t.title}
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-md">
                        {t.desc}
                    </p>
                </div>

                <div className="relative group">
                    <div 
                        ref={carouselRef} 
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-10"
                    >
                        {/* Value Card 1 */}
                        <div className="min-w-[300px] snap-center glass p-8 rounded-[2rem] relative overflow-hidden flex flex-col items-start">
                            <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl"><i className="fas fa-globe-asia"></i></div>
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xl mb-6 shadow-lg shadow-indigo-500/10">
                                <i className="fas fa-globe-asia"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{t.v1t}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t.v1d}</p>
                        </div>

                        {/* Value Card 2 */}
                        <div className="min-w-[300px] snap-center glass p-8 rounded-[2rem] relative overflow-hidden flex flex-col items-start">
                            <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl"><i className="fas fa-wifi"></i></div>
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl mb-6 shadow-lg shadow-emerald-500/10">
                                <i className="fas fa-wifi"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{t.v2t}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t.v2d}</p>
                        </div>

                        {/* Value Card 3 */}
                        <div className="min-w-[300px] snap-center glass p-8 rounded-[2rem] relative overflow-hidden flex flex-col items-start">
                            <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl"><i className="fas fa-leaf"></i></div>
                            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 text-xl mb-6 shadow-lg shadow-pink-500/10">
                                <i className="fas fa-leaf"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{t.v3t}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t.v3d}</p>
                        </div>
                    </div>

                    {/* Dynamic Clickable Dots */}
                    <div className="flex gap-2 mt-4 justify-center">
                        {[0, 1, 2].map((idx) => (
                            <button
                                key={idx}
                                onClick={() => scrollToCard(idx)}
                                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                    activeIndex === idx ? 'bg-indigo-500 w-6' : 'bg-white/20 hover:bg-white/40 w-2'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeroAbout;
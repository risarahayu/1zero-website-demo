import React from "react";
import "../../css/about.css";
import BookingButton from "../BookingButton";
import { aboutCopy, headerCopy } from '../../copy'; // Adjust path if needed

const CtaBanner = () => {
    return (
        <section className="relative mt-5 border border-emerald-500/20 rounded-2xl overflow-hidden h-[200px] sm:h-[700px] bg-gradient-to-b from-[#062114] to-[#010a05]">
            <img
                src={`${import.meta.env.BASE_URL}Team Member Photo/1zero Teams.webp`}
                alt=""
                className="absolute inset-0 w-full h-full sm:object-cover hidden sm:block"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 flex flex-col gap-5 items-center justify-center h-full">
                <h2 className="text-2xl font-bold [text-shadow:2px_2px_10px_rgba(0,0,0,0.6)]">
                    {aboutCopy.en.ctaTitle}
                </h2>
                <BookingButton />
            </div>
        </section>

    );
};

export default CtaBanner;
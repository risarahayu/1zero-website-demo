import React from "react";
import "../../css/about.css";
import BookingButton from "../BookingButton";

const CtaBanner = () => {
    return (
        <section className="relative mt-5 border border-emerald-500/20 rounded-2xl overflow-hidden h-[700px]">
            <img
                src={`${import.meta.env.BASE_URL}Team Member Photo/1zero Teams.webp`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover -translate-y-[5%]"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 flex flex-col gap-5 items-center ">
                <h2 className="text-5xl pt-[30px] mb-auto font-bold [text-shadow:2px_2px_10px_rgba(0,0,0,0.6)]">Let's Work Together</h2>
                <BookingButton className="mb-auto" />
            </div>
        </section>

    );
};

export default CtaBanner;
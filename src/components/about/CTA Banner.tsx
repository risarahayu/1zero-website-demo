import React from "react";
import "../../css/about.css";
import BookingButton from "../BookingButton";
import { aboutCopy, headerCopy } from '../../copy'; // Adjust path if needed

const CtaBanner = () => {
    return (
        <section className="relative mt-5 overflow-hidden rounded-2xl border border-brunswick-green-500/20 h-[200px] sm:h-[700px]">
            {/* Background Image */}
            <img
                src={`${import.meta.env.BASE_URL}Team Member Photo/1zero Teams.webp`}
                alt="1zero Team"
                className="absolute inset-0 hidden h-full w-full object-cover sm:block"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Content */}
            <div className="absolute inset-0 z-10 px-6 py-8 sm:px-12 sm:py-10 flex h-full flex-col justify-center items-center text-center">
                {/* <h2 className="font-sans text-3xl sm:text-5xl font-bold text-brunswick-green-900 max-w-2xl">
                    Let's Work Together
                </h2> */}

                <div className="w-full max-w-2xl">
                    <div className="mx-auto inline-block">
                        <BookingButton className=""/>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default CtaBanner;
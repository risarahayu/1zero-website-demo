import { useState, useEffect } from "react";
import { Activity } from "../../types";
import { previousItem, nextItem, formatDateRange } from "../../ulitity/activityUtils";
import { ArrowLeft, ArrowRight, ImageIcon, X } from "lucide-react";
import { SeeAllCard } from "./SeeAllCard";
import { Icon } from "@iconify/react";


export function ActivityModal({
    selectedItem,
    setSelectedItem,
    selectedItemIndex,
    setSelectedItemIndex,
    displayedActivities,
    total,
    showSeeAllSlide,
    setShowSeeAllSlide,
    showArrowButton
}: {
    selectedItem: Activity | null;
    setSelectedItem: (item: Activity | null) => void;
    selectedItemIndex: number;
    setSelectedItemIndex: (index: number) => void;
    displayedActivities: Activity[];
    total?: number;
    showSeeAllSlide: boolean;
    setShowSeeAllSlide: (show: boolean) => void;
    showArrowButton?: boolean;
}) {

    const socialIcons = {
        Instagram: "mdi:instagram",
        Linkedin: "mdi:linkedin",
        Facebook: "mdi:facebook",
        Youtube: "mdi:youtube",
        X: "ri:twitter-x-fill",
        Tiktok: "ic:baseline-tiktok",
        Website: "mdi:web",
    };


    const [galleryIndex, setGalleryIndex] = useState(0);
    // loading image
    const [imageLoading, setImageLoading] = useState(true);
    useEffect(() => {
        setImageLoading(true);
    }, [galleryIndex, selectedItem]);
    return (
        <>
            {selectedItem && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                    onClick={() => setSelectedItem(null)} // close modal when click overlay background
                >
                    <div
                        className="relative w-full max-w-2xl max-h-[80vh] mt-[20px] custom-scrollbar overflow-y-auto rounded-3xl bg-raisin-black-800 border border-sea-salt/20 p-6 sm:p-8"
                        onClick={(e) => e.stopPropagation()} //prevent close modal when click modal background
                    >

                        {/* Modal Navigation */}
                        {showArrowButton &&
                            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full px-2 sm:px-4 z-10 flex justify-between items-center pointer-events-none">
                                <button
                                    onClick={() => {
                                        if (showSeeAllSlide) {
                                            setShowSeeAllSlide(false);
                                            return;
                                        }

                                        previousItem(
                                            selectedItemIndex,
                                            displayedActivities,
                                            setSelectedItemIndex,
                                            setSelectedItem
                                        );
                                    }}
                                    disabled={selectedItemIndex === 0}
                                    className="pointer-events-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-sea-salt/20 bg-black/40 text-sea-salt/80 transition-all hover:bg-brunswick-green-900 hover:text-sea-salt disabled:opacity-30 disabled:hover:bg-black/40 disabled:cursor-not-allowed backdrop-blur-sm shadow-lg"
                                >
                                    <ArrowLeft className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={() => {
                                        if (selectedItemIndex === total - 1) {
                                            setShowSeeAllSlide(true);
                                            return;
                                        }
                                        nextItem(selectedItemIndex, displayedActivities, setSelectedItemIndex, setSelectedItem)
                                    }}
                                    disabled={showSeeAllSlide}
                                    className="pointer-events-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-sea-salt/20 bg-black/40 text-sea-salt/80 transition-all hover:bg-brunswick-green-900 hover:text-sea-salt disabled:opacity-30 disabled:hover:bg-black/40 disabled:cursor-not-allowed backdrop-blur-sm shadow-lg"
                                >
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </div>
                        }

                        {/* Close Button */}
                        {showSeeAllSlide ? (
                            // =========================
                            // CTA PAGE
                            // =========================
                            <SeeAllCard isCenter={false} />
                        ) : (
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

                                {/* Photo Slider Gallery */}

                                {selectedItem.photos && selectedItem.photos.length > 1 ? (
                                    <div className="w-full space-y-4">

                                        {/* Image Slider */}
                                        <div className="relative w-full h-[250px] sm:h-[350px] overflow-hidden rounded-2xl border border-sea-salt/10">
                                            {imageLoading && (
                                                <div className="absolute inset-0 overflow-hidden rounded-2xl bg-brunswick-green-900/10">
                                                    <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-brunswick-green-800/20 via-brunswick-green-500/35 to-brunswick-green-800/20" />

                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <ImageIcon className="h-10 w-10 text-sea-salt/30" />
                                                    </div>
                                                </div>
                                            )}
                                            <img
                                                src={selectedItem.photos[galleryIndex]}
                                                alt={`${selectedItem.title} - ${galleryIndex + 1}`}
                                                onLoad={() => setImageLoading(false)}
                                                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${imageLoading ? "opacity-0" : "opacity-100"}`}
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
                                                <div className="absolute inset-0 overflow-hidden rounded-2xl bg-brunswick-green-900/10">
                                                    <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-brunswick-green-800/20 via-brunswick-green-500/35 to-brunswick-green-800/20" />

                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <ImageIcon className="h-10 w-10 text-sea-salt/30" />
                                                    </div>
                                                </div>
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
                        )}
                    </div>
                </div>
            )
            }
        </>
    )
}
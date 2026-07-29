import { ourActivity } from "../../data.ts"
import { getSortedActivities } from "../../ulitity/activityUtils"
import { CaseCard } from "./CaseCard.tsx";
import { casesCopy } from "../../copy.ts";
import { useState } from "react";

export function ActivitySection() {

    const ITEMS_PER_PAGE = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const sortedActivity = getSortedActivities(ourActivity);

    const totalPages = Math.ceil(
        sortedActivity.length / ITEMS_PER_PAGE
    );
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const displayedActivities = sortedActivity.slice(
        startIndex,
        endIndex
    );

    return (
        <section className="py-16 text-slate-50 relative space-y-10">
            <div className="flex justify-center">
                <div className="flex inline-block px-3.5 py-2 rounded-full border border-brunswick-500 text-lg font-sans  tracking-widest text-brunswick-green-500 bg-raisin-black">
                    <span>1zero </span>
                    <span className="uppercase">
                        {casesCopy.badge}
                    </span>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6  mx-auto">
                {displayedActivities.map((item, index) => (
                    <CaseCard
                        key={index}
                        item={item}
                        index={index}
                        // isCenter={index === 0}
                        onOpenModal={() => { }}
                        setIsPaused={() => { }}
                    />
                ))}
            </div>

            <div className="flex justify-center gap-3 mt-12">
                <button
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-full border border-sea-salt/20 disabled:opacity-40"
                >
                    Previous
                </button>

                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded-full border
                            ${currentPage === index + 1
                                ? "bg-brunswick-green-900 text-brunswick-green-500"
                                : "border-sea-salt/20"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-full border border-sea-salt/20 disabled:opacity-40"
                >
                    Next
                </button>
            </div>

        </section>
    )
}
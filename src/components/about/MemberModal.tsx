export default function MemberModal(
    {
        selectedMember,
        setSelectedMember,
        handleModalPrev,
        isDesktop,
        Icon,
        setIsPaused,
        setSelectedIndex,
        handleModalNext
    }
) {
    return (
        <>
            {/* MODAL ONLY MOBILE + TABLET */}
            {selectedMember && !isDesktop && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-raisin-black-900/80 backdrop-blur-sm p-6">

                    {/* Prev Arrow */}
                    <button
                        onClick={handleModalPrev}
                        className="absolute left-2 z-20 w-10 h-10 rounded-full bg-brunswick-green-900/80 hover:bg-brunswick-green-500 text-sea-salt flex items-center justify-center text-2xl transition-all duration-200 shadow-lg"
                        aria-label="Previous member"
                    >
                        <Icon icon="mdi:chevron-left" width="24" />
                    </button>

                    <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden border border-brunswick-green-900 bg-raisin-black-900-950 shadow-2xl mt-[138px]">

                        {/* Close button */}
                        <button
                            onClick={() => {
                                setSelectedMember(null);
                                setIsPaused(false);
                            }}
                            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-raisin-black-900/60 hover:bg-raisin-black-900/60 text-sea-salt flex items-center justify-center transition"
                        >
                            ✕
                        </button>



                        {/* Layout */}
                        <div className="grid md:grid-cols-[240px_1fr]">

                            {/* Image */}
                            <div className="relative h-64 md:h-full">
                                <img
                                    src={selectedMember.images?.imageDisplay}
                                    className="w-full h-full object-cover"
                                />

                                {/* gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col space-y-8">

                                {/* Header */}
                                <div className="space-y-2 text-start">
                                    <h3 className="font-sans text-2xl font-bold text-brunswick-green-500">
                                        {selectedMember.name}
                                    </h3>

                                    <p className="text-raisin-black-900-400">
                                        {selectedMember.role}
                                    </p>
                                </div>

                                {/* BIO */}
                                <div className="space-y-4 text-start">
                                    <h4 className="font-sans text-xl font-bold text-sea-salt">
                                        Get to Know Me
                                    </h4>

                                    <p className="text-sea-salt/90">
                                        {selectedMember.bio}
                                    </p>
                                </div>

                                {/* SOCIAL */}
                                <div className="space-y-4">

                                    <h4 className="font-sans text-xl font-bold text-sea-salt text-start">
                                        Where to Find Me
                                    </h4>

                                    <div className="space-y-3">

                                        {selectedMember.socialMediaAccounts.linkedin.name && (
                                            <a
                                                href={selectedMember.socialMediaAccounts.linkedin.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-3 text-sea-salt/80 hover:text-brunswick-green-500 transition-colors"
                                            >
                                                <Icon icon="mdi:linkedin" width="20" />
                                                <span>LinkedIn</span>
                                            </a>
                                        )}

                                        {selectedMember.socialMediaAccounts.github?.name && (
                                            <a
                                                href={selectedMember.socialMediaAccounts.github.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-3 text-sea-salt/80 hover:text-brunswick-green-500 transition-colors"
                                            >
                                                <Icon icon="mdi:github" width="20" />
                                                <span>GitHub</span>
                                            </a>
                                        )}

                                        {selectedMember.socialMediaAccounts.dribble?.name && (
                                            <a
                                                href={selectedMember.socialMediaAccounts.dribble.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-3 text-sea-salt/80 hover:text-brunswick-green-500 transition-colors"
                                            >
                                                <Icon icon="mdi:dribbble" width="20" />
                                                <span>Dribbble</span>
                                            </a>
                                        )}

                                    </div>
                                </div>

                                {/* SDGs */}
                                <div className="space-y-4">

                                    <h4 className="font-sans text-xl font-bold text-sea-salt text-start">
                                        My Sustainability Focus
                                    </h4>

                                    <div className="flex flex-wrap gap-2">
                                        {selectedMember.sdgs.map((sdg, index) => (
                                            <img
                                                key={sdg.id}
                                                src={`${import.meta.env.BASE_URL}E SDG Icons WEB/E-WEB-Goal-${String(sdg.id).padStart(2, "0")}.png`}
                                                alt={`SDG ${sdg.id}`}
                                                className="w-16 h-16 object-contain cursor-pointer hover:scale-110 transition rounded"
                                                onClick={() => setSelectedIndex(index)}
                                            />
                                        ))}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Next Arrow */}
                    <button
                        onClick={handleModalNext}
                        className="absolute right-2 z-20 w-10 h-10 rounded-full bg-brunswick-green-900/80 hover:bg-brunswick-green-500 text-sea-salt flex items-center justify-center text-2xl transition-all duration-200 shadow-lg"
                        aria-label="Next member"
                    >
                        <Icon icon="mdi:chevron-right" width="24" />
                    </button>

                </div>
            )
            }
        </>
    );
}
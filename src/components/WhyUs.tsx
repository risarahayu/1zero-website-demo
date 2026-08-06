import { useState } from "react";
import { whyUsPoints } from "../data";
import { members as teamMembers } from "./about/TeamSection";
import { TeamMember } from "./about/TeamSection";
import { Users, CheckCircle, Flame, Target, Infinity, Video } from "lucide-react";
import { whyUsCopy } from "../copy";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import MemberModal from "./about/MemberModal";
import { handleSDGClick } from '../ulitity/sdgUtils';


// We keep onOpenBooking in the interface so App.tsx doesn't break, 
// but we don't need to destructure it if we aren't using it here.
interface WhyUsProps {
  onOpenBooking: () => void;
}

export default function WhyUs(props: WhyUsProps) {

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Flame className="h-5 w-5 text-brunswick-green-500" />;
      case 1:
        return <Infinity className="h-5 w-5 text-brunswick-green-500" />;
      case 2:
        return <Users className="h-5 w-5 text-brunswick-green-500" />;
      case 3:
        return <Target className="h-5 w-5 text-brunswick-green-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-brunswick-green-500" />;
    }
  };
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const handleModalPrev = () => {
    const currentIdx = teamMembers.findIndex((m) => m.name === selectedMember?.name);
    const prevIdx = (currentIdx - 1 + teamMembers.length) % teamMembers.length;
    setSelectedMember(teamMembers[prevIdx]);
    setActiveIdx(prevIdx);
  };


  return (
    <section id="why-us" className="relative py-16 bg-raisin-black-900">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brunswick-green-900/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Title Area */}
        <div className="space-y-10 text-center">
          <span className="inline-block px-3.5 py-2 rounded-full border border-brunswick-500 text-lg font-sans  tracking-widest text-brunswick-green-500  bg-raisin-black ">
            <span className="uppercase">{whyUsCopy.sectionTag}</span><span className="text-brunswick-green-500">1zero</span>
          </span>
          <div className="space-y-6 justify-self-center text-center">
            <h2 className="font-sans text-3xl leading-normal sm:text-5xl sm:leading-normal font-bold text-sea-salt">
              {whyUsCopy.titleLine1} <br /> {whyUsCopy.titleLine2}
            </h2>

          </div>


          {/* Contents split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

            {/* LEFT: THE INTERACTIVE VIDEO CALL MOCKUP */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-sea-salt/20 bg-raisin-black-900/60 p-5 shadow-2xl relative space-y-4 h-auto">
              {/* Header bar */}
              <div className="flex items-center justify-between pb-3 border-b border-sea-salt/20 text-lg font-sans text-sea-salt">
                <div className="flex items-center gap-2">
                  <span className="text-sea-salt font-medium">{whyUsCopy.meetOurTeam}</span>
                </div>
                <Link to={`${import.meta.env.BASE_URL}about`} >
                  <p className="font-sans text-base sm:text-lg text-sea-salt/90 tracking-wider font-semibold ml-2 select-none  font-bold text-brunswick-green-500 cursor-pointer hover:underline transition-all duration-300 transform active:scale-95">{whyUsCopy.seeAllTeam}</p>
                </Link>
              </div>

              {/* Video participants marquee */}
              <div className="flex flex-col gap-3 flex-1 overflow-hidden relative w-full justify-center ">
                {/* Row 1: Right to Left */}
                <div className="flex gap-3 animate-marquee w-max h-full ">
                  {[...teamMembers.slice(0, 4), ...teamMembers.slice(0, 4)].map((member, idx) => (
                    <button
                      key={`row1-${idx}`}
                      onClick={() => setSelectedMember(member)}
                      className="group relative w-40  h-full shrink-0 cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between p-3 border-sea-salt/20 hover:border-brunswick-green-500"
                    >
                      <div className="relative h-1/2 w-1/2 rounded-xl overflow-hidden border border-sea-salt self-center">
                        <img
                          src={member.images?.imageDisplay}
                          alt={member.name}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Indicators */}
                      <div className="space-y-1.5 mt-auto z-10 pt-2 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <div className="flex items-center ">
                          <span className="flex-1
                            truncate
                            font-sans
                            text-base
                            font-bold
                            text-sea-salt/90
                            tracking-wide
                            group-hover:text-brunswick-green-500
                            transition-colors
                            duration-300">
                            {member.name}
                          </span>

                          {/* Audio Mute controller */}
                          <button
                            id={`toggle-mute-r1-${idx}`}
                            onClick={(e) => toggleMute(member.name, e)}
                            className="p-1 rounded-md transition-colors"
                          >
                          </button>
                        </div>

                        <div className="flex items-center justify-between font-sans text-sm text-sea-salt ">
                          <span className="line-clamp-1">{member.role}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Row 2: Left to Right */}
                <div className="flex gap-3 animate-marquee-reverse w-max h-full ">
                  {[...teamMembers.slice(4, 8), ...teamMembers.slice(4, 8)].map((member, idx) => (
                    <button
                      key={`row2-${idx}`}
                      onClick={() => setSelectedMember(member)}
                      className="group relative w-40  h-full shrink-0 cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between p-3 border-sea-salt/20 hover:border-brunswick-green-500 "
                    >
                      <div className="relative h-1/2 w-1/2 rounded-xl overflow-hidden border border-sea-salt self-center">
                        <img
                          src={member.images?.imageDisplay}
                          alt={member.name}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Indicators */}
                      <div className="group space-y-1.5 mt-auto z-10 pt-2 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <div className="flex items-center">
                          <span className="flex-1
                            truncate
                            font-sans
                            text-base
                            font-bold
                            text-sea-salt/90
                            tracking-wide
                            group-hover:text-brunswick-green-500
                            transition-colors
                            duration-300">
                            {member.name}
                          </span>

                          {/* Audio Mute controller */}
                          <button
                            id={`toggle-mute-r2-${idx}`}
                            onClick={(e) => toggleMute(member.name, e)}
                            className="p-1 rounded-md transition-colors"
                          >
                          </button>
                        </div>

                        <div className="flex items-center justify-between font-sans text-sm text-sea-salt ">
                          <span className="line-clamp-1">{member.role}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>


            </div>

            {/* RIGHT: THE BENEFITS LIST */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyUsPoints.map((point, index) => (
                  <div
                    key={index}
                    className="group p-5 rounded-2xl border border-brunswick-green-700 hover:border-brunswick-green-900 transition-all duration-300 space-y-3 cursor-default"
                  >
                    <div className="h-10 w-10 rounded-xl  border border-brunswick-green-500 flex items-center justify-center group-hover:bg-brunswick-green-900 group-hover:border-brunswick-green-900 transition-all shadow-md">
                      {getPillarIcon(index)}
                    </div>
                    <div className="space-y-1">
                      <p className="font-sans text-base sm:text-lg text-sea-salt group-hover:text-brunswick-green-600 transition-colors text-start">
                        {point.title}
                      </p>

                    </div>
                  </div>
                ))}
              </div>

              {/* Visual reassurance */}
              <div className="pt-4 border-t border-sea-salt/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left space-y-0.5">
                  <span className="block text-lg font-semibold text-sea-salt/90">{whyUsCopy.reassuranceTitle}</span>
                  <span className="block text-lg text-sea-salt/80 uppercase tracking-widest font-sans">{whyUsCopy.reassuranceSub}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <MemberModal
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
        Icon={Icon}
        handleSDGClick={handleSDGClick}
      />
    </section>
  );
}
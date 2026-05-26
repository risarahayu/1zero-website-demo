import React, { useState } from "react";
import { teamMembers, whyUsPoints } from "../data";
import { Mic, MicOff, Users, CheckCircle, Flame, Target, Infinity, Video, Laptop, RefreshCw } from "lucide-react";

interface WhyUsProps {
  onOpenBooking: () => void;
}

export default function WhyUs({ onOpenBooking }: WhyUsProps) {
  // Simple interactive features for the mock video call panel
  const [activeSpeakerId, setActiveSpeakerId] = useState<string>("tm-1");
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({
    "tm-1": false,
    "tm-2": true,
    "tm-3": false,
    "tm-4": false
  });

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMutedStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Flame className="h-5 w-5 text-emerald-400" />;
      case 1:
        return <Infinity className="h-5 w-5 text-emerald-400" />;
      case 2:
        return <Users className="h-5 w-5 text-emerald-400" />;
      case 3:
        return <Target className="h-5 w-5 text-emerald-400" />;
      default:
        return <CheckCircle className="h-5 w-5 text-emerald-400" />;
    }
  };

  return (
    <section id="why-us" className="relative py-20 bg-neutral-950/40">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-green-primary/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Title Area */}
        <div className="space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full border border-neutral-800 text-base font-sans  tracking-widest text-brunswick-green-500 mb-[3rem] bg-brunswick-green-500">
            Why 1zero
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl">
            A team built around people, <br />not rigid platforms.
          </h2>
          <p className="max-w-2xl font-sans text-base sm:text-base text-sea-salt leading-relaxed">
            We partner directly with founders and operations executives to craft high-concurrency systems, completely cutting out agency middle-men & communication bureaucracy.
          </p>
        </div>

        {/* Contents split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* LEFT: THE INTERACTIVE VIDEO CALL MOCKUP */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-neutral-900 bg-black/60 p-5 shadow-2xl relative space-y-4">
            {/* Header bar */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-900 text-base font-sans text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">Meet Our Team</span>
              </div>
              <div className="flex items-center gap-1.5 bg-neutral-900 px-2 py-0.5 rounded text-base">
                <Video className="h-3 w-3 text-emerald-400" />
              </div>
            </div>

            {/* Video participants grid */}
            <div className="grid grid-cols-2 gap-3 flex-1">
              {teamMembers.map((member) => {


                return (
                  <div
                    key={member.id}
                    onClick={() => setActiveSpeakerId(member.id)}
                    className="relative aspect-square rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col justify-between p-3 "
                  >

                    <div className="absolute inset-0 rounded-xl border border-brunswick-green-500 shadow-[0_0_20px_rgba(16,185,129,0.12)] animate-pulse pointer-events-none" />
                    <div className="relative h-1/2 w-1/2 rounded-xl overflow-hidden border border-neutral-800 self-center">
                      <img
                        src={member.avatarUrl}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Indicators */}
                    <div className="space-y-1.5 mt-auto z-10 pt-2 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <div className="flex items-center justify-between">
                        <span className="block font-sans text-base font-bold text-white leading-none tracking-wide truncate">
                          {member.name}
                        </span>

                        {/* Audio Mute controller */}
                        <button
                          id={`toggle-mute-${member.id}`}
                          onClick={(e) => toggleMute(member.id, e)}
                          className="p-1 rounded-md transition-colors "
                        >
                        </button>
                      </div>

                      <div className="flex items-center justify-between font-sans text-base text-neutral-500 uppercase">
                        <span>{member.role}</span>
                      </div>
                    </div>


                  </div>
                );
              })}
            </div>



          </div>

          {/* RIGHT: THE BENEFITS LIST */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyUsPoints.map((point, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl border border-neutral-900 bg-neutral-950/20 hover:bg-neutral-950/80 hover:border-brunswick-green-900 transition-all duration-300 space-y-3 cursor-default"
                >
                  <div className="h-10 w-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-brunswick-green-primary group-hover:border-brunswick-green-900 transition-all shadow-md">
                    {getPillarIcon(index)}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-sans font-regular text-[#ede9fe] text-lg tracking-wide group-hover:text-brunswick-green-600 transition-colors">
                      {point.title}
                    </h3>

                  </div>
                </div>
              ))}
            </div>

            {/* Visual reassurance */}
            <div className="pt-4 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left space-y-0.5">
                <span className="block text-base font-semibold text-white">We operate with pristine engineering guidelines.</span>
                <span className="block text-base text-neutral-500 uppercase tracking-widest font-sans">No subcontracting • No technical jargon hiding</span>
              </div>
              <button
                id="why-us-booking-btn"
                onClick={onOpenBooking}
                className="p-3 px-6 rounded-xl bg-green-primary hover:bg-emerald-600 text-black font-sans font-medium text-base transition-colors cursor-pointer block text-center shadow-lg"
              >
                Hire Our Unit &rarr;
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

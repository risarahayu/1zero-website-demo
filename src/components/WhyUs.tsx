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
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Title Area */}
        <div className="space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full border border-neutral-800 text-[10px] font-mono uppercase tracking-widest text-[#a3e635] bg-[#a3e635]/5 shadow-[0_0_12px_rgba(163,230,53,0.1)]">
            Our Purpose
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl">
            A team built around people, <br />not rigid platforms.
          </h2>
          <p className="max-w-2xl font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
            We partner directly with founders and operations executives to craft high-concurrency systems, completely cutting out agency middle-men & communication bureaucracy.
          </p>
        </div>

        {/* Contents split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: THE INTERACTIVE VIDEO CALL MOCKUP */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-neutral-900 bg-black/60 p-5 shadow-2xl relative space-y-4">
            {/* Header bar */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-900 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-white font-medium">LIVE CONSULTATION BRIEF</span>
              </div>
              <div className="flex items-center gap-1.5 bg-neutral-900 px-2 py-0.5 rounded text-[10px]">
                <Video className="h-3 w-3 text-emerald-400" />
                <span>MEETING LIVE</span>
              </div>
            </div>

            <p className="font-sans text-[11px] text-neutral-400 px-1 leading-relaxed">
              We collaborate in tight, real-time cycles. Click on any specialist below to switch the simulated presenting speaker spotlight:
            </p>

            {/* Video participants grid */}
            <div className="grid grid-cols-2 gap-3 flex-1">
              {teamMembers.map((member) => {
                const isSpeaking = activeSpeakerId === member.id;
                const isMuted = mutedStates[member.id];
                
                return (
                  <div
                    key={member.id}
                    onClick={() => setActiveSpeakerId(member.id)}
                    className={`relative aspect-square rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col justify-between p-3 ${
                      isSpeaking 
                        ? "border-emerald-500 bg-neutral-900/60 shadow-[0_0_20px_rgba(16,185,129,0.1)] scale-[1.01]" 
                        : "border-neutral-900 bg-[#0c0c0e] hover:border-neutral-800"
                    }`}
                  >
                    {/* User Avatar with quality parameters */}
                    <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-neutral-800 shrink-0 self-start">
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
                        <span className="block font-display text-[10px] font-bold text-white leading-none tracking-wide truncate">
                          {member.name}
                        </span>
                        
                        {/* Audio Mute controller */}
                        <button
                          id={`toggle-mute-${member.id}`}
                          onClick={(e) => toggleMute(member.id, e)}
                          className={`p-1 rounded-md transition-colors ${
                            isMuted 
                              ? "bg-rose-500/15 text-rose-400 hover:bg-rose-500/35" 
                              : "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                          }`}
                        >
                          {isMuted ? <MicOff className="h-2.5 w-2.5" /> : <Mic className="h-2.5 w-2.5" />}
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between font-mono text-[8px] text-neutral-500 uppercase">
                        <span>{member.role}</span>
                        {isSpeaking && <span className="text-emerald-400 font-bold tracking-widest leading-none">SPEAKING</span>}
                      </div>
                    </div>

                    {/* Presenting green boundary overlay */}
                    {isSpeaking && (
                      <div className="absolute top-2 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom active telemetry stats card */}
            <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="block text-[10px] text-neutral-500 font-mono">ACTIVE PRESENTER</span>
                <span className="block text-white font-medium text-xs">
                  {teamMembers.find(m => m.id === activeSpeakerId)?.name}
                </span>
              </div>
              <div className="flex items-center gap-1 font-mono text-[9px] text-[#a3e635] bg-[#a3e635]/10 px-2 py-0.5 rounded border border-[#a3e635]/20">
                <Laptop className="h-3 w-3" />
                <span>FIBER LATENCY: 14MS</span>
              </div>
            </div>

          </div>

          {/* RIGHT: THE BENEFITS LIST */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyUsPoints.map((point, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl border border-neutral-900 bg-neutral-950/20 hover:bg-neutral-950/80 hover:border-emerald-500/10 transition-all duration-300 space-y-3 cursor-default"
                >
                  <div className="h-10 w-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all shadow-md">
                    {getPillarIcon(index)}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-[#ede9fe] text-sm tracking-wide group-hover:text-emerald-400 transition-colors">
                      {point.title}
                    </h3>
                    <p className="font-sans text-[11px] text-neutral-400 group-hover:text-neutral-300 leading-relaxed transition-colors">
                      {point.descr}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual reassurance */}
            <div className="pt-4 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left space-y-0.5">
                <span className="block text-xs font-semibold text-white">We operate with pristine engineering guidelines.</span>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-widest font-mono">No subcontracting • No technical jargon hiding</span>
              </div>
              <button
                id="why-us-booking-btn"
                onClick={onOpenBooking}
                className="p-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-display font-medium text-xs transition-colors cursor-pointer block text-center shadow-lg"
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

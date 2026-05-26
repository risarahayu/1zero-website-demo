import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { products } from "../data";
import { Terminal, Lightbulb, RefreshCw, Cpu, ArrowUpRight, Code, ShieldCheck } from "lucide-react";

interface ProductsProps {
  onOpenBooking: () => void;
}

export default function Products({ onOpenBooking }: ProductsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const ambientY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const ambientOpacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0.12, 0.65, 0.65, 0.12]);

  const getIcon = (id: string) => {
    switch (id) {
      case "prod-devpod":
        return <Terminal className="h-6 w-6 text-emerald-400" />;
      case "prod-gro":
        return <Lightbulb className="h-6 w-6 text-emerald-400" />;
      case "prod-nextgen":
        return <RefreshCw className="h-6 w-6 text-emerald-400 animate-spin-slow" />;
      case "prod-icio":
        return <ShieldCheck className="h-6 w-6 text-emerald-400" />;
      default:
        return <Code className="h-6 w-6 text-emerald-400" />;
    }
  };

  const sectionY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 28, 0, -18]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15, 0.6, 1], [0.82, 1, 1, 0.88]);

  return (
    <section ref={sectionRef} id="services" className="relative -mt-28 pt-28 pb-28 bg-transparent overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_30%)]"
        style={{ y: ambientY, opacity: ambientOpacity }}
      />
      <div className="absolute inset-x-0 -top-24 h-28 bg-gradient-to-b from-neutral-950/95 to-transparent opacity-95" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-950/95 shadow-[0_50px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          style={{ y: sectionY, opacity: sectionOpacity }}
        >
          <div className="absolute -top-12 left-1/2 h-24 w-72 -translate-x-1/2 rounded-full bg-green-primary/10 blur-3xl" />
          <div className="absolute top-8 right-8 h-24 w-24 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative space-y-12 px-6 py-12 sm:px-10 sm:py-14">
            {/* Head Area */}
            <div className="text-center space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full border border-neutral-800 text-base font-mono  tracking-widest text-brunswick-green-500 mb-[3rem] bg-[#a3e635]/5 shadow-[0_0_12px_rgba(163,230,53,0.1)]">
                Our Product
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Core Technical Ecosystems
              </h2>
              <p className="max-w-xl mx-auto font-sans text-base sm:text-sm text-neutral-400">
                Highly optimized, production-hardened models designed to deploy smoothly or integrate instantly with your organization's digital workflow.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {products.map((p, index) => (
                <div
                  key={p.id}
                  className="group relative flex flex-col justify-between p-6 rounded-3xl border border-neutral-900 bg-neutral-950/60 hover:bg-neutral-950/90 transition-all duration-300 shadow-2xl overflow-hidden cursor-pointer hover:border-brunswick-green-500"
                  onClick={onOpenBooking}
                >
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-xl bg-neutral-900 border border-neutral-800/80 flex items-center justify-center group-hover:bg-brunswick-green-primary/10 group-hover:border-brunswick-green-500 transition-colors">
                        {getIcon(p.id)}
                      </div>
                      <span className="font-mono text-[9px] uppercase text-neutral-600 bg-neutral-900/40 px-2 py-0.5 rounded-md">
                        MODULE 0{index + 1}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {p.title}
                      </h3>
                      <p className="font-sans text-base text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-950/80 mt-6 flex items-center justify-between">
                    <span className="font-sans text-base font-semibold text-neutral-300 group-hover:text-white transition-colors">
                      {p.linkText}
                    </span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-neutral-500 group-hover:bg-green-primary group-hover:text-black transition-all">
                      <ArrowUpRight className="h-4 w-4 transform group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

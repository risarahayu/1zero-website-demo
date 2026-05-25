import { products } from "../data";
import { Terminal, Lightbulb, RefreshCw, Cpu, ArrowUpRight, Code, ShieldCheck } from "lucide-react";

interface ProductsProps {
  onOpenBooking: () => void;
}

export default function Products({ onOpenBooking }: ProductsProps) {
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

  return (
    <section id="services" className="relative py-20 bg-neutral-950/20">
      {/* Outer Glow */}
      <div className="absolute bottom-0 right-10 -z-10 h-72 w-72 rounded-full aurora-blur-2 blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Head Area */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full border border-neutral-800 text-[10px] font-mono uppercase tracking-widest text-[#a3e635] bg-[#a3e635]/5 shadow-[0_0_12px_rgba(163,230,53,0.1)]">
            Our Product
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Core Technical Ecosystems
          </h2>
          <p className="max-w-xl mx-auto font-sans text-xs sm:text-sm text-neutral-400">
            Highly optimized, production-hardened models designed to deploy smoothly or integrate instantly with your organization's digital workflow.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {products.map((p, index) => (
            <div
              key={p.id}
              className="group relative flex flex-col justify-between p-6 rounded-2xl border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-950/80 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer hover:border-emerald-500/30"
              onClick={onOpenBooking}
            >
              {/* Animated corner accent glow */}
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  {/* Icon */}
                  <div className="h-12 w-12 rounded-xl bg-neutral-900 border border-neutral-800/80 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                    {getIcon(p.id)}
                  </div>
                  
                  {/* Badge */}
                  <span className="font-mono text-[9px] uppercase text-neutral-600 bg-neutral-900/40 px-2 py-0.5 rounded-md">
                    MODULE 0{index + 1}
                  </span>
                </div>

                {/* Info block */}
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Action trigger row */}
              <div className="pt-6 border-t border-neutral-950/80 mt-6 flex items-center justify-between">
                <span className="font-sans text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">
                  {p.linkText}
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-neutral-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <ArrowUpRight className="h-4 w-4 transform group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

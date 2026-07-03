import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { products } from "../data";
import { productsCopy } from "../copy";
import { Terminal, BrainCircuit, RefreshCw, Cpu, ArrowUpRight, Code, ShieldCheck, Download, PanelsTopLeft, Users, UserStar } from "lucide-react";

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
      case "devpod":
        return <Users className="h-6 w-6 text-brunswick-green-500" />;
      case "geo":
        return <BrainCircuit className="h-6 w-6 text-brunswick-green-500" />;
      case "nextgen":
        return <PanelsTopLeft className="h-6 w-6 text-brunswick-green-500 animate-spin-slow" />;
      case "fcto":
        return <UserStar className="h-6 w-6 text-brunswick-green-500" />;
      default:
        return <Code className="h-6 w-6 text-brunswick-green-500" />;
    }
  };

  const sectionY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 28, 0, -18]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15, 0.6, 1], [0.82, 1, 1, 0.88]);

  return (
    <section ref={sectionRef} id="services" className="relative  bg-transparent overflow-hidden pb-16">
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rounded-[2.5rem] border border-sea-salt/10 py-16 ">


        {/* <div className="relative space-y-10 px-6 py-16 sm:px-10 sm:py-16"> */}
        {/* Head Area */}
        <div className="text-center space-y-10">
          <span className="inline-block px-3.5 py-2 rounded-full border border-brunswick-500 text-lg font-sans uppercase tracking-widest text-brunswick-green-500  bg-raisin-black">
            {productsCopy.badge}
          </span>
          <div className="space-y-6">
            <h2 className="font-sans text-2xl sm:text-4xl font-bold tracking-tight text-sea-salt">
              {productsCopy.title}
            </h2>
            <p className="max-w-xl mx-auto font-sans text-lg sm:text-lg text-sea-salt/90">
              {productsCopy.description}
            </p>
          </div>
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {products.map((p, index) => (
              <div
                key={p.id}
                className="text-start space-y-6 group relative flex flex-col justify-between p-6 rounded-3xl border border-brunswick-green-500  hover:border-brunswick-green-900 transition-all duration-300 shadow-2xl overflow-hidden cursor-pointer backdrop-blur bg-sea-salt/6"

              >
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-brunswick-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl border border-brunswick-green-500 flex items-center justify-center group-hover:bg-brunswick-green-500/10 group-hover:border-brunswick-green-500 transition-colors">
                      {getIcon(p.id)}
                    </div>

                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans text-xl md:text-2xl font-bold text-sea-salt group-hover:text-brunswick-green-500 transition-colors">
                      {p.service}
                    </h3>
                    <p className="font-sans text-lg text-sea-salt group-hover:text-sea-salt/90 transition-colors leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-sea-salt/20 flex items-center justify-end gap-6 pt-6">
                  <a href={p.fileEng} download className="flex h-7 w-7 items-center justify-center rounded-full bg-sea-salt/20 text-sea-salt hover:bg-brunswick-green-900 hover:text-sea-salt transition-all">
                    <Download className="h-4 w-4 transform transition-transform" />
                  </a>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sea-salt/20 text-sea-salt hover:bg-brunswick-green-900 hover:text-sea-salt transition-all">
                    <ArrowUpRight className="h-4 w-4 transform hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* </div> */}
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const yImage = useTransform(scrollY, [0, 500], [0, 50]);
  const opacityIndicator = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-100" />
      
      {/* 1. Large Faded Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.span 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[45vw] font-black text-white leading-none tracking-tighter"
          >
            SAÏD
          </motion.span>
        </div>

      {/* 2. Centered Portrait with Fade Mask */}
      <div className="relative w-full h-full flex items-end justify-center z-20 flex-grow pt-20">
        <motion.div
          style={{ y: yImage }}
          className="relative w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[1000px] h-[75vh] md:h-[85vh] mask-fade-bottom"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1746597689538-1769736766387.png"
              alt="Saïd Taaroust"
              fill
              className="object-contain object-bottom"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* 3. Huge White Text at Bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 select-none overflow-hidden pb-4 md:pb-8">
        <motion.h1 
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-[17vw] font-black text-white leading-[0.75] tracking-tighter text-center whitespace-nowrap"
        >
          SAÏD TAAROUST
        </motion.h1>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity: opacityIndicator }}
        className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-2 z-50"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}

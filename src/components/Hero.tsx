"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);
  const yText = useTransform(scrollY, [0, 500], [0, -50]);
  const opacityIndicator = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      
      {/* 1. Large Faded Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[35vw] font-black text-white leading-none tracking-tighter"
        >
          STAFF
        </motion.span>
      </div>

      {/* 2. Main Hero Content (Grid) */}
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center flex-grow">
        {/* Left: Info & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y: yText }}
          className="max-w-2xl relative z-30"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[2px] bg-white" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/90">
              About Us
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white mb-12 font-medium leading-relaxed max-w-xl"
          >
            Je sais ce que c'est que de lutter dans le monde de l'entreprise. 
            Il y a des années, j'ai fait face aux mêmes défis — 
            <span className="text-white font-black italic"> confusion, doutes, manque de clarté.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-black/80 rounded-full px-10 py-8 text-lg font-bold group transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
            >
              Réserver un appel gratuit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Person Portrait */}
        <div className="relative h-[70vh] lg:h-[85vh] flex items-end justify-center">
          <motion.div
            style={{ y: yImage }}
            className="relative w-full h-full flex items-end justify-center z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1746597689538-1769736766387.png"
                alt="Saïd Taaroust"
                fill
                className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 3. Huge White Text at Bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-40 select-none overflow-hidden pb-4 md:pb-8 lg:pb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-[15vw] font-black text-white leading-[0.8] tracking-tighter text-center whitespace-nowrap"
        >
          STAFF AFFAIRES
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

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const yBackground = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Huge Background Text */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0"
      >
        <span className="text-[30vw] font-black text-white/[0.03] leading-none tracking-tighter">
          STAF
        </span>
      </motion.div>

      {/* Animated Particles/Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center flex-grow justify-end pb-12">
        {/* Portrait Container */}
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[800px] h-full"
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

        {/* Massive White Text */}
        <div className="relative z-20 w-full mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] font-black text-white leading-none tracking-tighter text-center"
          >
            STAF AFFAIRES
          </motion.h1>
        </div>

        {/* Bottom Left Content (About Us) */}
        <div className="w-full grid lg:grid-cols-2 gap-12 items-end relative z-30">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-xl bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-white" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                À propos
              </span>
            </div>

            <p className="text-xl md:text-2xl text-white mb-10 font-medium leading-tight">
              Je sais ce que c'est que de lutter dans le monde de l'entreprise. 
              Il y a des années, j'ai fait face aux mêmes défis : 
              <span className="text-white/70 italic"> confusion, doutes, manque de clarté.</span>
            </p>

            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-7 text-lg font-bold group transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
            >
              Réserver un appel gratuit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 right-10 flex flex-col items-center gap-2 z-40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}


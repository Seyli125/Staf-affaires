"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
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

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-sm font-bold uppercase tracking-widest text-primary/80">
              Coaching B2B de Haute Performance
            </span>
          </motion.div>

          <motion.h1 
            style={{ y: y2 }}
            className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8"
          >
            STAF <br />
            <span className="text-stroke">AFFAIRES</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-10 font-medium leading-relaxed max-w-xl"
          >
            Je sais ce que c'est que de lutter dans le monde de l'entreprise. 
            Il y a des années, j'ai fait face aux mêmes défis : 
            <span className="text-primary font-bold"> confusion, doutes, manque de clarté.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-7 text-lg font-bold group transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-primary/20"
            >
              Réserver un appel gratuit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          style={{ y: y1, scale }}
          className="relative aspect-square lg:aspect-[4/5] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1746597689538-1769736766387.png"
              alt="Saïd Taaroust"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 blur-2xl rounded-full" />
          <div className="absolute top-10 -left-10 w-20 h-20 bg-brand-orange/20 blur-xl rounded-full" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}

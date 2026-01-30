"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
    const yHeroText = useTransform(scrollY, [0, 500], [0, 100]);
    const yImage = useTransform(scrollY, [0, 600], [0, -100]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0.3]);
    const opacityImage = useTransform(scrollY, [0, 500], [1, 0]);
    const scaleImage = useTransform(scrollY, [0, 500], [1, 0.9]);

  return (
    <section 
      ref={containerRef}
      className="relative flex flex-col items-center overflow-hidden"
    >
      {/* 1. Main Visual Hero Area */}
      <div className="relative w-full h-[85vh] md:h-[95vh] flex flex-col items-center justify-center hero-gradient px-6 overflow-hidden">
        {/* Background Massive Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-bg-massive font-black text-white whitespace-nowrap"
          >
            SAID
          </motion.h1>
        </div>

        {/* Main Person Image */}
        <motion.div
          style={{ y: yImage, opacity: opacityImage, scale: scaleImage }}
          className="relative w-full h-full max-w-4xl z-10 flex items-center justify-center mt-20"
        >
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
            }}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1746597689538-1769736766387.png"
              alt="Saïd Taaroust"
              width={1200}
              height={1200}
              className="object-contain h-full w-auto drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Massive Foreground Name */}
        <div className="absolute bottom-10 left-0 w-full z-20 overflow-hidden px-4">
            <motion.h2 
              style={{ opacity: opacityText, y: yHeroText }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-massive font-black text-white text-center leading-[0.9] md:leading-[1.1] tracking-tighter"
            >
              Saïd Taaroust
            </motion.h2>
        </div>
      </div>

      {/* 2. About Us Section (Visual Flow) */}
      <div className="w-full bg-white pt-24 pb-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-primary" />
              <span className="text-sm font-bold uppercase tracking-widest text-primary/80">
                À propos
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight tracking-tight">
              Je sais ce que c'est que de lutter dans le monde de l'entreprise. 
              Il y a des années, j'ai fait face aux mêmes défis : 
              <span className="text-muted-foreground font-medium italic"> confusion, doutes, manque de clarté.</span>
            </h3>

            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-7 text-lg font-bold group transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
            >
              Réserver un appel gratuit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Secondary Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl -rotate-3" />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1746597689538-1769736766387.png"
              alt="Saïd Taaroust Portrait"
              width={600}
              height={600}
              className="object-cover h-full w-full rounded-3xl filter grayscale opacity-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

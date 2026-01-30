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
      <div className="relative w-full h-[85vh] md:h-[95vh] flex flex-col items-center justify-center hero-gradient px-6">
          {/* Background Massive Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.05, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="text-bg-massive font-black text-white whitespace-nowrap"
            >
              SAÏD
            </motion.h1>
          </div>

        {/* Main Person Image */}
        <motion.div
          style={{ y: yImage, opacity: opacityImage, scale: scaleImage }}
          className="relative w-full h-[85%] max-w-4xl z-10 flex items-center justify-center mt-24"
        >
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
            }}
          >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/a258b3e3-0205-4bf5-95de-0163cb732922/1746597689538_LE_up_cale_prime_wipe_bg-1769742333185.png?width=8000&height=8000&resize=contain"
                alt="Saïd Taaroust"
                width={1200}
                height={1200}
                className="object-contain h-full w-auto drop-shadow-2xl"
                priority
              />
          </div>
        </motion.div>

        {/* Massive Foreground Content */}
        <div className="absolute bottom-12 left-0 w-full z-20 px-4">
              <motion.div
                style={{ opacity: opacityText, y: yHeroText }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="max-w-6xl mx-auto text-center"
              >
                <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-6">
                  Performer sans s'épuiser.<br />
                  <span className="text-brand-orange">Manager et vendre avec sens.</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 max-w-3xl mx-auto">
                  Coach certifié RNCP | Formateur | Expert en développement commercial depuis 25 ans
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-brand-orange text-white hover:bg-brand-orange/90 rounded-full px-10 py-8 text-xl font-bold group transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
                  >
                    Prendre rendez-vous
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
        </div>
      </div>
    </section>
  );
}

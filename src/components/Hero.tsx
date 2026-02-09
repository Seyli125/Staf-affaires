"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
      <div className="relative w-full min-h-[85vh] md:min-h-[95vh] flex flex-col items-center justify-center hero-gradient px-4 sm:px-6">
        {/* Background Massive Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
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
          className="relative w-full h-[70vh] sm:h-[75vh] md:h-[85%] max-w-4xl z-10 flex items-center justify-center mt-16 sm:mt-20 md:mt-24"
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

          {/* Massive Foreground Name - Auto-scaling for mobile, positioned higher */}
          <div className="absolute bottom-[15%] sm:bottom-[12%] md:bottom-[10%] left-0 w-full z-20 px-2 sm:px-4">
            <motion.h2 
              style={{ opacity: opacityText, y: yHeroText }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-massive font-black text-white text-center leading-[1] tracking-tighter uppercase whitespace-nowrap"
            >
              SAÏD TAAROUST
            </motion.h2>
          </div>
      </div>

      {/* 2. About Us Section (Visual Flow) */}
      <div className="w-full bg-transparent pt-12 sm:pt-16 md:pt-24 pb-16 sm:pb-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-10 h-[2px] bg-primary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary/80">
                À propos
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 leading-[1.1] tracking-tight text-brand-navy">
              Performer sans s'épuiser. <br className="hidden sm:block" />
              <span className="text-brand-orange">Manager et vendre avec sens.</span>
            </h3>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-6 sm:mb-8 text-slate-600 leading-relaxed max-w-xl">
              Coach certifié RNCP | Formateur | Expert en développement commercial depuis 25 ans
            </p>

            <Link href="/prendre-rendez-vous">
              <Button 
                size="lg" 
                className="bg-brand-navy text-white hover:bg-brand-navy/90 rounded-full px-6 sm:px-10 py-6 sm:py-8 text-base sm:text-lg md:text-xl font-bold group transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl w-full sm:w-auto"
              >
                Prendre rendez-vous
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Right Secondary Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-brand-orange/5 rounded-2xl sm:rounded-3xl -rotate-3" />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/a258b3e3-0205-4bf5-95de-0163cb732922/1746597689538_LE_up_cale_prime_wipe_bg-1769742333185.png?width=8000&height=8000&resize=contain"
              alt="Saïd Taaroust Portrait"
              width={600}
              height={600}
              className="object-cover h-full w-full rounded-2xl sm:rounded-3xl filter grayscale opacity-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

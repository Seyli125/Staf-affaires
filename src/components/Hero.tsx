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

{/* Massive Foreground Name - Auto-scaling for mobile */}
            <div className="absolute bottom-[3%] sm:bottom-[8%] md:bottom-[10%] left-0 w-full z-20 px-2 sm:px-4">
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

        {/* 2. About Us Section - Compact */}
        <div className="w-full bg-transparent pt-10 sm:pt-14 pb-12 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-[2px] bg-brand-orange" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-brand-orange">
                  À propos
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-tight text-brand-navy">
                Performer sans s'épuiser. <br className="hidden sm:block" />
                <span className="text-brand-orange">Manager et vendre avec sens.</span>
              </h3>

              <p className="text-sm sm:text-base font-medium mb-5 text-slate-500 leading-relaxed max-w-lg">
                Coach certifié RNCP | Formateur | Expert en développement commercial depuis 25 ans
              </p>

              <Link href="/prendre-rendez-vous">
                <Button 
                  size="lg" 
                  className="bg-brand-navy text-white hover:bg-brand-orange rounded-full px-6 py-3 text-sm font-semibold group transition-all shadow-lg w-full sm:w-auto"
                >
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Right - Photo portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative max-w-xs mx-auto order-1 md:order-2"
            >
              <div className="absolute inset-0 bg-brand-orange/10 rounded-2xl -rotate-3 scale-95" />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/said-portrait-1.jpg"
                  alt="Saïd Taaroust Portrait"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>
    </section>
  );
}

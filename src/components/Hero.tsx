"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const yHeroText = useTransform(scrollY, [0, 500], [0, 80]);
  const yImage = useTransform(scrollY, [0, 600], [0, -60]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const opacityImage = useTransform(scrollY, [0, 500], [1, 0]);
  const scaleImage = useTransform(scrollY, [0, 500], [1, 0.92]);

  return (
    <section 
      ref={containerRef}
      className="relative flex flex-col items-center overflow-hidden"
    >
      {/* Main Visual Hero Area */}
      <div className="relative w-full min-h-[88vh] md:min-h-[92vh] flex flex-col items-center justify-center hero-gradient px-4 sm:px-6">
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Background Massive Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.04, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-bg-massive font-black text-white whitespace-nowrap"
          >
            SAÏD
          </motion.h1>
        </div>

        {/* Main Person Image */}
        <motion.div
          style={{ y: yImage, opacity: opacityImage, scale: scaleImage }}
          className="relative w-full h-[65vh] sm:h-[70vh] md:h-[78vh] max-w-3xl z-10 flex items-center justify-center mt-16 sm:mt-20"
        >
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
            }}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/a258b3e3-0205-4bf5-95de-0163cb732922/1746597689538_LE_up_cale_prime_wipe_bg-1769742333185.png?width=8000&height=8000&resize=contain"
              alt="Saïd Taaroust"
              width={1000}
              height={1000}
              className="object-contain h-full w-auto drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Massive Foreground Name */}
        <div className="absolute bottom-[5%] sm:bottom-[8%] md:bottom-[10%] left-0 w-full z-20 px-2 sm:px-4">
          <motion.h2 
            style={{ opacity: opacityText, y: yHeroText }}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-massive font-black text-white text-center leading-[0.95] tracking-tighter uppercase whitespace-nowrap"
          >
            SAÏD TAAROUST
          </motion.h2>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* About Section - Premium minimal */}
      <div className="w-full bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="grid md:grid-cols-[1fr_280px] gap-10 md:gap-14 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="order-2 md:order-1"
            >
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[2px] bg-brand-orange mb-6"
              />
              
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange mb-4 block">
                À propos
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-[1.15] text-brand-navy">
                Performer sans s'épuiser.
                <span className="block text-brand-orange mt-1">Manager et vendre avec sens.</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6 max-w-lg">
                Coach certifié RNCP • Formateur • Expert en développement commercial depuis 25 ans. 
                Une approche unique qui allie performance durable et équilibre personnel.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
<Link href="/prendre-rendez-vous">
                    <Button 
                      size="lg" 
                      className="hero-cta bg-brand-navy text-white hover:bg-brand-orange rounded-full px-6 py-3 text-sm font-semibold group transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto animate-attention"
                    >
                      Prendre rendez-vous
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="rounded-full px-6 py-3 text-sm font-semibold border-2 border-slate-200 text-slate-600 hover:border-brand-navy hover:text-brand-navy transition-all duration-300 w-full sm:w-auto"
                >
                  <Play className="mr-2 w-4 h-4" />
                  Voir la vidéo
                </Button>
              </div>
            </motion.div>

            {/* Right - Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative order-1 md:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-3 border border-brand-orange/20 rounded-2xl" />
                <div className="absolute -inset-6 border border-slate-100 rounded-3xl" />
                
                {/* Main image */}
                <div className="relative w-[200px] sm:w-[220px] aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/said-portrait-1.jpg"
                    alt="Saïd Taaroust Portrait"
                    fill
                    className="object-cover object-top"
                    sizes="220px"
                  />
                </div>
                
{/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="absolute -bottom-4 -right-4 bg-brand-navy text-white px-4 py-2 rounded-lg shadow-lg animate-subtle-float cursor-default"
                  >
                    <span className="text-xs font-bold">25+ ans</span>
                    <span className="text-[10px] block text-white/70">d'expertise</span>
                  </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

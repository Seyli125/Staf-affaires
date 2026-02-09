"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play, ArrowRight, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

// Premium easing curve
const premiumEase = [0.25, 0.4, 0.25, 1] as const;

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.5], [0.97, 1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.3], [0.85, 1]);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 sm:px-6 overflow-visible">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
        {/* Left Content - Compact */}
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="lg:sticky lg:top-20"
          >
            <div className="flex items-center gap-1.5 mb-4">
              <motion.div
                animate={{ rotate: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Video className="w-3 h-3 text-brand-orange" />
              </motion.div>
              <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                Immersion & Méthode
              </span>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}
              className="text-lg sm:text-xl md:text-2xl font-bold text-brand-navy leading-tight mb-4"
            >
              La preuve <br />
              <span className="text-brand-orange">par l'impact</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
              className="text-[10px] text-slate-500 leading-relaxed mb-4"
            >
              Découvrez en vidéo comment l'approche STAF AFFAIRES transforme le leadership et la croissance des entreprises B2B.
            </motion.p>

            {/* Philosophical touch */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: premiumEase }}
              className="text-[9px] italic text-slate-400 mb-4 border-l-2 border-brand-orange/30 pl-2"
            >
              "Les mots inspirent, l'action transforme."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: premiumEase }}
            >
              <Button 
                variant="outline" 
                className="rounded-full border-2 border-brand-navy text-brand-navy font-semibold hover:bg-brand-navy hover:text-white transition-all duration-300 px-4 py-2 text-[10px] group"
              >
                Plus de vidéos
                <ArrowRight className="ml-1.5 w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Video Area - Compact */}
        <div className="lg:w-2/3 w-full">
          <motion.div
            style={{ scale: videoScale, opacity: videoOpacity }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="relative group"
          >
            {/* Main Video Frame */}
            <motion.div 
              className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-brand-navy"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5, ease: premiumEase }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
                alt="Saïd Taaroust en conférence"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.5, ease: premiumEase }}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-xl relative z-10 cursor-pointer"
                >
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                  <motion.div 
                    className="absolute inset-0 bg-brand-orange rounded-full"
                    animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.button>
              </div>

              {/* Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45, duration: 0.5, ease: premiumEase }}
                  >
                    <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">Performer sans s'épuiser</h3>
                    <p className="text-white/60 text-[9px] font-medium">Session Masterclass - Paris 2025</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55, duration: 0.5, ease: premiumEase }}
                    className="flex -space-x-1.5"
                  >
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-5 h-5 rounded-full border-2 border-brand-navy bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-5 h-5 rounded-full border-2 border-brand-navy bg-brand-orange flex items-center justify-center text-[6px] font-bold text-white">
                      +1k
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats - Compact */}
            <motion.div
              initial={{ opacity: 0, x: 25, y: 15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6, ease: premiumEase }}
              whileHover={{ scale: 1.04, y: -3 }}
              className="absolute -bottom-3 -right-3 bg-white p-3 sm:p-4 rounded-lg shadow-lg hidden lg:block border border-slate-100"
            >
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-brand-navy leading-none">98%</span>
                <span className="text-[7px] font-medium uppercase tracking-wider text-slate-400 mt-0.5">Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

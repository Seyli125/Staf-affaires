"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play, ArrowRight, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 sm:px-6 overflow-visible">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        {/* Left Content */}
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-2 mb-5">
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Video className="w-4 h-4 text-brand-orange" />
              </motion.div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Immersion & Méthode
              </span>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy leading-tight mb-5"
            >
              La preuve <br />
              <span className="text-brand-orange">par l'impact</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-slate-500 leading-relaxed mb-6"
            >
              Découvrez en vidéo comment l'approche STAF AFFAIRES transforme le leadership et la croissance des entreprises B2B.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button 
                variant="outline" 
                className="rounded-full border-2 border-brand-navy text-brand-navy font-semibold hover:bg-brand-navy hover:text-white transition-all duration-300 px-5 py-2.5 text-sm group"
              >
                Plus de vidéos
                <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Video Area */}
        <div className="lg:w-2/3 w-full">
          <motion.div
            style={{ scale: videoScale, opacity: videoOpacity }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative group"
          >
            {/* Main Video Frame */}
            <motion.div 
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-brand-navy"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
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
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-2xl relative z-10 cursor-pointer"
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
                  <motion.div 
                    className="absolute inset-0 bg-brand-orange rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.button>
              </div>

              {/* Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">Performer sans s'épuiser</h3>
                    <p className="text-white/60 text-xs font-medium">Session Masterclass - Paris 2025</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex -space-x-2"
                  >
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-brand-navy bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-7 h-7 rounded-full border-2 border-brand-navy bg-brand-orange flex items-center justify-center text-[8px] font-bold text-white">
                      +1k
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-4 -right-4 bg-white p-4 sm:p-5 rounded-xl shadow-xl hidden lg:block border border-slate-100"
            >
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-brand-navy leading-none">98%</span>
                <span className="text-[9px] font-medium uppercase tracking-wider text-slate-400 mt-1">Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

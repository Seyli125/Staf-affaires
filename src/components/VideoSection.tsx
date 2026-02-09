"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play, ArrowRight, Video, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const smoothSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 30,
  mass: 1
};

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);
  const contentX = useTransform(scrollYProgress, [0, 0.3], [-30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 sm:px-6 overflow-visible">
      <motion.div 
        className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14"
        style={{ opacity }}
      >
        {/* Left Content - Better proportioned */}
        <motion.div 
          className="lg:w-2/5"
          style={{ x: contentX }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothSpring }}
            className="lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-2 mb-5">
              <Video className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Immersion & Méthode
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-5">
              La preuve <br />
              <span className="text-brand-orange">par l'impact</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-6">
              Découvrez en vidéo comment l'approche STAF AFFAIRES transforme le leadership et la croissance des entreprises B2B.
            </p>

            {/* Philosophical quote */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border-l-2 border-brand-orange pl-4 mb-8"
            >
              <p className="text-sm italic text-slate-600">
                "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès."
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                className="rounded-full border-2 border-brand-navy text-brand-navy font-semibold hover:bg-brand-navy hover:text-white transition-all duration-300 px-6 py-3 text-base group"
              >
                Plus de vidéos
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Video Area - Better proportioned */}
        <motion.div 
          className="lg:w-3/5 w-full"
          style={{ scale: videoScale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...smoothSpring, delay: 0.2 }}
            className="relative group"
          >
            {/* Main Video Frame */}
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-brand-navy">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
                alt="Saïd Taaroust en conférence"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-18 h-18 sm:w-22 sm:h-22 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-2xl relative z-10"
                >
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
                  <motion.div 
                    className="absolute inset-0 bg-brand-orange rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.button>
              </div>

              {/* Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-transparent">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Performer sans s'épuiser</h3>
                    <p className="text-white/60 text-sm font-medium">Session Masterclass - Paris 2025</p>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="w-8 h-8 rounded-full border-2 border-brand-navy bg-slate-200 overflow-hidden"
                      >
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                      </motion.div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-brand-navy bg-brand-orange flex items-center justify-center text-[9px] font-bold text-white">
                      +1k
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="absolute -bottom-5 -right-5 bg-white p-5 sm:p-6 rounded-2xl shadow-xl hidden lg:block border border-slate-100"
            >
              <div className="flex flex-col items-center">
                <Sparkles className="w-4 h-4 text-brand-orange mb-1" />
                <span className="text-3xl sm:text-4xl font-bold text-brand-navy leading-none">98%</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 mt-1">Satisfaction</span>
              </div>
            </motion.div>

            {/* Additional floating element */}
            <motion.div
              initial={{ opacity: 0, y: -20, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.5 }}
              className="absolute -top-4 -left-4 bg-brand-navy text-white p-3 rounded-xl shadow-xl hidden lg:flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold">Live disponible</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

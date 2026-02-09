"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ArrowRight, Video, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-[2px] bg-brand-orange mb-6"
            />
            
            <div className="flex items-center gap-2 mb-4">
              <Video className="w-4 h-4 text-brand-orange" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                Immersion & Méthode
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-5">
              La preuve{" "}
              <span className="text-brand-orange">par l'impact</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-6 max-w-md">
              Découvrez en vidéo comment l'approche STAF AFFAIRES transforme 
              le leadership et la croissance des entreprises B2B.
            </p>

            {/* Quote */}
            <div className="relative pl-5 border-l-2 border-brand-orange/30 mb-8">
              <p className="text-sm italic text-slate-600 leading-relaxed">
                "Le succès n'est pas la clé du bonheur. 
                Le bonheur est la clé du succès."
              </p>
              <span className="text-xs text-brand-orange font-medium mt-2 block">
                — Albert Schweitzer
              </span>
            </div>

            <Button 
              variant="outline" 
              className="rounded-full border-2 border-brand-navy text-brand-navy font-semibold hover:bg-brand-navy hover:text-white transition-all duration-300 px-6 py-3 text-sm group"
            >
              Plus de vidéos
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Video Area */}
          <motion.div 
            style={{ y, scale }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative group"
            >
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-brand-orange/10 rounded-3xl" />
              
              {/* Main Video Frame */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-brand-navy">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
                  alt="Saïd Taaroust en conférence"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="video-play-btn relative"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                    </div>
                    <span className="absolute inset-0 bg-brand-orange rounded-full animate-ping opacity-20" />
                    <span className="absolute inset-[-8px] border-2 border-white/20 rounded-full" />
                  </button>
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Performer sans s'épuiser</h3>
                      <p className="text-white/60 text-sm font-medium">Session Masterclass — Paris 2025</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div 
                            key={i} 
                            className="w-8 h-8 rounded-full border-2 border-brand-navy bg-slate-200 overflow-hidden"
                          >
                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-brand-navy bg-brand-orange flex items-center justify-center">
                        <span className="text-[9px] font-bold text-white">+1k</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner badge */}
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Live disponible
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-xl border border-slate-100 hidden lg:block"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-navy">98%</div>
                  <div className="text-xs font-medium text-slate-400 mt-1">Satisfaction</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsPlaying(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setIsPlaying(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
            {/* Placeholder for actual video */}
            <div className="w-full h-full flex items-center justify-center text-white/50">
              <p>Vidéo en cours de chargement...</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

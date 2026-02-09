"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Play, ArrowRight, Video, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 sm:px-6 overflow-visible">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
        {/* Left Content - Compact, better proportioned */}
        <motion.div 
          className="lg:w-[38%]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-2 mb-4">
              <Video className="w-3.5 h-3.5 text-brand-orange" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Immersion & Méthode
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight mb-4">
              La preuve <br />
              <span className="text-brand-orange">par l'impact</span>
            </h2>
            
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-5">
              Découvrez en vidéo comment l'approche STAF AFFAIRES transforme le leadership et la croissance des entreprises B2B.
            </p>

            {/* Philosophical quote */}
            <div className="border-l-2 border-brand-orange pl-3 mb-6">
              <p className="text-xs italic text-slate-600">
                "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès."
              </p>
            </div>

            <Button 
              variant="outline" 
              className="rounded-full border-2 border-brand-navy text-brand-navy font-semibold hover:bg-brand-navy hover:text-white transition-all duration-200 px-5 py-2.5 text-sm group"
            >
              Plus de vidéos
              <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Right Video Area - Compact */}
        <motion.div 
          className="lg:w-[62%] w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative group">
            {/* Main Video Frame */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-brand-navy">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
                alt="Saïd Taaroust en conférence"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="video-play-btn w-16 h-16 sm:w-18 sm:h-18 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-xl relative z-10">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-0.5" />
                  <span className="absolute inset-0 bg-brand-orange rounded-full animate-ping opacity-30" />
                </button>
              </div>

              {/* Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-transparent">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">Performer sans s'épuiser</h3>
                    <p className="text-white/60 text-xs font-medium">Session Masterclass - Paris 2025</p>
                  </div>
                  <div className="flex -space-x-1.5">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className="w-7 h-7 rounded-full border-2 border-brand-navy bg-slate-200 overflow-hidden"
                      >
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-7 h-7 rounded-full border-2 border-brand-navy bg-brand-orange flex items-center justify-center text-[8px] font-bold text-white">
                      +1k
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg hidden lg:block border border-slate-100"
            >
              <div className="flex flex-col items-center">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange mb-1" />
                <span className="text-2xl font-bold text-brand-navy leading-none">98%</span>
                <span className="text-[9px] font-medium uppercase tracking-wider text-slate-400 mt-0.5">Satisfaction</span>
              </div>
            </motion.div>

            {/* Live badge */}
            <div className="absolute -top-3 -left-3 bg-brand-navy text-white p-2 rounded-lg shadow-lg hidden lg:flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[10px] font-semibold">Live disponible</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
